---
title: "Dynamic GitHub Markdown Renderer with Focus Labs Branding"
date: 2026-01-17
topic: github-markdown-renderer
recommendation: Next.js App Router with Server-Side Proxy and react-markdown
version_researched: Next.js 15, react-markdown 9.x
use_when:
  - Rendering markdown from ANY GitHub repository URL at runtime
  - Single deployment that works with any repo — no rebuilds
  - Need consistent Focus Labs branding across all content
  - Want a "paste URL, see branded content" experience
avoid_when:
  - You control the content repos and want maximum performance (use ISR)
  - Content is private (requires auth token handling)
project_context:
  language: TypeScript
  relevant_dependencies: []
---

## Summary

For a **fully dynamic renderer** that accepts any GitHub repository URL without rebuilding or redeploying, the architecture is:

1. **URL-based routing**: User visits `/render?url=https://github.com/user/repo/blob/main/README.md`
2. **Server-side proxy**: Next.js API route fetches raw markdown (bypasses CORS)
3. **Runtime rendering**: `react-markdown` transforms markdown → branded React components
4. **Caching layer**: Short TTL cache to avoid hammering GitHub

This is fundamentally different from ISR/static generation — you're building a **markdown viewer service**, not a content site[1][2].

**Key insight**: The browser can't fetch `raw.githubusercontent.com` directly due to CORS. Your Next.js server acts as a proxy, fetching the content server-to-server (no CORS), then rendering it with your branding[3].

**Architecture:**
```
User URL → Next.js Route → Parse GitHub URL → Fetch via jsDelivr/API →
  → react-markdown + custom components → Focus Labs styled HTML
```

## Philosophy & Mental Model

### It's a Viewer, Not a Site

You're building something like:
- **Grip** (GitHub README preview)[4]
- **raw.githack.com** (CDN proxy for GitHub)[5]
- **StackBlitz/CodeSandbox** (renders any repo)

The mental model: **one deployment, infinite repositories**.

### The Proxy Pattern

```
Browser → Your Server → GitHub → Your Server → Browser
         (same origin)   (server-to-server, no CORS)
```

Your server is a trusted intermediary that:
1. Parses the GitHub URL to extract owner/repo/path
2. Fetches raw content from GitHub (or CDN)
3. Renders with your branding
4. Returns styled HTML

### URL Parsing is Critical

GitHub URLs come in many formats:
- `https://github.com/user/repo/blob/main/README.md`
- `https://github.com/user/repo/tree/main/docs`
- `https://raw.githubusercontent.com/user/repo/main/file.md`

Your parser must normalize all of these to a fetchable raw URL.

## Setup

### 1. Create Next.js Project

```bash
npx create-next-app@latest markdown-viewer --typescript --tailwind --app
cd markdown-viewer
```

### 2. Install Dependencies

```bash
npm install react-markdown remark-gfm rehype-slug rehype-highlight
npm install @tailwindcss/typography
```

Note: We use `react-markdown` instead of `next-mdx-remote` because we're rendering plain markdown (not MDX with imports), and it's simpler for runtime rendering[6].

### 3. Configure Tailwind with Focus Labs Theme

```ts
// tailwind.config.ts
import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'paper': '#f3f2ea',
        'void': '#1a1a1a',
        'rand-blue': '#0055aa',
        'alert-red': '#d93025',
        'surface': '#e6e4dc',
        'page-bg': '#e8e6df',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Courier Prime', 'monospace'],
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': '#1a1a1a',
            '--tw-prose-headings': '#1a1a1a',
            '--tw-prose-links': '#0055aa',
            '--tw-prose-quote-borders': '#d93025',
            'h1, h2, h3': { fontWeight: '900' },
            'h2': { textTransform: 'uppercase' },
            'a': { textUnderlineOffset: '4px' },
            'blockquote': { borderLeftColor: '#d93025', fontStyle: 'normal' },
            'code': { fontFamily: 'Courier Prime, monospace' },
          },
        },
      },
    },
  },
  plugins: [typography],
}

export default config
```

