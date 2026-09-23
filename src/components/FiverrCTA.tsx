import { motion } from "motion/react";
import { ArrowRight, Star, Shield, Clock } from "lucide-react";
import { profile } from "../data/profile";
import { AnimatedSection } from "./AnimatedSection";

export function FiverrCTA() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-blue-50" />
      <div className="gradient-blob w-[400px] h-[400px] bg-emerald-fiverr top-[-100px] right-[-100px] opacity-10" />

      <div className="relative z-10 max-w-[800px] mx-auto px-6 md:px-8 text-center">
        <AnimatedSection>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-emerald-fiverr to-emerald-600 flex items-center justify-center shadow-xl"
          >
            <span className="text-white font-extrabold text-2xl">$</span>
          </motion.div>

          <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold text-ink tracking-tight mb-4">
            Ready to Turn Your Data Into{" "}
            <span className="text-emerald-fiverr">Decisions?</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto mb-8">
            Have a dataset but don't know what the numbers are telling you?
            I can help. Services starting from{" "}
            <strong className="text-ink">{profile.fiverrStartingPrice}</strong>.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <a
              href={profile.fiverr}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-fiverr"
            >
              Hire Me on Fiverr <ArrowRight size={20} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline !border-navy/20 !text-navy hover:!bg-navy hover:!text-white"
            >
              Connect on LinkedIn
            </a>
          </div>

          {/* Trust items */}
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { icon: Star, text: "Quality-First Approach" },
              { icon: Shield, text: "NDA & Confidentiality" },
              { icon: Clock, text: "Fast Turnaround" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-sm text-muted">
                <Icon size={16} className="text-emerald-fiverr" />
                <span className="font-medium">{text}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
