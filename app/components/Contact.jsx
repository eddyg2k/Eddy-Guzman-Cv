"use client";

import Section from "./Section";

/**
 * Contact slide for your CV deck.
 */
export default function Contact() {
  return (
    <Section id="contact" className="bg-transparent">
      <div className="max-w-3xl mx-auto space-y-6 px-8 py-12 text-left">
        <h2 className="text-3xl font-bold">Contact</h2>
        <p className="text-lg opacity-90">
          Ready to discuss automation, AI systems or education? Reach out and
          let’s start building together.
        </p>
        <p className="text-lg opacity-90">
          <strong>Email:</strong> <a
            href="mailto:eddy@example.com"
            className="text-blue-300 underline"
          >eddy@example.com</a>
        </p>
        <p className="text-lg opacity-90">
          <strong>Phone:</strong> +52 XXX XXX XXXX
        </p>
        <p className="text-lg opacity-90">
          <strong>Location:</strong> Mérida, Yucatán, Mexico
        </p>
      </div>
    </Section>
  );
}