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
  Trash2,
  Shirt,
  Footprints,
  HandHeart,
  Mountain,
  Moon,
  GraduationCap,
  Brain,
  CookingPot,
  Baby,
  Package,
} from "lucide-react";
import { SectionHeading } from "./section-heading";
import { SectionShell } from "./gold-button";
import { Reveal, StaggerGroup, staggerItem } from "./reveal";
import { useToast } from "@/hooks/use-toast";

const PACKAGES = [
  {
    icon: Crown,
    name: "Platinum (Title Sponsor)",
    amount: "GH₵100,000.00",
    color: "from-slate-200 to-slate-400",
    badge: "text-slate-700",
    ring: "ring-slate-300/40",
    popular: true,
    sponsoredEvents: [
      "Nugoryiyi Za WaveFest",
      "Nugoryiyi Za StepFest",
      "Media Publicity and Coverage",
    ],
    benefits: [
      "Extensive brand visibility through banners, flyers, T-shirts, stage backdrops, souvenirs, and all official promotional materials.",
      "Recognition throughout the festival, including mentions during the opening and closing ceremonies, interviews, advertisements, and event announcements.",
      "Wide media exposure across television, radio, newspapers, blogs, social media, livestreams, and other digital platforms.",
      "Direct access to thousands of attendees, with opportunities to showcase products and services, engage potential customers, and launch new offerings.",
      "Strong online presence through the festival's social media channels, media partners, and digital marketing campaigns.",
      "Participation in all key festival activities, including cultural exhibitions, trade fairs, health outreaches, educational programs, and community development initiatives.",
      "Long-term brand association with one of Denu's premier cultural and development festivals, demonstrating commitment to unity, cultural heritage, and sustainable community development.",
    ],
  },
  {
    icon: Medal,
    name: "Gold Sponsor",
    amount: "GH₵65,000.00",
    color: "from-amber-200 to-amber-500",
    badge: "text-amber-700",
    ring: "ring-amber-400/40",
    popular: false,
    sponsoredEvents: [
      "Corporate and Fun Games",
      "Street Fashion Runway",
      "Nugoryiyi Za Cooking Contest",
      "Icons Gala",
    ],
    benefits: [
      "Prominent brand visibility on selected festival banners, flyers, stage backdrops, T-shirts, and official promotional materials.",
      "Recognition during the opening and closing ceremonies, selected advertisements, and major event announcements.",
      "Media exposure through television, radio, social media, livestreams, and selected digital platforms.",
      "Opportunity to exhibit products and services and interact with festival attendees.",
      "Featured on the festival's social media platforms and selected digital marketing campaigns.",
      "Participation in selected festival activities such as cultural exhibitions, trade fairs, and community development initiatives.",
      "Brand association with the festival and its commitment to community development.",
    ],
  },
  {
    icon: Award,
    name: "Silver Sponsor",
    amount: "GH₵55,000.00",
    color: "from-zinc-200 to-zinc-400",
    badge: "text-zinc-700",
    ring: "ring-zinc-300/40",
    popular: false,
    sponsoredEvents: [
      "Trash-to-Change Exercise",
      "Kids Playground",
      "Quiz Competition",
      "Skills Training",
    ],
    benefits: [
      "Logo placement on selected promotional materials, banners, and event signage.",
      "Recognition during selected festival announcements and acknowledgements.",
      "Exposure through the festival's social media platforms and selected digital promotions.",
      "Opportunity to display promotional materials or products at designated festival areas.",
      "Participation in selected cultural and community engagement activities.",
      "Association with the Denu Nugoryiyi Zà Festival and its development agenda.",
    ],
  },
  {
    icon: Heart,
    name: "Bronze Sponsor",
    amount: "GH₵42,000.00",
    color: "from-amber-700 to-amber-900",
    badge: "text-amber-100",
    ring: "ring-amber-700/40",
    popular: false,
    sponsoredEvents: [
      "Arrival and Cultural Night",
      "Beyond the High",
      "Nugoryiyi Za Health Screening",
      "Nugoryiyi Za Donation Drive",
    ],
    benefits: [
      "Logo placement on selected festival promotional materials.",
      "Acknowledgement during the festival and on selected social media platforms.",
      "Opportunity to distribute promotional materials during the festival.",
      "Limited participation in selected festival activities.",
      "Recognition as an official supporter of the Denu Nugoryiyi Zà Festival and its mission of promoting unity, culture, and sustainable community development.",
    ],
  },
];

