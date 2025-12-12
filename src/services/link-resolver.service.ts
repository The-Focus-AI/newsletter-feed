import axios from 'axios';
import { config } from '../config/env.js';
import { logger } from '../utils/logger.js';
import { retryWithBackoff } from '../utils/retry.js';

export class LinkResolverService {
  /**
   * Resolve a URL by following redirects to the final destination
   */
  async resolveUrl(originalUrl: string): Promise<{ resolved: string; isTracking: boolean }> {
    try {
      const resolved = await retryWithBackoff(
        async () => this.followRedirects(originalUrl),
        `Resolving URL: ${originalUrl}`
      );

      const isTracking = resolved !== originalUrl;
      
      return { resolved, isTracking };
    } catch (error) {
      logger.error(`Failed to resolve URL: ${originalUrl}`, error);
      throw error;
    }
  }

  /**
   * Follow HTTP redirects to get final URL
   */
  private async followRedirects(url: string): Promise<string> {
    try {
      const response = await axios.head(url, {
        maxRedirects: config.sync.maxLinkRedirects,
        timeout: config.sync.linkResolutionTimeout,
        validateStatus: (status) => status < 400, // Accept any status < 400
      });

      // The final URL after all redirects
      return response.request.res.responseUrl || url;
    } catch (error: any) {
      // If HEAD fails, try GET with stream
      if (error.response?.status === 405 || error.code === 'ENOTFOUND') {
        try {
          const response = await axios.get(url, {
            maxRedirects: config.sync.maxLinkRedirects,
            timeout: config.sync.linkResolutionTimeout,
            responseType: 'stream',
            validateStatus: (status) => status < 400,
          });

          // Close the stream immediately
          response.data.destroy();

          return response.request.res.responseUrl || url;
        } catch (getError) {
          logger.warn(`Failed to resolve URL with GET: ${url}`);
          throw getError;
        }
      }

      throw error;
    }
  }

  /**
   * Batch resolve multiple URLs
   */
  async resolveBatch(urls: string[]): Promise<Map<string, { resolved: string; isTracking: boolean; error?: string }>> {
    const results = new Map();

    // Process in batches to avoid overwhelming servers
    for (let i = 0; i < urls.length; i += config.sync.linkBatchSize) {
      const batch = urls.slice(i, i + config.sync.linkBatchSize);
      
      const promises = batch.map(async (url) => {
        try {
          const result = await this.resolveUrl(url);
          return { url, ...result };
        } catch (error: any) {
          return { url, resolved: url, isTracking: false, error: error.message };
        }
      });

      const batchResults = await Promise.all(promises);
      
      batchResults.forEach(({ url, ...result }) => {
        results.set(url, result);
      });

      logger.info(`Resolved batch ${i / config.sync.linkBatchSize + 1} (${batch.length} URLs)`);
    }

    return results;
  }
}
