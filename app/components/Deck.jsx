"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export default function Deck({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const touchStartRef = useRef(null);
  const animationTimeout = useRef(null);

  const navigate = useCallback(
    (direction) => {
      setCurrentIndex((prev) => {
        const nextIndex = Math.min(Math.max(prev + direction, 0), slides.length - 1);
        if (nextIndex !== prev) {
          setIsAnimating(true);
          clearTimeout(animationTimeout.current);
          animationTimeout.current = setTimeout(() => setIsAnimating(false), 750);
        }
        return nextIndex;
      });
    },
    [slides.length]
  );

  useEffect(() => {
    return () => clearTimeout(animationTimeout.current);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowDown" || event.key === "PageDown") {
        event.preventDefault();
        navigate(1);
      }
      if (event.key === "ArrowUp" || event.key === "PageUp") {
        event.preventDefault();
        navigate(-1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigate]);

  const handleWheel = useCallback(
    (event) => {
      if (isAnimating) return;
      if (Math.abs(event.deltaY) < 18) return;
      navigate(event.deltaY > 0 ? 1 : -1);
    },
    [isAnimating, navigate]
  );

  const handleTouchStart = (event) => {
    touchStartRef.current = event.touches[0].clientY;
  };

  const handleTouchEnd = (event) => {
    if (touchStartRef.current === null) return;
    const deltaY = touchStartRef.current - event.changedTouches[0].clientY;
    if (Math.abs(deltaY) > 40) {
      navigate(deltaY > 0 ? 1 : -1);
    }
    touchStartRef.current = null;
  };

  const CurrentSlide = slides[currentIndex];

  return (
    <div
      className="relative flex h-dvh w-screen items-center justify-center overflow-hidden bg-gradient-to-b from-black via-zinc-900 to-zinc-950 text-slate-50"
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="absolute inset-0 opacity-40" aria-hidden>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(94,234,212,0.08),transparent_38%),radial-gradient(circle_at_80%_60%,rgba(94,234,212,0.06),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(59,130,246,0.05),transparent_42%)]" />
      </div>

      <div className="relative z-10 flex h-[90vh] max-h-[90vh] w-full max-w-6xl items-center justify-center px-4 sm:px-8">
        <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur">
          <div className="flex h-full w-full items-center justify-center p-6 sm:p-10">
            {CurrentSlide && <CurrentSlide />}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-6 z-20 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.3em] text-white/60">
        <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 shadow-lg backdrop-blur">
          <span>{String(currentIndex + 1).padStart(2, "0")}</span>
          <span className="text-white/40">/</span>
          <span>{String(slides.length).padStart(2, "0")}</span>
        </div>
      </div>
    </div>
  );
}
