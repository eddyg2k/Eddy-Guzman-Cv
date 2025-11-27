"use client";

import { Children, useEffect, useMemo, useRef, useState } from "react";
import Section from "./Section";

// Gradient stack used for background transitions. If there are more slides than
// backgrounds, colours will repeat.
const backgrounds = [
  {
    start: "#060c1f",
    end: "#0b1531",
    accent: "rgba(40, 126, 255, 0.24)",
    glow: "rgba(0, 199, 255, 0.18)",
  },
  {
    start: "#08122a",
    end: "#0e1d3a",
    accent: "rgba(50, 148, 255, 0.24)",
    glow: "rgba(0, 208, 255, 0.22)",
  },
  {
    start: "#0a1734",
    end: "#102749",
    accent: "rgba(60, 172, 255, 0.24)",
    glow: "rgba(10, 212, 255, 0.24)",
  },
  {
    start: "#0b1d3f",
    end: "#123156",
    accent: "rgba(72, 191, 255, 0.26)",
    glow: "rgba(34, 214, 255, 0.26)",
  },
  {
    start: "#0d2349",
    end: "#153b63",
    accent: "rgba(88, 204, 255, 0.28)",
    glow: "rgba(56, 220, 255, 0.28)",
  },
  {
    start: "#0f2853",
    end: "#18456f",
    accent: "rgba(102, 214, 255, 0.3)",
    glow: "rgba(82, 226, 255, 0.3)",
  },
  {
    start: "#112f5e",
    end: "#1a4f7b",
    accent: "rgba(118, 222, 255, 0.32)",
    glow: "rgba(106, 232, 255, 0.32)",
  },
  {
    start: "#133668",
    end: "#1d5a87",
    accent: "rgba(134, 229, 255, 0.33)",
    glow: "rgba(128, 236, 255, 0.33)",
  },
  {
    start: "#153d73",
    end: "#1f6693",
    accent: "rgba(146, 233, 255, 0.35)",
    glow: "rgba(150, 240, 255, 0.35)",
  },
  {
    start: "#17457d",
    end: "#21729f",
    accent: "rgba(164, 238, 255, 0.36)",
    glow: "rgba(170, 243, 255, 0.36)",
  },
  {
    start: "#184d87",
    end: "#2480ac",
    accent: "rgba(182, 243, 255, 0.38)",
    glow: "rgba(188, 247, 255, 0.38)",
  },
  {
    start: "#1a5794",
    end: "#2991c0",
    accent: "rgba(198, 246, 255, 0.4)",
    glow: "rgba(56, 206, 255, 0.5)",
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
  const touchStartY = useRef(null);
  const touchStartTime = useRef(null);

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

  const goToNextSlide = () => goTo(index + 1);
  const goToPrevSlide = () => goTo(index - 1);

  // --- TOUCH + GESTURE SUPPORT ---
  const onTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
    touchStartTime.current = Date.now();
  };

  const onTouchMove = (e) => {
    if (!touchStartY.current) return;

    const dy = e.touches[0].clientY - touchStartY.current;
    const elapsed = Date.now() - touchStartTime.current;

    const distanceEnough = Math.abs(dy) > 40;
    const fastSwipe = elapsed < 220 && Math.abs(dy) > 15;

    if (distanceEnough || fastSwipe) {
      if (dy < 0) goToNextSlide();
      else goToPrevSlide();

      touchStartY.current = null;
    }
  };

  const onTouchEnd = () => {
    touchStartY.current = null;
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
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      wrap={false}
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

      {/* Navigation dots */}
      <div className="pointer-events-none absolute inset-x-0 bottom-6 z-20 flex justify-center sm:bottom-8">
        <div className="pointer-events-auto inline-flex items-center gap-3 rounded-full bg-black/30 px-4 py-3 shadow-lg shadow-black/40 backdrop-blur">
          {slides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`h-4 w-4 rounded-full border-2 transition ${idx === index ? "bg-white border-white" : "bg-white/20 border-white/40"} active:scale-90 touch-manipulation`}
              onClick={() => goTo(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
