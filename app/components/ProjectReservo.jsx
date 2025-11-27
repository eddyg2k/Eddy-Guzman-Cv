"use client";

import Section from "./Section";

/**
 * ProjectReservo showcases the Reservo voice AI project.
 * It emphasises that this demo is available and highlights the benefits of direct AI communication via websockets.
 */
export default function ProjectReservo() {
  return (
    <Section id="reservo-demo" className="bg-transparent">
      <div className="max-w-4xl mx-auto space-y-6 px-8 py-12 text-left">
        <h2 className="text-3xl font-bold">Project: Reservo Voice AI</h2>
        <p className="text-lg opacity-90">
          Reservo is an AI‑powered voice agent system designed for restaurants, service
          businesses and multi‑location operations. It handles calls 24/7, books
          appointments, collects customer data, remembers callers, sends
          confirmations and updates CRM pipelines.
        </p>
        <p className="text-lg opacity-90">
          This demo is the only voice AI currently available. All other
          prototypes have been deprecated. Reservo illustrates how you can
          interact directly with an AI agent via websockets—no phones or Twilio
          required. The browser button connects straight to the agent using real‑time
          audio streams for maximum responsiveness.
        </p>
        <p className="text-lg opacity-90">
          <strong>Live demo:</strong> <a
            href="https://reservo.live"
            className="text-blue-300 underline"
            target="_blank"
            rel="noopener noreferrer"
          >reservo.live</a>
        </p>
        <div className="text-sm opacity-70 italic">
          Note: This demo is for illustration purposes only. It shows the
          fundamentals of a voice AI booking system but does not contain
          proprietary client data.
        </div>
      </div>
    </Section>
  );
}