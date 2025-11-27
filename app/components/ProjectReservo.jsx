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
 * ProjectReservo showcases the Reservo voice AI project.
 * It emphasises that this demo is available and highlights the benefits of direct AI communication via websockets.
 */
export default function ProjectReservo() {
  return (
    <Section id="reservo-demo" className="bg-transparent">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-10">
        <div className="flex flex-col gap-3">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-300">Voice AI</p>
          <h2 className="font-display text-4xl font-semibold text-white">Project: Reservo</h2>
          <p className="text-lg text-slate-200/85">
            A production‑ready voice agent for restaurants and service teams. Calls stream through websockets for crisp, fast turn‑taking.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          <motion.div className="glass-card rounded-2xl border border-white/5 bg-gradient-to-br from-highlight/15 via-white/5 to-accent/10 p-6 shadow-xl lg:col-span-2" whileHover={{ y: -6 }}>
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
                Open in new tab
              </a>
            </div>
            <div className="mt-4 space-y-2 text-base leading-relaxed text-slate-200/85">
              <p>
                Reservo handles calls end‑to‑end: gathering context, booking, updating CRMs and delivering confirmations. The demo opens in a separate tab because the embedded preview is paused.
              </p>
              <p>
                Built for Spanish-speaking restaurants, it requests microphone access for live conversations. Backend actions are delayed in this demo, but N8N automation is available for reservation workflows.
              </p>
              <p>
                No custom instructions or complex workflows are loaded here—this is a streamlined proof of concept focused on seat checks, booking steps, and database updates.
              </p>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/5 p-3 text-sm text-slate-200/85">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-highlight" aria-hidden />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div className="glass-card flex flex-col justify-between rounded-2xl border border-white/5 bg-white/5 p-6 shadow-xl" whileHover={{ y: -6 }}>
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-300">Status</p>
              <h3 className="text-2xl font-semibold text-white">Ready to test</h3>
              <p className="text-sm text-slate-200/80">
                This is the only live voice AI demo; other prototypes were deprecated. Designed to illustrate the fundamentals without exposing client data.
              </p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-slate-200">
              {"Websockets • Booking • CRM • Real‑time".split(" • ").map((chip) => (
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
