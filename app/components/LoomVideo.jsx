"use client";

import { motion } from "framer-motion";

/**
 * LoomVideo now renders the video inline so the demo is always visible without
 * opening a modal. This keeps the section content front and center while
 * preserving the same animated entrance.
 */
export default function LoomVideo({ url, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="glass-card relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-6 shadow-2xl"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-300">Recorded Demo</p>
          <h4 className="text-xl font-semibold text-white">{title}</h4>
          {description ? <p className="text-sm text-slate-200/80">{description}</p> : null}
        </div>
        <div className="flex items-center gap-3 text-sm text-slate-200/90">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_6px_rgba(16,185,129,0.18)]" aria-hidden />
            Plays inline
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[0.85rem]">
            No pop‑ups needed
          </span>
        </div>
      </div>

      <div className="mt-5 overflow-hidden rounded-xl border border-white/10 bg-black/40 shadow-inner">
        <div className="relative w-full pb-[56.25%]">
          <iframe
            src={url}
            title={title}
            allow="autoplay; encrypted-media"
            allowFullScreen
            loading="lazy"
            className="absolute inset-0 h-full w-full"
          />
        </div>
      </div>
    </motion.div>
  );
}
