'use client'
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-full w-full overflow-hidden bg-cinematic-blue flex flex-col items-center justify-center px-10 text-white">
      
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="text-6xl font-bold tracking-tight text-center"
      >
        Automation Engineer & AI Systems Builder
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: 'easeOut', delay: 0.2 }}
        className="text-xl mt-6 max-w-2xl text-center opacity-90"
      >
        I design and automate intelligent systems for businesses, using
        GoHighLevel, Zapier, n8n, AI agents, and full-stack workflow engineering.
      </motion.p>

    </section>
  );
}
