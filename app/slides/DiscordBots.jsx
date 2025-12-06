"use client";

import Slide from "../components/Slide";

export default function DiscordBots() {
  return (
    <Slide
      eyebrow="Other capabilities"
      title="Discord bots"
      subtitle="Recepcionista bot, onboarding flows, and category-level automations"
      accent="from-slate-900/70 via-gray-700/55 to-gray-500/40"
      actions={
        <div className="w-full max-w-4xl h-[500px] overflow-hidden rounded-xl">
          <iframe
            src="https://discord.com/widget?id=1419830884202315788&theme=dark"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            className="w-full h-full"
            title="Discord widget"
            loading="lazy"
            allowFullScreen
          />
        </div>
      }
    >
      <div className="grid gap-3 text-base sm:text-lg">
        <p>Built bots that greet, route, and onboard users directly inside Discord communities.</p>
        <ul className="grid gap-2 text-slate-100/90">
          <li className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-violet-300" />
            <p>Recepcionista bot handles first touch, qualifies, and sends to the right channel.</p>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-violet-300" />
            <p>Onboarding and category-level bots deliver resources on demand.</p>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-violet-300" />
            <p>
              Live presence: <a className="font-semibold underline decoration-white/50" href="https://discord.com/api/guilds/1419830884202315788/widget.json" target="_blank" rel="noreferrer">widget JSON</a>.
            </p>
          </li>
        </ul>
      </div>
    </Slide>
  );
}
