import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  ArrowRight,
  User,
  Layers,
  FolderKanban,
  BookOpen,
  Mail,
  MessageCircle,
} from "lucide-react";
import { profile } from "../data/profile";

const links = [
  { label: "About", href: "#about", icon: User },
  { label: "Services", href: "#services", icon: Layers },
  { label: "Projects", href: "#projects", icon: FolderKanban },
  { label: "Blogs", href: "#blogs", icon: BookOpen },
  { label: "Contact", href: "#contact", icon: Mail },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Handle smooth scroll & auto close
  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const whatsappUrl = profile.whatsapp
    ? `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(profile.whatsappMessage)}`
    : `https://api.whatsapp.com/send?text=${encodeURIComponent(profile.whatsappMessage)}`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-xs border-b border-slate-100"
            : "bg-white/80 backdrop-blur-md"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 flex items-center justify-between h-[72px]">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 no-underline group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-navy to-navy-light flex items-center justify-center text-white font-extrabold text-sm tracking-tight shadow-md group-hover:scale-105 transition-transform">
              SM
            </div>
            <div>
              <div className="text-ink font-bold text-sm sm:text-[15px] leading-tight flex items-center gap-1.5">
                {profile.name}
              </div>
              <div className="text-muted text-[11px] font-medium hidden sm:block">
                {profile.title} · Kolkata & Remote
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-50/80 p-1.5 rounded-xl border border-slate-200/60">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3.5 py-1.5 text-xs font-bold text-slate-600 hover:text-navy hover:bg-white rounded-lg transition-all no-underline shadow-none hover:shadow-xs"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Right Header CTAs & 3-line Toggle */}
          <div className="flex items-center gap-2.5">
            <a
              href={`mailto:${profile.email}`}
              className="hidden lg:inline-flex text-xs font-bold text-slate-600 hover:text-navy px-3 py-2 rounded-lg transition-colors no-underline"
            >
              {profile.email}
            </a>
            <a
              href={profile.fiverr}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex btn-navy !py-2 !px-4 !text-xs !rounded-xl"
            >
              Hire Me <ArrowRight size={14} />
            </a>

            {/* 3-Lines Side Toggle Bar (Mobile Menu Button) */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex flex-col justify-center items-center w-11 h-11 rounded-xl bg-slate-100 hover:bg-slate-200 active:scale-95 transition-all text-ink focus:outline-none focus:ring-2 focus:ring-navy/20"
              aria-label="Toggle navigation drawer"
              aria-expanded={mobileOpen}
            >
              <span className={`w-5 h-0.5 bg-ink rounded-full transition-transform duration-300 ${mobileOpen ? "rotate-45 translate-y-1.5" : "mb-1"}`} />
              <span className={`w-5 h-0.5 bg-ink rounded-full transition-opacity duration-200 ${mobileOpen ? "opacity-0" : "mb-1"}`} />
              <span className={`w-5 h-0.5 bg-ink rounded-full transition-transform duration-300 ${mobileOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
            </button>
          </div>
        </div>
      </header>

      {/* ScaleNova-Style Off-Canvas Slide-Over Side Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <div className="fixed inset-0 z-50 md:hidden flex justify-end">
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-navy-dark/60 backdrop-blur-xs"
            />

            {/* Side Drawer Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-[85%] max-w-sm h-full bg-white shadow-2xl flex flex-col z-10 overflow-y-auto border-l border-slate-100"
            >
              {/* Drawer Header */}
              <div className="p-5 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-navy to-navy-light flex items-center justify-center text-white font-extrabold text-xs">
                    SM
                  </div>
                  <div>
                    <div className="font-extrabold text-sm text-ink">{profile.name}</div>
                    <div className="text-[11px] text-muted">{profile.title}</div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Navigation Options with Auto-Close */}
              <div className="p-5 flex-1 space-y-1">
                <div className="text-[10px] font-bold uppercase tracking-wider text-muted mb-2 px-3">
                  Navigation
                </div>
                {links.map((l) => (
                  <button
                    key={l.href}
                    type="button"
                    onClick={() => handleNavClick(l.href)}
                    className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 text-slate-800 hover:text-navy font-bold text-sm transition-all text-left group"
                  >
                    <span className="flex items-center gap-3">
                      <l.icon size={17} className="text-slate-400 group-hover:text-navy transition-colors" />
                      {l.label}
                    </span>
                    <ArrowRight size={14} className="text-slate-300 group-hover:text-navy group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>

              {/* Drawer Quick Contact Footer */}
              <div className="p-5 border-t border-slate-100 bg-slate-50/60 space-y-3">
                <div className="text-[10px] font-bold uppercase tracking-wider text-muted">
                  Direct Contact
                </div>

                {/* Email Chip */}
                <a
                  href={`mailto:${profile.email}`}
                  onClick={() => setMobileOpen(false)}
                  className="w-full flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-slate-200/80 text-xs font-semibold text-ink hover:text-navy no-underline shadow-2xs"
                >
                  <Mail size={15} className="text-blue-electric flex-shrink-0" />
                  <span className="truncate">{profile.email}</span>
                </a>

                {/* WhatsApp Chat Chip */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="w-full flex items-center justify-center gap-2 p-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold no-underline shadow-xs transition-colors"
                >
                  <MessageCircle size={15} /> Chat on WhatsApp
                </a>

                {/* Fiverr Pro Booking */}
                <a
                  href={profile.fiverr}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="btn-navy w-full justify-center !py-2.5 !text-xs !rounded-xl"
                >
                  Hire on Fiverr ($15+) <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
