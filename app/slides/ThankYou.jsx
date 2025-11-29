"use client";

import Slide from "../components/Slide";

export default function ThankYou() {
  return (
    <Slide
      eyebrow="Closing"
      title="Thank you"
      subtitle="Appreciate your time exploring this deck"
      accent="from-emerald-300/70 via-teal-400/60 to-blue-400/50"
    >
      <div className="grid gap-3 text-base sm:text-lg">
        <p>Happy to dive deeper into any demo or workflow. The deck keeps the focus on one idea at a time.</p>
        <p className="text-white/80">Scroll, swipe, or tap up to revisit anything.</p>
      </div>
    </Slide>
  );
}
