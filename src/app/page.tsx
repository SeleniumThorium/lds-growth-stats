import Link from "next/link";

const projects = [
  {
    title: "Church Growth Statistics",
    description:
      "Interactive charts tracking the growth of The Church of Jesus Christ of Latter-day Saints from 1830 to the present. Explore membership, temples, missionaries, stakes, wards, and missions over time.",
    href: "/Hastening",
    tags: ["Next.js", "Recharts", "TypeScript"],
    color: "#2563eb",
  },
  {
    title: "Synoptic Study",
    description:
      "A harmony of the four Gospels covering the last 24 hours of the Savior's mortal life. Compare parallel accounts from Matthew, Mark, Luke, and John side by side.",
    href: "/SynopticStudy",
    tags: ["Next.js", "TypeScript", "Biblical Studies"],
    color: "#9333ea",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100">
      {/* Hero */}
      <header className="border-b border-gray-800 px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-mono text-blue-400 mb-3 tracking-wider uppercase">
            Portfolio
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            SeleniumThorium Development
          </h1>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl">
            Web applications and data visualizations. Built with modern tools
            and deployed on AWS.
          </p>
        </div>
      </header>

      {/* Projects */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-sm font-mono text-gray-500 uppercase tracking-wider mb-8">
          Projects
        </h2>
        <div className="space-y-6">
          {projects.map((project) => (
            <Link
              key={project.href}
              href={project.href}
              className="block group bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 hover:bg-gray-900/80 transition-all"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-mono rounded-md bg-gray-800 text-gray-400 border border-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="text-gray-600 group-hover:text-blue-400 transition-colors text-2xl ml-4 mt-1">
                  &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 px-6 py-8 mt-12">
        <div className="max-w-4xl mx-auto flex items-center justify-between text-sm text-gray-600">
          <p>SeleniumThorium Development</p>
          <a
            href="https://github.com/SeleniumThorium"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors"
          >
            GitHub
          </a>
        </div>
      </footer>
    </main>
  );
}
