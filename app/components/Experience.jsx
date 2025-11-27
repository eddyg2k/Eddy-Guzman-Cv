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
    <Section id="experience" className="bg-transparent">
      <div className="w-full max-w-5xl space-y-10 px-6 py-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-300">What I build</p>
            <h2 className="font-display text-4xl font-semibold text-white">Experience Overview</h2>
            <p className="text-lg text-slate-200/85">
              Systems that capture, route and resolve. I focus on fast, reliable delivery—
              whether that’s a full revenue engine or a targeted AI workflow.
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {capabilities.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -6, scale: 1.01 }}
              className="glass-card h-full rounded-2xl border border-white/5 bg-white/5 p-5 shadow-xl backdrop-blur"
            >
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-200/80">{item.copy}</p>
            </motion.div>
          ))}
        </div>

        <div className="glass-card flex flex-col gap-4 rounded-2xl border border-white/5 bg-gradient-to-r from-white/5 via-white/5 to-highlight/10 p-6 shadow-xl backdrop-blur">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-slate-200">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_6px_rgba(16,185,129,0.18)]" aria-hidden />
            Strengths
          </div>
          <div className="grid gap-3 md:grid-cols-2">
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
    </Section>
  );
}
