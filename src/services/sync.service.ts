import { IEmailProvider } from '../providers/IEmailProvider.js';
import { NewsletterModel } from '../models/newsletter.model.js';
import { LinkModel } from '../models/link.model.js';
import { ParserService } from './parser.service.js';
import { config } from '../config/env.js';
import { logger } from '../utils/logger.js';
import { Newsletter, NewsletterLink } from '../types/index.js';

export class SyncService {
  private newsletterModel: NewsletterModel;
  private linkModel: LinkModel;
  private parserService: ParserService;

  constructor() {
    this.newsletterModel = new NewsletterModel();
    this.linkModel = new LinkModel();
    this.parserService = new ParserService();
  }

  async syncEmails(
    provider: IEmailProvider,
    labelOrFolder: string,
    providerId: number,
    force: boolean = false
  ): Promise<{ synced: number; newEmails: number }> {
    const since = new Date();
    since.setDate(since.getDate() - config.sync.initialSyncDays);

    logger.info(`Starting sync from ${since.toISOString()}`);

    let synced = 0;
    let newEmails = 0;
    let pageToken: string | undefined;

    do {
      const { emails, nextPageToken } = await provider.fetchEmails(
        labelOrFolder,
        since,
        pageToken
      );

      for (const email of emails) {
        try {
          // Check if already exists
          const existing = await this.newsletterModel.findByMessageId(email.messageId);
          
          if (existing && !force) {
            logger.debug(`Skipping duplicate email: ${email.messageId}`);
            continue;
          }

          // Create newsletter entry
          const newsletter: Newsletter = {
            providerId,
            messageId: email.messageId,
            threadId: email.threadId,
            senderEmail: email.from.email,
            senderName: email.from.name,
            subject: email.subject,
            dateReceived: email.date,
            plainTextContent: email.plainText,
            htmlContent: email.html,
            headers: email.headers,
          };

          const saved = await this.newsletterModel.create(newsletter);
          
          if (!saved) {
            logger.debug(`Newsletter already exists: ${email.messageId}`);
            continue;
          }

          newEmails++;

          // Extract and save links
          const links = this.parserService.extractLinks(email);
          
          if (links.length > 0) {
            const newsletterLinks: Omit<NewsletterLink, 'id' | 'createdAt'>[] = links.map(link => ({
              newsletterId: saved.id!,
              originalUrl: link.url,
              resolvedUrl: undefined,
              linkText: link.text,
              positionInEmail: link.position,
              isTrackingLink: this.parserService.isTrackingLink(link.url),
              resolutionStatus: 'pending' as const,
              retryCount: 0,
            }));

            await this.linkModel.createBatch(newsletterLinks);
            logger.debug(`Saved ${links.length} links for newsletter ${saved.id}`);
          }

          synced++;
        } catch (error) {
          logger.error(`Failed to process email ${email.messageId}`, error);
        }
      }

      pageToken = nextPageToken;
      logger.info(`Processed batch: ${synced} synced, ${newEmails} new`);

    } while (pageToken);

    logger.info(`Sync complete: ${synced} total emails, ${newEmails} new emails`);

    return { synced, newEmails };
  }
}
