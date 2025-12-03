"use client";

import Slide from "../components/Slide";

export default function ReservoWhat() {
  return (
    <Slide
      eyebrow="Reservo"
      title="What it is"
      subtitle="Reservo.live — voice AI for restaurants"
      accent="from-slate-900/70 via-gray-700/55 to-gray-500/40"
      actions={
        <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-100/90 backdrop-blur">
          <p className="font-semibold text-white">Core promise</p>
          <ul className="grid gap-2">
            <li>Real-time ordering and reservations.</li>
            <li>Menu management without human intervention.</li>
            <li>AI speaks through WebSockets, not phone lines.</li>
          </ul>
        </div>
      }
    >
      <div className="grid gap-3 text-base sm:text-lg">
        <p>Built for restaurants that need AI to act like staff and adapt instantly.</p>
        <ul className="grid gap-2 text-slate-100/90">
          <li className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" />
            <div>
              <p className="font-semibold text-white">Reservo.live</p>
              <p>Live site that routes guests directly to an AI host.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" />
            <div>
              <p className="font-semibold text-white">Voice AI for restaurants</p>
              <p>Handles orders, reservations, and menu updates in real time.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" />
            <div>
              <p className="font-semibold text-white">Direct AI communication</p>
              <p>No Twilio or phone numbers—pure WebSocket connectivity to the agent.</p>
            </div>
          </li>
        </ul>
      </div>
    </Slide>
  );
}
