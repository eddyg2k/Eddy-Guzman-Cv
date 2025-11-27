"use client";

import Section from "./Section";

/**
 * ProjectElemental presents the Elemental English web app and teaching method.
 */
export default function ProjectElemental() {
  return (
    <Section id="elemental-demo" className="bg-transparent">
      <div className="max-w-4xl mx-auto space-y-6 px-8 py-12 text-left">
        <h2 className="text-3xl font-bold">Project: Elemental English</h2>
        <p className="text-lg opacity-90">
          Elemental English is my personal curriculum and web platform for
          teaching modern ESL using logic, clusters and bilingual mental models.
        </p>
        <p className="text-lg opacity-90">
          The landing page showcases an interactive hero with scroll‑triggered
          animation, conceptual clusters for accelerated learning and a full
          curriculum mapped to first principles rather than rote grammar.
        </p>
        <p className="text-lg opacity-90">
          <strong>Demo landing:</strong> <a
            href="https://elemental-english-web-app.vercel.app/landing"
            className="text-blue-300 underline"
            target="_blank"
            rel="noopener noreferrer"
          >elemental-english-web-app.vercel.app</a>
        </p>
        <div className="text-sm opacity-70 italic">
          Note: This site is a scaffold showcasing UI/UX and the teaching
          methodology. It does not represent the complete student experience.
        </div>
      </div>
    </Section>
  );
}