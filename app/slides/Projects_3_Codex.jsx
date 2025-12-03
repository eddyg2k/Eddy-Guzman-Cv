"use client";

import EmbedSlide from "../components/EmbedSlide";
import Slide from "../components/Slide";

export default function ProjectsCodex() {
  return (
    <Slide
      eyebrow="Projects"
      title="Codex Development Flow"
      subtitle="Structured build process for AI-forward products"
      accent="from-slate-900/70 via-gray-700/55 to-gray-500/40"
      actions={[
        {
          label: "Explore build flow",
          href: "https://codex-explain.vercel.app",
          target: "_blank",
        },
      ]}
    >
      <div className="grid gap-4 text-base sm:text-lg">
        <p>Codex is the working system behind these cinematic decks and automation builds.</p>
        <EmbedSlide
          url="https://codex-explain.vercel.app"
          title="Codex development flow"
          loadingMessage="Loading Codex build flow..."
        />
        <ul className="grid gap-2 text-slate-100/90">
          <li className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-pink-300" />
            <p>Guided discovery, scoped automations, and rapid prototyping.</p>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-pink-300" />
            <p>Deck-driven storytelling to communicate complex workflows.</p>
          </li>
        </ul>
      </div>
    </Slide>
  );
}
