"use client";

import SlideFrame from "../components/SlideFrame";

export default function EddyAIDemo() {
  return (
    <SlideFrame title="Eddy AI + n8n email workflow">
      <p className="text-xs uppercase tracking-[0.3em] text-slate-200/80">Custom GPT Demo</p>
      <p className="text-base text-slate-100/85 sm:text-lg">
        Showcase of a custom GPT wired to trigger an n8n webhook that sends a live email.
      </p>
      <div className="space-y-2 text-sm text-white/90">
        <p>Join the interactive walkthrough right after the first slide.</p>
        <p>Steps: open the GPT, enter your email, answer a couple of questions, accept the summary, then watch the email arrive.</p>
      </div>
      <div className="flex flex-wrap gap-3">
        <a
          className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15"
          href="https://chatgpt.com/g/g-6928d9f1ce1481918e71cc4e28e3f1ce-eddy-ai"
          target="_blank"
          rel="noreferrer"
        >
          Open Eddy AI GPT
        </a>
        <a
          className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10"
          href="https://n8n.io/"
          target="_blank"
          rel="noreferrer"
        >
          See n8n workflow
        </a>
      </div>
      <ul className="space-y-3 text-base leading-relaxed text-slate-100/90 sm:text-lg">
        <li className="flex items-start gap-3">
          <span className="mt-1 h-2 w-2 rounded-full bg-gray-300" />
          <p>Custom GPT with proprietary knowledge about my projects, tailored prompts, and guardrails to keep the convo focused on my work.</p>
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-1 h-2 w-2 rounded-full bg-gray-300" />
          <p>Connected through a custom action to an n8n webhook that captures the chat output and emails it instantly.</p>
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-1 h-2 w-2 rounded-full bg-gray-300" />
          <p>Demo flow: share your email, answer two quick questions, accept the auto-generated summary, and watch the message hit your inbox.</p>
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-1 h-2 w-2 rounded-full bg-gray-300" />
          <p>Highlights n8n skills (webhooks, email node, execution logging) plus how I package custom GPTs for hands-on demos about me.</p>
        </li>
      </ul>
    </SlideFrame>
  );
}
