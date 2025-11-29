"use client";

import Slide from "../components/Slide";

export default function Contact() {
  return (
    <Slide
      eyebrow="Contact"
      title="Let’s build together"
      subtitle="Email, socials, and a CTA to connect"
      accent="from-sky-400/70 via-indigo-500/60 to-purple-500/50"
      actions={
        <a
          href="mailto:hello@perspectivity.studio"
          className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
        >
          Email Eddy
        </a>
      }
    >
      <div className="grid gap-4 text-base sm:text-lg">
        <p>Reach out for AI voice agents, automations, or to see a deeper walkthrough of any build.</p>
        <div className="grid gap-2 text-white/90">
          <p>Email: <a className="font-semibold underline decoration-white/50" href="mailto:hello@perspectivity.studio">hello@perspectivity.studio</a></p>
          <p>LinkedIn: <a className="font-semibold underline decoration-white/50" href="https://www.linkedin.com/in/eddyguzman" target="_blank" rel="noreferrer">@eddyguzman</a></p>
          <p>Twitter/X: <a className="font-semibold underline decoration-white/50" href="https://x.com/eddyguzman" target="_blank" rel="noreferrer">@eddyguzman</a></p>
        </div>
      </div>
    </Slide>
  );
}