const BUDGET_CATEGORIES = [
  {
    icon: Trash2,
    name: "Clean Up Exercise",
    amount: "GH₵5,000.00",
    items: [
      "Hoes",
      "Brooms",
      "Shovels",
      "Water",
      "Gloves",
    ],
  },
  {
    icon: Shirt,
    name: "Street Fashion Runway",
    amount: "GH₵15,000.00",
    items: [
      "Venue",
      "Lighting",
      "Models",
      "P.A. System",
    ],
  },
  {
    icon: Megaphone,
    name: "Media",
    amount: "GH₵20,000.00",
    items: [
      "Radio announcement",
      "Radio and TV tour",
      "Posters and banners",
      "Hand bills",
      "Photography and videography",
      "Live streaming of events",
      "Red/Green carpet",
    ],
  },
  {
    icon: Music4,
    name: "Nugoryiyi Za WaveFest",
    amount: "GH₵70,000.00",
    items: [
      "Food and drinks fair",
      "Artistes",
      "Exhibition",
      "Stage, lighting and sound system",
    ],
  },
  {
    icon: Footprints,
    name: "Nugoryiyi Za StepFest",
    amount: "GH₵10,000.00",
    items: [
      "Vehicles",
      "P.A./Sound system",
      "Refreshment of medical team",
      "Transport of medical team",
      "Invited guest (accommodation and refreshment)",
    ],
  },
  {
    icon: HandHeart,
    name: "Nugoryiyi Za Donations Drive",
    amount: "GH₵20,000.00",
    items: [
      "Food and drinks",
      "Toiletries",
      "Clothing",
    ],
  },
  {
    icon: Mountain,
    name: "Beyond The High",
    amount: "GH₵10,000.00",
    items: [
      "Venue",
      "Donation of items",
      "Resource personnels",
      "Handbills",
    ],
  },
  {
    icon: Moon,
    name: "Arrival Night / Cultural Performance",
    amount: "GH₵7,000.00",
    items: [
      "Bonfire",
      "Borbor night",
      "Homecoming procession",
    ],
  },
  {
    icon: Trophy,
    name: "Corporate & Fun Games",
    amount: "GH₵20,000.00",
    items: [
      "Football and jerseys",
      "Sound system",
      "Basketball",
      "Paint ball",
      "Football video game",
      "Indoor games",
    ],
  },
  {
    icon: GraduationCap,
    name: "Nugoryiyi Za Skills Training and Youth Summit",
    amount: "GH₵25,000.00",
    items: [
      "Venue",
      "Learning materials",
      "Rental of tables and chairs",
      "Standby generator",
      "Paraphernalias",
      "Refreshments",
    ],
  },
  {
    icon: Brain,
    name: "Quiz Competition (JHS & SHS)",
    amount: "GH₵20,000.00",
    items: [
      "P.A. system",
      "Rentals of tents and chairs",
      "Prizes for winners (1st, 2nd and 3rd positions)",
      "Refreshments",
      "Quiz masters",
    ],
  },
  {
    icon: CookingPot,
    name: "Nugoryiyi-Za Cooking Contest",
    amount: "GH₵10,000.00",
    items: [
      "P.A. system",
      "Food items",
      "Cooking utensils",
      "Canopies, chairs and tables",
    ],
  },
  {
    icon: Award,
    name: "Icons of Denu Gala Night",
    amount: "GH₵20,000.00",
    items: [
      "Venue",
      "Chairs",
      "Tables",
      "Sound system",
      "Plaques and citations",
      "Decoration",
      "Refreshments",
    ],
  },
  {
    icon: Baby,
    name: "Kid's Playground",
    amount: "GH₵5,000.00",
    items: [
      "Rental of items",
    ],
  },
  {
    icon: Stethoscope,
    name: "Health Screening",
    amount: "GH₵5,000.00",
    items: [
      "Canopies",
      "Transportations",
      "Refreshments",
    ],
  },
  {
    icon: Package,
    name: "Miscellaneous",
    amount: "GH₵8,000.00",
    items: [],
  },
];

