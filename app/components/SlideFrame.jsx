"use client";

export default function SlideFrame({ title, children }) {
  return (
    <div className="flex h-[85vh] w-full flex-col items-center justify-center overflow-hidden">
      <div className="w-full max-w-4xl space-y-6 px-6 py-12">
        {title ? (
          <h1 className="text-3xl font-bold leading-tight text-slate-50 sm:text-4xl">{title}</h1>
        ) : null}
        {children}
      </div>
    </div>
  );
}
