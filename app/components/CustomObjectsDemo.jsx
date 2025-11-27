"use client";

import Section from "./Section";
import LoomVideo from "./LoomVideo";

export default function CustomObjectsDemo() {
  return (
    <Section id="custom-objects-demo" className="bg-transparent">
      <div className="mx-auto max-w-5xl space-y-8 px-6 py-10 text-left">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-300">Data Modeling</p>
          <h2 className="font-display text-4xl font-semibold text-white">Custom Objects &amp; Data Modeling</h2>
          <p className="text-slate-200/85">
            An overview of how I model contractors, sub‑contractors, jobs and quotes. Parent/child links, assignments and automation paths are mapped so scaling doesn’t break the process.
          </p>
        </div>
        <LoomVideo
          url="https://www.loom.com/embed/c53ea554caaf4aaf81f1b01c50ff0c0c"
          title="Custom Objects Demo"
          description="Structuring relationships and triggers so operations remain clear even as data grows."
        />
      </div>
    </Section>
  );
}
