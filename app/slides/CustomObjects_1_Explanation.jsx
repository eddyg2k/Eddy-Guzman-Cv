"use client";

import Slide from "../components/Slide";

export default function CustomObjectsExplanation() {
  return (
    <Slide
      eyebrow="Custom Objects"
      title="Why they matter"
      subtitle="Organizing contractor data for multi-relationship workflows"
      accent="from-slate-900/70 via-gray-700/55 to-gray-500/40"
      actions={
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-100/90 backdrop-blur">
          <p className="font-semibold text-white">Impact</p>
          <p>Removes spreadsheet chaos and keeps every relationship synchronized.</p>
        </div>
      }
    >
      <ul className="grid gap-3 text-base sm:text-lg">
        <li className="flex items-start gap-3">
          <span className="mt-1 h-2 w-2 rounded-full bg-amber-300" />
          <p>Custom objects map contractors, jobs, materials, and locations together.</p>
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-1 h-2 w-2 rounded-full bg-amber-300" />
          <p>Gives field teams a single source of truth with granular permissions.</p>
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-1 h-2 w-2 rounded-full bg-amber-300" />
          <p>Enables smarter automations—quotes, scheduling, and invoicing stay linked.</p>
        </li>
      </ul>
    </Slide>
  );
}
