"use client";

import { motion } from "framer-motion";

// Basic fade‑in animation used by all sections. Sections take up full height and snap into view.
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function Section({ id, children, className = "" }) {
  return (
    <motion.section
      id={id}
      className={`snap-start h-screen relative flex items-center justify-center px-6 md:px-12 ${className}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      variants={fadeIn}
    >
      <div className="section-shell mx-auto flex h-full items-center justify-center">
        {children}
      </div>
    </motion.section>
  );
}