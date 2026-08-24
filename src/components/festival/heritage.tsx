"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ScrollText,
  Crown,
  Users,
  Shirt,
  UtensilsCrossed,
  Drum,
  Quote,
  Languages,
  CalendarHeart,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { SectionHeading } from "./section-heading";
import { SectionShell } from "./gold-button";
import { Reveal } from "./reveal";

const SLAVERY_SLIDES = [
  "/slavery/slavery-1.jpg",
  "/slavery/slavery-2.jpg",
  "/slavery/slavery-3.jpg",
  "/slavery/slavery-4.jpg",
];

function SlaverySlider({ flip }: { flip: boolean }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(
    () => setActive((p) => (p + 1) % SLAVERY_SLIDES.length),
    []
  );
  const prev = useCallback(
    () => setActive((p) => (p - 1 + SLAVERY_SLIDES.length) % SLAVERY_SLIDES.length),
    []
  );

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 4000);
    return () => clearInterval(t);
  }, [paused, next]);

  return (
    <div className="relative">
      <div
        className="relative rounded-3xl overflow-hidden shadow-premium aspect-[4/3]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={active}
            src={SLAVERY_SLIDES[active]}
            alt={`Hedzranawo Slavery Market — view ${active + 1}`}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </AnimatePresence>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/65 via-transparent to-transparent pointer-events-none" />

        {/* Slide counter badge */}
        <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full glass-card text-cream text-xs font-semibold uppercase tracking-wider">
          {active + 1} / {SLAVERY_SLIDES.length}
        </div>

        {/* Pause indicator */}
        {paused && (
          <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full glass-card text-gold text-[10px] font-bold uppercase tracking-wider">
            Paused
          </div>
        )}

        {/* Prev / Next buttons */}
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-card text-cream flex items-center justify-center hover:bg-gold hover:text-forest transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-card text-cream flex items-center justify-center hover:bg-gold hover:text-forest transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {SLAVERY_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                active === i
                  ? "w-8 bg-gradient-gold"
                  : "w-2 bg-cream/50 hover:bg-cream/80"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Floating icon badge */}
      <motion.div
        initial={{ scale: 0, rotate: -20 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
        className={`absolute ${
          flip ? "-left-4 sm:-left-6" : "-right-4 sm:-right-6"
        } -bottom-4 sm:-bottom-6 w-20 h-20 rounded-2xl bg-gradient-gold flex items-center justify-center shadow-gold-glow z-10`}
      >
        <ScrollText className="w-9 h-9 text-forest-deep" />
      </motion.div>

      {/* Decorative frame */}
      <div
        className={`absolute ${
          flip ? "-right-3 -top-3" : "-left-3 -top-3"
        } w-28 h-28 border-2 border-gold/30 rounded-3xl -z-10`}
      />
    </div>
  );
}

const BLOCKS = [
  {
    icon: ScrollText,
    eyebrow: "History of Denu",
    title: "Hedzranawo Slavery Market",
    body: "Denu sits on the south-eastern coastline of Ghana in the Ketu South Municipality of the Volta Region, a short distance from the Aflao border with Togo. For generations it has been a meeting point — of Ewe clans, of traders travelling the coast, of Christian missions and of fishermen casting nets into the Gulf of Guinea. The story of Denu is one of resilience: a small coastal community that has grown into a vibrant commercial and cultural hub while holding firmly to the customs that define its people.",
    image:
      "https://images.unsplash.com/photo-1568430462989-44163eb1752f?auto=format&fit=crop&w=1200&q=80",
    flip: false,
  },
  {
    icon: Crown,
    eyebrow: "Chiefs & Queen Mothers",
    title: "Hedzranawo Museum",
    body: "The chieftaincy of Denu is the spiritual and cultural authority of the community. Under the leadership of the Paramount Chief and supported by divisional chiefs and queen mothers, the institution preserves peace, mediates disputes, safeguards customs and represents the people on matters of tradition and development. Queen mothers — the Mamas — hold a special place, advising the chiefs, championing women and children, and ensuring the wisdom of the ancestors is passed to the next generation. At the grand durbar, the full majesty of this institution is on display.",
    image:
      "https://images.unsplash.com/photo-1591030413653-79c4cb1d8d0f?auto=format&fit=crop&w=1200&q=80",
    flip: true,
  },
  {
    icon: Shirt,
    eyebrow: "Traditional Attire & Cuisine",
    title: "Togo - Aflao Border",
    body: "The people of Denu dress with pride — kente and ewe woven cloth for ceremonial occasions, white for festivals of purification, gold and red for the durbar. The cuisine of the festival is a celebration in itself: akple with okro soup, red-red, fried yam with tilapia, abolo with one-man-thousand fish, fresh coconut and palm wine. Every meal tells a story of the land, the sea and the hands that prepared it.",
    image:
      "https://images.unsplash.com/photo-1604908554007-fe9473c06f83?auto=format&fit=crop&w=1200&q=80",
    flip: false,
  },
  {
    icon: Drum,
    eyebrow: "Drumming, Dancing & Proverbs",
    title: "The heartbeat of Ewe culture",
    body: "The drums of Denu speak a language older than words. Atsimenu, sogo, kidi and kaganu call the community to gather, to mourn, to celebrate and to dance. Agbadza — the iconic Ewe dance — moves generations in unison, while Borborbor brings joy to every gathering. Beside the drums sit the elders, speaking in proverbs: “Nye devi la ɖo eƒe ŋuti” — even a small child carries their own destiny. Through language, music and proverb, the wisdom of the ancestors lives on in the young.",
    image:
      "https://images.unsplash.com/photo-1519677100203-a0e668c92439?auto=format&fit=crop&w=1200&q=80",
    flip: true,
  },
];

const TILES = [
  { icon: Users, label: "Ewe Traditions" },
  { icon: Languages, label: "Ewe Language" },
  { icon: UtensilsCrossed, label: "Local Cuisine" },
  { icon: CalendarHeart, label: "Year-round Festivals" },
];

export function Heritage() {
  return (
    <SectionShell id="heritage" dark className="bg-forest-deep">
      {/* Backdrop */}
      <div className="absolute top-1/4 right-0 w-[50vw] h-[50vh] bg-gold/8 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vh] bg-forest-light/25 blur-[120px] rounded-full" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          light
          eyebrow="Cultural Heritage"
          title="The living story of Denu"
          description="From the call of the atsimenu drum to the gold of a chief's regalia, the heritage of Denu is alive — carried in language, in food, in cloth, and in the wisdom of every elder."
        />

        <div className="mt-16 space-y-20 lg:space-y-28">
          {BLOCKS.map((b, idx) => (
            <div
              key={b.title}
              className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                b.flip ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              {/* Image (or slider for the first block) */}
              <Reveal y={40}>
                {idx === 0 ? (
                  <SlaverySlider flip={b.flip} />
                ) : (
                  <div className="relative">
                    <div className="relative rounded-3xl overflow-hidden shadow-premium aspect-[4/3]">
                      <img
                        src={b.image}
                        alt={b.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/60 via-transparent to-transparent" />
                    </div>
                    {/* Floating icon badge */}
                    <motion.div
                      initial={{ scale: 0, rotate: -20 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
                      className={`absolute ${
                        b.flip ? "-left-4 sm:-left-6" : "-right-4 sm:-right-6"
                      } -bottom-4 sm:-bottom-6 w-20 h-20 rounded-2xl bg-gradient-gold flex items-center justify-center shadow-gold-glow`}
                    >
                      <b.icon className="w-9 h-9 text-forest-deep" />
                    </motion.div>
                    {/* Decorative frame */}
                    <div
                      className={`absolute ${
                        b.flip ? "-right-3 -top-3" : "-left-3 -top-3"
                      } w-28 h-28 border-2 border-gold/30 rounded-3xl -z-10`}
                    />
                  </div>
                )}
              </Reveal>

              {/* Text */}
              <Reveal delay={0.15} y={40}>
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/15 text-gold text-[11px] font-semibold uppercase tracking-[0.2em] border border-gold/25">
                    <b.icon className="w-3.5 h-3.5" />
                    {b.eyebrow}
                  </div>
                  <h3 className="mt-5 font-serif text-2xl sm:text-3xl lg:text-4xl text-cream font-semibold leading-tight">
                    {b.title}
                  </h3>
                  <p className="mt-5 text-cream/75 leading-relaxed">{b.body}</p>

                  {/* Proverb callout */}
                  {idx === 3 && (
                    <div className="mt-6 p-5 rounded-2xl glass-card flex items-start gap-3">
                      <Quote className="w-6 h-6 text-gold shrink-0 mt-0.5" />
                      <p className="text-cream/85 italic text-sm leading-relaxed">
                        “Dzᴐdze mesᴐ na ame si wᴐa eƒe agbe o” — Patience does
                        not fail the one who lives well. A reminder that the
                        heritage we carry is built on time, discipline and
                        grace.
                      </p>
                    </div>
                  )}
                </div>
              </Reveal>
            </div>
          ))}
        </div>

        {/* Quick heritage tiles */}
        <Reveal delay={0.1}>
          <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {TILES.map((t) => (
              <div
                key={t.label}
                className="glass-card rounded-2xl p-5 flex flex-col items-center text-center gap-3 hover:border-gold/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-gold text-forest-deep flex items-center justify-center">
                  <t.icon className="w-6 h-6" />
                </div>
                <span className="text-sm font-semibold text-cream">
                  {t.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
