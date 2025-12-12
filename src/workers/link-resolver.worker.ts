import { LinkModel } from '../models/link.model.js';
import { LinkResolverService } from '../services/link-resolver.service.js';
import { config } from '../config/env.js';
import { logger } from '../utils/logger.js';

export class LinkResolverWorker {
  private linkModel: LinkModel;
  private resolverService: LinkResolverService;
  private isRunning = false;
  private intervalId?: NodeJS.Timeout;

  constructor() {
    this.linkModel = new LinkModel();
    this.resolverService = new LinkResolverService();
  }

  /**
   * Start the worker to continuously process pending links
   */
  start(intervalMs: number = 30000): void {
    if (this.isRunning) {
      logger.warn('Link resolver worker already running');
      return;
    }

    this.isRunning = true;
    logger.info(`Starting link resolver worker (interval: ${intervalMs}ms)`);

    // Run immediately
    this.processLinks();

    // Then run on interval
    this.intervalId = setInterval(() => {
      this.processLinks();
    }, intervalMs);
  }

  /**
   * Stop the worker
   */
  stop(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
    this.isRunning = false;
    logger.info('Link resolver worker stopped');
  }

  /**
   * Process a batch of pending links
   */
  private async processLinks(): Promise<void> {
    try {
      const pendingLinks = await this.linkModel.findPendingLinks(config.sync.linkBatchSize);

      if (pendingLinks.length === 0) {
        logger.debug('No pending links to resolve');
        return;
      }

      logger.info(`Processing ${pendingLinks.length} pending links`);

      for (const link of pendingLinks) {
        try {
          const { resolved, isTracking } = await this.resolverService.resolveUrl(link.originalUrl);

          await this.linkModel.updateResolution(
            link.id!,
            resolved,
            'resolved'
          );

          logger.debug(`Resolved: ${link.originalUrl} -> ${resolved}`);
        } catch (error: any) {
          logger.error(`Failed to resolve link ${link.id}`, error);

          // Mark as failed if retry count exceeded
          if (link.retryCount >= config.retry.maxRetries - 1) {
            await this.linkModel.updateResolution(
              link.id!,
              link.originalUrl,
              'failed',
              error.message
            );
          } else {
            // Increment retry count
            await this.linkModel.updateResolution(
              link.id!,
              link.originalUrl,
              'pending',
              error.message
            );
          }
        }
      }

      logger.info(`Finished processing batch`);
    } catch (error) {
      logger.error('Error in link resolver worker', error);
    }
  }

  /**
   * Manually trigger link processing
   */
  async processNow(): Promise<void> {
    await this.processLinks();
  }
}
