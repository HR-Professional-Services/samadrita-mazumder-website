import { motion } from "motion/react";
import { useRef } from "react";
import { useInView } from "motion/react";

const tools = [
  { name: "Microsoft Excel", abbr: "XL", color: "from-green-600 to-green-700" },
  { name: "SQL / MySQL", abbr: "SQL", color: "from-blue-600 to-blue-700" },
  { name: "Python", abbr: "Py", color: "from-yellow-500 to-amber-600" },
  { name: "Pandas", abbr: "Pd", color: "from-indigo-500 to-indigo-600" },
  { name: "NumPy", abbr: "Np", color: "from-cyan-500 to-cyan-600" },
  { name: "Power BI", abbr: "PBI", color: "from-amber-500 to-orange-500" },
  { name: "Statistics", abbr: "Σ", color: "from-purple-500 to-purple-600" },
  { name: "Econometrics", abbr: "Ec", color: "from-rose-500 to-rose-600" },
];

export function TechStack() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-navy-dark via-navy to-navy-light text-white relative overflow-hidden">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-xs font-bold text-white/80 uppercase tracking-wider mb-4">
            Tech Stack
          </div>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-extrabold tracking-tight mb-4">
            Tools I Work With{" "}
            <span className="text-blue-soft">Every Day</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            From spreadsheet cleaning to machine learning prep — each tool chosen for a specific stage of the analytics pipeline.
          </p>
        </div>

        <div
          ref={ref}
          className="flex flex-wrap justify-center gap-5 max-w-3xl mx-auto"
        >
          {tools.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30, scale: 0.85 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, scale: 1 }
                  : {}
              }
              transition={{
                delay: 0.05 + i * 0.07,
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              className="flex flex-col items-center gap-2 group"
            >
              <div
                className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${t.color} flex items-center justify-center shadow-lg text-white font-extrabold text-lg md:text-xl group-hover:scale-110 transition-transform cursor-default`}
              >
                {t.abbr}
              </div>
              <span className="text-xs font-semibold text-white/70 text-center">
                {t.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
