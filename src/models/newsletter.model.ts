import { query } from '../config/database.js';
import { Newsletter } from '../types/index.js';

export class NewsletterModel {
  async create(newsletter: Newsletter): Promise<Newsletter> {
    const result = await query(
      `INSERT INTO newsletters (
        provider_id, message_id, thread_id, sender_email, sender_name,
        subject, date_received, plain_text_content, html_content, headers
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
      ON CONFLICT (message_id) DO NOTHING
      RETURNING *`,
      [
        newsletter.providerId,
        newsletter.messageId,
        newsletter.threadId,
        newsletter.senderEmail,
        newsletter.senderName,
        newsletter.subject,
        newsletter.dateReceived,
        newsletter.plainTextContent,
        newsletter.htmlContent,
        JSON.stringify(newsletter.headers),
      ]
    );

    return result.rows[0];
  }

  async findById(id: number): Promise<Newsletter | null> {
    const result = await query(
      'SELECT * FROM newsletters WHERE id = $1',
      [id]
    );

    return result.rows[0] || null;
  }

  async findByMessageId(messageId: string): Promise<Newsletter | null> {
    const result = await query(
      'SELECT * FROM newsletters WHERE message_id = $1',
      [messageId]
    );

    return result.rows[0] || null;
  }

  async list(params: {
    page?: number;
    limit?: number;
    since?: Date;
    sender?: string;
    search?: string;
  }): Promise<{ newsletters: Newsletter[]; total: number }> {
    const page = params.page || 1;
    const limit = params.limit || 50;
    const offset = (page - 1) * limit;

    let whereClause = '';
    const queryParams: any[] = [];
    let paramCount = 1;

    if (params.since) {
      whereClause += ` WHERE date_received >= $${paramCount}`;
      queryParams.push(params.since);
      paramCount++;
    }

    if (params.sender) {
      whereClause += whereClause ? ' AND' : ' WHERE';
      whereClause += ` sender_email = $${paramCount}`;
      queryParams.push(params.sender);
      paramCount++;
    }

    if (params.search) {
      whereClause += whereClause ? ' AND' : ' WHERE';
      whereClause += ` (subject ILIKE $${paramCount} OR plain_text_content ILIKE $${paramCount})`;
      queryParams.push(`%${params.search}%`);
      paramCount++;
    }

    const countResult = await query(
      `SELECT COUNT(*) FROM newsletters${whereClause}`,
      queryParams
    );

    const dataResult = await query(
      `SELECT * FROM newsletters${whereClause}
       ORDER BY date_received DESC
       LIMIT $${paramCount} OFFSET $${paramCount + 1}`,
      [...queryParams, limit, offset]
    );

    return {
      newsletters: dataResult.rows,
      total: parseInt(countResult.rows[0].count, 10),
    };
  }
}
