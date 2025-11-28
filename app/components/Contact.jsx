"use client";

import Section from "./Section";

/**
 * Contact slide for your CV deck.
 */
export default function Contact() {
  return (
    <Section id="contact" className="bg-transparent">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6 py-10 text-left">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-300">Contact</p>
          <h2 className="font-display text-4xl font-semibold text-white">Let’s build</h2>
          <p className="text-lg text-slate-200/85">
            Ready to discuss automation, AI systems or education? Reach out and let’s start building together.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="glass-card rounded-2xl border border-white/5 bg-white/5 p-6 shadow-xl">
            <p className="text-sm uppercase tracking-[0.25em] text-slate-300">Direct line</p>
            <div className="mt-3 space-y-2 text-lg text-slate-100">
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:EDUARDOGUZMANQ@GMAIL.COM" className="text-highlight underline">
                  EDUARDOGUZMANQ@GMAIL.COM
                </a>
              </p>
              <p>
                <strong>Phone:</strong> <a href="tel:+529999053013" className="text-highlight underline">+52 999-905-3013</a>
              </p>
              <p>
                <strong>Location:</strong> Mérida, Yucatán, Mexico
              </p>
            </div>
            <a
              href="mailto:EDUARDOGUZMANQ@GMAIL.COM"
              className="btn-primary mt-4 inline-flex w-full justify-center text-center"
            >
              Send an email
            </a>
          </div>

          <div className="glass-card rounded-2xl border border-white/5 bg-gradient-to-br from-white/5 via-white/5 to-accent/10 p-6 shadow-xl">
            <p className="text-sm uppercase tracking-[0.25em] text-slate-300">Project fit</p>
            <p className="mt-2 text-sm text-slate-200/85">
              Every engagement starts with mapping your stack and desired outcomes. Tell me the tools you use, where it hurts, and the revenue motion you’re aiming for.
            </p>
            <div className="mt-4 space-y-2 text-sm text-slate-200/85">
              <p>• Response within one business day</p>
              <p>• Collaborative planning doc after first call</p>
              <p>• Clear scope before we automate</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
