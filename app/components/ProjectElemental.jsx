"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import PreviewFrameButton from "./PreviewFrameButton";

const pillars = [
  "Logic‑first ESL curriculum with bilingual mental models",
  "Scroll‑triggered storytelling and interactive hero",
  "Clusters and first principles instead of rote grammar",
  "Built as a UX/learning scaffold—ready for expansion",
];

/**
 * ProjectElemental presents the Elemental English web app and teaching method.
 */
export default function ProjectElemental() {
  return (
    <Section id="elemental-demo" className="bg-transparent">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-10">
        <div className="flex flex-col gap-3">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-300">Education</p>
          <h2 className="font-display text-4xl font-semibold text-white">Project: Elemental English</h2>
          <p className="text-lg text-slate-200/85">
            A personal curriculum and landing page built to make modern ESL intuitive. Everything is mapped to how learners think, not how textbooks present it.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          <motion.div className="glass-card rounded-2xl border border-white/5 bg-white/5 p-6 shadow-xl lg:col-span-2" whileHover={{ y: -6 }}>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-300">Landing Experience</p>
                <h3 className="text-2xl font-semibold text-white">Interactive hero + curriculum map</h3>
              </div>
              <PreviewFrameButton
                url="https://elemental-english-web-app.vercel.app/landing"
                title="Elemental English landing"
                description="Interactive storytelling with the curriculum map baked into the page."
                label="Open landing preview"
              />
            </div>
            <p className="mt-4 text-base leading-relaxed text-slate-200/85">
              The page demonstrates animated storytelling, clustered concepts and a clear CTA path—an example of how I pair pedagogy with modern UX.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {pillars.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/5 p-3 text-sm text-slate-200/85">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-accent" aria-hidden />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div className="glass-card flex flex-col justify-between rounded-2xl border border-white/5 bg-gradient-to-br from-white/5 to-highlight/10 p-6 shadow-xl" whileHover={{ y: -6 }}>
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-300">Methodology</p>
              <h3 className="text-2xl font-semibold text-white">Elemental approach</h3>
              <p className="text-sm text-slate-200/80">
                Teach by patterns, logic and bilingual anchors. The structure helps students retain, while the UI keeps them engaged.
              </p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-slate-200">
              {"Clusters • First principles • UX motion • Bilingual".split(" • ").map((chip) => (
                <span key={chip} className="pill">
                  {chip}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
