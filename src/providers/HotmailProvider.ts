import imaps from 'imap-simple';
import { simpleParser } from 'mailparser';
import { IEmailProvider } from './IEmailProvider.js';
import { Email } from '../types/index.js';
import { config } from '../config/env.js';
import { logger } from '../utils/logger.js';

export class HotmailProvider implements IEmailProvider {
  private connection: any;
  private authenticated = false;
  private email: string;
  private password: string;

  constructor(email?: string, password?: string) {
    this.email = email || config.hotmail.email;
    this.password = password || config.hotmail.password;
  }

  async authenticate(): Promise<void> {
    const imapConfig = {
      imap: {
        user: this.email,
        password: this.password,
        host: 'outlook.office365.com',
        port: 993,
        tls: true,
        authTimeout: 10000,
      },
    };

    try {
      this.connection = await imaps.connect(imapConfig);
      this.authenticated = true;
      logger.info('Hotmail IMAP authenticated successfully');
    } catch (error) {
      logger.error('Hotmail authentication failed', error);
      throw new Error('Hotmail authentication failed');
    }
  }

  async getLabels(): Promise<string[]> {
    if (!this.authenticated) {
      throw new Error('Not authenticated');
    }

    const boxes = await this.connection.getBoxes();
    return this.flattenBoxNames(boxes);
  }

  private flattenBoxNames(boxes: any, prefix = ''): string[] {
    let names: string[] = [];
    
    for (const [name, box] of Object.entries(boxes)) {
      const fullName = prefix ? `${prefix}/${name}` : name;
      names.push(fullName);
      
      if (box && typeof box === 'object' && (box as any).children) {
        names = names.concat(this.flattenBoxNames((box as any).children, fullName));
      }
    }
    
    return names;
  }

  async fetchEmails(
    folder: string,
    since: Date,
    pageToken?: string
  ): Promise<{ emails: Email[]; nextPageToken?: string }> {
    if (!this.authenticated) {
      throw new Error('Not authenticated');
    }

    try {
      await this.connection.openBox(folder);
    } catch (error) {
      logger.warn(`Failed to open folder ${folder}, trying INBOX`);
      await this.connection.openBox('INBOX');
    }

    // IMAP search for emails since date
    const searchCriteria = [['SINCE', since]];
    const fetchOptions = {
      bodies: [''],
      markSeen: false,
    };

    const messages = await this.connection.search(searchCriteria, fetchOptions);
    const emails: Email[] = [];

    for (const item of messages) {
      try {
        const all = item.parts.find((part: any) => part.which === '');
        const emailBuffer = all.body;
        
        const parsed = await simpleParser(emailBuffer);
        
        const email: Email = {
          messageId: item.attributes.uid.toString(),
          threadId: undefined,
          from: {
            email: parsed.from?.value[0]?.address || '',
            name: parsed.from?.value[0]?.name,
          },
          subject: parsed.subject || '',
          date: parsed.date || new Date(),
          plainText: parsed.text,
          html: parsed.html || undefined,
          headers: parsed.headers as any,
        };

        emails.push(email);
      } catch (error) {
        logger.error('Failed to parse email', error);
      }
    }

    return {
      emails,
      nextPageToken: undefined, // IMAP doesn't use pagination tokens
    };
  }

  isAuthenticated(): boolean {
    return this.authenticated;
  }

  async close(): Promise<void> {
    if (this.connection) {
      await this.connection.end();
      this.authenticated = false;
    }
  }
}
