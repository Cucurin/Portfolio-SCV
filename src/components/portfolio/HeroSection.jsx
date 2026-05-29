import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowDown, Circle, Download } from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';

const CV_URL = 'https://media.base44.com/files/public/69f2375e0ff755e65187c301/d158fd013_CurriculumVitae-SantiagoCabo.pdf';
const HERO_IMAGE = 'https://media.base44.com/images/public/69f2375e0ff755e65187c301/90d656de2_generated_114d17f5.png';

export default function HeroSection() {
  const [showScroll, setShowScroll] = useState(true);
  const { t } = useLang();

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY < 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToRepos = () => {
    const el = document.querySelector('#repos');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={HERO_IMAGE} alt="background" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <div className="flex items-center gap-2 mb-6">
                <Circle className="w-2 h-2 fill-primary text-primary" />
                <span className="text-xs font-jetbrains text-primary tracking-widest uppercase">
                  {t.hero_available}
                </span>
              </div>

              <h1 className="font-jetbrains text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight">
                Santiago
                <br />
                <span className="text-primary">Cabo Viera</span>
              </h1>

              <p className="mt-6 text-lg text-muted-foreground font-inter leading-relaxed max-w-md">
                {t.hero_description}
              </p>

              <div className="flex items-center gap-2 mt-6 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>{t.hero_location}</span>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="mt-10 flex flex-wrap gap-4">
              <a href="https://github.com/Cucurin" target="_blank" rel="noopener noreferrer"
                className="px-6 py-3 bg-foreground text-background rounded-lg font-inter text-sm font-medium hover:opacity-90 transition-opacity">
                {t.hero_btn_github}
              </a>
              <a href="https://www.linkedin.com/in/santiago-cabo-viera-a51996361" target="_blank" rel="noopener noreferrer"
                className="px-6 py-3 glass-panel rounded-lg font-inter text-sm font-medium text-foreground hover:bg-card transition-colors">
                {t.hero_btn_linkedin}
              </a>
              <a href={CV_URL} download="CurriculumVitae-SantiagoCabo.pdf"
                className="px-6 py-3 glass-panel rounded-lg font-inter text-sm font-medium text-foreground hover:bg-card transition-colors flex items-center gap-2">
                <Download className="w-4 h-4" /> {t.hero_btn_cv}
              </a>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.5 }}>
            <div className="glass-panel rounded-2xl p-6 space-y-5">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-chart-4/60" />
                <div className="w-3 h-3 rounded-full bg-success/60" />
                <span className="ml-auto font-jetbrains text-xs text-muted-foreground">system://status</span>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-background/50 rounded-xl">
                  <p className="text-xs font-jetbrains text-muted-foreground mb-1">// github.profile</p>
                  <p className="font-inter text-sm text-foreground">
                    <span className="text-primary font-medium">@Cucurin</span> — Santiago Cabo
                  </p>
                </div>

                <div className="p-4 bg-background/50 rounded-xl">
                  <p className="text-xs font-jetbrains text-muted-foreground mb-1">{t.hero_status_job_label}</p>
                  <p className="font-inter text-sm text-foreground font-medium">Junior Fullstack Developer</p>
                  <p className="text-xs text-muted-foreground mt-1">{t.hero_status_job_company}</p>
                </div>

                <div className="p-4 bg-background/50 rounded-xl">
                  <p className="text-xs font-jetbrains text-muted-foreground mb-1">{t.hero_status_linkedin_label}</p>
                  <p className="font-inter text-sm text-foreground">Santiago Cabo Viera</p>
                  <p className="text-xs text-muted-foreground mt-1">{t.hero_status_linkedin_sub}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showScroll ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 pointer-events-none"
          style={{ pointerEvents: showScroll ? 'auto' : 'none' }}
        >
          <button onClick={scrollToRepos} className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <span className="text-xs font-jetbrains">{t.scroll_label}</span>
            <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <ArrowDown className="w-4 h-4" />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}