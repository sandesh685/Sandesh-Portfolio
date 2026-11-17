import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Github,
  Star,
  GitFork,
  ExternalLink,
  BookOpen,
  Code2,
  Activity,
  Sparkles,
  GitBranch,
  Terminal
} from 'lucide-react';
import { personalInfo, githubRepositories } from '../../data/portfolioData';

// Map of language colors
const languageColors = {
  Java: '#b07219',
  JavaScript: '#f1e05a',
  React: '#61dafb',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Python: '#3572A5',
  PHP: '#4F5D95',
  Default: '#3B82F6'
};

export default function GithubActivity() {
  const [repos, setRepos] = useState(githubRepositories);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Attempt live GitHub public API fetch for username
    const fetchGitHubData = async () => {
      try {
        setLoading(true);
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 4000);

        const res = await fetch('https://api.github.com/users/sandesh685/repos?sort=updated&per_page=6', {
          signal: controller.signal,
          headers: {
            'Accept': 'application/vnd.github.v3+json'
          }
        });
        clearTimeout(timeoutId);

        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            // Map API response to our card structure
            const mapped = data.map((r) => ({
              name: r.name,
              description: r.description || "Production repository by Sandesh Bobade.",
              language: r.language || "Java / JavaScript",
              stars: r.stargazers_count,
              forks: r.forks_count,
              url: r.html_url,
              topics: r.topics && r.topics.length > 0 ? r.topics : [r.language?.toLowerCase() || 'code']
            }));
            setRepos(mapped);
          }
        } else {
          // Graceful fallback to verified repositories
          setError(true);
        }
      } catch (err) {
        // Network timeout / offline fallback
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  return (
    <section id="github" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 dark:text-blue-400 light:text-blue-600 text-xs font-semibold mb-3">
            <Github className="w-3.5 h-3.5" />
            <span>Open Source & Version Control</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            GitHub <span className="text-gradient">Activity & Codebase</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
            Public repositories showcasing full stack Java applications, REST endpoints, and frontend SPAs.
          </p>
        </div>

        {/* GitHub Header Banner */}
        <div className="max-w-5xl mx-auto mb-10 p-6 sm:p-8 rounded-2xl glass-card border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-slate-950 dark:bg-slate-950 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-300 flex items-center justify-center text-white dark:text-white light:text-slate-900 shadow-md">
              <Github className="w-8 h-8" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900">
                  sandesh685
                </h3>
                <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-wider">
                  Verified Developer
                </span>
              </div>
              <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-500 mt-1">
                Active commit history • Java Full Stack repositories • Spring Boot & React modules
              </p>
            </div>
          </div>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-md shadow-blue-500/20 transition-all shrink-0"
          >
            <Github className="w-4 h-4" />
            <span>Follow on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 ml-1" />
          </a>
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {repos.map((repo, idx) => {
            const langColor = languageColors[repo.language] || languageColors.Default;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="glass-card p-6 rounded-2xl border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-blue-400" />
                      <a
                        href={repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-bold text-white dark:text-white light:text-slate-900 group-hover:text-blue-400 transition-colors line-clamp-1"
                      >
                        {repo.name}
                      </a>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-200 text-slate-300 dark:text-slate-300 light:text-slate-700 border border-slate-700/50">
                      Public
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed mb-4 line-clamp-2">
                    {repo.description}
                  </p>

                  {/* Topics Pills */}
                  {repo.topics && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {repo.topics.slice(0, 3).map((topic, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-blue-500/10 text-blue-400 dark:text-blue-400 light:text-blue-700 border border-blue-500/20"
                        >
                          #{topic}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 flex items-center justify-between text-xs text-slate-400 dark:text-slate-400 light:text-slate-500">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: langColor }}
                    />
                    <span className="font-medium text-slate-300 dark:text-slate-300 light:text-slate-700">
                      {repo.language}
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1 hover:text-amber-400 transition-colors">
                      <Star className="w-3.5 h-3.5" />
                      <span>{repo.stars}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-3.5 h-3.5" />
                      <span>{repo.forks}</span>
                    </span>
                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                      title="Open on GitHub"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

