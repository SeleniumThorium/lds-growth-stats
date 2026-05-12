import Link from "next/link";
import Image from "next/image";
import { SeleniumThoriumLogo } from "./components/SeleniumThoriumLogo";
import { ContactCTAs } from "./components/ContactCTAs";

// ---------------------------------------------------------------------------
// Page content lives at the top so it's easy to edit without touching layout.
// ---------------------------------------------------------------------------

const stats = [
  {
    value: "AI-native",
    label: "Claude Code · Perplexity · Grok · Whisper · Suno",
  },
  {
    value: "2,700+",
    label: "Farms running the Genetic AI/ROI Engine at VAS",
  },
  {
    value: "200M+",
    label: "PAX reservations protected during AA / US Airways consolidation",
  },
  {
    value: "20+",
    label: "Languages — continuous translation accuracy",
  },
];

const selectedWork = [
  {
    title: "Genetic ROI Engine — VAS",
    role: "Director of Product Management",
    description:
      "Cloud-based genetic planning SaaS for 2,700+ global dairy operations. Translated complex genomic datasets into a prescriptive ROI model that lifted Net Merit dollars from $425 to $600+ across millions of calves. Built and shipped end-to-end against the trust requirements of a regulated, audit-heavy customer base.",
    stack: ["Regulated SaaS", "Genomic Data", "AWS", "Product Strategy"],
  },
  {
    title: "AA / US Airways Reservation Consolidation",
    role: "QA Governance & Change Management Lead",
    description:
      "Led QA governance and change management through the largest reservation-systems consolidation in airline history. Protected reservations across the combined carrier serving 200M+ annual passengers using a drain-down migration strategy — zero data integrity incidents during the cutover window.",
    stack: ["M&A Integration", "Quality Engineering", "Change Management"],
  },
  {
    title: "Velocity-Based Forecasting — Lumension",
    role: "Senior Infrastructure Engineer · Scrum Master · Product Owner",
    description:
      "Replaced optimistic-by-default release planning with velocity-based, Cone-of-Uncertainty forecasts across multiple product teams. Gave leadership commitments they could plan against and gave engineering schedules they could actually hit.",
    stack: ["Agile Transformation", "Forecasting", "Scrum"],
  },
];

const sideProjects = [
  {
    title: "Church Growth Statistics",
    description:
      "Interactive charts tracking the growth of The Church of Jesus Christ of Latter-day Saints from 1830 to today — membership, temples, missionaries, stakes, wards, missions.",
    href: "/Hastening",
    stack: ["Next.js", "Recharts", "TypeScript"],
  },
  {
    title: "Synoptic Study",
    description:
      "A harmony of the four Gospels covering the last 24 hours of the Savior's mortal life — parallel accounts from Matthew, Mark, Luke, and John in a single view.",
    href: "/SynopticStudy",
    stack: ["Next.js", "TypeScript", "Editorial Design"],
  },
];

const LINKEDIN_URL = "https://www.linkedin.com/in/sethmanwaring/";
const GITHUB_URL = "https://github.com/SeleniumThorium";
const EMAIL = "sethmanwaring@gmail.com";


