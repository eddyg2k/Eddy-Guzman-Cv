"use client";

import { motion } from "framer-motion";

/**
 * LoomVideo embeds a Loom video inside a responsive container with a slight motion fade.
 */
export default function LoomVideo({ url, title }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="soft-border overflow-hidden rounded-2xl bg-white/5 shadow-2xl"
    >
      <div className="aspect-video w-full bg-black/60">
        <iframe
          src={url}
          title={title}
          allow="autoplay; encrypted-media"
          allowFullScreen
          loading="lazy"
          className="h-full w-full"
        />
      </div>
    </motion.div>
  );
}