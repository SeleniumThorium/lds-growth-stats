import { NextRequest } from "next/server";
import { Resend } from "resend";
import { rateLimit, clientIp } from "../../../lib/rateLimit";

// Use the Node runtime so the in-memory rate-limit map in lib/rateLimit
// persists across requests on the same instance.
export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_RECIPIENT_EMAIL;
  if (!apiKey || !recipient) {
    return Response.json(
      { error: "Email endpoint is not configured yet." },
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

  // Honeypot — silently accept so bots can’t tell they were caught.
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

  if (!rateLimit(clientIp(req))) {
    return Response.json(
      { error: "Too many messages from this network. Try again in a few minutes." },
      { status: 429 },
    );
  }

  const lines: string[] = [`From: ${name}`];
  if (contact) lines.push(`Reach back: ${contact}`);
  lines.push("", message);
  const text = lines.join("\n");

  // If the visitor gave us something that looks like an email, set it as
  // Reply-To so one tap in Gmail goes back to them.
  const looksLikeEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(contact);

  const resend = new Resend(apiKey);
  try {
    const result = await resend.emails.send({
      from: "Site Contact <onboarding@resend.dev>",
      to: [recipient],
      subject: `Contact form: ${name}`,
      text,
      replyTo: looksLikeEmail ? contact : undefined,
    });
    if (result.error) {
      throw new Error(result.error.message ?? "Resend error");
    }
  } catch (err) {
    console.error("resend send failed", err);
    return Response.json(
      { error: "Couldn’t deliver the message. Please try again, or reach out on LinkedIn." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
