import { Email } from '../types/index.js';

export interface IEmailProvider {
  /**
   * Authenticate with the email provider
   */
  authenticate(): Promise<void>;

  /**
   * Get all available labels/folders
   */
  getLabels(): Promise<string[]>;

  /**
   * Fetch emails from a specific label/folder within a date range
   * @param labelOrFolder The label (Gmail) or folder (Hotmail) name
   * @param since Fetch emails since this date
   * @param pageToken Optional token for pagination
   */
  fetchEmails(
    labelOrFolder: string,
    since: Date,
    pageToken?: string
  ): Promise<{ emails: Email[]; nextPageToken?: string }>;

  /**
   * Check if authenticated
   */
  isAuthenticated(): boolean;
}
