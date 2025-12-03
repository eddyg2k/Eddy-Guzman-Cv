"use client";

import Slide from "../components/Slide";

export default function ReservoWhy() {
  return (
    <Slide
      eyebrow="Reservo"
      title="Why it’s unique"
      subtitle="Operational AI built for restaurants"
      accent="from-slate-900/70 via-gray-700/55 to-gray-500/40"
      actions={
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-100/90 backdrop-blur">
          <p className="font-semibold text-white">Automation level</p>
          <p>Showcases a "90% automated restaurant operations" workflow.</p>
        </div>
      }
    >
      <ul className="grid gap-3 text-base sm:text-lg">
        <li className="flex items-start gap-3">
          <span className="mt-1 h-2 w-2 rounded-full bg-lime-300" />
          <div>
            <p className="font-semibold text-white">Dynamic menus from inventory</p>
            <p>Inventory changes trigger automatic menu updates across the AI and customer surfaces.</p>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-1 h-2 w-2 rounded-full bg-lime-300" />
          <div>
            <p className="font-semibold text-white">POS integration</p>
            <p>Orders land in the POS with mapped modifiers, items, and table routing.</p>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-1 h-2 w-2 rounded-full bg-lime-300" />
          <div>
            <p className="font-semibold text-white">Staff-level conversations</p>
            <p>Agents speak like trained staff, handle objections, and upsell without scripts.</p>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-1 h-2 w-2 rounded-full bg-lime-300" />
          <div>
            <p className="font-semibold text-white">Automation demo</p>
            <p>Complete walk-through of a 90% automated restaurant operation.</p>
          </div>
        </li>
      </ul>
    </Slide>
  );
}
