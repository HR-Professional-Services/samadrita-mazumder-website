import { GraduationCap, Award, MapPin, CheckCircle2 } from "lucide-react";
import { profile } from "../data/profile";
import { AnimatedSection } from "./AnimatedSection";

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-bg-alt">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left — Professional Headshot & Identity Card */}
          <div className="lg:col-span-5">
            <AnimatedSection>
              <div className="relative mx-auto max-w-sm lg:max-w-none">
                {/* Background decorative accent */}
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-navy to-blue-electric opacity-15 blur-lg -z-10" />

                <div className="glass-card p-4 sm:p-5 rounded-3xl shadow-xl overflow-hidden bg-white/90">
                  <div className="relative rounded-2xl overflow-hidden aspect-square mb-5 border border-slate-100">
                    <img
                      src="/samadrita-headshot.jpg"
                      alt="Samadrita Mazumder — Professional Data Analyst"
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md rounded-xl p-3 border border-slate-100 shadow-md">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm font-extrabold text-ink flex items-center gap-1.5">
                            {profile.name}
                            <CheckCircle2 size={16} className="text-blue-electric" />
                          </div>
                          <div className="text-xs text-muted font-medium">
                            {profile.title} · Kolkata & Remote
                          </div>
                        </div>
                        <div className="px-2.5 py-1 bg-emerald-50 border border-emerald-200 rounded-full text-[10px] font-bold text-emerald-700">
                          Active
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Micro stats */}
                  <div className="grid grid-cols-2 gap-3 pt-1 text-center">
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="text-lg font-extrabold text-navy">M.Sc.</div>
                      <div className="text-[11px] text-muted font-medium">Calcutta University</div>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="text-lg font-extrabold text-emerald-600">$15+</div>
                      <div className="text-[11px] text-muted font-medium">Fiverr Freelance</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right — Biography, Education & Credentials */}
          <div className="lg:col-span-7">
            <AnimatedSection delay={0.15}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-navy/5 border border-navy/15 rounded-full text-xs font-bold text-navy uppercase tracking-wider mb-4">
                About Me
              </div>
              <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-extrabold text-ink tracking-tight mb-6">
                Economics-Trained.{" "}
                <span className="gradient-text">Data-Driven.</span>
              </h2>
              <p className="text-muted leading-relaxed mb-6 text-base">
                {profile.about}
              </p>
              <div className="flex items-center gap-2 text-sm text-muted mb-8">
                <MapPin size={16} className="text-navy" />
                <span>{profile.location} · {profile.availability}</span>
              </div>

              {/* Education */}
              <div className="space-y-3 mb-8">
                <h3 className="text-xs font-bold text-ink uppercase tracking-wider flex items-center gap-2">
                  <GraduationCap size={16} className="text-navy" /> Academic Foundation
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {profile.education.map((e) => (
                    <div
                      key={e.degree}
                      className="p-3.5 bg-white rounded-xl border border-slate-200/80 shadow-sm"
                    >
                      <div className="text-sm font-bold text-ink">{e.degree}</div>
                      <div className="text-xs text-muted">
                        {e.institution} · {e.year}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Credentials & Certifications */}
              <div className="mb-8">
                <h3 className="text-xs font-bold text-ink uppercase tracking-wider flex items-center gap-2 mb-3">
                  <Award size={16} className="text-navy" /> Programs & Recognitions
                </h3>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {profile.credentials.map((c) => (
                    <div
                      key={c}
                      className="p-2.5 bg-white/70 rounded-lg border border-slate-200/60 flex items-center gap-2.5 text-xs font-semibold text-slate-700"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-electric flex-shrink-0" />
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Cloud */}
              <div>
                <h3 className="text-xs font-bold text-ink uppercase tracking-wider mb-3">
                  Core Analytics Competencies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {profile.topSkills.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 hover:border-navy/30 hover:text-navy transition-colors cursor-default shadow-xs"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
