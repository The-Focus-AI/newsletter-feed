import express from 'express';
import { NewsletterModel } from '../models/newsletter.model.js';
import { LinkModel } from '../models/link.model.js';
import { SyncService } from '../services/sync.service.js';
import { LinkResolverService } from '../services/link-resolver.service.js';
import { GmailProvider } from '../providers/GmailProvider.js';
import { HotmailProvider } from '../providers/HotmailProvider.js';
import { config } from '../config/env.js';
import { logger } from '../utils/logger.js';
import { query } from '../config/database.js';

const router = express.Router();
const newsletterModel = new NewsletterModel();
const linkModel = new LinkModel();
const syncService = new SyncService();
const linkResolver = new LinkResolverService();

// Health check
router.get('/health', (req, res) => {
  res.json({ status: 'ok', provider: config.provider });
});

// Trigger sync
router.post('/sync', async (req, res) => {
  try {
    const force = req.query.force === 'true';
    
    // Get provider
    const provider = config.provider === 'gmail' 
      ? new GmailProvider() 
      : new HotmailProvider();

    await provider.authenticate();

    // For now, use a default label/folder
    const labelOrFolder = config.provider === 'gmail' ? 'newsletter' : 'Newsletters';
    const providerId = 1; // Hardcoded for simplicity

    const result = await syncService.syncEmails(provider, labelOrFolder, providerId, force);

    res.json({
      status: 'completed',
      emailsSynced: result.synced,
      newEmails: result.newEmails,
    });
  } catch (error: any) {
    logger.error('Sync failed', error);
    res.status(500).json({ error: error.message });
  }
});

// Get newsletters
router.get('/newsletters', async (req, res) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 50;
    const since = req.query.since ? new Date(req.query.since as string) : undefined;
    const sender = req.query.sender as string;
    const search = req.query.search as string;

    const result = await newsletterModel.list({ page, limit, since, sender, search });

    res.json({
      newsletters: result.newsletters,
      total: result.total,
      page,
      pages: Math.ceil(result.total / limit),
    });
  } catch (error: any) {
    logger.error('Failed to fetch newsletters', error);
    res.status(500).json({ error: error.message });
  }
});

// Get single newsletter with links
router.get('/newsletters/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const newsletter = await newsletterModel.findById(id);

    if (!newsletter) {
      return res.status(404).json({ error: 'Newsletter not found' });
    }

    const links = await linkModel.findByNewsletterId(id);

    res.json({ newsletter, links });
  } catch (error: any) {
    logger.error('Failed to fetch newsletter', error);
    res.status(500).json({ error: error.message });
  }
});

// Get popular links
router.get('/links/popular', async (req, res) => {
  try {
    const weekStr = req.query.week as string;
    const limit = parseInt(req.query.limit as string) || 20;
    const minCount = parseInt(req.query.min_count as string) || 2;

    // Parse week (e.g., "2024-W01")
    let weekStart: Date;
    if (weekStr) {
      const [year, week] = weekStr.split('-W');
      // Simple week calculation
      weekStart = new Date(parseInt(year), 0, 1 + (parseInt(week) - 1) * 7);
    } else {
      // Current week
      const now = new Date();
      const dayOfWeek = now.getDay();
      weekStart = new Date(now.setDate(now.getDate() - dayOfWeek));
      weekStart.setHours(0, 0, 0, 0);
    }

    const links = await linkModel.findPopularLinks(weekStart, limit, minCount);

    res.json({ links, week: weekStr || 'current' });
  } catch (error: any) {
    logger.error('Failed to fetch popular links', error);
    res.status(500).json({ error: error.message });
  }
});

// Resolve a single link
router.get('/links/resolve', async (req, res) => {
  try {
    const url = req.query.url as string;

    if (!url) {
      return res.status(400).json({ error: 'url parameter required' });
    }

    const result = await linkResolver.resolveUrl(url);

    res.json({
      original: url,
      resolved: result.resolved,
      trackingRemoved: result.isTracking,
    });
  } catch (error: any) {
    logger.error('Failed to resolve link', error);
    res.status(500).json({ error: error.message });
  }
});

// Get stats
router.get('/stats', async (req, res) => {
  try {
    const newsletterCount = await query('SELECT COUNT(*) FROM newsletters');
    const linkCount = await query('SELECT COUNT(*) FROM links');
    const resolvedCount = await query("SELECT COUNT(*) FROM links WHERE resolution_status = 'resolved'");
    const pendingCount = await query("SELECT COUNT(*) FROM links WHERE resolution_status = 'pending'");

    res.json({
      totalNewsletters: parseInt(newsletterCount.rows[0].count),
      totalLinks: parseInt(linkCount.rows[0].count),
      linksResolved: parseInt(resolvedCount.rows[0].count),
      linksPending: parseInt(pendingCount.rows[0].count),
    });
  } catch (error: any) {
    logger.error('Failed to fetch stats', error);
    res.status(500).json({ error: error.message });
  }
});

export default router;
