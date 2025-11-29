"use client";

export default function Slide({ eyebrow, title, subtitle, children, actions, accent = "from-cyan-400/70 via-indigo-400/60 to-purple-500/60" }) {
  const hasActions = Boolean(actions);

  return (
    <div className="relative flex h-screen w-screen items-center justify-center px-6 sm:px-10">
      <div className="relative w-full max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 px-6 py-8 shadow-2xl backdrop-blur-xl sm:px-10 sm:py-12">
        <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accent} opacity-50`} />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.08),transparent_30%)]" />
        <div className="relative flex flex-col gap-6 sm:gap-8">
          {(eyebrow || title || subtitle) && (
            <div className="flex flex-col gap-2">
              {eyebrow && <p className="text-sm uppercase tracking-[0.25em] text-sky-200/80">{eyebrow}</p>}
              {title && (
                <h1 className="text-3xl font-semibold leading-tight text-slate-50 sm:text-4xl lg:text-5xl">
                  {title}
                </h1>
              )}
              {subtitle && <p className="max-w-3xl text-lg text-slate-200/80 sm:text-xl">{subtitle}</p>}
            </div>
          )}

          <div
            className={`grid gap-6 sm:gap-8 ${hasActions ? "lg:grid-cols-[1.1fr_0.9fr]" : "lg:grid-cols-1"} lg:items-start`}
          >
            <div className="flex flex-col gap-4 text-base leading-relaxed text-slate-100/90 sm:text-lg">
              {children}
            </div>
            {actions && <div className="flex flex-col gap-4 lg:pl-6">{actions}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
