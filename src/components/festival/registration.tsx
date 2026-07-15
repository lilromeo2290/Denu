"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Store,
  Crown,
  Camera,
  HandHeart,
  CheckCircle2,
  Mail,
  Calendar,
} from "lucide-react";
import { SectionHeading } from "./section-heading";
import { SectionShell } from "./gold-button";
import { Reveal } from "./reveal";
import { useToast } from "@/hooks/use-toast";

type Role = "Visitors" | "Vendors" | "Sponsors" | "Media" | "Volunteers";

const ROLES: { id: Role; icon: typeof Users; desc: string; perk: string }[] = [
  { id: "Visitors", icon: Users, desc: "Reserve your festival pass and access all public events.", perk: "Free entry" },
  { id: "Vendors", icon: Store, desc: "Apply for a booth at the festival expo and food fair.", perk: "GHS 350 / booth" },
  { id: "Sponsors", icon: Crown, desc: "Partner with the festival and unlock brand exposure.", perk: "From GHS 5K" },
  { id: "Media", icon: Camera, desc: "Apply for media accreditation and press access.", perk: "Press pass" },
  { id: "Volunteers", icon: HandHeart, desc: "Join the festival volunteer team and serve the community.", perk: "Certificate + meals" },
];

export function Registration() {
  const { toast } = useToast();
  const [role, setRole] = useState<Role>("Visitors");
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    organisation: "",
    days: "All 4 days",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Registration confirmed",
      description: `Thank you ${form.fullName || ""}! A confirmation email is on its way to ${form.email || "your inbox"}.`,
    });
    setForm({
      fullName: "",
      email: "",
      phone: "",
      organisation: "",
      days: "All 4 days",
      notes: "",
    });
  };

  return (
    <SectionShell id="register" dark className="bg-forest">
      <div className="absolute top-1/3 left-0 w-[40vw] h-[40vh] bg-gold/10 blur-[140px] rounded-full" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          light
          eyebrow="Registration"
          title="Join the festival"
          description="Register as a visitor, vendor, sponsor, member of the media, or volunteer. Confirmation emails are sent automatically upon submission."
        />

        <div className="mt-16 grid lg:grid-cols-5 gap-8">
          {/* Role selector */}
          <Reveal className="lg:col-span-2">
            <div className="space-y-3">
              {ROLES.map((r) => (
                <button
                  key={r.id}
                  onClick={() => setRole(r.id)}
                  className={`w-full flex items-start gap-4 p-5 rounded-2xl border text-left transition-all ${
                    role === r.id
                      ? "bg-gradient-gold text-forest border-transparent shadow-gold-glow"
                      : "glass-card text-cream border-gold/15 hover:border-gold/40"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                      role === r.id ? "bg-forest/15 text-forest" : "bg-white/10 text-gold"
                    }`}
                  >
                    <r.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-serif text-lg font-semibold">{r.id}</h3>
                      <span
                        className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full ${
                          role === r.id ? "bg-forest/15 text-forest" : "bg-gold/15 text-gold"
                        }`}
                      >
                        {r.perk}
                      </span>
                    </div>
                    <p
                      className={`mt-1 text-sm ${
                        role === r.id ? "text-forest/80" : "text-cream/70"
                      }`}
                    >
                      {r.desc}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* Email confirmation note */}
            <div className="mt-5 p-4 rounded-2xl glass-card flex items-start gap-3">
              <Mail className="w-5 h-5 text-gold shrink-0 mt-0.5" />
              <div>
                <div className="text-cream text-sm font-semibold">Automatic confirmation</div>
                <p className="text-cream/70 text-xs mt-0.5">
                  You will receive a confirmation email with your festival pass and joining instructions.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl glass-card p-7 sm:p-8 shadow-premium"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={role}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/15 text-gold text-[11px] font-semibold uppercase tracking-[0.2em] border border-gold/25">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Registering as: {role}
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-cream/80 uppercase tracking-wider mb-1.5">
                    Full name *
                  </label>
                  <input
                    required
                    value={form.fullName}
                    onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                    placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-gold/20 text-cream placeholder:text-cream/40 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-cream/80 uppercase tracking-wider mb-1.5">
                    Email *
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-gold/20 text-cream placeholder:text-cream/40 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-cream/80 uppercase tracking-wider mb-1.5">
                    Phone
                  </label>
                  <input
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+233 ..."
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-gold/20 text-cream placeholder:text-cream/40 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-cream/80 uppercase tracking-wider mb-1.5">
                    Organisation
                  </label>
                  <input
                    value={form.organisation}
                    onChange={(e) => setForm({ ...form, organisation: e.target.value })}
                    placeholder="Optional"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-gold/20 text-cream placeholder:text-cream/40 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-xs font-semibold text-cream/80 uppercase tracking-wider mb-1.5">
                  <Calendar className="w-3 h-3 inline mr-1" />
                  Days attending
                </label>
                <div className="flex flex-wrap gap-2">
                  {["Day One", "Day Two", "Day Three", "Grand Finale", "All 4 days"].map((d) => (
                    <button
                      type="button"
                      key={d}
                      onClick={() => setForm({ ...form, days: d })}
                      className={`px-3.5 py-2 rounded-full text-xs font-semibold transition-all ${
                        form.days === d
                          ? "bg-gradient-gold text-forest"
                          : "bg-white/10 text-cream/85 hover:bg-white/15"
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-xs font-semibold text-cream/80 uppercase tracking-wider mb-1.5">
                  Notes / special requirements
                </label>
                <textarea
                  rows={3}
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  placeholder="Tell us anything we should know (dietary, accessibility, booth type, etc.)"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-gold/20 text-cream placeholder:text-cream/40 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 resize-none"
                />
              </div>

              <button
                type="submit"
                className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-gradient-gold text-forest font-semibold uppercase tracking-wide text-sm shadow-gold-glow hover:scale-[1.02] transition-transform"
              >
                Complete Registration
                <CheckCircle2 className="w-4 h-4" />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </SectionShell>
  );
}