## Core Usage Patterns

### Pattern 1: GitHub URL Parser

```ts
// lib/github.ts
export interface GitHubFile {
  owner: string
  repo: string
  branch: string
  path: string
}

export function parseGitHubUrl(url: string): GitHubFile | null {
  try {
    const parsed = new URL(url)

    // Handle raw.githubusercontent.com
    // https://raw.githubusercontent.com/owner/repo/branch/path/to/file.md
    if (parsed.hostname === 'raw.githubusercontent.com') {
      const [, owner, repo, branch, ...pathParts] = parsed.pathname.split('/')
      return { owner, repo, branch, path: pathParts.join('/') }
    }

    // Handle github.com/owner/repo/blob/branch/path
    if (parsed.hostname === 'github.com') {
      const [, owner, repo, type, branch, ...pathParts] = parsed.pathname.split('/')
      if (type === 'blob' || type === 'tree') {
        return { owner, repo, branch, path: pathParts.join('/') }
      }
      // Handle github.com/owner/repo (assumes README.md on main)
      if (!type) {
        return { owner, repo, branch: 'main', path: 'README.md' }
      }
    }

    return null
  } catch {
    return null
  }
}

export function toRawUrl(file: GitHubFile): string {
  // Use jsDelivr for better caching and CORS support
  return `https://cdn.jsdelivr.net/gh/${file.owner}/${file.repo}@${file.branch}/${file.path}`
}

export function toGitHubApiUrl(file: GitHubFile): string {
  // Fallback: GitHub API (requires auth for higher rate limits)
  return `https://api.github.com/repos/${file.owner}/${file.repo}/contents/${file.path}?ref=${file.branch}`
}
```

### Pattern 2: Server-Side Fetch Route (The Proxy)

```ts
// app/api/fetch-markdown/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { parseGitHubUrl, toRawUrl } from '@/lib/github'

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get('url')

  if (!url) {
    return NextResponse.json({ error: 'Missing url parameter' }, { status: 400 })
  }

  const file = parseGitHubUrl(url)
  if (!file) {
    return NextResponse.json({ error: 'Invalid GitHub URL' }, { status: 400 })
  }

  try {
    // Try jsDelivr first (fast CDN, good caching)
    const rawUrl = toRawUrl(file)
    const res = await fetch(rawUrl, {
      next: { revalidate: 300 }, // Cache for 5 minutes
    })

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status}`)
    }

    const markdown = await res.text()

    return NextResponse.json({
      markdown,
      meta: {
        owner: file.owner,
        repo: file.repo,
        branch: file.branch,
        path: file.path,
        fetchedFrom: rawUrl,
      },
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch markdown', details: String(error) },
      { status: 500 }
    )
  }
}
```

### Pattern 3: Dynamic Render Page

```tsx
// app/render/page.tsx
import { Suspense } from 'react'
import { MarkdownRenderer } from '@/components/MarkdownRenderer'
import { FocusLabsLayout } from '@/components/FocusLabsLayout'

interface Props {
  searchParams: Promise<{ url?: string }>
}

export default async function RenderPage({ searchParams }: Props) {
  const { url } = await searchParams

  if (!url) {
    return (
      <FocusLabsLayout title="GitHub Markdown Viewer">
        <UrlInputForm />
      </FocusLabsLayout>
    )
  }

  return (
    <FocusLabsLayout title="Loading...">
      <Suspense fallback={<LoadingSkeleton />}>
        <MarkdownFetcher url={url} />
      </Suspense>
    </FocusLabsLayout>
  )
}

async function MarkdownFetcher({ url }: { url: string }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/fetch-markdown?url=${encodeURIComponent(url)}`,
    { cache: 'no-store' } // Always fresh for user-provided URLs
  )

  if (!res.ok) {
    const error = await res.json()
    return <ErrorDisplay message={error.error} />
  }

  const { markdown, meta } = await res.json()

  return (
    <>
      <RepoHeader meta={meta} />
      <MarkdownRenderer content={markdown} />
    </>
  )
}

