"use client";

import { motion } from "framer-motion";
import { Crown, Medal, Award, Heart, Star } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { SectionShell } from "./gold-button";
import { Reveal, StaggerGroup, staggerItem } from "./reveal";

const TIERS = [
  {
    icon: Crown,
    name: "Platinum Sponsors",
    desc: "Premier partners championing the festival and community development.",
    color: "from-slate-200 to-slate-400",
    badge: "text-slate-700",
    sponsors: [
      "Bank of Ghana",
      "Vodafone Ghana",
      "Tullow Ghana",
      "MTN Ghana",
    ],
  },
  {
    icon: Medal,
    name: "Gold Sponsors",
    desc: "Pillars of the festival, supporting durbars, pageants and concerts.",
    color: "from-amber-200 to-amber-500",
    badge: "text-amber-700",
    sponsors: [
      "Ecobank Ghana",
      "CalBank",
      "Absa Ghana",
      "Ghana Tourism Authority",
      "Voltic Ghana",
    ],
  },
  {
    icon: Award,
    name: "Silver Sponsors",
    desc: "Valued partners enabling health, education and youth programmes.",
    color: "from-zinc-200 to-zinc-400",
    badge: "text-zinc-700",
    sponsors: [
      "Ketu South Mutual",
      "Denu Rural Bank",
      "Aflao City Authority",
      "Volta Regional Coordinating Council",
    ],
  },
  {
    icon: Heart,
    name: "Community Partners",
    desc: "Local institutions, NGOs and diaspora groups standing with Denu.",
    color: "from-rose-200 to-rose-400",
    badge: "text-rose-700",
    sponsors: [
      "Denu Traditional Council",
      "Ketu South Education Directorate",
      "Diaspora Network Ghana",
      "Volta Development Forum",
      "Denu Youth Association",
    ],
  },
];

export function Sponsors() {
  return (
    <SectionShell id="sponsors" dark className="bg-forest-deep">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] h-[35vh] bg-gold/10 blur-[140px] rounded-full" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          light
          eyebrow="Our Sponsors"
          title="Standing with Denu, celebrating together"
          description="The Denu Nugoryiyi Za Festival is made possible by the generosity of our partners. We honour the institutions and individuals whose commitment sustains both the celebration and the community development it inspires."
        />

        <StaggerGroup className="mt-16 grid md:grid-cols-2 gap-6">
          {TIERS.map((tier) => (
            <motion.div
              key={tier.name}
              variants={staggerItem}
              className="group relative rounded-3xl glass-card p-7 sm:p-8 hover:border-gold/50 transition-colors overflow-hidden"
            >
              <div
                className={`absolute -top-12 -right-12 w-44 h-44 rounded-full blur-2xl bg-gradient-to-br ${tier.color} opacity-15 group-hover:opacity-30 transition-opacity duration-500`}
              />

              <div className="relative flex items-start gap-4 mb-6">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${tier.color} flex items-center justify-center shadow-premium`}>
                  <tier.icon className={`w-7 h-7 ${tier.badge}`} />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-cream font-semibold">
                    {tier.name}
                  </h3>
                  <p className="mt-1 text-sm text-cream/65">{tier.desc}</p>
                </div>
              </div>

              <div className="relative grid grid-cols-2 gap-3">
                {tier.sponsors.map((s) => (
                  <div
                    key={s}
                    className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-cream/85 text-xs font-medium hover:bg-white/10 hover:text-gold transition-colors"
                  >
                    <Star className="w-3.5 h-3.5 text-gold/70 shrink-0" />
                    <span className="truncate">{s}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </StaggerGroup>

        {/* Animated logo marquee */}
        <Reveal delay={0.2}>
          <div className="mt-16">
            <div className="text-center text-[11px] uppercase tracking-[0.3em] text-gold/80 font-semibold mb-6">
              Trusted by leading institutions
            </div>
            <div className="relative overflow-hidden">
              {/* Edge fades */}
              <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-forest-deep to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-forest-deep to-transparent z-10 pointer-events-none" />

              <motion.div
                className="flex gap-6 sm:gap-10"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                {[...TIERS.flatMap((t) => t.sponsors), ...TIERS.flatMap((t) => t.sponsors)].map((s, i) => (
                  <div
                    key={`${s}-${i}`}
                    className="shrink-0 px-6 py-3 rounded-xl glass-card text-cream/80 text-sm font-semibold whitespace-nowrap"
                  >
                    {s}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
