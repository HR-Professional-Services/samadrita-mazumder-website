import { motion } from "motion/react";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import { projects } from "../data/projects";
import { AnimatedSection, StaggerChildren, fadeUpVariant } from "./AnimatedSection";

const categoryColors: Record<string, string> = {
  "Marketing Analytics": "bg-blue-50 text-blue-700 border-blue-200",
  "Financial Analytics": "bg-amber-50 text-amber-700 border-amber-200",
  "Customer Analytics": "bg-emerald-50 text-emerald-700 border-emerald-200",
};

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 bg-bg-alt">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 border border-emerald-200 rounded-full text-xs font-bold text-emerald-700 uppercase tracking-wider mb-4">
            Portfolio
          </div>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-extrabold text-ink tracking-tight mb-4">
            Real Projects.{" "}
            <span className="gradient-text">Real Insights.</span>
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            End-to-end analytics projects using real-world datasets — from data cleaning through to business recommendations.
          </p>
        </AnimatedSection>

        <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              variants={fadeUpVariant}
              className={`glass-card p-6 flex flex-col ${
                i === 0 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              {/* Category badge */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${
                    categoryColors[p.category] || "bg-slate-50 text-slate-600 border-slate-200"
                  }`}
                >
                  {p.category}
                </span>
                {p.githubUrl && (
                  <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-navy transition-colors"
                    aria-label="View on GitHub"
                  >
                    <ArrowUpRight size={18} />
                  </a>
                )}
              </div>

              <h3 className="text-lg font-bold text-ink mb-2">{p.title}</h3>
              <p className="text-sm text-muted leading-relaxed mb-4 flex-1">
                {p.description}
              </p>

              {/* Key finding highlight */}
              <div className="bg-gradient-to-r from-navy/5 to-blue-electric/5 rounded-xl p-4 mb-4 border border-navy/10">
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp size={14} className="text-navy" />
                  <span className="text-[10px] font-bold text-navy uppercase tracking-wider">
                    Key Finding
                  </span>
                </div>
                <p className="text-sm font-semibold text-ink">{p.keyFinding}</p>
              </div>

              {/* Tools */}
              <div className="flex flex-wrap gap-1.5">
                {p.tools.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
