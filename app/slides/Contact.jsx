"use client";

import Slide from "../components/Slide";

export default function Contact() {
  return (
    <Slide
      eyebrow="Contact"
      title="Let’s build together"
      subtitle="Voice AI, automation, and cinematic UX for Perspectivity’s clients"
      accent="from-slate-900/70 via-gray-700/55 to-gray-500/40"
      actions={[
        {
          label: "Email Eduardo",
          href: "mailto:eduardoguzmanqz@gmail.com",
        },
        {
          label: "Call 999 905 3013",
          href: "tel:+19999053013",
          variant: "ghost",
        },
      ]}
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
