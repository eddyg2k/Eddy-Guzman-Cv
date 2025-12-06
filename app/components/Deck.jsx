"use client";

import LayeredBackground from "./LayeredBackground";

export default function Deck({ slides }) {
  return (
    <div className="flex w-full flex-col text-slate-50">
      {slides.map(({ component: SlideComponent, id, background }, index) => (
        <section
          key={id}
          className="relative isolate w-full overflow-hidden"
          aria-label={`Slide ${index + 1}`}
        >
          <div className="absolute inset-0">
            <LayeredBackground index={0} backgrounds={[background]} />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-28">
            <SlideComponent />
          </div>
        </section>
      ))}
    </div>
  );
}
