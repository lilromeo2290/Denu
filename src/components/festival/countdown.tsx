"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Particles } from "./particles";
import { Reveal } from "./reveal";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

// Festival target date: 26 November 2026, 09:00 GMT
const TARGET = new Date("2026-11-26T09:00:00Z").getTime();

function calc(): TimeLeft {
  const diff = Math.max(0, TARGET - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const UNITS: { key: keyof TimeLeft; label: string }[] = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hours" },
  { key: "minutes", label: "Minutes" },
  { key: "seconds", label: "Seconds" },
];

export function Countdown() {
  // Lazy initializer computes the initial value once on the client; the interval
  // drives all subsequent updates from the client's clock. We suppress hydration
  // warnings on the displayed numbers because the server and client first-render
  // values may differ by a few seconds.
  const [time, setTime] = useState<TimeLeft>(() => calc());

  useEffect(() => {
    const t = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="countdown"
      className="relative py-20 sm:py-28 overflow-hidden bg-forest-deep scroll-anchor"
    >
      {/* Backdrop image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1493514789931-586cb221d7a7?auto=format&fit=crop&w=2000&q=80')",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/90 via-forest-deep/80 to-forest-deep" />
      <div className="absolute -top-1/3 left-1/2 -translate-x-1/2 w-[80vw] h-[60vh] bg-gold/12 blur-[140px] rounded-full" />

      <Particles count={28} />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-gold text-xs font-semibold uppercase tracking-[0.28em]">
            <Sparkles className="w-3.5 h-3.5" />
            Save the Date
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl text-cream font-bold leading-tight text-shadow-soft">
            Next Nugoryiyi Za Festival begins in
          </h2>
        </Reveal>

        {/* Counter grid */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {UNITS.map((u, i) => {
            const value = time[u.key];
            return (
              <motion.div
                key={u.key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.6 }}
                className="relative group"
              >
                <div className="relative glass-card rounded-3xl p-6 sm:p-8 shadow-premium overflow-hidden">
                  <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-gold/20 blur-2xl group-hover:bg-gold/30 transition-colors" />
                  <motion.div
                    key={value}
                    initial={{ opacity: 0, y: 12, scale: 0.92 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="relative font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-gradient-gold tabular-nums"
                    suppressHydrationWarning
                  >
                    {String(value).padStart(2, "0")}
                  </motion.div>
                  <div className="relative mt-2 text-xs sm:text-sm uppercase tracking-[0.3em] text-cream/70 font-semibold">
                    {u.label}
                  </div>
                </div>
                {/* Bottom gold line */}
                <div className="mx-auto mt-2 h-px w-3/4 bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
              </motion.div>
            );
          })}
        </div>

        <Reveal delay={0.3}>
          <p className="mt-10 text-cream/70 text-sm sm:text-base">
            <span className="text-gold font-semibold">26 – 29 November 2026</span>  ·  Denu, Volta Region, Ghana
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#register"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-gold text-forest font-semibold uppercase tracking-wide text-sm shadow-gold-glow hover:scale-105 transition-transform"
            >
              Register Now
            </a>
            <a
              href="#schedule"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-gold/50 text-gold font-semibold uppercase tracking-wide text-sm hover:bg-gold hover:text-forest transition-colors"
            >
              View Schedule
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
