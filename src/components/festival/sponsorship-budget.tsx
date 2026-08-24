"use client";

import { motion } from "framer-motion";
import {
  Crown,
  Medal,
  Award,
  Heart,
  Check,
  Download,
  ChevronRight,
  HandCoins,
  ShieldCheck,
  Calculator,
  Users,
  Music4,
  Trophy,
  Stethoscope,
  Megaphone,
  Sparkles,
  Building2,
  FileText,
} from "lucide-react";
import { SectionHeading } from "./section-heading";
import { SectionShell } from "./gold-button";
import { Reveal, StaggerGroup, staggerItem } from "./reveal";
import { useToast } from "@/hooks/use-toast";

const PACKAGES = [
  {
    icon: Crown,
    name: "Platinum",
    amount: "GHS 100,000+",
    color: "from-slate-200 to-slate-400",
    badge: "text-slate-700",
    ring: "ring-slate-300/40",
    popular: false,
    benefits: [
      "Title sponsor of the Grand Durbar",
      "Premium logo placement on all festival assets",
      "10 VIP passes & 50 general passes",
      "Speaking slot at the Business Forum",
      "Dedicated social media campaign",
      "Booth at the festival expo",
    ],
  },
  {
    icon: Medal,
    name: "Gold",
    amount: "GHS 50,000 – 99,999",
    color: "from-amber-200 to-amber-500",
    badge: "text-amber-700",
    ring: "ring-amber-400/40",
    popular: true,
    benefits: [
      "Co-sponsor of a flagship event",
      "Logo on festival banners & website",
      "6 VIP passes & 30 general passes",
      "Booth at the festival expo",
      "Feature in festival newsletter",
      "Social media features",
    ],
  },
  {
    icon: Award,
    name: "Silver",
    amount: "GHS 20,000 – 49,999",
    color: "from-zinc-200 to-zinc-400",
    badge: "text-zinc-700",
    ring: "ring-zinc-300/40",
    popular: false,
    benefits: [
      "Sponsor of a community project",
      "Logo on festival website",
      "3 VIP passes & 20 general passes",
      "Booth at the festival expo",
      "Social media mention",
    ],
  },
  {
    icon: Heart,
    name: "Community Partner",
    amount: "GHS 5,000 – 19,999",
    color: "from-rose-200 to-rose-400",
    badge: "text-rose-700",
    ring: "ring-rose-300/40",
    popular: false,
    benefits: [
      "Support a community initiative",
      "Logo on the partners page",
      "2 VIP passes & 10 general passes",
      "Acknowledgement at events",
      "Social media thank-you",
    ],
  },
];

const BUDGET_CATEGORIES = [
  {
    icon: Megaphone,
    name: "Launch & Publicity",
    items: [
      "Press conference & media engagement",
      "Anniversary logo & branding",
      "Promotional materials (banners, flyers, social media)",
      "Radio & TV coverage",
    ],
    allocation: "15%",
    amount: "GHS 150,000",
  },
  {
    icon: Music4,
    name: "Cultural Events & Performances",
    items: [
      "Cultural procession & performances",
      "Fashion Runway & homecoming procession",
      "Live musical concert (WaveFest)",
      "Traditional food exhibition & Cooking Contest",
    ],
    allocation: "25%",
    amount: "GHS 250,000",
  },
  {
    icon: Trophy,
    name: "Sports & Recreation",
    items: [
      "Football gala & athletics",
      "Cycling event & indoor games",
      "Health walk (Stepfest)",
      "Beyond The High expedition",
    ],
    allocation: "12%",
    amount: "GHS 120,000",
  },
  {
    icon: Users,
    name: "Youth & Educational Programmes",
    items: [
      "Skills Training workshops",
      "Youth Summit",
      "Quiz Competition",
      "Educational outreach in schools",
    ],
    allocation: "10%",
    amount: "GHS 100,000",
  },
  {
    icon: Stethoscope,
    name: "Health & Social Interventions",
    items: [
      "Community Health Screening",
      "Donations to schools, hospitals & vulnerable groups",
      "Community clean-up (Trash-to-Change)",
      "Interdenominational thanksgiving service",
    ],
    allocation: "13%",
    amount: "GHS 130,000",
  },
  {
    icon: Sparkles,
    name: "Gala Night & Awards",
    items: [
      "Icons of Denu Gala Night",
      "Awards & recognition packages",
      "Venue, catering & hospitality",
      "Photography & documentation",
    ],
    allocation: "15%",
    amount: "GHS 150,000",
  },
  {
    icon: Building2,
    name: "Legacy Projects",
    items: [
      "Community library construction/renovation",
      "Scholarship scheme for needy students",
      "Renovation of public facilities",
      "Street signs & community monuments",
    ],
    allocation: "10%",
    amount: "GHS 100,000",
  },
];

