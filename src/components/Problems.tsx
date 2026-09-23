import { motion } from "motion/react";
import {
  FileSpreadsheet,
  Clock,
  TrendingUp,
  LayoutDashboard,
  Database,
  Target,
} from "lucide-react";
import { AnimatedSection, StaggerChildren, fadeUpVariant } from "./AnimatedSection";

const problems = [
  {
    icon: FileSpreadsheet,
    title: "Messy Spreadsheets",
    desc: "Inconsistent formats and broken formulas cleaned into structured, single-source datasets.",
  },
  {
    icon: Clock,
    title: "Manual Excel Hours",
    desc: "Hours of weekly copy-pasting automated via Power Query & Python to refresh in seconds.",
  },
  {
    icon: TrendingUp,
    title: "Unclear Ad Spend & ROAS",
    desc: "Uncertainty in marketing ROI resolved with multi-touch attribution & cohort analytics.",
  },
  {
    icon: LayoutDashboard,
    title: "No Executive Dashboard",
    desc: "Gut-feeling decisions replaced with interactive, auto-refreshing Power BI dashboards.",
  },
  {
    icon: Database,
    title: "Raw Data Overload",
    desc: "Complex data exports distilled into clear KPIs, drivers, and immediate growth actions.",
  },
  {
    icon: Target,
    title: "Scaling Without Clarity",
    desc: "High-value customer segments and top products identified with RFM segmentation.",
  },
];

export function Problems() {
  return (
    <section className="py-20 md:py-28 bg-bg-alt">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-200 rounded-full text-xs font-bold text-blue-700 uppercase tracking-wider mb-4">
            Common Bottlenecks Solved
          </div>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-extrabold text-ink tracking-tight mb-4">
            Business Problems Solved Through{" "}
            <span className="gradient-text">Clean Analytics</span>
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            You don't need generic data jargon. You need solutions to specific
            operational and commercial headaches that slow down your team.
          </p>
        </AnimatedSection>

        <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((p) => (
            <motion.div
              key={p.title}
              variants={fadeUpVariant}
              className="glass-card p-6 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-navy to-navy-light flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <p.icon size={22} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-ink mb-2">{p.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
