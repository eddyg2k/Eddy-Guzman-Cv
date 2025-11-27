"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import logoMark from "../../media/no backg.svg";

export default function Intro() {
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFinished(true);
      if (typeof window !== "undefined") {
        window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="snap-start h-screen relative flex items-center justify-center bg-black text-white overflow-hidden">
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center gap-6"
        initial={{ opacity: 1 }}
        animate={{ opacity: finished ? 0 : 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        style={{ pointerEvents: finished ? "none" : "auto" }}
      >
        <div className="absolute -inset-24 glow-ring" aria-hidden />
        <div className="relative z-10 flex flex-col items-center gap-4">
          <div className="rounded-full bg-white/5 p-6 soft-border">
            <Image
              src={logoMark}
              alt="Eddy Guzman logo"
              width={160}
              height={160}
              priority
              className="h-32 w-32 object-contain drop-shadow-2xl"
            />
          </div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-300">Automation in motion</p>
        </div>
      </motion.div>
    </section>
  );
}
