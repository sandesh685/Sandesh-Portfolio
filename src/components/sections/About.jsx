import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  Server,
  Database,
  Layers,
  CheckCircle2,
  FileText,
  ExternalLink,
  GraduationCap,
  Sparkles,
  Workflow,
  Cpu,
  BookOpen
} from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

const highlights = [
  {
    icon: Server,
    title: "Java Full Stack Architecture",
    description: "Specialized in architecting end-to-end web applications combining robust Spring Boot backends with performant React frontend user interfaces."
  },
  {
    icon: Code,
    title: "Frontend & Backend Synergy",
    description: "Proficient in component-driven UI development using React.js and Tailwind CSS, backed by Spring MVC controllers and clean RESTful design."
  },
  {
    icon: Database,
    title: "Database Management & ORM",
    description: "Experienced in MySQL relational schema modeling, constraints, complex joins, and object-relational mapping via Hibernate and Spring Data JPA."
  },
  {
    icon: Workflow,
    title: "REST API Engineering",
    description: "Designs secure, predictable, and standards-compliant REST endpoints with clean HTTP semantics, request validation, and JSON payload handling."
  },
  {
    icon: Cpu,
    title: "Real-World Software Focus",
    description: "Passionate about turning practical business problems into dependable software—exemplified by my live restaurant and hotel billing system."
  },
  {
    icon: BookOpen,
    title: "Continuous Growth Mindset",
    description: "Driven by curiosity, algorithmic thinking, and rigorous debugging habits to write maintainable, recruiter-standard code."
  }
];

export default function About() {
  const [showResumeModal, setShowResumeModal] = useState(false);

  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 dark:text-blue-400 light:text-blue-600 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Profile Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
            Passionate Computer Science graduate dedicated to building scalable, reliable, and user-centric software systems.
          </p>
        </div>

        {/* Top Split: Professional Narrative + Key Fact Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Main Narrative (7 cols) */}
          <div className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900">
                    Background & Development Philosophy
                  </h3>
                  <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-500">
                    B.Sc. Computer Science • Savitribai Phule Pune University
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-slate-300 dark:text-slate-300 light:text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  I am a motivated <strong className="text-white dark:text-white light:text-slate-900 font-semibold">Java Full Stack Developer</strong> graduating with a B.Sc. in Computer Science (2026) from Chandmal Tarachand Bora College, Shirur, affiliated with <span className="text-blue-400 dark:text-blue-400 light:text-blue-600 font-medium">Savitribai Phule Pune University</span>.
                </p>
                <p>
                  To complement my rigorous academic fundamentals in object-oriented programming, data structures, and database principles, I completed an intensive 7-month full-stack development program at <strong className="text-white dark:text-white light:text-slate-900 font-semibold">Kiran Academy, Pune</strong>, specializing in Java, Spring Boot, Hibernate, MySQL, and React.js.
                </p>
                <p>
                  My development philosophy centers on creating clean, predictable software architectures that solve tangible operational needs. Whether architecting role-based security in enterprise hotel billing software or implementing automated WhatsApp order dispatches, I take pride in delivering resilient, recruiter-grade applications.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Ready for Software Engineer / Full Stack roles</span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowResumeModal(true)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-slate-200 dark:text-slate-200 light:text-slate-700 bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-100 hover:bg-slate-700 dark:hover:bg-slate-700 light:hover:bg-slate-200 border border-slate-700/60 dark:border-slate-700/60 light:border-slate-300 transition-colors"
                >
                  <FileText className="w-3.5 h-3.5 text-blue-400" />
                  <span>Preview Resume</span>
                </button>

                <a
                  href={personalInfo.resumeUrl}
                  download="Sandesh_Bobade_Resume.pdf"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-sm transition-colors"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Facts Card (5 cols) */}
          <div className="lg:col-span-5 glass-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900 mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <span>Recruiter Quick Facts</span>
              </h3>

              <div className="space-y-4">
                <div className="p-3.5 rounded-xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-50 border border-slate-800/70 dark:border-slate-800/70 light:border-slate-200">
                  <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-400 light:text-slate-500 uppercase tracking-wider block">
                    Full Legal Name
                  </span>
                  <span className="text-sm font-bold text-white dark:text-white light:text-slate-900">
                    {personalInfo.fullName}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-50 border border-slate-800/70 dark:border-slate-800/70 light:border-slate-200">
                  <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-400 light:text-slate-500 uppercase tracking-wider block">
                    Target Role
                  </span>
                  <span className="text-sm font-bold text-blue-400 dark:text-blue-400 light:text-blue-600">
                    Java Full Stack Developer / Software Engineer
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-50 border border-slate-800/70 dark:border-slate-800/70 light:border-slate-200">
                  <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-400 light:text-slate-500 uppercase tracking-wider block">
                    Location & Mobility
                  </span>
                  <span className="text-sm font-medium text-slate-200 dark:text-slate-200 light:text-slate-800">
                    Pune, Maharashtra, India (Open to Pune, Hybrid, & Remote)
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-50 border border-slate-800/70 dark:border-slate-800/70 light:border-slate-200">
                  <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-400 light:text-slate-500 uppercase tracking-wider block">
                    Primary Tech Stack
                  </span>
                  <span className="text-sm font-medium text-slate-200 dark:text-slate-200 light:text-slate-800">
                    Java 17+, Spring Boot, Hibernate, MySQL, React.js, Tailwind, REST API
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/20">
              <span className="text-xs font-bold text-blue-300 dark:text-blue-300 light:text-blue-700 block mb-1">
                Career Objective
              </span>
              <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 italic leading-relaxed">
                "To build scalable, efficient, and user-friendly web applications using Java Full Stack technologies and continuously grow as a software developer."
              </p>
            </div>
          </div>

        </div>

        {/* 6 Key Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="glass-card p-6 rounded-2xl flex flex-col justify-start"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-600/10 dark:bg-blue-600/10 light:bg-blue-100 flex items-center justify-center text-blue-400 dark:text-blue-400 light:text-blue-600 border border-blue-500/20 mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white dark:text-white light:text-slate-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Resume Preview Modal */}
      {showResumeModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setShowResumeModal(false)}
        >
          <div
            className="relative max-w-3xl w-full max-h-[90vh] bg-slate-900 dark:bg-slate-900 light:bg-white rounded-2xl border border-slate-800 dark:border-slate-800 light:border-slate-200 overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-slate-800 dark:border-slate-800 light:border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <FileText className="w-5 h-5 text-blue-400" />
                <h3 className="font-bold text-base text-white dark:text-white light:text-slate-900">
                  Sandesh Bobade - Official Resume Preview
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.resumeUrl}
                  download="Sandesh_Bobade_Resume.pdf"
                  className="px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 transition-colors"
                >
                  Download PDF
                </a>
                <button
                  onClick={() => setShowResumeModal(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Modal Body Preview Image */}
            <div className="overflow-y-auto p-4 flex justify-center bg-slate-950/50">
              <img
                src={personalInfo.resumePreview}
                alt="Sandesh Bobade Resume"
                className="max-w-full rounded-lg shadow-lg border border-slate-800"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

