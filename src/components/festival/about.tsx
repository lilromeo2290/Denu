"use client";

import { motion } from "framer-motion";
import {
  Crown,
  BookOpen,
  HandHeart,
  Sparkles,
  Eye,
  Compass,
  Target,
  Users,
} from "lucide-react";
import { SectionHeading } from "./section-heading";
import { SectionShell } from "./gold-button";
import { Reveal, StaggerGroup, staggerItem } from "./reveal";

const VALUES = [
  {
    icon: Crown,
    title: "Heritage & Royalty",
    text: "Honouring the chieftaincy, queen mothers and ancestral customs of the Ewe people of Denu.",
  },
  {
    icon: Users,
    title: "Unity & Community",
    text: "Bringing together the people of Denu, the diaspora and friends from across Ghana and the world.",
  },
  {
    icon: HandHeart,
    title: "Development",
    text: "Channeling the spirit of celebration into schools, health facilities, water projects and youth empowerment.",
  },
  {
    icon: BookOpen,
    title: "Knowledge & Tradition",
    text: "Preserving proverbs, language, drumming and dancing for the next generation.",
  },
];

const PILLARS = [
  {
    icon: Eye,
    label: "Vision",
    text: "To position Denu Nugoryiyi Za as one of Ghana's leading cultural celebrations and a beacon of community-driven development on the Volta coastline.",
  },
  {
    icon: Compass,
    label: "Mission",
    text: "To celebrate our heritage with pride, inspire collective development, attract investment and tourism, and connect generations through culture, dialogue and shared prosperity.",
  },
  {
    icon: Target,
    label: "Purpose",
    text: "To renew our identity as a people, recognise our leaders, fund community projects, and welcome the world to experience the warmth, beauty and ambition of Denu.",
  },
];

export function About() {
  return (
    <SectionShell id="about" className="bg-cream">
      {/* Subtle decorative pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 0L50 30L80 40L50 50L40 80L30 50L0 40L30 30Z' fill='%23083F22'/%3E%3C/svg%3E\")",
          backgroundSize: "80px 80px",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About the Festival"
          title="A celebration rooted in heritage, lifted by purpose"
          description="Nugoryiyi Za — literally the festival of gathering and renewal — is the annual grand assembly of the people of Denu. Known locally as Zordede Vava, it brings chiefs, queen mothers, families, the diaspora and visitors together in a vibrant display of Ewe culture and a shared commitment to community progress."
        />

        {/* Story grid */}
        <div className="mt-16 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Reveal>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-premium aspect-[4/5] sm:aspect-[5/4]">
                <img
                  src="https://images.unsplash.com/photo-1591030413653-79c4cb1d8d0f?auto=format&fit=crop&w=1200&q=80"
                  alt="Ewe chief in colourful regalia at a Ghanaian durbar"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/60 via-transparent to-transparent" />
                {/* Floating badge */}
                <div className="absolute bottom-5 left-5 right-5 glass-card rounded-2xl p-5">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center shrink-0">
                      <Crown className="w-6 h-6 text-forest-deep" />
                    </div>
                    <div>
                      <div className="font-serif text-cream text-lg leading-tight">
                        Zordede Vava
                      </div>
                      <div className="text-cream/70 text-xs">
                        The Grand Gathering of Denu
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative gold frame */}
              <div className="absolute -top-3 -right-3 w-24 h-24 border-2 border-gold/40 rounded-3xl -z-10" />
              <div className="absolute -bottom-3 -left-3 w-24 h-24 border-2 border-forest/20 rounded-3xl -z-10" />
            </div>
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={0.1}>
              <h3 className="font-serif text-2xl sm:text-3xl text-forest font-semibold">
                The meaning of Nugoryiyi Za
              </h3>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-forest/75 leading-relaxed">
                Nugoryiyi — “the gathering of the people” — captures the heart
                of this festival: a moment when Denu calls her sons and
                daughters home. It is a time to renew bonds, honour the wisdom
                of elders, celebrate the energy of youth, and give thanks for
                the blessings of the year. Across four magnificent days, the
                community comes alive with drumming, dancing, traditional
                processions, choral music and the grand durbar of chiefs.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-forest/75 leading-relaxed">
                Beyond the pageantry, Nugoryiyi Za is a working festival. Every
                gathering is paired with development — schools rehabilitated,
                health outreaches delivered, clean water projects commissioned,
                youth skilled and women empowered. The festival is both a mirror
                reflecting who we are and a roadmap pointing to who we are
                becoming.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  "Ewe Heritage",
                  "Coastal Culture",
                  "Grand Durbar",
                  "Community Development",
                  "Diaspora Reunion",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full text-xs font-medium bg-forest/5 text-forest border border-forest/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* Vision / Mission / Purpose */}
        <StaggerGroup className="mt-20 grid md:grid-cols-3 gap-6">
          {PILLARS.map((p) => (
            <motion.div
              key={p.label}
              variants={staggerItem}
              className="relative group rounded-3xl p-8 bg-white border border-forest/8 shadow-[0_10px_30px_-15px_rgba(8,63,34,0.25)] hover:shadow-premium hover:-translate-y-1 transition-all duration-500"
            >
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-14 h-14 rounded-2xl bg-gradient-forest flex items-center justify-center text-gold shadow-premium">
                <p.icon className="w-7 h-7" />
              </div>
              <h4 className="mt-6 font-serif text-2xl text-forest font-semibold">
                {p.label}
              </h4>
              <p className="mt-3 text-forest/70 leading-relaxed text-sm">
                {p.text}
              </p>
            </motion.div>
          ))}
        </StaggerGroup>

        {/* Values grid */}
        <div className="mt-20">
          <Reveal>
            <div className="flex items-center justify-center gap-2 mb-10">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-xs uppercase tracking-[0.3em] text-forest/60 font-semibold">
                Traditional Values We Celebrate
              </span>
              <Sparkles className="w-4 h-4 text-gold" />
            </div>
          </Reveal>
          <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map((v) => (
              <motion.div
                key={v.title}
                variants={staggerItem}
                className="group relative rounded-2xl p-6 bg-cream border border-forest/10 hover:border-gold/40 hover:bg-white transition-all duration-500 overflow-hidden"
              >
                <div className="absolute -right-6 -top-6 w-20 h-20 rounded-full bg-gold/0 group-hover:bg-gold/15 blur-2xl transition-all duration-500" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-gold/15 text-forest flex items-center justify-center group-hover:bg-gradient-gold group-hover:text-forest transition-all">
                    <v.icon className="w-6 h-6" />
                  </div>
                  <h5 className="mt-4 font-serif text-lg text-forest font-semibold">
                    {v.title}
                  </h5>
                  <p className="mt-2 text-sm text-forest/70 leading-relaxed">
                    {v.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </SectionShell>
  );
}
