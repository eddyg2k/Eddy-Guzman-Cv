"use client";

import Section from "./Section";
import LoomVideo from "./LoomVideo";

export default function SimpleFunnelDemo() {
  return (
    <Section id="demo-videos" className="bg-transparent">
      <div className="mx-auto max-w-5xl space-y-8 px-8 py-12 text-left">
        <h2 className="text-3xl font-bold">Demo Videos</h2>
        <p className="text-lg opacity-90">
          Here are a few recorded demos. These are simplified examples built for
          personal testing and to illustrate key concepts. They do not reveal
          any proprietary client workflows.
        </p>
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold">Simple Funnel Architecture</h3>
          <p className="opacity-80">
            A walkthrough of a minimal yet scalable funnel: intake → nurture →
            conversion. It shows how micro‑automations reduce lead friction and
            why keeping it clean beats overbuilding.
          </p>
          <LoomVideo
            url="https://www.loom.com/embed/719875201ca44517a9089ffdd8830237"
            title="Simple Funnel Demo"
          />
        </div>
      </div>
    </Section>
  );
}
