import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Calendar,
  Building2,
  Award,
  CheckCircle2,
  BookOpen,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { education } from '../../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 dark:text-blue-400 light:text-blue-600 text-xs font-semibold mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            Education & <span className="text-gradient">Qualifications</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
            Formal computer science education and technical foundational milestones.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 hover:border-blue-500/40 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h3 className="text-xl sm:text-2xl font-bold text-white dark:text-white light:text-slate-900">
                      {item.degree}
                    </h3>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-600/15 text-blue-400 dark:text-blue-400 light:text-blue-700 border border-blue-500/30">
                      {item.badge}
                    </span>
                  </div>

                  <div className="mt-2 flex items-center gap-2 text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 font-medium flex-wrap">
                    <Building2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>{item.institution}</span>
                    <span className="text-slate-600 dark:text-slate-600 light:text-slate-400">•</span>
                    <span className="text-slate-400 dark:text-slate-400 light:text-slate-500">{item.university}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:items-end gap-1.5 shrink-0">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700 border border-slate-800 dark:border-slate-800 light:border-slate-200 w-fit">
                    <Calendar className="w-3.5 h-3.5 text-blue-400" />
                    <span>{item.period}</span>
                  </div>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20">
                    {item.grade}
                  </span>
                </div>
              </div>

              {/* Highlights List */}
              <div className="mt-4 pt-4 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 space-y-2">
                {item.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

