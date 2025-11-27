"use client";

import Section from "./Section";
import LoomVideo from "./LoomVideo";

export default function VoiceAIAgentDemo() {
  return (
    <Section id="voice-ai-demo" className="bg-transparent">
      <div className="mx-auto max-w-5xl space-y-8 px-8 py-12 text-left">
        <h2 className="text-3xl font-bold">Voice AI Agent Demo</h2>
        <p className="opacity-80">
          This call shows our voice AI agent handling a real customer call. In the past
          month it processed around 70 calls with 99% positive sentiment. The AI collects
          contact details, confirms the service and writes data into GoHighLevel. We
          continuously tune the pipeline to improve accuracy and performance.
        </p>
        <LoomVideo
          url="https://www.loom.com/embed/8a043524e6a940c7b64c06e32ac6329a"
          title="Voice AI Agent Demo"
        />
      </div>
    </Section>
  );
}
