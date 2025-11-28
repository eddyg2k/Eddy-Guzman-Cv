"use client";

import { motion } from "framer-motion";
import Section from "./Section";

const pillars = [
  "Logic‑first ESL curriculum with bilingual mental models",
  "Scroll‑triggered storytelling and interactive hero",
  "Clusters and first principles instead of rote grammar",
  "Built as a UX/learning scaffold—ready for expansion",
];

/**
 * ProjectElemental presents the Elemental English web app and teaching method in the hero layout.
 */
export default function ProjectElemental() {
  return (
    <Section id="elemental-demo" className="relative isolate overflow-hidden" wrap={false}>
      <div className="absolute inset-0 -z-10 bg-hero-grid opacity-70" aria-hidden />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-white/5 via-transparent to-black/70"
        aria-hidden
      />
      <motion.div
        aria-hidden
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.div
          className="absolute left-10 top-16 h-48 w-48 rounded-full bg-gradient-to-br from-accent/25 to-highlight/25 blur-3xl"
          initial={{ opacity: 0.35, scale: 0.9, y: 12 }}
          animate={{ opacity: 0.55, scale: 1, y: [12, -6, 12] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-8 right-10 h-56 w-56 rounded-full bg-gradient-to-br from-highlight/25 to-white/15 blur-3xl"
          initial={{ opacity: 0.25, scale: 0.9, y: 10 }}
          animate={{ opacity: 0.45, scale: 1, y: [10, 0, 10] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-16 lg:py-20">
        <div className="flex flex-col gap-4 text-left">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-slate-300">
            <span className="h-px w-10 bg-white/30" aria-hidden />
            Education
          </div>
          <div className="space-y-3">
            <h2 className="max-w-4xl font-display text-4xl leading-tight text-white sm:text-5xl">
              Project: Elemental English
            </h2>
            <p className="max-w-3xl text-lg text-slate-200">
              The landing, curriculum map and teaching method now share the same hero container. The copy is tightened to fit
              this frame while keeping the bilingual, logic-first angle front and center.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-slate-200">
            {["Interactive hero", "Bilingual anchors", "Curriculum map", "UX motion"].map((item) => (
              <span key={item} className="pill">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            whileHover={{ y: -4 }}
            className="glass-card rounded-2xl border border-white/5 bg-gradient-to-br from-white/5 via-white/5 to-highlight/10 p-6 shadow-xl backdrop-blur"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-300">Landing experience</p>
                <h3 className="text-2xl font-semibold text-white">Interactive hero + curriculum map</h3>
              </div>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">
                Embedded preview
              </span>
            </div>
            <p className="mt-4 text-base leading-relaxed text-slate-200/90">
              The iframe sits inside the same hero-style shell, so the preview, copy and CTA area align with the new layout. It
              scales with the container for a clean fit on all screens.
            </p>
            <div className="mt-5 overflow-hidden rounded-xl border border-white/10 bg-black/60 shadow-inner">
              <div className="relative aspect-video w-full">
                <iframe
                  src="https://elemental-english-web-app.vercel.app/landing"
                  title="Elemental English landing"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full rounded-xl border-0"
                />
              </div>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {pillars.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/10 p-3 text-sm text-slate-100"
                >
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-accent" aria-hidden />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            className="glass-card flex flex-col justify-between rounded-2xl border border-white/5 bg-white/5 p-6 shadow-xl backdrop-blur"
          >
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-300">Methodology</p>
              <h3 className="text-2xl font-semibold text-white">Elemental approach</h3>
              <p className="text-sm leading-relaxed text-slate-200/85">
                Teach by patterns, logic and bilingual anchors. This block mirrors the hero status card so the whole section
                feels cohesive with Reservo and the overview above.
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
