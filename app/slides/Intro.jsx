"use client";

import Slide from "../components/Slide";

export default function Intro() {
  return (
    <Slide
      eyebrow="Perspectivity"
      title="Welcome"
      subtitle="A cinematic, non-scrolling CV deck experience"
      accent="from-slate-900/70 via-gray-700/55 to-gray-500/40"
      actions={
        <div className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">Auto advance</p>
          <p className="text-sm text-white/80">The deck moves to the next slide after 5 seconds.</p>
        </div>
      }
    >
      <div className="flex flex-col gap-4">
        <div className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          PERSPECTIVITY
        </div>
        <p className="text-lg text-slate-100/80 sm:text-xl">
          A focused, one-slide-at-a-time tour through AI voice agents, custom objects, and operational builds.
        </p>
        <p className="text-sm uppercase tracking-[0.2em] text-teal-100/80">Scroll, swipe, or use the arrow keys</p>
      </div>
    </Slide>
  );
}
