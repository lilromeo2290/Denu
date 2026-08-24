"use client";

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type Variant = "gold" | "outline-gold" | "solid-forest" | "ghost-gold" | "glass";
type Size = "sm" | "md" | "lg";

interface GoldButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  icon?: ReactNode;
}

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-xs sm:text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

const variants: Record<Variant, string> = {
  gold: "bg-gradient-gold text-forest shadow-gold-glow hover:shadow-[0_18px_50px_-8px_rgba(232,193,90,0.65)]",
  "outline-gold":
    "border border-gold/60 text-gold hover:bg-gold hover:text-forest bg-transparent",
  "solid-forest":
    "bg-forest text-cream hover:bg-forest-deep shadow-premium",
  "ghost-gold":
    "text-gold hover:bg-gold/10 bg-transparent",
  glass:
    "glass-card text-cream hover:bg-white/15 border-gold-soft",
};

export const GoldButton = forwardRef<HTMLButtonElement, GoldButtonProps>(
  ({ className, variant = "gold", size = "md", children, icon, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.035, y: -2 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 380, damping: 22 }}
        className={cn(
          "group relative inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide uppercase transition-all duration-300 overflow-hidden",
          sizes[size],
          variants[variant],
          className
        )}
        {...props}
      >
        {/* sheen */}
        <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/35 to-transparent" />
        <span className="relative z-10">{children}</span>
        {icon && <span className="relative z-10 inline-flex">{icon}</span>}
      </motion.button>
    );
  }
);
GoldButton.displayName = "GoldButton";

interface SectionShellProps {
  id?: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
}

export function SectionShell({
  id,
  children,
  className,
  dark = false,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-anchor relative py-20 sm:py-28 lg:py-32 overflow-hidden",
        dark ? "bg-forest text-cream" : "bg-cream text-forest",
        className
      )}
    >
      {children}
    </section>
  );
}
