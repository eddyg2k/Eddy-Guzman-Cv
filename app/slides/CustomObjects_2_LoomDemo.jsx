"use client";

import Slide from "../components/Slide";

export default function CustomObjectsLoomDemo() {
  return (
    <Slide
      eyebrow="Custom Objects"
      title="Loom demo"
      subtitle="Deep dive on custom objects in action"
      accent="from-orange-400/70 via-amber-400/60 to-yellow-400/50"
      actions={
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-100/90 backdrop-blur">
          <p className="font-semibold text-white">Live walkthrough</p>
          <p>Embedded Loom shows the relational setup for contractors.</p>
        </div>
      }
    >
      <div className="grid gap-4 text-base sm:text-lg">
        <p>Demonstrates why relational data structures make automations reliable.</p>
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-inner">
          <div className="aspect-video">
            <iframe
              src="https://www.loom.com/embed/c53ea554caaf4aaf81f1b01c50ff0c0c"
              allowFullScreen
              className="h-full w-full"
              title="Custom objects Loom demo"
            />
          </div>
        </div>
        <ul className="grid gap-2 text-slate-100/90">
          <li className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-amber-300" />
            <p>Shows multi-relationship organization and how it drives contractor workflows.</p>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-amber-300" />
            <p>Highlights why custom objects replace static spreadsheets.</p>
          </li>
        </ul>
      </div>
    </Slide>
  );
}
