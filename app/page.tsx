export default function Home() {
return (
<main className="bg-white text-slate-900">
{/* HERO */}
<section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
<p className="mb-4 inline-block rounded-full bg-slate-100 px-4 py-1 text-sm font-medium text-slate-700">
BOS360 Business Coaching
</p>

<h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
I help B2B SaaS leaders scale from $2M to $50M with clarity, execution,
and accountability.
</h1>

<p className="mt-6 max-w-2xl text-lg text-slate-600">
I work with founders and leadership teams to align priorities, build
execution discipline, and create measurable momentum—without adding
chaos.
</p>

<div className="mt-10 flex flex-wrap gap-4">
<a
href="#contact"
className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
>
Book a Discovery Call
</a>
<a
href="#proof"
className="rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
>
Why Work With Cam
</a>
</div>
</section>

{/* WHAT I HELP WITH */}
<section className="border-t border-slate-200 bg-slate-50 py-20">
<div className="mx-auto max-w-6xl px-6">
<h2 className="text-3xl font-bold md:text-4xl">What I Help You Solve</h2>
<div className="mt-10 grid gap-6 md:grid-cols-3">
{[
{
title: "Strategic Clarity",
text: "Get your leadership team aligned on where you’re going, what matters most now, and what to deprioritize.",
},
{
title: "Execution Discipline",
text: "Turn strategy into focused weekly execution with practical operating rhythms your team can actually sustain.",
},
{
title: "Leadership Accountability",
text: "Build a high-performance culture where ownership is clear, progress is measurable, and momentum compounds.",
},
].map((item) => (
<div
key={item.title}
className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
>
<h3 className="text-xl font-semibold">{item.title}</h3>
<p className="mt-3 text-slate-600">{item.text}</p>
</div>
))}
</div>
</div>
</section>

{/* BOS360 PROCESS */}
<section className="py-20">
<div className="mx-auto max-w-6xl px-6">
<h2 className="text-3xl font-bold md:text-4xl">My BOS360 Coaching Approach</h2>
<ol className="mt-8 grid gap-4 md:grid-cols-5">
{[
"Assess your current business reality",
"Align on 90-day outcomes and priorities",
"Build a focused execution plan",
"Install accountability rhythms",
"Review, refine, and scale what works",
].map((step, i) => (
<li key={step} className="rounded-2xl border border-slate-200 p-5">
<p className="text-sm font-semibold text-slate-500">Step {i + 1}</p>
<p className="mt-2 font-medium">{step}</p>
</li>
))}
</ol>
</div>
</section>

{/* PROOF */}
<section id="proof" className="border-t border-slate-200 bg-slate-50 py-20">
<div className="mx-auto max-w-6xl px-6">
<h2 className="text-3xl font-bold md:text-4xl">Why Founders Work With Me</h2>

<div className="mt-10 grid gap-6 md:grid-cols-3">
<div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
<p className="text-4xl font-bold">20+ Years</p>
<p className="mt-2 text-slate-600">Business and leadership experience</p>
</div>
<div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
<p className="text-4xl font-bold">B2B SaaS Focus</p>
<p className="mt-2 text-slate-600">
Specialized in growth-stage startups from $2M to $50M
</p>
</div>
<div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
<p className="text-4xl font-bold">BOS360</p>
<p className="mt-2 text-slate-600">
Proven framework centered on alignment, discipline, and accountability
</p>
</div>
</div>

<blockquote className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 italic text-slate-700">
“Cam brought structure and accountability to our leadership team at the
exact moment we needed it. We made better decisions, faster—and executed
with way more consistency.”
<span className="mt-3 block not-italic font-semibold text-slate-900">
— Client testimonial (add your approved quote here)
</span>
</blockquote>
</div>
</section>

{/* ABOUT */}
<section className="py-20">
<div className="mx-auto max-w-4xl px-6">
<h2 className="text-3xl font-bold md:text-4xl">About Cam Lillico</h2>
<p className="mt-6 text-lg text-slate-600">
I’m a BOS360 business coach helping B2B SaaS founders and leadership teams
scale with intention. My coaching style is direct, practical, and rooted in
real-world operating experience—so your team gains clarity, executes faster,
and drives meaningful results.
</p>
</div>
</section>

{/* CTA / CONTACT */}
<section
id="contact"
className="border-t border-slate-200 bg-slate-900 py-20 text-white"
>
<div className="mx-auto max-w-4xl px-6 text-center">
<h2 className="text-3xl font-bold md:text-4xl">
Ready to Scale with More Clarity and Less Noise?
</h2>
<p className="mt-4 text-slate-300">
Let’s talk about where your business is now, where you want to go, and
what it’ll take to get there.
</p>
<div className="mt-8 flex flex-wrap items-center justify-center gap-4">
<a
href="mailto:cam@camlillico.com"
className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
>
cam@camlillico.com
</a>
<a
href="#"
className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
>
Book a Discovery Call
</a>
</div>
</div>
</section>
</main>
);
}