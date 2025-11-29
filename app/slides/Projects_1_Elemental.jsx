"use client";

import Slide from "../components/Slide";

export default function ProjectsElemental() {
  return (
    <Slide
      eyebrow="Projects"
      title="Elemental English Web App"
      subtitle="Language-learning landing that feeds AI lesson flows"
      accent="from-cyan-400/70 via-blue-500/60 to-indigo-500/50"
      actions={
        <a
          href="https://elemental-english-web-app.vercel.app/landing"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
        >
          Open live site
        </a>
      }
    >
      <div className="grid gap-4 text-base sm:text-lg">
        <p>Built to demonstrate AI-assisted ESL content with a cinematic hero flow.</p>
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/30 via-slate-900 to-indigo-600/40 p-4 shadow-inner">
          <div className="aspect-video w-full rounded-xl border border-white/10 bg-white/5" />
          <p className="mt-3 text-sm text-white/80">Image placeholder of the Elemental English experience.</p>
        </div>
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
