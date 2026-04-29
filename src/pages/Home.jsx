import React, { useState } from 'react';
import Navbar from '@/components/portfolio/Navbar.jsx';
import HeroSection from '@/components/portfolio/HeroSection.jsx';
import GitHubStats from '@/components/portfolio/GitHubStats.jsx';
import RepositoryVault from '@/components/portfolio/RepositoryVault.jsx';
import CareerTimeline from '@/components/portfolio/CareerTimeline.jsx';
import TerminalFooter from '@/components/portfolio/TerminalFooter.jsx';
import SettingsPanel from '@/components/portfolio/SettingsPanel';
import { LanguageProvider } from '@/lib/LanguageContext';

export default function Home() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'));

  const toggleDark = () => {
    const isDark = !dark;
    setDark(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background font-inter">
        <Navbar />
        <HeroSection />
        <GitHubStats />
        <RepositoryVault />
        <CareerTimeline />
        <TerminalFooter />
        <SettingsPanel dark={dark} onToggleDark={toggleDark} />
      </div>
    </LanguageProvider>
  );
}