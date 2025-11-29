"use client";

import { motion } from "framer-motion";
import Section from "./Section";

/**
 * About slide provides a personal introduction and philosophy.
 */
export default function About() {
  return (
    <Section id="about" wrap={false} className="relative overflow-hidden bg-gradient-to-b from-[#0a0c11] via-[#0f1220] to-black">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(108,99,255,0.12),transparent_25%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.08),transparent_20%),radial-gradient(circle_at_70%_75%,rgba(255,115,188,0.1),transparent_22%)] opacity-90" />
      <div className="relative z-10 mx-auto flex h-full w-full max-w-4xl flex-col justify-start gap-10 px-6 pt-10 pb-16 sm:px-8 sm:pt-12 sm:pb-20 lg:max-w-5xl lg:px-12">
        <div className="flex flex-col gap-3">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-300/80">About</p>
          <h2 className="font-display text-3xl text-white md:text-4xl">Who am I?</h2>
          <p className="max-w-3xl text-base text-slate-300">
            An operator who ships polished AI experiences quickly. Clean structure, guided CTAs and working demos are how I show up—here and with clients.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7 }}
            className="space-y-4 rounded-3xl border border-white/5 bg-white/5 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.35)] backdrop-blur"
          >
            <p className="text-lg leading-relaxed text-slate-100/90">
              Rather than a long bio, try the tool I built. A custom GPT + n8n flow I wired in a day will greet you, take your questions and email you a recap. It's the same glue I use for production assistants—fast, governed and visibly useful.
            </p>
            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.28em] text-slate-200/80">
              {["Workflow-first", "Gov + QA", "Operator friendly", "Ship fast"].map((pill) => (
                <span key={pill} className="pill bg-white/10 text-[0.68rem] font-semibold">
                  {pill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col gap-4 rounded-3xl border border-white/5 bg-gradient-to-br from-highlight/15 via-white/5 to-accent/15 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.35)] backdrop-blur"
          >
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-slate-200/85">
              <span className="h-2 w-2 rounded-full bg-highlight shadow-[0_0_0_6px_rgba(255,255,255,0.08)]" aria-hidden />
              Try it live
            </div>
            <p className="text-sm leading-relaxed text-slate-100/90">
              Meet the assistant, ask how I build and send a recap to your inbox. The layout now fills the frame so the CTA and description breathe.
            </p>
            <a
              href="https://chatgpt.com/g/g-6928d9f1ce1481918e71cc4e28e3f1ce-eddy-ai"
              target="_blank"
              rel="noreferrer"
              className="btn-primary inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-highlight via-white to-accent px-5 py-3 text-slate-900"
            >
              <span aria-hidden className="text-lg">💬</span>
              Meet the custom GPT
            </a>
            <p className="text-sm text-slate-200">
              Tell it where to send your recap, then probe the systems, ops and automations I ship.
            </p>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
