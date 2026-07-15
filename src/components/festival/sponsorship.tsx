"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Crown,
  Medal,
  Award,
  Heart,
  Check,
  Download,
  HandCoins,
  ArrowRight,
  ShieldCheck,
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
    benefits: [
      "Support a community initiative",
      "Logo on the partners page",
      "2 VIP passes & 10 general passes",
      "Acknowledgement at events",
      "Social media thank-you",
    ],
  },
];

const DONATION_PRESETS = [100, 250, 500, 1000, 5000];

export function Sponsorship() {
  const { toast } = useToast();
  const [pkg, setPkg] = useState("Gold");
  const [donation, setDonation] = useState<number | "">(250);
  const [form, setForm] = useState({
    organisation: "",
    contact: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application received",
      description: `Thank you, ${form.organisation || "partner"} — our sponsorship team will reach out within 48 hours.`,
    });
    setForm({ organisation: "", contact: "", email: "", phone: "", message: "" });
  };

  const handleDonate = () => {
    const amount = typeof donation === "number" ? donation : 0;
    if (amount <= 0) {
      toast({ title: "Please select or enter an amount", variant: "destructive" });
      return;
    }
    toast({
      title: "Redirecting to secure payment",
      description: `Opening mobile money / card payment for GHS ${amount.toLocaleString()}…`,
    });
  };

  return (
    <SectionShell id="sponsorship" className="bg-cream">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Become a Sponsor"
          title="Partner with the festival of Denu"
          description="Sponsorship of the Denu Nugoryiyi Za Festival is a partnership with heritage, community and the future of a coastal town. Choose a package, download our proposal, or make a secure donation to a project."
        />

        {/* Packages */}
        <StaggerGroup className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PACKAGES.map((p) => (
            <motion.div
              key={p.name}
              variants={staggerItem}
              className={`relative rounded-3xl bg-white p-6 sm:p-7 shadow-[0_10px_30px_-15px_rgba(8,63,34,0.25)] hover:shadow-premium transition-shadow flex flex-col ${
                p.popular ? "ring-2 ring-gold" : "ring-1 ring-forest/8"
              }`}
            >
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-gold text-forest text-[10px] font-bold uppercase tracking-wider shadow-gold-glow">
                  Most Popular
                </div>
              )}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${p.color} flex items-center justify-center shadow-premium`}>
                <p.icon className={`w-7 h-7 ${p.badge}`} />
              </div>
              <h3 className="mt-5 font-serif text-2xl text-forest font-semibold">{p.name}</h3>
              <div className="mt-1 text-sm font-semibold text-gold-deep">{p.amount}</div>
              <ul className="mt-5 space-y-2.5 flex-1">
                {p.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-forest/75">
                    <Check className="w-4 h-4 text-forest-light shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => {
                  setPkg(p.name);
                  document.getElementById("sponsor-form")?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`mt-6 w-full px-4 py-3 rounded-full text-xs font-semibold uppercase tracking-wide transition-all ${
                  pkg === p.name
                    ? "bg-gradient-gold text-forest shadow-gold-glow"
                    : "bg-forest/5 text-forest hover:bg-forest hover:text-cream"
                }`}
              >
                {pkg === p.name ? "Selected" : `Select ${p.name}`}
              </button>
            </motion.div>
          ))}
        </StaggerGroup>

        {/* Proposal + Form + Donation */}
        <div className="mt-16 grid lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Proposal download + donation */}
          <Reveal className="lg:col-span-2">
            <div className="h-full rounded-3xl bg-gradient-forest p-7 sm:p-8 text-cream shadow-premium flex flex-col">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/15 text-gold text-[11px] font-semibold uppercase tracking-[0.2em] border border-gold/25 w-fit">
                <Download className="w-3.5 h-3.5" />
                Sponsorship Proposal
              </div>
              <h3 className="mt-5 font-serif text-2xl sm:text-3xl font-semibold leading-tight">
                Download the full proposal
              </h3>
              <p className="mt-3 text-cream/75 text-sm leading-relaxed">
                A complete PDF with audience data, brand exposure, project
                portfolio, packages and impact reports.
              </p>
              <button
                onClick={() => toast({ title: "Downloading proposal…", description: "Sponsorship-Proposal-2025.pdf — 4.2 MB" })}
                className="mt-5 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-gold text-forest font-semibold uppercase tracking-wide text-sm shadow-gold-glow hover:scale-105 transition-transform"
              >
                <Download className="w-4 h-4" />
                Download Proposal
              </button>

              {/* Donation block */}
              <div className="mt-8 pt-7 border-t border-gold/15">
                <div className="inline-flex items-center gap-2 text-gold text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                  <HandCoins className="w-4 h-4" />
                  Make a Donation
                </div>
                <p className="text-cream/75 text-sm leading-relaxed">
                  Support community projects, education and health initiatives.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {DONATION_PRESETS.map((amt) => (
                    <button
                      key={amt}
                      onClick={() => setDonation(amt)}
                      className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                        donation === amt
                          ? "bg-gradient-gold text-forest"
                          : "bg-white/10 text-cream/85 hover:bg-white/15"
                      }`}
                    >
                      GHS {amt.toLocaleString()}
                    </button>
                  ))}
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <span className="text-cream/70 text-sm">GHS</span>
                  <input
                    type="number"
                    min={1}
                    value={donation}
                    onChange={(e) => setDonation(e.target.value ? Number(e.target.value) : "")}
                    placeholder="Custom amount"
                    className="flex-1 px-4 py-2.5 rounded-xl bg-white/10 border border-gold/20 text-cream placeholder:text-cream/40 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
                  />
                </div>
                <button
                  onClick={handleDonate}
                  className="mt-4 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 border border-gold/30 text-cream font-semibold uppercase tracking-wide text-sm hover:bg-white/15 transition-colors"
                >
                  <ShieldCheck className="w-4 h-4 text-gold" />
                  Donate Securely
                </button>
                <p className="mt-2 text-[11px] text-cream/55 text-center">
                  Secure payment via Mobile Money, Visa & Mastercard
                </p>
              </div>
            </div>
          </Reveal>

          {/* Application form */}
          <Reveal delay={0.15} className="lg:col-span-3">
            <form
              id="sponsor-form"
              onSubmit={handleApply}
              className="h-full rounded-3xl bg-white p-7 sm:p-8 shadow-premium border border-forest/8"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-forest/8 text-forest text-[11px] font-semibold uppercase tracking-[0.2em] border border-forest/10">
                <ArrowRight className="w-3.5 h-3.5" />
                Online Application
              </div>
              <h3 className="mt-5 font-serif text-2xl sm:text-3xl text-forest font-semibold">
                Apply to become a sponsor
              </h3>
              <p className="mt-2 text-forest/65 text-sm">
                Complete the form and our sponsorship team will be in touch within 48 hours.
              </p>

              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-forest/70 uppercase tracking-wider mb-1.5">
                    Organisation
                  </label>
                  <input
                    required
                    value={form.organisation}
                    onChange={(e) => setForm({ ...form, organisation: e.target.value })}
                    placeholder="Your organisation"
                    className="w-full px-4 py-3 rounded-xl bg-cream/60 border border-forest/12 text-forest text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-forest/70 uppercase tracking-wider mb-1.5">
                    Contact person
                  </label>
                  <input
                    required
                    value={form.contact}
                    onChange={(e) => setForm({ ...form, contact: e.target.value })}
                    placeholder="Full name"
                    className="w-full px-4 py-3 rounded-xl bg-cream/60 border border-forest/12 text-forest text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-forest/70 uppercase tracking-wider mb-1.5">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="name@organisation.com"
                    className="w-full px-4 py-3 rounded-xl bg-cream/60 border border-forest/12 text-forest text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-forest/70 uppercase tracking-wider mb-1.5">
                    Phone
                  </label>
                  <input
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+233 ..."
                    className="w-full px-4 py-3 rounded-xl bg-cream/60 border border-forest/12 text-forest text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-xs font-semibold text-forest/70 uppercase tracking-wider mb-1.5">
                  Selected package
                </label>
                <div className="flex flex-wrap gap-2">
                  {PACKAGES.map((p) => (
                    <button
                      type="button"
                      key={p.name}
                      onClick={() => setPkg(p.name)}
                      className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                        pkg === p.name
                          ? "bg-gradient-gold text-forest shadow-gold-glow"
                          : "bg-forest/5 text-forest/70 hover:bg-forest/10"
                      }`}
                    >
                      {p.name}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-xs font-semibold text-forest/70 uppercase tracking-wider mb-1.5">
                  Message
                </label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about your interest in sponsoring the festival…"
                  className="w-full px-4 py-3 rounded-xl bg-cream/60 border border-forest/12 text-forest text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold resize-none"
                />
              </div>
              <button
                type="submit"
                className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-gradient-forest text-cream font-semibold uppercase tracking-wide text-sm shadow-premium hover:scale-[1.02] transition-transform"
              >
                Submit Application
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </SectionShell>
  );
}
