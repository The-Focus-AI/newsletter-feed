import dotenv from 'dotenv';
import crypto from 'crypto';

dotenv.config();

// Generate encryption key if not provided
function getOrGenerateEncryptionKey(): string {
  if (process.env.ENCRYPTION_KEY) {
    return process.env.ENCRYPTION_KEY;
  }
  
  // Auto-generate a 32-character encryption key
  const key = crypto.randomBytes(32).toString('hex').substring(0, 32);
  console.warn('⚠️  No ENCRYPTION_KEY found. Auto-generated key (add this to .env):');
  console.warn(`ENCRYPTION_KEY=${key}`);
  return key;
}

export const config = {
  // Application
  nodeEnv: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT || '3000', 10),
  provider: (process.env.PROVIDER || 'gmail') as 'gmail' | 'hotmail',

  // Database
  databaseUrl: process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:54322/postgres',

  // Encryption
  encryptionKey: getOrGenerateEncryptionKey(),

  // Gmail
  gmail: {
    clientId: process.env.GOOGLE_CLIENT_ID || '',
    clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    redirectUri: process.env.GOOGLE_REDIRECT_URI || 'http://localhost:3000/oauth2callback',
  },

  // Hotmail
  hotmail: {
    email: process.env.HOTMAIL_EMAIL || '',
    password: process.env.HOTMAIL_PASSWORD || '',
  },

  // Sync Settings
  sync: {
    initialSyncDays: parseInt(process.env.INITIAL_SYNC_DAYS || '30', 10),
    maxLinkRedirects: parseInt(process.env.MAX_LINK_REDIRECTS || '10', 10),
    linkResolutionTimeout: parseInt(process.env.LINK_RESOLUTION_TIMEOUT || '5000', 10),
    linkBatchSize: parseInt(process.env.LINK_BATCH_SIZE || '50', 10),
  },

  // Retry Settings
  retry: {
    maxRetries: parseInt(process.env.MAX_RETRIES || '5', 10),
    delays: (process.env.RETRY_DELAYS || '1000,2000,4000,8000,16000')
      .split(',')
      .map(d => parseInt(d, 10)),
  },
};
