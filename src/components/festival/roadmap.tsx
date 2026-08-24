"use client";

import { motion } from "framer-motion";
import {
  Rocket,
  Newspaper,
  Sparkles,
  Church,
  Trash2,
  Stethoscope,
  GraduationCap,
  HandHeart,
  HeartPulse,
  Trophy,
  Bike,
  Dices,
  Mountain,
  UtensilsCrossed,
  Footprints,
  Music4,
  Shirt,
  Home,
  Wrench,
  Users,
  Brain,
  CookingPot,
  Award,
  Mic2,
  ScrollText,
  Landmark,
  ChevronRight,
  Map as MapIcon,
} from "lucide-react";
import { SectionHeading } from "./section-heading";
import { SectionShell } from "./gold-button";
import { Reveal, StaggerGroup, staggerItem } from "./reveal";

interface Activity {
  icon: typeof Rocket;
  name: string;
}

interface Phase {
  icon: typeof Rocket;
  title: string;
  desc: string;
  accent: string;
  activities: Activity[];
}

const PHASES: Phase[] = [
  {
    icon: Rocket,
    title: "Launch & Opening",
    desc: "Official launch of the 10th Anniversary Celebration",
    accent: "from-amber-400/30 to-amber-600/20",
    activities: [
      { icon: Rocket, name: "Official launch of the 10th Anniversary Celebration" },
      { icon: Newspaper, name: "Press conference and media engagement" },
      { icon: Sparkles, name: "Unveiling of the anniversary logo and theme" },
      { icon: Church, name: "Interdenominational thanksgiving service" },
    ],
  },
  {
    icon: HandHeart,
    title: "Community Outreach",
    desc: "Giving back to the people of Denu",
    accent: "from-rose-400/30 to-rose-600/20",
    activities: [
      { icon: Trash2, name: "Community clean-up exercise (Nugoryiyi Za Trash-to-change)" },
      { icon: Stethoscope, name: "Health screening" },
      { icon: GraduationCap, name: "Educational outreach in schools" },
      { icon: HandHeart, name: "Donation to schools, hospitals or vulnerable groups" },
    ],
  },
  {
    icon: Trophy,
    title: "Health & Sports",
    desc: "Active celebrations for body and community",
    accent: "from-emerald-400/30 to-emerald-600/20",
    activities: [
      { icon: HeartPulse, name: "Health walk (Nugoryiyi Za Stepfest)" },
      { icon: Trophy, name: "Football gala" },
      { icon: Footprints, name: "Athletics" },
      { icon: Dices, name: "Indoor games (Ludo, Draughts, Oware)" },
      { icon: Bike, name: "Cycling event" },
      { icon: Mountain, name: "Beyond The High" },
    ],
  },
  {
    icon: Music4,
    title: "Culture & Fashion",
    desc: "Showcasing the heritage and style of Denu",
    accent: "from-yellow-400/30 to-yellow-600/20",
    activities: [
      { icon: UtensilsCrossed, name: "Traditional food exhibition" },
      { icon: Footprints, name: "Cultural procession" },
      { icon: Music4, name: "Cultural Performances" },
      { icon: Shirt, name: "Fashion Runway" },
      { icon: Home, name: "Homecoming procession" },
    ],
  },
  {
    icon: Brain,
    title: "Youth & Skills Development",
    desc: "Equipping the next generation of leaders",
    accent: "from-sky-400/30 to-sky-600/20",
    activities: [
      { icon: Wrench, name: "Skills Training" },
      { icon: Users, name: "Youth Summit" },
      { icon: Brain, name: "Quiz Competition" },
    ],
  },
  {
    icon: Award,
    title: "Celebration & Fundraising",
    desc: "Galas, concerts and giving back",
    accent: "from-purple-400/30 to-purple-600/20",
    activities: [
      { icon: HandHeart, name: "Fundraising for a legacy project" },
      { icon: CookingPot, name: "Nugoryiyi Za Cooking Contest" },
      { icon: Award, name: "Icons of Denu Gala Night" },
      { icon: Mic2, name: "Live musical concert (Nugoryiyi Za WaveFest)" },
    ],
  },
  {
    icon: Landmark,
    title: "Heritage & Reflection",
    desc: "Honouring the ancestors and shared history",
    accent: "from-forest-light/40 to-forest/20",
    activities: [
      { icon: Landmark, name: "A Visit to Hedzranawo Slave Market and Slavery Museum" },
    ],
  },
];

const TOTAL_ACTIVITIES = PHASES.reduce((sum, p) => sum + p.activities.length, 0);

