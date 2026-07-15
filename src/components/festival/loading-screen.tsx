"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1700);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-forest-deep"
          aria-hidden
        >
          {/* Animated Kente band backdrop */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute -top-1/2 -left-1/4 w-[150%] h-[200%] animate-spin-slow bg-[conic-gradient(from_0deg,#083F22,#E8C15A,#0F5C33,#F4C96D,#C99A38,#083F22)] blur-3xl" />
          </div>

          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* Logo crest */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative w-28 h-28 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold-glow">
                <div className="absolute inset-1 rounded-full border-2 border-forest-deep/40" />
                <span className="font-serif font-bold text-forest-deep text-3xl leading-none">
                  DN
                </span>
                <div className="absolute -inset-2 rounded-full border border-gold/40 animate-glow-pulse" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-center"
            >
              <p className="font-serif text-2xl sm:text-3xl text-cream tracking-wide">
                Denu Nugoryiyi Za
              </p>
              <p className="mt-1 text-xs sm:text-sm uppercase tracking-[0.35em] text-gold">
                Zordede Vava
              </p>
            </motion.div>

            {/* Progress bar */}
            <div className="w-56 h-1 rounded-full bg-forest-light/60 overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="w-1/2 h-full bg-gradient-gold"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
