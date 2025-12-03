"use client";

import Slide from "../components/Slide";

export default function EducationalApps() {
  return (
    <Slide
      eyebrow="Other capabilities"
      title="Educational apps"
      subtitle="Tools that teach while they guide"
      accent="from-slate-900/70 via-gray-700/55 to-gray-500/40"
    >
      <div className="grid gap-3 text-base sm:text-lg">
        <p>Blending ESL pedagogy with product design to make educational tools engaging and clear.</p>
        <ul className="grid gap-2 text-slate-100/90">
          <li className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-blue-300" />
            <p>Micro-interactions that reward progress and keep learners moving.</p>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-blue-300" />
            <p>Content structures that simplify complex language topics.</p>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-blue-300" />
            <p>Built-in feedback loops for students and educators.</p>
          </li>
        </ul>
      </div>
    </Slide>
  );
}
