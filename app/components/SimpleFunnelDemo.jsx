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
    <Section id="demo-videos" className="bg-transparent items-start">
      <div className="mx-auto max-w-5xl space-y-6 px-6 py-10 text-left">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-300">Demos</p>
            <h2 className="font-display text-4xl font-semibold text-white">Demo Videos</h2>
            <p className="text-base text-slate-200/85">
              Quick walkthroughs that mirror the other video sections—open, watch, and close without layout shifts.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.25em] text-slate-200/80">
            {takeaways.map((item) => (
              <span key={item} className="pill bg-white/10 text-[0.7rem]">
                {item}
              </span>
            ))}
          </div>
        </div>

        <LoomVideo
          url="https://www.loom.com/embed/719875201ca44517a9089ffdd8830237"
          title="Simple Funnel Demo"
          description="A lean funnel that scales without added tech debt—modal playback keeps the page tidy."
        />
      </div>
    </Section>
  );
}
