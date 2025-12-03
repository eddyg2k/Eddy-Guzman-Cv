"use client";

import EmbedSlide from "../components/EmbedSlide";
import Slide from "../components/Slide";

export default function ProjectsDeckEngine() {
  return (
    <Slide
      eyebrow="Projects"
      title="CV Deck Engine"
      subtitle="Non-scrolling cinematic UX for storytelling"
      accent="from-slate-900/70 via-gray-700/55 to-gray-500/40"
      actions={[
        {
          label: "View deployed deck",
          href: "https://eddy-guzman-cv.vercel.app",
          target: "_blank",
        },
        {
          label: "View repo",
          href: "https://github.com/cb1202/Eddy-Guzman-Cv",
          target: "_blank",
          variant: "ghost",
        },
      ]}
    >
      <div className="grid gap-4 text-base sm:text-lg">
        <p>Engine behind this deck: single-slide focus, cinematic fades, and background peel effects.</p>
        <EmbedSlide
          url="https://eddy-guzman-cv.vercel.app"
          title="CV deck engine demo"
          loadingMessage="Loading deck engine experience..."
        />
        <ul className="grid gap-2 text-slate-100/90">
          <li className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-blue-300" />
            <p>Slide-by-slide navigation via scroll, swipe, or keyboard.</p>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-blue-300" />
            <p>Layered backgrounds peel between slides for a cinematic feel.</p>
          </li>
        </ul>
      </div>
    </Slide>
  );
}
