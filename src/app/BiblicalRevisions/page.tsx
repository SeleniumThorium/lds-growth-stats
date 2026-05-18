"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  biblicalRevisions,
  categoryColors,
  BiblicalRevision,
  RevisionCategory,
} from "@/data/biblicalRevisions";

const categories: RevisionCategory[] = [
  "Manuscript Tradition",
  "Canon Decision",
  "Translation",
  "Critical Text",
  "Disputed Passage",
  "Modern Translation",
  "Restoration",
];

interface Era {
  label: string;
  range: string;
  min: number;
  max: number;
}

const eras: Era[] = [
  { label: "Hebrew & Greek Origins", range: "pre-AD 100", min: -10000, max: 100 },
  { label: "Early Church & Canon", range: "AD 100–600", min: 100, max: 600 },
  { label: "Medieval Transmission", range: "600–1500", min: 600, max: 1500 },
  { label: "Reformation & KJV", range: "1500–1700", min: 1500, max: 1700 },
  { label: "Standardization & Critical Era", range: "1700–1900", min: 1700, max: 1900 },
  { label: "Modern & Restoration", range: "1900–present", min: 1900, max: 3000 },
];

interface PassageFilter {
  key: string;
  label: string;
  matches: (passage: string) => boolean;
}

// Cross-cutting verses that recur across multiple entries — the highest-value
// interaction for showing how a single textual question threads through history.
const passageFilters: PassageFilter[] = [
  {
    key: "mark16",
    label: "Mark 16:9–20",
    matches: (s) => /^Mark\s+16/i.test(s),
  },
  {
    key: "john8",
    label: "John 7:53–8:11",
    matches: (s) => /^John\s+(7:53|8:1)/i.test(s),
  },
  {
    key: "1john5",
    label: "1 John 5:7 (Comma Johanneum)",
    matches: (s) => /^1\s*John\s+5:7/i.test(s),
  },
  {
    key: "isaiah714",
    label: "Isaiah 7:14",
    matches: (s) => /^Isaiah\s+7:14/i.test(s),
  },
];

function entryMatchesPassage(entry: BiblicalRevision, filter: PassageFilter): boolean {
  return (entry.passagesAffected ?? []).some(filter.matches);
}

// Two visible inheritance chains in the data. Each node references an entry id
// so clicking scrolls to the corresponding card below.
interface LineageNode {
  id: number;
  label: string;
  year: string;
}

const kjvLineage: LineageNode[] = [
  { id: 15, label: "Tyndale NT", year: "1526" },
  { id: 16, label: "Coverdale / Great", year: "1535–39" },
  { id: 18, label: "Geneva", year: "1560" },
  { id: 19, label: "Bishops’", year: "1568" },
  { id: 20, label: "KJV", year: "1611" },
  { id: 21, label: "KJV 1769", year: "1769" },
  { id: 33, label: "LDS KJV", year: "1979" },
];

const criticalLineage: LineageNode[] = [
  { id: 25, label: "RV / ASV", year: "1881–1901" },
  { id: 32, label: "RSV", year: "1952" },
  { id: 35, label: "NRSV", year: "1989" },
  { id: 37, label: "ESV", year: "2001" },
];

const restorationBranch: LineageNode = { id: 22, label: "JST", year: "1830–33" };

