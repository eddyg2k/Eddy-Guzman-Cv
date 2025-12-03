"use client";

import EmbedSlide from "../components/EmbedSlide";
import Slide from "../components/Slide";

export default function ProjectsElemental() {
  return (
    <Slide
      eyebrow="Projects"
      title="Elemental English Web App"
      subtitle="Language-learning landing that feeds AI lesson flows"
      accent="from-slate-900/70 via-gray-700/55 to-gray-500/40"
      actions={[
        {
          label: "Open live site",
          href: "https://elemental-english-web-app.vercel.app/landing",
          target: "_blank",
        },
      ]}
    >
      <div className="grid gap-4 text-base sm:text-lg">
        <p>Built to demonstrate AI-assisted ESL content with a cinematic hero flow.</p>
        <EmbedSlide
          url="https://elemental-english-web-app.vercel.app/landing"
          title="Elemental English web experience"
          loadingMessage="Loading Elemental English preview..."
        />
        <ul className="grid gap-2 text-slate-100/90">
          <li className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-sky-300" />
            <p>Cinematic landing that routes to AI-driven lesson funnels.</p>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-sky-300" />
            <p>Built with responsive Tailwind design and rapid load performance.</p>
          </li>
        </ul>
      </div>
    </Slide>
  );
}
