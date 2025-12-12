import express from 'express';
import { config } from './config/env.js';
import { logger } from './utils/logger.js';
import { pool } from './config/database.js';
import { LinkResolverWorker } from './workers/link-resolver.worker.js';
import routes from './routes/index.js';

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api', routes);

// Error handler
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  logger.error('Unhandled error', err);
  res.status(500).json({ error: 'Internal server error' });
});

// Start server
const server = app.listen(config.port, () => {
  logger.info(`Newsletter Feed Service running on port ${config.port}`);
  logger.info(`Provider: ${config.provider}`);
  logger.info(`Environment: ${config.nodeEnv}`);
});

// Start link resolver worker
const worker = new LinkResolverWorker();
worker.start(30000); // Run every 30 seconds

// Graceful shutdown
process.on('SIGTERM', async () => {
  logger.info('SIGTERM received, shutting down gracefully');
  worker.stop();
  server.close(() => {
    logger.info('Server closed');
    pool.end();
    process.exit(0);
  });
});

process.on('SIGINT', async () => {
  logger.info('SIGINT received, shutting down gracefully');
  worker.stop();
  server.close(() => {
    logger.info('Server closed');
    pool.end();
    process.exit(0);
  });
});

export default app;
