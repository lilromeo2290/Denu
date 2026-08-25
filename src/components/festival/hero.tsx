"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Calendar, MapPin, Users, Sparkles, ChevronLeft } from "lucide-react";
import { Particles } from "./particles";
import { FestivalLogo } from "./festival-logo";

const HERO_SLIDES = [
  "/hero/hero-01.jpg",
  "/hero/hero-02.jpg",
  "/hero/hero-03.jpg",
  "/hero/hero-04.jpg",
  "/hero/hero-05.jpg",
  "/hero/hero-06.jpg",
  "/hero/hero-07.jpg",
  "/hero/hero-08.jpg",
  "/hero/hero-09.jpg",
  "/hero/hero-10.jpg",
];

const STATS = [
  { icon: Users, label: "Annual Visitors", value: "25K+" },
  { icon: Calendar, label: "Days of Celebration", value: "4" },
  { icon: MapPin, label: "Denu, Volta Region", value: "Ghana" },
];

export function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(
    () => setActive((p) => (p + 1) % HERO_SLIDES.length),
    []
  );
  const prev = useCallback(
    () => setActive((p) => (p - 1 + HERO_SLIDES.length) % HERO_SLIDES.length),
    []
  );

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [paused, next]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-forest-deep"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Cinematic background slider */}
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${HERO_SLIDES[active]}')` }}
            aria-hidden
          />
        </AnimatePresence>

        {/* Bottom fade for smooth transition into next section */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/25 to-transparent" />
        {/* Left-side gradient ONLY — keeps hero text legible while letting the photos show on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/85 via-forest-deep/30 to-transparent" />
        {/* Gold radial accents */}
        <div className="absolute -top-1/4 -right-1/4 w-[60vw] h-[60vw] rounded-full bg-gold/12 blur-[120px] animate-glow-pulse" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[50vw] h-[50vw] rounded-full bg-forest-light/25 blur-[120px]" />
      </div>

      {/* Floating particles */}
      <Particles count={32} />

      {/* Slide navigation arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full glass-card text-cream flex items-center justify-center hover:bg-gold hover:text-forest transition-colors"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full glass-card text-cream flex items-center justify-center hover:bg-gold hover:text-forest transition-colors"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Slide counter + dots (bottom-right, above kente strip) */}
      <div className="absolute bottom-10 right-4 sm:right-8 z-20 flex flex-col items-end gap-2.5">
        <div className="glass-card rounded-full px-3.5 py-1.5 text-cream text-xs font-semibold tracking-wider">
          <span className="text-gradient-gold font-bold">{String(active + 1).padStart(2, "0")}</span>
          <span className="text-cream/50 mx-1">/</span>
          <span className="text-cream/70">{String(HERO_SLIDES.length).padStart(2, "0")}</span>
        </div>
        <div className="flex items-center gap-1.5">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                active === i
                  ? "w-7 bg-gradient-gold"
                  : "w-1.5 bg-cream/40 hover:bg-cream/70"
              }`}
            />
          ))}
        </div>
        {paused && (
          <div className="text-gold text-[10px] uppercase tracking-wider font-bold">Paused</div>
        )}
      </div>

      {/* Festival logo watermark — large, faint, top-right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.6 }}
        className="absolute top-24 right-4 sm:right-10 lg:right-16 w-40 h-40 sm:w-56 sm:h-56 lg:w-72 lg:h-72 pointer-events-none z-[5]"
        aria-hidden
      >
        <FestivalLogo variant="transparent" size={288} className="w-full h-full" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-gold text-xs sm:text-sm font-semibold uppercase tracking-[0.28em]"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Annual Cultural Festival • Denu, Ghana
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-serif font-bold text-5xl sm:text-7xl lg:text-8xl text-cream leading-[0.95] tracking-tight text-shadow-strong"
          >
            Denu
            <br />
            <span className="text-gradient-gold">Nugoryiyi Za</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55 }}
            className="mt-6 text-lg sm:text-xl lg:text-2xl text-cream/95 font-light max-w-2xl leading-relaxed text-shadow-soft"
          >
            Celebrating Heritage{" "}
            <span className="text-gold font-medium">•</span> Inspiring
            Development{" "}
            <span className="text-gold font-medium">•</span> Connecting
            Generations
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="mt-4 text-base text-cream/65 max-w-xl leading-relaxed"
          >
            The grand assembly of the chiefs, queen mothers and people of Denu —
            a celebration of Ewe heritage, community progress, tourism and
            traditional leadership on the coast of the Volta Region.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="mt-10 flex flex-wrap gap-3 sm:gap-4"
          >
            <a
              href="#about"
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-gold text-forest font-semibold uppercase tracking-wide text-sm shadow-gold-glow hover:scale-105 transition-transform"
            >
              Explore Festival
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#register"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full glass-card text-cream font-semibold uppercase tracking-wide text-sm border-gold-soft hover:bg-white/15 transition-colors"
            >
              Register
            </a>
            <a
              href="#sponsorship"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-gold/60 text-gold font-semibold uppercase tracking-wide text-sm hover:bg-gold hover:text-forest transition-colors"
            >
              Become a Sponsor
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.05 }}
            className="mt-14 grid grid-cols-3 gap-3 sm:gap-6 max-w-2xl"
          >
            {STATS.map((s) => (
              <div
                key={s.label}
                className="glass-card rounded-2xl p-4 sm:p-5 text-center"
              >
                <s.icon className="w-5 h-5 mx-auto text-gold mb-2" />
                <div className="font-serif text-2xl sm:text-3xl font-bold text-cream">
                  {s.value}
                </div>
                <div className="mt-1 text-[10px] sm:text-xs uppercase tracking-wider text-cream/60">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-gold/80 hover:text-gold transition-colors"
        aria-label="Scroll to explore"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="relative w-6 h-10 rounded-full border-2 border-gold/50 flex items-start justify-center p-1.5">
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-gold"
          />
        </span>
      </motion.a>

      {/* Kente strip bottom */}
      <div className="absolute bottom-0 inset-x-0 kente-divider" />
    </section>
  );
}
