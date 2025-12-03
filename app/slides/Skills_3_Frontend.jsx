"use client";

import Slide from "../components/Slide";

export default function SkillsFrontend() {
  return (
    <Slide
      eyebrow="Skills"
      title="Frontend engineering"
      subtitle="Cinematic UX with Tailwind, Next.js, and smooth transitions"
      accent="from-slate-900/70 via-gray-700/55 to-gray-500/40"
    >
      <ul className="grid gap-3 text-base sm:text-lg">
        <li className="flex items-start gap-3">
          <span className="mt-1 h-2 w-2 rounded-full bg-indigo-300" />
          <p>Slide decks, landing pages, and product UIs with zero internal scroll.</p>
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-1 h-2 w-2 rounded-full bg-indigo-300" />
          <p>Animation systems using CSS transitions and GPU-friendly transforms.</p>
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-1 h-2 w-2 rounded-full bg-indigo-300" />
          <p>Mobile-first layouts with touch, wheel, and keyboard support.</p>
        </li>
      </ul>
    </Slide>
  );
}
