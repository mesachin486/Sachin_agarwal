import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { GoogleDriveVault } from './components/GoogleDriveVault';
import { SkillsMatrix } from './components/SkillsMatrix';
import { ContactSection } from './components/ContactSection';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return (
        localStorage.getItem('theme') === 'dark' ||
        (!localStorage.getItem('theme') &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
      );
    }
    return false;
  });

  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [selectedPersona, setSelectedPersona] = useState<
    'all' | 'product' | 'strategy' | 'engineering'
  >('all');

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200">
      {/* Top Bar Contract Header */}
      <Navbar
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
      />

      <main>
        {/* Split Hero with Recruiter Persona Switcher & Impact Strip */}
        <Hero
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
          selectedPersona={selectedPersona}
          onSelectPersona={(persona) => setSelectedPersona(persona)}
        />

        {/* Bento Grid Case Studies & Interactive Prototyping */}
        <ProjectsSection selectedPersona={selectedPersona} />

        {/* Chronological Career & Education Timeline */}
        <ExperienceTimeline />

        {/* Google Drive Vault & Verified Credentials Archive */}
        <GoogleDriveVault />

        {/* Skills, Campus Governance & Athletics Matrix */}
        <SkillsMatrix />

        {/* Recruiter Message Dispatcher & Direct Contact */}
        <ContactSection />
      </main>

      {/* Verified Resume Download & Preview Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
