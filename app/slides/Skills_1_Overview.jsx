"use client";

import Slide from "../components/Slide";

export default function SkillsOverview() {
  return (
    <Slide
      eyebrow="Skills"
      title="General overview"
      subtitle="AI systems, frontend engineering, and operational rigor"
      accent="from-emerald-300/70 via-cyan-400/60 to-blue-400/50"
      actions={
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-100/90 backdrop-blur">
          <p className="font-semibold text-white">Sales + Operations</p>
          <p>Combines pipeline strategy with service delivery automation.</p>
        </div>
      }
    >
      <div className="grid gap-3 text-base sm:text-lg">
        <p>Blending engineering, teaching clarity, and operational discipline to ship reliable automations.</p>
        <ul className="grid gap-2 text-slate-100/90">
          <li className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" />
            <p>AI/Automation builds for real businesses.</p>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" />
            <p>Frontend engineering for cinematic, performant experiences.</p>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" />
            <p>Teaching and language science background for clear communication.</p>
          </li>
        </ul>
      </div>
    </Slide>
  );
}