function scrollToEntry(id: number) {
  const el = document.getElementById(`entry-${id}`);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function LineageRow({
  label,
  chain,
  branch,
}: {
  label: string;
  chain: LineageNode[];
  branch?: { from: number; node: LineageNode };
}) {
  return (
    <div>
      <p className="text-[11px] font-mono uppercase tracking-[0.15em] text-gray-500 dark:text-gray-400 mb-2">
        {label}
      </p>
      <div className="flex flex-wrap items-center gap-1.5">
        {chain.map((node, i) => (
          <span key={node.id} className="flex items-center gap-1.5">
            <button
              onClick={() => scrollToEntry(node.id)}
              className="px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-900/40 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              title={`Jump to ${node.label}`}
            >
              {node.label}{" "}
              <span className="text-gray-400 dark:text-gray-500 font-mono">{node.year}</span>
            </button>
            {i < chain.length - 1 && (
              <span className="text-gray-300 dark:text-gray-600 select-none">→</span>
            )}
            {branch && branch.from === node.id && (
              <>
                <span className="text-amber-500 dark:text-amber-400 select-none">↘</span>
                <button
                  onClick={() => scrollToEntry(branch.node.id)}
                  className="px-2.5 py-1 rounded-md text-xs font-medium border border-amber-300 dark:border-amber-700 text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/40 hover:bg-amber-100 dark:hover:bg-amber-900/40 transition-colors"
                  title={`Jump to ${branch.node.label}`}
                >
                  {branch.node.label}{" "}
                  <span className="font-mono opacity-70">{branch.node.year}</span>
                </button>
              </>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function BiblicalRevisions() {
  const [activeCategory, setActiveCategory] = useState<RevisionCategory | null>(null);
  const [activePassage, setActivePassage] = useState<string | null>(null);

  const categoryCounts = useMemo(() => {
    return categories.reduce((acc, c) => {
      acc[c] = biblicalRevisions.filter((e) => e.category === c).length;
      return acc;
    }, {} as Record<RevisionCategory, number>);
  }, []);

  const passageCounts = useMemo(() => {
    return passageFilters.reduce((acc, p) => {
      acc[p.key] = biblicalRevisions.filter((e) => entryMatchesPassage(e, p)).length;
      return acc;
    }, {} as Record<string, number>);
  }, []);

  const filtered = useMemo(() => {
    return [...biblicalRevisions]
      .sort((a, b) => a.sortYear - b.sortYear)
      .filter((e) => !activeCategory || e.category === activeCategory)
      .filter((e) => {
        if (!activePassage) return true;
        const p = passageFilters.find((x) => x.key === activePassage);
        return p ? entryMatchesPassage(e, p) : true;
      });
  }, [activeCategory, activePassage]);

  const groupedByEra = useMemo(() => {
    return eras
      .map((era) => ({
        era,
        events: filtered.filter((e) => e.sortYear >= era.min && e.sortYear < era.max),
      }))
      .filter((g) => g.events.length > 0);
  }, [filtered]);

  const disputedCount = useMemo(
    () => biblicalRevisions.filter((e) => e.category === "Disputed Passage").length,
    []
  );

  const yearsSpanned = useMemo(() => {
    const min = Math.min(...biblicalRevisions.map((e) => e.sortYear));
    const max = Math.max(...biblicalRevisions.map((e) => e.sortYear));
    return max - min;
  }, []);

  const togglePassage = (key: string) => {
    setActivePassage((cur) => (cur === key ? null : key));
  };

  const toggleCategory = (cat: RevisionCategory) => {
    setActiveCategory((cur) => (cur === cat ? null : cat));
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors mb-3 inline-block"
          >
            &larr; Back to SeleniumThorium Development
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Biblical Revisions
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Textual, canonical, and translational turning points in the history of the Bible.
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Category legend & filter */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 mb-4">
          {categories.map((c) => {
            const color = categoryColors[c];
            const isActive = activeCategory === c;
            return (
              <button
                key={c}
                onClick={() => toggleCategory(c)}
                className={`rounded-xl border p-3 text-left transition-all ${
                  isActive
                    ? "shadow-md ring-2"
                    : "bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:shadow-sm"
                }`}
                style={
                  isActive
                    ? { borderColor: color, outlineColor: color, backgroundColor: `${color}18` }
                    : {}
                }
              >
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="w-2.5 h-2.5 rounded-full inline-block shrink-0"
                    style={{ backgroundColor: color }}
                  />
                  <span className="text-xs font-semibold text-gray-900 dark:text-white leading-tight">
                    {c}
                  </span>
                </div>
                <p className="text-[11px] text-gray-500 dark:text-gray-400">
                  {categoryCounts[c]} entries
                </p>
              </button>
            );
          })}
        </div>

        {/* Passage filter pills */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-gray-500 dark:text-gray-400 mr-1">
            Filter by passage:
          </span>
          {passageFilters.map((p) => {
            const isActive = activePassage === p.key;
            return (
              <button
                key={p.key}
                onClick={() => togglePassage(p.key)}
                className={`px-2.5 py-1 rounded-full text-xs font-medium border transition-colors ${
                  isActive
                    ? "bg-red-600 text-white border-red-600"
                    : "bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-red-400 dark:hover:border-red-600"
                }`}
              >
                {p.label}{" "}
                <span className={isActive ? "opacity-80" : "text-gray-400 dark:text-gray-500"}>
                  ({passageCounts[p.key]})
                </span>
              </button>
            );
          })}
          {(activeCategory || activePassage) && (
            <button
              onClick={() => {
                setActiveCategory(null);
                setActivePassage(null);
              }}
              className="px-2.5 py-1 rounded-full text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              Clear filters ×
            </button>
          )}
        </div>

        {/* Lineage strip */}
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-5 mb-8">
          <div className="flex items-baseline justify-between mb-4">
            <h2 className="text-xs font-mono uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
              Translation Lineage
            </h2>
            <span className="text-[11px] text-gray-400 dark:text-gray-500">
              Click a node to jump to its entry
            </span>
          </div>
          <div className="space-y-4">
            <LineageRow
              label="KJV Family"
              chain={kjvLineage}
              branch={{ from: 21, node: restorationBranch }}
            />
            <LineageRow label="Critical-Era Modern" chain={criticalLineage} />
          </div>
        </div>

        {/* Timeline of cards */}
        <div className="space-y-8">
          {groupedByEra.length === 0 && (
            <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-10 text-center text-gray-500 dark:text-gray-400">
              No entries match the current filters.
            </div>
          )}
          {groupedByEra.map(({ era, events }) => (
            <section key={era.label}>
              <div className="flex items-baseline gap-3 mb-3 px-1">
                <h2 className="text-sm font-bold text-amber-800 dark:text-amber-400 uppercase tracking-wider">
                  {era.label}
                </h2>
                <span className="text-xs text-gray-400 dark:text-gray-500 font-mono">
                  {era.range}
                </span>
                <span className="text-xs text-gray-400 dark:text-gray-500 ml-auto">
                  {events.length} {events.length === 1 ? "entry" : "entries"}
                </span>
              </div>
              <div className="space-y-3">
                {events.map((entry) => {
                  const color = categoryColors[entry.category];
                  return (
                    <article
                      key={entry.id}
                      id={`entry-${entry.id}`}
                      className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden scroll-mt-4"
                      style={{ borderLeftColor: color, borderLeftWidth: 4 }}
                    >
                      <div className="p-5 lg:p-6">
                        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                          <span
                            className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded"
                            style={{ backgroundColor: `${color}18`, color }}
                          >
                            {entry.category}
                          </span>
                          <span className="text-xs font-mono text-gray-500 dark:text-gray-400">
                            {entry.date}
                          </span>
                        </div>
                        <h3 className="text-lg lg:text-xl font-semibold text-gray-900 dark:text-white">
                          {entry.name}
                        </h3>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                          {entry.description}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                          <div className="bg-gray-50 dark:bg-gray-950/50 rounded-lg p-3 border border-gray-100 dark:border-gray-800">
                            <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-gray-500 dark:text-gray-400 mb-1">
                              Reason
                            </p>
                            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                              {entry.reason}
                            </p>
                          </div>
                          <div className="bg-gray-50 dark:bg-gray-950/50 rounded-lg p-3 border border-gray-100 dark:border-gray-800">
                            <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-gray-500 dark:text-gray-400 mb-1">
                              Doctrinal Impact
                            </p>
                            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                              {entry.doctrinalImpact}
                            </p>
                          </div>
                        </div>

                        {entry.passagesAffected && entry.passagesAffected.length > 0 && (
                          <div className="mt-4">
                            <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-gray-500 dark:text-gray-400 mb-1.5">
                              Passages affected
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                              {entry.passagesAffected.map((p) => {
                                const matchingFilter = passageFilters.find((f) => f.matches(p));
                                const isClickable = !!matchingFilter;
                                return isClickable ? (
                                  <button
                                    key={p}
                                    onClick={() => togglePassage(matchingFilter!.key)}
                                    className="px-2 py-0.5 text-[11px] font-mono rounded bg-red-50 dark:bg-red-950/30 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-900 hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors"
                                  >
                                    {p}
                                  </button>
                                ) : (
                                  <span
                                    key={p}
                                    className="px-2 py-0.5 text-[11px] font-mono rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                                  >
                                    {p}
                                  </span>
                                );
                              })}
                            </div>
                          </div>
                        )}

                        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
                          {entry.sources.map((s) => (
                            <a
                              key={s.url}
                              href={s.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
                            >
                              {s.label} →
                            </a>
                          ))}
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">
            <p className="text-sm text-gray-500 dark:text-gray-400">Revisions Catalogued</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
              {biblicalRevisions.length}
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">
            <p className="text-sm text-gray-500 dark:text-gray-400">Disputed Passages Tracked</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
              {disputedCount}
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">
            <p className="text-sm text-gray-500 dark:text-gray-400">Centuries Spanned</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
              ~{Math.round(yearsSpanned / 100)}
            </p>
          </div>
        </div>

        <div className="mt-8 text-xs text-gray-400 dark:text-gray-500">
          <p>
            Compiled from a range of scholarly and theological sources — see each
            entry&rsquo;s links for further reading. Where modern scholarship and
            traditionalist views diverge, entries note the disagreement rather than
            picking a side.
          </p>
        </div>
      </div>
    </main>
  );
}
