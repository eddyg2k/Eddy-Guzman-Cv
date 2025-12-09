"use client";

import { useMemo, useState } from "react";
import SlideFrame from "../components/SlideFrame";

const demoEntries = [
  {
    title: "Elemental English",
    description: "Adaptive ESL landing with AI lead capture and live preview.",
    url: "https://elemental-english-web-app.vercel.app/landing",
    badge: "Project",
  },
  {
    title: "Landing Page Scaffold",
    description: "Template for lightning-fast marketing spins with AI-ready copy blocks.",
    url: "https://landing-page-scaffold.vercel.app",
    badge: "Project",
  },
  {
    title: "Codex Build Flow",
    description: "Storyboard of the build process behind my AI-forward launches.",
    url: "https://codex-explain.vercel.app",
    badge: "Project",
  },
  {
    title: "Deck Engine",
    description: "This cinematic deck system running in production.",
    url: "https://eddy-guzman-cv.vercel.app",
    badge: "Project",
  },
  {
    title: "Reservo Live Demo",
    description: "Realtime reservation concierge and scheduling workflow.",
    url: "https://reservo.live",
    badge: "Project",
  },
  {
    title: "Eddy AI (Custom GPT)",
    description: "Programmable assistant that runs my n8n automations on-demand.",
    url: "https://chatgpt.com/g/g-6928d9f1ce1481918e71cc4e28e3f1ce-eddy-ai",
    badge: "Custom GPT",
  },
];

export default function TestSlide() {
  const [activeDemo, setActiveDemo] = useState(null);

  const cards = useMemo(
    () =>
      demoEntries.map((demo) => (
        <button
          key={demo.url}
          type="button"
          onClick={() => setActiveDemo(demo)}
          className="group relative flex flex-col gap-3 rounded-2xl border border-white/15 bg-white/5 p-5 text-left shadow-lg transition duration-200 hover:-translate-y-1 hover:border-white/30 hover:bg-white/10"
        >
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/90">
              {demo.badge}
            </span>
            <span className="text-sm text-white/70">Tap to preview</span>
          </div>
          <div className="space-y-1">
            <p className="text-xl font-semibold text-white">{demo.title}</p>
            <p className="text-sm text-white/80">{demo.description}</p>
          </div>
          <span className="text-sm font-semibold text-indigo-100 group-hover:text-indigo-50">
            Open live demo →
          </span>
        </button>
      )),
    []
  );

  return (
    <SlideFrame title="All of my project demos">
      <div className="space-y-4 text-slate-100/85">
        <p className="text-lg">Pick a card to launch any of my live demos or the custom GPT helper.</p>
        <div className="grid gap-4 sm:grid-cols-2">{cards}</div>
      </div>

      {activeDemo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-8">
          <div className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-white/15 bg-slate-900/95 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-6 py-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/70">Live preview</p>
                <p className="text-lg font-semibold text-white">{activeDemo.title}</p>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={activeDemo.url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/20"
                >
                  Open in new tab
                </a>
                <button
                  type="button"
                  onClick={() => setActiveDemo(null)}
                  className="rounded-full bg-red-500 px-4 py-2 text-sm font-bold text-white shadow-lg transition hover:bg-red-400"
                >
                  Exit demo
                </button>
              </div>
            </div>
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={activeDemo.url}
                title={activeDemo.title}
                allow="camera; microphone; autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
          </div>
        </div>
      )}
    </SlideFrame>
  );
}
