"use client";

import { motion } from "framer-motion";
import Section from "../components/Section";

export default function About() {
  return (
    <Section id="about" className="bg-cinematic-blue bg-gradient-to-b from-ink via-[#0f1017] to-black">
      <div className="flex h-full w-full flex-col justify-center gap-8">
        <div className="flex flex-col gap-3">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">About</p>
          <h2 className="font-display text-3xl text-white md:text-4xl">Operations-first automation partner</h2>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl text-lg leading-relaxed text-slate-200"
        >
          I have spent over seven years designing automation systems that keep operations flowing. From AI voice workflows to
          multi-agent orchestration, I build end-to-end pipelines that capture data, route decisions, and sync across GHL,
          Zapier, n8n, Make.com, and bespoke APIs. Every system is mapped, hardened, and documented so teams can scale without
          friction.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-fit rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-accent/60 hover:bg-accent/15"
        >
          Download PDF CV
        </motion.button>
      </div>
    </Section>
  );
}
