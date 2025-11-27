"use client";

import Section from "./Section";
import LoomVideo from "./LoomVideo";

const takeaways = [
  "Intake → nurture → conversion, kept intentionally lightweight",
  "Micro‑automations to reduce friction and surface the right offer",
  "Instrumentation to see where leads pause or drop",
];

export default function SimpleFunnelDemo() {
  return (
    <Section id="demo-videos" className="bg-transparent">
      <div className="mx-auto max-w-5xl space-y-8 px-6 py-10 text-left">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-300">Demos</p>
          <h2 className="font-display text-4xl font-semibold text-white">Demo Videos</h2>
          <p className="text-lg text-slate-200/85">
            Quick, focused recordings designed for fast loading. Open each card to stream in a modal without slowing the page.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.3fr_1fr]">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Simple Funnel Architecture</h3>
            <p className="text-slate-200/85">
              A walkthrough of a minimal yet scalable funnel. I cover how to keep the experience frictionless while still leaving room for deeper automation when it’s needed.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {takeaways.map((item) => (
                <div key={item} className="pill w-full justify-start text-left text-xs">
                  {item}
                </div>
              ))}
            </div>
            <LoomVideo
              url="https://www.loom.com/embed/719875201ca44517a9089ffdd8830237"
              title="Simple Funnel Demo"
              description="How to build a lean funnel that can scale without adding tech debt."
            />
          </div>

          <div className="glass-card h-full rounded-2xl border border-white/5 bg-gradient-to-b from-white/5 via-white/5 to-highlight/10 p-6 shadow-xl">
            <h4 className="text-xl font-semibold text-white">Why the modal?</h4>
            <p className="mt-2 text-sm text-slate-200/85">
              Videos stay off‑screen until you click, so the hero stays responsive. Each stream opens in a focused dialog with a single click.
            </p>
            <div className="mt-4 space-y-2 text-sm text-slate-200/80">
              <p>• Faster initial load, fewer autoplay requests</p>
              <p>• Consistent framing for each recording</p>
              <p>• Easy to swap in new demos without layout shifts</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
