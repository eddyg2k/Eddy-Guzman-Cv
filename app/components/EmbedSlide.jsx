"use client";

import { useEffect, useState } from "react";

export default function EmbedSlide({ url, title, loadingMessage = "Loading demo..." }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isLoaded) {
        setLoadError(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [isLoaded]);

  if (loadError) {
    return (
      <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 p-6 text-center shadow-inner">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/5 text-white/70 ring-1 ring-white/20">
          <span className="text-2xl">⚡</span>
        </div>
        <p className="mt-4 text-base font-semibold text-white">Demo unavailable in embed</p>
        <p className="mt-2 text-sm text-white/70">Click below to open the full experience in a new tab.</p>
        <div className="mt-4 flex justify-center">
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
          >
            Open full demo
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-black/50 shadow-inner">
      {!isLoaded && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-slate-900/60 px-4 text-center text-white">
          <div className="h-10 w-10 animate-spin rounded-full border-2 border-white/30 border-t-white" />
          <p className="text-sm sm:text-base text-white/90">{loadingMessage}</p>
        </div>
      )}
      <div className="w-full max-w-4xl h-[500px] overflow-hidden rounded-xl">
        <iframe
          src={url}
          title={title}
          loading="lazy"
          allow="camera; microphone; autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
          onLoad={() => setIsLoaded(true)}
          onError={() => setLoadError(true)}
        />
      </div>
    </div>
  );
}
