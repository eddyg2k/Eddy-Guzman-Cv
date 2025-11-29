"use client";

import Slide from "../components/Slide";

export default function ProjectsLandingPage() {
  return (
    <Slide
      eyebrow="Projects"
      title="Landing Page Scaffold"
      subtitle="Conversion-focused scaffolds for fast launches"
      accent="from-teal-400/70 via-cyan-400/60 to-blue-400/50"
      actions={
        <a
          href="https://landing-page-scaffold.vercel.app"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
        >
          View scaffold demo
        </a>
      }
    >
      <div className="grid gap-4 text-base sm:text-lg">
        <p>Rapidly deployable landing structures for campaigns, lead capture, and demos.</p>
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-teal-400/30 via-slate-900 to-blue-500/40 p-4 shadow-inner">
          <div className="aspect-video w-full rounded-xl border border-white/10 bg-white/5" />
          <p className="mt-3 text-sm text-white/80">Reusable, cinematic landing scaffold preview.</p>
        </div>
        <ul className="grid gap-2 text-slate-100/90">
          <li className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-teal-300" />
            <p>Optimized hero structure, social proof, and CTA framing.</p>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-teal-300" />
            <p>Tailwind-first design system tuned for fast edits.</p>
          </li>
        </ul>
      </div>
    </Slide>
  );
}
