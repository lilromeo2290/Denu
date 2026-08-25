"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { SectionShell } from "./gold-button";

const IMAGES = [
  "/gallery/g-01.jpg", "/gallery/g-02.jpg", "/gallery/g-03.jpg", "/gallery/g-04.jpg",
  "/gallery/g-05.jpg", "/gallery/g-06.jpg", "/gallery/g-07.jpg", "/gallery/g-08.jpg",
  "/gallery/g-09.jpg", "/gallery/g-10.jpg", "/gallery/g-11.jpg", "/gallery/g-12.jpg",
  "/gallery/g-13.jpg", "/gallery/g-14.jpg", "/gallery/g-15.jpg", "/gallery/g-16.jpg",
  "/gallery/g-17.jpg", "/gallery/g-18.jpg", "/gallery/g-19.jpg", "/gallery/g-20.jpg",
  "/gallery/g-21.jpg", "/gallery/g-22.jpg", "/gallery/g-23.jpg", "/gallery/g-24.jpg",
  "/gallery/g-25.jpg", "/gallery/g-26.jpg", "/gallery/g-27.jpg", "/gallery/g-28.jpg",
  "/gallery/g-29.jpg", "/gallery/g-30.jpg", "/gallery/g-31.jpg", "/gallery/g-32.jpg",
  "/gallery/g-33.jpg", "/gallery/g-34.jpg", "/gallery/g-35.jpg", "/gallery/g-36.jpg",
  "/gallery/g-37.jpg", "/gallery/g-38.jpg", "/gallery/g-39.jpg",
];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(
    () => setActive((p) => (p === null ? p : (p + 1) % IMAGES.length)),
    []
  );
  const prev = useCallback(
    () =>
      setActive((p) =>
        p === null ? p : (p - 1 + IMAGES.length) % IMAGES.length
      ),
    []
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (active === null) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = active !== null ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, next, prev]);

  return (
    <SectionShell id="gallery" className="bg-cream">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title="Moments from the festival"
          description="A collection of photographs from the Denu Nugoryiyi Zà Festival."
        />

        {/* Masonry grid */}
        <div className="mt-12 columns-2 md:columns-3 lg:columns-4 gap-3 sm:gap-4 [column-fill:_balance]">
          {IMAGES.map((src, idx) => (
            <motion.button
              key={src}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: (idx % 8) * 0.05 }}
              onClick={() => setActive(idx)}
              className="group relative w-full mb-3 sm:mb-4 break-inside-avoid rounded-2xl overflow-hidden shadow-[0_8px_24px_-12px_rgba(8,63,34,0.3)] hover:shadow-premium transition-shadow block"
            >
              <img
                src={src}
                alt=""
                className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-forest-deep/0 group-hover:bg-forest-deep/25 transition-colors" />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] bg-forest-deep/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
            onClick={close}
          >
            <button
              onClick={close}
              className="absolute top-5 right-5 w-11 h-11 rounded-full glass-card text-cream flex items-center justify-center hover:bg-white/15 transition-colors"
              aria-label="Close gallery"
            >
              <X className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full glass-card text-cream flex items-center justify-center hover:bg-white/15 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full glass-card text-cream flex items-center justify-center hover:bg-white/15 transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <motion.figure
              key={active}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-premium">
                <img
                  src={IMAGES[active]}
                  alt=""
                  className="w-full max-h-[82vh] object-contain bg-forest-deep"
                />
              </div>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionShell>
  );
}
