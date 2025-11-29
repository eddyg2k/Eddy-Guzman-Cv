"use client";

import EmbedSlide from "../components/EmbedSlide";
import Slide from "../components/Slide";

export default function VoiceAICallDemo() {
  return (
    <Slide
      eyebrow="AI Voice Agents"
      title="Call demo summary"
      subtitle="Window cleaning scheduling workflow"
      accent="from-pink-400/70 via-rose-400/60 to-orange-400/50"
      actions={
        <div className="flex flex-col gap-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-100/90 backdrop-blur">
            <p className="font-semibold text-white">Call context</p>
            <p>New customer Eddie Guzman requested a window cleaning appointment.</p>
            <p className="mt-2 text-xs text-white/70">Agent captured service details and scheduled efficiently.</p>
          </div>
          <a
            href="https://www.loom.com/share/8a043524e6a940c7b64c06e32ac6329a"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
          >
            Open Loom in new tab
          </a>
        </div>
      }
    >
      <div className="grid gap-4 text-base sm:text-lg">
        <p>Shows how the agent handles intake, scheduling, and confirmation.</p>
        <EmbedSlide
          url="https://www.loom.com/embed/8a043524e6a940c7b64c06e32ac6329a"
          title="AI voice agent call demo"
          loadingMessage="Loading Loom call demo..."
        />
        <ul className="grid gap-2 text-slate-100/90">
          <li className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-orange-300" />
            <p>Captures address, service type, and timing in natural conversation.</p>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-orange-300" />
            <p>Schedules directly in the workflow—no human intervention.</p>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-orange-300" />
            <p>Explains test-call context clearly while keeping customer flow efficient.</p>
          </li>
        </ul>
      </div>
    </Slide>
  );
}
