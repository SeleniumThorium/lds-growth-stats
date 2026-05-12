import { NextRequest } from "next/server";

// Use the Node runtime so the in-memory rate-limit map persists across
// requests on the same instance. (Edge runtime instances are short-lived.)
export const runtime = "nodejs";

const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 3;

type RateEntry = { count: number; windowStart: number };
const hits = new Map<string, RateEntry>();

function rateLimit(ip: string): boolean {
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

function clientIp(req: NextRequest): string {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0]?.trim() || "unknown";
  return req.headers.get("x-real-ip") ?? "unknown";
}

export async function POST(req: NextRequest) {
  const topicUrl = process.env.NTFY_TOPIC_URL;
  if (!topicUrl) {
    return Response.json(
      { error: "Contact endpoint is not configured yet." },
      { status: 503 },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (typeof body !== "object" || body === null) {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const b = body as Record<string, unknown>;
  const name = typeof b.name === "string" ? b.name.trim() : "";
  const contact = typeof b.contact === "string" ? b.contact.trim() : "";
  const message = typeof b.message === "string" ? b.message.trim() : "";
  const honeypot = typeof b.website === "string" ? b.website : "";

  // Honeypot — silently accept so bots can't tell they were caught.
  if (honeypot) {
    return Response.json({ ok: true });
  }

  if (!name || name.length > 80) {
    return Response.json(
      { error: "Please add your name (under 80 characters)." },
      { status: 400 },
    );
  }
  if (!message || message.length > 500) {
    return Response.json(
      { error: "Please add a message (under 500 characters)." },
      { status: 400 },
    );
  }
  if (contact.length > 120) {
    return Response.json({ error: "Contact field is too long." }, { status: 400 });
  }

  const ip = clientIp(req);
  if (!rateLimit(ip)) {
    return Response.json(
      { error: "Too many messages from this network. Try again in a few minutes." },
      { status: 429 },
    );
  }

  const lines: string[] = [`From: ${name}`];
  if (contact) lines.push(`Reach back: ${contact}`);
  lines.push("", message);

  try {
    const ntfyRes = await fetch(topicUrl, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        // Keep header values ASCII-safe — name lives in the body.
        Title: "Site message",
        Tags: "speech_balloon",
        Priority: "default",
      },
      body: lines.join("\n"),
    });
    if (!ntfyRes.ok) {
      throw new Error(`ntfy responded ${ntfyRes.status}`);
    }
  } catch (err) {
    console.error("ntfy publish failed", err);
    return Response.json(
      { error: "Couldn't deliver the message. Please try email instead." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
