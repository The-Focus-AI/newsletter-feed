import { config } from '../config/env.js';
import { logger } from './logger.js';

export async function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function retryWithBackoff<T>(
  fn: () => Promise<T>,
  operation: string,
  maxRetries: number = config.retry.maxRetries,
  delays: number[] = config.retry.delays
): Promise<T> {
  let lastError: Error | undefined;
  
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error as Error;
      
      if (i < maxRetries - 1) {
        const delay = delays[i] || delays[delays.length - 1];
        logger.warn(`${operation} failed, retrying in ${delay}ms (attempt ${i + 1}/${maxRetries})`, {
          error: lastError.message,
        });
        await sleep(delay);
      }
    }
  }
  
  logger.error(`${operation} failed after ${maxRetries} attempts`, {
    error: lastError?.message,
  });
  throw lastError;
}
