#!/usr/bin/env npx tsx
/**
 * Download emails from Gmail as .eml files organized by week
 * Usage: npx tsx scripts/download-emails.ts [--days=7] [--max=200] [--label=Newsletters]
 */

import { execSync } from 'child_process';
import { writeFileSync, existsSync, mkdirSync, readdirSync } from 'fs';
import { join } from 'path';
import { homedir } from 'os';

// Find latest google-skill version with installed dependencies
function findGmailScript(): string {
  const skillBase = join(homedir(), '.claude/plugins/cache/focus-marketplace/google-skill');
  if (!existsSync(skillBase)) {
    throw new Error('google-skill plugin not found');
  }
  const versions = readdirSync(skillBase)
    .filter(v => /^\d+\.\d+\.\d+$/.test(v))
    .filter(v => existsSync(join(skillBase, v, 'node_modules/googleapis'))) // Only versions with deps installed
    .sort((a, b) => {
      const [aMaj, aMin, aPat] = a.split('.').map(Number);
      const [bMaj, bMin, bPat] = b.split('.').map(Number);
      return bMaj - aMaj || bMin - aMin || bPat - aPat;
    });
  if (versions.length === 0) throw new Error('No google-skill versions with installed dependencies found');
  return join(skillBase, versions[0], 'scripts/gmail.ts');
}

const GMAIL_SCRIPT = findGmailScript();
const RAW_DIR = './raw';

// Parse args
const args = process.argv.slice(2);
const getArg = (name: string, def: string) => {
  const arg = args.find(a => a.startsWith(`--${name}=`));
  return arg ? arg.split('=')[1] : def;
};

const DAYS = parseInt(getArg('days', '7'));
const MAX = parseInt(getArg('max', '200'));
const LABEL = getArg('label', 'Newsletters');

function getWeekNumber(date: Date): string {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
  return weekNo.toString().padStart(2, '0');
}

function getExistingIds(): Set<string> {
  const ids = new Set<string>();
  if (!existsSync(RAW_DIR)) return ids;

  for (const weekFolder of readdirSync(RAW_DIR)) {
    const weekPath = join(RAW_DIR, weekFolder);
    try {
      for (const file of readdirSync(weekPath)) {
        if (file.endsWith('.eml')) {
          ids.add(file.replace('.eml', ''));
        }
      }
    } catch {}
  }
  return ids;
}

async function main() {
  console.log(`Fetching newsletters from last ${DAYS} days (max ${MAX})...`);

  // Get list of messages
  const query = `label:${LABEL} newer_than:${DAYS}d`;
  const listResult = execSync(
    `npx tsx ${GMAIL_SCRIPT} list --query="${query}" --max=${MAX}`,
    { encoding: 'utf-8', maxBuffer: 50 * 1024 * 1024 }
  );

  const listData = JSON.parse(listResult);
  if (!listData.success) {
    console.error('Failed to list messages:', listData.error);
    process.exit(1);
  }

  const messages = listData.data.messages;
  console.log(`Found ${messages.length} messages`);

  // Check what we already have
  const existingIds = getExistingIds();
  const toDownload = messages.filter((m: any) => !existingIds.has(m.id));
  console.log(`Already have ${existingIds.size}, need to download ${toDownload.length}`);

  if (toDownload.length === 0) {
    console.log('Nothing new to download');
    return;
  }

  // Download each message
  let downloaded = 0;
  let failed = 0;

  for (const msg of toDownload) {
    try {
      const result = execSync(`npx tsx ${GMAIL_SCRIPT} read ${msg.id}`, {
        encoding: 'utf-8',
        maxBuffer: 10 * 1024 * 1024
      });

      const data = JSON.parse(result);
      if (!data.success) {
        console.error(`Failed to read ${msg.id}: ${data.error}`);
        failed++;
        continue;
      }

      const email = data.data;
      const date = new Date(email.date);
      const weekNum = getWeekNumber(date);
      const weekDir = join(RAW_DIR, weekNum);

      if (!existsSync(weekDir)) {
        mkdirSync(weekDir, { recursive: true });
      }

      // Save as JSON (since we don't have raw EML, save the parsed data)
      const emlPath = join(weekDir, `${msg.id}.eml`);
      writeFileSync(emlPath, JSON.stringify(email, null, 2));

      downloaded++;
      console.log(`[${downloaded}/${toDownload.length}] ${weekNum}/${msg.id} - ${email.subject?.substring(0, 50)}`);
    } catch (err: any) {
      console.error(`Error downloading ${msg.id}: ${err.message}`);
      failed++;
    }
  }

  console.log(`\nDone! Downloaded: ${downloaded}, Failed: ${failed}`);
}

main().catch(console.error);
