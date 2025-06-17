import fs from 'fs';

export function getLoginData() {
  const data = fs.readFileSync('data/loginData.json', 'utf-8');
  return JSON.parse(data);
}

export async function measurePerformance<T>(fn: () => Promise<T>): Promise<{ result: T; duration: number }> {
  const start = Date.now();
  const result = await fn();
  const duration = Date.now() - start;
  return { result, duration };
} 