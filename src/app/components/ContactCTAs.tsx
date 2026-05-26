"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

interface ContactCTAsProps {
  linkedinUrl: string;
}

export function ContactCTAs({ linkedinUrl }: ContactCTAsProps) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || "").trim(),
      contact: String(data.get("contact") || "").trim(),
      message: String(data.get("message") || "").trim(),
      website: String(data.get("website") || ""), // honeypot
    };

    if (!payload.name || !payload.message) {
      setStatus("error");
      setErrorMsg("Name and message are required.");
      return;
    }

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/text", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || `Request failed (${res.status})`);
      }
      setStatus("sent");
      form.reset();
      // Auto-close after a beat so the form is fresh next time.
      window.setTimeout(() => {
        setStatus("idle");
        setOpen(false);
      }, 3500);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  function togglePanel() {
    setOpen((v) => !v);
    setStatus("idle");
    setErrorMsg("");
  }

  return (
    <div className="mt-8">
      <div className="flex flex-wrap items-center gap-3">
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-5 py-2.5 text-sm font-medium hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path d="M20.452 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.356V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.602 0 4.268 2.37 4.268 5.455v6.288zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          LinkedIn
        </a>

        <button
          type="button"
          onClick={togglePanel}
          aria-expanded={open}
          aria-controls="contact-panel"
          className="inline-flex items-center gap-2 rounded-md border border-gray-300 dark:border-gray-700 px-5 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-gray-500 dark:hover:border-gray-500 transition-colors"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 6 9-6" />
          </svg>
          Email
        </button>

        <button
          type="button"
          onClick={togglePanel}
          aria-expanded={open}
          aria-controls="contact-panel"
          className="inline-flex items-center gap-2 rounded-md border border-gray-300 dark:border-gray-700 px-5 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-gray-500 dark:hover:border-gray-500 transition-colors"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
          Text me
        </button>
      </div>

      {open && (
        <div
          id="contact-panel"
          className="relative mt-4 max-w-xl rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/40 p-5"
        >
          {status === "sent" ? (
            <div className="flex items-start gap-3">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 mt-0.5 text-green-600 dark:text-green-400 shrink-0"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Got it — I&apos;ll get back to you.
                </p>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  Your note is on my phone. Expect a reply within a day.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                This pings my phone directly. Three quick fields:
              </p>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your name
                  </span>
                  <input
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    maxLength={80}
                    className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </label>
                <label className="block">
                  <span className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                    How to reach you back{" "}
                    <span className="text-gray-400">(optional)</span>
                  </span>
                  <input
                    name="contact"
                    type="text"
                    autoComplete="email"
                    maxLength={120}
                    placeholder="email or phone"
                    className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </label>
              </div>

              <label className="block mt-4">
                <span className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </span>
                <textarea
                  name="message"
                  required
                  rows={3}
                  maxLength={500}
                  className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </label>

              {/* Honeypot — must stay empty. Real users won't see this. */}
              <div aria-hidden="true" className="absolute left-[-9999px] top-auto w-px h-px overflow-hidden">
                <label>
                  Website
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </label>
              </div>

              {status === "error" && errorMsg && (
                <p className="mt-3 text-sm text-red-600 dark:text-red-400">
                  {errorMsg}
                </p>
              )}

              <div className="mt-4 flex items-center gap-3">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center gap-2 rounded-md bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-2 text-sm font-medium hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "Sending…" : "Send"}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    setStatus("idle");
                    setErrorMsg("");
                  }}
                  className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      )}
    </div>
  );
}
