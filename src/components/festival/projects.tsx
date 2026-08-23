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
  Library,
  GraduationCap,
  Stethoscope,
  Building2,
  MapPin,
  Award,
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
      </div>
    </SectionShell>
  );
}
