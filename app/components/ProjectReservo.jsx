"use client";

import { motion } from "framer-motion";
import Section from "./Section";

const highlights = [
  "24/7 inbound calls with CRM sync",
  "Websocket audio for near‑zero latency",
  "Memory for repeat callers and preferences",
  "Bookings, confirmations and follow‑ups handled automatically",
];

/**
 * ProjectReservo showcases the Reservo voice AI project inside a hero-style layout.
 */
export default function ProjectReservo() {
  return (
    <Section id="reservo-demo" className="relative isolate overflow-hidden" wrap={false}>
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
          className="absolute left-10 top-12 h-52 w-52 rounded-full bg-gradient-to-br from-highlight/25 to-accent/25 blur-3xl"
          initial={{ opacity: 0.4, scale: 0.9, y: 10 }}
          animate={{ opacity: 0.6, scale: 1, y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-8 right-12 h-56 w-56 rounded-full bg-gradient-to-br from-accent/25 to-white/15 blur-3xl"
          initial={{ opacity: 0.25, scale: 0.9, y: 12 }}
          animate={{ opacity: 0.45, scale: 1, y: [12, 2, 12] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
        <div className="flex flex-col gap-4 text-left">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-slate-300">
            <span className="h-px w-10 bg-white/30" aria-hidden />
            Voice AI
          </div>
          <div className="space-y-3">
            <h2 className="max-w-4xl font-display text-4xl leading-tight text-white sm:text-5xl">Project: Reservo</h2>
            <p className="max-w-3xl text-lg text-slate-200">
              A hero-style presentation for the production voice agent built for restaurants and service teams. Calls stream
              through websockets for crisp, fast turn-taking.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-slate-200">
            {["Websocket audio", "Bookings", "CRM sync", "Spanish-first", "N8N actions"].map((item) => (
              <span key={item} className="pill">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            whileHover={{ y: -4 }}
            className="glass-card rounded-2xl border border-white/5 bg-gradient-to-br from-highlight/15 via-white/5 to-accent/10 p-6 shadow-xl backdrop-blur"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-sm text-slate-200/80">
                <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden />
                Live demo available
              </span>
              <a
                href="https://reservo.live"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-highlight/80 via-white to-accent text-slate-900"
              >
                <span aria-hidden className="text-lg">↗</span>
                Open Reservo demo
              </a>
            </div>
            <div className="mt-4 space-y-2 text-base leading-relaxed text-slate-200/90">
              <p>
                Reservo handles calls end-to-end: gathering context, booking, updating CRMs and delivering confirmations. The
                embedded look mirrors the hero while keeping the demo link front and center.
              </p>
              <p>
                Built for Spanish-speaking restaurants, it requests microphone access for live conversations. Backend actions
                are delayed in this demo, but N8N automation is available for reservation workflows.
              </p>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/10 p-3 text-sm text-slate-100"
                >
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-highlight" aria-hidden />
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
              <p className="text-xs uppercase tracking-[0.25em] text-slate-300">Layout fit</p>
              <h3 className="text-2xl font-semibold text-white">Same shell as the hero</h3>
              <p className="text-sm leading-relaxed text-slate-200/85">
                Copy and structure have been adapted to the hero container, so the Reservo story reads like the top of the page
                while keeping the CTA and status block intact.
              </p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-slate-200">
              {"Websockets • Booking • CRM • Real-time".split(" • ").map((chip) => (
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
