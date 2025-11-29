"use client";

import Slide from "../components/Slide";

export default function ReservoDemo() {
  return (
    <Slide
      eyebrow="Reservo"
      title="Demo"
      subtitle="Live ordering and reservation experience"
      accent="from-sky-400/70 via-blue-500/60 to-indigo-500/60"
      actions={
        <a
          href="https://reservo.live"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
        >
          Visit reservo.live
        </a>
      }
    >
      <div className="grid gap-4 text-base sm:text-lg">
        <p>Reservo’s AI host handles the full conversational flow end-to-end.</p>
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 shadow-inner">
          <div className="aspect-video w-full">
            <iframe
              src="https://reservo.live"
              className="h-full w-full min-h-[320px]"
              title="Reservo live demo"
            />
          </div>
          <p className="px-4 pb-4 pt-3 text-sm text-slate-200/80">
            Embedded experience mirrors the production host for live ordering and reservations.
          </p>
        </div>
        <ul className="grid gap-2 text-slate-100/90">
          <li className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-sky-300" />
            <p>Orders, reservations, and menu updates flow over WebSockets.</p>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-sky-300" />
            <p>Guests experience natural staff-like dialogue without telephony friction.</p>
          </li>
        </ul>
      </div>
    </Slide>
  );
}