const TOTAL_BUDGET = "GHS 1,000,000";

export function SponsorshipBudget() {
  const { toast } = useToast();

  const handleDownload = () => {
    toast({
      title: "Downloading Sponsorship & Budget Proposal",
      description: "Denu-Nugoryiyi-Za-Sponsorship-Budget-2027.pdf — 3.1 MB",
    });
  };

  return (
    <SectionShell id="sponsorship-budget" dark className="bg-forest">
      {/* Background accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[40vh] bg-gold/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[40vw] h-[40vh] bg-forest-light/30 blur-[100px] rounded-full" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          light
          eyebrow="Sponsorship & Budget"
          title="Partner with the 10th Anniversary"
          description="An overview of sponsorship packages and the festival budget — a transparent framework for individuals, corporate organizations, government agencies and development partners to join us in making the 2027 anniversary a historic success."
        />

        {/* Quick stats */}
        <Reveal delay={0.1}>
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { label: "Total Budget", value: TOTAL_BUDGET, icon: Calculator },
              { label: "Sponsorship Tiers", value: "4", icon: Award },
              { label: "Budget Categories", value: "7", icon: FileText },
              { label: "Expected Attendees", value: "25K+", icon: Users },
            ].map((s) => (
              <div
                key={s.label}
                className="glass-card rounded-2xl p-4 sm:p-5 text-center"
              >
                <s.icon className="w-5 h-5 mx-auto text-gold mb-2" />
                <div className="font-serif text-xl sm:text-2xl font-bold text-gradient-gold">
                  {s.value}
                </div>
                <div className="mt-1 text-[10px] sm:text-[11px] uppercase tracking-wider text-cream/70 font-semibold">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Sponsorship Packages */}
        <div className="mt-20">
          <Reveal>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/15 text-gold text-[11px] font-semibold uppercase tracking-[0.2em] border border-gold/25">
                <HandCoins className="w-3.5 h-3.5" />
                Sponsorship Packages
              </div>
              <h3 className="mt-5 font-serif text-3xl sm:text-4xl text-cream font-bold">
                Four tiers of partnership
              </h3>
              <p className="mt-4 text-cream/70 max-w-2xl mx-auto text-sm sm:text-base">
                Each package is designed to deliver meaningful brand exposure,
                direct engagement with attendees and tangible community impact.
              </p>
            </div>
          </Reveal>

          <StaggerGroup className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PACKAGES.map((p) => (
              <motion.div
                key={p.name}
                variants={staggerItem}
                className={`relative rounded-3xl glass-card p-6 sm:p-7 flex flex-col ${
                  p.popular ? "ring-2 ring-gold" : ""
                }`}
              >
                {p.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-gold text-forest text-[10px] font-bold uppercase tracking-wider shadow-gold-glow whitespace-nowrap">
                    Most Popular
                  </div>
                )}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${p.color} flex items-center justify-center shadow-premium`}>
                  <p.icon className={`w-7 h-7 ${p.badge}`} />
                </div>
                <h4 className="mt-5 font-serif text-2xl text-cream font-semibold">{p.name}</h4>
                <div className="mt-1 text-sm font-semibold text-gold">{p.amount}</div>
                <ul className="mt-5 space-y-2.5 flex-1">
                  {p.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-cream/75">
                      <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#sponsorship"
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-gradient-gold text-forest font-semibold uppercase tracking-wide text-xs shadow-gold-glow hover:scale-105 transition-transform"
                >
                  Choose {p.name}
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>

        {/* Budget Breakdown */}
        <div className="mt-20">
          <Reveal>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/15 text-gold text-[11px] font-semibold uppercase tracking-[0.2em] border border-gold/25">
                <Calculator className="w-3.5 h-3.5" />
                Festival Budget
              </div>
              <h3 className="mt-5 font-serif text-3xl sm:text-4xl text-cream font-bold">
                Budget Breakdown
              </h3>
              <p className="mt-4 text-cream/70 max-w-2xl mx-auto text-sm sm:text-base">
                A transparent allocation of the anniversary budget across seven
                key programme areas — ensuring every contribution drives
                measurable impact.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-12 rounded-3xl glass-card overflow-hidden shadow-premium">
              {/* Total banner */}
              <div className="px-6 sm:px-8 py-6 bg-gradient-gold text-forest-deep flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-forest/15 flex items-center justify-center">
                    <Calculator className="w-6 h-6 text-forest" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.2em] text-forest/70 font-bold">
                      Total Festival Budget
                    </div>
                    <div className="font-serif text-2xl sm:text-3xl font-bold text-forest">
                      {TOTAL_BUDGET}
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleDownload}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-forest text-cream font-semibold uppercase tracking-wide text-xs shadow-premium hover:scale-105 transition-transform"
                >
                  <Download className="w-4 h-4" />
                  Download Full Budget
                </button>
              </div>

              {/* Category rows */}
              <div className="divide-y divide-gold/15">
                {BUDGET_CATEGORIES.map((cat, i) => (
                  <motion.div
                    key={cat.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.04 * i }}
                    className="p-6 sm:p-7 hover:bg-white/5 transition-colors"
                  >
                    <div className="grid lg:grid-cols-12 gap-4 items-start">
                      {/* Icon + name + allocation */}
                      <div className="lg:col-span-4 flex items-start gap-3">
                        <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-gold text-forest-deep flex items-center justify-center shadow-gold-glow">
                          <cat.icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-serif text-lg text-cream font-semibold leading-tight">
                            {cat.name}
                          </h4>
                          <div className="mt-1 flex items-center gap-2">
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-gold/15 text-gold text-[10px] font-bold uppercase tracking-wider border border-gold/25">
                              {cat.allocation}
                            </span>
                            <span className="text-cream/70 text-xs font-semibold">
                              {cat.amount}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Items */}
                      <div className="lg:col-span-8">
                        <ul className="grid sm:grid-cols-2 gap-2">
                          {cat.items.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-xs sm:text-sm text-cream/75">
                              <span className="w-1 h-1 rounded-full bg-gold/60 shrink-0 mt-2" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Progress bar */}
                    <div className="mt-4 h-1.5 rounded-full bg-white/8 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: cat.allocation }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                        className="h-full bg-gradient-gold rounded-full relative"
                      >
                        <span className="absolute inset-0 animate-shimmer opacity-60" />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Partnership invitation */}
        <Reveal delay={0.1}>
          <div className="mt-16 relative rounded-3xl bg-gradient-gold p-7 sm:p-9 text-forest-deep shadow-premium overflow-hidden">
            <div className="absolute -top-12 -right-12 w-44 h-44 rounded-full bg-forest/15 blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-forest text-gold flex items-center justify-center shadow-premium">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-forest/70 font-bold">
                  Partnership Invitation
                </div>
              </div>
              <p className="text-forest/85 leading-relaxed text-base sm:text-lg font-medium">
                We respectfully invite corporate organizations, financial
                institutions, government agencies, development partners,
                non-governmental organizations and philanthropic individuals to
                partner with us as sponsors of this historic celebration.
              </p>
              <p className="mt-3 text-forest/70 text-sm sm:text-base">
                Your sponsorship will not only contribute to the successful
                organization of the festival but will also position your
                organization as a valued partner in preserving cultural
                heritage, promoting sustainable development and empowering the
                people of Denu.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#sponsorship"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-forest text-cream font-semibold uppercase tracking-wide text-sm shadow-premium hover:scale-105 transition-transform"
                >
                  Become a Sponsor
                  <ChevronRight className="w-4 h-4" />
                </a>
                <button
                  onClick={handleDownload}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-forest/30 text-forest hover:bg-forest hover:text-cream font-semibold uppercase tracking-wide text-sm transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download Proposal
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
