import pg from 'pg';
import { config } from './env.js';

const { Pool } = pg;

export const pool = new Pool({
  connectionString: config.databaseUrl,
});

pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

export async function query<T = any>(text: string, params?: any[]): Promise<pg.QueryResult<T>> {
  const start = Date.now();
  const res = await pool.query<T>(text, params);
  const duration = Date.now() - start;
  
  if (config.nodeEnv === 'development') {
    console.log('Executed query', { text, duration, rows: res.rowCount });
  }
  
  return res;
}

export async function getClient() {
  return pool.connect();
}

export async function closePool() {
  await pool.end();
}
