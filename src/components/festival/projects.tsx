"use client";

import { motion } from "framer-motion";
import {
  Library,
  GraduationCap,
  Stethoscope,
  Building2,
  MapPin,
  Users,
  Network,
  Globe2,
  Handshake,
  TrendingUp,
  HandCoins,
  Target,
} from "lucide-react";
import { SectionHeading } from "./section-heading";
import { SectionShell } from "./gold-button";
import { Reveal, StaggerGroup, staggerItem } from "./reveal";

const LEGACY_PROJECTS = [
  {
    icon: Library,
    title: "Community Library",
    text: "Construction or renovation of a community library.",
  },
  {
    icon: GraduationCap,
    title: "Scholarship Scheme",
    text: "Scholarship Scheme for brilliant but needy students.",
  },
  {
    icon: Stethoscope,
    title: "Community Health Outreach Programme",
    text: "Community Health Outreach Programme.",
  },
  {
    icon: Building2,
    title: "Renovation of Public Facilities",
    text: "Renovation of selected public facilities.",
  },
  {
    icon: MapPin,
    title: "Street Signs & Community Monuments",
    text: "Installation of street signs or community monuments commemorating the anniversary.",
  },
];

const EXPECTED_OUTCOMES = [
  {
    icon: Users,
    text: "Increase community unity and participation.",
  },
  {
    icon: Network,
    text: "Strengthen relationships among residents and the diaspora.",
  },
  {
    icon: Globe2,
    text: "Promote Denu's cultural identity nationally and internationally.",
  },
  {
    icon: Handshake,
    text: "Attract development partnerships and investment.",
  },
  {
    icon: TrendingUp,
    text: "Increase tourism and local business activities.",
  },
  {
    icon: HandCoins,
    text: "Raise funds for sustainable community projects.",
  },
];

export function Projects() {
  return (
    <SectionShell id="projects" className="bg-cream">
      {/* Decorative pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='1' fill='%23083F22'/%3E%3C/svg%3E\")",
          backgroundSize: "30px 30px",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Proposed Legacy Projects"
          title="Proposed Legacy Projects"
          description="To ensure the anniversary leaves a lasting impact, the Planning Committee may undertake one or more of the following:"
        />

        <StaggerGroup className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {LEGACY_PROJECTS.map((p, i) => (
            <motion.div
              key={p.title}
              variants={staggerItem}
              className="group relative rounded-2xl p-6 bg-white border border-forest/10 hover:border-gold/40 hover:shadow-premium transition-all duration-500 overflow-hidden"
            >
              <div className="absolute -right-6 -top-6 w-20 h-20 rounded-full bg-gold/0 group-hover:bg-gold/15 blur-2xl transition-all duration-500" />
              <div className="relative">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-forest text-gold flex items-center justify-center shadow-premium group-hover:scale-110 transition-transform">
                    <p.icon className="w-6 h-6" />
                  </div>
                  <span className="font-serif text-3xl text-forest/10 font-bold group-hover:text-gold/25 transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h5 className="font-serif text-base sm:text-lg text-forest font-semibold leading-tight">
                  {p.title}
                </h5>
                <p className="mt-2 text-sm text-forest/70 leading-relaxed">
                  {p.text}
                </p>
              </div>
            </motion.div>
          ))}
        </StaggerGroup>

        {/* Expected Outcomes */}
        <div className="mt-24">
          <Reveal>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-forest/8 text-forest text-[11px] font-semibold uppercase tracking-[0.2em] border border-forest/10">
                <Target className="w-3.5 h-3.5 text-gold" />
                Anticipated Impact
              </div>
              <h3 className="mt-5 font-serif text-3xl sm:text-4xl text-forest font-bold">
                Expected Outcomes
              </h3>
              <p className="mt-4 text-forest/70 max-w-2xl mx-auto text-sm sm:text-base">
                The successful implementation of the anniversary celebration is
                expected to:
              </p>
            </div>
          </Reveal>

          <StaggerGroup className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {EXPECTED_OUTCOMES.map((o, i) => (
              <motion.div
                key={o.text}
                variants={staggerItem}
                className="group relative rounded-2xl p-6 bg-gradient-forest text-cream border border-gold/15 hover:border-gold/40 hover:shadow-premium transition-all duration-500 overflow-hidden"
              >
                <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-gold/10 group-hover:bg-gold/20 blur-2xl transition-all duration-500" />
                <div className="relative flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-gold text-forest-deep flex items-center justify-center shadow-gold-glow group-hover:scale-110 transition-transform">
                    <o.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-serif text-2xl text-gold/30 font-bold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="w-4 h-px bg-gold/30" />
                    </div>
                    <p className="text-sm sm:text-base text-cream/90 leading-relaxed font-medium">
                      {o.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </SectionShell>
  );
}
