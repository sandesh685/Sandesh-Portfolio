import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      
      if (totalScroll > 0) {
        setScrollProgress((currentScroll / totalScroll) * 100);
      }

      setVisible(currentScroll > 320);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-slate-900/90 dark:bg-slate-900/90 light:bg-white text-slate-200 dark:text-slate-200 light:text-slate-800 border border-slate-700/80 dark:border-slate-700/80 light:border-slate-300 shadow-xl hover:text-white dark:hover:text-white light:hover:text-slate-900 hover:border-blue-500 hover:scale-110 active:scale-95 transition-all duration-200 flex items-center justify-center group"
    >
      {/* Circular Progress SVG */}
      <svg className="w-8 h-8 -rotate-90 pointer-events-none" viewBox="0 0 36 36">
        <path
          className="text-slate-800 dark:text-slate-800 light:text-slate-200"
          strokeWidth="3"
          stroke="currentColor"
          fill="none"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          className="text-blue-500 transition-all duration-150"
          strokeDasharray={`${scrollProgress}, 100`}
          strokeWidth="3"
          strokeLinecap="round"
          stroke="currentColor"
          fill="none"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </svg>
      <ArrowUp className="w-4 h-4 text-blue-400 absolute transition-transform group-hover:-translate-y-0.5" />
    </button>
  );
}

