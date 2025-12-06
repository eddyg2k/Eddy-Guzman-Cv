"use client";

import { isValidElement } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Slide({
  eyebrow,
  title,
  subtitle,
  headingIcon,
  headingAvatar,
  headingAdornment,
  children,
  actions,
  accent = "from-cyan-400/70 via-indigo-400/60 to-purple-500/60",
}) {
  const isActionBundle = actions && typeof actions === "object" && "ctas" in actions && !isValidElement(actions);
  const actionList = Array.isArray(actions)
    ? actions
    : isActionBundle && Array.isArray(actions.ctas)
    ? actions.ctas
    : undefined;
  const actionContent = isActionBundle ? actions.content : !Array.isArray(actions) && !isActionBundle ? actions : undefined;
  const hasActions = Boolean(actionList?.length) || Boolean(actionContent);

  const accentGlow = `bg-gradient-to-br ${accent}`;
  const actionAccent = `bg-gradient-to-r ${accent}`;

  const renderCTA = (action, index) => {
    const { label, href, onClick, icon, variant = "primary", target, rel } = action;
    const isGhost = variant === "ghost";

    const baseClasses = classNames(
      "group/action relative inline-flex items-center gap-2 overflow-hidden rounded-full px-5 py-3 text-sm font-semibold",
      "shadow-[0_15px_45px_-20px_rgba(0,0,0,0.55)] transition duration-300 ease-out transform-gpu",
      "hover:-translate-y-1 active:translate-y-0.5 active:scale-[0.99]",
      isGhost
        ? "border border-white/40 bg-white/5 text-white backdrop-blur before:absolute before:inset-0 before:bg-white/5"
        : `${actionAccent} text-white before:absolute before:inset-0 before:bg-white/10 before:opacity-0 before:transition before:duration-300 before:ease-out hover:before:opacity-100`,
    );

    const content = (
      <span className="relative flex items-center gap-2">
        {icon && <span className="flex h-5 w-5 items-center justify-center text-base">{icon}</span>}
        {label}
        <span className="relative h-1.5 w-1.5 rounded-full bg-white/70 shadow-[0_0_0_4px_rgba(255,255,255,0.08)]" />
      </span>
    );

    if (href) {
      return (
        <a key={index} href={href} target={target} rel={rel ?? (target ? "noreferrer" : undefined)} className={baseClasses}>
          {content}
        </a>
      );
    }

    return (
      <button key={index} type="button" onClick={onClick} className={baseClasses}>
        {content}
      </button>
    );
  };

  const headingMedia = headingAdornment || headingAvatar || headingIcon;

  return (
    <div className="relative flex w-full items-center justify-center px-6 py-10 sm:px-10 sm:py-12">
      <div className="group relative w-full max-w-[79.2rem] overflow-hidden rounded-3xl bg-transparent px-6 py-8 sm:px-10 sm:py-12">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.14),transparent_36%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.1),transparent_32%)]" />
        <div className="pointer-events-none absolute inset-8 -z-20 rounded-[2.5rem] bg-black/25 blur-3xl" />
        <div className="absolute inset-0 -z-10 rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-xl transition duration-700 ease-out group-hover:shadow-[0_30px_80px_-45px_rgba(0,0,0,0.9)]" />
        <div className={`pointer-events-none absolute inset-0 -z-20 ${accentGlow} opacity-60 blur-3xl`} />
        <div className="pointer-events-none absolute inset-0 -z-30 bg-gradient-to-br from-white/10 via-white/5 to-white/0" />

        <div className="relative isolate grid gap-6 sm:gap-8">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(100%_120%_at_10%_10%,rgba(255,255,255,0.08),transparent_35%),radial-gradient(120%_90%_at_80%_0%,rgba(255,255,255,0.06),transparent_30%)]" />
          <div className="absolute inset-0 -z-20 rounded-[2.5rem] border border-white/5 opacity-0 transition duration-700 group-hover:opacity-100" />

          {(eyebrow || title || subtitle || headingMedia) && (
            <div className="flex w-full justify-center">
              <div className="relative w-full max-w-[61.6rem] overflow-hidden rounded-2xl border border-white/10 bg-white/10 px-6 py-5 text-center shadow-[0_25px_80px_-50px_rgba(0,0,0,0.95)] ring-1 ring-white/15 backdrop-blur-xl sm:px-8 sm:py-7">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.1),transparent_28%)]" />
                <div className="pointer-events-none absolute inset-px rounded-[1.1rem] border border-white/5 bg-white/5 opacity-20" />

                <div className="relative flex flex-col items-center gap-3">
                  {headingMedia && (
                    <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-white/10 ring-1 ring-white/25 shadow-[0_10px_35px_-18px_rgba(0,0,0,0.9)] backdrop-blur">
                      {typeof headingMedia === "string" ? (
                        <span className="text-2xl font-semibold text-white/90" aria-hidden>
                          {headingMedia}
                        </span>
                      ) : (
                        headingMedia
                      )}
                    </div>
                  )}

                  <div className="flex max-w-3xl flex-col items-center gap-2">
                    {eyebrow && <p className="text-xs uppercase tracking-[0.38em] text-sky-200/85 sm:text-sm">{eyebrow}</p>}
                    {title && (
                      <h1 className="text-3xl font-extrabold leading-tight text-slate-50 sm:text-4xl lg:text-5xl">
                        {title}
                      </h1>
                    )}
                    {subtitle && <p className="max-w-2xl text-base text-slate-100/85 sm:text-lg">{subtitle}</p>}
                  </div>
                </div>
              </div>
            </div>
          )}

          <div
            className={classNames(
              "grid gap-6 sm:gap-8 lg:items-start",
              hasActions ? "lg:grid-cols-[1.1fr_0.9fr]" : "lg:grid-cols-1",
              "transform-gpu transition duration-700 ease-out group-hover:rotate-x-1 group-hover:rotate-y-1 group-hover:-translate-y-1 group-active:rotate-x-0 group-active:rotate-y-0",
            )}
          >
            <div className="flex flex-col gap-4 text-base leading-relaxed text-slate-100/90 sm:text-lg">
              {children}
            </div>
            {hasActions && (
              <div className="flex flex-col gap-4 lg:pl-6">
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 ring-1 ring-white/5 backdrop-blur-lg">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(255,255,255,0.1),transparent_30%),radial-gradient(circle_at_100%_0%,rgba(255,255,255,0.08),transparent_25%)]" />
                  <div className="relative flex flex-col gap-3">
                    {actionContent && (
                      <div className="space-y-3 text-sm text-white/90 [&_a]:inline-flex [&_a]:items-center [&_a]:gap-2 [&_a]:rounded-full [&_a]:bg-white/5 [&_a]:px-5 [&_a]:py-3 [&_a]:text-sm [&_a]:font-semibold [&_a]:text-white [&_a]:backdrop-blur [&_a]:transition [&_a]:duration-300 hover:[&_a]:-translate-y-1 hover:[&_a]:bg-white/10 active:[&_a]:translate-y-0.5">
                        {actionContent}
                      </div>
                    )}
                    {actionList && actionList.length > 0 && (
                      <div className="relative flex flex-wrap gap-3">
                        {actionList.map(renderCTA)}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
