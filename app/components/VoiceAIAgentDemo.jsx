"use client";

import Section from "./Section";
import LoomVideo from "./LoomVideo";

export default function VoiceAIAgentDemo() {
  return (
    <Section id="voice-ai-demo" className="bg-transparent">
      <div className="mx-auto max-w-5xl space-y-8 px-6 py-10 text-left">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-300">Voice AI</p>
          <h2 className="font-display text-4xl font-semibold text-white">Voice AI Agent Demo</h2>
          <p className="text-slate-200/85">
            A real customer call processed by our agent. It collects details, confirms service and writes to GoHighLevel—around 70 calls in the last month with 99% positive sentiment.
          </p>
        </div>
        <LoomVideo
          url="https://www.loom.com/embed/8a043524e6a940c7b64c06e32ac6329a"
          title="Voice AI Agent Demo"
          description="See the live routing, data capture and confirmation flow in action."
        />
      </div>
    </Section>
  );
}
