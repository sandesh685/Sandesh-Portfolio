import React, { useState } from 'react';
import {
  X,
  Github,
  ExternalLink,
  CheckCircle2,
  Layers,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Server,
  Database,
  Code
} from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const screenshots = project.screenshots || [];

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full max-h-[92vh] bg-slate-900 dark:bg-slate-900 light:bg-white rounded-2xl border border-slate-800 dark:border-slate-800 light:border-slate-200 overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-800 dark:border-slate-800 light:border-slate-200 flex items-center justify-between shrink-0">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-blue-600/20 text-blue-400 dark:text-blue-400 light:text-blue-700 border border-blue-500/30">
                {project.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white dark:text-white light:text-slate-900">
                {project.title}
              </h3>
            </div>
            <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-500 mt-1">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Project Modal"
            className="p-2 rounded-xl text-slate-400 hover:text-white dark:hover:text-white light:hover:text-slate-900 bg-slate-800/60 dark:bg-slate-800/60 light:bg-slate-100 hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-5 sm:p-6 space-y-6">
          
          {/* Screenshots Gallery (if available) */}
          {screenshots.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-300 dark:text-slate-300 light:text-slate-700 uppercase tracking-wider">
                  Verified Project Screenshots ({activeImageIndex + 1}/{screenshots.length})
                </span>
                <span className="text-[11px] text-blue-400 font-medium">
                  {screenshots[activeImageIndex].caption}
                </span>
              </div>

              {/* Main Active Screenshot */}
              <div className="relative rounded-xl overflow-hidden bg-slate-950 border border-slate-800 aspect-[16/9] flex items-center justify-center group">
                <img
                  src={screenshots[activeImageIndex].url}
                  alt={screenshots[activeImageIndex].caption}
                  className="max-h-full max-w-full object-contain"
                />

                {screenshots.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      aria-label="Previous Screenshot"
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white border border-slate-700 backdrop-blur-sm transition-all"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      aria-label="Next Screenshot"
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white border border-slate-700 backdrop-blur-sm transition-all"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnail Strip */}
              {screenshots.length > 1 && (
                <div className="flex items-center gap-2 overflow-x-auto pb-1">
                  {screenshots.map((s, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-20 h-14 rounded-lg overflow-hidden border shrink-0 transition-all ${
                        activeImageIndex === idx
                          ? "border-blue-500 ring-2 ring-blue-500/50"
                          : "border-slate-800 opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img src={s.url} alt={s.caption} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Full Description */}
          <div>
            <h4 className="text-sm font-bold text-white dark:text-white light:text-slate-900 uppercase tracking-wider mb-2">
              System Overview & Purpose
            </h4>
            <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Key Verified Features */}
          <div>
            <h4 className="text-sm font-bold text-white dark:text-white light:text-slate-900 uppercase tracking-wider mb-3">
              Core Verified Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700">
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Highlights */}
          {project.architectureHighlights && (
            <div>
              <h4 className="text-sm font-bold text-white dark:text-white light:text-slate-900 uppercase tracking-wider mb-3">
                Technical Architecture Highlights
              </h4>
              <div className="space-y-2">
                {project.architectureHighlights.map((arch, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" />
                    <span>{arch}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies Stack */}
          <div>
            <h4 className="text-sm font-bold text-white dark:text-white light:text-slate-900 uppercase tracking-wider mb-2.5">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-800/90 dark:bg-slate-800/90 light:bg-slate-100 text-slate-200 dark:text-slate-200 light:text-slate-800 border border-slate-700/60 dark:border-slate-700/60 light:border-slate-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer with Actions */}
        <div className="p-4 sm:p-5 border-t border-slate-800 dark:border-slate-800 light:border-slate-200 bg-slate-900/90 dark:bg-slate-900/90 light:bg-slate-50 flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
            )}

            {project.liveDemo ? (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            ) : (
              <span className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-500 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Codebase available on GitHub</span>
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/50 hover:bg-slate-800 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

