"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Section from "./Section";
import logoTexture from "../../media/no backg.svg";

export default function Hero() {
  return (
    <Section id="hero" className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-hero-grid opacity-80" aria-hidden />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/5 via-transparent to-black" aria-hidden />

      <motion.div
        aria-hidden
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.div
          className="absolute left-1/2 top-10 h-64 w-64 -translate-x-1/2 rounded-full bg-gradient-to-br from-highlight/25 to-accent/25 blur-3xl"
          initial={{ opacity: 0.35, scale: 0.85, y: 10 }}
          animate={{ opacity: 0.6, scale: 1, y: [0, -6, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-16 h-48 w-48 rounded-full bg-gradient-to-br from-accent/20 to-white/10 blur-3xl"
          initial={{ opacity: 0.2, scale: 0.9, y: 20 }}
          animate={{ opacity: 0.4, scale: 1, y: [20, 8, 20] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <div className="relative z-10 flex w-full flex-col gap-8 lg:gap-10">
        <div className="flex flex-col gap-5 text-left">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-slate-300"
          >
            <span className="h-px w-8 bg-white/30" aria-hidden />
            Eddy Guzman
          </motion.div>

          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-3">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.25 }}
                className="max-w-4xl font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl"
              >
                Automation Engineer &amp; AI Systems Builder
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.35 }}
                className="max-w-2xl text-lg text-slate-200"
              >
                Specialist in GoHighLevel automations, Zapier and n8n orchestration, AI agents, and precision workflow design
                that keeps revenue teams moving.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="soft-border relative flex items-center gap-3 rounded-2xl bg-white/5 px-5 py-4 backdrop-blur"
            >
              <div className="relative h-14 w-14 overflow-hidden rounded-xl bg-white/10 p-2">
                <Image src={logoTexture} alt="Eddy Guzman mark" fill className="object-contain" sizes="56px" priority />
              </div>
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-[0.2em] text-slate-300">Availability</span>
                <span className="font-semibold text-white">Open for automation builds</span>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="flex flex-wrap gap-3 text-sm text-slate-200"
        >
          {["GHL Workflows", "AI Voice & Chat Agents", "Zapier + n8n", "Architecture", "Workflow Strategy"].map((item) => (
            <span key={item} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
