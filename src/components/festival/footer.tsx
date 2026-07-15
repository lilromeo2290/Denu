"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Music2,
  Send,
  ArrowUp,
  ShieldCheck,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { FestivalLogo } from "./festival-logo";

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Festival", href: "#about" },
  { label: "Festival History", href: "#heritage" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "Media", href: "#gallery" },
  { label: "Tourism", href: "#tourism" },
  { label: "News", href: "#news" },
  { label: "Privacy Policy", href: "#contact" },
];

const SOCIALS = [
  { icon: Facebook, label: "Facebook" },
  { icon: Instagram, label: "Instagram" },
  { icon: Youtube, label: "YouTube" },
  { icon: Music2, label: "TikTok" },
];

export function Footer() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast({
      title: "Subscribed!",
      description: `Thank you — festival updates will be sent to ${email}.`,
    });
    setEmail("");
  };

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-forest-deep text-cream overflow-hidden">
      {/* Kente top strip */}
      <div className="kente-divider" />

      {/* Background accents */}
      <div className="absolute -top-32 left-1/4 w-[40vw] h-[40vh] bg-gold/8 blur-[140px] rounded-full" />
      <div className="absolute -bottom-32 right-1/4 w-[40vw] h-[40vh] bg-forest-light/25 blur-[120px] rounded-full" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand + Newsletter */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-gold/40 shadow-gold-glow shrink-0">
                <FestivalLogo variant="icon" size={56} />
              </div>
              <div>
                <div className="font-serif text-xl font-semibold text-cream">
                  Denu Nugoryiyi Za
                </div>
                <div className="text-[11px] uppercase tracking-[0.28em] text-gold/80">
                  Zordede Vava
                </div>
              </div>
            </div>
            <p className="mt-5 text-cream/70 text-sm leading-relaxed max-w-md">
              The annual cultural festival of the people of Denu in the Volta
              Region of Ghana — celebrating heritage, unity, community
              development, tourism and traditional leadership.
            </p>

            {/* Newsletter */}
            <form onSubmit={handleSubscribe} className="mt-7 max-w-md">
              <label className="block text-xs font-semibold text-gold uppercase tracking-[0.2em] mb-2">
                Newsletter Subscription
              </label>
              <div className="flex gap-2 p-1.5 rounded-full bg-white/10 border border-gold/20 focus-within:border-gold/50 transition-colors">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 min-w-0 bg-transparent px-3 text-cream placeholder:text-cream/40 text-sm focus:outline-none"
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-gradient-gold text-forest text-xs font-semibold uppercase tracking-wide hover:scale-105 transition-transform"
                >
                  <Send className="w-3.5 h-3.5" />
                  Subscribe
                </button>
              </div>
              <p className="mt-2 text-[11px] text-cream/55 flex items-center gap-1.5">
                <ShieldCheck className="w-3 h-3 text-gold/70" />
                We respect your privacy. Unsubscribe anytime.
              </p>
            </form>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-lg text-cream font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {QUICK_LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-cream/70 hover:text-gold transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-0 h-px bg-gold transition-all group-hover:w-3" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h4 className="font-serif text-lg text-cream font-semibold mb-4">
              Festival Secretariat
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span className="text-cream/75">
                  Some Traditional Area, Ketu South Municipality, Volta Region, Ghana
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a href="tel:+233241234567" className="text-cream/75 hover:text-gold transition-colors">
                  +233 24 123 4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a href="mailto:info@denunugoryiyiza.gh" className="text-cream/75 hover:text-gold transition-colors">
                  info@denunugoryiyiza.gh
                </a>
              </li>
            </ul>

            {/* Socials */}
            <div className="mt-6">
              <div className="text-xs font-semibold text-gold uppercase tracking-[0.2em] mb-3">
                Follow the festival
              </div>
              <div className="flex flex-wrap gap-2">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href="#social"
                    aria-label={s.label}
                    className="w-10 h-10 rounded-xl bg-white/8 hover:bg-gradient-gold hover:text-forest text-gold flex items-center justify-center transition-all hover:scale-105"
                  >
                    <s.icon className="w-4.5 h-4.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-6 border-t border-gold/15 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/60 text-center sm:text-left">
            © {new Date().getFullYear()} Denu Nugoryiyi Za Festival Secretariat ·
            Some Traditional Area. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#contact" className="text-xs text-cream/60 hover:text-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#contact" className="text-xs text-cream/60 hover:text-gold transition-colors">
              Terms
            </a>
            <button
              onClick={scrollTop}
              aria-label="Back to top"
              className="w-10 h-10 rounded-full bg-gradient-gold text-forest flex items-center justify-center shadow-gold-glow hover:scale-110 transition-transform"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
