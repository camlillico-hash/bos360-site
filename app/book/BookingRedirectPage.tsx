import { ArrowRight, CalendarDays } from "lucide-react";
import type { BookingDefinition } from "@/lib/booking";
import { getBookingTargetUrl } from "@/lib/booking";
import RedirectOnMount from "./RedirectOnMount";

export default function BookingRedirectPage({
  booking,
}: {
  booking: BookingDefinition;
}) {
  const targetUrl = getBookingTargetUrl(booking.key);
  const isReady = Boolean(targetUrl);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.16),_transparent_28%),linear-gradient(180deg,_#0f172a_0%,_#020617_100%)] px-6 py-16 text-slate-100">
      {targetUrl ? <RedirectOnMount targetUrl={targetUrl} /> : null}

      <section className="w-full max-w-2xl rounded-[2rem] border border-orange-200/15 bg-slate-950/70 p-8 shadow-[0_24px_80px_-36px_rgba(237,125,49,0.55)] backdrop-blur">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-200">
          Cam Lillico
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          {isReady ? "Redirecting you to scheduling" : "Scheduling link coming soon"}
        </h1>
        <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">
          {booking.description}
        </p>
        <p className="mt-3 inline-flex rounded-full border border-orange-200/15 bg-slate-900/80 px-3 py-1 text-sm text-orange-100">
          {booking.durationLabel}
        </p>
        <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">
          {isReady
            ? "This branded link exists so shared previews show BOS360 instead of the scheduling provider. If the redirect does not fire automatically, use the button below."
            : "This branded route is set up, but the underlying scheduler URL has not been configured yet."}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          {targetUrl ? (
            <a
              href={targetUrl}
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-300 via-[#ed7d31] to-orange-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-90"
            >
              <CalendarDays size={18} />
              Continue to scheduling
              <ArrowRight size={18} />
            </a>
          ) : (
            <a
              href="mailto:camlillico@gmail.com"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-300 via-[#ed7d31] to-orange-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-90"
            >
              Email Cam
              <ArrowRight size={18} />
            </a>
          )}
          <a
            href="/bos360"
            className="inline-flex items-center justify-center rounded-xl border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:bg-slate-900"
          >
            Back to coaching site
          </a>
        </div>
      </section>
    </main>
  );
}
