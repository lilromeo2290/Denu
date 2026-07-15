"use client";

import { motion } from "framer-motion";
import { ChevronRight, Calendar, MapPin, Users, Sparkles } from "lucide-react";
import { Particles } from "./particles";
import { FestivalLogo } from "./festival-logo";

const STATS = [
  { icon: Users, label: "Annual Visitors", value: "25K+" },
  { icon: Calendar, label: "Days of Celebration", value: "4" },
  { icon: MapPin, label: "Denu, Volta Region", value: "Ghana" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-forest-deep"
    >
      {/* Cinematic background image with slow zoom */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 animate-slow-zoom bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=2000&q=80')",
          }}
          aria-hidden
        />
        {/* Multi-layer overlay for legibility + brand tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-forest-deep/90 via-forest-deep/70 to-forest-deep/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/30 to-transparent" />
        {/* Gold radial accent */}
        <div className="absolute -top-1/4 -right-1/4 w-[60vw] h-[60vw] rounded-full bg-gold/15 blur-[120px] animate-glow-pulse" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[50vw] h-[50vw] rounded-full bg-forest-light/30 blur-[120px]" />
      </div>

      {/* Floating particles */}
      <Particles count={36} />

      {/* Festival logo watermark — large, faint, top-right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.12, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.6 }}
        className="absolute top-24 right-4 sm:right-10 lg:right-16 w-40 h-40 sm:w-56 sm:h-56 lg:w-72 lg:h-72 pointer-events-none"
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
            className="mt-6 font-serif font-bold text-5xl sm:text-7xl lg:text-8xl text-cream leading-[0.95] tracking-tight text-shadow-soft"
          >
            Denu
            <br />
            <span className="text-gradient-gold">Nugoryiyi Za</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55 }}
            className="mt-6 text-lg sm:text-xl lg:text-2xl text-cream/85 font-light max-w-2xl leading-relaxed"
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
