"use client";

import { Children, useEffect, useMemo, useRef, useState } from "react";
import Section from "./Section";

// Gradient stack used for background transitions. If there are more slides than
// backgrounds, colours will repeat.
const backgrounds = [
  {
    start: "#161a2b",
    end: "#1f2a44",
    accent: "rgba(110, 243, 255, 0.22)",
    glow: "rgba(99, 102, 241, 0.35)",
  },
  {
    start: "#1c1433",
    end: "#2a1f4f",
    accent: "rgba(255, 99, 186, 0.25)",
    glow: "rgba(110, 243, 255, 0.28)",
  },
  {
    start: "#0f1f2a",
    end: "#123a45",
    accent: "rgba(74, 222, 128, 0.24)",
    glow: "rgba(56, 189, 248, 0.32)",
  },
  {
    start: "#1d1a3a",
    end: "#302b63",
    accent: "rgba(251, 146, 60, 0.23)",
    glow: "rgba(99, 102, 241, 0.3)",
  },
  {
    start: "#122633",
    end: "#0f172a",
    accent: "rgba(56, 189, 248, 0.26)",
    glow: "rgba(244, 114, 182, 0.26)",
  },
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
      linear-gradient(135deg, ${layer.start} 0%, ${layer.end} 100%)`,
  };
}

/**
 * LayeredBackground orchestrates slide transitions, background peel effects and scroll
 * navigation. It expects React children—each child becomes a slide.
 * The first slide is shown on load and auto‑advances after 5s. Scroll navigation
 * clamps to the first and last slide (no looping).
 */
export default function LayeredBackground({ children }) {
  // Convert children to array so we can index them
  const slides = useMemo(() => Children.toArray(children), [children]);
  const total = slides.length || 1;

  const [index, setIndex] = useState(0);
  const busyRef = useRef(false);
  const unlockRef = useRef(null);

  // Prevent spamming transitions by setting a lock
  const setBusyLock = () => {
    busyRef.current = true;
    if (unlockRef.current) clearTimeout(unlockRef.current);
    unlockRef.current = setTimeout(() => {
      busyRef.current = false;
    }, 800);
  };

  // Navigate to a slide index without looping
  const goTo = (next) => {
    if (busyRef.current) return;
    const clamped = Math.max(0, Math.min(next, total - 1));
    if (clamped !== index) {
      setBusyLock();
      setIndex(clamped);
    }
  };

  // Listen for scroll wheel events to move between slides
  useEffect(() => {
    const onWheel = (e) => {
      e.preventDefault();
      if (busyRef.current || total <= 1) return;
      const direction = e.deltaY > 0 ? 1 : -1;
      goTo(index + direction);
    };
    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [index, total]);

  // Auto‑advance after 5 seconds on the first slide
  useEffect(() => {
    if (index === 0 && total > 1) {
      const timer = setTimeout(() => {
        if (!busyRef.current && index === 0) {
          goTo(index + 1);
        }
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [index, total]);

  // Clean up the lock timer on unmount
  useEffect(() => {
    return () => {
      if (unlockRef.current) clearTimeout(unlockRef.current);
    };
  }, []);

  const activeBgIndex = index % backgrounds.length;
  const currentSlide = slides[index] ?? null;

  return (
    <Section
      id="layered-bg"
      className="fixed inset-0 isolate overflow-hidden bg-ink text-slate-100"
    >
      {/* Background peel stack */}
      <div className="layer-stack absolute inset-0 -z-10" aria-hidden>
        {backgrounds.map((layer, idx) => (
          <div
            key={layer.start + idx}
            className={`bg-layer ${activeBgIndex === idx ? "is-active" : ""}`}
            style={backgroundStyle(layer)}
          >
            <div className="bg-overlay" />
          </div>
        ))}
      </div>

      {/* Slide content – center children */}
      <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col justify-center px-6 py-10 lg:px-10 lg:py-16">
        {currentSlide}
      </div>
    </Section>
  );
}