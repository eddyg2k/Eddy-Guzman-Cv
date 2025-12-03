"use client";

import Slide from "../components/Slide";

export default function VoiceAIOverview() {
  return (
    <Slide
      eyebrow="AI Voice Agents"
      title="Overview"
      subtitle="Production agents that handle real customer conversations"
      accent="from-slate-900/70 via-gray-700/55 to-gray-500/40"
      actions={
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-100/90 backdrop-blur">
          <p className="font-semibold text-white">Stats</p>
          <p>70 calls handled this month with 99% positive sentiment.</p>
          <p className="mt-2 text-xs text-white/70">GHL agents outperform ElevenLabs for workflows.</p>
        </div>
      }
    >
      <div className="grid gap-3 text-base sm:text-lg">
        <p>Voice agents are tuned for sales, scheduling, and operations—not just demos.</p>
        <ul className="grid gap-2 text-slate-100/90">
          <li className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-fuchsia-300" />
            <p>Conversation quality monitored with sentiment analysis and call grading.</p>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-fuchsia-300" />
            <p>GHL stack used for reliable hand-offs, webhooks, and CRM context.</p>
          </li>
        </ul>
      </div>
    </Slide>
  );
}
