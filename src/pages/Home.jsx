import React from 'react';
import Navbar from '@/components/portfolio/Navbar';
import HeroSection from '@/components/portfolio/HeroSection';
import GitHubStats from '@/components/portfolio/GitHubStats';
import RepositoryVault from '@/components/portfolio/RepositoryVault';
import CareerTimeline from '@/components/portfolio/CareerTimeline';
import ProjectsSection from '@/components/portfolio/ProjectsSection';
import TerminalFooter from '@/components/portfolio/TerminalFooter';
import { LanguageProvider } from '@/lib/LanguageContext';

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background font-inter">
        <Navbar />
        <HeroSection />
        <GitHubStats />
        <RepositoryVault />
        <ProjectsSection />
        <CareerTimeline />
        <TerminalFooter />
      </div>
    </LanguageProvider>
  );
}