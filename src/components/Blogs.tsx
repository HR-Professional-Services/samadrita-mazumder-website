import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Clock,
  Calendar,
  ArrowRight,
  X,
  BookOpen,
  Sparkles,
  CheckCircle2,
  Share2,
} from "lucide-react";
import { blogs, type BlogPost } from "../data/blogs";
import { AnimatedSection, StaggerChildren, fadeUpVariant } from "./AnimatedSection";

export function Blogs() {
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedBlog) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedBlog]);

  return (
    <section id="blogs" className="py-20 md:py-28 relative">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-200 rounded-full text-xs font-bold text-blue-700 uppercase tracking-wider mb-4">
            <BookOpen size={14} className="text-blue-electric" /> Thought Leadership & Articles
          </div>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-extrabold text-ink tracking-tight mb-4">
            Insights on Data, Econometrics &{" "}
            <span className="gradient-text">Business Decisions</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Deep-dive analytical essays combining rigorous econometric logic with
            practical tools like SQL, Python, and Power BI to solve real enterprise bottlenecks.
          </p>
        </AnimatedSection>

        {/* 6 Blog Cards Grid */}
        <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((b) => (
            <motion.article
              key={b.id}
              variants={fadeUpVariant}
              className="glass-card flex flex-col justify-between overflow-hidden group cursor-pointer hover:border-blue-electric/40"
              onClick={() => setSelectedBlog(b)}
            >
              <div className="p-6 md:p-7 flex-1 flex flex-col">
                {/* Meta row */}
                <div className="flex items-center justify-between gap-2 mb-4 text-xs">
                  <span className="font-bold text-navy bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                    {b.category}
                  </span>
                  <div className="flex items-center gap-3 text-muted">
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {b.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={12} /> {b.publishedDate}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-ink mb-3 group-hover:text-navy transition-colors leading-snug">
                  {b.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-muted leading-relaxed mb-6 flex-1">
                  {b.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {b.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Author footer */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={b.author.avatar}
                      alt={b.author.name}
                      className="w-9 h-9 rounded-full object-cover border border-slate-200"
                    />
                    <div>
                      <div className="text-xs font-bold text-ink">{b.author.name}</div>
                      <div className="text-[10px] text-muted">{b.author.role}</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-navy group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Read <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </StaggerChildren>
      </div>

      {/* Reader Modal */}
      <AnimatePresence>
        {selectedBlog && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedBlog(null)}
              className="fixed inset-0 bg-navy-dark/60 backdrop-blur-sm"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 280, damping: 25 }}
              className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden z-10 my-auto max-h-[90vh] flex flex-col border border-slate-100"
            >
              {/* Header */}
              <div className="p-6 md:p-8 bg-gradient-to-r from-navy/5 via-blue-50/50 to-white border-b border-slate-100 flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 text-xs mb-2">
                    <span className="font-bold text-navy bg-white px-3 py-1 rounded-full border border-slate-200 shadow-sm">
                      {selectedBlog.category}
                    </span>
                    <span className="text-muted flex items-center gap-1">
                      <Clock size={12} /> {selectedBlog.readTime}
                    </span>
                    <span className="text-muted flex items-center gap-1">
                      <Calendar size={12} /> {selectedBlog.publishedDate}
                    </span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-extrabold text-ink leading-tight">
                    {selectedBlog.title}
                  </h2>
                </div>
                <button
                  onClick={() => setSelectedBlog(null)}
                  className="p-2 rounded-xl bg-white/80 hover:bg-slate-100 text-slate-500 hover:text-ink transition-colors border border-slate-200 shadow-sm"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="p-6 md:p-8 overflow-y-auto space-y-6">
                {/* Author Card */}
                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <img
                    src={selectedBlog.author.avatar}
                    alt={selectedBlog.author.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                  />
                  <div>
                    <div className="font-bold text-sm text-ink">{selectedBlog.author.name}</div>
                    <div className="text-xs text-muted">
                      {selectedBlog.author.role} · University of Calcutta M.Sc. Economics
                    </div>
                  </div>
                </div>

                {/* Intro */}
                <p className="text-base text-slate-700 leading-relaxed font-normal">
                  {selectedBlog.content.intro}
                </p>

                {/* Key Points Box */}
                <div className="bg-blue-50/60 rounded-xl p-5 border border-blue-100">
                  <div className="flex items-center gap-2 font-bold text-sm text-navy mb-3">
                    <Sparkles size={16} className="text-blue-electric" /> Key Findings & Highlights
                  </div>
                  <ul className="space-y-2">
                    {selectedBlog.content.keyPoints.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <CheckCircle2 size={16} className="text-emerald-fiverr mt-0.5 flex-shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Sections */}
                {selectedBlog.content.sections.map((sec, idx) => (
                  <div key={idx} className="space-y-3">
                    <h3 className="text-lg font-bold text-ink">{sec.heading}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{sec.body}</p>
                    {sec.codeSnippet && (
                      <div className="bg-slate-900 rounded-xl p-4 overflow-x-auto text-xs font-mono text-emerald-400">
                        <pre><code>{sec.codeSnippet}</code></pre>
                      </div>
                    )}
                  </div>
                ))}

                {/* Bottom Takeaway */}
                <div className="p-5 rounded-xl bg-gradient-to-r from-navy to-navy-light text-white">
                  <div className="text-xs font-bold uppercase tracking-wider text-blue-soft mb-1">
                    Executive Takeaway
                  </div>
                  <p className="text-sm font-medium text-white/90 leading-relaxed">
                    {selectedBlog.content.takeaway}
                  </p>
                </div>

                {/* Footer tags */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100">
                  <div className="flex flex-wrap gap-2">
                    {selectedBlog.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-semibold text-navy bg-blue-50 px-2.5 py-1 rounded-md"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => {
                      if (navigator.clipboard) {
                        navigator.clipboard.writeText(window.location.href);
                        alert("Link copied to clipboard!");
                      }
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-navy transition-colors"
                  >
                    <Share2 size={14} /> Share Article
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
