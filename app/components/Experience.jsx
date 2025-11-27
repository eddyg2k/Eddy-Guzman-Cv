"use client";

import Section from "./Section";

/**
 * Experience slide summarises your professional capabilities and strengths.
 */
export default function Experience() {
  return (
    <Section id="experience" className="bg-transparent">
      <div className="max-w-3xl space-y-6 px-8 py-12 text-left">
        <h2 className="text-4xl font-bold">Experience Overview</h2>
        <p className="text-lg opacity-90">
          I design, build and deploy operational systems that automate intake, handle
          customer interactions, manage internal communication, and reduce manual work.
          My goal is to scale processes without sacrificing quality.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-lg opacity-90">
          <li>Workflow strategy &amp; architecture</li>
          <li>Voice AI (custom logic, memory, actions, pipelines)</li>
          <li>CRM automations (GHL expert)</li>
          <li>Funnel building &amp; revenue engines</li>
          <li>Data flows &amp; API orchestration</li>
          <li>Technical troubleshooting &amp; system debugging</li>
          <li>AI‑assisted operations (bots, agents, internal tools)</li>
        </ul>
        <p className="text-lg opacity-90">
          You’re not hiring someone who “sets up GoHighLevel”—you’re hiring a systems builder.
        </p>
      </div>
    </Section>
  );
}