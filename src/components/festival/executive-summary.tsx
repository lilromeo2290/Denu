"use client";

import { motion } from "framer-motion";
import {
  CalendarDays,
  MapPin,
  Users,
  Sparkles,
  Download,
  Target,
  Eye,
  TrendingUp,
  Award,
  HandHeart,
  Globe2,
  Building2,
  Briefcase,
  HeartHandshake,
  ChevronRight,
  Quote,
} from "lucide-react";
import { SectionHeading } from "./section-heading";
import { SectionShell } from "./gold-button";
import { Reveal, StaggerGroup, staggerItem } from "./reveal";
import { useToast } from "@/hooks/use-toast";

const QUICK_FACTS = [
  { icon: Award, label: "Edition", value: "10th Anniversary" },
  { icon: CalendarDays, label: "Festival Dates", value: "26 – 29 November 2027" },
  { icon: MapPin, label: "Location", value: "Denu, Volta Region, Ghana" },
  { icon: Users, label: "Expected Attendance", value: "25,000+ Visitors" },
];

const BENEFITS = [
  {
    icon: Globe2,
    title: "Tourism & Visibility",
    body: "Increased tourist arrivals and enhanced visibility for Denu as a premier cultural destination on Ghana's coast.",
  },
  {
    icon: Briefcase,
    title: "Local Economic Growth",
    body: "Greater opportunities for local businesses, entrepreneurs and the broader Volta Region economy.",
  },
  {
    icon: Sparkles,
    title: "Youth Engagement",
    body: "Stronger youth participation in cultural preservation, skills development and community leadership.",
  },
  {
    icon: HeartHandshake,
    title: "Heritage Preservation",
    body: "Safeguarding Ewe language, proverbs, drumming, dancing and traditional customs for generations to come.",
  },
  {
    icon: Building2,
    title: "Stakeholder Collaboration",
    body: "Improved partnership between public and private sector institutions around shared community goals.",
  },
  {
    icon: TrendingUp,
    title: "Sponsor Value",
    body: "Extensive brand exposure, direct engagement with thousands of attendees, positive media visibility and CSR impact.",
  },
];

