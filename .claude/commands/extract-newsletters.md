# Extract Newsletters from Gmail

Download emails with the "Newsletters" label from Gmail and convert to markdown.

## Steps

1. Download emails from Gmail (last 7 days by default):
```bash
npx tsx scripts/download-emails.ts --days=7 --max=200
```

2. Convert to markdown:
```bash
npx tsx scripts/convert-to-markdown.ts
```

## Options

- `--days=N` - How many days back to fetch (default: 7)
- `--max=N` - Maximum emails to download (default: 200)
- `--label=NAME` - Gmail label to filter by (default: Newsletters)
- `--force` - Reconvert existing markdown files
- `--week=XX` - Convert only a specific week

## Output

Files saved to `week/XX/{message-id}.eml` and `week/XX/{message-id}.md` organized by ISO week number.
