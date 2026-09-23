import { motion } from "motion/react";
import { useRef } from "react";
import { useInView } from "motion/react";
import {
  MessageSquare,
  Wrench,
  Search,
  BarChart3,
  FileText,
  Lightbulb,
} from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

const steps = [
  { icon: MessageSquare, title: "Understand Needs", desc: "Identify business goals, core KPIs, and data source architecture." },
  { icon: Wrench, title: "Clean & Structure", desc: "Eliminate duplicates, resolve anomalies, and build a clean data foundation." },
  { icon: Search, title: "Explore & Model", desc: "Run SQL queries and Python statistical tests to isolate key performance drivers." },
  { icon: BarChart3, title: "Build Dashboards", desc: "Develop interactive Power BI executive dashboards with custom DAX measures." },
  { icon: FileText, title: "Deliver Insights", desc: "Present findings with clear, non-technical executive briefs and visualizations." },
  { icon: Lightbulb, title: "Action Plan", desc: "Translate conclusions into clear operational and commercial growth moves." },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-navy/5 border border-navy/15 rounded-full text-xs font-bold text-navy uppercase tracking-wider mb-4">
            My Process
          </div>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-extrabold text-ink tracking-tight mb-4">
            From Raw Data to{" "}
            <span className="gradient-text">Business Decision</span>
          </h2>
        </AnimatedSection>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Step number */}
              <div className="text-[64px] font-extrabold text-navy/[0.06] absolute -top-4 -left-1 leading-none select-none">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-navy to-blue-electric flex items-center justify-center mb-4 shadow-md">
                  <s.icon size={22} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-ink mb-2">{s.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
