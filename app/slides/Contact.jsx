"use client";

import Slide from "../components/Slide";

export default function Contact() {
  return (
    <Slide
      eyebrow="Contact"
      title="Let’s build together"
      subtitle="Voice AI, automation, and cinematic UX for Perspectivity’s clients"
      accent="from-sky-400/70 via-indigo-500/60 to-purple-500/50"
      actions={
        <div className="flex flex-col gap-3">
          <a
            href="mailto:eduardoguzmanqz@gmail.com"
            className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
          >
            Email Eduardo
          </a>
          <a
            href="tel:+19999053013"
            className="inline-flex items-center justify-center rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:border-white/60 hover:bg-white/10"
          >
            Call 999 905 3013
          </a>
        </div>
      }
    >
      <div className="grid gap-4 text-base sm:text-lg">
        <p>
          Reach out for AI voice agents, automations, or to see a deeper walkthrough of any build. I respond fastest by
          email or Discord.
        </p>
        <div className="grid gap-2 text-white/90">
          <p>
            Email: <a className="font-semibold underline decoration-white/50" href="mailto:eduardoguzmanqz@gmail.com">eduardoguzmanqz@gmail.com</a>
          </p>
          <p>
            LinkedIn: <a className="font-semibold underline decoration-white/50" href="https://www.linkedin.com/in/eduardoguzmanqz/" target="_blank" rel="noreferrer">/in/eduardoguzmanqz</a>
          </p>
          <p>
            Phone: <a className="font-semibold underline decoration-white/50" href="tel:+19999053013">999 905 3013</a>
          </p>
        </div>
      </div>
    </Slide>
  );
}
