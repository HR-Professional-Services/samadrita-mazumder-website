import { profile } from "../data/profile";
import { ArrowUpRight } from "lucide-react";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Blogs", href: "#blogs" },
  { label: "Contact", href: "#contact" },
];


export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-navy-dark via-navy to-navy-light text-white py-16 relative overflow-hidden">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-8">
        {/* Giant wordmark */}
        <div className="text-[clamp(3rem,12vw,8rem)] font-extrabold leading-none tracking-[-0.04em] text-white/[0.06] select-none mb-12">
          SAMADRITA
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white font-extrabold text-sm border border-white/20">
                SM
              </div>
              <div>
                <div className="font-bold text-sm">{profile.name}</div>
                <div className="text-white/50 text-xs">{profile.title}</div>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm mb-4">
              Professional data analytics, business insights, and marketing
              performance analysis. Grounded in Economics. Available for
              freelance projects worldwide.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="text-blue-soft text-sm hover:text-white transition-colors no-underline"
            >
              {profile.email}
            </a>
          </div>

          {/* Navigation */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-white/40 mb-4">
              Navigation
            </div>
            <ul className="space-y-2">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-white/60 hover:text-white transition-colors no-underline"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* External Channels */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-white/40 mb-4">
              Direct Channels
            </div>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-sm text-blue-soft hover:text-white transition-colors no-underline inline-flex items-center gap-1"
                >
                  Direct Email <ArrowUpRight size={14} />
                </a>
              </li>
              <li>
                <a
                  href={profile.whatsapp ? `https://wa.me/${profile.whatsapp}` : `https://api.whatsapp.com/send?text=${encodeURIComponent(profile.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-emerald-400 hover:text-white transition-colors no-underline inline-flex items-center gap-1"
                >
                  WhatsApp Chat <ArrowUpRight size={14} />
                </a>
              </li>
              <li>
                <a
                  href={profile.fiverr}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-emerald-fiverr hover:text-emerald-400 transition-colors no-underline inline-flex items-center gap-1"
                >
                  Fiverr Pro <ArrowUpRight size={14} />
                </a>
              </li>
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-soft hover:text-white transition-colors no-underline inline-flex items-center gap-1"
                >
                  LinkedIn <ArrowUpRight size={14} />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-white/40">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </div>
          <div className="text-xs text-white/40">
            Data Analytics · Business Insights · Marketing Analytics
          </div>
        </div>
      </div>
    </footer>
  );
}
