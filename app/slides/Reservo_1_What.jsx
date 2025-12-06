"use client";

import SlideFrame from "../components/SlideFrame";

export default function ReservoWhat() {
  return (
    <SlideFrame title="What it is">
      <p className="text-xs uppercase tracking-[0.3em] text-slate-200/80">Reservo</p>
      <p className="text-base text-slate-100/85 sm:text-lg">Reservo.live — voice AI for restaurants.</p>
      <div className="space-y-2 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-100/90 backdrop-blur">
        <p className="font-semibold text-white">Core promise</p>
        <ul className="grid gap-2 list-disc pl-5">
          <li>Real-time ordering and reservations.</li>
          <li>Menu management without human intervention.</li>
          <li>AI speaks through WebSockets, not phone lines.</li>
        </ul>
      </div>
      <p className="text-base text-slate-100/90 sm:text-lg">Built for restaurants that need AI to act like staff and adapt instantly.</p>
      <ul className="grid gap-3 text-base text-slate-100/90 sm:text-lg">
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
    </SlideFrame>
  );
}
