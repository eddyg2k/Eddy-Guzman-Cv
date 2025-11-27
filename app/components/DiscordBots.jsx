"use client";

import { motion } from "framer-motion";
import Section from "./Section";

const features = [
  "API, calendar and CRM integrations inside chat",
  "Audio synthesis experiments with ElevenLabs",
  "Educational journeys with interactive exercises",
  "Bots that can swap TTS engines based on need",
];

/**
 * DiscordBots slide emphasises educational bots and AI apps for Discord and contrasts Eleven Labs with GoHighLevel.
 */
export default function DiscordBots() {
  return (
    <Section id="discord-bots" className="bg-transparent">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-10 text-left">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-300">Bots &amp; Apps</p>
          <h2 className="font-display text-4xl font-semibold text-white">Bots &amp; Educational Apps</h2>
          <p className="text-lg text-slate-200/85">
            Beyond web agents, I build chat‑native experiences for Discord communities. Lessons, Q&amp;A and workflow orchestration all stay in the conversation.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          <motion.div className="glass-card rounded-2xl border border-white/5 bg-white/5 p-6 shadow-xl lg:col-span-2" whileHover={{ y: -6 }}>
            <h3 className="text-2xl font-semibold text-white">What they do</h3>
            <p className="mt-2 text-sm text-slate-200/85">
              Bots deliver lessons, answer questions and coordinate tasks. They interface with CRMs, calendars, APIs and AI models to make learning feel effortless.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {features.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/5 p-3 text-sm text-slate-200/85">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-highlight" aria-hidden />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div className="glass-card flex flex-col justify-between rounded-2xl border border-white/5 bg-gradient-to-br from-white/5 via-white/5 to-accent/10 p-6 shadow-xl" whileHover={{ y: -6 }}>
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-300">Audio choices</p>
              <h3 className="text-xl font-semibold text-white">Why GHL first</h3>
              <p className="text-sm text-slate-200/80">
                ElevenLabs is great for experimentation, but GoHighLevel’s models and automation hooks are the most reliable for production use‑cases. I can swap engines per experience.
              </p>
            </div>
            <div className="mt-4 space-y-2 text-xs uppercase tracking-[0.2em] text-slate-200">
              <span className="pill inline-flex w-auto">Discord lessons</span>
              <span className="pill inline-flex w-auto">Hands‑free practice</span>
              <span className="pill inline-flex w-auto">Automation coaching</span>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
