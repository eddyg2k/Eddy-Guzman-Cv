"use client";

import Slide from "../components/Slide";

export default function EddyAIDemo() {
  return (
    <Slide
      eyebrow="Custom GPT Demo"
      title="Eddy AI + n8n email workflow"
      subtitle="Showcase of a custom GPT wired to trigger an n8n webhook that sends a live email"
      accent="from-emerald-500/65 via-emerald-400/60 to-emerald-300/55"
      actions={{
        content: (
          <div className="space-y-2 text-sm text-white/90">
            <p>Join the interactive walkthrough right after the first slide.</p>
            <p>Steps: open the GPT, enter your email, answer a couple of questions, accept the summary, then watch the email arrive.</p>
          </div>
        ),
        ctas: [
          {
            label: "Open Eddy AI GPT",
            href: "https://chatgpt.com/g/g-6928d9f1ce1481918e71cc4e28e3f1ce-eddy-ai",
            target: "_blank",
            rel: "noreferrer",
          },
          {
            label: "See n8n workflow",
            href: "https://n8n.io/",
            target: "_blank",
            rel: "noreferrer",
            variant: "ghost",
          },
        ],
      }}
    >
      <ul className="grid gap-3 text-base leading-relaxed sm:text-lg">
        <li className="flex items-start gap-3">
          <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" />
          <p>
            Custom GPT with proprietary knowledge about my projects, tailored prompts, and guardrails to keep the convo focused on my work.
          </p>
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" />
          <p>
            Connected through a custom action to an n8n webhook that captures the chat output and emails it instantly.
          </p>
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" />
          <p>
            Demo flow: share your email, answer two quick questions, accept the auto-generated summary, and watch the message hit your inbox.
          </p>
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" />
          <p>
            Highlights n8n skills (webhooks, email node, execution logging) plus how I package custom GPTs for hands-on demos about me.
          </p>
        </li>
      </ul>
    </Slide>
  );
}
