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

// Known category mappings based on keywords and known sources
function guessCategory(name: string, email: string): string {
  const lowerName = name.toLowerCase();
  const lowerEmail = email.toLowerCase();

  // Tech/AI indicators
  if (/ai|tech|code|dev|programming|software|ruby|python|javascript|engineer/i.test(lowerName + lowerEmail)) {
    return 'tech-ai';
  }
  if (/alphasignal|changelog|semianalysis|turing|sequence|pragmatic/i.test(lowerEmail)) {
    return 'tech-ai';
  }

  // Politics indicators
  if (/politics|news|wsj|atlantic|bloomberg|semafor|times|post/i.test(lowerName + lowerEmail)) {
    return 'politics';
  }
  if (/cosmopolitan|globalist|silver|bulletin|compact/i.test(lowerEmail)) {
    return 'politics';
  }

  // Books/reading
  if (/book|read|review|literary|new yorker|nyrb/i.test(lowerName + lowerEmail)) {
    return 'books';
  }

  // Culture
  if (/culture|browser|kottke|tabs|flaming/i.test(lowerName + lowerEmail)) {
    return 'culture';
  }

  // Science/Health
  if (/science|health|medical|bio|fitness|beast/i.test(lowerName + lowerEmail)) {
    return 'science';
  }

  // Philosophy/Religion
  if (/classical|wisdom|philosophy|religion|dreher/i.test(lowerName + lowerEmail)) {
    return 'philosophy';
  }

  // Personal/Local
  if (/snow|weather|plausible|analytics|local|warren|connecticut/i.test(lowerName + lowerEmail)) {
    return 'personal';
  }

  // Misc/Notifications
  if (/github|linkedin|substack|mailbrew|patreon|beehiiv/i.test(lowerEmail)) {
    return 'misc';
  }

  return 'uncategorized';
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

  const category = guessCategory(data.name, Array.from(data.emails)[0]);
  const emailList = Array.from(data.emails).map(e => `  - ${e}`).join('\n');

  const content = `---
name: "${data.name}"
category: ${category}
email_patterns:
${emailList}
---

# ${data.name}

Recent subjects:
${data.subjects.map(s => `- ${s}`).join('\n')}
`;

  writeFileSync(filePath, content);
  console.log(`  Created: ${id} (${category})`);
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
  console.log('\nReview and edit the category assignments as needed.');
}

main().catch(console.error);
