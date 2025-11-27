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
      className={`snap-start relative h-screen isolate flex items-center justify-center ${className}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      variants={fadeIn}
      {...props}
    >
      {wrap ? (
        <div
          className={`relative z-20 mx-auto flex w-full max-w-4xl flex-col gap-6 px-6 py-12 sm:px-10 sm:py-16 md:max-w-3xl lg:max-w-4xl lg:px-12 lg:py-20 ${shellClassName}`}
        >
          {children}
        </div>
      ) : (
        children
      )}
    </motion.section>
  );
}
