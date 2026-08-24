"use client";

import { motion } from "framer-motion";
import {
  Crown,
  Music2,
  Footprints,
  Mic2,
  Sparkles,
  Trophy,
  Stethoscope,
  GraduationCap,
  Rocket,
  Briefcase,
  Award,
  Palmtree,
} from "lucide-react";
import { SectionHeading } from "./section-heading";
import { SectionShell } from "./gold-button";
import { Reveal, StaggerGroup, staggerItem } from "./reveal";

const HIGHLIGHTS = [
  {
    icon: Crown,
    title: "Grand Durbar",
    desc: "The majestic procession of chiefs and queen mothers in full royal regalia — the spiritual heart of the festival.",
    accent: "from-amber-500/20 to-amber-700/10",
  },
  {
    icon: Music2,
    title: "Traditional Dance",
    desc: "Agbadza, Borborbor, AtsiahVodoo and Adowa fill the grounds with rhythm, colour and ancestral motion.",
    accent: "from-emerald-500/20 to-emerald-700/10",
  },
  {
    icon: Footprints,
    title: "Cultural Procession",
    desc: "A vibrant parade of clans, schools, masquerades and cultural troupes through the streets of Denu.",
    accent: "from-yellow-500/20 to-yellow-700/10",
  },
  {
    icon: Mic2,
    title: "Choral Festival",
    desc: "Church choirs and community singing groups lift voices in harmony across the festival evenings.",
    accent: "from-amber-400/20 to-orange-600/10",
  },
  {
    icon: Sparkles,
    title: "Beauty Pageant",
    desc: "Miss Nugoryiyi Za — celebrating intelligence, culture and grace as young women represent their communities.",
    accent: "from-pink-500/20 to-rose-700/10",
  },
  {
    icon: Trophy,
    title: "Football Gala",
    desc: "Community teams compete for the coveted Nugoryiyi Za Cup in a thrilling inter-clan tournament.",
    accent: "from-emerald-400/20 to-teal-700/10",
  },
  {
    icon: Stethoscope,
    title: "Health Screening",
    desc: "Free medical outreach — BP, diabetes, dental, eye care and maternal health for the community.",
    accent: "from-rose-400/20 to-red-700/10",
  },
  {
    icon: GraduationCap,
    title: "Educational Forums",
    desc: "Symposia on heritage, civic responsibility, climate, and the future of Denu's young people.",
    accent: "from-amber-500/20 to-yellow-700/10",
  },
  {
    icon: Rocket,
    title: "Youth Empowerment",
    desc: "Skills workshops, mentorship, digital training and entrepreneurship clinics for the next generation.",
    accent: "from-emerald-500/20 to-green-700/10",
  },
  {
    icon: Briefcase,
    title: "Business Networking",
    desc: "Investors, diaspora and local entrepreneurs connect over opportunities in tourism, agriculture and trade.",
    accent: "from-yellow-500/20 to-amber-700/10",
  },
  {
    icon: Award,
    title: "Awards Night",
    desc: "Recognising excellence — community heroes, scholars, philanthropists and outstanding sons and daughters of Denu.",
    accent: "from-amber-400/20 to-yellow-600/10",
  },
  {
    icon: Palmtree,
    title: "Beach Activities",
    desc: "Sunset concerts, beach sports, food fairs and family days along the golden coast of Denu.",
    accent: "from-teal-400/20 to-cyan-700/10",
  },
];

export function Highlights() {
  return (
    <SectionShell id="highlights" dark className="bg-forest">
      {/* Background accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[40vh] bg-gold/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[40vw] h-[40vh] bg-forest-light/30 blur-[100px] rounded-full" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          light
          eyebrow="Festival Highlights"
          title="Twelve experiences that define Nugoryiyi Za"
          description="From the grandeur of the durbar to the joy of the beach, every moment of the festival is crafted to honour tradition, uplift the community and welcome the world."
        />

        <StaggerGroup className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {HIGHLIGHTS.map((h) => (
            <motion.div
              key={h.title}
              variants={staggerItem}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative rounded-3xl p-6 sm:p-7 glass-card hover:border-gold/50 transition-all duration-500 overflow-hidden cursor-pointer"
            >
              {/* Accent glow */}
              <div
                className={`absolute -right-10 -top-10 w-32 h-32 rounded-full blur-2xl bg-gradient-to-br ${h.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-gold text-forest-deep flex items-center justify-center shadow-gold-glow group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  <h.icon className="w-7 h-7" />
                </div>

                <h3 className="mt-5 font-serif text-xl text-cream font-semibold group-hover:text-gold transition-colors">
                  {h.title}
                </h3>
                <p className="mt-2 text-sm text-cream/65 leading-relaxed">
                  {h.desc}
                </p>

                <div className="mt-5 flex items-center gap-2 text-xs text-gold/80 font-semibold uppercase tracking-wider opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                  Learn more
                  <span className="w-6 h-px bg-gold/60" />
                </div>
              </div>

              {/* Bottom gold line */}
              <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </StaggerGroup>

        <Reveal delay={0.2}>
          <div className="mt-14 text-center">
            <a
              href="#schedule"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-gold text-forest font-semibold uppercase tracking-wide text-sm shadow-gold-glow hover:scale-105 transition-transform"
            >
              View Full Festival Schedule
            </a>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
