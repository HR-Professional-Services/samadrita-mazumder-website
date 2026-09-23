import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight } from "lucide-react";
import { profile } from "../data/profile";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Blogs", href: "#blogs" },
  { label: "Contact", href: "#contact" },
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
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 30 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.06)] border-b border-slate-100"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 flex items-center justify-between h-[76px]">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 no-underline group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-navy to-navy-light flex items-center justify-center text-white font-extrabold text-sm tracking-tight shadow-md group-hover:shadow-lg transition-shadow">
              SM
            </div>
            <div className="hidden sm:block">
              <div className="text-ink font-bold text-[15px] leading-tight">
                {profile.name}
              </div>
              <div className="text-muted text-xs font-medium">
                {profile.title}
              </div>
            </div>
          </a>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-4 py-2 text-sm font-semibold text-slate-600 hover:text-navy rounded-lg hover:bg-slate-50 transition-colors no-underline"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href={profile.fiverr}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex btn-navy !py-2.5 !px-5 !text-sm !rounded-xl"
            >
              Hire Me <ArrowRight size={16} />
            </a>
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 text-slate-700 transition-colors"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-white flex flex-col"
          >
            <div className="flex items-center justify-between px-6 h-[76px] border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-navy to-navy-light flex items-center justify-center text-white font-extrabold text-sm">
                  SM
                </div>
                <span className="font-bold text-ink">{profile.name}</span>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 rounded-lg hover:bg-slate-100 text-slate-700"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="flex-1 flex flex-col items-center justify-center gap-6">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                  className="text-3xl font-extrabold text-ink hover:text-navy transition-colors no-underline"
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                href={profile.fiverr}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="btn-navy mt-4 text-lg"
              >
                Hire Me on Fiverr <ArrowRight size={20} />
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
