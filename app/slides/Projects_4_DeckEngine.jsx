"use client";

import Slide from "../components/Slide";

export default function ProjectsDeckEngine() {
  return (
    <Slide
      eyebrow="Projects"
      title="CV Deck Engine"
      subtitle="Non-scrolling cinematic UX for storytelling"
      accent="from-blue-400/70 via-indigo-500/60 to-slate-500/50"
      actions={
        <a
          href="https://reservo.live"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
        >
          See the inspiration
        </a>
      }
    >
      <div className="grid gap-4 text-base sm:text-lg">
        <p>Engine behind this deck: single-slide focus, cinematic fades, and background peel effects.</p>
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-700/40 via-slate-900 to-blue-500/30 p-4 shadow-inner">
          <div className="aspect-video w-full rounded-xl border border-white/10 bg-white/5" />
          <p className="mt-3 text-sm text-white/80">This presentation is the live example of the deck engine.</p>
        </div>
        <ul className="grid gap-2 text-slate-100/90">
          <li className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-blue-300" />
            <p>Slide-by-slide navigation via scroll, swipe, or keyboard.</p>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-blue-300" />
            <p>Layered backgrounds peel between slides for a cinematic feel.</p>
          </li>
        </ul>
      </div>
    </Slide>
  );
}
