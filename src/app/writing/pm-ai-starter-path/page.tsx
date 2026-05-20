import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leadership Told You to Look Into AI — Seth Manwaring",
  description:
    "A starter path for product managers who haven't started yet, plus the twelve-rung ladder for going deep once you have.",
};

const toc = [
  { id: "starter-path", label: "The starter path" },
  {
    id: "the-details",
    label: "The details",
    children: [
      { id: "step-1", label: "1. Pick one tool" },
      { id: "step-2", label: "2. Use it on existing tasks" },
      { id: "step-3", label: "3. Iterative prompting" },
      { id: "step-4", label: "4. Synthesis before generation" },
      { id: "step-5", label: "5. Apply senior judgment" },
      { id: "step-6", label: "6. Build a prompt library" },
      { id: "step-7", label: "7. Stress-testing & pre-mortems" },
      { id: "step-8", label: "8. Stay honest about errors" },
    ],
  },
  { id: "two-weeks", label: "What two weeks will give you" },
  {
    id: "next-stage",
    label: "The Next Stage",
    children: [
      { id: "ladder-1", label: "1. Install natively and pay" },
      { id: "ladder-2", label: "2. Documents" },
      { id: "ladder-3", label: "3. Planning artifacts" },
      { id: "ladder-4", label: "4. Models" },
      { id: "ladder-5", label: "5. Wire-frames" },
      { id: "ladder-6", label: "6. System diagrams" },
      { id: "ladder-7", label: "7. Prototypes" },
    ],
  },
  {
    id: "stress-testing",
    label: "Stress-testing and judgment",
    children: [
      { id: "ladder-8", label: "8. Four critic lenses" },
      { id: "ladder-9", label: "9. Read your codebase" },
    ],
  },
  {
    id: "ai-native",
    label: "AI-native",
    children: [
      { id: "ladder-10", label: "10. Custom Project or GPT" },
      { id: "ladder-11", label: "11. Redesign templates" },
      { id: "ladder-12", label: "12. Recalibrate “ready to ship”" },
    ],
  },
];

