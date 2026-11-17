import React from 'react';
import { motion } from 'framer-motion';
import {
  FileText,
  FolderGit2,
  Github,
  Linkedin,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Database,
  Server,
  Layers,
  Terminal
} from 'lucide-react';
import { personalInfo, stats } from '../../data/portfolioData';

// Floating tech tag items for subtle ambient tech animation
const floatingTags = [
  { name: 'Spring Boot', icon: Server, color: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10', x: '10%', y: '15%', delay: 0 },
  { name: 'React.js', icon: Sparkles, color: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10', x: '82%', y: '22%', delay: 1.2 },
  { name: 'Java Enterprise', icon: Terminal, color: 'text-amber-400 border-amber-500/30 bg-amber-500/10', x: '12%', y: '78%', delay: 2.1 },
  { name: 'MySQL DB', icon: Database, color: 'text-blue-400 border-blue-500/30 bg-blue-500/10', x: '85%', y: '75%', delay: 0.8 },
  { name: 'Hibernate JPA', icon: Layers, color: 'text-purple-400 border-purple-500/30 bg-purple-500/10', x: '4%', y: '48%', delay: 1.6 },
];

export default function Hero() {
  const scrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center overflow-hidden"
    >
      {/* Background radial glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-600/15 via-purple-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-32 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle Floating Tech Pills on larger viewports */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
        {floatingTags.map((tag, idx) => {
          const Icon = tag.icon;
          return (
            <motion.div
              key={idx}
              initial={{ y: 0, opacity: 0.7 }}
              animate={{
                y: [-6, 6, -6],
                opacity: [0.65, 0.9, 0.65]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: tag.delay
              }}
              style={{ left: tag.x, top: tag.y }}
              className={`absolute flex items-center gap-2 px-3 py-1.5 rounded-full border backdrop-blur-md shadow-lg text-xs font-semibold ${tag.color}`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tag.name}</span>
            </motion.div>
          );
        })}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 dark:text-blue-400 light:text-blue-600 text-xs font-semibold mb-6 shadow-sm shadow-blue-500/10"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{personalInfo.status}</span>
              <span className="text-slate-500 dark:text-slate-500 light:text-slate-400">•</span>
              <span className="flex items-center gap-1 text-slate-300 dark:text-slate-300 light:text-slate-600 font-normal">
                <MapPin className="w-3 h-3 text-blue-400" />
                {personalInfo.location}
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900 leading-[1.15]"
            >
              Hi, I'm{' '}
              <span className="text-gradient">
                Sandesh Bobade
              </span>
            </motion.h1>

            {/* Professional Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-3 flex items-center gap-3 flex-wrap"
            >
              <span className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-200 dark:text-slate-200 light:text-slate-800">
                Java Full Stack Developer
              </span>
              <span className="px-2.5 py-0.5 rounded-md text-xs font-bold uppercase tracking-wider bg-purple-500/20 text-purple-300 dark:text-purple-300 light:text-purple-700 border border-purple-500/30">
                Spring Boot & React
              </span>
            </motion.div>

            {/* Recruiter Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 text-base sm:text-lg text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed max-w-2xl"
            >
              {personalInfo.heroDescription}
            </motion.p>

            {/* Primary Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              {/* Download Resume Button */}
              <a
                href={personalInfo.resumeUrl}
                download="Sandesh_Bobade_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-200 group active:scale-95"
              >
                <FileText className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                <span>Download Resume</span>
              </a>

              {/* View Projects Button */}
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-slate-200 dark:text-slate-200 light:text-slate-800 glass-card hover:bg-slate-800/60 dark:hover:bg-slate-800/60 light:hover:bg-slate-100 hover:border-blue-500/50 transition-all duration-200 group active:scale-95"
              >
                <FolderGit2 className="w-4 h-4 text-blue-400 transition-transform group-hover:scale-110" />
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Social Buttons */}
              <div className="flex items-center gap-2.5">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-3.5 rounded-xl border border-slate-800 dark:border-slate-800 light:border-slate-200 bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white dark:hover:text-white light:hover:text-slate-900 hover:border-blue-500/50 hover:bg-slate-800/60 transition-all active:scale-95 shadow-sm"
                  title="View GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-3.5 rounded-xl border border-slate-800 dark:border-slate-800 light:border-slate-200 bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white dark:hover:text-white light:hover:text-slate-900 hover:border-blue-500/50 hover:bg-slate-800/60 transition-all active:scale-95 shadow-sm"
                  title="View LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4 text-blue-400" />
                </a>
              </div>
            </motion.div>

            {/* Quick Metrics Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-12 pt-8 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-6 w-full"
            >
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs font-semibold text-blue-400 dark:text-blue-400 light:text-blue-600 mt-0.5">
                    {stat.label}
                  </span>
                  <span className="text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-500">
                    {stat.subtext}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Profile Column (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative max-w-sm sm:max-w-md w-full"
            >
              {/* Decorative Glow ring */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 opacity-60 blur-lg group-hover:opacity-90 transition duration-1000 animate-pulse-slow" />

              {/* Photo Card Container */}
              <div className="relative rounded-2xl p-2.5 bg-[#0B1020] dark:bg-[#0B1020] light:bg-white border border-slate-800/90 dark:border-slate-800/90 light:border-slate-200 shadow-2xl">
                
                {/* Photo with aspect ratio */}
                <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-slate-900 group">
                  <img
                    src={personalInfo.photo}
                    alt={personalInfo.fullName}
                    className="w-full h-full object-cover object-top filter contrast-[1.02] brightness-95 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1020]/90 via-[#0B1020]/20 to-transparent pointer-events-none" />

                  {/* Floating Overlay Badge on photo */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-900/85 dark:bg-slate-900/85 light:bg-white/95 backdrop-blur-md border border-slate-800 dark:border-slate-800 light:border-slate-200 flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-bold text-white dark:text-white light:text-slate-900">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                        <span>Sandesh S. Bobade</span>
                      </div>
                      <p className="text-[11px] text-slate-300 dark:text-slate-300 light:text-slate-600">
                        B.Sc. CS • Savitribai Phule Pune Univ
                      </p>
                    </div>
                    <span className="px-2 py-1 rounded bg-blue-600/20 text-blue-400 dark:text-blue-400 light:text-blue-700 border border-blue-500/30 text-[10px] font-extrabold uppercase tracking-wider">
                      Verified
                    </span>
                  </div>
                </div>

                {/* Micro tech badges beneath photo */}
                <div className="mt-3 px-2 py-2 flex items-center justify-around text-slate-400 dark:text-slate-400 light:text-slate-600 text-xs font-medium">
                  <span className="flex items-center gap-1 hover:text-blue-400 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    Java / Spring
                  </span>
                  <span className="text-slate-700 dark:text-slate-700 light:text-slate-300">|</span>
                  <span className="flex items-center gap-1 hover:text-cyan-400 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    React.js
                  </span>
                  <span className="text-slate-700 dark:text-slate-700 light:text-slate-300">|</span>
                  <span className="flex items-center gap-1 hover:text-purple-400 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    MySQL DB
                  </span>
                </div>

              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

