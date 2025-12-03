"use client";

import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import LayeredBackground from "./LayeredBackground";

const SCENE_PRESETS = {
  "tilt-in": {
    card: {
      offset: 56,
      exitOffset: -64,
      tilt: 8,
      skew: 2,
      scaleFrom: 0.96,
      exitScale: 0.92,
      blur: 14,
      exitBlur: 18,
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
      exitEase: [0.36, 0, 0.66, -0.16],
    },
    text: {
      offset: 28,
      exitOffset: -36,
      tilt: 6,
      depth: 80,
      blur: 16,
      duration: 0.8,
      ease: "power3.out",
    },
    background: {
      depth: 140,
      tilt: 6,
      skew: 3,
      blur: 10,
      duration: 1,
      ease: "expo.out",
    },
  },
  "parallax-drift": {
    card: {
      offset: 38,
      exitOffset: -42,
      tilt: 4,
      skew: 6,
      scaleFrom: 0.98,
      exitScale: 0.93,
      blur: 10,
      exitBlur: 14,
      duration: 1,
      ease: [0.23, 1, 0.32, 1],
    },
    text: {
      offset: 40,
      exitOffset: -32,
      tilt: 3,
      depth: 120,
      blur: 12,
      duration: 0.85,
      ease: "power4.out",
    },
    background: {
      depth: 220,
      tilt: 10,
      skew: 8,
      blur: 12,
      duration: 1.05,
      ease: "power3.out",
    },
  },
  "split-reveal": {
    card: {
      offset: 26,
      exitOffset: -28,
      tilt: 2,
      skew: 10,
      scaleFrom: 0.97,
      exitScale: 0.9,
      blur: 18,
      exitBlur: 22,
      duration: 0.85,
      ease: [0.19, 1, 0.22, 1],
    },
    text: {
      offset: 18,
      exitOffset: -18,
      tilt: 10,
      depth: 90,
      blur: 18,
      duration: 0.75,
      ease: "power2.out",
    },
    background: {
      depth: 160,
      tilt: 2,
      skew: 16,
      blur: 14,
      duration: 0.9,
      ease: "power2.inOut",
    },
  },
};

const clampIndex = (value, max) => Math.min(Math.max(value, 0), max);

