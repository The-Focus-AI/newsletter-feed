#!/usr/bin/env npx tsx
/**
 * Process raw .eml files into organized markdown content.
 *
 * - Reads newsletter definitions from newsletters/*.md
 * - Reads per-email classification sidecars (.classification.json) and skips
 *   anything not classified as "editorial"
 * - Writes markdown to content/{week}/{newsletter-id}/{date}-{slug}.md
 *
 * Usage: npx tsx scripts/process-newsletters.ts [--force] [--week=17]
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync } from 'fs';
import { join, basename } from 'path';

const RAW_DIR = './raw';
const CONTENT_DIR = './content';
const NEWSLETTERS_DIR = './newsletters';

const args = process.argv.slice(2);
const hasFlag = (name: string) => args.includes(`--${name}`);
const getArg = (name: string, def?: string) => {
  const arg = args.find(a => a.startsWith(`--${name}=`));
  return arg ? arg.split('=')[1] : def;
};

const FORCE = hasFlag('force');
const WEEK = getArg('week');

interface Newsletter {
  id: string;
  name: string;
  email_patterns: string[];
  author?: string;
  url?: string;
}

interface Classification {
  kind: 'editorial' | 'promotional' | 'transactional';
  confidence?: number;
  reason?: string;
}

function parseFrontmatter(content: string): Record<string, any> {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};

  const yaml = match[1];
  const result: Record<string, any> = {};
  let currentKey = '';
  let inArray = false;
  let arrayValues: string[] = [];

  for (const line of yaml.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    if (trimmed.startsWith('- ')) {
      if (inArray) arrayValues.push(trimmed.substring(2).trim());
    } else if (trimmed.includes(':')) {
      if (inArray && currentKey) {
        result[currentKey] = arrayValues;
        arrayValues = [];
        inArray = false;
      }
      const colonIdx = trimmed.indexOf(':');
      const key = trimmed.substring(0, colonIdx).trim();
      const value = trimmed.substring(colonIdx + 1).trim();
      if (value === '') {
        currentKey = key;
        inArray = true;
        arrayValues = [];
      } else {
        result[key] = value.replace(/^["']|["']$/g, '');
      }
    }
  }
  if (inArray && currentKey) result[currentKey] = arrayValues;
  return result;
}

function loadNewsletters(): Newsletter[] {
  if (!existsSync(NEWSLETTERS_DIR)) return [];
  const newsletters: Newsletter[] = [];
  for (const file of readdirSync(NEWSLETTERS_DIR).filter(f => f.endsWith('.md'))) {
    try {
      const content = readFileSync(join(NEWSLETTERS_DIR, file), 'utf-8');
      const data = parseFrontmatter(content);
      if (data.name && data.email_patterns) {
        newsletters.push({
          id: basename(file, '.md'),
          name: data.name,
          email_patterns: data.email_patterns,
          author: data.author,
          url: data.url,
        });
      }
    } catch (err) {
      console.error(`Error loading ${file}: ${err}`);
    }
  }
  return newsletters;
}

function findNewsletter(newsletters: Newsletter[], fromEmail: string): Newsletter | null {
  const email = fromEmail.toLowerCase();
  for (const n of newsletters) {
    for (const pattern of n.email_patterns) {
      if (email.includes(pattern.toLowerCase())) return n;
    }
  }
  return null;
}

function extractEmail(from: string): string {
  const match = from.match(/<([^>]+)>/);
  return match ? match[1] : from;
}

function slugify(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').substring(0, 60);
}

function formatDate(dateStr: string): string {
  try {
    return new Date(dateStr).toISOString().split('T')[0];
  } catch {
    return new Date().toISOString().split('T')[0];
  }
}

function extractViewLink(html: string): string | null {
  if (!html) return null;
  const patterns = [
    /href="([^"]+)"[^>]*>\s*(?:View|Read)\s+(?:in|this|online|on the web|in browser|email online)[^<]*/i,
    /(?:View|Read)\s+(?:in|this|online|on the web|in browser)[^<]*<\/[^>]+>\s*<\/[^>]+>\s*<a[^>]+href="([^"]+)"/i,
    /href="([^"]*(?:view|mailchi|campaign-archive)[^"]*)"/i,
  ];
  for (const pattern of patterns) {
    const match = html.match(pattern);
    if (match && match[1]) {
      const url = match[1];
      if (!url.includes('unsubscribe') && !url.includes('pixel') && !url.includes('track')) {
        return url;
      }
    }
  }
  return null;
}

