#!/usr/bin/env npx tsx
/**
 * Process raw .eml files into organized markdown content
 * - Reads newsletter definitions from newsletters/*.md files
 * - Identifies newsletter from email address
 * - Creates category/newsletter folder structure in content/
 * - Converts to markdown with proper frontmatter
 *
 * Usage: npx tsx scripts/process-newsletters.ts [--force] [--week=03]
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync } from 'fs';
import { join, basename } from 'path';

const RAW_DIR = './raw';
const CONTENT_DIR = './content';
const NEWSLETTERS_DIR = './newsletters';

// Parse args
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
  category: string;
  email_patterns: string[];
  author?: string;
  url?: string;
}

// Parse YAML frontmatter from markdown file
function parseFrontmatter(content: string): Record<string, any> {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};

  const yaml = match[1];
  const result: Record<string, any> = {};

  // Simple YAML parser for our needs
  let currentKey = '';
  let inArray = false;
  let arrayValues: string[] = [];

  for (const line of yaml.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    if (trimmed.startsWith('- ')) {
      // Array item
      if (inArray) {
        arrayValues.push(trimmed.substring(2).trim());
      }
    } else if (trimmed.includes(':')) {
      // Save previous array if any
      if (inArray && currentKey) {
        result[currentKey] = arrayValues;
        arrayValues = [];
        inArray = false;
      }

      const colonIdx = trimmed.indexOf(':');
      const key = trimmed.substring(0, colonIdx).trim();
      const value = trimmed.substring(colonIdx + 1).trim();

      if (value === '') {
        // Start of array or nested object
        currentKey = key;
        inArray = true;
        arrayValues = [];
      } else {
        // Simple value - remove quotes
        result[key] = value.replace(/^["']|["']$/g, '');
      }
    }
  }

  // Save final array if any
  if (inArray && currentKey) {
    result[currentKey] = arrayValues;
  }

  return result;
}

// Load all newsletter definitions
function loadNewsletters(): Newsletter[] {
  const newsletters: Newsletter[] = [];

  if (!existsSync(NEWSLETTERS_DIR)) {
    console.error(`Newsletters directory not found: ${NEWSLETTERS_DIR}`);
    return newsletters;
  }

  const files = readdirSync(NEWSLETTERS_DIR).filter(f => f.endsWith('.md'));

  for (const file of files) {
    try {
      const content = readFileSync(join(NEWSLETTERS_DIR, file), 'utf-8');
      const data = parseFrontmatter(content);

      if (data.name && data.category && data.email_patterns) {
        newsletters.push({
          id: basename(file, '.md'),
          name: data.name,
          category: data.category,
          email_patterns: data.email_patterns,
          author: data.author,
          url: data.url
        });
      }
    } catch (err) {
      console.error(`Error loading ${file}: ${err}`);
    }
  }

  return newsletters;
}

// Find newsletter by email address
function findNewsletter(newsletters: Newsletter[], fromEmail: string): Newsletter | null {
  const email = fromEmail.toLowerCase();

  for (const newsletter of newsletters) {
    for (const pattern of newsletter.email_patterns) {
      if (email.includes(pattern.toLowerCase())) {
        return newsletter;
      }
    }
  }
  return null;
}

// Extract email address from "Name <email>" format
function extractEmail(from: string): string {
  const match = from.match(/<([^>]+)>/);
  return match ? match[1] : from;
}

// Create URL-friendly slug from text
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .substring(0, 60);
}

// Format date as YYYY-MM-DD
function formatDate(dateStr: string): string {
  try {
    const date = new Date(dateStr);
    return date.toISOString().split('T')[0];
  } catch {
    return new Date().toISOString().split('T')[0];
  }
}

// Extract "View in browser" or similar link from HTML
function extractViewLink(html: string): string | null {
  if (!html) return null;

  // Common patterns for "view in browser" links
  const patterns = [
    /href="([^"]+)"[^>]*>\s*(?:View|Read)\s+(?:in|this|online|on the web|in browser|email online)[^<]*/i,
    /(?:View|Read)\s+(?:in|this|online|on the web|in browser)[^<]*<\/[^>]+>\s*<\/[^>]+>\s*<a[^>]+href="([^"]+)"/i,
    /href="([^"]*(?:view|mailchi|campaign-archive)[^"]*)"/i,
  ];

  for (const pattern of patterns) {
    const match = html.match(pattern);
    if (match && match[1]) {
      // Skip tracking pixels and unsubscribe links
      const url = match[1];
      if (!url.includes('unsubscribe') && !url.includes('pixel') && !url.includes('track')) {
        return url;
      }
    }
  }

  return null;
}

