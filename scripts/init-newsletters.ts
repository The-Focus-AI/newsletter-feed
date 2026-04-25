#!/usr/bin/env npx tsx
/**
 * Initialize newsletter definition files from raw email data
 * Creates one markdown file per newsletter in newsletters/ directory
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync } from 'fs';
import { join } from 'path';

const RAW_DIR = './raw';
const NEWSLETTERS_DIR = './newsletters';

interface EmailData {
  from: string;
  subject: string;
}

// Extract email address from "Name <email>" format
function extractEmail(from: string): string {
  const match = from.match(/<([^>]+)>/);
  return match ? match[1].toLowerCase() : from.toLowerCase();
}

// Extract sender name
function extractName(from: string): string {
  const match = from.match(/^"?([^"<]+)"?\s*</);
  if (match) return match[1].trim();
  return from.split('@')[0];
}

// Create URL-friendly ID from name
function createId(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .substring(0, 40);
}

// Scan all raw emails and extract unique senders
function scanRawEmails(): Map<string, { name: string; emails: Set<string>; subjects: string[] }> {
  const senders = new Map<string, { name: string; emails: Set<string>; subjects: string[] }>();

  const weeks = readdirSync(RAW_DIR).filter(f => /^\d{2}$/.test(f));

  for (const week of weeks) {
    const weekDir = join(RAW_DIR, week);
    const files = readdirSync(weekDir).filter(f => f.endsWith('.eml'));

    for (const file of files) {
      try {
        const data: EmailData = JSON.parse(readFileSync(join(weekDir, file), 'utf-8'));
        const email = extractEmail(data.from);
        const name = extractName(data.from);
        const id = createId(name);

        if (!senders.has(id)) {
          senders.set(id, { name, emails: new Set(), subjects: [] });
        }

        const sender = senders.get(id)!;
        sender.emails.add(email);
        if (data.subject && sender.subjects.length < 5) {
          sender.subjects.push(data.subject);
        }
      } catch (err) {
        // Skip invalid files
      }
    }
  }

  return senders;
}

// Create newsletter markdown file
function createNewsletterFile(id: string, data: { name: string; emails: Set<string>; subjects: string[] }): void {
  const filePath = join(NEWSLETTERS_DIR, `${id}.md`);

  // Skip if already exists
  if (existsSync(filePath)) {
    console.log(`  Exists: ${id}`);
    return;
  }

  const emailList = Array.from(data.emails).map(e => `  - ${e}`).join('\n');

  const content = `---
name: "${data.name}"
email_patterns:
${emailList}
---

# ${data.name}

Recent subjects:
${data.subjects.map(s => `- ${s}`).join('\n')}
`;

  writeFileSync(filePath, content);
  console.log(`  Created: ${id}`);
}

async function main() {
  if (!existsSync(NEWSLETTERS_DIR)) {
    mkdirSync(NEWSLETTERS_DIR, { recursive: true });
  }

  console.log('Scanning raw emails...');
  const senders = scanRawEmails();
  console.log(`Found ${senders.size} unique senders\n`);

  console.log('Creating newsletter files...');
  for (const [id, data] of senders) {
    createNewsletterFile(id, data);
  }

  console.log('\nDone!');
  console.log(`Newsletter files in: ${NEWSLETTERS_DIR}/`);
}

main().catch(console.error);