export default function LeadershipToldYouToLookIntoAI() {
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
            Leadership Told You to Look Into AI
          </h1>
          <p className="mt-5 text-lg sm:text-xl italic text-gray-600 dark:text-gray-300">
            As a Product Manager, how do I begin and how deep can I go?
          </p>
          <p className="mt-6 text-xs font-mono uppercase tracking-wider text-gray-400 dark:text-gray-500">
            2026-05-15 &middot; Seth Manwaring
          </p>
        </div>
      </header>

      {/* Article body */}
      <div className="px-6 py-16">
        <div className="mx-auto max-w-6xl lg:flex lg:items-start lg:gap-12">
          {/* Table of contents */}
          <aside className="mb-12 lg:mb-0 lg:w-64 lg:flex-shrink-0 lg:sticky lg:top-24 lg:self-start lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto">
            <nav aria-label="Table of contents" className="text-sm">
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-gray-400 dark:text-gray-500">
                Contents
              </p>
              <ul className="space-y-1 border-l border-gray-200 dark:border-gray-800">
                {toc.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="-ml-px block border-l-2 border-transparent py-1 pl-4 text-gray-700 transition-colors hover:border-blue-500 hover:text-blue-600 dark:text-gray-300 dark:hover:border-blue-400 dark:hover:text-blue-400"
                    >
                      {item.label}
                    </a>
                    {item.children && (
                      <ul className="space-y-1">
                        {item.children.map((child) => (
                          <li key={child.id}>
                            <a
                              href={`#${child.id}`}
                              className="-ml-px block border-l-2 border-transparent py-1 pl-8 text-gray-500 transition-colors hover:border-blue-500 hover:text-blue-600 dark:text-gray-400 dark:hover:border-blue-400 dark:hover:text-blue-400"
                            >
                              {child.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Article content */}
          <article className="max-w-3xl text-gray-700 dark:text-gray-300">
          <figure className="mb-6 md:float-right md:mb-4 md:ml-8 md:w-60 lg:w-72">
            <Image
              src="/pm-ai-before.jpg"
              alt="A product manager overwhelmed by AI: a faceless figure surrounded by question marks, tangled cables, and scattered papers, with ChatGPT and a PRD on screens behind him."
              width={582}
              height={783}
              className="h-auto w-full rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm"
              priority
            />
          </figure>
          <p className="text-lg leading-relaxed">
            Your CEO just asked you to look into AI and see how it can assist.
            As a product manager, you may have already dabbled in AI or you
            may be highly experienced with AI. Whether you&rsquo;re AI-fluent
            or still wondering whether AI can make a difference, your CEO
            made this request because she hasn&rsquo;t noticed a difference
            in your productivity or the quality of your work. This essay is a
            stepwise guide, starting at the beginning. You can skip ahead to
            your place in the journey if you&rsquo;re already navigating this
            new industrial revolution.
          </p>

          <p className="mt-6 text-lg leading-relaxed">
            For the beginner, you may wonder where to start. Perhaps
            you&rsquo;ve tried ChatGPT once or twice and weren&rsquo;t
            impressed. Maybe you watched a colleague type a clever prompt and
            felt like you missed the workshop. Maybe you&rsquo;ve been
            quietly hoping the topic would resolve itself before you had to
            engage with it.
          </p>

          <p className="mt-6 text-lg leading-relaxed">
            Here&rsquo;s the part worth knowing: most PMs are exactly where
            you are right now. The gap between <em>haven&rsquo;t started</em>
            {" "}and <em>operating AI-native daily</em> is smaller than the
            discourse suggests &mdash; a few months of deliberate use, not a
            graduate degree. The reason most people don&rsquo;t close it is
            that they think they need a strategy before they can begin.
          </p>

          <p className="mt-6 text-lg leading-relaxed">
            What follows is a starter path that takes you from zero to fluent
            without ceremony.
          </p>

          <h2 id="starter-path" className="clear-both scroll-mt-24 mt-14 mb-6 text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            The starter path
          </h2>

          <figure className="mb-6 md:float-right md:mb-4 md:ml-8 md:w-60 lg:w-72">
            <Image
              src="/pm-ai-after.jpg"
              alt="A confident, AI-native product manager smiling at his desk, surrounded by glowing AI icons, lightbulbs, a success flow chart, and a 'User Growth +20%' metric."
              width={582}
              height={783}
              className="h-auto w-full rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm"
            />
          </figure>

          <ol className="ml-6 space-y-2 text-lg leading-relaxed list-decimal marker:text-gray-400 dark:marker:text-gray-600">
            <li>Pick one tool and commit to it for two weeks.</li>
            <li>Use it on tasks you&rsquo;re already doing &mdash; don&rsquo;t invent new ones.</li>
            <li>Learn iterative prompting, not exhaustive prompting.</li>
            <li>Start with synthesis tasks before generation tasks.</li>
            <li>Apply senior product judgment to every output.</li>
            <li>Build a personal prompt library as you go.</li>
            <li>Add stress-testing and pre-mortem work to your kit.</li>
            <li>Stay honest about what AI gets wrong.</li>
          </ol>

          <h2 id="the-details" className="clear-both scroll-mt-24 mt-14 mb-6 text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            The details
          </h2>

          <h3 id="step-1" className="scroll-mt-24 mt-10 mb-4 text-xl font-semibold text-gray-900 dark:text-white">
            1. Pick one tool and commit to it for two weeks.
          </h3>

          <p className="text-lg leading-relaxed">
            The market has a dozen credible LLM products right now. The
            differences between major LLM tools are real but smaller than
            marketing suggests, and they shift constantly as new models
            release. Pick one and use it for everything for two weeks before
            you try a second. The compounding benefit of mastery on one tool
            dominates the marginal benefit of having sampled three.
          </p>

          <p className="mt-6 text-lg leading-relaxed">
            I used Perplexity for everything until this year. Now I&rsquo;m
            using Claude Code. But I recently tried Grok to successfully
            troubleshoot and adjust an outboard motor on a friend&rsquo;s
            sailboat with zero experience in boats or engines. The point is,
            pick one and use it for <em>everything</em>. Not just work.
            Recipes, home repair, learning more about a historical character,
            anything you like.
          </p>

          <p className="mt-6 text-lg leading-relaxed">
            For most PMs, the right starter tool is Claude (claude.ai) or
            ChatGPT (chatgpt.com). Both have free tiers sufficient for the
            first two weeks. Don&rsquo;t pay for anything until you know what
            you&rsquo;d use the paid tier for.
          </p>

          <p className="mt-6 text-lg leading-relaxed">
            What &ldquo;commit&rdquo; means concretely: open the tool when
            you start your day, leave the tab open, and reach for it first
            whenever you encounter a task that involves reading, summarizing,
            drafting, or thinking through tradeoffs. Treat reaching for it as
            the new default, not the exception.
          </p>

          <h3 id="step-2" className="scroll-mt-24 mt-10 mb-4 text-xl font-semibold text-gray-900 dark:text-white">
            2. Use it on tasks you&rsquo;re already doing.
          </h3>

          <p className="text-lg leading-relaxed">
            This is the single most important step. The temptation when
            learning AI tools is to invent new things to do with them &mdash;
            build a custom agent, automate a workflow, prototype a feature.
            Don&rsquo;t. Take your existing tasks and run them through the
            tool first. The reason: you already know what the output should
            look like for those tasks, so you can evaluate quality cleanly.
            This novel technology requires your hearty skepticism. Is the
            tool doing it right?
          </p>

          <p className="mt-6 text-lg leading-relaxed">
            I wanted to be sure, so I ran the top five LLM products through
            logic and bias tests a couple years ago. The tools are getting
            better all the time, but bias is still a major risk to watch
            for.
          </p>

          <p className="mt-6 text-lg leading-relaxed">
            Tasks worth trying in your first week:
          </p>

          <ul className="mt-5 ml-6 space-y-2 text-lg leading-relaxed list-disc marker:text-gray-400 dark:marker:text-gray-600">
            <li>
              Enter recent meeting notes or a transcript and ask for a list
              of action items.
            </li>
            <li>
              Import a quarter&rsquo;s worth of customer feedback and
              instruct AI to surface the major themes and cluster the
              feedback by theme.
            </li>
            <li>
              Enter the details you know about a new product or feature and
              instruct AI to draft a PRD in DOCX format. This will give you a
              well-formatted doc with some details already filled in. If your
              chosen LLM tool doesn&rsquo;t ask you follow-up questions to
              get the missing details, ask AI for those questions.
            </li>
            <li>
              Enter a confusing Slack message or email and instruct AI to
              rewrite it for executive consumption.
            </li>
            <li>
              Explain a roadmap decision you&rsquo;re considering and
              instruct AI to generate three counterarguments.
            </li>
            <li>
              Tell AI about your company and product. Then ask AI to identify
              extant competitors. Then instruct AI to research the
              competition and create a competitive-feature matrix.
            </li>
          </ul>

          <p className="mt-6 text-lg leading-relaxed">
            For each experiment, note how long it took and compare that to
            how long it would have taken you without AI. The savings compound
            quickly.
          </p>

          <h3 id="step-3" className="scroll-mt-24 mt-10 mb-4 text-xl font-semibold text-gray-900 dark:text-white">
            3. Learn iterative prompting, not exhaustive prompting.
          </h3>

          <p className="text-lg leading-relaxed">
            New users typically write huge, detailed prompts hoping for one
            perfect response. Experienced users write small prompts, evaluate
            the output, refine the prompt, and iterate three or four times.
            The conversation is the tool, not the opening message.
          </p>

          <p className="mt-6 text-lg leading-relaxed">
            Start short.{" "}
            <em>
              &ldquo;Cluster these 30 customer interview notes into five to
              seven themes&rdquo;
            </em>{" "}
            is a fine first prompt. Read the output. If a theme is too broad,
            say so:{" "}
            <em>&ldquo;Theme 3 is too broad. Split it into two.&rdquo;</em>{" "}
            If you&rsquo;d rather have data points than abstractions:{" "}
            <em>
              &ldquo;Replace each theme with a verbatim quote that captures
              it.&rdquo;
            </em>{" "}
            Three exchanges produce vastly better output than one exhaustive
            prompt.
          </p>

          <p className="mt-6 text-lg leading-relaxed">
            Aim for specificity. If you&rsquo;re comfortable writing a highly
            specific user story, then go ahead. But you don&rsquo;t have to
            at this stage.
          </p>

          <p className="mt-6 text-lg leading-relaxed">
            This is also where most people give up too early. After one
            disappointing response, they conclude the tool can&rsquo;t do
            the task. The right response is to refine. Treat the first output
            as a starting point, not a finished product. When the LLM tool
            responds incorrectly, you should respond with clarification. This
            is important: if the LLM tool you&rsquo;re using continues to
            apologize and still gets it wrong after a few attempts, make a
            note and try a different model or a different tool.
          </p>

          <h3 id="step-4" className="scroll-mt-24 mt-10 mb-4 text-xl font-semibold text-gray-900 dark:text-white">
            4. Start with synthesis tasks before generation tasks.
          </h3>

          <p className="text-lg leading-relaxed">
            Synthesis tasks &mdash;{" "}
            <em>here&rsquo;s input, produce a structured summary</em> &mdash;
            are easier to learn on than generation tasks &mdash;{" "}
            <em>write me a new thing</em>. The reason is evaluation: you can
            quickly verify whether a summary captures the source material;
            you can&rsquo;t easily verify whether a from-scratch PRD is good
            without applying senior judgment.
          </p>

          <p className="mt-6 text-lg leading-relaxed">
            Synthesis tasks worth practicing first:
          </p>

          <ul className="mt-5 ml-6 space-y-2 text-lg leading-relaxed list-disc marker:text-gray-400 dark:marker:text-gray-600">
            <li>Customer interview transcripts &rarr; themes</li>
            <li>Long document &rarr; executive summary</li>
            <li>Meeting transcript &rarr; action items</li>
            <li>Competitor blog post &rarr; key claims and counter-arguments</li>
            <li>Stakeholder feedback &rarr; prioritized concerns</li>
            <li>
              Engineering design doc &rarr; product-level translation for
              non-technical stakeholders
            </li>
          </ul>

          <p className="mt-6 text-lg leading-relaxed">
            Once these feel natural (typically four to five days of daily
            use), expand to generation tasks: drafting PRDs, writing
            positioning statements, building roadmap narratives, sketching
            first-draft launch announcements.
          </p>

          <h3 id="step-5" className="scroll-mt-24 mt-10 mb-4 text-xl font-semibold text-gray-900 dark:text-white">
            5. Apply senior product judgment to every output.
          </h3>

          <p className="text-lg leading-relaxed">
            The single biggest failure mode is treating the model&rsquo;s
            output as conclusion rather than input. The model can summarize,
            cluster, draft, restructure, and surface patterns. It cannot
            decide which patterns matter for <em>your</em> customer in{" "}
            <em>your</em> market under <em>your</em> business pressure. PMs
            who ship product based on unfiltered model output ship product
            that looks coherent and isn&rsquo;t.
          </p>

          <p className="mt-6 text-lg leading-relaxed">
            Treat every AI output as a draft a junior PM handed you. Read it
            critically. Edit. Push back. Ask what&rsquo;s missing. Ask what
            assumption it made that you would not have made. If you
            wouldn&rsquo;t ship a junior PM&rsquo;s first draft without
            changes, don&rsquo;t ship the model&rsquo;s either.
          </p>

          <p className="mt-6 text-lg leading-relaxed">
            This isn&rsquo;t about distrust (though you shouldn&rsquo;t have
            many reasons to trust the LLM at this stage). It&rsquo;s about
            the right division of labor. The model accelerates the work; you
            provide the judgment. That division is what makes AI productive
            rather than dangerous.
          </p>

          <h3 id="step-6" className="scroll-mt-24 mt-10 mb-4 text-xl font-semibold text-gray-900 dark:text-white">
            6. Build a personal prompt library as you go.
          </h3>

          <p className="text-lg leading-relaxed">
            When a prompt works well, save it. After two to three weeks
            you&rsquo;ll have a working playbook for the dozen tasks that
            consume most of your time. A Notion page or a Google doc is
            sufficient &mdash; no need to over-engineer.
          </p>

          <p className="mt-6 text-lg leading-relaxed">
            Also, stick with the thread until you&rsquo;re finished with a
            topic or task. AI will benefit from the context, even and
            especially if you change your mind midstream. AI won&rsquo;t lose
            the thread and may prompt you with questions about whether to
            keep or abandon early instructions.
          </p>

          <p className="mt-6 text-lg leading-relaxed">A starter library structure:</p>

          <ul className="mt-5 ml-6 space-y-2 text-lg leading-relaxed list-disc marker:text-gray-400 dark:marker:text-gray-600">
            <li>
              <strong>Synthesis prompts</strong> &mdash; interview clustering,
              meeting summary, document compression, theme extraction
            </li>
            <li>
              <strong>Drafting prompts</strong> &mdash; PRD section,
              stakeholder update, executive narrative, launch announcement
            </li>
            <li>
              <strong>Critique prompts</strong> &mdash;{" "}
              &ldquo;argue against this approach,&rdquo;{" "}
              &ldquo;find the weakest assumption in this PRD,&rdquo;{" "}
              &ldquo;what would a regulator, auditor, or skeptic ask?&rdquo;
            </li>
            <li>
              <strong>Decision support</strong> &mdash; pros and cons of a
              roadmap choice, second-order effects of a feature decision,
              what would change if we cut scope by 30 percent?
            </li>
          </ul>

          <p className="mt-6 text-lg leading-relaxed">
            Reusing prompts isn&rsquo;t lazy. It&rsquo;s the equivalent of
            keeping a checklist. The first version of any prompt is almost
            always the worst version; the third or fourth version is the
            keeper.
          </p>

          <h3 id="step-7" className="scroll-mt-24 mt-10 mb-4 text-xl font-semibold text-gray-900 dark:text-white">
            7. Add stress-testing and pre-mortem work to your kit.
          </h3>

          <p className="text-lg leading-relaxed">
            Once basic synthesis and generation are comfortable, the
            highest-leverage use of AI in product work is stress-testing
            decisions before you ship them. Run a draft PRD through the
            lenses of an aggressive engineer, a skeptical executive, a
            worried compliance officer, and a confused customer. The model
            will surface concerns you might otherwise miss until production.
          </p>

          <p className="mt-6 text-lg leading-relaxed">
            This is where AI moves from <em>productivity hack</em> to{" "}
            <em>judgment recalibration</em>. You start asking different
            questions of your own work because the cost of asking dropped to
            near zero.
          </p>

          <p className="mt-6 text-lg leading-relaxed">Example prompts:</p>

          <ul className="mt-5 ml-6 space-y-2 text-lg leading-relaxed list-disc marker:text-gray-400 dark:marker:text-gray-600">
            <li>
              &ldquo;What&rsquo;s the most aggressive critique an engineer
              would make of this approach?&rdquo;
            </li>
            <li>
              &ldquo;What questions would a customer ask after this feature
              ships that I haven&rsquo;t accounted for?&rdquo;
            </li>
            <li>
              &ldquo;If this feature is wrong five percent of the time, what
              is the impact? What&rsquo;s the customer&rsquo;s recourse and
              how do we handle it?&rdquo;
            </li>
            <li>
              &ldquo;What&rsquo;s the case for doing nothing instead of
              shipping this?&rdquo;
            </li>
            <li>
              &ldquo;What would a regulator or auditor ask about this
              decision a year from now?&rdquo;
            </li>
          </ul>

          <p className="mt-6 text-lg leading-relaxed">
            You won&rsquo;t act on every answer. But you&rsquo;ll notice the
            ones that matter, and the model will surface them faster than
            your inner critic would.
          </p>

          <h3 id="step-8" className="scroll-mt-24 mt-10 mb-4 text-xl font-semibold text-gray-900 dark:text-white">
            8. Stay honest about what AI gets wrong and remain skeptical.
          </h3>

          <p className="text-lg leading-relaxed">
            The model will be confidently wrong sometimes. It will
            hallucinate facts, citations, and product capabilities that
            don&rsquo;t exist. It will agree with you too readily when you
            push back. It will miss context you didn&rsquo;t give it. It
            will be worse at math than a calculator, worse at recent facts
            than a search engine, and worse at your specific company&rsquo;s
            product than someone who actually works there.
          </p>

          <p className="mt-6 text-lg leading-relaxed">
            Know these failure modes and check for them. The skill
            isn&rsquo;t trusting the model; it&rsquo;s calibrating exactly
            how much to trust which kinds of output. That calibration takes
            practice. It doesn&rsquo;t take a PhD.
          </p>

          <p className="mt-6 text-lg leading-relaxed">
            When you catch a confident hallucination, don&rsquo;t conclude
            the tool is useless. Conclude that this is one task or one topic
            where the model needs more guardrails. Sometimes the fix is
            feeding it source material instead of asking from memory.
            Sometimes it&rsquo;s asking a different question. Sometimes
            it&rsquo;s doing the task yourself because the marginal value of
            AI assistance is too low.
          </p>

          <h2 id="two-weeks" className="scroll-mt-24 mt-14 mb-6 text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            What two weeks of practice will give you
          </h2>

          <p className="text-lg leading-relaxed">
            Two weeks from now, you&rsquo;ll feel different about AI as a
            working tool. Not because you&rsquo;ll have learned all of it
            &mdash; nobody has &mdash; but because you&rsquo;ll know what it
            does well, what it does poorly, and how to use the parts that
            work for the tasks you have. That&rsquo;s the threshold
            leadership was pointing at when they asked you to &ldquo;look
            into&rdquo; the topic. Cross it once, and the rest builds
            naturally.
          </p>

          <p className="mt-6 text-lg leading-relaxed">
            The PMs who become AI-native first in any organization
            aren&rsquo;t necessarily the most technical ones. They&rsquo;re
            the ones who started before they felt ready. Start today.
          </p>

          <h2 id="next-stage" className="scroll-mt-24 mt-14 mb-6 text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            The Next Stage &mdash; once you&rsquo;ve graduated from web-UI chat
          </h2>

          <p className="text-lg leading-relaxed">
            As you become comfortable, you&rsquo;re ready for the next
            commitment. Buy a subscription and install your LLM tool of
            choice on your computer. LLM tools have usage limits for each
            tier and you won&rsquo;t want to be limited as you begin to
            generate docs, models, wire-frames, system diagrams, prototypes,
            and more.
          </p>

          <p id="ladder-1" className="scroll-mt-24 mt-8 text-lg leading-relaxed">
            <strong>1. Install your LLM tool natively and pay for it.</strong>{" "}
            Run it where it can read and write files on your machine, not
            just chat through a browser tab. This is the unlock for
            everything below. Web UI plateaus; an installed agent
            doesn&rsquo;t.
          </p>

          <p id="ladder-2" className="scroll-mt-24 mt-6 text-lg leading-relaxed">
            <strong>2. Documents.</strong> Have AI draft, maintain, and
            revise full PRDs and decision memos as working documents &mdash;
            not just sections you copy into Word. The shift from &ldquo;AI
            helps me write the PRD&rdquo; to &ldquo;AI keeps the PRD current
            as the spec evolves&rdquo; is bigger than it sounds.
          </p>

          <p id="ladder-3" className="scroll-mt-24 mt-6 text-lg leading-relaxed">
            <strong>3. Planning artifacts.</strong> Generate quarterly or
            annual roadmaps from your contextual documents &mdash; strategy
            memos, customer research, competitive positioning, prior
            commitments. Break strategic themes into epics, and epics into
            user stories with explicit acceptance criteria. Draft user
            journeys that span discovery, activation, value moment, and
            retention. Each used to take a PM days of solo synthesis; with
            AI maintaining the working draft against your context, they take
            hours and stay current as the context shifts. The judgment about{" "}
            <em>which</em> themes belong on the roadmap is still yours
            &mdash; but the drafting that used to gate the conversation is
            now cheap.
          </p>

          <p id="ladder-4" className="scroll-mt-24 mt-6 text-lg leading-relaxed">
            <strong>4. Models.</strong> Build a one-page ROI or cost model
            for a feature you&rsquo;re considering, with inputs you can
            adjust and assumptions called out explicitly. Pricing, adoption
            curve, support cost, churn impact. AI handles the math; you
            defend the assumptions.
          </p>

          <p id="ladder-5" className="scroll-mt-24 mt-6 text-lg leading-relaxed">
            <strong>5. Wire-frames.</strong> Produce low-fidelity UI mockups
            from a written description, then iterate on them with stakeholder
            feedback before engineering ever sees them. You reach a UX
            conversation that used to require a designer&rsquo;s calendar.
          </p>

          <p id="ladder-6" className="scroll-mt-24 mt-6 text-lg leading-relaxed">
            <strong>6. System diagrams.</strong> Generate a data-flow or
            architecture diagram for a feature &mdash; sources,
            transformations, downstream consumers, retention requirements
            &mdash; and use it to interrogate engineering&rsquo;s design.
            Especially load-bearing in regulated categories, where the
            diagram itself often becomes the audit artifact.
          </p>

          <p id="ladder-7" className="scroll-mt-24 mt-6 text-lg leading-relaxed">
            <strong>7. Prototypes.</strong> Have AI build a clickable
            prototype in HTML or React and validate UX with customers{" "}
            <em>before</em> you finalize the PRD. The PRD that follows is a
            different document than one drafted from a hunch.
          </p>

          <h2 id="stress-testing" className="scroll-mt-24 mt-14 mb-6 text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Stress-testing and judgment &mdash; where AI moves from productivity to recalibration
          </h2>

          <p id="ladder-8" className="scroll-mt-24 text-lg leading-relaxed">
            <strong>
              8. Run any non-trivial decision through four critic lenses in a
              single sitting
            </strong>{" "}
            &mdash; aggressive engineer, skeptical executive, worried
            compliance officer, confused customer. The cost of stress-testing
            drops to near-zero. You start asking different questions of your
            own work because the cost of asking drops.
          </p>

          <p id="ladder-9" className="scroll-mt-24 mt-6 text-lg leading-relaxed">
            <strong>9. Use AI to read your team&rsquo;s codebase</strong>{" "}
            before evaluating a feasibility tradeoff. Most PMs declare
            technical decisions out of scope because reading code costs them
            too much. That cost dropped. You can now hold an opinion about
            whether the proposed architecture matches the product intent
            &mdash; before engineering finishes the design doc.
          </p>

          <h2 id="ai-native" className="scroll-mt-24 mt-14 mb-6 text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            AI-native &mdash; judgment reshaped by the tools at hand
          </h2>

          <p id="ladder-10" className="scroll-mt-24 text-lg leading-relaxed">
            <strong>
              10. Build a custom Project (or GPT) scoped to your product area
            </strong>{" "}
            &mdash; loaded with your context documents, brand voice, customer
            language, recurring patterns, and your team&rsquo;s vocabulary.
            The tool becomes calibrated to <em>your</em> work specifically
            rather than to PM work generically. Output quality jumps and
            stays jumped.
          </p>

          <p id="ladder-11" className="scroll-mt-24 mt-6 text-lg leading-relaxed">
            <strong>
              11. Redesign your PRD template, customer research cadence, and
              stakeholder-update format
            </strong>{" "}
            on the assumption that AI is part of the workflow. When the
            tools shift, the rituals around them should shift too. Most
            don&rsquo;t, because the rituals predate the tools. This is the
            work most teams skip.
          </p>

          <p id="ladder-12" className="scroll-mt-24 mt-6 text-lg leading-relaxed">
            <strong>
              12. Recalibrate your definition of &ldquo;ready to ship&rdquo;
            </strong>{" "}
            to reflect what AI-assisted features can and cannot defensibly do
            in production. This is the AI-native threshold &mdash; distinct
            from competent AI use. Product judgment reshaped by having
            LLM-shaped capabilities available, and a definition of{" "}
            <em>done</em> that reflects that shift.
          </p>
          </article>
        </div>
      </div>

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
