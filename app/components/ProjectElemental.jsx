"use client";

import { motion } from "framer-motion";
import Section from "./Section";

const pillars = [
  "Logic‑first ESL with bilingual anchors",
  "Scroll story with an interactive hero",
  "Clusters over rote grammar",
  "UX scaffold ready to expand",
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

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 pt-12 pb-20 sm:px-10 lg:px-16 lg:pt-14 lg:pb-24">
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
              The landing, map and method share the hero container with tightened copy that keeps the bilingual, logic-first
              angle in view.
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

        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-5">
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://elemental-english-web-app.vercel.app/landing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Open Elemental preview
              </a>
              <a className="btn-secondary" href="#contact">
                Book a walkthrough
              </a>
            </div>
            <p className="max-w-3xl text-base leading-relaxed text-slate-200/90">
              Uncluttered, fast and CTA-first. The iframe runs edge-to-edge so the landing and map feel nearly full screen.
            </p>
            <div className="space-y-3 text-sm text-slate-100/95">
              {pillars.map((item) => (
                <div key={item} className="flex items-start gap-3 border-b border-white/10 pb-3 last:border-0 last:pb-0">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-accent" aria-hidden />
                  <p className="leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            whileHover={{ scale: 1.01 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/70 shadow-[0_30px_90px_rgba(0,0,0,0.45)]"
          >
            <div className="relative aspect-[16/10] w-full">
              <iframe
                src="https://elemental-english-web-app.vercel.app/landing"
                title="Elemental English landing"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