function UrlInputForm() {
  return (
    <form action="/render" method="get" className="space-y-4">
      <label className="block">
        <span className="font-mono text-xs uppercase tracking-wider text-gray-600">
          GitHub URL
        </span>
        <input
          type="url"
          name="url"
          placeholder="https://github.com/user/repo/blob/main/README.md"
          className="mt-2 w-full px-4 py-3 border border-void bg-white font-mono text-sm"
          required
        />
      </label>
      <button
        type="submit"
        className="bg-rand-blue text-white px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider hover:bg-opacity-90"
      >
        Render
      </button>
    </form>
  )
}
```

### Pattern 4: react-markdown with Custom Components

```tsx
// components/MarkdownRenderer.tsx
'use client'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeHighlight from 'rehype-highlight'
import type { Components } from 'react-markdown'

const components: Components = {
  h1: ({ children }) => (
    <h1 className="text-4xl md:text-5xl font-black text-void mb-8 leading-tight">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-2xl font-black uppercase text-void mt-12 mb-4 border-b-2 border-void pb-2">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl font-bold text-void mt-8 mb-3">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="mb-4 leading-relaxed">{children}</p>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-rand-blue underline underline-offset-4 decoration-2 hover:text-[#003d7a]"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-alert-red pl-6 py-2 my-6 bg-surface/50">
      {children}
    </blockquote>
  ),
  code: ({ className, children }) => {
    const isInline = !className
    if (isInline) {
      return (
        <code className="font-mono bg-surface px-1.5 py-0.5 rounded text-sm text-void">
          {children}
        </code>
      )
    }
    return (
      <code className={className}>{children}</code>
    )
  },
  pre: ({ children }) => (
    <pre className="bg-void text-paper p-6 rounded overflow-x-auto font-mono text-sm my-6">
      {children}
    </pre>
  ),
  ul: ({ children }) => (
    <ul className="list-disc pl-6 mb-4 space-y-2">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal pl-6 mb-4 space-y-2">{children}</ol>
  ),
  table: ({ children }) => (
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse border border-void">
        {children}
      </table>
    </div>
  ),
  th: ({ children }) => (
    <th className="border border-void bg-surface px-4 py-2 text-left font-bold font-mono text-xs uppercase">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border border-void px-4 py-2">{children}</td>
  ),
  img: ({ src, alt }) => (
    <img
      src={src}
      alt={alt || ''}
      className="max-w-full h-auto rounded border border-void my-4"
    />
  ),
  hr: () => <hr className="border-t-2 border-void my-8" />,
}

interface Props {
  content: string
}

export function MarkdownRenderer({ content }: Props) {
  return (
    <article className="prose prose-lg max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSlug, rehypeHighlight]}
        components={components}
      >
        {content}
      </ReactMarkdown>
    </article>
  )
}
```

### Pattern 5: Focus Labs Layout Wrapper

```tsx
// components/FocusLabsLayout.tsx
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  title: string
}

export function FocusLabsLayout({ children, title }: Props) {
  return (
    <main className="bg-page-bg min-h-screen">
      <div className="max-w-5xl mx-auto py-8 md:py-16 px-4">
        <div className="bg-paper border border-void shadow-[10px_10px_0px_0px_rgba(0,0,0,0.1)]">
          {/* Header */}
          <header className="flex border-b border-void">
            <div className="w-16 md:w-20 bg-rand-blue flex items-center justify-center py-8 shrink-0">
              <span className="text-white font-mono text-[10px] -rotate-90 whitespace-nowrap tracking-[0.3em]">
                FOCUS.AI LABS
              </span>
            </div>
            <div className="flex-1 p-6 md:p-8">
              <h1 className="text-2xl md:text-4xl font-black text-void leading-tight">
                {title}
              </h1>
            </div>
          </header>

          {/* Content */}
          <div className="p-6 md:p-12">
            {children}
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-8 text-center font-mono text-xs text-gray-500">
          Rendered with Focus.AI Labs
        </footer>
      </div>
    </main>
  )
}
```

### Pattern 6: Repo Header Component

```tsx
// components/RepoHeader.tsx
interface Meta {
  owner: string
  repo: string
  branch: string
  path: string
}

