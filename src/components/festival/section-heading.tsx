"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <div
      className={cn(
        "max-w-3xl",
        isCenter && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={cn(
            "inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.25em] mb-5",
            light
              ? "bg-gold/15 text-gold border border-gold/30"
              : "bg-forest/10 text-forest border border-forest/15"
          )}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
          {eyebrow}
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight",
          light ? "text-cream" : "text-forest"
        )}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className={cn(
            "mt-6 text-base sm:text-lg leading-relaxed",
            light ? "text-cream/75" : "text-forest/70"
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
