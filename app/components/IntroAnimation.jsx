"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Section from "./Section";
import logoMark from "../../media/no backg.svg";

/**
 * IntroAnimation renders a welcoming splash with a floating, spinning logo and
 * subtle depth cues. LayeredBackground is responsible for auto‑advancing after a
 * timeout, but this intro sets the visual tone for the deck.
 */
export default function IntroAnimation() {
  return (
    <Section id="intro-animation" className="bg-transparent">
      <div className="relative flex h-full w-full flex-col items-center justify-center gap-6 text-center">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <motion.div
            className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-to-br from-highlight/30 via-white/10 to-accent/25 blur-3xl"
            initial={{ opacity: 0.45, scale: 0.85 }}
            animate={{ opacity: 0.7, scale: [0.95, 1.03, 0.98] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden
          />
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(110,243,255,0.08),transparent_32%),radial-gradient(circle_at_75%_35%,rgba(244,114,182,0.12),transparent_35%)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            aria-hidden
          />
        </div>

        <motion.div
          className="relative flex h-44 w-44 items-center justify-center rounded-full border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, y: [0, -8, 0] }}
          transition={{ duration: 1, delay: 0.15, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
        >
          <motion.div
            className="absolute inset-2 rounded-full border border-white/10"
            animate={{ rotate: 360 }}
            transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
            aria-hidden
          />
          <motion.div
            className="relative h-24 w-24"
            initial={{ rotate: -8 }}
            animate={{ rotate: [0, 6, -6, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src={logoMark}
              alt="Eddy Guzman logo"
              fill
              sizes="96px"
              className="object-contain drop-shadow-[0_12px_35px_rgba(0,0,0,0.45)]"
              priority
            />
          </motion.div>
        </motion.div>

        <div className="space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-[0.7rem] uppercase tracking-[0.3em] text-slate-200 shadow-lg backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-highlight" aria-hidden />
            Perspectivity
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
          </p>
          <h1 className="font-display text-5xl font-semibold tracking-tight text-transparent bg-gradient-to-r from-white via-blue-100 to-teal-200 bg-clip-text sm:text-6xl">
            Automation in motion
          </h1>
          <p className="text-lg text-slate-200/80 sm:text-xl">
            Crafted workflows, human‑centered AI and crisp delivery.
          </p>
        </div>
      </div>
    </Section>
  );
}
