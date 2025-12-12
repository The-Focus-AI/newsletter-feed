# Newsletter Feed Service

A TypeScript-based service that connects to Gmail or Hotmail/Outlook to aggregate newsletter emails, extract and resolve links (removing tracking), and provide a REST API for querying the data.

## Features

- **Multi-provider support**: Gmail (OAuth2) or Hotmail/Outlook (IMAP)
- **Smart link extraction**: Extracts from plain text (preferred) or HTML fallback
- **Link intelligence**: Resolves tracking URLs to final destinations with exponential backoff retry
- **Weekly analytics**: Track popular links by week
- **REST API**: Query newsletters, links, and statistics
- **Background processing**: Continuous link resolution worker
- **PostgreSQL storage**: Full-text search and queryable data via Supabase

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Setup Local Database

```bash
npm run db:start
```

This starts a local Supabase instance with PostgreSQL. Note the `DATABASE_URL` from the output.

### 3. Configure Environment

Copy `.env.example` to `.env` and configure:

```bash
cp .env.example .env
```

Edit `.env`:
- Set `PROVIDER=gmail` or `PROVIDER=hotmail`
- Add provider-specific credentials (see below)
- `DATABASE_URL` is auto-populated by Supabase

### 4. Provider Setup

#### For Gmail:

1. Create a Google Cloud Project: https://console.cloud.google.com/
2. Enable Gmail API
3. Create OAuth 2.0 credentials (Desktop app type)
4. Add credentials to `.env`:
   ```
   GOOGLE_CLIENT_ID=your-client-id
   GOOGLE_CLIENT_SECRET=your-secret
   ```
5. Run setup script:
   ```bash
   npm run setup
   ```
   Follow the prompts to authenticate and save tokens.

#### For Hotmail/Outlook:

1. If you have 2FA enabled, generate an App Password:
   - Go to https://account.microsoft.com/security
   - Create a new app password
2. Add to `.env`:
   ```
   HOTMAIL_EMAIL=your-email@hotmail.com
   HOTMAIL_PASSWORD=your-password-or-app-password
   ```

### 5. Run Database Migrations

```bash
npm run db:reset
```

This creates all necessary tables.

### 6. Start the Server

```bash
npm run dev
```

The service runs on `http://localhost:3000` by default.

### 7. Trigger Initial Sync

```bash
curl -X POST http://localhost:3000/api/sync
```

This fetches newsletters from the last 30 days. The background worker will automatically start resolving links.

## API Endpoints

### Health Check
```
GET /api/health
```

### Sync Newsletters
```
POST /api/sync
POST /api/sync?force=true  # Re-sync last 30 days
```

### Get Newsletters
```
GET /api/newsletters
GET /api/newsletters?page=1&limit=50
GET /api/newsletters?since=2024-01-01
GET /api/newsletters?sender=example@newsletter.com
GET /api/newsletters?search=keyword
```

### Get Single Newsletter with Links
```
GET /api/newsletters/:id
```

### Get Popular Links
```
GET /api/links/popular
GET /api/links/popular?week=2024-W01&limit=20&min_count=2
```

### Resolve a Link
```
GET /api/links/resolve?url=https://tracking-link.com/...
```

### Get Statistics
```
GET /api/stats
```

## Architecture

### Project Structure

```
newsletter-feed-service/
├── src/
│   ├── config/          # Database, encryption, environment
│   ├── providers/       # Gmail and Hotmail implementations
│   ├── services/        # Sync, parsing, link resolution
│   ├── models/          # Database models
│   ├── routes/          # REST API routes
│   ├── workers/         # Background link resolver
│   ├── middleware/      # Error handling
│   ├── utils/           # Logging, retry logic
│   └── types/           # TypeScript interfaces
├── supabase/
│   └── migrations/      # Database schema
└── scripts/             # Setup utilities
```

### How It Works

1. **Email Sync**: Fetches emails from configured provider's newsletter folder/label
2. **Link Extraction**: Parses email content (plain text preferred) and extracts all URLs
3. **Duplicate Prevention**: Uses message ID to prevent duplicate entries
4. **Background Processing**: Worker continuously resolves pending links every 30 seconds
5. **Tracking Removal**: Follows HTTP redirects to get final destination URLs
6. **Retry Logic**: Exponential backoff (1s, 2s, 4s, 8s, 16s) with max 5 retries

## Configuration

### Environment Variables

See `.env.example` for all available options:

- **PROVIDER**: `gmail` or `hotmail`
- **INITIAL_SYNC_DAYS**: How many days back to sync initially (default: 30)
- **LINK_BATCH_SIZE**: Number of links to resolve per batch (default: 50)
- **MAX_RETRIES**: Maximum retry attempts for failed operations (default: 5)

### Label/Folder Configuration

- Gmail: Edit `src/routes/index.ts` to change default label from "newsletter"
- Hotmail: Edit `src/routes/index.ts` to change default folder from "Newsletters"

## Development

### Build
```bash
npm run build
```

### Production
```bash
npm start
```

### Database Management
```bash
npm run db:start   # Start Supabase
npm run db:stop    # Stop Supabase
npm run db:reset   # Reset and apply migrations
```

## Database Schema

- **provider_credentials**: Encrypted email provider credentials
- **newsletters**: Email content and metadata
- **links**: Extracted links with resolution status
- **link_stats**: Weekly aggregated link popularity
- **sync_state**: Sync history and state tracking

## Security

- Credentials encrypted using AES-256
- Auto-generated encryption key (stored in `.env`)
- OAuth2 tokens stored locally in `tokens.json`
- Database credentials managed by Supabase

## Troubleshooting

### Gmail "Not Authenticated" Error
Run `npm run setup` to re-authenticate

### Hotmail Connection Failed
Check if 2FA is enabled and use App Password

### Database Connection Error
Ensure Supabase is running: `npm run db:start`

### Links Not Resolving
Check worker logs - some URLs may be unreachable or blocked

## Integration

This service is designed to be consumed by other services via the REST API. Example integration:

```typescript
// Fetch all newsletters
const response = await fetch('http://localhost:3000/api/newsletters');
const { newsletters } = await response.json();

// Get popular links this week
const links = await fetch('http://localhost:3000/api/links/popular');
const { links: popular } = await links.json();

// Trigger sync
await fetch('http://localhost:3000/api/sync', { method: 'POST' });
```

## License

ISC
