"use client";

import Section from "./Section";

/**
 * DiscordBots slide emphasises educational bots and AI apps for Discord and contrasts Eleven Labs with GoHighLevel.
 */
export default function DiscordBots() {
  return (
    <Section id="discord-bots" className="bg-transparent">
      <div className="max-w-4xl mx-auto space-y-6 px-8 py-12 text-left">
        <h2 className="text-3xl font-bold">Bots &amp; Educational Apps</h2>
        <p className="text-lg opacity-90">
          Beyond call and web‑based agents, I build interactive bots for
          communities on Discord. These bots deliver lessons, answer questions
          and orchestrate workflows—all within the chat experience. They
          integrate with APIs, calendars, CRMs and AI models to create
          frictionless learning environments.
        </p>
        <p className="text-lg opacity-90">
          I experiment with audio synthesis platforms like ElevenLabs to create
          conversational agents. However, GoHighLevel’s models and automation
          capabilities offer superior control for most business use‑cases. My
          bots can switch between TTS engines, but GHL’s native features are
          generally the best choice for production systems.
        </p>
        <p className="text-lg opacity-90">
          <strong>What’s next?</strong> I’m developing educational apps that blend
          voice agents, interactive exercises and AI coaching—so learners can
          practise English or automation skills hands‑free, anywhere.
        </p>
      </div>
    </Section>
  );
}