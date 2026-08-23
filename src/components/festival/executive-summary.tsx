"use client";

import { motion } from "framer-motion";
import {
  CalendarDays,
  MapPin,
  Users,
  Clock,
  Target,
  TrendingUp,
  Globe2,
  HandHeart,
  Building2,
  Sparkles,
  Download,
  ChevronRight,
} from "lucide-react";
import { SectionHeading } from "./section-heading";
import { SectionShell } from "./gold-button";
import { Reveal, StaggerGroup, staggerItem } from "./reveal";
import { useToast } from "@/hooks/use-toast";

const FACTS = [
  { icon: CalendarDays, label: "Festival Dates", value: "26 – 29 November 2026" },
  { icon: MapPin, label: "Location", value: "Denu, Volta Region, Ghana" },
  { icon: Clock, label: "Duration", value: "4 Days · 80+ Events" },
  { icon: Users, label: "Expected Attendance", value: "25,000+ Visitors" },
];

const PILLARS = [
  {
    icon: Target,
    title: "Cultural Celebration",
    body: "Grand durbar of chiefs and queen mothers, Ewe drumming and dance, choral festivals, pageants and beach concerts — the premier cultural showcase of the south-eastern coast.",
  },
  {
    icon: TrendingUp,
    title: "Community Development",
    body: "Every festival pairs celebration with lasting impact — schools, health facilities, water projects, youth skills centres and women empowerment programmes funded by sponsors and diaspora.",
  },
  {
    icon: Globe2,
    title: "Tourism & Investment",
    body: "Denu positions itself as Ghana's emerging coastal cultural destination — attracting tourists, diaspora investors, development partners and global attention to the Volta Region.",
  },
  {
    icon: HandHeart,
    title: "Heritage & Legacy",
    body: "Preserving Ewe language, proverbs, traditional attire and ancestral customs while forging a modern future for the next generation of Denu's sons and daughters.",
  },
];

const KPIs = [
  { value: "12", label: "Community Projects", suffix: "" },
  { value: "4.6", label: "Mobilised (GHS)", suffix: "M+" },
  { value: "18", label: "Lives Impacted", suffix: "K+" },
  { value: "32", label: "Partner Institutions", suffix: "" },
];

