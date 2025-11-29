"use client";

import Slide from "../components/Slide";

export default function Hero() {
  return (
    <Slide
      eyebrow="Eddy Guzman"
      title="Automation Engineer & Voice AI Builder"
      subtitle="Designing production-ready AI systems, cinematic experiences, and operational workflows"
      accent="from-indigo-400/70 via-purple-500/60 to-fuchsia-500/50"
      actions={
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
          <p className="text-sm font-semibold text-white">Deck format</p>
          <p className="text-sm text-slate-200/80">One slide visible at a time. No scrolling. Cinematic fades with upward drift.</p>
        </div>
      }
    >
      <ul className="grid gap-3 text-base leading-relaxed sm:text-lg">
        <li className="flex items-start gap-3">
          <span className="mt-1 h-2 w-2 rounded-full bg-teal-300" />
          <p>
            Craft voice-first automations, AI agents, and operational tooling that run inside existing businesses.
          </p>
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-1 h-2 w-2 rounded-full bg-teal-300" />
          <p>All demos shown are approved; proprietary client assets stay private.</p>
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-1 h-2 w-2 rounded-full bg-teal-300" />
          <p>This CV is delivered as a cinematic deck. Scroll, swipe, or tap arrows to navigate.</p>
        </li>
      </ul>
    </Slide>
  );
}
