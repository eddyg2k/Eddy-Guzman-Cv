"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function IntroShowcase({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish?.();
    }, 10000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="relative flex h-[85vh] w-screen items-center justify-center overflow-hidden bg-black text-white">
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-70"
        initial={{ scale: 1.1, rotate: 0 }}
        animate={{ scale: 1, rotate: 360 }}
        transition={{ duration: 18, ease: "linear", repeat: Infinity }}
        style={{
          background:
            "radial-gradient(circle at 20% 30%, rgba(126, 122, 255, 0.18), transparent 40%), radial-gradient(circle at 80% 70%, rgba(86, 242, 203, 0.2), transparent 35%), radial-gradient(circle at 50% 50%, rgba(255, 176, 122, 0.25), transparent 45%)",
        }}
      />

      <motion.div
        className="relative z-10 flex flex-col items-center gap-8"
        initial={{ opacity: 0, scale: 0.9, rotateX: -12, rotateY: 10 }}
        animate={{ opacity: 1, scale: 1, rotateX: 0, rotateY: 0 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        style={{ perspective: 1200 }}
      >
        <motion.div
          className="relative drop-shadow-[0_0_50px_rgba(80,168,255,0.45)]"
          initial={{ rotateX: -8, rotateY: 14, scale: 0.92 }}
          animate={{
            rotateX: [0, -10, 12, -6, 0],
            rotateY: [0, 14, -12, 10, 0],
            rotateZ: [0, -4, 4, -2, 0],
            scale: [0.95, 1.02, 1],
            filter: [
              "drop-shadow(0 0 25px rgba(80,168,255,0.35))",
              "drop-shadow(0 0 40px rgba(86,242,203,0.4))",
              "drop-shadow(0 0 25px rgba(255,176,122,0.35))",
            ],
          }}
          transition={{ duration: 10, ease: "easeInOut" }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="relative h-52 w-52 sm:h-64 sm:w-64">
            <Image
              src="/perspectivity-logo.svg"
              alt="Perspectivity logo"
              fill
              priority
              className="object-contain"
            />
          </div>
          <motion.div
            className="pointer-events-none absolute inset-0 rounded-3xl"
            initial={{ opacity: 0.4, scale: 0.9 }}
            animate={{ opacity: [0.4, 0.85, 0.6], scale: [0.9, 1.05, 1] }}
            transition={{ duration: 10, ease: "easeInOut" }}
            style={{
              boxShadow:
                "0 0 60px 20px rgba(80,168,255,0.25), 0 0 90px 45px rgba(86,242,203,0.18)",
            }}
          />
        </motion.div>

        <div className="text-center">
          <div className="text-xs uppercase tracking-[0.4em] text-slate-200/70">Perspectivity</div>
          <div className="mt-3 text-3xl font-semibold sm:text-4xl">Welcome to my Online CV</div>
          <div className="mt-2 text-lg text-slate-200/80">
            Voice AI, automation, and interactive stories for the next generation of ops
          </div>
        </div>

        <div className="flex items-center gap-4 text-sm text-slate-200/70">
          <button
            onClick={() => onFinish?.()}
            className="rounded-full border border-white/20 px-5 py-2 font-semibold tracking-wide transition hover:border-white/50 hover:bg-white/5"
          >
            Skip intro
          </button>
          <div className="flex w-40 items-center rounded-full bg-white/10 p-1">
            <motion.div
              className="h-2 rounded-full bg-gradient-to-r from-sky-400 via-emerald-300 to-amber-300"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 10, ease: "linear" }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
