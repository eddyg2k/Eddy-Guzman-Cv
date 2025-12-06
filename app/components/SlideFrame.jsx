"use client";

export default function SlideFrame({ title, children }) {
  return (
    <div className="w-full max-w-4xl px-6 py-12 space-y-6">
      {title ? (
        <h1 className="text-3xl font-bold leading-tight text-slate-50 sm:text-4xl">{title}</h1>
      ) : null}
      {children}
    </div>
  );
}
