"use client";

import SlideFrame from "../components/SlideFrame";

export default function Hero() {
  return (
    <SlideFrame title="Automation Engineer & Voice AI Builder">
      <p className="text-xs uppercase tracking-[0.38em] text-sky-200/85 sm:text-sm">Eddy Guzman</p>
      <p className="max-w-2xl text-base text-slate-100/85 sm:text-lg">
        Designing production-ready AI systems, cinematic experiences, and operational workflows
      </p>
      <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200/90 backdrop-blur">
        <p className="font-semibold text-white">Deck format</p>
        <p>One slide visible at a time. No scrolling. Cinematic fades with upward drift.</p>
      </div>
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
    </SlideFrame>
  );
}
