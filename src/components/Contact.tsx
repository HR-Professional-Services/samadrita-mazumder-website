import { useState, type FormEvent } from "react";
import { Send, CheckCircle } from "lucide-react";
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

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-bg-alt">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left — Info */}
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-navy/5 border border-navy/15 rounded-full text-xs font-bold text-navy uppercase tracking-wider mb-4">
              Get In Touch
            </div>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-extrabold text-ink tracking-tight mb-4">
              Let's Discuss{" "}
              <span className="gradient-text">Your Data</span>
            </h2>
            <p className="text-muted leading-relaxed mb-8">
              Whether you have a messy spreadsheet, a dataset full of unanswered
              questions, or need a dashboard that makes your data easy to
              understand — I can help turn your data into something useful and
              actionable.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-navy/5 flex items-center justify-center">
                  <Send size={18} className="text-navy" />
                </div>
                <div>
                  <div className="text-xs font-bold text-muted uppercase tracking-wider">
                    Email
                  </div>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-sm font-semibold text-ink hover:text-navy transition-colors no-underline"
                  >
                    {profile.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-navy/5 flex items-center justify-center">
                  <LinkedInIcon size={18} className="text-navy" />
                </div>
                <div>
                  <div className="text-xs font-bold text-muted uppercase tracking-wider">
                    LinkedIn
                  </div>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-ink hover:text-navy transition-colors no-underline"
                  >
                    Connect with Samadrita
                  </a>
                </div>
              </div>

            </div>

            <div className="text-sm text-muted">
              <strong className="text-ink">Preferred:</strong> For project inquiries
              with clear deliverables, please use my{" "}
              <a
                href={profile.fiverr}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-fiverr font-semibold hover:underline"
              >
                Fiverr profile
              </a>{" "}
              for fastest response.
            </div>
          </AnimatedSection>

          {/* Right — Form */}
          <AnimatedSection delay={0.15}>
            {submitted ? (
              <div className="glass-card p-10 text-center">
                <CheckCircle size={48} className="text-emerald-fiverr mx-auto mb-4" />
                <h3 className="text-xl font-bold text-ink mb-2">
                  Message Received!
                </h3>
                <p className="text-muted">
                  Thank you for reaching out. I'll get back to you within 24
                  hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 space-y-5">
                <div>
                  <label className="block text-sm font-bold text-ink mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="E.g. John Smith"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-ink text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-ink mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-ink text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-ink mb-1.5">
                    Service Needed
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-ink text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-all appearance-none">
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
                  <label className="block text-sm font-bold text-ink mb-1.5">
                    Project Details *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your data, the questions you need answered, and the deliverables you're looking for..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-ink text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-all resize-none"
                  />
                </div>
                <button type="submit" className="btn-navy w-full justify-center">
                  Send Message <Send size={16} />
                </button>
                <p className="text-xs text-center text-muted">
                  Your information is kept confidential. Zero spam.
                </p>
              </form>
            )}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