export function ExecutiveSummary() {
  const { toast } = useToast();

  const handleDownload = () => {
    toast({
      title: "Downloading Executive Summary",
      description: "Denu-Nugoryiyi-Za-Executive-Summary-10th-Anniversary.pdf — 2.8 MB",
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
          title="Denu Nugoryiyi Zà at a glance"
          description="The flagship annual cultural festival of the people of Denu — dedicated to celebrating our rich cultural heritage while promoting unity, tourism, youth empowerment and sustainable community development."
        />

        {/* Theme banner */}
        <Reveal delay={0.1}>
          <div className="mt-14 relative rounded-3xl overflow-hidden bg-gradient-forest shadow-premium">
            {/* Decorative kente strip top */}
            <div className="kente-divider" />
            <div className="relative px-6 sm:px-10 lg:px-14 py-10 sm:py-12 lg:py-16 text-center">
              {/* Gold glow */}
              <div className="absolute -top-1/4 left-1/2 -translate-x-1/2 w-[60vw] h-[40vh] bg-gold/15 blur-[120px] rounded-full pointer-events-none" />

              <div className="relative">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/15 text-gold text-[11px] font-bold uppercase tracking-[0.28em] border border-gold/30">
                  <Sparkles className="w-3.5 h-3.5" />
                  10th Anniversary Edition · 2027
                </div>

                <h3 className="mt-6 font-serif text-2xl sm:text-4xl lg:text-5xl text-cream font-bold leading-tight text-shadow-strong">
                  “Celebrating a Decade of Unity,
                  <br className="hidden sm:block" />
                  Heritage and Sustainable Development”
                </h3>

                <p className="mt-5 text-cream/80 text-sm sm:text-base max-w-2xl mx-auto">
                  The 2027 edition marks ten years of preserving our heritage,
                  fostering community cohesion and driving developmental
                  initiatives — envisioned as the biggest and most impactful
                  festival since inception.
                </p>
              </div>
            </div>
            <div className="kente-divider" />
          </div>
        </Reveal>

        {/* Quick facts strip */}
        <StaggerGroup className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {QUICK_FACTS.map((f) => (
            <motion.div
              key={f.label}
              variants={staggerItem}
              className="group rounded-2xl bg-white p-5 sm:p-6 shadow-[0_10px_30px_-15px_rgba(8,63,34,0.25)] hover:shadow-premium transition-shadow border border-forest/8 text-center"
            >
              <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold-glow group-hover:scale-110 transition-transform">
                <f.icon className="w-6 h-6 text-forest-deep" />
              </div>
              <div className="mt-4 font-serif text-sm sm:text-base text-forest font-semibold leading-tight">
                {f.value}
              </div>
              <div className="mt-1 text-[10px] sm:text-[11px] uppercase tracking-wider text-forest/60 font-semibold">
                {f.label}
              </div>
            </motion.div>
          ))}
        </StaggerGroup>

        {/* Main narrative with sticky sidebar */}
        <div className="mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Sidebar */}
          <Reveal className="lg:col-span-1">
            <div className="lg:sticky lg:top-24">
              <div className="rounded-3xl bg-gradient-forest p-7 shadow-premium text-cream">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/15 text-gold text-[11px] font-semibold uppercase tracking-[0.2em] border border-gold/25">
                  <Download className="w-3.5 h-3.5" />
                  Download
                </div>
                <h3 className="mt-5 font-serif text-2xl font-bold leading-tight">
                  Full Executive Summary
                </h3>
                <p className="mt-2 text-cream/70 text-sm leading-relaxed">
                  The complete festival brief — perfect for sponsors, partners,
                  media and prospective investors.
                </p>
                <button
                  onClick={handleDownload}
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-gold text-forest font-semibold uppercase tracking-wide text-xs shadow-gold-glow hover:scale-[1.02] transition-transform"
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </button>
                <div className="mt-5 pt-5 border-t border-gold/15 space-y-2.5 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-cream/60 uppercase tracking-wider">Edition</span>
                    <span className="text-cream font-semibold">10th Anniversary</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-cream/60 uppercase tracking-wider">Year</span>
                    <span className="text-cream font-semibold">2027</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-cream/60 uppercase tracking-wider">Pages</span>
                    <span className="text-cream font-semibold">12</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-cream/60 uppercase tracking-wider">Size</span>
                    <span className="text-cream font-semibold">2.8 MB</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Lead paragraph */}
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-forest/8 text-forest text-[11px] font-semibold uppercase tracking-[0.2em] border border-forest/10 mb-5">
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                About the Festival
              </div>
              <p className="text-forest/85 leading-relaxed text-base sm:text-lg">
                <strong className="text-forest">Denu Nugoryiyi Zà</strong> is the
                flagship annual cultural festival of the people of Denu in the
                Ketu South Municipality of the Volta Region, dedicated to
                celebrating our rich cultural heritage while promoting unity,
                tourism, youth empowerment and sustainable community development.
                Over the past decade, the festival has evolved into a respected
                platform that brings together government institutions, corporate
                organizations, development partners, residents and the Denu
                diaspora to celebrate our identity and collectively contribute to
                the growth of our community.
              </p>
            </Reveal>

            {/* 10th anniversary callout */}
            <Reveal delay={0.05}>
              <div className="relative rounded-2xl border-l-4 border-gold bg-white p-6 sm:p-7 shadow-[0_8px_30px_-15px_rgba(8,63,34,0.25)]">
                <Quote className="absolute top-5 right-5 w-8 h-8 text-gold/30" />
                <div className="text-[11px] uppercase tracking-[0.2em] text-gold-deep font-bold mb-2">
                  10th Anniversary · 2027
                </div>
                <p className="text-forest/85 leading-relaxed">
                  The year <strong className="text-forest">2027</strong> marks
                  the <strong className="text-forest">10th Anniversary</strong>{" "}
                  of Denu Nugoryiyi Zà — a landmark milestone that celebrates
                  ten years of preserving our heritage, fostering community
                  cohesion and driving developmental initiatives. Under the
                  theme <em className="text-forest-deep">“Celebrating a Decade
                  of Unity, Heritage and Sustainable Development,”</em> the
                  anniversary edition will present an enhanced festival
                  experience featuring cultural exhibitions, educational and
                  sporting activities, health and social interventions,
                  entertainment, business promotion and community development
                  projects. It is envisioned as the biggest and most impactful
                  edition since the festival&apos;s inception.
                </p>
              </div>
            </Reveal>

            {/* Vision */}
            <Reveal delay={0.05}>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 rounded-xl bg-gradient-forest text-gold flex items-center justify-center shadow-premium">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-forest font-bold">
                  Our Vision
                </h3>
              </div>
              <p className="text-forest/85 leading-relaxed text-base">
                To establish the 10th Anniversary celebration as a nationally
                recognized cultural event that showcases the unique identity of
                Denu, stimulates tourism and local economic growth, strengthens
                community participation and creates lasting developmental
                impact. By leveraging strategic partnerships, we seek to deliver
                a professionally organized festival that celebrates our
                achievements while inspiring a shared commitment to the future
                development of Denu.
              </p>
            </Reveal>

            {/* Expected Benefits */}
            <div>
              <Reveal>
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-9 h-9 rounded-xl bg-gradient-forest text-gold flex items-center justify-center shadow-premium">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-forest font-bold">
                    Expected Benefits
                  </h3>
                </div>
                <p className="text-forest/85 leading-relaxed text-base mb-7">
                  The celebration is expected to generate significant social,
                  cultural and economic benefits — for the community, for
                  partners and for the long-term future of Denu:
                </p>
              </Reveal>

              <StaggerGroup className="grid sm:grid-cols-2 gap-4">
                {BENEFITS.map((b) => (
                  <motion.div
                    key={b.title}
                    variants={staggerItem}
                    className="group rounded-2xl bg-white p-5 border border-forest/8 hover:border-gold/40 hover:shadow-premium transition-all duration-300"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gold/15 text-forest flex items-center justify-center shrink-0 group-hover:bg-gradient-gold group-hover:text-forest-deep transition-all">
                        <b.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-serif text-base text-forest font-semibold">
                          {b.title}
                        </h4>
                        <p className="mt-1 text-sm text-forest/70 leading-relaxed">
                          {b.body}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </StaggerGroup>
            </div>

            {/* Sponsorship invitation */}
            <Reveal delay={0.05}>
              <div className="relative rounded-3xl bg-gradient-forest p-7 sm:p-9 text-cream shadow-premium overflow-hidden">
                <div className="absolute -top-12 -right-12 w-44 h-44 rounded-full bg-gold/15 blur-3xl" />
                <div className="absolute -bottom-12 -left-12 w-44 h-44 rounded-full bg-forest-light/30 blur-3xl" />
                <div className="relative">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-gold text-forest-deep flex items-center justify-center shadow-gold-glow">
                      <HandHeart className="w-5 h-5" />
                    </div>
                    <div className="text-[11px] uppercase tracking-[0.2em] text-gold font-bold">
                      Partnership Invitation
                    </div>
                  </div>
                  <p className="text-cream/85 leading-relaxed text-base">
                    To realize this vision, we respectfully invite corporate
                    organizations, financial institutions, government agencies,
                    development partners, non-governmental organizations and
                    philanthropic individuals to partner with us as sponsors of
                    this historic celebration. Your sponsorship will not only
                    contribute to the successful organization of the festival
                    but will also position your organization as a valued partner
                    in preserving cultural heritage, promoting sustainable
                    development and empowering the people of Denu.
                  </p>
                  <p className="mt-4 font-serif text-lg sm:text-xl text-gold font-semibold italic">
                    Together, we can make the 10th Anniversary of Denu
                    Nugoryiyi Zà a memorable legacy that inspires generations to
                    come.
                  </p>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <a
                      href="#sponsorship"
                      className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-gold text-forest font-semibold uppercase tracking-wide text-sm shadow-gold-glow hover:scale-105 transition-transform"
                    >
                      Become a Sponsor
                      <ChevronRight className="w-4 h-4" />
                    </a>
                    <a
                      href="#register"
                      className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-gold/40 text-cream hover:bg-white/10 font-semibold uppercase tracking-wide text-sm transition-colors"
                    >
                      Register to Attend
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* At-a-glance profile table */}
        <Reveal delay={0.1}>
          <div className="mt-20 rounded-3xl bg-white shadow-premium border border-forest/8 overflow-hidden">
            <div className="px-7 sm:px-8 py-6 bg-gradient-forest text-cream flex items-center gap-3">
              <Target className="w-5 h-5 text-gold" />
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-semibold">
                  Festival Profile
                </h3>
                <p className="text-cream/70 text-sm mt-0.5">
                  Key details for sponsors, partners and the press
                </p>
              </div>
            </div>
            <div className="divide-y divide-forest/8">
              {[
                { k: "Festival Name", v: "Denu Nugoryiyi Zà (Zordede Vava)" },
                { k: "Edition", v: "10th Anniversary · 2027" },
                { k: "Festival Dates", v: "26 – 29 November 2027" },
                { k: "Host Community", v: "Denu, Ketu South Municipality, Volta Region" },
                { k: "Organising Body", v: "Some Traditional Area & Festival Secretariat" },
                { k: "Theme", v: "Celebrating a Decade of Unity, Heritage and Sustainable Development" },
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
                  transition={{ delay: 0.04 * i }}
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
      </div>
    </SectionShell>
  );
}
