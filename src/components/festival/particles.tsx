"use client";

import { useMemo } from "react";

interface ParticlesProps {
  count?: number;
  color?: string;
  className?: string;
}

/**
 * Lightweight canvas-free floating particle field using absolutely positioned divs.
 * Each particle gets deterministic random position/size/delay so SSR is stable.
 */
export function Particles({
  count = 26,
  color = "rgba(244, 201, 109, 0.55)",
  className = "",
}: ParticlesProps) {
  const particles = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      // deterministic pseudo-random
      const seed = (i * 9301 + 49297) % 233280;
      const rnd = seed / 233280;
      const rnd2 = ((i * 4523 + 12345) % 233280) / 233280;
      const rnd3 = ((i * 7893 + 98765) % 233280) / 233280;
      return {
        left: `${(rnd * 100).toFixed(2)}%`,
        top: `${(rnd2 * 100).toFixed(2)}%`,
        size: 2 + rnd3 * 5,
        delay: `${(rnd2 * 8).toFixed(2)}s`,
        duration: `${(8 + rnd3 * 12).toFixed(2)}s`,
        opacity: 0.25 + rnd * 0.5,
      };
    });
  }, [count]);

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full animate-float"
          style={{
            left: p.left,
            top: p.top,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: color,
            opacity: p.opacity,
            animationDelay: p.delay,
            animationDuration: p.duration,
            boxShadow: `0 0 8px ${color}`,
          }}
        />
      ))}
    </div>
  );
}
