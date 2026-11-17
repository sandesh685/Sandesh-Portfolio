import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Layers,
  FolderGit2,
  ExternalLink,
  Github,
  CheckCircle2,
  Eye,
  Sparkles,
  Server,
  Database,
  Cpu,
  Smartphone,
  ShieldCheck,
  CheckSquare
} from 'lucide-react';
import { projects } from '../../data/portfolioData';
import ProjectModal from '../modals/ProjectModal';

const categories = ["All", "Full Stack", "Frontend / SaaS", "Software Testing & QA"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter((p) => {
        if (selectedCategory === "Full Stack") return p.category.includes("Full Stack");
        if (selectedCategory === "Frontend / SaaS") return p.category.includes("Frontend");
        if (selectedCategory === "Software Testing & QA") return p.category.includes("Testing");
        return true;
      });

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 dark:text-blue-400 light:text-blue-600 text-xs font-semibold mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Software Engineering Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            Project <span className="text-gradient">Showcase</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
            Real-world enterprise systems, SaaS platforms, and software quality assurance projects.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/30 scale-105"
                  : "glass-card text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white dark:hover:text-white light:hover:text-slate-900 hover:border-blue-500/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <AnimatePresence>
            {filteredProjects.map((project, index) => {
              const hasScreenshots = project.screenshots && project.screenshots.length > 0;
              const primaryScreenshot = hasScreenshots ? project.screenshots[0].url : null;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="glass-card rounded-2xl overflow-hidden border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 flex flex-col justify-between group hover:border-blue-500/40 transition-all duration-300 shadow-xl"
                >
                  {/* Top Preview Banner */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950 border-b border-slate-800/80">
                    {hasScreenshots ? (
                      <div className="relative w-full h-full group-hover:scale-105 transition-transform duration-500">
                        <img
                          src={primaryScreenshot}
                          alt={project.title}
                          className="w-full h-full object-cover object-top filter brightness-90 group-hover:brightness-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                        
                        {/* Screenshot count pill */}
                        <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-slate-900/90 backdrop-blur-md text-white text-[11px] font-semibold border border-slate-700 flex items-center gap-1.5">
                          <Eye className="w-3.5 h-3.5 text-blue-400" />
                          <span>{project.screenshots.length} Screenshots</span>
                        </div>
                      </div>
                    ) : (
                      // Tech Mockup Graphic for SaaS / QA projects without direct photo files
                      <div className="relative w-full h-full p-6 flex flex-col justify-between bg-gradient-to-br from-slate-900 via-[#0B1020] to-blue-950/40">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-red-500/80" />
                            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                            <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                          </div>
                          <span className="text-[11px] font-mono text-slate-500">
                            {project.category.toLowerCase().replace(/ /g, '-')}
                          </span>
                        </div>

                        <div className="my-auto py-4">
                          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-md">
                            <div className="flex items-center gap-2 text-xs font-bold text-blue-400 mb-1.5">
                              {project.id === "teamflow-ai" ? (
                                <>
                                  <Layers className="w-4 h-4" />
                                  <span>Role-Based Multi-Tier SaaS System</span>
                                </>
                              ) : (
                                <>
                                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                                  <span>Comprehensive QA & Test Matrix</span>
                                </>
                              )}
                            </div>
                            <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-400 line-clamp-2">
                              {project.tagline}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-[11px] text-slate-400">
                          <span>Verified Production Architecture</span>
                          <span className="text-blue-400 font-semibold">Click to explore details →</span>
                        </div>
                      </div>
                    )}

                    {/* Category Floating Pill */}
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-900/90 dark:bg-slate-900/90 light:bg-white/95 backdrop-blur-md border border-slate-700/80 dark:border-slate-700/80 light:border-slate-300 text-blue-400 dark:text-blue-400 light:text-blue-600 text-xs font-bold shadow-lg">
                      {project.category}
                    </div>
                  </div>

                  {/* Card Content Area */}
                  <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                    <div>
                      {/* Project Title */}
                      <h3 className="text-xl sm:text-2xl font-bold text-white dark:text-white light:text-slate-900 group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>

                      {/* Short Description */}
                      <p className="mt-2 text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
                        {project.shortDescription}
                      </p>

                      {/* Key Features Bullet points */}
                      <div className="mt-5 space-y-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 light:text-slate-500 block">
                          Verified Key Highlights:
                        </span>
                        <div className="space-y-1.5">
                          {project.features.slice(0, 4).map((feature, i) => (
                            <div key={i} className="flex items-start gap-2 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700">
                              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                              <span className="line-clamp-1">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tech Stack Pills */}
                      <div className="mt-6 flex flex-wrap gap-1.5">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 border border-slate-700/50 dark:border-slate-700/50 light:border-slate-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Card Actions Footer */}
                    <div className="mt-8 pt-5 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 flex items-center justify-between gap-3">
                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-500/20 transition-all duration-200"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Details {hasScreenshots && "& Screenshots"}</span>
                      </button>

                      <div className="flex items-center gap-2">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`GitHub Repository for ${project.title}`}
                            className="p-2.5 rounded-xl border border-slate-800 dark:border-slate-800 light:border-slate-200 bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white dark:hover:text-white light:hover:text-slate-900 hover:border-blue-500/50 transition-colors"
                            title="GitHub Repository"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}

                        {project.liveDemo && (
                          <a
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Live Demo for ${project.title}`}
                            className="p-2.5 rounded-xl border border-slate-800 dark:border-slate-800 light:border-slate-200 bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white dark:hover:text-white light:hover:text-slate-900 hover:border-blue-500/50 transition-colors"
                            title="Live Demo"
                          >
                            <ExternalLink className="w-4 h-4 text-blue-400" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>

      {/* Interactive Project Modal */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
}

