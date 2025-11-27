"use client";

import Section from "./Section";
import LoomVideo from "./LoomVideo";

export default function CustomObjectsDemo() {
  return (
    <Section id="custom-objects-demo" className="bg-transparent">
      <div className="mx-auto max-w-5xl space-y-8 px-8 py-12 text-left">
        <h2 className="text-3xl font-bold">Custom Objects &amp; Data Modeling</h2>
        <p className="opacity-80">
          An overview of using custom objects to model contractors, sub‑contractors, jobs,
          quotes and workflows. I demonstrate how to link parent/child relationships,
          automate assignments and structure data so systems scale without breaking.
        </p>
        <LoomVideo
          url="https://www.loom.com/embed/c53ea554caaf4aaf81f1b01c50ff0c0c"
          title="Custom Objects Demo"
        />
      </div>
    </Section>
  );
}
