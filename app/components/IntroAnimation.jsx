"use client";

import Section from "./Section";

/**
 * IntroAnimation renders a simple welcome screen with your brand name.
 * It uses the Section component so it inherits the same full‑screen layout and motion props.
 * LayeredBackground is responsible for auto‑advancing after a timeout.
 */
export default function IntroAnimation() {
  return (
    <Section id="intro-animation" className="bg-transparent">
      <div className="flex h-full w-full flex-col items-center justify-center text-center space-y-4">
        <h1 className="text-6xl font-extrabold tracking-tight">Perspectivity</h1>
        <p className="text-2xl opacity-80">Bienvenidos</p>
      </div>
    </Section>
  );
}