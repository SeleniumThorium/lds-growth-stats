"use client";

import { useState } from "react";
import Link from "next/link";
import { synopticEvents, gospelColors, SynopticEvent } from "@/data/synopticData";

const gospels = ["Matthew", "Mark", "Luke", "John"] as const;

const bookSlugs: Record<string, string> = {
  Matthew: "matt",
  Mark: "mark",
  Luke: "luke",
  John: "john",
};

/**
 * Build a URL to churchofjesuschrist.org for a scripture reference.
 * Handles formats like "26:17–19", "18:1", "18:13–14, 19–24", "14:1–16:33"
 */
function scriptureUrl(book: string, reference: string): string {
  const slug = bookSlugs[book];
  const base = "https://www.churchofjesuschrist.org/study/scriptures/nt";

  // Check for cross-chapter ranges like "14:1–16:33"
  const crossChapter = reference.match(/^(\d+):(\d+)[–-](\d+):(\d+)$/);
  if (crossChapter) {
    const [, ch1, v1] = crossChapter;
    return `${base}/${slug}/${ch1}?lang=eng&id=p${v1}#p${v1}`;
  }

  // Parse chapter and verse segments like "18:13–14, 19–24"
  const chapterMatch = reference.match(/^(\d+):(.*)/);
  if (!chapterMatch) return `${base}/${slug}?lang=eng`;

  const chapter = chapterMatch[1];
  const versesPart = chapterMatch[2];

  // Build verse ID fragments: "13–14, 19–24" → "p13-p14,p19-p24"
  const segments = versesPart.split(/,\s*/);
  const ids = segments.map((seg) => {
    const range = seg.trim().split(/[–-]/);
    if (range.length === 2) {
      return `p${range[0].trim()}-p${range[1].trim()}`;
    }
    return `p${range[0].trim()}`;
  });

  return `${base}/${slug}/${chapter}?lang=eng&id=${ids.join(",")}#${ids[0].split("-")[0]}`;
}

const timeframeOrder = [
  "Thursday Evening",
  "Thursday Night",
  "Early Friday Morning",
  "Friday Morning",
  "Friday ~9:00 AM",
  "Friday Noon–3:00 PM",
  "Friday ~3:00 PM",
  "Friday Late Afternoon",
  "Saturday",
];

