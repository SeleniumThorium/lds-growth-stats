// Shared in-memory rate-limit + client-IP helper used by both contact-form
// API routes (/api/text and /api/email). Routes that import this MUST set
// `export const runtime = "nodejs"` so the Map persists across requests on
// the same instance (the Edge runtime’s instances are too short-lived).

const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 3;

type RateEntry = { count: number; windowStart: number };
const hits = new Map<string, RateEntry>();

export function rateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || now - entry.windowStart > WINDOW_MS) {
    hits.set(ip, { count: 1, windowStart: now });
    return true;
  }
  if (entry.count >= MAX_REQUESTS_PER_WINDOW) return false;
  entry.count += 1;
  return true;
}

export function clientIp(req: Request): string {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0]?.trim() || "unknown";
  return req.headers.get("x-real-ip") ?? "unknown";
}
