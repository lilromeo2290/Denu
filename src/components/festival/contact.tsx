"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Facebook,
  Instagram,
  Youtube,
  Music2,
  MessageCircle,
} from "lucide-react";
import { SectionHeading } from "./section-heading";
import { SectionShell } from "./gold-button";
import { Reveal } from "./reveal";
import { useToast } from "@/hooks/use-toast";

const CONTACTS = [
  {
    icon: MapPin,
    label: "Festival Office",
    value: "Denu Traditional Council, Ketu South, Volta Region, Ghana",
  },
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: "+233 24 123 4567",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@denunugoryiyiza.gh",
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: "Mon – Fri, 8:00 AM – 5:00 PM GMT",
  },
];

const SOCIALS = [
  { icon: Facebook, label: "Facebook", href: "#social" },
  { icon: Instagram, label: "Instagram", href: "#social" },
  { icon: Youtube, label: "YouTube", href: "#social" },
  { icon: Music2, label: "TikTok", href: "#social" },
];

export function Contact() {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent",
      description: `Thank you ${form.name || ""}! We will respond within 24 hours.`,
    });
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <SectionShell id="contact" dark className="bg-forest-deep">
      <div className="absolute top-0 right-0 w-[50vw] h-[40vh] bg-gold/8 blur-[140px] rounded-full" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          light
          eyebrow="Contact"
          title="Get in touch with the festival"
          description="Questions about sponsorship, registration, partnerships, tourism or media accreditation? Reach out — our team is here to help."
        />

        <div className="mt-16 grid lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Contact info + map */}
          <Reveal className="lg:col-span-2">
            <div className="space-y-4">
              {CONTACTS.map((c) => (
                <div
                  key={c.label}
                  className="flex items-start gap-4 p-5 rounded-2xl glass-card hover:border-gold/40 transition-colors"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-gold flex items-center justify-center shrink-0 shadow-gold-glow">
                    <c.icon className="w-5 h-5 text-forest-deep" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] uppercase tracking-wider text-gold font-semibold">
                      {c.label}
                    </div>
                    <div className="mt-0.5 text-cream text-sm font-medium break-words">
                      {c.value}
                    </div>
                  </div>
                </div>
              ))}

              {/* Socials */}
              <div className="p-5 rounded-2xl glass-card">
                <div className="text-[11px] uppercase tracking-wider text-gold font-semibold mb-3">
                  Follow us
                </div>
                <div className="flex flex-wrap gap-2">
                  {SOCIALS.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      className="w-11 h-11 rounded-xl bg-white/10 hover:bg-gradient-gold hover:text-forest text-gold flex items-center justify-center transition-all"
                    >
                      <s.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden border border-gold/20 shadow-premium">
                <div className="relative h-56 sm:h-64">
                  <iframe
                    title="Map of Denu"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=1.155%2C6.075%2C1.215%2C6.115&layer=mapnik&marker=6.095%2C1.185"
                    className="absolute inset-0 w-full h-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl glass-card p-7 sm:p-8 shadow-premium"
            >
              <div className="flex items-center gap-2 mb-6">
                <MessageCircle className="w-5 h-5 text-gold" />
                <h3 className="font-serif text-2xl text-cream font-semibold">Send a message</h3>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-cream/80 uppercase tracking-wider mb-1.5">
                    Full name *
                  </label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
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
              </div>
              <div className="mt-4">
                <label className="block text-xs font-semibold text-cream/80 uppercase tracking-wider mb-1.5">
                  Subject
                </label>
                <input
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="What is this about?"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-gold/20 text-cream placeholder:text-cream/40 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
                />
              </div>
              <div className="mt-4">
                <label className="block text-xs font-semibold text-cream/80 uppercase tracking-wider mb-1.5">
                  Message *
                </label>
                <textarea
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Write your message…"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-gold/20 text-cream placeholder:text-cream/40 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 resize-none"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-gradient-gold text-forest font-semibold uppercase tracking-wide text-sm shadow-gold-glow"
              >
                <Send className="w-4 h-4" />
                Send Message
              </motion.button>

              <p className="mt-3 text-[11px] text-cream/55 text-center">
                Your information is encrypted and never shared with third parties.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </SectionShell>
  );
}
