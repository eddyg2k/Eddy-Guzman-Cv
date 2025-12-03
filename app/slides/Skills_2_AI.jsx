"use client";

import Slide from "../components/Slide";

export default function SkillsAI() {
  return (
    <Slide
      eyebrow="Skills"
      title="AI / Automations"
      subtitle="Voice agents, workflow automation, and data-driven triggers"
      accent="from-slate-900/70 via-gray-700/55 to-gray-500/40"
    >
      <ul className="grid gap-3 text-base sm:text-lg">
        <li className="flex items-start gap-3">
          <span className="mt-1 h-2 w-2 rounded-full bg-lime-300" />
          <p>Voice AI systems with sentiment analysis, guardrails, and escalation paths.</p>
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-1 h-2 w-2 rounded-full bg-lime-300" />
          <p>Automation design across CRMs, POS systems, and webhook-driven workflows.</p>
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-1 h-2 w-2 rounded-full bg-lime-300" />
          <p>Data modeling with custom objects to keep every relationship intact.</p>
        </li>
      </ul>
    </Slide>
  );
}