function extractArticleUrl(body: string, subject: string): string | null {
  if (!body) return null;
  const subjectKeywords = subject
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .split(/\s+/)
    .filter(w => w.length > 3 && !/^\d+$/.test(w));
  const idMatch = subject.match(/([A-Z]+)#?(\d+)/i);
  const subjectId = idMatch ? (idMatch[1] + idMatch[2]).toLowerCase() : null;

  const platformPatterns = [
    /https:\/\/[a-z0-9-]+\.substack\.com\/p\/[a-z0-9-]+/gi,
    /https:\/\/(?:www\.)?(?:turingpost\.com|latent\.space|platformer\.news|semianalysis\.com|simonwillison\.net)\/p\/[a-z0-9-]+/gi,
    /https:\/\/[a-z0-9-]+\.beehiiv\.com\/p\/[a-z0-9-]+/gi,
    /https:\/\/(?:www\.)?[a-z0-9.-]+\/p\/[a-z0-9-]+/gi,
  ];

  const candidates: string[] = [];
  for (const pattern of platformPatterns) {
    for (const match of body.matchAll(pattern)) {
      const url = match[0];
      if (url.includes('subscribe') || url.includes('unsubscribe') ||
          url.includes('/cdn-cgi/') || url.includes('media.beehiiv.com')) continue;
      candidates.push(url);
    }
  }
  if (candidates.length === 0) return null;

  const unique = [...new Set(candidates.map(u => u.split('?')[0]))];
  if (subjectId) {
    const m = unique.find(url => url.toLowerCase().includes(subjectId));
    if (m) return m;
  }
  for (const url of unique) {
    const urlPath = url.split('/').pop() || '';
    const urlWords = urlPath.toLowerCase().split('-');
    const matchCount = subjectKeywords.filter(kw => urlWords.some(uw => uw.includes(kw) || kw.includes(uw))).length;
    if (matchCount >= 2) return url;
  }
  return unique[0];
}

function extractSourceUrl(html: string, body: string, subject: string): string | null {
  return extractViewLink(html) ?? extractArticleUrl(body, subject);
}

function htmlToText(html: string): string {
  if (!html) return '';
  return html
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<\/p>/gi, '\n\n')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/div>/gi, '\n')
    .replace(/<\/li>/gi, '\n')
    .replace(/<\/h[1-6]>/gi, '\n\n')
    .replace(/<\/tr>/gi, '\n')
    .replace(/<a[^>]+href=["']([^"']+)["'][^>]*>([^<]+)<\/a>/gi, '[$2]($1)')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/g, "'")
    .replace(/&#(\d+);/g, (_m, code) => String.fromCharCode(parseInt(code, 10)))
    .replace(/\r\n/g, '\n')
    .replace(/[ \t]+/g, ' ')
    .replace(/\n /g, '\n')
    .replace(/ \n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function cleanContent(body: string): string {
  if (!body) return '';
  return body
    .replace(/\[ https:\/\/substack\.com\/redirect\/[^\]]+\]/g, '')
    .replace(/\[ (https?:\/\/[^\]]+) \], \[ \1 \]/g, '[$1]')
    .replace(/\r\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .replace(/[\u200B-\u200D\uFEFF]/g, '')
    .replace(/͏/g, '')
    .replace(/­/g, '')
    .trim();
}

function readClassification(emlPath: string): Classification | null {
  const sidecar = emlPath.replace(/\.eml$/, '.classification.json');
  if (!existsSync(sidecar)) return null;
  try {
    return JSON.parse(readFileSync(sidecar, 'utf-8'));
  } catch {
    return null;
  }
}

function ensureContentFolder(week: string, newsletterId: string): string {
  const dir = join(CONTENT_DIR, week, newsletterId);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  return dir;
}

interface ProcessResult {
  status: 'processed' | 'skipped-existing' | 'skipped-non-editorial' | 'unclassified' | 'unknown-sender';
  email?: string;
  kind?: string;
}

function processEmail(newsletters: Newsletter[], week: string, emlPath: string): ProcessResult {
  const data = JSON.parse(readFileSync(emlPath, 'utf-8'));
  const fromEmail = extractEmail(data.from || '');
  const newsletter = findNewsletter(newsletters, fromEmail);

  if (!newsletter) return { status: 'unknown-sender', email: fromEmail };

  const classification = readClassification(emlPath);
  if (!classification) return { status: 'unclassified', email: fromEmail };
  if (classification.kind !== 'editorial') {
    return { status: 'skipped-non-editorial', kind: classification.kind };
  }

  const newsletterDir = ensureContentFolder(week, newsletter.id);
  const dateStr = formatDate(data.date);
  const slug = slugify(data.subject || 'untitled');
  const outputPath = join(newsletterDir, `${dateStr}-${slug}.md`);

  if (existsSync(outputPath) && !FORCE) return { status: 'skipped-existing' };

  let rawContent = data.body || data.text || '';
  if (!rawContent && data.htmlBody) rawContent = htmlToText(data.htmlBody);
  if (!rawContent) rawContent = data.snippet || '';
  const content = cleanContent(rawContent);

  const extractedUrl = extractSourceUrl(data.htmlBody || '', data.body || '', data.subject || '');
  const sourceUrl = extractedUrl || newsletter.url || '';
  const sourceLine = sourceUrl ? `\n**Source:** [View original](${sourceUrl})` : '';

  const markdown = `---
id: ${data.id}
newsletter: ${newsletter.id}
newsletter_name: "${newsletter.name}"
week: ${week}
subject: "${(data.subject || '').replace(/"/g, '\\"')}"
date: ${data.date}${sourceUrl ? `\nsource_url: "${sourceUrl}"` : ''}
---

# ${data.subject}

**From:** ${data.from}
**Date:** ${data.date}${sourceLine}

---

${content}
`;

  writeFileSync(outputPath, markdown);
  return { status: 'processed' };
}

function processWeek(newsletters: Newsletter[], week: string) {
  const weekDir = join(RAW_DIR, week);
  if (!existsSync(weekDir)) {
    console.log(`Week ${week} not found`);
    return;
  }

  const counts = { processed: 0, existing: 0, dropped: 0, unclassified: 0, unknown: 0 };
  const droppedByKind: Record<string, number> = {};
  const unknownSenders = new Set<string>();

  for (const file of readdirSync(weekDir).filter(f => f.endsWith('.eml'))) {
    const emlPath = join(weekDir, file);
    try {
      const result = processEmail(newsletters, week, emlPath);
      switch (result.status) {
        case 'processed':
          counts.processed++;
          const data = JSON.parse(readFileSync(emlPath, 'utf-8'));
          console.log(`  ✓ ${data.subject?.substring(0, 60)}`);
          break;
        case 'skipped-existing':
          counts.existing++;
          break;
        case 'skipped-non-editorial':
          counts.dropped++;
          droppedByKind[result.kind!] = (droppedByKind[result.kind!] || 0) + 1;
          break;
        case 'unclassified':
          counts.unclassified++;
          break;
        case 'unknown-sender':
          counts.unknown++;
          if (result.email) unknownSenders.add(result.email);
          break;
      }
    } catch (err: any) {
      console.error(`  Error: ${file}: ${err.message}`);
    }
  }

  console.log(`\nWeek ${week}:`);
  console.log(`  Processed (editorial): ${counts.processed}`);
  console.log(`  Already existed: ${counts.existing}`);
  console.log(`  Dropped (non-editorial): ${counts.dropped}` +
    (counts.dropped ? ` — ${Object.entries(droppedByKind).map(([k, v]) => `${v} ${k}`).join(', ')}` : ''));
  if (counts.unclassified) console.log(`  Unclassified (run classify step): ${counts.unclassified}`);
  if (counts.unknown) {
    console.log(`  Unknown senders: ${counts.unknown}`);
    for (const e of unknownSenders) console.log(`    - ${e}`);
  }
}

function main() {
  console.log('Loading newsletter definitions...');
  const newsletters = loadNewsletters();
  console.log(`Loaded ${newsletters.length} newsletters\n`);

  if (newsletters.length === 0) {
    console.log('No newsletter definitions. Run: npx tsx scripts/init-newsletters.ts');
    return;
  }

  const weeks = WEEK
    ? [WEEK]
    : readdirSync(RAW_DIR).filter(f => /^\d{2}$/.test(f)).sort();

  for (const week of weeks) processWeek(newsletters, week);
}

main();