export function RepoHeader({ meta }: { meta: Meta }) {
  const githubUrl = `https://github.com/${meta.owner}/${meta.repo}/blob/${meta.branch}/${meta.path}`

  return (
    <div className="mb-8 p-4 bg-surface border border-void font-mono text-xs">
      <div className="flex flex-wrap gap-x-6 gap-y-2">
        <span>
          <span className="text-gray-500">REPO:</span>{' '}
          <a href={`https://github.com/${meta.owner}/${meta.repo}`} className="text-rand-blue hover:underline">
            {meta.owner}/{meta.repo}
          </a>
        </span>
        <span>
          <span className="text-gray-500">BRANCH:</span> {meta.branch}
        </span>
        <span>
          <span className="text-gray-500">PATH:</span> {meta.path}
        </span>
      </div>
      <div className="mt-2">
        <a href={githubUrl} className="text-rand-blue hover:underline" target="_blank" rel="noopener">
          View on GitHub →
        </a>
      </div>
    </div>
  )
}
```

## Anti-Patterns & Pitfalls

### Don't: Fetch Directly from Browser

```tsx
// BAD: CORS will block this
async function fetchMarkdown(url: string) {
  const res = await fetch(url) // Fails due to CORS
  return res.text()
}
```

**Why it's wrong:** `raw.githubusercontent.com` doesn't send CORS headers for all origins. The browser blocks the request[3].

### Instead: Use Server-Side Proxy

```tsx
// GOOD: Fetch via your API route
async function fetchMarkdown(url: string) {
  const res = await fetch(`/api/fetch-markdown?url=${encodeURIComponent(url)}`)
  return res.json()
}
```

---

### Don't: Trust User URLs Without Validation

```tsx
// BAD: Could fetch anything, including internal services
const res = await fetch(userProvidedUrl)
```

**Why it's wrong:** SSRF (Server-Side Request Forgery) vulnerability. User could point to internal services, localhost, etc.

### Instead: Validate and Whitelist Domains

```tsx
// GOOD: Only allow GitHub URLs
const file = parseGitHubUrl(userProvidedUrl)
if (!file) {
  return { error: 'Only GitHub URLs are supported' }
}
// Now construct the fetch URL yourself
const safeUrl = toRawUrl(file)
```

---

### Don't: Ignore Rate Limits

```tsx
// BAD: No caching, will hit rate limits fast
const res = await fetch(rawUrl)
```

**Why it's wrong:** GitHub rate limits unauthenticated requests to 60/hour[7].

### Instead: Use jsDelivr CDN + Cache

```tsx
// GOOD: jsDelivr CDN with Next.js cache
const rawUrl = `https://cdn.jsdelivr.net/gh/${owner}/${repo}@${branch}/${path}`
const res = await fetch(rawUrl, {
  next: { revalidate: 300 } // 5 min cache
})
```

jsDelivr caches GitHub content on their CDN and has no rate limits for public repos[5].

---

### Don't: Render Untrusted HTML

```tsx
// BAD: XSS vulnerability
<div dangerouslySetInnerHTML={{ __html: markdown }} />
```

**Why it's wrong:** If the markdown contains malicious HTML/scripts, they execute in your domain.

### Instead: Use react-markdown (Safe by Default)

```tsx
// GOOD: react-markdown sanitizes by default
<ReactMarkdown>{markdown}</ReactMarkdown>
```

react-markdown uses remark/rehype which don't pass through raw HTML by default[6].

## Why This Choice

### Decision Criteria

| Criterion | Weight | How This Architecture Scored |
|-----------|--------|------------------------------|
| **Any URL, no rebuild** | Critical | ✅ Fully dynamic — paste any GitHub URL |
| **CORS handling** | High | ✅ Server-side proxy bypasses CORS |
| **Branding customization** | High | ✅ Full control via react-markdown components |
| **Performance** | Medium | ⚠️ Runtime fetch, but jsDelivr CDN + caching helps |
| **Rate limits** | Medium | ✅ jsDelivr CDN avoids GitHub limits |
| **Security** | High | ✅ URL validation, safe markdown rendering |

### Key Factors

- **jsDelivr as the secret weapon**: Instead of hitting GitHub directly, we use jsDelivr's CDN which mirrors GitHub repos with proper CORS headers and no rate limits for public content[5].

- **Server-side proxy is mandatory**: Browser CORS restrictions make direct fetching impossible. The Next.js API route acts as a trusted intermediary[2].

- **react-markdown for runtime safety**: Unlike MDX compilation, react-markdown works with plain markdown strings at runtime, perfect for user-provided content[6].

## Alternatives Considered

### GitHub's Markdown API

- **What it is:** POST markdown to `api.github.com/markdown`, get rendered HTML
- **Why not chosen:** Rate limited (60/hr unauth), returns GitHub-styled HTML (not Focus Labs)
- **Choose this instead when:** You want exact GitHub rendering
- **Key tradeoff:** GitHub styling vs. custom branding

### Cloudflare Worker Proxy

- **What it is:** Edge function that proxies GitHub raw content
- **Why not chosen:** Additional infrastructure; Next.js API routes work fine
- **Choose this instead when:** You need global edge performance at scale
- **Key tradeoff:** More infrastructure vs. simpler architecture

### Client-Side Only (with CORS Proxy)

- **What it is:** Use a public CORS proxy like `cors-anywhere`
- **Why not chosen:** Unreliable third-party dependency, rate limits, security concerns[3]
- **Choose this instead when:** You can't deploy a backend at all
- **Key tradeoff:** No backend required vs. reliability/security

## Caveats & Limitations

- **Private repos require auth**: This architecture works for public repos. For private repos, you'd need to pass a GitHub token, which has security implications.

- **Large files may timeout**: Very large markdown files could cause timeouts. Consider adding a size limit check.

- **Images may not load**: Relative image paths in markdown won't resolve correctly. You'd need to rewrite image URLs to absolute GitHub raw URLs.

- **No directory browsing**: This renders single files. To browse a repo's directory structure, you'd need additional GitHub API calls.

- **jsDelivr caching delay**: jsDelivr caches content aggressively. Recent commits may take a few minutes to appear.

## References

[1] [Next.js Proxy API Routes Guide](https://blog.nextsaaspilot.com/nextjs-proxy-api-route/) - Patterns for proxying external APIs

[2] [Next.js Getting Started: Proxy](https://nextjs.org/docs/app/getting-started/proxy) - Official proxy documentation

[3] [CORS and raw.githubusercontent.com Discussion](https://github.com/orgs/community/discussions/69281) - Community discussion on CORS issues

[4] [Grip - GitHub README Previewer](https://github.com/joeyespo/grip) - Inspiration for local markdown preview

[5] [jsDelivr CDN](https://www.jsdelivr.com/github) - CDN for GitHub with CORS support

[6] [react-markdown](https://github.com/remarkjs/react-markdown) - Safe markdown rendering for React

[7] [GitHub API Rate Limits](https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api) - Rate limit documentation

[8] [raw.githack.com](https://raw.githack.com/) - Alternative CDN for GitHub raw files

[9] [Tailwind Typography](https://github.com/tailwindlabs/tailwindcss-typography) - Typography plugin for prose styling

---

**TL;DR**: Deploy once, render any GitHub markdown URL with Focus Labs branding. Server proxies GitHub content (via jsDelivr CDN), react-markdown renders with custom components, Tailwind Typography handles base styling.
