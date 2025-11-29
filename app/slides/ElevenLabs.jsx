"use client";

import Slide from "../components/Slide";

export default function ElevenLabsSlide() {
  return (
    <Slide
      eyebrow="Other capabilities"
      title="ElevenLabs"
      subtitle="Great for content and voices; GHL agents win for workflows"
      accent="from-rose-400/70 via-orange-400/60 to-amber-400/50"
    >
      <ul className="grid gap-3 text-base sm:text-lg">
        <li className="flex items-start gap-3">
          <span className="mt-1 h-2 w-2 rounded-full bg-rose-300" />
          <p>Use ElevenLabs for content voices, prototyping, and quick voiceovers.</p>
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-1 h-2 w-2 rounded-full bg-rose-300" />
          <p>For production automations and workflows, GHL voice agent models outperform.</p>
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-1 h-2 w-2 rounded-full bg-rose-300" />
          <p>GHL keeps context, handles branching logic, and integrates deeply with CRMs.</p>
        </li>
      </ul>
    </Slide>
  );
}
