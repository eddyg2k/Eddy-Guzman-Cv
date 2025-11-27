"use client";

import { Children, useCallback, useEffect, useMemo, useRef, useState } from "react";
import Section from "./Section";

const backgrounds = [
  {
    start: "#161a2b",
    end: "#1f2a44",
    accent: "rgba(110, 243, 255, 0.22)",
    glow: "rgba(99, 102, 241, 0.35)"
  },
  {
    start: "#1c1433",
    end: "#2a1f4f",
    accent: "rgba(255, 99, 186, 0.25)",
    glow: "rgba(110, 243, 255, 0.28)"
  },
  {
    start: "#0f1f2a",
    end: "#123a45",
    accent: "rgba(74, 222, 128, 0.24)",
    glow: "rgba(56, 189, 248, 0.32)"
  },
  {
    start: "#1d1a3a",
    end: "#302b63",
    accent: "rgba(251, 146, 60, 0.23)",
    glow: "rgba(99, 102, 241, 0.3)"
  },
  {
    start: "#122633",
    end: "#0f172a",
    accent: "rgba(56, 189, 248, 0.26)",
    glow: "rgba(244, 114, 182, 0.26)"
  }
];

function backgroundStyle(layer) {
  return {
    "--layer-start": layer.start,
    "--layer-end": layer.end,
    "--layer-accent": layer.accent,
    "--layer-glow": layer.glow,
    backgroundImage: `radial-gradient(120% 120% at 18% 22%, ${layer.accent} 0%, transparent 52%),
      radial-gradient(120% 140% at 78% 20%, ${layer.glow} 0%, transparent 48%),
      radial-gradient(110% 120% at 50% 88%, ${layer.accent} 0%, transparent 40%),
      linear-gradient(135deg, ${layer.start} 0%, ${layer.end} 100%)`
  };
}

export default function LayeredBackground({ children }) {
  const slides = useMemo(() => Children.toArray(children).filter(Boolean), [children]);
  const totalSlides = slides.length;
  const [sectionIndex, setSectionIndex] = useState(0);
  const [activeBackground, setActiveBackground] = useState(0);
  const containerRef = useRef(null);
  const busyRef = useRef(false);
  const unlockRef = useRef(null);
  const motionAllowed = useReducedMotionSafe();

  const setBusyLock = () => {
    busyRef.current = true;
    if (unlockRef.current) {
      clearTimeout(unlockRef.current);
    }
    unlockRef.current = setTimeout(() => {
      busyRef.current = false;
    }, 1000);
  };

  const goTo = useCallback(
    (index) => {
      if (busyRef.current || totalSlides === 0) return;

      const normalizedIndex = ((index % totalSlides) + totalSlides) % totalSlides;
      if (normalizedIndex === sectionIndex) return;

      setBusyLock();
      setActiveBackground(normalizedIndex % backgrounds.length);
      setSectionIndex(normalizedIndex);
    },
    [sectionIndex, totalSlides]
  );

  useEffect(() => {
    if (!motionAllowed) return undefined;

    if (totalSlides === 0) return undefined;

    const interval = setInterval(() => {
      if (busyRef.current) return;
      setBusyLock();
      setSectionIndex((prev) => {
        const next = (prev + 1) % totalSlides;
        setActiveBackground(next % backgrounds.length);
        return next;
      });
    }, 9000);

    return () => clearInterval(interval);
  }, [motionAllowed, totalSlides]);

  useEffect(() => {
    const node = containerRef.current;
    if (!node || totalSlides === 0) return undefined;

    const handleWheel = (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (busyRef.current) return;

      const direction = event.deltaY > 0 ? 1 : -1;
      goTo(sectionIndex + direction);
    };

    node.addEventListener("wheel", handleWheel, { passive: false });
    return () => node.removeEventListener("wheel", handleWheel);
  }, [goTo, sectionIndex, totalSlides]);

  useEffect(() => {
    return () => {
      if (unlockRef.current) {
        clearTimeout(unlockRef.current);
      }
    };
  }, []);

  const renderedSection = useMemo(
    () => (totalSlides ? slides[sectionIndex] ?? null : null),
    [sectionIndex, slides, totalSlides]
  );

  const slideLabels = useMemo(
    () =>
      slides.map((slide, idx) => {
        if (slide?.props?.id) return slide.props.id;
        if (slide?.type?.name) return slide.type.name;
        return `Slide ${idx + 1}`;
      }),
    [slides]
  );

  return (
    <Section id="layered-bg" className="relative isolate overflow-hidden">
      <div className="layer-stack absolute inset-0 -z-10" aria-hidden>
        {backgrounds.map((layer, idx) => (
          <div
            key={layer.start + idx}
            className={`bg-layer ${activeBackground === idx ? "is-active" : ""}`}
            style={backgroundStyle(layer)}
          >
            <div className="bg-overlay" />
          </div>
        ))}
      </div>

      <div
        ref={containerRef}
        className="relative z-20 mx-auto flex h-full max-w-5xl flex-col items-start gap-8 overflow-hidden rounded-3xl border border-white/10 bg-black/30 px-8 py-10 shadow-2xl backdrop-blur lg:px-12 lg:py-14"
      >
        <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-slate-200">
            Layered slide deck
          </div>
          <div className="flex items-center gap-3 text-xs text-slate-300">
            <span className="h-px w-12 bg-white/30" aria-hidden />
            {totalSlides ? `${sectionIndex + 1} / ${totalSlides}` : "No slides"}
          </div>
        </div>

        <div className="relative flex h-full w-full items-start justify-center overflow-hidden">
          <div className="h-full w-full overflow-auto pb-4">{renderedSection}</div>
        </div>

        {totalSlides > 0 && (
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-200">
            <button
              type="button"
              onClick={() => goTo(sectionIndex - 1)}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:border-white/30 hover:bg-white/10"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={() => goTo(sectionIndex + 1)}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:border-white/30 hover:bg-white/10"
            >
              Next
            </button>
            <div className="flex items-center gap-2">
              {slides.map((_, idx) => (
                <button
                  key={`slide-${idx}`}
                  type="button"
                  aria-label={`Show slide ${idx + 1}${slideLabels[idx] ? `: ${slideLabels[idx]}` : ""}`}
                  onClick={() => goTo(idx)}
                  className={`h-2.5 w-2.5 rounded-full border border-white/30 transition ${
                    idx === sectionIndex ? "bg-white" : "bg-white/10 hover:bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </Section>
  );
}

function useReducedMotionSafe() {
  const [motionAllowed, setMotionAllowed] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setMotionAllowed(!mediaQuery.matches);
    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);

    return () => mediaQuery.removeEventListener("change", updateMotionPreference);
  }, []);

  return motionAllowed;
}
