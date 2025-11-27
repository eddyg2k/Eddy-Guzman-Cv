"use client";

import { motion } from "framer-motion";
import Section from "../components/Section";

const skills = [
  "GoHighLevel (Workflows, Triggers, Agents)",
  "Zapier & n8n",
  "Make.com",
  "Webhooks & API integrations",
  "AI Agents & Voice Pipelines",
  "Automation Architecture & Process Design",
  "Prompt Engineering & LLM Integration"
];

export default function Skills() {
  return (
    <Section id="skills" className="bg-cinematic-blue bg-gradient-to-b from-ink via-[#0b0d13] to-ink">
      <div className="flex h-full w-full flex-col justify-center gap-10">
        <div className="flex flex-col gap-3">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Capabilities</p>
          <h2 className="font-display text-3xl text-white md:text-4xl">Systems I build</h2>
          <p className="max-w-2xl text-slate-300">
            Full-stack automation design: from discovery and mapping to orchestration, QA, and production-ready handoff.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: idx * 0.05 }}
              className="soft-border flex items-center gap-3 rounded-xl bg-white/5 px-4 py-4 text-slate-200 backdrop-blur"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-highlight/50 to-accent/40 text-white">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <p className="text-base">{skill}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
