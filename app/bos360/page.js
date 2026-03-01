export const metadata = {
  title: "BOS360 Coaching | Cam Lillico",
  robots: { index: false, follow: false },
};

const pillars = [
  {
    icon: "🧭",
    title: "Strategic Clarity",
    text: "Get your leadership team aligned on where you’re going, what matters most now, and what to deprioritize.",
  },
  {
    icon: "⚙️",
    title: "Execution Discipline",
    text: "Turn strategy into focused weekly execution with practical operating rhythms your team can actually sustain.",
  },
  {
    icon: "📈",
    title: "Leadership Accountability",
    text: "Build a high-performance culture where ownership is clear, progress is measurable, and momentum compounds.",
  },
];

const process = [
  "Assess your current business reality",
  "Align on 90-day outcomes and priorities",
  "Build a focused execution plan",
  "Install accountability rhythms",
  "Review, refine, and scale what works",
];

export default function Bos360Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <a
        href="/"
        aria-label="Navigate to philosophy page"
        title="Philosophy"
        className="fixed bottom-3 right-3 z-20 text-[10px] tracking-[0.25em] uppercase text-slate-500/35 transition hover:text-cyan-300/70"
      >
        ◌
      </a>

      {/* Background glow accents */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-cyan-400/15 blur-3xl" />
      </div>

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pb-8 pt-24 md:pb-10 md:pt-32">
        <p className="inline-flex items-center gap-2 rounded-full border border-blue-400/40 bg-blue-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-blue-200">
          <span aria-hidden>◉</span>
          BOS360 Business Coaching
        </p>

        <h1 className="mt-6 max-w-5xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
          I work with companies at
          <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
            {" "}$2M to $50M revenue
          </span>{" "}
          to scale with clarity, execution, and accountability.
        </h1>

        <div className="mt-6 flex max-w-4xl items-center gap-4 md:gap-5">
          <img
            src="/cam-headshot-circle.png"
            alt="Cam Lillico headshot"
            className="h-16 w-16 shrink-0 rounded-full border border-cyan-300/40 object-cover shadow-lg shadow-cyan-900/30 md:h-20 md:w-20"
            loading="eager"
          />
          <p className="text-lg text-slate-300">
            I partner with founders and leadership teams to align priorities, build
            execution discipline, and create measurable momentum—without adding chaos.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="https://calendar.app.google/M4pokXD8CBpc1c4U6"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-90"
          >
            Book a Discovery Call
          </a>
          <a
            href="#proof"
            className="rounded-xl border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:bg-slate-800"
          >
            Why Work With Cam
          </a>
        </div>
      </section>

      {/* PILLARS */}
      <section className="mx-auto max-w-6xl px-6 py-10 md:py-12">
        <h2 className="flex items-center gap-3 text-3xl font-bold md:text-4xl">
          <span aria-hidden className="text-cyan-300">✦</span>
          What I Help You Solve
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {pillars.map((item) => (
            <article
              key={item.title}
              className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:border-blue-400/40"
            >
              <h3 className="flex items-center gap-2 text-xl font-semibold text-slate-100">
                <span aria-hidden className="text-cyan-300">{item.icon}</span>
                {item.title}
              </h3>
              <p className="mt-3 text-slate-300">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-y border-slate-800 bg-slate-900/40 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="flex items-center gap-3 text-3xl font-bold md:text-4xl">
            <span aria-hidden className="text-cyan-300">⚡</span>
            My BOS360 Coaching Approach
          </h2>
          <ol className="mt-8 grid gap-4 md:grid-cols-5">
            {process.map((step, i) => (
              <li
                key={step}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-5"
              >
                <p className="text-sm font-semibold uppercase tracking-wider text-blue-300 md:text-xs">
                  Step {i + 1}
                </p>
                <p className="mt-2 text-base font-medium leading-relaxed text-slate-200 md:text-sm">
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* PROOF */}
      <section id="proof" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="flex items-center gap-3 text-3xl font-bold md:text-4xl">
          <span aria-hidden className="text-cyan-300">🏛️</span>
          Why Founders Work With Me
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-4xl font-bold text-cyan-300">20+ Years</p>
            <p className="mt-2 text-slate-300">Business and leadership experience</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-2xl font-bold text-cyan-300">B2B SaaS Focus</p>
            <p className="mt-2 text-slate-300">
              Specialized in growth-stage startups from $2M to $50M
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-2xl font-bold text-cyan-300">BOS360 Framework</p>
            <p className="mt-2 text-slate-300">
              Proven methodology built around alignment, discipline, and accountability
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <blockquote className="rounded-2xl border border-blue-400/30 bg-blue-500/10 p-6 italic text-slate-100">
            “Cam helped us get brutally clear on priorities and gave our leadership team a practical operating cadence we could actually sustain. Execution quality improved almost immediately.”
            <span className="mt-3 block not-italic font-semibold text-cyan-200">
              — Emilie Cushman, CEO at Kira Talent
            </span>
          </blockquote>

          <blockquote className="rounded-2xl border border-blue-400/30 bg-blue-500/10 p-6 italic text-slate-100">
            “What stood out was the balance of strategy and accountability. Cam challenged our assumptions, tightened ownership, and helped us move from busy to effective.”
            <span className="mt-3 block not-italic font-semibold text-cyan-200">
              — Brennan Smith, CEO at CTC Communications
            </span>
          </blockquote>

          <blockquote className="rounded-2xl border border-blue-400/30 bg-blue-500/10 p-6 italic text-slate-100">
            “Cam brought structure without bureaucracy. We left each session with clear decisions, named owners, and real momentum—exactly what we needed at our stage.”
            <span className="mt-3 block not-italic font-semibold text-cyan-200">
              — Roy Firestein, CEO at Autohost
            </span>
          </blockquote>
        </div>
      </section>

      {/* ABOUT + CTA */}
      <section className="border-t border-slate-800 bg-slate-900/40 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="flex items-center gap-3 text-3xl font-bold md:text-4xl">
              <span aria-hidden className="text-cyan-300">👤</span>
              About Cam Lillico
            </h2>
            <p className="mt-5 text-slate-300">
              Cam is a certified BOS360 facilitator and seasoned revenue leader who helps
              CEOs and leadership teams turn vision into disciplined execution. With nearly
              a decade of hands-on experience running annual and quarterly planning sessions,
              he combines structured frameworks with calm, unbiased facilitation to drive
              clarity, accountability, and momentum. Cam doesn’t act as a consultant telling
              teams what to do — he creates the space for honest dialogue, healthy debate,
              and aligned decision-making. His focus is simple: build strong teams, sharpen
              strategy, and ensure execution matches ambition.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
            <h3 className="flex items-center gap-2 text-2xl font-semibold">
              <span aria-hidden className="text-cyan-300">🚀</span>
              Ready to Scale with More Clarity?
            </h3>
            <p className="mt-3 text-slate-300">
              Let’s talk about your current stage, your next growth targets, and the
              operating cadence to get you there.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:cam@camlillico.com"
                className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-100 hover:bg-slate-800"
              >
                cam@camlillico.com
              </a>
              <a
                href="https://calendar.app.google/M4pokXD8CBpc1c4U6"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 hover:opacity-90"
              >
                Book a Discovery Call
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
