# Newsletter Feed

A system for downloading, organizing, and processing newsletter emails from Gmail, generating weekly analysis reports, and emailing styled summaries.

## Quick Commands

### Sync Newsletters (Full Workflow)
When asked to "sync newsletters" or "update newsletters", use the `newsletter-sync` agent:

```
Task({
  subagent_type: "newsletter-sync",
  prompt: "Sync newsletters for this week",
  run_in_background: true  // Optional: run in background
})
```

The agent handles the complete workflow:
1. Downloads new emails from Gmail
2. Initializes new newsletter senders
3. Processes emails into content
4. Launches parallel `weekly-newsletter-analyst` agents for each category
5. Generates weekly rollup index
6. Updates README.md
7. Commits and pushes changes

Both agents use Sonnet by default for speed. Override with `model: "opus"` if needed.

### Manual Workflow (if not using agents)
If you need to run steps manually:

1. **Load Gmail skill:** `/gmail`
2. **Download:** `npx tsx scripts/download-emails.ts --days=7 --max=200`
3. **Init senders:** `npx tsx scripts/init-newsletters.ts`
4. **Process:** `npx tsx scripts/process-newsletters.ts`
5. **Summarize:** Launch `weekly-newsletter-analyst` agents per category
6. **Rollup:** Create `week/{week}/index.md`
7. **Update README.md**
8. **Commit and push**

### Email a Weekly Report
To email one report:
```bash
npx tsx ~/.claude/plugins/cache/focus-marketplace/google-skill/*/scripts/gmail.ts send-md \
  --to="recipient@example.com" \
  --file="./week/03/tech-ai.md" \
  --style="client"
```

To email all reports for a week, iterate through `week/{week_number}/*.md` files and send each one (except index.md).

**Style options:**
- `--style=client` - Focus.AI Client brand (warm, professional)
- `--style=labs` - Focus.AI Labs brand (bold, experimental)

The `send-md` command:
- Converts markdown to email-safe HTML with inline styles
- Uses table-based layout (680px max width) for email client compatibility
- Extracts subject from first H1 if `--subject` not provided
- Supports tables, blockquotes, code blocks, lists, and links

## Directory Structure

```
raw/                              # Raw .eml files by ISO week
  03/                             # Week 03 emails
    email-id-1.eml
    email-id-2.eml

newsletters/                      # Newsletter definitions
  newsletter-name.md              # YAML frontmatter with name, category, email_patterns

content/                          # Processed articles by category/newsletter
  tech-ai/
    turing-post/
      2026-01-15-article-title.md
    semianalysis/
      2026-01-15-another-article.md
  politics/
    ...

week/                             # Weekly synthesis reports
  03/                             # Week 03 folder
    index.md                      # Week 03 combined rollup
    tech-ai.md                    # Week 03 tech-ai analysis
    politics.md                   # Week 03 politics analysis
    culture.md                    # Week 03 culture analysis
```

## Scripts

### download-emails.ts
Downloads emails from Gmail with the "Newsletters" label.
```bash
npx tsx scripts/download-emails.ts [options]
  --days=7      # Days back to fetch (default: 7)
  --max=200     # Max emails (default: 200)
  --label=X     # Gmail label (default: Newsletters)
```

### init-newsletters.ts
Creates newsletter definition files for new senders found in raw/.
```bash
npx tsx scripts/init-newsletters.ts
```

### categorize-newsletter.ts
Uses Claude API to auto-categorize newsletters based on sample content.
```bash
npx tsx scripts/categorize-newsletter.ts           # Uncategorized only
npx tsx scripts/categorize-newsletter.ts --all     # Re-categorize all
npx tsx scripts/categorize-newsletter.ts --dry-run # Preview changes
```

### process-newsletters.ts
Converts raw emails to organized markdown with frontmatter.
```bash
npx tsx scripts/process-newsletters.ts [options]
  --force       # Reprocess existing files
  --week=03     # Process specific week only
```

## Newsletter Definitions

Each newsletter has a file in `newsletters/`:

```markdown
---
name: "Newsletter Name"
category: tech-ai
email_patterns:
  - sender@example.com
  - other-sender@example.com
author: Optional Author
url: https://optional-url.com
---

Optional description of the newsletter.
```

**Categories:** tech-ai, politics, culture, books, philosophy, science, personal, misc, uncategorized

## Article Frontmatter

Processed articles include:
```yaml
---
id: email-message-id
newsletter: newsletter-slug
newsletter_name: "Newsletter Name"
category: tech-ai
subject: "Article Subject Line"
date: Thu, 15 Jan 2026 18:54:50 +0000
source_url: "https://link-to-view-online"
---
```

## Weekly Report Format

Weekly summaries follow this structure. **CRITICAL: Every newsletter name must be a hyperlink to its source_url.**

```markdown
# Week XX {Category} Newsletter Analysis (Date Range)

## Overview
Brief synthesis linking to sources. Example: "This week, [Turing Post](https://turingpost.com/p/xyz) covered AI partnerships while [SemiAnalysis](https://newsletter.semianalysis.com/p/abc) analyzed infrastructure."

---

## Major Topics and Stories

### 1. Topic Name
**Coverage:** [Newsletter1](source_url1), [Newsletter2](source_url2), [Newsletter3](source_url3)

Context and analysis. Every newsletter reference is a hyperlink.

> "Direct quote from newsletter" — [Author/Newsletter Name](source_url)

---

## Cross-Newsletter Patterns
Themes across sources. All newsletter names hyperlinked.

## Sources
- [Article Title](source_url) — Newsletter Name
- [Article Title](source_url) — Newsletter Name
```

**Linking Rules:**
- Every newsletter name = hyperlink to source_url from article frontmatter
- Every quote attribution = hyperlink to source
- Sources section = all articles with clickable original URLs
- Zero plain-text newsletter names allowed

## Agents

This project has two custom agents in `.claude/agents/`:

### newsletter-sync
**Model:** Sonnet (fast)
**Purpose:** Full orchestration workflow

Handles the complete newsletter sync pipeline:
- Downloads emails from Gmail
- Initializes new newsletter senders
- Processes emails into content
- Launches parallel category summary agents
- Generates weekly rollup index
- Updates README.md
- Commits and pushes

```
Task({
  subagent_type: "newsletter-sync",
  prompt: "Sync newsletters for the current week"
})
```

### weekly-newsletter-analyst
**Model:** Sonnet (fast)
**Purpose:** Single category analysis

Analyzes newsletter content for one category and generates a comprehensive report:
- Reads all articles in `content/{category}/*/` for the target week
- Extracts themes, key stories, quotes with source links
- Saves report to `week/{week}/{category}.md`

```
Task({
  subagent_type: "weekly-newsletter-analyst",
  prompt: "Generate Week 05 tech-ai analysis. Read content/tech-ai/*/ for week 05. Save to week/05/tech-ai.md"
})
```

Both agents default to Sonnet. Override with `model: "opus"` if deeper reasoning is needed.

---

## Gmail Setup

Requires gmail-skill plugin authentication:
```bash
npx tsx ~/.claude/plugins/cache/focus-marketplace/google-skill/*/scripts/gmail.ts check
```

If not authenticated, run `/gmail` to set up credentials.

---

## Beads Integration

This project uses beads for issue tracking.

**BEFORE ANYTHING ELSE:** run `bd onboard` and follow the instructions

**Session close protocol:**
```bash
git status
git add <files>
bd sync
git commit -m "..."
bd sync
git push
```