export default function Deck({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const touchStartRef = useRef(null);
  const animationTimeout = useRef(null);
  const previousIndexRef = useRef(0);
  const directionRef = useRef(1);
  const deckRef = useRef(null);
  const textRefs = useRef([]);
  const gsapContext = useRef(null);

  const backgrounds = useMemo(() => slides.map((slide) => slide.background), [slides]);

  const getScene = useCallback(
    (index) => SCENE_PRESETS[slides[index]?.transitionStyle] ?? SCENE_PRESETS["tilt-in"],
    [slides]
  );

  const sceneDurationMs = useCallback(
    (index) => {
      const scene = getScene(index);
      const longest = Math.max(scene.card.duration, scene.text.duration, scene.background.duration);
      return Math.ceil((longest + 0.3) * 1000);
    },
    [getScene]
  );

  const runLayerTimelines = useCallback(
    (activeIndex) => {
      const previousIndex = previousIndexRef.current;
      const direction = directionRef.current || Math.sign(activeIndex - previousIndex) || 1;
      const scene = getScene(activeIndex);

      if (gsapContext.current) {
        gsapContext.current.revert();
      }

      gsapContext.current = gsap.context(() => {
        const backgroundTimeline = gsap.timeline({ defaults: { ease: scene.background.ease } });
        const layers = gsap.utils.toArray(".bg-layer");
        gsap.set(layers, { transformStyle: "preserve-3d" });
        const activeLayer = layers[activeIndex];
        const previousLayer = layers[previousIndex];

        if (previousLayer && previousLayer !== activeLayer) {
          backgroundTimeline.to(
            previousLayer,
            {
              z: -scene.background.depth,
              rotateX: -scene.background.tilt * direction,
              rotateY: scene.background.skew * direction,
              filter: `blur(${scene.background.blur}px)`,
              opacity: 0.35,
              duration: scene.background.duration * 0.55,
            },
            0
          );
        }

        if (activeLayer) {
          backgroundTimeline.fromTo(
            activeLayer,
            {
              z: scene.background.depth,
              scale: 1.05,
              rotateX: scene.background.tilt * direction,
              rotateY: -scene.background.skew * direction,
              filter: `blur(${scene.background.blur}px)`,
              opacity: 0.55,
            },
            {
              z: 0,
              scale: 1,
              rotateX: 0,
              rotateY: 0,
              filter: "blur(0px)",
              opacity: 1,
              duration: scene.background.duration,
            }
          );
          backgroundTimeline.to(
            ".bg-overlay",
            {
              opacity: 0.9,
              duration: scene.background.duration * 0.75,
              ease: "power2.out",
            },
            0
          );
        }

        const textTimeline = gsap.timeline({ defaults: { ease: scene.text.ease } });
        const enteringText = textRefs.current[activeIndex];
        const leavingText = textRefs.current[previousIndex];
        gsap.set(textRefs.current, { transformStyle: "preserve-3d" });

        if (leavingText && leavingText !== enteringText) {
          textTimeline.to(
            leavingText,
            {
              y: scene.text.exitOffset * direction,
              z: -scene.text.depth,
              opacity: 0,
              filter: `blur(${scene.text.blur}px)`,
              duration: scene.text.duration * 0.65,
            },
            0
          );
        }

        if (enteringText) {
          textTimeline.fromTo(
            enteringText,
            {
              y: scene.text.offset * direction,
              z: scene.text.depth,
              opacity: 0,
              rotateX: scene.text.tilt * direction,
              filter: `blur(${scene.text.blur}px)`,
            },
            {
              y: 0,
              z: 0,
              opacity: 1,
              rotateX: 0,
              filter: "blur(0px)",
              duration: scene.text.duration,
            },
            0.05
          );
        }
      }, deckRef);
    },
    [getScene]
  );

  const navigate = useCallback(
    (direction) => {
      if (isAnimating) return;

      setCurrentIndex((prev) => {
        const nextIndex = clampIndex(prev + direction, slides.length - 1);

        if (nextIndex === prev) {
          setIsAnimating(false);
          return prev;
        }

        previousIndexRef.current = prev;
        directionRef.current = direction > 0 ? 1 : -1;
        setIsAnimating(true);
        clearTimeout(animationTimeout.current);
        animationTimeout.current = setTimeout(() => setIsAnimating(false), sceneDurationMs(nextIndex));
        return nextIndex;
      });
    },
    [isAnimating, sceneDurationMs, slides.length]
  );

  useEffect(() => {
    return () => {
      clearTimeout(animationTimeout.current);
      if (gsapContext.current) {
        gsapContext.current.revert();
      }
    };
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

  useEffect(() => {
    runLayerTimelines(currentIndex);
  }, [currentIndex, runLayerTimelines]);

  const handleWheel = useCallback(
    (event) => {
      if (isAnimating) return;
      if (Math.abs(event.deltaY) < 18) return;
      navigate(event.deltaY > 0 ? 1 : -1);
    },
    [isAnimating, navigate]
  );

  const handleTouchStart = (event) => {
    if (isAnimating) return;
    touchStartRef.current = event.touches[0].clientY;
  };

  const handleTouchEnd = (event) => {
    if (isAnimating) return;
    if (touchStartRef.current === null) return;
    const deltaY = touchStartRef.current - event.changedTouches[0].clientY;
    if (Math.abs(deltaY) > 40) {
      navigate(deltaY > 0 ? 1 : -1);
    }
    touchStartRef.current = null;
  };

  const renderableIndices = useMemo(() => {
    const indices = new Set([currentIndex, previousIndexRef.current]);
    return Array.from(indices).filter((index) => index >= 0 && index < slides.length);
  }, [currentIndex, slides.length]);

  return (
    <div
      ref={deckRef}
      className="relative h-screen w-screen overflow-hidden text-slate-50"
      style={{ perspective: 1400 }}
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <LayeredBackground index={currentIndex} backgrounds={backgrounds} />

      <div className="relative z-10 h-full w-full">
        <AnimatePresence mode="sync" custom={directionRef.current}>
          {renderableIndices.map((index) => {
            const { component: SlideComponent, id, transitionStyle } = slides[index];
            const scene = getScene(index);

            return (
              <motion.div
                key={id}
                custom={directionRef.current}
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  transformStyle: "preserve-3d",
                  filter: "drop-shadow(0 20px 80px rgba(0,0,0,0.45))",
                }}
                variants={{
                  initial: (direction) => ({
                    opacity: 0,
                    y: scene.card.offset * direction,
                    rotateX: scene.card.tilt * direction,
                    rotateY: -scene.card.skew * direction,
                    scale: scene.card.scaleFrom,
                    filter: `blur(${scene.card.blur}px)`,
                    transformPerspective: 1400,
                  }),
                  animate: {
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    rotateY: 0,
                    scale: 1,
                    filter: "blur(0px)",
                    transition: { duration: scene.card.duration, ease: scene.card.ease },
                  },
                  exit: (direction) => ({
                    opacity: 0,
                    y: scene.card.exitOffset * direction,
                    rotateX: -scene.card.tilt * direction,
                    rotateY: scene.card.skew * direction,
                    scale: scene.card.exitScale,
                    filter: `blur(${scene.card.exitBlur}px)`,
                    transition: { duration: scene.card.duration * 0.85, ease: scene.card.exitEase ?? scene.card.ease },
                  }),
                }}
                initial="initial"
                animate={index === currentIndex ? "animate" : "exit"}
                exit="exit"
              >
                <div
                  ref={(element) => {
                    textRefs.current[index] = element;
                  }}
                  className="h-full w-full"
                  aria-hidden={index !== currentIndex}
                  data-transition-style={transitionStyle || "tilt-in"}
                >
                  <SlideComponent />
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
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
