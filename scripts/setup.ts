import readline from 'readline';
import { GmailProvider } from '../src/providers/GmailProvider.js';
import { logger } from '../src/utils/logger.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function question(query: string): Promise<string> {
  return new Promise(resolve => rl.question(query, resolve));
}

async function setupGmail() {
  logger.info('Gmail Setup');
  logger.info('===========');
  logger.info('');
  logger.info('1. Go to https://console.cloud.google.com/');
  logger.info('2. Create a new project or select existing one');
  logger.info('3. Enable Gmail API');
  logger.info('4. Create OAuth 2.0 credentials (Desktop app)');
  logger.info('5. Add credentials to .env file');
  logger.info('');

  const hasCredentials = await question('Have you added GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET to .env? (yes/no): ');

  if (hasCredentials.toLowerCase() !== 'yes') {
    logger.info('Please add credentials to .env and run setup again');
    process.exit(0);
  }

  const gmailProvider = new GmailProvider();
  const authUrl = await gmailProvider.getAuthUrl();

  logger.info('');
  logger.info('Please visit this URL to authorize the application:');
  logger.info(authUrl);
  logger.info('');

  const code = await question('Enter the authorization code: ');

  await gmailProvider.saveTokenFromCode(code);

  logger.info('✓ Gmail authentication successful!');
  logger.info('Tokens saved to tokens.json');
}

async function setupHotmail() {
  logger.info('Hotmail/Outlook Setup');
  logger.info('===================');
  logger.info('');
  logger.info('If you have 2FA enabled, you need to generate an App Password:');
  logger.info('1. Go to https://account.microsoft.com/security');
  logger.info('2. Under "App passwords", create a new app password');
  logger.info('3. Use that password in .env');
  logger.info('');
  logger.info('Add HOTMAIL_EMAIL and HOTMAIL_PASSWORD to your .env file');
  logger.info('');
  logger.info('✓ Setup complete!');
}

async function main() {
  logger.info('Newsletter Feed Service Setup');
  logger.info('============================');
  logger.info('');

  const provider = await question('Which provider? (gmail/hotmail): ');

  if (provider.toLowerCase() === 'gmail') {
    await setupGmail();
  } else if (provider.toLowerCase() === 'hotmail') {
    await setupHotmail();
  } else {
    logger.error('Invalid provider. Choose gmail or hotmail');
    process.exit(1);
  }

  rl.close();
}

main().catch(error => {
  logger.error('Setup failed', error);
  process.exit(1);
});
