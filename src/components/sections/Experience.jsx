import React from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  GraduationCap,
  Sparkles,
  Award,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { experience } from '../../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 dark:text-blue-400 light:text-blue-600 text-xs font-semibold mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Career Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            Work & <span className="text-gradient">Training Experience</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
            Hands-on software development internship and intensive full-stack enterprise engineering training.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Guide Line */}
          <div className="hidden sm:block absolute left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-slate-800" />

          <div className="space-y-12">
            {experience.map((item, index) => {
              const isInternship = item.type === "Internship";
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative sm:pl-20"
                >
                  {/* Timeline Node Icon (Desktop) */}
                  <div className="hidden sm:flex absolute left-4 top-2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-900 dark:bg-slate-900 light:bg-white border-2 border-blue-500 items-center justify-center shadow-md shadow-blue-500/30 z-10">
                    {isInternship ? (
                      <Briefcase className="w-4 h-4 text-blue-400" />
                    ) : (
                      <Award className="w-4 h-4 text-purple-400" />
                    )}
                  </div>

                  {/* Experience Card */}
                  <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 hover:border-blue-500/40 transition-all duration-300">
                    
                    {/* Header Row */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                      <div>
                        <div className="flex items-center gap-2.5 flex-wrap">
                          <h3 className="text-xl sm:text-2xl font-bold text-white dark:text-white light:text-slate-900">
                            {item.role}
                          </h3>
                          <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${
                            isInternship
                              ? "bg-blue-500/15 text-blue-400 dark:text-blue-400 light:text-blue-700 border-blue-500/30"
                              : "bg-purple-500/15 text-purple-400 dark:text-purple-400 light:text-purple-700 border-purple-500/30"
                          }`}>
                            {item.badge}
                          </span>
                        </div>
                        <div className="mt-1 flex items-center gap-3 text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 flex-wrap">
                          <span className="font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800">
                            {item.company}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-blue-400" />
                            {item.location}
                          </span>
                        </div>
                      </div>

                      {/* Period Badge */}
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700 border border-slate-800 dark:border-slate-800 light:border-slate-200 w-fit">
                        <Calendar className="w-3.5 h-3.5 text-blue-400" />
                        <span>{item.period}</span>
                      </div>
                    </div>

                    {/* Description Paragraph */}
                    <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-600 mb-6 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Responsibilities Checklist */}
                    <div className="space-y-2.5 mb-6">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 light:text-slate-500">
                        {isInternship ? "Key Contributions & Responsibilities:" : "Curriculum & Hands-on Training Focus:"}
                      </h4>
                      <ul className="space-y-2">
                        {item.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Badges */}
                    <div className="pt-4 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
                      <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-400 light:text-slate-500 block mb-2">
                        Technologies Applied:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {item.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-800/70 dark:bg-slate-800/70 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 border border-slate-700/50 dark:border-slate-700/50 light:border-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

