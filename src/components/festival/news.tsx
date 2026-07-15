"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, ArrowUpRight, Newspaper } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { SectionShell } from "./gold-button";
import { Reveal } from "./reveal";

interface Article {
  title: string;
  excerpt: string;
  category: "Festival News" | "Community" | "Development" | "Tourism" | "Culture";
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

const ARTICLES: Article[] = [
  {
    title: "Denu Nugoryiyi Za 2025 to host largest ever Grand Durbar",
    excerpt:
      "The festival committee has confirmed that this year's Grand Durbar will welcome over forty chiefs and queen mothers from across the Volta Region and beyond, in what promises to be the most spectacular edition of the festival to date.",
    category: "Festival News",
    date: "12 Oct 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1591030413653-79c4cb1d8d0f?auto=format&fit=crop&w=1600&q=80",
    featured: true,
  },
  {
    title: "New CHPS compound commissioned in Denu",
    excerpt:
      "A fully upgraded Community Health Planning compound has been commissioned, expanding access to maternal and emergency care for over 8,000 residents.",
    category: "Development",
    date: "28 Sep 2025",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Tourism arrivals to Denu up 32% year-on-year",
    excerpt:
      "New figures from the Ghana Tourism Authority show Denu among the fastest-growing cultural destinations in the Volta Region, driven by festival tourism.",
    category: "Tourism",
    date: "15 Sep 2025",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Preserving Ewe proverbs in the digital age",
    excerpt:
      "A new youth-led initiative is recording, translating and animating Ewe proverbs to keep ancestral wisdom alive for the next generation.",
    category: "Culture",
    date: "02 Sep 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Women in Trade micro-grants empower 180 entrepreneurs",
    excerpt:
      "The festival's micro-grant programme has disbursed over GHS 240,000 to women traders, food processors and artisans across Denu.",
    category: "Community",
    date: "21 Aug 2025",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Diaspora delegation commits GHS 1.2M to community projects",
    excerpt:
      "A delegation of Denu citizens from Europe and North America has pledged major support to the school block, water and skills centre projects.",
    category: "Development",
    date: "08 Aug 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
  },
];

const CATS = ["All", "Festival News", "Community", "Development", "Tourism", "Culture"] as const;

export function News() {
  const [cat, setCat] = useState<(typeof CATS)[number]>("All");
  const filtered = cat === "All" ? ARTICLES : ARTICLES.filter((a) => a.category === cat);
  const featured = filtered.find((a) => a.featured) ?? filtered[0];
  const rest = filtered.filter((a) => a !== featured);

  return (
    <SectionShell id="news" className="bg-cream">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="News & Stories"
          title="Latest from the festival"
          description="Updates on the festival, community projects, development milestones, tourism, and the cultural life of Denu."
        />

        {/* Filter */}
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {CATS.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  cat === c
                    ? "bg-forest text-cream shadow-premium"
                    : "bg-forest/5 text-forest/70 hover:bg-forest/10"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Featured */}
          {featured && (
            <Reveal>
              <article className="group relative rounded-3xl overflow-hidden shadow-premium h-full min-h-[420px]">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/50 to-transparent" />
                <div className="absolute top-5 left-5 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-gradient-gold text-forest text-[10px] font-bold uppercase tracking-wider">
                    Featured
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-cream text-[10px] font-semibold uppercase tracking-wider">
                    {featured.category}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
                  <div className="flex items-center gap-3 text-cream/75 text-xs mb-3">
                    <span>{featured.date}</span>
                    <span className="w-1 h-1 rounded-full bg-gold" />
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {featured.readTime}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-cream font-semibold leading-tight">
                    {featured.title}
                  </h3>
                  <p className="mt-3 text-cream/75 text-sm leading-relaxed line-clamp-3">
                    {featured.excerpt}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 text-gold text-xs font-semibold uppercase tracking-wider group-hover:gap-3 transition-all">
                    Read article
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </article>
            </Reveal>
          )}

          {/* Side list */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-5">
            <AnimatePresence mode="popLayout">
              {rest.slice(0, 4).map((a, i) => (
                <motion.article
                  key={a.title}
                  layout
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group flex gap-4 rounded-2xl bg-white p-4 shadow-[0_8px_24px_-15px_rgba(8,63,34,0.3)] hover:shadow-premium transition-shadow"
                >
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 shrink-0 rounded-xl overflow-hidden">
                    <img
                      src={a.image}
                      alt={a.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] uppercase tracking-wider text-gold-deep font-semibold">
                      {a.category}
                    </div>
                    <h4 className="mt-1 font-serif text-base sm:text-lg text-forest font-semibold leading-snug group-hover:text-forest-deep transition-colors line-clamp-2">
                      {a.title}
                    </h4>
                    <div className="mt-2 flex items-center gap-2 text-forest/55 text-[11px]">
                      <span>{a.date}</span>
                      <span className="w-1 h-1 rounded-full bg-forest/40" />
                      <span>{a.readTime}</span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </div>

        <Reveal delay={0.15}>
          <div className="mt-12 text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-forest/15 text-forest hover:border-gold hover:text-gold-deep font-semibold uppercase tracking-wide text-sm transition-colors"
            >
              <Newspaper className="w-4 h-4" />
              View all stories
            </a>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
