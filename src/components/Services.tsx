import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { services } from "../data/services";
import { profile } from "../data/profile";
import { AnimatedSection, StaggerChildren, fadeUpVariant } from "./AnimatedSection";

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-navy/5 border border-navy/15 rounded-full text-xs font-bold text-navy uppercase tracking-wider mb-4">
            What I Offer
          </div>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-extrabold text-ink tracking-tight mb-4">
            Data Analytics{" "}
            <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            From cleaning messy spreadsheets to building executive dashboards — I handle the full analytics pipeline so you can focus on decisions.
          </p>
        </AnimatedSection>

        <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={fadeUpVariant}
              className="glass-card p-6 group relative overflow-hidden"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-navy to-blue-electric opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-navy group-hover:to-navy-light transition-all">
                <s.icon size={22} className="text-navy group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-ink mb-2">{s.title}</h3>
              <p className="text-sm text-muted leading-relaxed mb-4">
                {s.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {s.tools.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-semibold text-navy/70 bg-navy/5 px-2 py-0.5 rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </StaggerChildren>

        <AnimatedSection className="text-center" delay={0.3}>
          <a href={profile.fiverr} target="_blank" rel="noopener noreferrer" className="btn-navy">
            View All Services on Fiverr <ArrowRight size={18} />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
