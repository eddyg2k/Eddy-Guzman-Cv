"use client";

import Section from "./Section";

/**
 * ThankYou slide marks the end of the deck. Scroll stops here.
 */
export default function ThankYou() {
  return (
    <Section id="thank-you" className="bg-transparent">
      <div className="flex h-full w-full flex-col items-center justify-center text-center px-8 py-12 space-y-6">
        <h2 className="text-4xl font-bold">Thank You</h2>
        <p className="text-lg opacity-90 max-w-3xl">
          Thanks for reviewing my work. If you need a systems architect who can
          design, automate, debug, teach and communicate with clarity—let’s talk.
        </p>
      </div>
    </Section>
  );
}