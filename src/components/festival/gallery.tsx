"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Play, Image as ImageIcon } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { SectionShell } from "./gold-button";
import { Reveal } from "./reveal";

interface Item {
  src: string;
  title: string;
  category: "Images" | "Videos" | "Drone";
  year: string;
  span?: "tall" | "wide" | "normal";
}

const ITEMS: Item[] = [
  { src: "https://images.unsplash.com/photo-1591030413653-79c4cb1d8d0f?auto=format&fit=crop&w=900&q=80", title: "Chief in Royal Regalia", category: "Images", year: "2024", span: "tall" },
  { src: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?auto=format&fit=crop&w=900&q=80", title: "Drumming Circle", category: "Images", year: "2024", span: "wide" },
  { src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80", title: "Sunset over Denu Beach", category: "Drone", year: "2024" },
  { src: "https://images.unsplash.com/photo-1568430462989-44163eb1752f?auto=format&fit=crop&w=900&q=80", title: "Cultural Procession", category: "Images", year: "2023", span: "tall" },
  { src: "https://images.unsplash.com/photo-1604908554007-fe9473c06f83?auto=format&fit=crop&w=900&q=80", title: "Ewe Woven Cloth", category: "Images", year: "2023" },
  { src: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80", title: "Festival Cuisine", category: "Images", year: "2024", span: "wide" },
  { src: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=900&q=80", title: "Women in Trade Fair", category: "Images", year: "2023" },
  { src: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=900&q=80", title: "Youth Forum Highlights", category: "Videos", year: "2024", span: "tall" },
  { src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80", title: "Skills Centre Opening", category: "Images", year: "2024" },
  { src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=80", title: "Mangrove Eco-Walk", category: "Drone", year: "2023", span: "wide" },
  { src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=900&q=80", title: "Beach Resort Concert", category: "Videos", year: "2024" },
];

const YEARS = ["All", "2024", "2023"];
const CATS = ["All", "Images", "Videos", "Drone"];

export function Gallery() {
  const [year, setYear] = useState("All");
  const [cat, setCat] = useState("All");
  const [active, setActive] = useState<number | null>(null);

  const filtered = ITEMS.filter(
    (i) => (year === "All" || i.year === year) && (cat === "All" || i.category === cat)
  );

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(() => setActive((p) => (p === null ? p : (p + 1) % filtered.length)), [filtered.length]);
  const prev = useCallback(() => setActive((p) => (p === null ? p : (p - 1 + filtered.length) % filtered.length)), [filtered.length]);

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
          description="A curated collection of photographs, performances and aerial drone footage from past editions of the Denu Nugoryiyi Za Festival."
        />

        {/* Filters */}
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="text-xs uppercase tracking-wider text-forest/60 font-semibold mr-1">Year</span>
              {YEARS.map((y) => (
                <button
                  key={y}
                  onClick={() => setYear(y)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    year === y
                      ? "bg-forest text-cream"
                      : "bg-forest/5 text-forest/70 hover:bg-forest/10"
                  }`}
                >
                  {y}
                </button>
              ))}
            </div>
            <div className="hidden sm:block w-px h-6 bg-forest/15" />
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="text-xs uppercase tracking-wider text-forest/60 font-semibold mr-1">Type</span>
              {CATS.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    cat === c
                      ? "bg-gradient-gold text-forest shadow-gold-glow"
                      : "bg-forest/5 text-forest/70 hover:bg-forest/10"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Masonry grid */}
        <div className="mt-12 columns-2 md:columns-3 lg:columns-4 gap-4 sm:gap-5 [column-fill:_balance]">
          {filtered.map((item, idx) => (
            <motion.button
              key={`${item.title}-${idx}`}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: (idx % 8) * 0.05 }}
              onClick={() => setActive(idx)}
              className={`group relative w-full mb-4 sm:mb-5 break-inside-avoid rounded-2xl overflow-hidden shadow-[0_10px_30px_-15px_rgba(8,63,34,0.3)] hover:shadow-premium transition-shadow block ${
                item.span === "tall"
                  ? "aspect-[3/4]"
                  : item.span === "wide"
                  ? "aspect-[4/3]"
                  : "aspect-square"
              }`}
            >
              <img
                src={item.src}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/85 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

              {item.category === "Videos" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-gold/90 text-forest-deep flex items-center justify-center shadow-gold-glow group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 ml-0.5" fill="currentColor" />
                  </div>
                </div>
              )}
              {item.category === "Drone" && (
                <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-cream/85 text-forest text-[10px] font-semibold uppercase tracking-wider">
                  Drone
                </div>
              )}

              <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
                <div className="text-[10px] uppercase tracking-wider text-gold font-semibold mb-1">
                  {item.year} • {item.category}
                </div>
                <div className="font-serif text-cream text-sm sm:text-base font-semibold leading-tight">
                  {item.title}
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-16 text-center text-forest/60 flex flex-col items-center gap-3">
            <ImageIcon className="w-10 h-10" />
            <p>No items match your filter — try another year or type.</p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null && filtered[active] && (
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
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-premium">
                <img
                  src={filtered[active].src.replace("w=900", "w=1600")}
                  alt={filtered[active].title}
                  className="w-full max-h-[75vh] object-contain bg-forest-deep"
                />
              </div>
              <figcaption className="mt-4 text-center">
                <div className="text-[10px] uppercase tracking-wider text-gold font-semibold">
                  {filtered[active].year} • {filtered[active].category}
                </div>
                <div className="font-serif text-cream text-lg sm:text-xl mt-1">
                  {filtered[active].title}
                </div>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionShell>
  );
}