// Convert HTML to plain text
function htmlToText(html: string): string {
  if (!html) return '';

  return html
    // Remove style and script tags with content
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    // Convert common block elements to newlines
    .replace(/<\/p>/gi, '\n\n')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/div>/gi, '\n')
    .replace(/<\/li>/gi, '\n')
    .replace(/<\/h[1-6]>/gi, '\n\n')
    .replace(/<\/tr>/gi, '\n')
    // Convert links to markdown format
    .replace(/<a[^>]+href=["']([^"']+)["'][^>]*>([^<]+)<\/a>/gi, '[$2]($1)')
    // Remove remaining HTML tags
    .replace(/<[^>]+>/g, '')
    // Decode HTML entities
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/g, "'")
    .replace(/&#(\d+);/g, (_match, code) => String.fromCharCode(parseInt(code, 10)))
    // Clean up whitespace
    .replace(/\r\n/g, '\n')
    .replace(/[ \t]+/g, ' ')
    .replace(/\n /g, '\n')
    .replace(/ \n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

// Clean up email body content
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

// Ensure content folder structure exists
function ensureContentFolder(category: string, newsletterId: string): string {
  const categoryDir = join(CONTENT_DIR, category);
  const newsletterDir = join(categoryDir, newsletterId);

  if (!existsSync(newsletterDir)) {
    mkdirSync(newsletterDir, { recursive: true });
  }

  return newsletterDir;
}

// Process a single .eml file
function processEmail(newsletters: Newsletter[], emlPath: string): { processed: boolean; unknown: boolean } {
  const data = JSON.parse(readFileSync(emlPath, 'utf-8'));
  const fromEmail = extractEmail(data.from || '');
  const newsletter = findNewsletter(newsletters, fromEmail);

  if (!newsletter) {
    return { processed: false, unknown: true };
  }

  // Ensure folder structure exists
  const newsletterDir = ensureContentFolder(newsletter.category, newsletter.id);

  // Generate filename: YYYY-MM-DD-slug.md
  const dateStr = formatDate(data.date);
  const slug = slugify(data.subject || 'untitled');
  const filename = `${dateStr}-${slug}.md`;
  const outputPath = join(newsletterDir, filename);

  // Skip if already exists (unless --force)
  if (existsSync(outputPath) && !FORCE) {
    return { processed: false, unknown: false };
  }

  // Get content - prefer body, fall back to htmlBody converted to text, then snippet
  let rawContent = data.body || data.text || '';
  if (!rawContent && data.htmlBody) {
    rawContent = htmlToText(data.htmlBody);
  }
  if (!rawContent) {
    rawContent = data.snippet || '';
  }
  const content = cleanContent(rawContent);

  // Extract source link from HTML
  const viewLink = extractViewLink(data.htmlBody || '');

  // Build source line - prefer view link, fall back to newsletter URL
  const sourceUrl = viewLink || newsletter.url || '';
  const sourceLine = sourceUrl ? `\n**Source:** [View original](${sourceUrl})` : '';

  // Generate markdown with frontmatter
  const markdown = `---
id: ${data.id}
newsletter: ${newsletter.id}
newsletter_name: "${newsletter.name}"
category: ${newsletter.category}
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
  return { processed: true, unknown: false };
}

// Process all .eml files in a week folder
function processWeek(newsletters: Newsletter[], weekNum: string): { processed: number; skipped: number; unknown: number } {
  const weekDir = join(RAW_DIR, weekNum);
  if (!existsSync(weekDir)) {
    console.log(`Week ${weekNum} not found`);
    return { processed: 0, skipped: 0, unknown: 0 };
  }

  const emlFiles = readdirSync(weekDir).filter(f => f.endsWith('.eml'));
  let processed = 0;
  let skipped = 0;
  let unknown = 0;
  const unknownEmails = new Set<string>();

  for (const file of emlFiles) {
    const emlPath = join(weekDir, file);
    try {
      const result = processEmail(newsletters, emlPath);
      if (result.processed) {
        processed++;
        const data = JSON.parse(readFileSync(emlPath, 'utf-8'));
        console.log(`  ✓ ${data.subject?.substring(0, 50)}`);
      } else if (result.unknown) {
        unknown++;
        const data = JSON.parse(readFileSync(emlPath, 'utf-8'));
        const email = extractEmail(data.from);
        unknownEmails.add(email);
      } else {
        skipped++;
      }
    } catch (err: any) {
      console.error(`  Error: ${file}: ${err.message}`);
    }
  }

  if (unknownEmails.size > 0) {
    console.log(`\n  Unknown senders (${unknownEmails.size}):`);
    for (const email of unknownEmails) {
      console.log(`    - ${email}`);
    }
  }

  return { processed, skipped, unknown };
}

async function main() {
  console.log('Loading newsletter definitions...');
  const newsletters = loadNewsletters();
  console.log(`Loaded ${newsletters.length} newsletters\n`);

  if (newsletters.length === 0) {
    console.log('No newsletter definitions found. Run: npx tsx scripts/init-newsletters.ts');
    return;
  }

  // Get weeks to process
  const weeks = WEEK
    ? [WEEK]
    : readdirSync(RAW_DIR).filter(f => /^\d{2}$/.test(f)).sort();

  let totalProcessed = 0;
  let totalSkipped = 0;
  let totalUnknown = 0;

  for (const week of weeks) {
    console.log(`Processing week ${week}...`);
    const { processed, skipped, unknown } = processWeek(newsletters, week);
    totalProcessed += processed;
    totalSkipped += skipped;
    totalUnknown += unknown;
    console.log(`  Processed: ${processed}, Skipped: ${skipped}, Unknown: ${unknown}\n`);
  }

  console.log('========================================');
  console.log('Summary:');
  console.log(`  Processed: ${totalProcessed}`);
  console.log(`  Skipped (existing): ${totalSkipped}`);
  console.log(`  Unknown senders: ${totalUnknown}`);
}

main().catch(console.error);