export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      {/* --------------------------------------------------------------- */}
      {/* Top nav                                                          */}
      {/* --------------------------------------------------------------- */}
      <nav className="border-b border-gray-200 dark:border-gray-800 px-6 py-5">
        <div className="max-w-5xl mx-auto flex items-center justify-between text-sm">
          <Link
            href="/"
            className="font-semibold tracking-tight text-gray-900 dark:text-white"
          >
            Seth Manwaring
          </Link>
          <div className="flex items-center gap-6 text-gray-500 dark:text-gray-400">
            <a href="#work" className="hover:text-gray-900 dark:hover:text-white transition-colors">
              Work
            </a>
            <a href="#projects" className="hover:text-gray-900 dark:hover:text-white transition-colors">
              Projects
            </a>
            <Link href="/writing" className="hover:text-gray-900 dark:hover:text-white transition-colors">
              Writing
            </Link>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </nav>

      {/* --------------------------------------------------------------- */}
      {/* Hero                                                             */}
      {/* --------------------------------------------------------------- */}
      <header className="px-6 pt-20 pb-16 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-start">
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400 mb-4">
              Senior Product Leader
            </p>
            <p className="text-base text-gray-500 dark:text-gray-400 mb-6">
              Regulated SaaS · Genomic &amp; Operational Data · M&amp;A Integration
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light italic leading-[1.05] tracking-tight text-gray-900 dark:text-white">
              Product judgment where the answer has to be defensible.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300 max-w-2xl">
              Decades shipping in environments where regulators, auditors, and
              customers all need to trust the number — genomic data at scale,
              airline reservations through a merger, infrastructure under
              change-management discipline. AI-native operator using the same
              tools daily that the next generation of products will be built on.
            </p>
            <ContactCTAs linkedinUrl={LINKEDIN_URL} email={EMAIL} />
          </div>

          {/* Headshot. Drop the source file at /public/headshot.jpg. */}
          <div className="hidden md:block">
            <div className="relative w-[336px] h-[336px] lg:w-[392px] lg:h-[392px] rounded-full overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm">
              <Image
                src="/headshot.jpg"
                alt="Seth Manwaring"
                fill
                sizes="(min-width: 1024px) 392px, 336px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </header>

      {/* --------------------------------------------------------------- */}
      {/* Credibility stat strip                                           */}
      {/* --------------------------------------------------------------- */}
      <section className="px-6 py-12 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/40">
        <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-gray-500 dark:text-gray-400 leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --------------------------------------------------------------- */}
      {/* Selected work                                                    */}
      {/* --------------------------------------------------------------- */}
      <section id="work" className="px-6 py-20 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-baseline justify-between mb-10">
            <h2 className="text-xs font-mono uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
              Selected Work
            </h2>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Full history on LinkedIn →
            </a>
          </div>
          <div className="space-y-8">
            {selectedWork.map((item) => (
              <article
                key={item.title}
                className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 lg:p-8 bg-white dark:bg-gray-900/40"
              >
                <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  {item.role}
                </p>
                <p className="mt-4 text-base lg:text-[17px] leading-relaxed text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.stack.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-mono rounded-md bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------- */}
      {/* Side projects (compressed SeleniumThorium portfolio)             */}
      {/* --------------------------------------------------------------- */}
      <section id="projects" className="px-6 py-20 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <h2 className="text-xs font-mono uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
              Side Projects
            </h2>
            <div className="mt-4 text-gray-900 dark:text-white">
              <SeleniumThoriumLogo className="h-10 lg:h-12 w-auto" />
            </div>
            <p className="mt-5 text-base text-gray-600 dark:text-gray-300 max-w-2xl">
              Small Next.js applications published under my SeleniumThorium
              shingle — what I build when no one assigned it. Each one is one
              way I keep my hands on the tools.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sideProjects.map((project) => (
              <Link
                key={project.href}
                href={project.href}
                className="group block bg-white dark:bg-gray-900/40 border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:border-blue-400/60 dark:hover:border-blue-500/60 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[11px] font-mono rounded bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4 text-sm text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  Open →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------- */}
      {/* Writing                                                          */}
      {/* --------------------------------------------------------------- */}
      <section id="writing" className="px-6 py-20 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xs font-mono uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
            Writing
          </h2>
          <p className="mt-3 text-base text-gray-600 dark:text-gray-300 max-w-2xl">
            Notes on product judgment in regulated environments, the operating
            craft of M&amp;A integration, and what AI-native product work
            actually looks like when the stakes are real.
          </p>
          <div className="mt-6">
            <Link
              href="/writing"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Read the articles →
            </Link>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------- */}
      {/* Operating principles                                             */}
      {/* --------------------------------------------------------------- */}
      <section className="px-6 py-16 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xs font-mono uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
            Operating Principles
          </h2>
          <p className="mt-4 text-xl lg:text-2xl font-medium text-gray-900 dark:text-white leading-snug max-w-3xl">
            Honesty. Loyalty. Applied as decision filters, not as branding.
          </p>
        </div>
      </section>

      {/* --------------------------------------------------------------- */}
      {/* Footer                                                           */}
      {/* --------------------------------------------------------------- */}
      <footer className="px-6 py-10">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Seth Manwaring</p>
          <div className="flex items-center gap-6">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
