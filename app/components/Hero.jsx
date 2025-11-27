"use client";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { motion } from "framer-motion";
import { useMemo, useRef } from "react";
import { TextureLoader } from "three";
import logoTexture from "../../media/no backg.svg";
import Section from "./Section";

function FloatingLogo() {
  const logoSource = typeof logoTexture === "string" ? logoTexture : logoTexture?.src || "";
  const texture = useLoader(TextureLoader, logoSource);
  const meshRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.sin(t / 6) * 0.08;
      meshRef.current.position.y = Math.sin(t / 2.5) * 0.12;
    }
  });

  const materialProps = useMemo(
    () => ({
      transparent: true,
      opacity: 0.12,
      depthWrite: false
    }),
    []
  );

  return (
    <Float speed={0.7} rotationIntensity={0.2} floatIntensity={0.4}>
      <mesh ref={meshRef} position={[0, 0, -2]} scale={[5, 3.5, 1]}>
        <planeGeometry args={[2.8, 1.9, 32, 32]} />
        <meshStandardMaterial map={texture} {...materialProps} />
      </mesh>
    </Float>
  );
}

export default function Hero() {
  return (
    <Section id="hero" className="relative isolate">
      <div className="absolute inset-0 z-0 bg-hero-grid opacity-80" aria-hidden />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-white/5 via-transparent to-black" aria-hidden />
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 4], fov: 45 }} className="!w-full !h-full">
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 3, 4]} intensity={0.6} />
          <FloatingLogo />
        </Canvas>
      </div>

      <div className="relative z-10 flex w-full flex-col gap-6 lg:gap-8">
        <div className="flex flex-col gap-4 text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xs uppercase tracking-[0.35em] text-slate-300"
          >
            Eddy Guzman
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="max-w-4xl font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            Automation Engineer &amp; AI Systems Builder
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55 }}
            className="max-w-2xl text-lg text-slate-200"
          >
            Specialist in GoHighLevel automations, Zapier and n8n orchestration, AI agents, and precision workflow design
            that keeps revenue teams moving.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75 }}
          className="flex flex-wrap gap-3 text-sm text-slate-200"
        >
          {["GHL Workflows", "AI Voice & Chat Agents", "Zapier + n8n", "Architecture", "Workflow Strategy"].map(
            (item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm"
              >
                {item}
              </span>
            )
          )}
        </motion.div>
      </div>
    </Section>
  );
}
