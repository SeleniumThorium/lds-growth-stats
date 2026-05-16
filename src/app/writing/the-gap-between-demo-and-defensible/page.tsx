import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Gap Between Demo and Defensible — Seth Manwaring",
  description:
    "AI-native product management: fluency or skepticism? Notes on what changes when LLM-shaped capabilities become ambient — and where AI-augmented PMs go wrong.",
};

export default function GapBetweenDemoAndDefensible() {
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
              href="/#projects"
              className="hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/writing"
              className="text-gray-900 dark:text-white"
            >
              Writing
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
            ← Writing
          </Link>
          <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white leading-[1.1]">
            The Gap Between Demo and Defensible
          </h1>
          <p className="mt-5 text-lg sm:text-xl italic text-gray-600 dark:text-gray-300">
            AI-native product management: fluency or skepticism?
          </p>
          <p className="mt-6 text-xs font-mono uppercase tracking-wider text-gray-400 dark:text-gray-500">
            2026-05-15 · Seth Manwaring
          </p>
        </div>
      </header>

      {/* Article body */}
      <article className="px-6 py-16">
        <div className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
          <p className="text-lg leading-relaxed">
            The phrase &ldquo;AI-native&rdquo; has been doing a lot of work this
            year. It usually means one of three things: a product built around
            an LLM (chat interface, generative content, conversational search),
            an engineering team using AI assistants in their daily workflow, or
            a vague aspiration that &ldquo;AI&rdquo; is somewhere in the
            strategy. What it rarely means is that the product was calibrated
            from its inception &mdash; or through significant refactoring
            &mdash; by a product organization with LLM-shaped capabilities, and
            whose definition of &ldquo;ready to ship&rdquo; reflects what those
            capabilities can and cannot defensibly do.
          </p>

          <p className="mt-6 text-lg leading-relaxed">
            Over the last few years, I landed somewhere between Early Adopter
            and Pragmatist regarding AI. After some dabbling and using ChatGPT
            and Perplexity for research and writing, I ran logic and bias tests
            in ChatGPT, Gemini, Claude, Perplexity, and Grok. I was surprised
            at the number of failed simple logic tests just two years ago; the
            tools that passed moved on to the bias tests. As a result of these
            tests, I chose Perplexity as my go-to for drafting process docs,
            product requirements, and competitive analysis.
          </p>

          <p className="mt-6 text-lg leading-relaxed">
            My relationship with AI changed dramatically in 2026. Instead of
            prompting for information, I tasked Claude Code to create files
            and build applications. Instead of asking about cost and revenue
            potential, I prompted Claude to generate reports and save them for
            my review.
          </p>

          <p className="mt-6 text-lg leading-relaxed">
            I know I wasn&rsquo;t alone in this journey. Most companies are
            looking for AI talent and several companies are already
            downsizing, citing AI as a factor. Cloudflare cut roughly 20% of
            staff and internal AI usage reportedly went up 600% in three
            months. An enormous portion of the workforce is picking up the
            tools and skills to become more efficient.
          </p>

          <p className="mt-6 text-lg leading-relaxed">
            Side note: AI isn&rsquo;t replacing workers, per se. But if one
            person makes effective use of AI to do the job of six people, then
            companies will reflexively downsize and hope to preserve their
            current productivity at a lower cost, or they can keep the
            headcount the same and massively expand productivity. Workers who
            don&rsquo;t use AI will be replaced by workers who do. We saw a
            similar shift during the rise of automated software testing.
            Manual-only testers felt the same squeeze: a lot of teams now want
            a hybrid QA profile &mdash; someone who can do manual exploratory
            testing, then automate the stable, repetitive checks.
          </p>

          <p className="mt-6 text-lg leading-relaxed">
            An AI-native Product Manager (or Product Owner) runs AI tools all
            day alongside Jira, Aha!, or Asana, performing research and
            synthesis. Claude Code generates system diagrams, ROI models, and
            prototypes. Perplexity does the first pass on competitive
            landscape questions. Grok pulls real-time signal about
            what&rsquo;s happening <em>now</em> on a topic. Whisper
            transcribes customer interviews. The combination compresses what
            used to be a week of work into hours, and what used to be a day of
            work into an hour.
          </p>

          <p className="mt-6 text-lg leading-relaxed">
            That&rsquo;s the part that&rsquo;s easy to say. The part
            that&rsquo;s harder, and where I think most of the genuinely
            interesting questions live, is what happens to senior product
            judgment when these tools become ambient.
          </p>

          <h2 className="mt-14 mb-6 text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Three things that have actually changed in my work
          </h2>

          <p className="text-lg leading-relaxed">
            The first is <strong>the cost curve on synthesis</strong>. My job
            is to absorb a lot of input from several sources &mdash; customer
            interaction, sales conversations, support tickets, engineering
            tradeoffs, market signals, regulatory updates &mdash; bringing key
            decisions to the surface. The bottleneck used to be reading. Now
            the bottleneck is judgment. I can feed a quarter&rsquo;s worth of
            customer interviews into Claude and ask for thematic clustering in
            minutes; the thinking about which themes matter is the same
            thinking it always was, just no longer gated by the time it takes
            to do the reading. My source material is now in sharper focus.
            Highly specific prompts into AI produce clean insights the same
            way that clear, detailed requirements into Development produce
            desired outcomes.
          </p>

          <p className="mt-6 text-lg leading-relaxed">
            The second is <strong>the cost curve on writing</strong>. PRDs,
            decision memos, stakeholder updates, executive narratives,
            competitive analysis, cost and revenue calculations &mdash; the
            documents a Product team produces are mostly synthesis exercises
            with a thin layer of original argument. The synthesis is cheap
            now. The argument is still hard. The work I do on a PRD and other
            documentation in 2026 is more editing than drafting. Think about
            that. Accelerate drafts so you can spend more energy on edits and
            rewrites.
          </p>

          <p className="mt-6 text-lg leading-relaxed">
            The third is <strong>the cost curve on stress-testing</strong>.
            Before shipping any non-trivial decision I now run it through more
            lenses with an LLM:
          </p>

          <ul className="mt-5 ml-6 space-y-2 text-lg leading-relaxed list-disc marker:text-gray-400 dark:marker:text-gray-600">
            <li>
              What&rsquo;s the most aggressive critique an engineer would make
              of this approach?
            </li>
            <li>What&rsquo;s the customer-trust risk if this fails in production?</li>
            <li>What scrutiny will a skeptical executive apply?</li>
            <li>
              What would a regulator ask in an audit conversation?
            </li>
            <li>What&rsquo;s the case for doing nothing instead?</li>
          </ul>

          <p className="mt-6 text-lg leading-relaxed">
            The model isn&rsquo;t 100% on any of these. Not yet, but it&rsquo;s
            as good as a team of thoughtful colleagues who&rsquo;ll engage
            with your draft on a Friday afternoon (or middle of the night)
            when no actual colleague has time. The judgment I bring to
            evaluate the model&rsquo;s responses is the same judgment
            I&rsquo;d bring to evaluate any colleague&rsquo;s responses
            &mdash; but I get the responses more often and faster.
          </p>

          <h2 className="mt-14 mb-6 text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Where AI-augmented PMs go wrong
          </h2>

          <p className="text-lg leading-relaxed">
            The most common failure mode I see in PMs using AI heavily is{" "}
            <strong>
              outsourcing judgment to a tool that is structurally incapable of
              having it
            </strong>
            . An LLM can summarize, cluster, draft, restructure, and surface
            patterns. It cannot decide which patterns are the load-bearing
            ones for <em>this</em> customer in <em>this</em> market under{" "}
            <em>this</em> business pressure. It doesn&rsquo;t have a
            relationship with your customer. It can&rsquo;t empathize; it can
            only imitate human sentiment. It doesn&rsquo;t feel business
            pressure. PMs who treat the model&rsquo;s output as conclusion
            rather than input ship product that looks coherent and
            isn&rsquo;t.
          </p>

          <p className="mt-6 text-lg leading-relaxed">
            The second failure mode is{" "}
            <strong>
              building demos that don&rsquo;t survive contact with the
              customer&rsquo;s responsibility surface
            </strong>
            . Most consumer LLM features feel magical because the cost of
            being wrong is low &mdash; the user gets a worse haiku, a slightly
            off recipe, a hallucinated trivia answer, and shrugs. In the
            industries where I&rsquo;ve built, the cost of being wrong
            includes regulatory exposure, financial harm to the customer,
            company liability, and audit trails that have to hold up months
            later. The gap between{" "}
            <em>this model is impressive in offline evaluation</em> and{" "}
            <em>
              this feature is reliable enough that the customer can defend its
              decisions to a regulator, an auditor, or their own bottom line
            </em>{" "}
            is enormous. Most product orgs underestimate it because their
            team&rsquo;s intuitions were calibrated on consumer demos.
          </p>

          <p className="mt-6 text-lg leading-relaxed">
            The third failure mode is{" "}
            <strong>
              treating AI tools as a productivity hack rather than a product
              judgment recalibration
            </strong>
            . The first means &ldquo;I&rsquo;ll write the PRD twice as
            fast.&rdquo; The second means &ldquo;the questions I should be
            asking about this product have shifted because the capability
            surface has shifted.&rdquo; Today most PMs are still in the first
            mode. The ones that have moved into the second will prove the
            real value of AI in company strategy.
          </p>

          <h2 className="mt-14 mb-6 text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            What I look for now
          </h2>

          <p className="text-lg leading-relaxed">
            When I evaluate product organizations from the outside &mdash; as
            a candidate thinking about where to spend the next several years,
            or as a leader thinking about how to build and guide my team
            &mdash; the question I find myself asking is:{" "}
            <em>
              does this team understand the gap between demo-impressive and
              ship-ready, and does their definition of &ldquo;done&rdquo;
              reflect that gap?
            </em>{" "}
            I expect many are still finding their way. The teams that
            don&rsquo;t are the ones whose AI features will quietly
            underperform over the next two years while the teams that do
            build durable trust with their customers. And from the
            ten-thousand foot view, this will differentiate companies who
            successfully implement AI in their products and services.
          </p>

          <p className="mt-6 text-lg leading-relaxed">
            The PMs I want to work with are the ones who use AI fluently and
            skeptically at the same time. Fluently, because that&rsquo;s the
            operating reality of the work in the fourth industrial revolution.
            Skeptically, because the cost of unwarranted trust in model
            output compounds in regulated categories the way technical debt
            compounds in mature codebases.
          </p>

          <p className="mt-6 text-lg leading-relaxed">
            The combination of both is what AI-native product management
            actually means.
          </p>
        </div>
      </article>

      {/* Footer */}
      <footer className="px-6 py-10 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-gray-500 dark:text-gray-400">
          <Link
            href="/writing"
            className="hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            ← Back to writing
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
