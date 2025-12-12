import { google } from 'googleapis';
import { OAuth2Client } from 'google-auth-library';
import fs from 'fs/promises';
import { IEmailProvider } from './IEmailProvider.js';
import { Email } from '../types/index.js';
import { config } from '../config/env.js';
import { logger } from '../utils/logger.js';

const SCOPES = ['https://www.googleapis.com/auth/gmail.readonly'];
const TOKEN_PATH = 'tokens.json';

export class GmailProvider implements IEmailProvider {
  private oauth2Client: OAuth2Client;
  private gmail: any;
  private authenticated = false;

  constructor() {
    this.oauth2Client = new google.auth.OAuth2(
      config.gmail.clientId,
      config.gmail.clientSecret,
      config.gmail.redirectUri
    );
  }

  async authenticate(): Promise<void> {
    try {
      // Try to load existing tokens
      const tokenData = await fs.readFile(TOKEN_PATH, 'utf-8');
      const tokens = JSON.parse(tokenData);
      this.oauth2Client.setCredentials(tokens);
      this.gmail = google.gmail({ version: 'v1', auth: this.oauth2Client });
      this.authenticated = true;
      logger.info('Gmail authenticated with existing tokens');
    } catch (error) {
      logger.warn('No existing tokens found. Need to authenticate.');
      throw new Error('Gmail authentication required. Run setup script first.');
    }
  }

  async getAuthUrl(): Promise<string> {
    return this.oauth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: SCOPES,
    });
  }

  async saveTokenFromCode(code: string): Promise<void> {
    const { tokens } = await this.oauth2Client.getToken(code);
    this.oauth2Client.setCredentials(tokens);
    await fs.writeFile(TOKEN_PATH, JSON.stringify(tokens));
    this.gmail = google.gmail({ version: 'v1', auth: this.oauth2Client });
    this.authenticated = true;
    logger.info('Gmail tokens saved successfully');
  }

  async getLabels(): Promise<string[]> {
    if (!this.authenticated) {
      throw new Error('Not authenticated');
    }

    const response = await this.gmail.users.labels.list({ userId: 'me' });
    return response.data.labels?.map((label: any) => label.name) || [];
  }

  async fetchEmails(
    label: string,
    since: Date,
    pageToken?: string
  ): Promise<{ emails: Email[]; nextPageToken?: string }> {
    if (!this.authenticated) {
      throw new Error('Not authenticated');
    }

    // Format date for Gmail query
    const sinceStr = since.toISOString().split('T')[0].replace(/-/g, '/');
    const query = `label:${label} after:${sinceStr}`;

    logger.info(`Fetching emails with query: ${query}`);

    // Get message IDs
    const listResponse = await this.gmail.users.messages.list({
      userId: 'me',
      q: query,
      maxResults: 500,
      pageToken,
    });

    const messages = listResponse.data.messages || [];
    const emails: Email[] = [];

    // Fetch full message data for each message
    for (const message of messages) {
      try {
        const msgResponse = await this.gmail.users.messages.get({
          userId: 'me',
          id: message.id,
          format: 'full',
        });

        const email = this.parseGmailMessage(msgResponse.data);
        emails.push(email);
      } catch (error) {
        logger.error(`Failed to fetch message ${message.id}`, error);
      }
    }

    return {
      emails,
      nextPageToken: listResponse.data.nextPageToken,
    };
  }

  private parseGmailMessage(message: any): Email {
    const headers = message.payload.headers.reduce((acc: any, header: any) => {
      acc[header.name.toLowerCase()] = header.value;
      return acc;
    }, {});

    const from = headers.from || '';
    const fromMatch = from.match(/(.+?)\s*<(.+?)>/);
    const fromEmail = fromMatch ? fromMatch[2] : from;
    const fromName = fromMatch ? fromMatch[1].replace(/"/g, '') : undefined;

    let plainText = '';
    let html = '';

    const getBody = (part: any): void => {
      if (part.mimeType === 'text/plain' && part.body.data) {
        plainText += Buffer.from(part.body.data, 'base64').toString('utf-8');
      } else if (part.mimeType === 'text/html' && part.body.data) {
        html += Buffer.from(part.body.data, 'base64').toString('utf-8');
      } else if (part.parts) {
        part.parts.forEach(getBody);
      }
    };

    if (message.payload.parts) {
      message.payload.parts.forEach(getBody);
    } else if (message.payload.body.data) {
      const body = Buffer.from(message.payload.body.data, 'base64').toString('utf-8');
      if (message.payload.mimeType === 'text/plain') {
        plainText = body;
      } else {
        html = body;
      }
    }

    return {
      messageId: message.id,
      threadId: message.threadId,
      from: {
        email: fromEmail,
        name: fromName,
      },
      subject: headers.subject || '',
      date: new Date(parseInt(message.internalDate, 10)),
      plainText: plainText || undefined,
      html: html || undefined,
      headers,
    };
  }

  isAuthenticated(): boolean {
    return this.authenticated;
  }
}
