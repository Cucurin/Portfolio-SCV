import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Menu, X, Sun, Moon, Languages } from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'));
  const { lang, toggleLang, t } = useLang();

  const NAV_LINKS = [
    { label: t.nav_home, href: '#hero' },
    { label: t.nav_projects, href: '#repos' },
    { label: t.nav_career, href: '#career' },
    { label: t.nav_contact, href: '#terminal' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDark = () => {
    const isDark = !dark;
    setDark(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  };

  const scrollTo = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-panel shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => scrollTo('#hero')} className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary system-pulse" />
            <span className="font-jetbrains text-sm font-semibold tracking-tight text-foreground">
              Santiago Cabo Viera
            </span>
          </div>
          <span className="text-xs text-muted-foreground font-inter hidden sm:block">
            Portfolio
          </span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors font-inter"
            >
              {link.label}
            </button>
          ))}

          <div className="w-px h-5 bg-border" />

          {/* Social links */}
          <a href="https://github.com/Cucurin" target="_blank" rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors">
            <Github className="w-4 h-4" />
          </a>
          <a href="https://www.linkedin.com/in/santiago-cabo-viera-a51996361" target="_blank" rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin className="w-4 h-4" />
          </a>

          <div className="w-px h-5 bg-border" />

          {/* Dark mode toggle */}
          <button onClick={toggleDark} className="text-muted-foreground hover:text-foreground transition-colors" title={dark ? 'Modo claro' : 'Modo oscuro'}>
            {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Language toggle */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors font-jetbrains text-xs"
            title={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
          >
            <Languages className="w-4 h-4" />
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-foreground"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass-panel border-t border-border px-6 py-4 space-y-3"
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="block w-full text-left text-sm text-muted-foreground hover:text-foreground py-2"
            >
              {link.label}
            </button>
          ))}
          <div className="flex gap-4 pt-2 border-t border-border items-center">
            <a href="https://github.com/Cucurin" target="_blank" rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"><Github className="w-4 h-4" /></a>
            <a href="https://www.linkedin.com/in/santiago-cabo-viera-a51996361" target="_blank" rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"><Linkedin className="w-4 h-4" /></a>
            <button onClick={toggleDark} className="text-muted-foreground hover:text-foreground transition-colors ml-auto">
              {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button onClick={toggleLang} className="flex items-center gap-1 text-muted-foreground hover:text-foreground font-jetbrains text-xs">
              <Languages className="w-4 h-4" />
              {lang === 'es' ? 'EN' : 'ES'}
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}