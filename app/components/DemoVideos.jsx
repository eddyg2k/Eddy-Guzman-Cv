"use client";

import Section from "./Section";
import LoomVideo from "./LoomVideo";

/**
 * DemoVideos aggregates multiple Loom videos with explanations.
 */
export default function DemoVideos() {
  return (
    <Section id="demo-videos" className="bg-transparent">
      <div className="mx-auto max-w-5xl space-y-8 px-8 py-12 text-left">
        <h2 className="text-3xl font-bold">Demo Videos</h2>
        <p className="text-lg opacity-90">
          Here are a few recorded demos. These are simplified examples built for
          personal testing and to illustrate key concepts. They do not reveal
          any proprietary client workflows.
        </p>
        <div className="space-y-8">
          {/* Funnel demo */}
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold">Simple Funnel Architecture</h3>
            <p className="opacity-80">
              A walkthrough of a minimal yet scalable funnel: intake → nurture →
              conversion. It shows how micro‑automations reduce lead friction
              and why keeping it clean beats overbuilding.
            </p>
            <LoomVideo
              url="https://www.loom.com/embed/719875201ca44517a9089ffdd8830237"
              title="Simple Funnel Demo"
            />
          </div>
          {/* Voice AI demo */}
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold">Voice AI Agent Demo</h3>
            <p className="opacity-80">
              This call shows our voice AI agent handling a real customer call.
              In the past month it processed around 70 calls with 99% positive
              sentiment. The AI collects contact details, confirms the service
              and writes data into GoHighLevel. We continuously tune the
              pipeline to improve accuracy and performance.
            </p>
            <LoomVideo
              url="https://www.loom.com/embed/8a043524e6a940c7b64c06e32ac6329a"
              title="Voice AI Agent Demo"
            />
          </div>
          {/* Custom objects demo */}
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold">Custom Objects &amp; Data Modeling</h3>
            <p className="opacity-80">
              An overview of using custom objects to model contractors,
              sub‑contractors, jobs, quotes and workflows. I demonstrate how to
              link parent/child relationships, automate assignments and
              structure data so systems scale without breaking.
            </p>
            <LoomVideo
              url="https://www.loom.com/embed/c53ea554caaf4aaf81f1b01c50ff0c0c"
              title="Custom Objects Demo"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}