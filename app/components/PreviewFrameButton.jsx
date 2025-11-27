"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * PreviewFrameButton opens an external project inside an iframe modal.
 * It mirrors the video modal behavior so CTA buttons feel consistent
 * while keeping the main page lightweight.
 */
export default function PreviewFrameButton({
  url,
  title,
  label = "Open live preview",
  description,
}) {
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (open) setReady(true);
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
      <div className="flex flex-col gap-1">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="btn-primary inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-highlight/80 via-white to-accent text-slate-900"
          aria-label={label}
        >
          <span aria-hidden className="text-lg">↗</span>
          {label}
        </button>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-slate-200/70 underline underline-offset-4 hover:text-white"
        >
          Open in a new tab if the embed is blocked
        </a>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="frame-backdrop"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
          <motion.div
            key="frame-dialog"
            role="dialog"
            aria-modal="true"
            aria-label={title}
            className="relative w-[98vw] max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-slate-900/90 shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.18 }}
          >
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="group absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                aria-label="Close preview"
              >
                <span className="text-lg leading-none group-hover:scale-105">×</span>
              </button>
              <div className="flex flex-col gap-3 p-4 text-left text-slate-100/90">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.3em] text-slate-300">Live preview</p>
                    <h4 className="text-xl font-semibold text-white">{title}</h4>
                    {description ? (
                      <p className="text-sm text-slate-200/80">{description}</p>
                    ) : null}
                  </div>
                </div>
              <div className="relative h-[70vh] w-full overflow-hidden rounded-xl border border-white/10 bg-black/70 sm:h-[74vh] lg:h-[78vh]">
                {ready ? (
                  <iframe
                    src={url}
                    title={title}
                    allowFullScreen
                    loading="lazy"
                    className="h-full w-full"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-sm text-slate-200/80">
                      Loading preview…
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
