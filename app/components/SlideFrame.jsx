"use client";

export default function SlideFrame({ title, children }) {
  return (
    <div className="flex h-full max-h-full w-full max-w-4xl flex-col justify-center gap-5 px-4 py-6 text-balance sm:px-6 sm:py-8 md:px-10 md:py-10">
      {title ? <h1 className="text-3xl font-bold leading-tight text-slate-50 sm:text-4xl">{title}</h1> : null}
      <div className="flex flex-col gap-4 overflow-hidden text-base leading-relaxed text-slate-100/90 sm:gap-5 sm:text-lg">
        {children}
      </div>
    </div>
  );
}
