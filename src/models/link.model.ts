import { query } from '../config/database.js';
import { NewsletterLink } from '../types/index.js';

export class LinkModel {
  async createBatch(links: Omit<NewsletterLink, 'id' | 'createdAt'>[]): Promise<void> {
    if (links.length === 0) return;

    const values = links.map((link, i) => {
      const base = i * 9;
      return `($${base + 1}, $${base + 2}, $${base + 3}, $${base + 4}, $${base + 5}, $${base + 6}, $${base + 7}, $${base + 8}, $${base + 9})`;
    }).join(', ');

    const params = links.flatMap(link => [
      link.newsletterId,
      link.originalUrl,
      link.resolvedUrl,
      link.linkText,
      link.positionInEmail,
      link.isTrackingLink,
      link.resolutionStatus,
      link.resolutionError,
      link.retryCount,
    ]);

    await query(
      `INSERT INTO links (
        newsletter_id, original_url, resolved_url, link_text, position_in_email,
        is_tracking_link, resolution_status, resolution_error, retry_count
      ) VALUES ${values}`,
      params
    );
  }

  async findByNewsletterId(newsletterId: number): Promise<NewsletterLink[]> {
    const result = await query(
      'SELECT * FROM links WHERE newsletter_id = $1 ORDER BY position_in_email',
      [newsletterId]
    );

    return result.rows;
  }

  async findPendingLinks(limit: number): Promise<NewsletterLink[]> {
    const result = await query(
      `SELECT * FROM links 
       WHERE resolution_status = 'pending' 
       ORDER BY created_at ASC
       LIMIT $1`,
      [limit]
    );

    return result.rows;
  }

  async updateResolution(
    id: number,
    resolvedUrl: string,
    status: 'resolved' | 'failed',
    error?: string
  ): Promise<void> {
    await query(
      `UPDATE links 
       SET resolved_url = $1, 
           resolution_status = $2, 
           resolution_attempted_at = NOW(),
           resolution_error = $3,
           retry_count = retry_count + 1
       WHERE id = $4`,
      [resolvedUrl, status, error, id]
    );
  }

  async findPopularLinks(weekStart: Date, limit: number, minCount: number): Promise<any[]> {
    const result = await query(
      `SELECT resolved_url, appearance_count, newsletter_ids
       FROM link_stats
       WHERE week_start = $1 AND appearance_count >= $2
       ORDER BY appearance_count DESC
       LIMIT $3`,
      [weekStart, minCount, limit]
    );

    return result.rows;
  }
}
