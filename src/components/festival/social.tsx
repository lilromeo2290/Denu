"use client";

import { motion } from "framer-motion";
import { Instagram, Facebook, Youtube, Music2, Heart, Eye, Play } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { SectionShell } from "./gold-button";
import { Reveal, StaggerGroup, staggerItem } from "./reveal";

const INSTAGRAM = [
  "https://images.unsplash.com/photo-1591030413653-79c4cb1d8d0f?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1519677100203-a0e668c92439?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1604908554007-fe9473c06f83?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1568430462989-44163eb1752f?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=600&q=80",
];

const POSTS = [
  {
    icon: Facebook,
    platform: "Facebook",
    handle: "@DenuNugoryiyiZa",
    time: "2h ago",
    text: "Only 90 days to go! The Grand Durbar of 2026 is shaping up to be the most spectacular yet. Have you registered yet? 🇬🇭👑",
    likes: "1.2K",
    comments: "184",
  },
  {
    icon: Youtube,
    platform: "YouTube",
    handle: "Denu Festival TV",
    time: "1 day ago",
    text: "Watch the full highlights from Nugoryiyi Za 2025 — 22 minutes of pure culture, joy and heritage from Denu.",
    likes: "8.6K",
    views: "142K views",
  },
  {
    icon: Music2,
    platform: "TikTok",
    handle: "@denu.festival",
    time: "3 days ago",
    text: "When the atsimenu drum calls, even the ocean listens 🌊🥁 #DenuFestival #EweHeritage #GhanaCulture",
    likes: "24K",
    views: "320K views",
  },
];

export function Social() {
  return (
    <SectionShell id="social" className="bg-cream">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Social Media"
          title="Follow the festival"
          description="Stay connected with Denu Nugoryiyi Za across your favourite platforms — daily updates, live moments, highlights and behind-the-scenes."
        />

        {/* Platform cards */}
        <StaggerGroup className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: Instagram, label: "Instagram", handle: "@denunugoryiyiza", followers: "48K", color: "from-pink-500 to-amber-400" },
            { icon: Facebook, label: "Facebook", handle: "Denu Nugoryiyi Za", followers: "120K", color: "from-blue-500 to-blue-700" },
            { icon: Youtube, label: "YouTube", handle: "Denu Festival TV", followers: "32K", color: "from-red-500 to-red-700" },
            { icon: Music2, label: "TikTok", handle: "@denu.festival", followers: "95K", color: "from-zinc-800 to-zinc-950" },
          ].map((p) => (
            <motion.a
              key={p.label}
              href="#social"
              variants={staggerItem}
              whileHover={{ y: -6 }}
              className="group relative rounded-3xl bg-white p-6 shadow-[0_10px_30px_-15px_rgba(8,63,34,0.25)] hover:shadow-premium transition-shadow border border-forest/8 text-center overflow-hidden"
            >
              <div className={`absolute -top-8 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full blur-2xl bg-gradient-to-br ${p.color} opacity-15 group-hover:opacity-30 transition-opacity`} />
              <div className={`relative w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br ${p.color} flex items-center justify-center shadow-premium`}>
                <p.icon className="w-7 h-7 text-white" />
              </div>
              <div className="relative mt-4 font-serif text-lg text-forest font-semibold">
                {p.label}
              </div>
              <div className="text-xs text-forest/60 truncate">{p.handle}</div>
              <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest/5 text-forest/70 text-[11px] font-semibold">
                <Heart className="w-3 h-3 text-rose-500" />
                {p.followers} followers
              </div>
            </motion.a>
          ))}
        </StaggerGroup>

        <div className="mt-12 grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Instagram grid */}
          <Reveal>
            <div className="rounded-3xl bg-white p-6 sm:p-7 shadow-premium border border-forest/8">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <Instagram className="w-5 h-5 text-pink-500" />
                  <span className="font-serif text-lg text-forest font-semibold">Instagram</span>
                </div>
                <a href="#social" className="text-xs font-semibold text-gold-deep uppercase tracking-wider hover:underline">
                  Follow
                </a>
              </div>
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {INSTAGRAM.map((src, i) => (
                  <motion.a
                    key={i}
                    href="#social"
                    whileHover={{ scale: 0.97 }}
                    className="relative aspect-square rounded-xl overflow-hidden group"
                  >
                    <img
                      src={src}
                      alt={`Instagram post ${i + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-forest-deep/0 group-hover:bg-forest-deep/40 transition-colors flex items-center justify-center">
                      <Instagram className="w-6 h-6 text-cream opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Latest posts feed */}
          <Reveal delay={0.1}>
            <div className="space-y-4">
              {POSTS.map((post, i) => (
                <motion.article
                  key={post.platform}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.55 }}
                  className="rounded-2xl bg-white p-5 shadow-[0_8px_24px_-15px_rgba(8,63,34,0.3)] hover:shadow-premium transition-shadow border border-forest/8"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center">
                      <post.icon className="w-5 h-5 text-forest-deep" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold text-forest">{post.handle}</div>
                      <div className="text-[11px] text-forest/55">{post.platform} • {post.time}</div>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-forest/80 leading-relaxed">{post.text}</p>
                  <div className="mt-3 flex items-center gap-4 text-xs text-forest/60">
                    <span className="flex items-center gap-1">
                      <Heart className="w-3.5 h-3.5 text-rose-500" />
                      {post.likes}
                    </span>
                    {post.views && (
                      <span className="flex items-center gap-1">
                        <Eye className="w-3.5 h-3.5" />
                        {post.views}
                      </span>
                    )}
                    {post.comments && (
                      <span className="flex items-center gap-1">
                        <Play className="w-3.5 h-3.5" />
                        {post.comments}
                      </span>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </SectionShell>
  );
}
