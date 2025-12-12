import * as cheerio from 'cheerio';
import { Email, Link } from '../types/index.js';
import { logger } from '../utils/logger.js';

export class ParserService {
  /**
   * Extract links from email content
   * Prefers plain text, falls back to HTML
   */
  extractLinks(email: Email): Link[] {
    if (email.plainText) {
      return this.extractLinksFromPlainText(email.plainText);
    } else if (email.html) {
      return this.extractLinksFromHtml(email.html);
    }
    
    return [];
  }

  /**
   * Extract links from plain text using regex
   */
  private extractLinksFromPlainText(text: string): Link[] {
    const urlRegex = /https?:\/\/[^\s<>"{}|\\^`\[\]]+/g;
    const matches = text.matchAll(urlRegex);
    const links: Link[] = [];
    let position = 0;

    for (const match of matches) {
      links.push({
        url: match[0],
        text: undefined,
        position: position++,
      });
    }

    logger.debug(`Extracted ${links.length} links from plain text`);
    return links;
  }

  /**
   * Extract links from HTML using cheerio
   */
  private extractLinksFromHtml(html: string): Link[] {
    const $ = cheerio.load(html);
    const links: Link[] = [];
    let position = 0;

    $('a').each((i, elem) => {
      const url = $(elem).attr('href');
      if (url && (url.startsWith('http://') || url.startsWith('https://'))) {
        links.push({
          url,
          text: $(elem).text().trim() || undefined,
          position: position++,
        });
      }
    });

    logger.debug(`Extracted ${links.length} links from HTML`);
    return links;
  }

  /**
   * Detect if a URL is likely a tracking link
   */
  isTrackingLink(url: string): boolean {
    const trackingDomains = [
      'click.mailerlite.com',
      'links.sendgrid.net',
      'click.pstmrk.it',
      'click.convertkit-mail.com',
      'link.mail.beehiiv.com',
      'email.mg2.substack.com',
      'trk.news',
      'clicks.aweber.com',
      'mailchi.mp',
      'go.pardot.com',
    ];

    try {
      const urlObj = new URL(url);
      return trackingDomains.some(domain => urlObj.hostname.includes(domain));
    } catch (error) {
      return false;
    }
  }
}
