"use client";

import Slide from "../components/Slide";

export default function VoiceAIFeatures() {
  return (
    <Slide
      eyebrow="AI Voice Agents"
      title="Features + superiority"
      subtitle="GHL > ElevenLabs for production automations"
      accent="from-purple-400/70 via-indigo-500/60 to-blue-500/50"
      actions={
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-100/90 backdrop-blur">
          <p className="font-semibold text-white">Feature stack</p>
          <ul className="mt-2 grid gap-2 text-sm text-white/80">
            <li>Agent flows</li>
            <li>Sentiment analysis</li>
            <li>Advanced configuration</li>
          </ul>
        </div>
      }
    >
      <div className="grid gap-3 text-base sm:text-lg">
        <p>Built for automation depth, reliability, and workflow control.</p>
        <ul className="grid gap-2 text-slate-100/90">
          <li className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-indigo-300" />
            <p>Agent Flow: modular intents, guardrails, and escalation paths.</p>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-indigo-300" />
            <p>Sentiment analysis: monitors tone and adapts messaging mid-call.</p>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-indigo-300" />
            <p>Advanced configuration: webhook-driven, CRM-aware, and shipping to production.</p>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-indigo-300" />
            <p>GHL agents outperform ElevenLabs when workflows and automations matter.</p>
          </li>
        </ul>
      </div>
    </Slide>
  );
}
