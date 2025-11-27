"use client";

import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
};

export default function Section({ id, children, className = "", sectionRef, ...props }) {
  return (
    <motion.section
      id={id}
      ref={sectionRef}
      className={`relative flex min-h-screen items-center justify-center px-6 md:px-12 ${className}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      variants={fadeIn}
      {...props}
    >
      <div className="section-shell mx-auto flex h-full items-center justify-center">{children}</div>
    </motion.section>
  );
}
