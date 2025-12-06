"use client";

import { isValidElement } from "react";
import SlideFrame from "./SlideFrame";

export default function Slide({ eyebrow, title, subtitle, children, actions }) {
  const isActionBundle = actions && typeof actions === "object" && "ctas" in actions && !isValidElement(actions);
  const actionList = Array.isArray(actions)
    ? actions
    : isActionBundle && Array.isArray(actions.ctas)
    ? actions.ctas
    : undefined;
  const actionContent = isActionBundle ? actions.content : !Array.isArray(actions) && !isActionBundle ? actions : undefined;

  const renderCTA = (action, index) => {
    const { label, href, onClick, icon, target, rel, variant = "primary" } = action;
    const baseClasses =
      "inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5";
    const primaryClasses = "bg-white/10 hover:bg-white/15";
    const ghostClasses = "border border-white/30 bg-white/5 hover:bg-white/10";

    const content = (
      <span className="flex items-center gap-2">
        {icon}
        {label}
      </span>
    );

    if (href) {
      return (
        <a
          key={index}
          className={`${baseClasses} ${variant === "ghost" ? ghostClasses : primaryClasses}`}
          href={href}
          target={target}
          rel={rel ?? (target ? "noreferrer" : undefined)}
        >
          {content}
        </a>
      );
    }

    return (
      <button
        key={index}
        type="button"
        onClick={onClick}
        className={`${baseClasses} ${variant === "ghost" ? ghostClasses : primaryClasses}`}
      >
        {content}
      </button>
    );
  };

  return (
    <SlideFrame title={title}>
      {eyebrow && <p className="text-xs uppercase tracking-[0.3em] text-slate-200/80">{eyebrow}</p>}
      {subtitle && <p className="text-base text-slate-100/85 sm:text-lg">{subtitle}</p>}
      {actionContent && <div className="space-y-2 text-sm text-white/90">{actionContent}</div>}
      {actionList && actionList.length > 0 && <div className="flex flex-wrap gap-3">{actionList.map(renderCTA)}</div>}
      {actions && !actionList && !actionContent && isValidElement(actions) ? actions : null}
      {children}
    </SlideFrame>
  );
}
