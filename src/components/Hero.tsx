import { motion } from "motion/react";
import { ArrowRight, Eye, GraduationCap, Globe, Sparkles } from "lucide-react";
import { profile } from "../data/profile";

export function Hero() {
  const words = profile.heroHeadline.split("\n");

  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden pt-[76px]">
      {/* Background gradient blobs */}
      <div className="gradient-blob w-[600px] h-[600px] bg-blue-electric top-[-100px] right-[-200px]" />
      <div className="gradient-blob w-[500px] h-[500px] bg-navy top-[200px] left-[-200px] opacity-10" />
      <div className="gradient-blob w-[300px] h-[300px] bg-blue-soft bottom-[50px] right-[100px] opacity-10" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-navy) 1px, transparent 1px), linear-gradient(90deg, var(--color-navy) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Copy */}
          <div>
            {/* Status pill */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full mb-6"
            >
              <span className="pulse-dot" />
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                Available for Projects · Remote Worldwide
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-[clamp(2.4rem,5vw,3.8rem)] font-extrabold leading-[0.95] tracking-[-0.03em] text-ink mb-6">
              {words.map((line, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.85, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    delay: 0.2 + i * 0.12,
                    type: "spring",
                    stiffness: 300,
                    damping: 22,
                  }}
                  className="block"
                >
                  {i === 1 ? (
                    <span className="gradient-text">{line}</span>
                  ) : (
                    line
                  )}
                </motion.span>
              ))}
            </h1>

            {/* Subline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-muted leading-relaxed mb-8 max-w-lg"
            >
              {profile.heroSubline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <a href={profile.fiverr} target="_blank" rel="noopener noreferrer" className="btn-navy">
                Start a Project <ArrowRight size={18} />
              </a>
              <a href="#projects" className="btn-outline">
                <Eye size={18} /> View My Work
              </a>
            </motion.div>

            {/* Trust bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              {[
                { icon: GraduationCap, label: "M.Sc. Economics" },
                { icon: Sparkles, label: "McKinsey Forward" },
                { icon: Globe, label: "Remote Worldwide" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-600"
                >
                  <Icon size={14} className="text-navy" />
                  {label}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Dashboard Image */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotateX: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
            transition={{
              delay: 0.3,
              type: "spring",
              stiffness: 200,
              damping: 24,
            }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/50">
              <img
                src="/hero-dashboard.jpg"
                alt="Data Analytics Dashboard showing bar charts, line graphs, pie charts, and KPI metrics"
                className="w-full h-auto"
                loading="eager"
              />
              {/* Floating overlay elements */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="absolute top-4 left-4 bg-white/95 backdrop-blur-md rounded-xl px-3.5 py-2.5 shadow-lg border border-slate-100 flex items-center gap-3"
              >
                <img
                  src="/samadrita-headshot.jpg"
                  alt="Samadrita Mazumder"
                  className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-xs"
                />
                <div>
                  <div className="text-[10px] font-bold text-blue-electric uppercase tracking-wider">
                    Lead Analyst
                  </div>
                  <div className="text-xs font-extrabold text-ink">
                    {profile.name}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1 }}
                className="absolute bottom-4 right-4 bg-gradient-to-r from-navy to-navy-light text-white rounded-xl px-4 py-3 shadow-lg"
              >
                <div className="text-[10px] font-bold uppercase tracking-wider opacity-70 mb-0.5">
                  Starting from
                </div>
                <div className="text-lg font-extrabold">{profile.fiverrStartingPrice}</div>
              </motion.div>
            </div>
            {/* Floating decoration */}
            <div className="absolute -z-10 -top-6 -right-6 w-32 h-32 bg-blue-100 rounded-3xl rotate-12 opacity-60" />
            <div className="absolute -z-10 -bottom-4 -left-4 w-20 h-20 bg-navy/10 rounded-2xl -rotate-6" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
