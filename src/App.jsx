import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/common/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
import Certifications from './components/sections/Certifications';
import GithubActivity from './components/sections/GithubActivity';
import Contact from './components/sections/Contact';
import Footer from './components/common/Footer';
import BackToTop from './components/common/BackToTop';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#0B1020] dark:bg-[#0B1020] light:bg-[#f8fafc] text-slate-100 dark:text-slate-100 light:text-slate-900 transition-colors duration-300">
        {/* Sticky Header Navigation */}
        <Navbar />

        {/* Main Content Sections */}
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Certifications />
          <GithubActivity />
          <Contact />
        </main>

        {/* Global Footer & Back-To-Top Button */}
        <Footer />
        <BackToTop />
      </div>
    </ThemeProvider>
  );
}

