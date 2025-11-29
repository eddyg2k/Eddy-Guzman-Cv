"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import LayeredBackground from "./LayeredBackground";

export default function Deck({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const touchStartRef = useRef(null);
  const animationTimeout = useRef(null);

  const backgrounds = useMemo(() => slides.map((slide) => slide.background), [slides]);

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
    if (currentIndex === 0) {
      const timer = setTimeout(() => navigate(1), 5000);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, navigate]);

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

  return (
    <div
      className="relative h-screen w-screen overflow-hidden text-slate-50"
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <LayeredBackground index={currentIndex} backgrounds={backgrounds} />

      <div className="relative z-10 h-full w-full">
        {slides.map(({ component: SlideComponent, id }, index) => (
          <div
            key={id}
            className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              index === currentIndex
                ? "pointer-events-auto opacity-100 translate-y-0"
                : "pointer-events-none opacity-0 translate-y-8"
            }`}
            aria-hidden={index !== currentIndex}
          >
            <SlideComponent />
          </div>
        ))}
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

