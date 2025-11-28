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
          <h2 className="font-display text-3xl text-white md:text-4xl">Who am I?</h2>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl text-lg leading-relaxed text-slate-200"
        >
          Rather than me telling you about me, let my AI do it. I spun up a custom GPT from scratch in a day to showcase how I
          build bespoke assistants. It's paired with a simple n8n workflow that emails you a quick summary after the chat—drop
          an email, ask it a few questions, and see how I stitch systems together. It's a demo, so you'll see it evolving in
          real time.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href="https://chatgpt.com/g/g-6928d9f1ce1481918e71cc4e28e3f1ce-eddy-ai"
            target="_blank"
            rel="noreferrer"
            className="btn-primary inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-highlight/80 via-white to-accent px-5 py-3 text-slate-900"
          >
            <span aria-hidden className="text-lg">💬</span>
            Meet the custom GPT
          </a>
          <p className="text-sm text-slate-300">
            Tell it where to send your recap, then probe how I build—systems, ops, and anything you're curious about.
          </p>
        </motion.div>
      </div>
    </Section>
  );
}
