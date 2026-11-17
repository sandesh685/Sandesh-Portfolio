import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code,
  Terminal,
  Layers,
  Database,
  Cpu,
  Server,
  Sparkles,
  GitBranch,
  Github,
  Laptop,
  Send,
  Globe,
  Palette,
  Layout,
  Table,
  HardDrive,
  ShieldCheck,
  Network,
  Link,
  Box,
  Smartphone,
  CheckCircle2,
  FileCheck,
  Coffee,
  Atom,
  Code2
} from 'lucide-react';

// Organized technical skills from instructions
const skillGroups = [
  {
    id: "all",
    label: "All Technologies",
    icon: Sparkles
  },
  {
    id: "programming",
    label: "Programming",
    icon: Code2,
    skills: [
      { name: "Java", level: "Core & Advanced", icon: Coffee, desc: "OOP, Multithreading, Collections, Streams, JVM", color: "from-orange-500/20 to-amber-500/20 text-orange-400 border-orange-500/30" },
      { name: "JavaScript", level: "Modern ES6+", icon: Code2, desc: "Async/Await, DOM manipulation, Closures, Promises", color: "from-yellow-500/20 to-amber-500/20 text-yellow-400 border-yellow-500/30" },
      { name: "PHP", level: "Scripting & Web", icon: Code, desc: "Server scripting, form processing, basic backend logic", color: "from-indigo-500/20 to-blue-500/20 text-indigo-400 border-indigo-500/30" },
    ]
  },
  {
    id: "frontend",
    label: "Frontend",
    icon: Layout,
    skills: [
      { name: "React.js", level: "Advanced SPA", icon: Atom, desc: "Functional components, Hooks, Context API, Virtual DOM", color: "from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/30" },
      { name: "HTML5", level: "Semantic Markup", icon: Globe, desc: "Accessibility, SEO tags, forms, HTML5 storage APIs", color: "from-orange-500/20 to-red-500/20 text-orange-400 border-orange-500/30" },
      { name: "CSS3", level: "Modern Styling", icon: Palette, desc: "Flexbox, Grid, keyframes, transitions, media queries", color: "from-blue-500/20 to-indigo-500/20 text-blue-400 border-blue-500/30" },
      { name: "JavaScript", level: "Frontend Logic", icon: Code2, desc: "Interactive UI state, event handling, JSON serialization", color: "from-yellow-500/20 to-amber-500/20 text-yellow-400 border-yellow-500/30" },
      { name: "Tailwind CSS", level: "Utility-First CSS", icon: Sparkles, desc: "Responsive layouts, custom tokens, modern micro-interactions", color: "from-sky-500/20 to-cyan-500/20 text-sky-400 border-sky-500/30" },
      { name: "Bootstrap", level: "Grid & UI Library", icon: Layout, desc: "Responsive 12-column grid, modals, navbar components", color: "from-purple-500/20 to-indigo-500/20 text-purple-400 border-purple-500/30" },
    ]
  },
  {
    id: "backend",
    label: "Backend & Enterprise Java",
    icon: Server,
    skills: [
      { name: "Core Java", level: "Core Architecture", icon: Coffee, desc: "Inheritance, Polymorphism, Exception Handling, Collections", color: "from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-500/30" },
      { name: "Advanced Java", level: "J2EE & Web", icon: Server, desc: "Servlets, JSP, JDBC database connectivity, MVC flows", color: "from-blue-500/20 to-cyan-500/20 text-blue-400 border-blue-500/30" },
      { name: "Spring Boot", level: "Microservices & APIs", icon: Cpu, desc: "Auto-configuration, Spring Starter, RestControllers, Actuator", color: "from-emerald-500/20 to-green-500/20 text-emerald-400 border-emerald-500/30" },
      { name: "Spring MVC", level: "Enterprise MVC", icon: Layers, desc: "Dispatchers, Model-View-Controller pattern, Request Mappings", color: "from-teal-500/20 to-emerald-500/20 text-teal-400 border-teal-500/30" },
      { name: "Hibernate", level: "ORM Persistence", icon: Database, desc: "Entity mapping, HQL queries, caching, transaction management", color: "from-amber-600/20 to-yellow-600/20 text-amber-300 border-amber-500/30" },
      { name: "Spring Data JPA", level: "Data Repositories", icon: Table, desc: "JpaRepository, custom query methods, paging & sorting", color: "from-emerald-600/20 to-teal-600/20 text-emerald-300 border-emerald-500/30" },
    ]
  },
  {
    id: "database",
    label: "Database",
    icon: Database,
    skills: [
      { name: "MySQL", level: "Relational DB", icon: Database, desc: "Schema design, normalization, foreign keys, query optimization", color: "from-blue-600/20 to-cyan-600/20 text-blue-400 border-blue-500/30" },
      { name: "SQL Queries", level: "Data Manipulation", icon: Table, desc: "Complex JOINS, aggregations, subqueries, indexing", color: "from-cyan-600/20 to-teal-600/20 text-cyan-300 border-cyan-500/30" },
      { name: "MySQL Workbench", level: "Visual DB Admin", icon: HardDrive, desc: "EER modeling, SQL execution, database backups & migration", color: "from-sky-600/20 to-blue-600/20 text-sky-400 border-sky-500/30" },
    ]
  },
  {
    id: "tools",
    label: "Tools",
    icon: Terminal,
    skills: [
      { name: "Git", level: "Version Control", icon: GitBranch, desc: "Branching, merging, commit staging, conflict resolution", color: "from-orange-600/20 to-red-600/20 text-orange-400 border-orange-500/30" },
      { name: "GitHub", level: "Collaboration", icon: Github, desc: "Remote repositories, PR reviews, release tagging, portfolio repos", color: "from-slate-600/20 to-zinc-600/20 text-slate-300 border-slate-500/30" },
      { name: "VS Code", level: "IDE / Frontend", icon: Terminal, desc: "Extensions, debugging, terminal integration, live server", color: "from-blue-500/20 to-sky-500/20 text-blue-400 border-blue-500/30" },
      { name: "Eclipse", level: "Java IDE", icon: Laptop, desc: "Java workspace, Maven build, Tomcat server integration", color: "from-purple-600/20 to-indigo-600/20 text-purple-400 border-purple-500/30" },
      { name: "Postman", level: "API Testing", icon: Send, desc: "Endpoint validation, HTTP headers, request body tests, JSON payloads", color: "from-orange-500/20 to-amber-500/20 text-orange-400 border-orange-500/30" },
    ]
  },
  {
    id: "other",
    label: "Architecture & Other",
    icon: Cpu,
    skills: [
      { name: "REST API", level: "Design & Specs", icon: Network, desc: "Stateless architecture, GET/POST/PUT/DELETE verbs, status codes", color: "from-emerald-500/20 to-cyan-500/20 text-emerald-400 border-emerald-500/30" },
      { name: "Responsive Web Design", level: "Mobile-First", icon: Smartphone, desc: "Cross-device layouts, fluid typography, breakpoint tuning", color: "from-blue-500/20 to-purple-500/20 text-blue-400 border-blue-500/30" },
      { name: "Object-Oriented Programming", level: "Core Concepts", icon: Box, desc: "Encapsulation, abstraction, inheritance, polymorphism, clean code", color: "from-purple-500/20 to-pink-500/20 text-purple-400 border-purple-500/30" },
      { name: "API Integration", level: "Frontend-Backend", icon: Link, desc: "Fetch/Axios client calls, CORS management, error handling", color: "from-cyan-500/20 to-sky-500/20 text-cyan-400 border-cyan-500/30" },
    ]
  }
];

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = skillGroups.filter(g => g.id !== "all");

  const displayedCategories = selectedCategory === "all"
    ? categories
    : categories.filter(g => g.id === selectedCategory);

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 dark:text-blue-400 light:text-blue-600 text-xs font-semibold mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
            Organized into dedicated development domains covering the full enterprise web stack.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            const isSelected = selectedCategory === group.id;
            return (
              <button
                key={group.id}
                onClick={() => setSelectedCategory(group.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isSelected
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/30 scale-105"
                    : "glass-card text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white dark:hover:text-white light:hover:text-slate-900 hover:border-blue-500/40"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{group.label}</span>
              </button>
            );
          })}
        </div>

        {/* Categories & Skills Grid */}
        <div className="space-y-12">
          {displayedCategories.map((group) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {/* Category Title Header */}
              <div className="flex items-center gap-3 pb-2 border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
                <div className="p-2 rounded-lg bg-blue-600/10 dark:bg-blue-600/10 light:bg-blue-100 text-blue-400 dark:text-blue-400 light:text-blue-600">
                  <group.icon className="w-4 h-4" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white dark:text-white light:text-slate-900">
                  {group.label}
                </h3>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-800 dark:bg-slate-800 light:bg-slate-200 text-slate-300 dark:text-slate-300 light:text-slate-700 ml-auto">
                  {group.skills.length} competencies
                </span>
              </div>

              {/* Skills Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {group.skills.map((skill, idx) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -3 }}
                      transition={{ duration: 0.2 }}
                      className="glass-card p-5 rounded-xl border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 flex flex-col justify-between group hover:border-blue-500/40"
                    >
                      <div>
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <div className={`p-2.5 rounded-xl bg-gradient-to-br border ${skill.color} flex items-center justify-center transition-transform group-hover:scale-110 duration-200`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-100 text-blue-400 dark:text-blue-400 light:text-blue-600 border border-slate-700/60 dark:border-slate-700/60 light:border-slate-300">
                            {skill.level}
                          </span>
                        </div>

                        <h4 className="text-base font-bold text-white dark:text-white light:text-slate-900 group-hover:text-blue-400 transition-colors">
                          {skill.name}
                        </h4>
                        <p className="mt-1.5 text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                          {skill.desc}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-800/50 dark:border-slate-800/50 light:border-slate-100 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-500 light:text-slate-400">
                        <span>Domain verified</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-500/70" />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

