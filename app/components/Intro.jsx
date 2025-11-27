"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import logoMark from "../../media/no backg.svg";

export default function Intro() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black text-white">
      <div className="absolute -inset-24 glow-ring" aria-hidden />
      <div className="relative z-10 flex flex-col items-center gap-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="rounded-full bg-white/5 p-6 soft-border"
        >
          <Image
            src={logoMark}
            alt="Eddy Guzman logo"
            width={160}
            height={160}
            priority
            className="h-32 w-32 object-contain drop-shadow-2xl"
          />
        </motion.div>
        <p className="text-sm uppercase tracking-[0.3em] text-slate-300">Automation in motion</p>
      </div>
    </section>
  );
}