export default function SynopticStudy() {
  const [expandedTimeframe, setExpandedTimeframe] = useState<string | null>(null);
  const [highlightGospel, setHighlightGospel] = useState<string | null>(null);

  // Group events by timeframe
  const grouped = timeframeOrder.map((tf) => ({
    timeframe: tf,
    events: synopticEvents.filter((e) => e.timeframe === tf),
  }));

  // Count how many events each gospel records
  const gospelCounts = gospels.reduce((acc, g) => {
    const key = g.toLowerCase() as keyof SynopticEvent;
    acc[g] = synopticEvents.filter((e) => e[key] !== null).length;
    return acc;
  }, {} as Record<string, number>);

  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="text-sm text-blue-600 hover:text-blue-800 transition-colors mb-3 inline-block"
          >
            &larr; Back to SeleniumThorium Development
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">
            Synoptic Study
          </h1>
          <p className="mt-2 text-gray-600">
            The Last 24 Hours of the Savior&rsquo;s Mortal Life &mdash; A Harmony of the Four Gospels
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Gospel legend & stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {gospels.map((g) => {
            const color = gospelColors[g];
            const isActive = highlightGospel === g;
            return (
              <button
                key={g}
                onClick={() => setHighlightGospel(isActive ? null : g)}
                className={`rounded-xl border p-4 text-left transition-all ${
                  isActive
                    ? "shadow-md ring-2"
                    : "bg-white border-gray-200 hover:shadow-sm"
                }`}
                style={
                  isActive
                    ? { borderColor: color, outlineColor: color, backgroundColor: `${color}08` }
                    : {}
                }
              >
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="w-3 h-3 rounded-full inline-block"
                    style={{ backgroundColor: color }}
                  />
                  <span className="font-semibold text-gray-900">{g}</span>
                </div>
                <p className="text-sm text-gray-500">
                  {gospelCounts[g]} of {synopticEvents.length} events
                </p>
              </button>
            );
          })}
        </div>

        {/* Timeline table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {/* Desktop table */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-4 py-3 text-left text-sm font-semibold w-[200px] border-r border-gray-700">
                    Event
                  </th>
                  {gospels.map((g) => (
                    <th
                      key={g}
                      className="px-4 py-3 text-center text-sm font-semibold border-r border-gray-700 last:border-r-0"
                      style={
                        highlightGospel === g
                          ? { backgroundColor: gospelColors[g] }
                          : {}
                      }
                    >
                      {g}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {grouped.map(({ timeframe, events }) => (
                  <>
                    <tr key={`tf-${timeframe}`} className="bg-amber-50">
                      <td
                        colSpan={5}
                        className="px-4 py-2 text-sm font-bold text-amber-800 border-b border-amber-200"
                      >
                        {timeframe}
                      </td>
                    </tr>
                    {events.map((event) => {
                      const gospelKeys = ["matthew", "mark", "luke", "john"] as const;
                      return (
                        <tr
                          key={event.id}
                          className="border-b border-gray-200 hover:bg-blue-50/30 transition-colors"
                        >
                          <td className="px-4 py-4 font-medium text-gray-900 border-r border-gray-200 align-top">
                            <span className="text-sm leading-snug">{event.event}</span>
                          </td>
                          {gospelKeys.map((g) => {
                            const entry = event[g];
                            const gospel = g.charAt(0).toUpperCase() + g.slice(1);
                            const dimmed =
                              highlightGospel && gospel !== highlightGospel;
                            return (
                              <td
                                key={g}
                                className={`px-4 py-4 border-r border-gray-200 last:border-r-0 align-top transition-opacity ${
                                  dimmed ? "opacity-25" : ""
                                } ${!entry ? "bg-gray-50" : ""}`}
                              >
                                {entry ? (
                                  <>
                                    <a
                                      href={scriptureUrl(gospel, entry.reference)}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-block text-xs font-bold px-2 py-0.5 rounded mb-1.5 hover:underline"
                                      style={{
                                        backgroundColor: `${gospelColors[gospel as keyof typeof gospelColors]}18`,
                                        color: gospelColors[gospel as keyof typeof gospelColors],
                                      }}
                                    >
                                      {entry.reference}
                                    </a>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                      {entry.summary}
                                    </p>
                                  </>
                                ) : (
                                  <span className="text-gray-300 block text-center">—</span>
                                )}
                              </td>
                            );
                          })}
                        </tr>
                      );
                    })}
                  </>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile accordion */}
          <div className="lg:hidden">
            {grouped.map(({ timeframe, events }) => (
              <div key={timeframe}>
                <button
                  onClick={() =>
                    setExpandedTimeframe(
                      expandedTimeframe === timeframe ? null : timeframe
                    )
                  }
                  className="w-full px-4 py-3 bg-amber-50 border-b border-amber-200 flex items-center justify-between"
                >
                  <span className="text-sm font-bold text-amber-800">
                    {timeframe}
                  </span>
                  <span className="text-amber-600 text-lg">
                    {expandedTimeframe === timeframe ? "−" : "+"}
                  </span>
                </button>
                {(expandedTimeframe === timeframe || expandedTimeframe === null) &&
                  events.map((event) => (
                    <div
                      key={event.id}
                      className="border-b border-gray-200 px-4 py-4"
                    >
                      <h3 className="font-semibold text-gray-900 mb-3">
                        {event.event}
                      </h3>
                      <div className="space-y-3">
                        {(["matthew", "mark", "luke", "john"] as const).map(
                          (g) => {
                            const entry = event[g];
                            if (!entry) return null;
                            const gospel =
                              g.charAt(0).toUpperCase() + g.slice(1);
                            const color =
                              gospelColors[
                                gospel as keyof typeof gospelColors
                              ];
                            return (
                              <div
                                key={g}
                                className="pl-3 border-l-2"
                                style={{ borderColor: color }}
                              >
                                <div className="flex items-center gap-2 mb-0.5">
                                  <a
                                    href={scriptureUrl(gospel, entry.reference)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs font-bold px-2 py-0.5 rounded hover:underline"
                                    style={{
                                      backgroundColor: `${color}18`,
                                      color,
                                    }}
                                  >
                                    {gospel} {entry.reference}
                                  </a>
                                </div>
                                <p className="text-sm text-gray-600">
                                  {entry.summary}
                                </p>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>

        {/* Key insights */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <p className="text-sm text-gray-500">Total Events Chronicled</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">
              {synopticEvents.length}
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <p className="text-sm text-gray-500">Events in All Four Gospels</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">
              {
                synopticEvents.filter(
                  (e) => e.matthew && e.mark && e.luke && e.john
                ).length
              }
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <p className="text-sm text-gray-500">Unique to One Gospel</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">
              {
                synopticEvents.filter((e) => {
                  const count = [e.matthew, e.mark, e.luke, e.john].filter(
                    Boolean
                  ).length;
                  return count === 1;
                }).length
              }
            </p>
          </div>
        </div>

        {/* Source note */}
        <div className="mt-8 text-xs text-gray-400">
          <p>
            Source: The King James Version of the Holy Bible &mdash; the Gospels
            of Matthew, Mark, Luke, and John.
          </p>
        </div>
      </div>
    </main>
  );
}
