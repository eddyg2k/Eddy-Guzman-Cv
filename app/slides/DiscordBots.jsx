"use client";

import Slide from "../components/Slide";

export default function DiscordBots() {
  return (
    <Slide
      eyebrow="Other capabilities"
      title="Discord bots"
      subtitle="Recepcionista bot, onboarding flows, and category-level automations"
      accent="from-violet-400/70 via-purple-500/60 to-indigo-500/50"
      actions={
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-inner">
          <div className="aspect-video">
            <iframe
              src="https://discord.com/widget?id=613425648685547541&theme=dark"
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
              className="h-full w-full"
              title="Discord widget"
              allowTransparency
            />
          </div>
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
        </ul>
      </div>
    </Slide>
  );
}
