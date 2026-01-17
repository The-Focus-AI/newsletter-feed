#!/usr/bin/env npx tsx
/**
 * LLM-driven newsletter categorization
 * Reads recent emails from a sender and uses Claude to determine the best category
 *
 * Usage: npx tsx scripts/categorize-newsletter.ts [newsletter-id]
 *        npx tsx scripts/categorize-newsletter.ts --all
 */

import { readFileSync, writeFileSync, readdirSync, existsSync } from 'fs';
import { join, basename } from 'path';
import Anthropic from '@anthropic-ai/sdk';

const NEWSLETTERS_DIR = './newsletters';
const RAW_DIR = './raw';
const CATEGORIES = ['tech-ai', 'politics', 'culture', 'books', 'philosophy', 'science', 'personal', 'misc'];

const client = new Anthropic();

interface Newsletter {
  id: string;
  name: string;
  category: string;
  email_patterns: string[];
  filePath: string;
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
      if (inArray) {
        arrayValues.push(trimmed.substring(2).trim());
      }
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

  if (inArray && currentKey) {
    result[currentKey] = arrayValues;
  }

  return result;
}

function loadNewsletter(filePath: string): Newsletter | null {
  try {
    const content = readFileSync(filePath, 'utf-8');
    const data = parseFrontmatter(content);
    if (data.name && data.category && data.email_patterns) {
      return {
        id: basename(filePath, '.md'),
        name: data.name,
        category: data.category,
        email_patterns: data.email_patterns,
        filePath
      };
    }
  } catch {}
  return null;
}

function findSampleEmails(newsletter: Newsletter, maxSamples: number = 3): string[] {
  const samples: string[] = [];
  const weeks = readdirSync(RAW_DIR).filter(f => /^\d{2}$/.test(f)).sort().reverse();

  for (const week of weeks) {
    const weekDir = join(RAW_DIR, week);
    const files = readdirSync(weekDir).filter(f => f.endsWith('.eml'));

    for (const file of files) {
      try {
        const data = JSON.parse(readFileSync(join(weekDir, file), 'utf-8'));
        const fromEmail = (data.from || '').toLowerCase();

        const matches = newsletter.email_patterns.some(p => fromEmail.includes(p.toLowerCase()));
        if (matches) {
          const subject = data.subject || '';
          const snippet = data.snippet || '';
          const body = (data.body || '').substring(0, 1500);
          samples.push(`Subject: ${subject}\nSnippet: ${snippet}\nContent: ${body}`);

          if (samples.length >= maxSamples) break;
        }
      } catch {}
    }
    if (samples.length >= maxSamples) break;
  }

  return samples;
}

async function categorizeNewsletter(newsletter: Newsletter): Promise<{ category: string; reasoning: string }> {
  const samples = findSampleEmails(newsletter);

  if (samples.length === 0) {
    return { category: 'uncategorized', reasoning: 'No email samples found' };
  }

  const prompt = `You are categorizing newsletters. Based on the following email samples from "${newsletter.name}", determine the most appropriate category.

Categories:
- tech-ai: Technology, AI/ML, software development, programming, startups, tech industry news
- politics: Politics, current events, policy, international relations, elections, government
- culture: Arts, entertainment, media criticism, social trends, lifestyle, music, film
- books: Book reviews, literary criticism, publishing industry, reading recommendations
- philosophy: Philosophy, religion, ethics, intellectual history, ideas
- science: Science news, research, health, medicine, environment (non-political)
- personal: Personal updates, local news, weather, site analytics, personal projects
- misc: General interest that doesn't fit other categories, productivity, business

Email samples:
${samples.map((s, i) => `\n--- Sample ${i + 1} ---\n${s}`).join('\n')}

Respond with JSON only:
{"category": "category-name", "reasoning": "brief explanation"}`;

  const response = await client.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 200,
    messages: [{ role: 'user', content: prompt }]
  });

  const text = response.content[0].type === 'text' ? response.content[0].text : '';
  try {
    const match = text.match(/\{[\s\S]*\}/);
    if (match) {
      return JSON.parse(match[0]);
    }
  } catch {}

  return { category: 'uncategorized', reasoning: 'Failed to parse LLM response' };
}

function updateNewsletterCategory(newsletter: Newsletter, newCategory: string): void {
  const content = readFileSync(newsletter.filePath, 'utf-8');
  const updated = content.replace(/^category: .+$/m, `category: ${newCategory}`);
  writeFileSync(newsletter.filePath, updated);
}

async function main() {
  const args = process.argv.slice(2);
  const doAll = args.includes('--all');
  const dryRun = args.includes('--dry-run');
  const targetId = args.find(a => !a.startsWith('--'));

  const files = readdirSync(NEWSLETTERS_DIR).filter(f => f.endsWith('.md'));
  const newsletters: Newsletter[] = [];

  for (const file of files) {
    const nl = loadNewsletter(join(NEWSLETTERS_DIR, file));
    if (nl) newsletters.push(nl);
  }

  const toProcess = doAll
    ? newsletters
    : targetId
      ? newsletters.filter(n => n.id === targetId)
      : newsletters.filter(n => n.category === 'uncategorized');

  if (toProcess.length === 0) {
    console.log('No newsletters to process');
    return;
  }

  console.log(`Processing ${toProcess.length} newsletters...\n`);

  for (const nl of toProcess) {
    process.stdout.write(`${nl.name} (${nl.category}): `);

    const result = await categorizeNewsletter(nl);

    if (result.category !== nl.category) {
      console.log(`→ ${result.category} (${result.reasoning})`);
      if (!dryRun) {
        updateNewsletterCategory(nl, result.category);
        console.log(`  Updated ${nl.filePath}`);
      }
    } else {
      console.log(`✓ ${result.category} (correct)`);
    }
  }

  console.log('\nDone!');
  if (dryRun) console.log('(dry run - no files changed)');
}

main().catch(console.error);
