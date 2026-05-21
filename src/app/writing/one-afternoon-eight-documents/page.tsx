import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "One Afternoon, Eight Documents — Seth Manwaring",
  description:
    "What it was like to pressure-test a product idea with Claude: a Saturday afternoon that produced eight decision-grade documents and changed which ideas are worth investigating at all.",
};

export default function OneAfternoonEightDocuments() {
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
            <Link
              href="/#work"
              className="hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Work
            </Link>
            <Link
              href="/writing"
              className="text-gray-900 dark:text-white"
            >
              Writing
            </Link>
            <Link
              href="/#projects"
              className="hover:text-gray-900 dark:hover:text-white transition-colors"
            >
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

      {/* Article header */}
      <header className="px-6 pt-16 pb-12 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/writing"
            className="text-xs font-mono uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
          >
            &larr; Writing
          </Link>
          <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white leading-[1.1]">
            One Afternoon, Eight Documents
          </h1>
          <p className="mt-5 text-lg sm:text-xl italic text-gray-600 dark:text-gray-300">
            What it was like to pressure-test a product idea with Claude.
          </p>
          <p className="mt-6 text-xs font-mono uppercase tracking-wider text-gray-400 dark:text-gray-500">
            2026-05-20 &middot; Seth Manwaring
          </p>
        </div>
      </header>

      {/* Article body */}
      <article className="px-6 py-16">
        <div className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
          <figure className="mb-6 md:float-right md:mb-4 md:ml-8 md:w-60 lg:w-72">
            <Image
              src="/one-afternoon-working.jpg"
              alt="Seth Manwaring sitting in a leather club chair, focused on a laptop balanced on his lap, working on a Saturday afternoon."
              width={880}
              height={1168}
              className="h-auto w-full rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm"
              priority
            />
          </figure>

          <p className="text-lg leading-relaxed">
            A friend and colleague recently told me about an app idea. A great
            concept with intriguing potential. A sketch on a napkin, but
            seemingly viable. Like most ideas in this budding stage, it sat in
            the gap between &ldquo;this could be something&rdquo; and &ldquo;I
            have no proof.&rdquo; The thing that stands in that gap is research:
            who else is in this space, how large the market is, what it would
            cost to build, whether the idea can be defended once it&rsquo;s
            visible. Done properly, that work takes a product manager weeks.
          </p>

          <p className="mt-6 text-lg leading-relaxed">
            I am not a team. I am one person with an idea and a full set of
            other obligations. I could have spent a month of evenings assembling
            the picture myself, but with the work I&rsquo;ve been doing in AI, I
            decided to run tests: I sat down on a Saturday afternoon and asked
            Anthropic&rsquo;s Claude to help me do the research.
          </p>

          <p className="mt-6 text-lg leading-relaxed">
            I typed out as many requirements as I could conceive in an hour.
            Hardly comprehensive, so Claude asked several follow-up questions
            and together, we arrived at a sufficient level of detail. Normally,
            I would expect more rigor but remember this was a test.
          </p>

          <p className="mt-6 text-lg leading-relaxed">
            I did not expect what happened next. Another hour later, I had eight
            documents. Not bullet points, not a chat transcript I would have to
            translate into something usable &mdash; eight structured, properly
            formatted documents, each one the kind of artifact I would use to
            convince a leadership team that a product idea is viable and
            profitable.
          </p>

          <ol className="mt-6 ml-6 space-y-3 text-lg leading-relaxed list-decimal marker:text-gray-400 dark:marker:text-gray-600">
            <li>
              A <strong>Product Requirements Document</strong>{" "}(Markdown)
              &mdash; the concept specified in detail.
            </li>
            <li>
              A <strong>Technical Architecture</strong>{" "}document (Markdown)
              &mdash; how the product would actually be built.
            </li>
            <li>
              A <strong>System Diagram</strong>{" "}(HTML) &mdash; that
              architecture rendered visually.
            </li>
            <li>
              A <strong>Competitive Landscape</strong>{" "}report (DOCX) &mdash; who
              else occupies this space, and how serious each one is.
            </li>
            <li>
              A <strong>Market Analysis</strong>{" "}(DOCX) &mdash; the size of the
              opportunity, who the buyers are, and which way the trend is
              moving. This includes an impressive analysis of Total Addressable
              Market, Serviceable Available Market, and Serviceable Obtainable
              Market over my desired timeline.
            </li>
            <li>
              A <strong>Cost Analysis</strong>{" "}&mdash; what building it would
              actually cost, compared across different approaches like using a
              Scrum team or vibe coding.
            </li>
            <li>
              An <strong>IP Protection strategy</strong>{" "}&mdash; how to keep the
              concept defensible as it becomes visible.
            </li>
            <li>
              A <strong>Brand proposal</strong>{" "}&mdash; a screened short-list of
              brand names that harmonize with its purpose and market, and an
              analysis of brand availability across USPTO trademarks, available
              .com domains, the App Store, and Play Store.
            </li>
          </ol>

          <p className="mt-6 text-lg leading-relaxed">
            Together those documents run to more than twenty thousand words. I
            want to be precise about the time, because the time is the entire
            point: this was an afternoon. A couple of hours. The same body of
            work, done the traditional way, takes weeks of a product
            manager&rsquo;s life &mdash; or a five-figure invoice from an
            outside firm.
          </p>

          <p className="mt-6 text-lg leading-relaxed">
            What struck me was not only the speed but the collaboration. I was
            not pressing a button and getting a generic template back. It was a
            deep conversation. Claude asked clarifying questions, pushed back
            when an assumption was thin, surfaced risks I had not thought of,
            and held the thread across all eight documents &mdash; so the cost
            analysis knew what the architecture had decided, and the IP strategy
            knew what the competitive landscape had found. Each document
            referenced the others. It behaved less like a tool and more like a
            colleague who had read everything and forgotten nothing.
          </p>

          <p className="mt-6 text-lg leading-relaxed">
            There was a moment, somewhere in the middle of it, when I noticed I
            had stopped thinking of this as drafting and started thinking of it
            as deciding. The documents were appearing fast enough that the
            limiting factor was no longer how quickly I could write &mdash; it
            was how quickly I could make up my mind. A question would surface, I
            would answer it, and the answer would propagate into the
            requirements, the cost analysis, the market read. The work had
            inverted. The typing was free; the judgment was the scarce thing.
            That is exactly the right way around, and it is not how product work
            has ever felt to me before.
          </p>

          <p className="mt-6 text-lg leading-relaxed">
            Here is the part that matters most to me. I am not going to describe
            the idea itself &mdash; that stays private for now. But I will say
            this: I sat down that afternoon with a hunch and stood up with a
            defense. These eight documents do not merely describe the concept;
            they argue for it. The market analysis showed the demand is real and
            growing. The competitive landscape showed the space is genuinely
            open. The cost analysis showed an affordable path to build it. The
            architecture showed that the hardest technical problem has a clean
            solution. Read as a set, they make a genuinely strong case that the
            idea is worth pursuing. It was no longer a hunch.
          </p>

          <p className="mt-6 text-lg leading-relaxed">
            This doesn&rsquo;t mean the work is finished, and it doesn&rsquo;t
            mean I have handed off the thinking. The documents are drafts. I
            reviewed them all and they&rsquo;re solid. The IP strategy will
            require review and input from a real attorney, and Claude was the
            first to say so. The IP document now opens with a disclaimer. The
            decision remains mine. The difference is that I now get to make it
            from a position of evidence.
          </p>

          <p className="mt-6 text-lg leading-relaxed">
            I have thought a lot, since that afternoon, about what actually
            shifted. For most of my career the bottleneck in product work was
            never a shortage of ideas &mdash; it was the cost of investigating
            them. Investigation is expensive, so you ration it. You research
            only the ideas you are already fairly confident about, which means
            the surprising ideas, the ones that most need a fair hearing, rarely
            get one. Lowering the cost of investigation does not simply make the
            work faster. It changes which ideas get investigated at all.
          </p>

          <p className="mt-6 text-lg leading-relaxed">
            I ran a second test a few days later. A different idea that&rsquo;s
            been percolating in my mind for months, plucked from my Ideas
            backlog because I think it&rsquo;s the most ambitious one with the
            greatest potential. This time, Claude pushed back much harder. The
            competitive landscape is fuller than I anticipated, so Claude laid
            out the facts for me. The idea still has potential, but now I know
            how steep the climb would be. At least now I have evidence about the
            cost to build and market, and the revenue potential.
          </p>

          <p className="mt-6 text-lg leading-relaxed">
            The delta in PM practice is the thought I keep coming back to. A
            single afternoon used to buy me a vague sense of an idea. This time,
            an afternoon produced a decision-grade body of research. I learned
            that one key characteristic of the AI industrial revolution is that
            more ideas will get a fair shake at a fraction of the cost. In this
            case, I was ready to make the call in just hours. And I got there
            before dinner.
          </p>
        </div>
      </article>

      {/* Footer */}
      <footer className="sticky bottom-0 z-40 bg-white dark:bg-gray-950 px-6 py-6 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-gray-500 dark:text-gray-400">
          <Link
            href="/writing"
            className="hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            &larr; Back to writing
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
