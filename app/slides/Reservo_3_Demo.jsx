"use client";

import EmbedSlide from "../components/EmbedSlide";
import Slide from "../components/Slide";

export default function ReservoDemo() {
  return (
    <Slide
      eyebrow="Reservo"
      title="Demo"
      subtitle="Live ordering and reservation experience"
      accent="from-slate-900/70 via-gray-700/55 to-gray-500/40"
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
        <p>
          This is just a demo, there is a delay on the backend so you need to wait till it deploys; it is intentional to avoid misuse
          or curious people.
        </p>
        <EmbedSlide url="https://reservo.live" title="Reservo live demo" loadingMessage="Loading Reservo demo..." />
        <p className="text-sm text-slate-200/80">
          Embedded experience mirrors the production host for live ordering and reservations.
        </p>
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
