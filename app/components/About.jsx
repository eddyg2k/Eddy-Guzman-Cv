"use client";

import { motion } from "framer-motion";
import Section from "./Section";

/**
 * About slide provides a personal introduction and philosophy.
 */
export default function About() {
  return (
    <Section id="about" className="bg-gradient-to-b from-ink via-[#0f1017] to-black">
      <div className="flex h-full w-full flex-col justify-center gap-8 px-8">
        <div className="flex flex-col gap-3">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">About</p>
          <h2 className="font-display text-3xl text-white md:text-4xl">Who I am</h2>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl text-lg leading-relaxed text-slate-200"
        >
          Mexican‑born, raised between Ensenada and California. I am an
          automation engineer, English teacher, creator and systems guy with 15+
          years of teaching experience and over seven years designing automation
          systems for U.S. businesses. I focus on building pipelines that
          capture data, route decisions and sync across GoHighLevel, Zapier,
          n8n, custom APIs and voice agents. Every system is mapped,
          hardened and documented so teams can scale without friction.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="max-w-3xl text-lg leading-relaxed text-slate-200"
        >
          I love this work because well‑designed systems feel like magic. When
          AI reduces friction and operations run smoothly, business owners can
          focus on what matters. Nothing beats seeing a team relax when
          everything just… works.
        </motion.p>
      </div>
    </Section>
  );
}