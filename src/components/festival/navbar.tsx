"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Highlights", href: "#highlights" },
  { label: "Projects", href: "#projects" },
  { label: "Heritage", href: "#heritage" },
  { label: "Visit Denu", href: "#tourism" },
  { label: "Schedule", href: "#schedule" },
  { label: "Gallery", href: "#gallery" },
  { label: "News", href: "#news" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "Register", href: "#register" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-[100] transition-all duration-500",
        scrolled
          ? "bg-forest-deep/95 backdrop-blur-xl shadow-[0_8px_40px_-12px_rgba(0,0,0,0.5)] border-b border-gold/15"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group"
            aria-label="Denu Nugoryiyi Za home"
          >
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 shrink-0">
              <div className="absolute inset-0 rounded-full bg-gradient-gold shadow-gold-glow group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-[3px] rounded-full bg-forest-deep flex items-center justify-center">
                <span className="font-serif font-bold text-gold text-base sm:text-lg">
                  DN
                </span>
              </div>
              <div className="absolute -inset-1 rounded-full border border-gold/30 animate-glow-pulse opacity-70" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-serif text-base sm:text-lg font-semibold text-cream">
                Denu Nugoryiyi Za
              </span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-gold/80">
                Zordede Vava
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.slice(0, 8).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-3 py-2 text-sm font-medium text-cream/85 hover:text-gold transition-colors group"
              >
                {link.label}
                <span className="absolute left-3 right-3 -bottom-0.5 h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            ))}
            <div className="relative group">
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-cream/85 hover:text-gold transition-colors">
                More <ChevronDown className="w-3.5 h-3.5" />
              </button>
              <div className="absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="glass-card rounded-xl p-2 min-w-[160px] shadow-premium">
                  {NAV_LINKS.slice(8).map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="block px-3 py-2 text-sm text-cream/85 hover:text-gold hover:bg-white/5 rounded-lg transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-2">
            <a
              href="#sponsorship"
              className="hidden sm:inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-gold text-forest text-xs sm:text-sm font-semibold uppercase tracking-wide shadow-gold-glow hover:scale-105 transition-transform"
            >
              Sponsor
            </a>
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden p-2 text-cream"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 z-[110] bg-forest-deep/97 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between h-16 px-4 sm:px-6">
              <span className="font-serif text-cream text-lg">Menu</span>
              <button
                onClick={() => setOpen(false)}
                className="p-2 text-cream"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="px-4 sm:px-6 py-4 overflow-y-auto max-h-[calc(100vh-4rem)] scrollbar-gold">
              <div className="grid grid-cols-1 gap-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                    className="flex items-center justify-between px-4 py-3.5 rounded-xl text-cream/90 hover:text-gold hover:bg-white/5 border border-transparent hover:border-gold/15 transition-all"
                  >
                    <span className="text-base">{link.label}</span>
                    <ChevronDown className="w-4 h-4 -rotate-90 text-gold/60" />
                  </motion.a>
                ))}
              </div>
              <a
                href="#sponsorship"
                onClick={() => setOpen(false)}
                className="mt-6 block w-full text-center px-6 py-4 rounded-full bg-gradient-gold text-forest font-semibold uppercase tracking-wide shadow-gold-glow"
              >
                Become a Sponsor
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
