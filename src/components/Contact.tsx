import { useState, type FormEvent } from "react";
import { Send, CheckCircle, Mail, MessageCircle, Copy, Check } from "lucide-react";
import { profile } from "../data/profile";
import { AnimatedSection } from "./AnimatedSection";

function LinkedInIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

function WhatsAppIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
    </svg>
  );
}

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Excel Analysis & Automation",
    message: "",
  });

  const handleCopyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // WhatsApp click handler
  const whatsappUrl = profile.whatsapp
    ? `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(profile.whatsappMessage)}`
    : `https://api.whatsapp.com/send?text=${encodeURIComponent(profile.whatsappMessage)}`;

  return (
    <section id="contact" className="py-20 md:py-28 bg-bg-alt">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — Direct Contact Channels */}
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-navy/5 border border-navy/15 rounded-full text-xs font-bold text-navy uppercase tracking-wider mb-4">
              Get In Touch
            </div>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-extrabold text-ink tracking-tight mb-4">
              Let's Discuss{" "}
              <span className="gradient-text">Your Data</span>
            </h2>
            <p className="text-muted leading-relaxed mb-8">
              Whether you need to clean a messy spreadsheet, audit marketing campaign performance,
              or build an automated executive dashboard — I respond promptly to project inquiries.
            </p>

            <div className="space-y-4 mb-8">
              {/* Primary Email Card */}
              <div className="glass-card p-4 rounded-2xl flex items-center justify-between gap-4 border-2 border-navy/10 bg-white/95">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-navy to-navy-light flex items-center justify-center text-white shadow-md">
                    <Mail size={22} />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-navy uppercase tracking-wider">
                      Primary Contact Email
                    </div>
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-sm sm:text-base font-extrabold text-ink hover:text-navy transition-colors no-underline break-all"
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl bg-slate-100 hover:bg-navy hover:text-white text-slate-600 transition-colors flex-shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copied ? <Check size={18} className="text-emerald-600" /> : <Copy size={18} />}
                </button>
              </div>

              {/* WhatsApp CTA Card */}
              <div className="glass-card p-4 rounded-2xl flex items-center justify-between gap-4 border border-emerald-200 bg-emerald-50/50">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center text-white shadow-md">
                    <WhatsAppIcon size={22} />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider">
                      Instant Messaging
                    </div>
                    <div className="text-sm font-bold text-ink">
                      WhatsApp Quick Chat
                    </div>
                  </div>
                </div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-all shadow-sm flex items-center gap-1.5 no-underline flex-shrink-0"
                >
                  <MessageCircle size={15} /> Chat Now
                </a>
              </div>

              {/* LinkedIn & Fiverr Quick Links */}
              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-3.5 rounded-xl flex items-center gap-3 no-underline text-ink hover:text-navy hover:border-navy/30 transition-all"
                >
                  <div className="w-9 h-9 rounded-lg bg-navy/5 flex items-center justify-center text-navy">
                    <LinkedInIcon size={18} />
                  </div>
                  <div>
                    <div className="text-xs font-bold">LinkedIn</div>
                    <div className="text-[10px] text-muted">Direct Message</div>
                  </div>
                </a>

                <a
                  href={profile.fiverr}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-3.5 rounded-xl flex items-center gap-3 no-underline text-ink hover:text-emerald-700 hover:border-emerald-300 transition-all"
                >
                  <div className="w-9 h-9 rounded-lg bg-emerald-100/60 flex items-center justify-center text-emerald-600 font-extrabold text-sm">
                    fi
                  </div>
                  <div>
                    <div className="text-xs font-bold">Fiverr Pro</div>
                    <div className="text-[10px] text-muted">Fixed Scope ($15+)</div>
                  </div>
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Right — Lead Inquiry Form */}
          <AnimatedSection delay={0.15}>
            {submitted ? (
              <div className="glass-card p-10 text-center bg-white">
                <CheckCircle size={52} className="text-emerald-fiverr mx-auto mb-4" />
                <h3 className="text-2xl font-extrabold text-ink mb-2">
                  Inquiry Received!
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-6">
                  Thank you, <strong>{formData.name || "there"}</strong>. Your project brief has been logged.
                  Samadrita will reply to <strong>{formData.email || profile.email}</strong> within 24 hours.
                </p>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-600 mb-6 text-left space-y-1">
                  <div><strong>Direct Contact:</strong> {profile.email}</div>
                  <div><strong>Selected Scope:</strong> {formData.service}</div>
                </div>
                <a
                  href={`mailto:${profile.email}?subject=Project%20Brief%20from%20${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}`}
                  className="btn-navy !text-sm"
                >
                  Open in Email Client →
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 space-y-4 bg-white/90">
                <div className="border-b border-slate-100 pb-3 mb-2">
                  <h3 className="text-base font-bold text-ink">Project Inquiry Form</h3>
                  <p className="text-xs text-muted">Direct dispatch to {profile.email}</p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-ink mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="E.g. John Smith"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-ink text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-all"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-ink mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-ink text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-ink mb-1">
                      WhatsApp / Phone (Optional)
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-ink text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-ink mb-1">
                    Service Needed
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-ink text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-all"
                  >
                    <option>Excel Analysis & Automation</option>
                    <option>SQL Querying & Data Analysis</option>
                    <option>Python Data Analysis</option>
                    <option>Power BI Dashboards</option>
                    <option>Marketing & Campaign Analytics</option>
                    <option>Business Insights & KPI Reporting</option>
                    <option>Other / Not Sure Yet</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-ink mb-1">
                    Project Details *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your dataset, business questions, and target timeline..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-ink text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-all resize-none"
                  />
                </div>

                <button type="submit" className="btn-navy w-full justify-center !py-3">
                  Submit Project Inquiry <Send size={16} />
                </button>
                <div className="flex items-center justify-between text-[11px] text-muted pt-1">
                  <span>Confidential NDA assurance</span>
                  <span>Direct to {profile.email}</span>
                </div>
              </form>
            )}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
