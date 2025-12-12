export interface Email {
  messageId: string;
  threadId?: string;
  from: {
    email: string;
    name?: string;
  };
  subject: string;
  date: Date;
  plainText?: string;
  html?: string;
  headers: Record<string, any>;
}

export interface Link {
  url: string;
  text?: string;
  position: number;
}

export interface ProviderCredentials {
  id?: number;
  providerType: 'gmail' | 'hotmail';
  emailAddress: string;
  encryptedCredentials: string;
  labelFolderName?: string;
  lastAuthenticatedAt?: Date;
}

export interface Newsletter {
  id?: number;
  providerId: number;
  messageId: string;
  threadId?: string;
  senderEmail: string;
  senderName?: string;
  subject: string;
  dateReceived: Date;
  plainTextContent?: string;
  htmlContent?: string;
  headers: Record<string, any>;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface NewsletterLink {
  id?: number;
  newsletterId: number;
  originalUrl: string;
  resolvedUrl?: string;
  linkText?: string;
  positionInEmail: number;
  isTrackingLink: boolean;
  resolutionStatus: 'pending' | 'resolved' | 'failed';
  resolutionAttemptedAt?: Date;
  resolutionError?: string;
  retryCount: number;
  createdAt?: Date;
}

export interface SyncState {
  id?: number;
  providerId: number;
  lastSyncTime?: Date;
  lastHistoryId?: string;
  emailsSynced: number;
  syncStatus?: 'running' | 'completed' | 'failed';
  createdAt?: Date;
}

export interface LinkStats {
  id?: number;
  resolvedUrl: string;
  weekStart: Date;
  appearanceCount: number;
  newsletterIds: number[];
}
