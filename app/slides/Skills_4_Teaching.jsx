"use client";

import Slide from "../components/Slide";

export default function SkillsTeaching() {
  return (
    <Slide
      eyebrow="Skills"
      title="Teaching & language science"
      subtitle="ESL methodology applied to UX clarity and onboarding"
      accent="from-slate-900/70 via-gray-700/55 to-gray-500/40"
    >
      <ul className="grid gap-3 text-base sm:text-lg">
        <li className="flex items-start gap-3">
          <span className="mt-1 h-2 w-2 rounded-full bg-amber-300" />
          <p>Designs onboarding flows that teach while users progress.</p>
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-1 h-2 w-2 rounded-full bg-amber-300" />
          <p>Language science informs copywriting and dialog design for agents.</p>
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-1 h-2 w-2 rounded-full bg-amber-300" />
          <p>Coaching and documentation that non-technical teams can use immediately.</p>
        </li>
      </ul>
    </Slide>
  );
}
