"use client";

import { motion } from "framer-motion";
import {
  School,
  HeartPulse,
  Route,
  Droplets,
  Briefcase,
  Flower2,
  Palmtree,
  Leaf,
  HandCoins,
  ArrowUpRight,
} from "lucide-react";
import { SectionHeading } from "./section-heading";
import { SectionShell } from "./gold-button";
import { Reveal, StaggerGroup, staggerItem } from "./reveal";

const PROJECTS = [
  {
    icon: School,
    title: "Denu Community Senior High School Block",
    category: "Schools",
    status: "In Progress",
    progress: 68,
    image:
      "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=1200&q=80",
    funding: "GHS 1.2M raised of GHS 1.8M",
    desc: "A six-classroom block with science laboratory and ICT centre serving 400 students from Denu and surrounding communities.",
  },
  {
    icon: HeartPulse,
    title: "Denu CHPS Compound Upgrade",
    category: "Health Facilities",
    status: "Completed",
    progress: 100,
    image:
      "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=1200&q=80",
    funding: "GHS 480K fully funded",
    desc: "Upgraded Community Health Planning compound with maternity ward, dispensary and 24/7 emergency capacity.",
  },
  {
    icon: Route,
    title: "Denu–Aflao Coastal Road Resurfacing",
    category: "Roads",
    status: "Planned",
    progress: 18,
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    funding: "GHS 950K of GHS 4.2M",
    desc: "12 km of resurfaced coastal road connecting Denu to Aflao, improving trade, tourism and emergency access.",
  },
  {
    icon: Droplets,
    title: "Agbedrafo Borehole & Reticulation",
    category: "Water Projects",
    status: "In Progress",
    progress: 75,
    image:
      "https://images.unsplash.com/photo-1541252260730-0412e8e2108e?auto=format&fit=crop&w=1200&q=80",
    funding: "GHS 320K of GHS 420K",
    desc: "Solar-powered borehole and 5 km reticulation network bringing clean water to 3,500 residents.",
  },
  {
    icon: Briefcase,
    title: "Youth Skills & ICT Centre",
    category: "Youth Employment",
    status: "In Progress",
    progress: 52,
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    funding: "GHS 580K of GHS 1.1M",
    desc: "Vocational training in carpentry, fashion, coding and digital marketing for 250 youth per year.",
  },
  {
    icon: Flower2,
    title: "Women in Trade Micro-Grant Programme",
    category: "Women Empowerment",
    status: "Ongoing",
    progress: 84,
    image:
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=1200&q=80",
    funding: "GHS 240K disbursed of GHS 300K",
    desc: "Micro-grants and business mentorship for 180 women traders, food processors and artisans across Denu.",
  },
  {
    icon: Palmtree,
    title: "Denu Beach Tourism Promenade",
    category: "Tourism Development",
    status: "Planned",
    progress: 22,
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    funding: "GHS 410K of GHS 1.9M",
    desc: "A 1.4 km beachfront promenade with kiosks, seating, lighting and an open-air amphitheatre.",
  },
  {
    icon: Leaf,
    title: "Coastal Mangrove Restoration",
    category: "Environmental Conservation",
    status: "Ongoing",
    progress: 47,
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80",
    funding: "GHS 180K of GHS 380K",
    desc: "Restoring 25 hectares of mangrove ecosystem and training 60 youth as eco-rangers.",
  },
];

const STATUS_STYLES: Record<string, string> = {
  Completed: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  "In Progress": "bg-gold/15 text-gold border-gold/30",
  Planned: "bg-blue-400/15 text-blue-300 border-blue-400/30",
  Ongoing: "bg-amber-400/15 text-amber-300 border-amber-400/30",
};

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
          eyebrow="Development Projects"
          title="Celebration that builds the community"
          description="Every festival is paired with lasting development. These projects — funded by sponsors, partners and the generosity of the diaspora — are transforming Denu into a model coastal community."
        />

        <StaggerGroup className="mt-16 grid md:grid-cols-2 gap-6 lg:gap-8">
          {PROJECTS.map((p) => (
            <motion.article
              key={p.title}
              variants={staggerItem}
              className="group relative rounded-3xl bg-white border border-forest/8 overflow-hidden shadow-[0_10px_30px_-15px_rgba(8,63,34,0.25)] hover:shadow-premium transition-all duration-500"
            >
              <div className="grid sm:grid-cols-5">
                {/* Image */}
                <div className="relative sm:col-span-2 aspect-[4/3] sm:aspect-auto overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/70 via-forest-deep/10 to-transparent" />
                  <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold-glow">
                    <p.icon className="w-5 h-5 text-forest-deep" />
                  </div>
                  <span
                    className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider border ${STATUS_STYLES[p.status]}`}
                  >
                    {p.status}
                  </span>
                </div>

                {/* Content */}
                <div className="sm:col-span-3 p-6 flex flex-col">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-gold-deep font-semibold">
                    {p.category}
                  </div>
                  <h3 className="mt-2 font-serif text-lg text-forest font-semibold leading-snug group-hover:text-forest-deep transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-forest/65 leading-relaxed flex-1">
                    {p.desc}
                  </p>

                  {/* Progress */}
                  <div className="mt-4">
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <span className="font-medium text-forest/70">Progress</span>
                      <span className="font-bold text-forest">{p.progress}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-forest/8 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${p.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.1, ease: "easeOut", delay: 0.2 }}
                        className="h-full bg-gradient-gold rounded-full relative"
                      >
                        <span className="absolute inset-0 animate-shimmer opacity-60" />
                      </motion.div>
                    </div>
                    <div className="mt-2 text-[11px] text-forest/60 font-medium">
                      {p.funding}
                    </div>
                  </div>

                  {/* Donation CTA */}
                  <a
                    href="#sponsorship"
                    className="mt-4 inline-flex items-center justify-between gap-2 px-4 py-2.5 rounded-full bg-forest/5 hover:bg-forest text-forest hover:text-cream transition-colors text-xs font-semibold uppercase tracking-wide"
                  >
                    <span className="flex items-center gap-1.5">
                      <HandCoins className="w-3.5 h-3.5" />
                      Donate to this project
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </StaggerGroup>

        <Reveal delay={0.2}>
          <div className="mt-14 grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { label: "Total Funds Mobilised", value: "GHS 4.6M+" },
              { label: "Projects Completed", value: "12" },
              { label: "Lives Impacted", value: "18,000+" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-2xl bg-gradient-forest p-6 text-center text-cream shadow-premium"
              >
                <div className="font-serif text-3xl sm:text-4xl font-bold text-gradient-gold">
                  {s.value}
                </div>
                <div className="mt-1 text-xs uppercase tracking-wider text-cream/70">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
