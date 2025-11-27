"use client";

import { motion } from "framer-motion";
import Section from "./Section";

const capabilities = [
  {
    title: "Workflow architecture",
    copy: "Blueprinting revenue ops, routing, SLAs and safety nets so teams never lose track of a lead.",
  },
  {
    title: "Voice AI systems",
    copy: "Custom call logic, memory, actions and pipeline syncing tuned for hospitality and service brands.",
  },
  {
    title: "Automation stacks",
    copy: "GHL, Zapier, n8n, webhooks and APIs orchestrated into resilient, observable pipelines.",
  },
  {
    title: "Operational QA",
    copy: "Debugging, tracing and documenting automations so ops leaders can trust the system at scale.",
  },
];

const strengths = [
  "Rapid prototyping with clear guardrails",
  "Production‑grade voice + chat agent rollouts",
  "Data hygiene, enrichment and handoff rules",
  "Hands‑on training so teams actually adopt the tools",
];

/**
 * Experience slide summarises your professional capabilities and strengths.
 */
export default function Experience() {
  return (
    <Section id="experience" className="bg-transparent items-start">
      <div className="w-full max-w-6xl px-6 py-10 md:py-12">
        <div className="grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-300">What I build</p>
              <h2 className="font-display text-4xl font-semibold text-white">Experience Overview</h2>
              <p className="text-base leading-relaxed text-slate-200/80">
                Systems that capture, route and resolve. The focus is dependable delivery—full revenue engines or targeted
                AI workflows tuned to the team using them.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {capabilities.map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="glass-card h-full rounded-2xl border border-white/5 bg-white/5 p-4 shadow-xl backdrop-blur"
                >
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-200/80">{item.copy}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="glass-card flex h-full flex-col gap-4 rounded-2xl border border-white/5 bg-gradient-to-r from-white/5 via-white/5 to-highlight/10 p-6 shadow-xl backdrop-blur">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-slate-200">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_6px_rgba(16,185,129,0.18)]" aria-hidden />
              Strengths
            </div>
            <p className="text-sm leading-relaxed text-slate-200/85">
              The threads I pull into every engagement—keeping prototypes fast, data clean and adoption frictionless.
            </p>
            <div className="grid gap-3 md:grid-cols-1">
              {strengths.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/5 p-4 text-sm text-slate-200/85"
                >
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-highlight/30 text-sm text-white">
                    ✓
                  </span>
                  <p className="leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
