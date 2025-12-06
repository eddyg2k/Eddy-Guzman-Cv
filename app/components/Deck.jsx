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
      className="relative flex h-screen w-screen flex-col overflow-hidden bg-gradient-to-b from-black to-zinc-900 text-slate-50"
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative z-10 flex h-full w-full justify-center">
        <div className="flex h-full w-full justify-center px-4">
          {CurrentSlide && <CurrentSlide />}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-6 z-20 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.3em] text-white/60">
        <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
          <span>{String(currentIndex + 1).padStart(2, "0")}</span>
          <span className="text-white/40">/</span>
          <span>{String(slides.length).padStart(2, "0")}</span>
        </div>
      </div>
    </div>
  );
}
