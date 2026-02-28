export const metadata = {
title: "Cam Lillico",
description:
"A small corner of the internet for sharp ideas, difficult truths, and life-affirming philosophy.",
};

export default function Home() {
return (
<main className="min-h-screen bg-slate-950 text-slate-100">
{/* Hero */}
<section className="mx-auto max-w-5xl px-6 py-24 md:py-32">
<p className="inline-block rounded-full border border-slate-700 px-4 py-1 text-xs tracking-widest text-slate-300 uppercase">
Philosophy • Friction • Forward Motion
</p>

<h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
Between Schopenhauer’s shadow and Nietzsche’s fire.
</h1>

<p className="mt-6 max-w-3xl text-lg text-slate-300">
Some thoughts are cold enough to strip illusion. Others are bright enough
to rebuild meaning. This page sits in that tension: the clear-eyed
pessimism of Arthur Schopenhauer, and Friedrich Nietzsche’s defiant
response—an invitation to create value anyway.
</p>
</section>

{/* Two-column contrast */}
<section className="border-t border-slate-800 bg-slate-900/50 py-20">
<div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-2">
<article className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
<h2 className="text-2xl font-semibold">Schopenhauer: Respect the dark</h2>
<p className="mt-4 text-slate-300">
Schopenhauer’s genius was honesty without anesthesia. Desire drives us,
fulfillment fades, suffering returns. His work is pointed, disciplined,
and unsettlingly precise: a philosophy that refuses cheap comfort.
</p>
<p className="mt-4 text-slate-400">
Not cynical for style—serious for truth.
</p>
</article>

<article className="rounded-2xl border border-slate-700 bg-slate-800 p-8">
<h2 className="text-2xl font-semibold">Nietzsche: Answer with creation</h2>
<p className="mt-4 text-slate-200">
Nietzsche accepts the diagnosis but rejects surrender. Life includes
pain, yes—but also possibility. Meaning is not found pre-made; it is
forged through action, discipline, and artistic self-overcoming.
</p>
<p className="mt-4 text-slate-300">
Not naïve optimism—earned affirmation.
</p>
</article>
</div>
</section>

{/* Closing */}
<section className="py-20">
<div className="mx-auto max-w-4xl px-6 text-center">
<blockquote className="text-xl leading-relaxed text-slate-200 md:text-2xl">
“To see clearly like Schopenhauer. To live courageously like Nietzsche.”
</blockquote>
<p className="mt-6 text-slate-400">
More essays and notes coming soon.
</p>
</div>
</section>
</main>
);
}