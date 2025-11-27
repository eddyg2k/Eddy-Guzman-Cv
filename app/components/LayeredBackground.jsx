"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Section from "./Section";

const sections = [
  {
    kicker: "Layered motion system",
    title: "Fixed content, shifting atmosphere",
    body: "Backgrounds peel away independently from the content layer, so readers stay locked on the headline while the visuals animate underneath.",
    tag: "Clip-path peel"
  },
  {
    kicker: "Gradient choreography",
    title: "Five stacked canvases, one spotlight",
    body: "Each layer carries its own gradient recipe. JavaScript simply toggles which canvas is visible while the others idle in the stack.",
    tag: "Stacked positioning"
  },
  {
    kicker: "State-led timing",
    title: "One orchestrator, many effects",
    body: "The goTo() function flips both the copy and the active layer in sync, with a busy flag to keep animations from overlapping.",
    tag: "State machine"
  },
  {
    kicker: "Performance-aware",
    title: "GPU-friendly transitions",
    body: "Transitions lean on will-change hints and cubic-bezier easing. Reduced-motion users get instant swaps without the flourish.",
    tag: "Cubic bezier"
  },
  {
    kicker: "SDK ready",
    title: "Element SDK stays loaded",
    body: "The stack is vanilla JS and CSS—no extra packages. The Canva Element SDK can hook into the same DOM without collisions.",
    tag: "Element SDK"
  }
];

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

export default function LayeredBackground() {
  const [sectionIndex, setSectionIndex] = useState(0);
  const [activeBackground, setActiveBackground] = useState(0);
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

  const showBackground = (index) => {
    setActiveBackground(index);
  };

  const goTo = (index) => {
    if (busyRef.current || index === sectionIndex) return;
    setBusyLock();
    showBackground(index);
    setSectionIndex(index);
  };

  useEffect(() => {
    if (!motionAllowed) return undefined;

    const interval = setInterval(() => {
      if (busyRef.current) return;
      setBusyLock();
      setSectionIndex((prev) => {
        const next = (prev + 1) % sections.length;
        setActiveBackground(next);
        return next;
      });
    }, 9000);

    return () => clearInterval(interval);
  }, [motionAllowed]);

  useEffect(() => {
    return () => {
      if (unlockRef.current) {
        clearTimeout(unlockRef.current);
      }
    };
  }, []);

  const renderedSection = useMemo(() => renderSection(sectionIndex), [sectionIndex]);

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

      <div className="relative z-20 mx-auto flex max-w-4xl flex-col items-start gap-8 rounded-3xl border border-white/10 bg-black/30 px-8 py-10 shadow-2xl backdrop-blur lg:px-12 lg:py-14">
        <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-slate-200">
            {sections[sectionIndex].kicker}
          </div>
          <div className="flex items-center gap-3 text-xs text-slate-300">
            <span className="h-px w-12 bg-white/30" aria-hidden />
            State-driven animation
          </div>
        </div>

        {renderedSection}

        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-200">
          <button
            type="button"
            onClick={() => goTo((sectionIndex + sections.length - 1) % sections.length)}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:border-white/30 hover:bg-white/10"
          >
            Previous
          </button>
          <button
            type="button"
            onClick={() => goTo((sectionIndex + 1) % sections.length)}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:border-white/30 hover:bg-white/10"
          >
            Next
          </button>
          <div className="flex items-center gap-2">
            {sections.map((section, idx) => (
              <button
                key={section.tag}
                type="button"
                aria-label={`Show ${section.tag}`}
                onClick={() => goTo(idx)}
                className={`h-2.5 w-2.5 rounded-full border border-white/30 transition ${
                  idx === sectionIndex ? "bg-white" : "bg-white/10 hover:bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function renderSection(index) {
  const section = sections[index];
  return (
    <div className="flex flex-col gap-4 text-left">
      <div className="inline-flex items-center gap-3 text-sm text-slate-200">
        <span className="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.25em]">{section.tag}</span>
        <span className="text-white/70">renderSection()</span>
      </div>
      <h2 className="font-display text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">{section.title}</h2>
      <p className="max-w-3xl text-lg text-slate-100/90">{section.body}</p>
    </div>
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
