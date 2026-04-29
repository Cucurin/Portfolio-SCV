import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, MapPin, ChevronDown } from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';

export default function HeroSection() {
  const { t } = useLang();
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    const particles = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.5,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
        o: Math.random() * 0.4 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(79,175,147,${p.o})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-50" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-primary system-pulse" />
              <span className="font-jetbrains text-xs text-primary tracking-widest uppercase">{t.hero.available}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-jetbrains text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
            >
              Santiago
              <br />
              <span className="text-primary">Cabo Viera</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-md"
            >
              {t.hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex items-center gap-2 mb-8 text-muted-foreground text-sm"
            >
              <MapPin className="w-4 h-4 text-primary" />
              <span>{t.hero.location}</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="https://github.com/Cucurin"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                <Github className="w-4 h-4" />
                {t.hero.verGithub}
              </a>
              <a
                href="https://www.linkedin.com/in/santiago-cabo-viera-a51996361"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 glass-panel rounded-lg text-sm font-medium text-foreground hover:text-primary transition-colors border border-border"
              >
                <Linkedin className="w-4 h-4" />
                {t.hero.verLinkedin}
              </a>
            </motion.div>
          </div>

          {/* Right — info cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col gap-4"
          >
            <div className="glass-panel rounded-2xl p-5 border border-border">
              <p className="font-jetbrains text-xs text-primary mb-1">{t.hero.githubProfile}</p>
              <p className="text-sm text-foreground font-medium">github.com/Cucurin</p>
              <p className="text-xs text-muted-foreground mt-1">{t.hero.githubDesc}</p>
            </div>

            <div className="glass-panel rounded-2xl p-5 border border-border">
              <p className="font-jetbrains text-xs text-primary mb-1">{t.hero.ultimoTrabajo}</p>
              <p className="text-sm text-foreground font-medium">Junior Fullstack Developer</p>
              <p className="text-xs text-muted-foreground mt-1">{t.hero.aperturePeriod}</p>
            </div>

            <div className="glass-panel rounded-2xl p-5 border border-border">
              <p className="font-jetbrains text-xs text-primary mb-1">{t.hero.linkedinPerfil}</p>
              <p className="text-sm text-foreground font-medium">linkedin.com/in/santiago-cabo-viera</p>
              <p className="text-xs text-muted-foreground mt-1">{t.hero.linkedinDesc}</p>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground"
        >
          <span className="font-jetbrains text-xs tracking-widest uppercase">{t.hero.scroll}</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}