"use client";

import { useEffect, useRef, useState } from "react";
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
  const [activeBackground, setActiveBackground] = useState(0);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const layerIndex = Number(entry.target.dataset.layer || 0);
            setActiveBackground(layerIndex);
          }
        });
      },
      { threshold: 0.45 }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative isolate">
      <div className="layer-stack fixed inset-0 -z-10" aria-hidden>
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

      <div className="relative z-10 flex flex-col">
        {sections.map((section, idx) => (
          <Section
            key={section.tag}
            id={`layer-${idx}`}
            className="isolate overflow-hidden"
            sectionRef={(el) => {
              sectionRefs.current[idx] = el;
            }}
            data-layer={idx}
          >
            <div className="relative z-20 mx-auto flex max-w-4xl flex-col items-start gap-8 rounded-3xl border border-white/10 bg-black/30 px-8 py-10 shadow-2xl backdrop-blur lg:px-12 lg:py-14">
              <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-slate-200">
                  {section.kicker}
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-300">
                  <span className="h-px w-12 bg-white/30" aria-hidden />
                  State-driven animation
                </div>
              </div>

              <div className="flex flex-col gap-4 text-left">
                <div className="inline-flex items-center gap-3 text-sm text-slate-200">
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.25em]">{section.tag}</span>
                  <span className="text-white/70">renderSection()</span>
                </div>
                <h2 className="font-display text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">{section.title}</h2>
                <p className="max-w-3xl text-lg text-slate-100/90">{section.body}</p>
              </div>
            </div>
          </Section>
        ))}
      </div>
    </div>
  );
}
