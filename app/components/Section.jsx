"use client";

import { motion } from "framer-motion";

// Basic fade‑in animation used by all sections. Sections take up full height and snap into view.
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function Section({
  id,
  children,
  className = "",
  shellClassName = "",
  wrap = true,
  ...props
}) {
  return (
    <motion.section
      id={id}
      className={`snap-start relative min-h-screen isolate flex items-start justify-center ${className}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      variants={fadeIn}
      {...props}
    >
      {wrap ? (
        <div
          className={`relative z-20 mx-auto flex h-full w-full max-w-4xl flex-col justify-start gap-10 px-6 pt-10 pb-16 sm:px-8 sm:pt-12 sm:pb-20 lg:max-w-5xl lg:px-12 ${shellClassName}`}
        >
          {children}
        </div>
      ) : (
        children
      )}
    </motion.section>
  );
}
