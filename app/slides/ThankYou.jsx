"use client";

import Slide from "../components/Slide";

export default function ThankYou() {
  return (
    <Slide
      eyebrow="Closing"
      title="Thank you"
      subtitle="Appreciate your time exploring this deck"
      accent="from-slate-900/70 via-gray-700/55 to-gray-500/40"
    >
      <div className="grid gap-3 text-base sm:text-lg">
        <p>Happy to dive deeper into any demo or workflow. The deck keeps the focus on one idea at a time.</p>
        <p className="text-white/80">Scroll, swipe, or tap up to revisit anything.</p>
      </div>
    </Slide>
  );
}
