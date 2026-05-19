import Redis from 'ioredis';

const globalForRedis = global as unknown as { redis: Redis };

export const redis =
  globalForRedis.redis ||
  new Redis(process.env.REDIS_URL || 'redis://localhost:6379');

if (process.env.NODE_ENV !== 'production') globalForRedis.redis = redis;

/**
 * Retrieves cached data if it exists, otherwise executes a fetcher function,
 * caches the result, and returns it.
 * 
 * @param key The Redis cache key
 * @param fetcher The function to fetch fresh data if cache miss
 * @param ttl Time to live in seconds (default: 3600 seconds)
 */
export async function fetchWithCache<T>(
  key: string,
  fetcher: () => Promise<T>,
  ttl: number = 3600
): Promise<T> {
  try {
    const cached = await redis.get(key);
    if (cached) {
      return JSON.parse(cached) as T;
    }
  } catch (error) {
    console.error(`Redis get error for key ${key}:`, error);
  }

  const freshData = await fetcher();

  try {
    if (freshData) {
      await redis.set(key, JSON.stringify(freshData), 'EX', ttl);
    }
  } catch (error) {
    console.error(`Redis set error for key ${key}:`, error);
  }

  return freshData;
}

export default redis;