export function ExecutiveSummary() {
  const { toast } = useToast();

  const handleDownload = () => {
    toast({
      title: "Downloading Executive Summary",
      description: "Denu-Nugoryiyi-Za-Executive-Summary-2026.pdf — 2.4 MB",
    });
  };

  return (
    <SectionShell id="executive-summary" className="bg-cream">
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
          eyebrow="Executive Summary"
          title="Denu Nugoryiyi Za at a glance"
          description="A concise overview of the Denu Nugoryiyi Za Festival (Zordede Vava) — its purpose, scale, impact and the opportunity it offers to partners, sponsors, visitors and the global community."
        />

        {/* Quick facts strip */}
        <StaggerGroup className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {FACTS.map((f) => (
            <motion.div
              key={f.label}
              variants={staggerItem}
              className="group rounded-2xl bg-white p-5 sm:p-6 shadow-[0_10px_30px_-15px_rgba(8,63,34,0.25)] hover:shadow-premium transition-shadow border border-forest/8 text-center"
            >
              <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold-glow group-hover:scale-110 transition-transform">
                <f.icon className="w-6 h-6 text-forest-deep" />
              </div>
              <div className="mt-4 font-serif text-base sm:text-lg text-forest font-semibold leading-tight">
                {f.value}
              </div>
              <div className="mt-1 text-[11px] uppercase tracking-wider text-forest/60 font-semibold">
                {f.label}
              </div>
            </motion.div>
          ))}
        </StaggerGroup>

        {/* Overview narrative */}
        <Reveal delay={0.1}>
          <div className="mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-forest/10 text-forest text-[11px] font-semibold uppercase tracking-[0.2em] border border-forest/15">
                  <Sparkles className="w-3.5 h-3.5 text-gold" />
                  Overview
                </div>
                <h3 className="mt-5 font-serif text-3xl sm:text-4xl text-forest font-bold leading-tight">
                  A festival of heritage, development and global connection
                </h3>
                <p className="mt-4 text-forest/70 text-sm leading-relaxed">
                  Download the full executive summary or read on for the
                  high-level picture partners and sponsors need.
                </p>
                <button
                  onClick={handleDownload}
                  className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-gold text-forest font-semibold uppercase tracking-wide text-xs shadow-gold-glow hover:scale-105 transition-transform"
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </button>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-5">
              <Reveal>
                <p className="text-forest/80 leading-relaxed text-base sm:text-lg">
                  The <strong className="text-forest">Denu Nugoryiyi Za Festival</strong>{" "}
                  (Zordede Vava) is the annual cultural assembly of the people
                  of Denu, a vibrant coastal community in the Ketu South
                  Municipality of Ghana's Volta Region. Held over four days each
                  November, the festival brings together chiefs, queen mothers,
                  families, the diaspora and visitors from across Ghana and the
                  world for a celebration of Ewe heritage, unity and progress.
                </p>
              </Reveal>
              <Reveal delay={0.05}>
                <p className="text-forest/80 leading-relaxed text-base">
                  At its heart, Nugoryiyi Za is more than a cultural event — it
                  is a working festival. Each year, the pageantry of the grand
                  durbar is paired with measurable community development:
                  school blocks rehabilitated, health facilities upgraded,
                  solar-powered boreholes commissioned, youth skilled and women
                  empowered. The festival has become the single most important
                  mobilising platform for the Denu community.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-forest/80 leading-relaxed text-base">
                  For partners, the festival offers exceptional reach into a
                  growing coastal market, visibility before a 25,000+ audience,
                  alignment with community impact, and the chance to stand
                  alongside Some Traditional Area and the people of Denu in
                  shaping the next chapter of Ghana's cultural and economic
                  story.
                </p>
              </Reveal>

              {/* KPI cards */}
              <Reveal delay={0.15}>
                <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {KPIs.map((kpi) => (
                    <div
                      key={kpi.label}
                      className="rounded-2xl bg-gradient-forest p-4 text-center text-cream shadow-premium"
                    >
                      <div className="font-serif text-2xl sm:text-3xl font-bold text-gradient-gold">
                        {kpi.value}
                        <span className="text-lg">{kpi.suffix}</span>
                      </div>
                      <div className="mt-1 text-[10px] uppercase tracking-wider text-cream/70 font-semibold">
                        {kpi.label}
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </Reveal>

        {/* Strategic pillars */}
        <div className="mt-20">
          <Reveal>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-forest/8 text-forest text-[11px] font-semibold uppercase tracking-[0.2em] border border-forest/10">
                <Target className="w-3.5 h-3.5 text-gold" />
                Strategic Pillars
              </div>
              <h3 className="mt-5 font-serif text-3xl sm:text-4xl text-forest font-bold">
                Four pillars, one vision
              </h3>
            </div>
          </Reveal>

          <StaggerGroup className="mt-12 grid md:grid-cols-2 gap-5 sm:gap-6">
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.title}
                variants={staggerItem}
                className="group relative rounded-3xl bg-white p-7 sm:p-8 shadow-[0_10px_30px_-15px_rgba(8,63,34,0.25)] hover:shadow-premium transition-all duration-500 border border-forest/8 overflow-hidden"
              >
                <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-gold/0 group-hover:bg-gold/15 blur-2xl transition-all duration-500" />
                <div className="relative flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-forest text-gold flex items-center justify-center shrink-0 shadow-premium">
                    <p.icon className="w-7 h-7" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-serif text-3xl text-forest/15 font-bold">
                        0{i + 1}
                      </span>
                      <h4 className="font-serif text-xl text-forest font-semibold">
                        {p.title}
                      </h4>
                    </div>
                    <p className="mt-2 text-sm text-forest/70 leading-relaxed">
                      {p.body}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>

        {/* At-a-glance detail table */}
        <Reveal delay={0.1}>
          <div className="mt-20 rounded-3xl bg-white shadow-premium border border-forest/8 overflow-hidden">
            <div className="px-7 sm:px-8 py-6 bg-gradient-forest text-cream">
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-gold" />
                <h3 className="font-serif text-xl sm:text-2xl font-semibold">
                  Festival Profile
                </h3>
              </div>
              <p className="mt-1 text-cream/70 text-sm">
                Key details for sponsors, partners and the press
              </p>
            </div>
            <div className="divide-y divide-forest/8">
              {[
                { k: "Festival Name", v: "Denu Nugoryiyi Za (Zordede Vava)" },
                { k: "Edition", v: "Annual · 4-day celebration" },
                { k: "Host Community", v: "Denu, Ketu South Municipality, Volta Region" },
                { k: "Organising Body", v: "Some Traditional Area & Festival Secretariat" },
                { k: "Primary Audience", v: "Denu community, Volta Region, diaspora, tourists" },
                { k: "Strategic Partners", v: "Government, NGOs, corporate sponsors, diaspora networks" },
                { k: "Development Focus", v: "Education, health, water, youth, women, environment" },
                { k: "Tourism Positioning", v: "Coastal cultural destination · Volta Region, Ghana" },
              ].map((row, i) => (
                <motion.div
                  key={row.k}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * i }}
                  className="grid sm:grid-cols-3 gap-2 px-7 sm:px-8 py-4 hover:bg-cream/60 transition-colors"
                >
                  <div className="text-xs uppercase tracking-wider text-forest/55 font-semibold">
                    {row.k}
                  </div>
                  <div className="sm:col-span-2 text-sm text-forest font-medium">
                    {row.v}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* CTAs */}
        <Reveal delay={0.15}>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#sponsorship"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-gold text-forest font-semibold uppercase tracking-wide text-sm shadow-gold-glow hover:scale-105 transition-transform"
            >
              Partner with the Festival
              <ChevronRight className="w-4 h-4" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-forest/15 text-forest hover:border-gold hover:text-gold-deep font-semibold uppercase tracking-wide text-sm transition-colors"
            >
              Read Full Story
            </a>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