const TOTAL_BUDGET = "GH₵270,000.00";

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
              { label: "Budget Categories", value: "16", icon: FileText },
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

          <StaggerGroup className="mt-12 grid md:grid-cols-2 gap-6">
            {PACKAGES.map((p) => (
              <motion.div
                key={p.name}
                variants={staggerItem}
                className={`relative rounded-3xl glass-card p-6 sm:p-8 flex flex-col ${
                  p.popular ? "ring-2 ring-gold" : ""
                }`}
              >
                {p.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-gold text-forest text-[10px] font-bold uppercase tracking-wider shadow-gold-glow whitespace-nowrap">
                    Title Sponsor · Most Popular
                  </div>
                )}
                <div className="flex items-center gap-4">
                  <div className={`shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${p.color} flex items-center justify-center shadow-premium`}>
                    <p.icon className={`w-7 h-7 ${p.badge}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif text-xl sm:text-2xl text-cream font-semibold leading-tight">
                      {p.name}
                    </h4>
                    <div className="mt-1 text-lg font-bold text-gradient-gold">
                      {p.amount}
                    </div>
                  </div>
                </div>

                {/* Sponsored Events */}
                <div className="mt-6">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-gold/80 font-bold mb-2.5">
                    Sponsored Events
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {p.sponsoredEvents.map((e) => (
                      <span
                        key={e}
                        className="px-3 py-1.5 rounded-full bg-white/8 border border-gold/20 text-cream/85 text-xs font-medium"
                      >
                        {e}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Package Benefits */}
                <div className="mt-6 flex-1">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-gold/80 font-bold mb-3">
                    Package Benefits
                  </div>
                  <ul className="space-y-2.5">
                    {p.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-cream/75 leading-relaxed">
                        <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#sponsorship"
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-gradient-gold text-forest font-semibold uppercase tracking-wide text-xs shadow-gold-glow hover:scale-105 transition-transform"
                >
                  Choose {p.name.split(" ")[0]}
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
                A transparent line-by-line allocation of the 2027 anniversary
                budget across sixteen programme areas — ensuring every
                contribution drives measurable impact.
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
                      {/* Icon + name + amount */}
                      <div className="lg:col-span-5 flex items-start gap-3">
                        <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-gold text-forest-deep flex items-center justify-center shadow-gold-glow">
                          <cat.icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-serif text-lg text-cream font-semibold leading-tight">
                            {cat.name}
                          </h4>
                          <div className="mt-1.5">
                            <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-gold/15 text-gold text-xs font-bold tracking-wide border border-gold/25">
                              {cat.amount}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Items */}
                      <div className="lg:col-span-7">
                        {cat.items.length > 0 ? (
                          <ul className="grid sm:grid-cols-2 gap-2">
                            {cat.items.map((item) => (
                              <li key={item} className="flex items-start gap-2 text-xs sm:text-sm text-cream/75">
                                <span className="w-1 h-1 rounded-full bg-gold/60 shrink-0 mt-2" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-xs sm:text-sm text-cream/50 italic">
                            General contingency and unforeseen expenses
                          </p>
                        )}
                      </div>
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
