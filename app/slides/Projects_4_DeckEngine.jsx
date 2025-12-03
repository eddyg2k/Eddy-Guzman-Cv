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
      actions={
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="https://eddy-guzman-cv.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
          >
            View deployed deck
          </a>
          <a
            href="https://github.com/cb1202/Eddy-Guzman-Cv"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-white shadow-lg ring-1 ring-white/40 transition hover:-translate-y-1 hover:shadow-xl"
          >
            View repo
          </a>
        </div>
      }
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
