import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Human Judgement: An AI Side Quest — Seth Manwaring",
  description:
    "A sailing trip to Catalina, a broken outboard, and what AI-augmented troubleshooting actually felt like — from someone who has spent 31 years thinking about how senior judgment works.",
};

export default function HumanJudgementAnAiSideQuest() {
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
            Human Judgement: An AI Side Quest
          </h1>
          <p className="mt-5 text-lg sm:text-xl italic text-gray-600 dark:text-gray-300">
            A sailing trip to Catalina, a broken outboard, and what
            AI-augmented troubleshooting actually felt like.
          </p>
          <p className="mt-6 text-xs font-mono uppercase tracking-wider text-gray-400 dark:text-gray-500">
            2026-06-02 &middot; Seth Manwaring
          </p>
        </div>
      </header>

      {/* Article body */}
      <article className="px-6 py-16">
        <div className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
          <figure className="mb-6 md:float-right md:mb-4 md:ml-8 md:w-60 lg:w-72">
            <Image
              src="/catalina-crossing.jpg"
              alt="The view forward from the deck of a 37-foot catamaran, looking past the furled jib and rigging across open water toward Catalina Island on a clear, bright day."
              width={1500}
              height={1999}
              className="h-auto w-full rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm"
              priority
            />
            <figcaption className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Pointed toward Catalina, with the crossing still ahead of us.
            </figcaption>
          </figure>

          <p className="text-lg leading-relaxed">
            A friend recently asked me, &ldquo;Is AI a passing fad or is it here
            to stay?&rdquo;
          </p>

          <p className="mt-6 text-lg leading-relaxed">
            In my experience, AI had already made my work more efficient over
            the last couple of years. I eventually stopped looking things up on
            Google or Wikipedia and asked AI about every curiosity. And AI is
            affecting many lives by driving major disruption in business and
            turmoil in the job market.
          </p>

          <p className="mt-6 text-lg leading-relaxed">
            AI has awesome powers of analysis, pattern detection, automation,
            creative generation, and more. You probably noticed Netflix&rsquo;s
            new generative AI-powered conversational search tool, which uses
            OpenAI&rsquo;s ChatGPT to provide conversational discovery inside
            the app. You can search Netflix&rsquo;s media using natural phrases
            instead of keywords. &ldquo;I want something funny and upbeat&rdquo;
            or &ldquo;I want something scary, but not too scary, and maybe a
            little bit funny.&rdquo; You can refine recommendations in real time
            based on your mood and tastes.
          </p>

          <p className="mt-6 text-lg leading-relaxed">
            The Netflix example illustrates how we work with AI today. You can
            collect and organize information much faster than ever before, and
            make better informed decisions. Human judgement is the indispensable
            element. Netflix can filter your options but you still choose what
            to watch.
          </p>

          <p className="mt-6 text-lg leading-relaxed">
            Likewise, AI can draft correspondence, reports, articles and more.
            But you had better review and edit every one of those drafts before
            you hit Send (or commit and push). Because while AI can gather the
            facts you need and offer options, it can&rsquo;t be trusted to make
            the correct decisions. Not today. Even when AI is accurate &mdash;
            not hallucinating &mdash; we must not delegate judgement.
          </p>

          <p className="mt-6 text-lg leading-relaxed">
            I&rsquo;ll share a story that illustrates how AI guided me through a
            repair for which I have no training, and how I iteratively prompted
            AI so that I could apply prudent judgement at each step.
          </p>

          <h2 className="mt-12 text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            The setup
          </h2>

          <p className="mt-6 text-lg leading-relaxed">
            In spring this year, my wife and I joined friends in Long Beach,
            climbed aboard their 37-foot catamaran, and pointed toward Catalina
            Island. Our friend Scott had bought and restored the boat over the
            last three years as it rested on supports in his backyard in the
            Arizona desert. His adult children, friends, and neighbors helped
            with various projects such as unloading from the flatbed truck,
            painting, and myriad repairs. I helped him with a few projects like
            sanding, replacing windows, and installing a wave break forward of
            the outboard engines.
          </p>

          <figure className="my-10 mx-auto max-w-sm">
            <Image
              src="/twin-yamaha-outboards.jpg"
              alt="The twin white Yamaha T25 high-thrust outboard engines mounted on the stern of the catamaran, tilted up out of the water, with the hills of Catalina Island and calm blue water in the background."
              width={1500}
              height={2000}
              className="h-auto w-full rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm"
            />
            <figcaption className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              The twin Yamaha T25 high-thrust outboards, tilted up at the
              mooring in Two Harbors.
            </figcaption>
          </figure>

          <p className="mt-6 text-lg leading-relaxed">
            As Scott steered clear of the marina and increased the thrust, one
            of the twin Yamaha T25 high-thrust four-stroke outboard engines
            began to violently kick. In open water, there wasn&rsquo;t much that
            could be done, so he killed the engine and we covered the 22-mile
            crossing into the wind with one engine. We moored in Two Harbors and
            spent the night.
          </p>

          <p className="mt-6 text-lg leading-relaxed">
            The next day, I climbed into a dinghy and disassembled the prop,
            hoping we might find something to untangle there. No such luck. The
            problem was new; Scott had recently sailed without issues, so it
            made sense that we had picked up some debris in the water. But that
            wasn&rsquo;t it. The dinghy bobbed and rolled as I reassembled the
            propeller and postponed further investigation until we reached the
            marina again. Once in the marina, the water would be still and we
            would have access to parts and a mechanic. We relaxed on the boat,
            explored the island, had dinner at Harbor Reef Restaurant, streamed
            a movie over Starlink, and played a card game. The return trip would
            be made on a single engine and with a little wind in the sail.
          </p>

          <h2 className="mt-12 text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            The diagnostic arc
          </h2>

          <p className="mt-6 text-lg leading-relaxed">
            On our way back the next morning, I spent the hours in conversation
            with Grok, explaining every symptom in detail and the
            troubleshooting we had already tried. I am not a marine mechanic.
            I&rsquo;m not even a car mechanic. Home repairs are more my speed,
            but I know just enough to be dangerous. Especially where electricity
            is involved. I&rsquo;ve installed many outlets, switches, and ceiling
            fans and I&rsquo;ll admit: I&rsquo;ve electrocuted myself almost
            every time. My background is in software delivery and leadership:
            product management, Scrum, SaaS, genomic data, dairy herds, airline
            reservations, software quality, and the business processes around it
            all. My professional intuition for outboard-motor diagnostics is
            exactly zero.
          </p>

          <figure className="my-10">
            <video
              className="w-full rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm"
              controls
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/outboard-under-way.jpg"
            >
              <source src="/outboard-under-way.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <figcaption className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Crossing back to Long Beach on a single healthy engine, wake
              churning astern.
            </figcaption>
          </figure>

          <p className="mt-6 text-lg leading-relaxed">
            But Grok, running on my laptop in the galley, was eager to have the
            conversation and deftly analyzed the information I provided.
          </p>

          <p className="mt-6 text-lg leading-relaxed">
            I described the symptoms to Grok the same way I&rsquo;d describe a
            customer-reported product bug at work: what was working, what
            wasn&rsquo;t, what I had already ruled out. The engine idled just
            fine without the load of the propeller. The prop spun freely in
            neutral. Under load, the engine bucked. No obvious obstruction.
          </p>

          <p className="mt-6 text-lg leading-relaxed">
            Grok returned four likely causes, ranked by probability: a spun
            propeller hub, a fuel delivery issue under load, a gearcase problem,
            and prop ventilation. Each one came with a specific test I could
            perform with materials I could access once we reached the slip.
          </p>

          <p className="mt-6 text-lg leading-relaxed">
            The most common cause, Grok said, was a spun hub. I had no idea what
            that meant, but Grok was helpful in explaining the details and
            finding diagrams and photos. Once tied in the marina, I climbed back
            into the dinghy and disassembled the propeller, then reported to Grok
            that the hub wasn&rsquo;t slipping. I won&rsquo;t burden you with the
            steps. If you&rsquo;re stranded at sea with the same problem, stop
            reading this and ask Grok for advice. We even tried a control test,
            using a spare prop to confirm that it didn&rsquo;t affect the
            symptoms.
          </p>

          <p className="mt-6 text-lg leading-relaxed">
            Each time I supplied Grok with the results of a test or more details
            about the symptoms, the luculent LLM returned a short list of likely
            causes, in order from simplest adjustment to most costly repair. At
            each decision point, Scott and I would discuss the options and choose
            one. We iterated through the problem, taking input from Grok and
            making a decision based on cost, our skill level, and available
            tools. This process circled ever closer to the root cause and the
            solution. As we got closer, we worried that the gear box would
            require a costly trip to the mechanic.
          </p>

          <p className="mt-6 text-lg leading-relaxed">
            We were fortunate in the end. The gear box was malfunctioning but
            wasn&rsquo;t damaged. The clutch dog was failing to engage, causing a
            loud clattering and bucking, because the shift cable needed
            adjustment. Yes, I learned all these terms from Grok that day. All
            that was needed was a small adjustment to the barrel nut on the shift
            cable. Then we tested it under load, forward and reverse, and
            celebrated our triumph.
          </p>

          <h2 className="mt-12 text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            What this side quest actually demonstrated
          </h2>

          <p className="mt-6 text-lg leading-relaxed">
            I want to be careful about the lesson, because the wrong version of
            this story is everywhere on LinkedIn this year. I don&rsquo;t want
            you to think AI fixed my friend&rsquo;s boat.
          </p>

          <p className="mt-6 text-lg leading-relaxed">
            AI didn&rsquo;t fix the boat. Scott and I fixed his boat. AI
            accelerated the diagnosis by quickly providing ranked lists of
            likely causes and the specific tests to perform for each one. That
            collapsed what would have been hours of internet searching, YouTube
            watching, and forum lurking into a focused conversation and a couple
            of hours of mechanical work.
          </p>

          <p className="mt-6 text-lg leading-relaxed">
            The work I did was recognizably engineering work:
          </p>

          <ul className="mt-6 ml-6 space-y-4 text-lg leading-relaxed list-disc marker:text-gray-400 dark:marker:text-gray-600">
            <li>
              <strong>I observed carefully</strong> &mdash; not just the original
              symptom but the secondary ones that formed a more comprehensive
              diagnosis.
            </li>
            <li>
              <strong>
                I performed the tests correctly and reported the results back in
                usable form.
              </strong>{" "}
              The prop-hub alignment-mark test, the prop swap as a control, a
              visual check on the cooling system, et cetera.
            </li>
            <li>
              <strong>
                I noticed when something Grok said didn&rsquo;t quite match what
                I was seeing, and I pushed back.
              </strong>{" "}
              Grok&rsquo;s first hypothesis was a spun propeller hub. An
              alignment-mark test ruled it out. Without that confirmation step,
              we might have wasted a day and a new prop chasing the wrong fix.
            </li>
            <li>
              <strong>I sought input from the owner/captain</strong>, who
              represented the client that usually has more domain expertise than
              the R&amp;D team.
            </li>
            <li>
              <strong>
                I evaluated each suggestion against our actual constraints.
              </strong>{" "}
              Grok presented options ranked from simplest adjustment to most
              costly repair. Scott and I weighed each one against cost, our skill
              level, and the tools we had on hand, then chose. Grok presented the
              menu; we chose the dish.
            </li>
            <li>
              <strong>I knew when to stop diagnosing.</strong> Once the linkage
              held under load, forward and reverse, we tested twice more and
              called it done. The temptation to keep investigating &ldquo;just in
              case&rdquo; is the cousin of the temptation to over-engineer the
              system. We resisted both.
            </li>
          </ul>

          <p className="mt-6 text-lg leading-relaxed">
            That last list is a solid fit with my professional skillset, applied
            to a domain I&rsquo;m not professionally trained in. AI supplied the
            vocabulary, the test sequence, and the ranked list of possibilities.
            My judgement supplied what AI cannot: the discipline of careful
            observation, the willingness to test rather than guess, the
            recognition that the cheap fix is the right one until proven
            otherwise, and the discipline to stop once the system was working
            again.
          </p>

          <p className="mt-6 text-lg leading-relaxed">
            This is the same operating model I&rsquo;ve written about for my
            professional work &mdash; the hard part of AI-augmented anything
            isn&rsquo;t the AI. It&rsquo;s the human judgement that decides what
            to ask, evaluates what comes back, knows when the demo-impressive
            answer isn&rsquo;t the defensible one, and knows when to stop.
          </p>

          <p className="mt-6 text-lg leading-relaxed">
            On a 37-foot catamaran tied at a Long Beach marina with a broken
            outboard, Grok in one hand and a wrench in the other, that thesis
            happened to be load-bearing in a more literal way than usual.
          </p>

          <p className="mt-6 text-lg leading-relaxed">
            A few weeks later, when I was asked, &ldquo;Is AI a passing fad or is
            it here to stay?&rdquo; I shared this story and explained that AI
            will be useful in almost every aspect of our lives. And I warned that
            while technology can be powerful, it can also be a powerful force of
            deception and distraction.
          </p>

          <p className="mt-6 text-lg leading-relaxed">
            So keep a weathered eye, friends.
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
