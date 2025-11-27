"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * LoomVideo renders a preview card that defers loading the iframe until the
 * viewer opens it. This speeds up initial page load while keeping a polished
 * modal experience for playback.
 */
export default function LoomVideo({ url, title, description }) {
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (open) {
      setReady(true);
    }
  }, [open]);

  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="glass-card relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-6 shadow-2xl"
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-300">Recorded Demo</p>
            <h4 className="text-xl font-semibold text-white">{title}</h4>
            {description ? <p className="text-sm text-slate-200/80">{description}</p> : null}
          </div>
          <div className="flex items-center gap-3 text-sm text-slate-200/90">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_6px_rgba(16,185,129,0.18)]" aria-hidden />
              Optimized streaming
            </span>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="btn-primary"
              aria-label={`Play ${title}`}
            >
              <span aria-hidden className="text-lg leading-none">▶</span>
              Watch now
            </button>
          </div>
        </div>
        <div className="mt-4 flex items-center gap-3 text-[0.85rem] text-slate-200/70">
          <span className="h-10 w-10 rounded-xl bg-gradient-to-br from-highlight/20 to-white/5" aria-hidden />
          <p className="leading-relaxed">
            Videos open in a modal to keep the page snappy. Click “Watch now” to stream instantly.
          </p>
        </div>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              key="dialog"
              role="dialog"
              aria-modal="true"
              className="relative w-[92vw] max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-slate-900/90 shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.18 }}
            >
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="group absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                aria-label="Close video"
              >
                <span className="text-lg leading-none group-hover:scale-105">×</span>
              </button>
              <div className="aspect-video w-full bg-black/70">
                {ready ? (
                  <iframe
                    src={url}
                    title={title}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    loading="lazy"
                    className="h-full w-full"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-sm text-slate-200/80">
                    Preparing stream…
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
