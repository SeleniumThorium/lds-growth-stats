import Link from "next/link";

// ---------------------------------------------------------------------------
// Writing index.
//
// Each entry can point at either an internal route (e.g. "/writing/some-slug")
// or an external URL (e.g. a Substack post). Set `external: true` to render
// the link as a regular <a target="_blank">.
//
// To publish a post: add a new object to the `articles` array below.
// ---------------------------------------------------------------------------

type Article = {
  title: string;
  href: string;
  external?: boolean;
  date: string;
  summary: string;
};

const articles: Article[] = [
  {
    title: "Leadership Told You to Look Into AI",
    href: "/writing/pm-ai-starter-path",
    date: "2026-05-15",
    summary:
      "A starter path for product managers who haven't started yet — and a twelve-rung ladder for going deep once you have.",
  },
  {
    title: "The Gap Between Demo and Defensible",
    href: "/writing/the-gap-between-demo-and-defensible",
    date: "2026-05-15",
    summary:
      "AI-native product management: fluency or skepticism? What changes when LLM-shaped capabilities become ambient — and where AI-augmented PMs go wrong.",
  },
];

export default function WritingIndex() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      {/* Top nav */}
      <nav className="sticky top-0 z-50 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 px-6 py-5">
        <div className="max-w-5xl mx-auto flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between text-sm">
          <Link
            href="/"
            className="font-semibold tracking-tight text-gray-900 dark:text-white"
          >
            Seth Manwaring
          </Link>
          <div className="flex items-center gap-6 text-gray-500 dark:text-gray-400">
            <Link href="/#work" className="hover:text-gray-900 dark:hover:text-white transition-colors">
              Work
            </Link>
            <Link href="/writing" className="text-gray-900 dark:text-white">
              Writing
            </Link>
            <Link href="/#projects" className="hover:text-gray-900 dark:hover:text-white transition-colors">
              Projects
            </Link>
            <a
              href="https://www.linkedin.com/in/sethmanwaring/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="px-6 py-16 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-mono uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400 mb-3">
            Writing
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            Notes from the regulated edge.
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
            Product judgment in regulated environments, the operating craft of
            M&amp;A integration, and what AI-native product work actually looks
            like when the stakes are real.
          </p>
        </div>
      </header>

      {/* Article list */}
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto">
          {articles.length === 0 ? (
            <div className="border border-dashed border-gray-300 dark:border-gray-700 rounded-xl p-10 text-center">
              <p className="text-base text-gray-500 dark:text-gray-400">
                First article in progress. Check back soon.
              </p>
            </div>
          ) : (
            <ul className="space-y-8">
              {articles.map((article) => {
                const inner = (
                  <>
                    <p className="text-xs font-mono uppercase tracking-wider text-gray-400 dark:text-gray-500">
                      {article.date}
                    </p>
                    <h2 className="mt-2 text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {article.title}
                      {article.external ? " ↗" : ""}
                    </h2>
                    <p className="mt-2 text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                      {article.summary}
                    </p>
                  </>
                );

                return (
                  <li
                    key={article.href}
                    className="border-b border-gray-200 dark:border-gray-800 pb-8 last:border-b-0"
                  >
                    {article.external ? (
                      <a
                        href={article.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block"
                      >
                        {inner}
                      </a>
                    ) : (
                      <Link href={article.href} className="group block">
                        {inner}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="sticky bottom-0 z-40 bg-white dark:bg-gray-950 px-6 py-6 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-gray-500 dark:text-gray-400">
          <Link href="/" className="hover:text-gray-900 dark:hover:text-white transition-colors">
            ← Back to home
          </Link>
          <a
            href="https://www.linkedin.com/in/sethmanwaring/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            Connect on LinkedIn
          </a>
        </div>
      </footer>
    </main>
  );
}
