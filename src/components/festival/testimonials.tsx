"use client";

import { motion } from "framer-motion";
import { Quote, Star, Crown, Plane, Heart, Building2 } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { SectionShell } from "./gold-button";
import { StaggerGroup, staggerItem } from "./reveal";

const TESTIMONIALS = [
  {
    icon: Crown,
    quote:
      "Nugoryiyi Za is the heartbeat of our people. It is the moment we honour our ancestors, celebrate our youth, and chart the path of development for Denu. The festival has become the soul of our community.",
    name: "Togbe Denu IV",
    role: "Paramount Chief of Denu",
    avatar: "TD",
  },
  {
    icon: Plane,
    quote:
      "Coming from the diaspora, the festival reconnected me with my roots in ways I cannot describe. The grand durbar, the food, the music — every moment felt like coming home. I will return every year.",
    name: "Dr. Ama Dziedzorm",
    role: "Diaspora Visitor, London",
    avatar: "AD",
  },
  {
    icon: Building2,
    quote:
      "Our partnership with the festival has been one of the most rewarding decisions of our CSR programme. The transparency, the impact, and the warmth of the Denu community are simply unmatched.",
    name: "Mr. Kwesi Mensah",
    role: "Sponsor Relations, CalBank",
    avatar: "KM",
  },
  {
    icon: Heart,
    quote:
      "I came as a tourist and left as family. The beaches, the smiles, the drumming — Denu gave me memories I will carry forever. Ghana's coast has a new must-visit destination.",
    name: "Sarah Whitfield",
    role: "Tourist, United Kingdom",
    avatar: "SW",
  },
  {
    icon: Crown,
    quote:
      "As a queen mother, the festival is our platform to advocate for women and children. The development projects we commission each year are proof that celebration and progress can walk together.",
    name: "Mama Denu III",
    role: "Queen Mother of Denu",
    avatar: "MD",
  },
  {
    icon: Building2,
    quote:
      "The business forum opened doors we never imagined. We connected with diaspora investors and secured commitments to two community projects in a single afternoon. This is what real impact looks like.",
    name: "Hon. Kofi Adevu",
    role: "MCE, Ketu South",
    avatar: "KA",
  },
];

export function Testimonials() {
  return (
    <SectionShell id="testimonials" className="bg-cream">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="Voices from the festival"
          description="From chiefs and queen mothers to visitors, sponsors and community leaders — hear what Nugoryiyi Za means to those who experience it."
        />

        <StaggerGroup className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {TESTIMONIALS.map((t) => (
            <motion.figure
              key={t.name}
              variants={staggerItem}
              className="group relative rounded-3xl bg-white p-7 shadow-[0_10px_30px_-15px_rgba(8,63,34,0.25)] hover:shadow-premium transition-shadow border border-forest/8 flex flex-col"
            >
              <div className="absolute -top-4 left-7 w-10 h-10 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold-glow">
                <Quote className="w-5 h-5 text-forest-deep" />
              </div>

              <div className="flex items-center gap-1 mb-4 mt-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-gold fill-gold" />
                ))}
              </div>

              <blockquote className="flex-1 text-forest/80 text-sm leading-relaxed italic">
                “{t.quote}”
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-3 pt-5 border-t border-forest/8">
                <div className="relative w-12 h-12 rounded-full bg-gradient-forest flex items-center justify-center text-gold font-serif font-bold text-sm shrink-0">
                  {t.avatar}
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-gradient-gold flex items-center justify-center">
                    <t.icon className="w-3 h-3 text-forest-deep" />
                  </div>
                </div>
                <div>
                  <div className="font-serif text-base text-forest font-semibold">
                    {t.name}
                  </div>
                  <div className="text-xs text-forest/60">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </StaggerGroup>
      </div>
    </SectionShell>
  );
}
