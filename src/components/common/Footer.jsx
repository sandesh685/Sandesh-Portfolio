import React from 'react';
import {
  Heart,
  Github,
  Linkedin,
  Mail,
  MapPin,
  ArrowUp,
  Code2
} from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-purple-600 p-[2px]">
                <div className="w-full h-full bg-[#0B1020] rounded-[6px] flex items-center justify-center">
                  <span className="font-extrabold text-xs text-blue-400">SB</span>
                </div>
              </div>
              <span className="text-base font-bold text-white dark:text-white light:text-slate-900">
                Sandesh Sanjay Bobade
              </span>
            </div>
            <p className="mt-1 text-xs text-slate-400 dark:text-slate-400 light:text-slate-500">
              Java Full Stack Developer • Spring Boot & React.js
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-slate-800 dark:border-slate-800 light:border-slate-300 bg-slate-900/80 dark:bg-slate-900/80 light:bg-white text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white dark:hover:text-white light:hover:text-slate-900 hover:border-blue-500 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-slate-800 dark:border-slate-800 light:border-slate-300 bg-slate-900/80 dark:bg-slate-900/80 light:bg-white text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white dark:hover:text-white light:hover:text-slate-900 hover:border-blue-500 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4 text-blue-400" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-xl border border-slate-800 dark:border-slate-800 light:border-slate-300 bg-slate-900/80 dark:bg-slate-900/80 light:bg-white text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white dark:hover:text-white light:hover:text-slate-900 hover:border-blue-500 transition-colors"
              aria-label="Direct Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Copyright & Scroll to top */}
          <div className="flex flex-col items-center md:items-end text-xs text-slate-400 dark:text-slate-400 light:text-slate-500 gap-1">
            <span>© {currentYear} Sandesh Bobade. All rights reserved.</span>
            <span className="flex items-center gap-1 text-[11px]">
              Engineered with React, Spring Boot mindset & Tailwind
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
}

