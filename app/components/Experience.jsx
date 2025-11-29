"use client";

import { motion } from "framer-motion";
import Section from "./Section";

const capabilityRows = [
  {
    title: "Voice & chat automations",
    copy: "Agents that listen, speak and sync context back to CRMs without dropping details.",
  },
  {
    title: "Full-stack workflow builds",
    copy: "GHL, Zapier and n8n stitched together with custom API steps, QA and observability.",
  },
  {
    title: "Launch-ready playbooks",
    copy: "Documentation, routing rules and safety nets so operators know exactly what is live.",
  },
];

const highlights = [
  "Blueprints for intake, routing and follow-ups",
  "Production-grade AI experiences ready to demo",
  "Data hygiene baked into every flow",
  "Rapid iteration without losing governance",
];

/**
 * Experience slide reframed as a project overview to match the hero layout.
 */
export default function Experience() {
  return (
    <Section id="experience" className="relative isolate overflow-hidden bg-ink" wrap={false}>
      <div className="absolute inset-0 -z-10 bg-hero-grid opacity-60" aria-hidden />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-white/5 via-transparent to-black/60"
        aria-hidden
      />
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-16 sm:px-10 lg:max-w-6xl lg:px-14 lg:py-20">
        <div className="flex flex-col gap-4 text-left">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-slate-300">
            <span className="h-px w-10 bg-white/30" aria-hidden />
            Project overview
          </div>
          <div className="space-y-3">
            <h2 className="max-w-4xl font-display text-4xl leading-tight text-white sm:text-5xl">
              Systems ready to demo or deploy
            </h2>
            <p className="max-w-3xl text-lg text-slate-200">
              The same scaffold as my hero: clear copy, guided CTAs and instantly usable demos. Everything here is mapped to
              the workflows I ship for operators and revenue teams.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-slate-200">
            {["Voice AI", "Chat orchestration", "RevOps", "QA + docs", "Data hygiene"].map((item) => (
              <span key={item} className="pill">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-4">
              <a className="btn-primary" href="#contact">
                Start a build
              </a>
              <a className="btn-secondary" href="#reservo-demo">
                View live voice demo
              </a>
            </div>
            <div className="space-y-5 text-slate-200/90">
              <p className="text-base leading-relaxed">
                Every engagement runs like the hero: a clear frame, a CTA you can actually click, and demos you can try. I
                keep the copy tight and the UX light so operators know exactly what is live.
              </p>
              <div className="grid gap-5 sm:grid-cols-2">
                {capabilityRows.map((item) => (
                  <div key={item.title} className="space-y-2">
                    <div className="flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-slate-300">
                      <span className="h-2 w-2 rounded-full bg-highlight" aria-hidden />
                      {item.title}
                    </div>
                    <p className="text-sm leading-relaxed text-slate-100/90">{item.copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            whileHover={{ y: -2 }}
            className="space-y-5 rounded-3xl border border-white/10 bg-gradient-to-br from-highlight/10 via-transparent to-accent/10 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.45)]"
          >
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-slate-200">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_6px_rgba(16,185,129,0.2)]" aria-hidden />
              Highlights
            </div>
            <p className="text-sm leading-relaxed text-slate-200/85">
              A snapshot you can skim as you scroll. No heavy cards—just the same airy layout as the hero so the overview
              lands fast.
            </p>
            <div className="space-y-3 text-sm text-slate-100/95">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3 border-b border-white/10 pb-3 last:border-0 last:pb-0">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/15 text-white">
                    •
                  </span>
                  <p className="leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
