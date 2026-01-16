#!/usr/bin/env npx tsx
/**
 * Convert downloaded .eml (JSON) files to markdown
 * Usage: npx tsx scripts/convert-to-markdown.ts [--week=03] [--force]
 */

import { readFileSync, writeFileSync, existsSync, readdirSync } from 'fs';
import { join, basename } from 'path';

const WEEK_DIR = './week';

// Parse args
const args = process.argv.slice(2);
const getArg = (name: string, def?: string) => {
  const arg = args.find(a => a.startsWith(`--${name}=`));
  return arg ? arg.split('=')[1] : def;
};
const hasFlag = (name: string) => args.includes(`--${name}`);

const WEEK = getArg('week');
const FORCE = hasFlag('force');

function extractSenderName(from: string): string {
  const match = from.match(/^"?([^"<]+)"?\s*</);
  if (match) return match[1].trim();
  const emailMatch = from.match(/<([^>]+)>/);
  if (emailMatch) return emailMatch[1].split('@')[0];
  return from.split('@')[0];
}

function sanitizeFilename(str: string): string {
  return str
    .replace(/[<>:"/\\|?*\x00-\x1f]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .substring(0, 80);
}

function htmlToText(html: string): string {
  return html
    // Remove style and script tags
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    // Convert links to markdown
    .replace(/<a[^>]+href="([^"]*)"[^>]*>([^<]*)<\/a>/gi, '[$2]($1)')
    // Convert headers
    .replace(/<h1[^>]*>/gi, '\n# ')
    .replace(/<\/h1>/gi, '\n')
    .replace(/<h2[^>]*>/gi, '\n## ')
    .replace(/<\/h2>/gi, '\n')
    .replace(/<h3[^>]*>/gi, '\n### ')
    .replace(/<\/h3>/gi, '\n')
    // Convert paragraphs and breaks
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>/gi, '\n\n')
    .replace(/<p[^>]*>/gi, '')
    // Convert lists
    .replace(/<li[^>]*>/gi, '- ')
    .replace(/<\/li>/gi, '\n')
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
    // Clean up whitespace
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function convertEmail(emlPath: string): void {
  const mdPath = emlPath.replace('.eml', '.md');

  if (existsSync(mdPath) && !FORCE) {
    return; // Already converted
  }

  const data = JSON.parse(readFileSync(emlPath, 'utf-8'));

  const sender = extractSenderName(data.from || '');
  const subject = data.subject || 'No Subject';
  const date = data.date || '';

  // Get content - prefer body (plain text), fall back to HTML conversion, then snippet
  let content = data.body || data.text;
  if (!content && data.html) {
    content = htmlToText(data.html);
  }
  if (!content) {
    content = data.snippet || '';
  }

  // Clean up the content
  if (content) {
    // Remove tracking URLs - convert [text](long-tracking-url) style to just text with clean URL
    content = content
      // Clean up Substack redirect URLs - extract the readable part
      .replace(/\[ (https:\/\/substack\.com\/redirect\/[^\]]+) \]/g, '')
      // Remove duplicate URLs in brackets
      .replace(/\[ (https?:\/\/[^\]]+) \], \[ \1 \]/g, '[$1]')
      // Clean up escaped newlines
      .replace(/\\r\\n/g, '\n')
      .replace(/\r\n/g, '\n')
      // Remove invisible whitespace characters
      .replace(/[\u200B-\u200D\uFEFF]/g, '')
      .replace(/͏/g, '')
      // Clean up multiple newlines
      .replace(/\n{3,}/g, '\n\n')
      .trim();
  }

  const markdown = `# ${subject}

**From:** ${data.from}
**Date:** ${date}

---

${content}
`;

  writeFileSync(mdPath, markdown);
}

function processWeek(weekNum: string): number {
  const weekPath = join(WEEK_DIR, weekNum);
  if (!existsSync(weekPath)) {
    console.log(`Week ${weekNum} not found`);
    return 0;
  }

  const emlFiles = readdirSync(weekPath).filter(f => f.endsWith('.eml'));
  let converted = 0;

  for (const file of emlFiles) {
    const emlPath = join(weekPath, file);
    const mdPath = emlPath.replace('.eml', '.md');

    if (existsSync(mdPath) && !FORCE) {
      continue;
    }

    try {
      convertEmail(emlPath);
      converted++;
      const data = JSON.parse(readFileSync(emlPath, 'utf-8'));
      console.log(`Converted: ${file} -> ${data.subject?.substring(0, 50)}`);
    } catch (err: any) {
      console.error(`Error converting ${file}: ${err.message}`);
    }
  }

  return converted;
}

async function main() {
  const weeks = WEEK ? [WEEK] : readdirSync(WEEK_DIR).filter(f => /^\d{2}$/.test(f));

  let totalConverted = 0;
  for (const week of weeks) {
    console.log(`\nProcessing week ${week}...`);
    totalConverted += processWeek(week);
  }

  console.log(`\nDone! Converted ${totalConverted} files`);
}

main().catch(console.error);