export function Roadmap() {
  return (
    <SectionShell id="roadmap" className="bg-cream">
      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 0L50 30L80 40L50 50L40 80L30 50L0 40L30 30Z' fill='%23003018'/%3E%3C/svg%3E\")",
          backgroundSize: "80px 80px",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Roadmap for 2027"
          title="The full 10th Anniversary programme"
          description="Twenty-seven activities across seven themed phases — a year-long roadmap of celebration, service, sport, culture, learning, fundraising and heritage honouring a decade of Denu Nugoryiyi Zà."
        />

        {/* Quick stats */}
        <Reveal delay={0.1}>
          <div className="mt-10 grid grid-cols-3 max-w-2xl mx-auto gap-3 sm:gap-4">
            <div className="rounded-2xl bg-gradient-forest p-4 sm:p-5 text-center text-cream shadow-premium">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-gradient-gold">
                {TOTAL_ACTIVITIES}
              </div>
              <div className="mt-1 text-[10px] sm:text-xs uppercase tracking-wider text-cream/70 font-semibold">
                Activities
              </div>
            </div>
            <div className="rounded-2xl bg-white p-4 sm:p-5 text-center shadow-[0_10px_30px_-15px_rgba(8,63,34,0.25)] border border-forest/8">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-forest">
                {PHASES.length}
              </div>
              <div className="mt-1 text-[10px] sm:text-xs uppercase tracking-wider text-forest/60 font-semibold">
                Themed Phases
              </div>
            </div>
            <div className="rounded-2xl bg-white p-4 sm:p-5 text-center shadow-[0_10px_30px_-15px_rgba(8,63,34,0.25)] border border-forest/8">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-forest">
                10
                <span className="text-lg">th</span>
              </div>
              <div className="mt-1 text-[10px] sm:text-xs uppercase tracking-wider text-forest/60 font-semibold">
                Anniversary
              </div>
            </div>
          </div>
        </Reveal>

        {/* Phases */}
        <div className="mt-16 space-y-10 sm:space-y-12">
          {PHASES.map((phase, pi) => (
            <Reveal key={phase.title} delay={pi * 0.05}>
              <div className="relative rounded-3xl bg-white shadow-[0_10px_40px_-15px_rgba(8,63,34,0.25)] border border-forest/8 overflow-hidden">
                {/* Phase header */}
                <div className="relative px-6 sm:px-8 lg:px-10 py-6 bg-gradient-forest overflow-hidden">
                  <div
                    className={`absolute -top-16 -right-16 w-56 h-56 rounded-full blur-3xl bg-gradient-to-br ${phase.accent}`}
                  />
                  <div className="relative flex items-start sm:items-center gap-4 sm:gap-5">
                    <div className="shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-gold text-forest-deep flex items-center justify-center shadow-gold-glow">
                      <phase.icon className="w-7 h-7 sm:w-8 sm:h-8" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="font-serif text-2xl sm:text-3xl text-gold/40 font-bold">
                          {String(pi + 1).padStart(2, "0")}
                        </span>
                        <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl text-cream font-bold leading-tight">
                          {phase.title}
                        </h3>
                      </div>
                      <p className="mt-1 text-cream/70 text-xs sm:text-sm">
                        {phase.desc}
                      </p>
                    </div>
                    <div className="hidden sm:block shrink-0 text-right">
                      <div className="font-serif text-3xl font-bold text-gradient-gold">
                        {phase.activities.length}
                      </div>
                      <div className="text-[10px] uppercase tracking-wider text-cream/60 font-semibold">
                        Activities
                      </div>
                    </div>
                  </div>
                </div>

                {/* Activities grid */}
                <div className="p-5 sm:p-7 lg:p-8">
                  <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                    {phase.activities.map((a, ai) => (
                      <motion.div
                        key={a.name}
                        variants={staggerItem}
                        className="group flex items-start gap-3 p-4 rounded-2xl bg-cream/60 border border-forest/8 hover:border-gold/40 hover:bg-white hover:shadow-premium transition-all duration-300"
                      >
                        <div className="shrink-0 w-10 h-10 rounded-xl bg-gold/15 text-forest flex items-center justify-center group-hover:bg-gradient-gold group-hover:text-forest-deep transition-all">
                          <a.icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0 pt-0.5">
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className="text-[10px] uppercase tracking-wider text-gold-deep font-bold">
                              {String(ai + 1).padStart(2, "0")}
                            </span>
                            <span className="w-4 h-px bg-forest/15" />
                          </div>
                          <p className="text-sm text-forest font-medium leading-snug">
                            {a.name}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </StaggerGroup>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Closing CTA */}
        <Reveal delay={0.1}>
          <div className="mt-16 text-center">
            <p className="text-forest/70 text-sm sm:text-base max-w-2xl mx-auto mb-6">
              The full 2027 roadmap honours a decade of peace, unity and
              development — and lays the foundation for the next ten years of
              Denu Nugoryiyi Zà.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="#schedule"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-gold text-forest font-semibold uppercase tracking-wide text-sm shadow-gold-glow hover:scale-105 transition-transform"
              >
                View Daily Schedule
                <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="#register"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-forest/15 text-forest hover:border-gold hover:text-gold-deep font-semibold uppercase tracking-wide text-sm transition-colors"
              >
                Register to Participate
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
