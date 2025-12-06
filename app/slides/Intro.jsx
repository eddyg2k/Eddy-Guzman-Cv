"use client";

import SlideFrame from "../components/SlideFrame";

export default function Intro() {
  return (
    <SlideFrame title="Welcome">
      <p className="text-xs uppercase tracking-[0.3em] text-sky-200/85">Perspectivity</p>
      <p className="text-lg font-semibold tracking-tight text-white sm:text-2xl">PERSPECTIVITY</p>
      <p className="text-lg text-slate-100/80 sm:text-xl">
        A cinematic, non-scrolling CV deck experience showcasing AI voice agents, custom objects, and operational builds.
      </p>
      <p className="text-sm uppercase tracking-[0.2em] text-teal-100/80">Scroll, swipe, or use the arrow keys</p>
      <div className="space-y-2 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80 backdrop-blur">
        <p className="uppercase tracking-[0.3em] text-white/60">Auto advance</p>
        <p>The deck moves to the next slide after 5 seconds.</p>
      </div>
    </SlideFrame>
  );
}
