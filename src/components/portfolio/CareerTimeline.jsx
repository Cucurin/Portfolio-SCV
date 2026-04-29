import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, GraduationCap, Code, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const NETWORK_IMAGE = 'https://media.base44.com/images/public/69f2375e0ff755e65187c301/7c53fbcb9_generated_74d0961a.png';

const CAREER_ENTRIES = [
  {
    type: 'education',
    title: 'Formación en Tecnología',
    subtitle: 'Desarrollo de Software & Sistemas',
    period: 'En curso',
    description: 'Formación continua en desarrollo web, arquitectura de software y tecnologías emergentes del sector tech.',
    skills: ['JavaScript', 'React', 'Node.js', 'Git'],
    icon: GraduationCap,
  },
  {
    type: 'project',
    title: 'PortfolioSCV',
    subtitle: 'Proyecto Personal · GitHub',
    period: 'Sep 2025',
    description: 'Portfolio personal como plataforma para demostrar competencias técnicas y experiencia profesional en el sector tecnológico.',
    skills: ['Portfolio', 'Web Development', 'Design'],
    icon: Code,
  },
  {
    type: 'milestone',
    title: 'Inicio en GitHub',
    subtitle: 'Presencia en la comunidad Open Source',
    period: 'Dic 2023',
    description: 'Creación del perfil en GitHub como punto de partida para la contribución a la comunidad de desarrolladores y la gestión de código.',
    skills: ['Git', 'Version Control', 'Open Source'],
    icon: Sparkles,
  },
];

export default function CareerTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="career" className="relative py-24 md:py-32" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px flex-1 bg-border" />
            <span className="font-jetbrains text-xs text-muted-foreground tracking-widest uppercase">
              Trayectoria
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>

          <h2 className="font-jetbrains text-3xl md:text-4xl font-bold text-center mb-4">
            Career <span className="text-primary">Graph</span>
          </h2>
          <p className="text-center text-muted-foreground max-w-lg mx-auto mb-16">
            Una narrativa de crecimiento profesional y técnico en el ecosistema tecnológico.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Timeline */}
          <div className="lg:col-span-3">
            <div className="relative">
              {/* Vertical line */}
              <motion.div
                initial={{ height: 0 }}
                animate={isInView ? { height: '100%' } : {}}
                transition={{ duration: 1.2, delay: 0.3 }}
                className="absolute left-6 top-0 w-px bg-gradient-to-b from-primary via-border to-transparent"
              />

              <div className="space-y-10">
                {CAREER_ENTRIES.map((entry, index) => (
                  <TimelineNode key={index} entry={entry} index={index} isInView={isInView} />
                ))}
              </div>
            </div>
          </div>

          {/* Network visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="lg:col-span-2 flex items-start"
          >
            <div className="glass-panel rounded-2xl p-6 w-full sticky top-24">
              <p className="font-jetbrains text-xs text-muted-foreground mb-4 tracking-widest uppercase">
                Red Profesional
              </p>
              <img
                src={NETWORK_IMAGE}
                alt="Representación visual de red profesional"
                className="w-full rounded-xl mb-4 opacity-80"
              />
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Plataforma</span>
                  <a
                    href="https://www.linkedin.com/in/santiago-cabo-viera-a51996361"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-medium hover:underline"
                  >
                    LinkedIn
                  </a>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Ubicación</span>
                  <span className="text-foreground">España</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Sector</span>
                  <span className="text-foreground">Tecnología</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TimelineNode({ entry, index, isInView }) {
  const Icon = entry.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.4 + index * 0.15 }}
      className="relative pl-16"
    >
      {/* Node dot */}
      <div className="absolute left-4 top-1 w-5 h-5 rounded-full bg-background border-2 border-primary flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-primary" />
      </div>

      <div className="glass-panel rounded-2xl p-6 reveal-highlight group hover:shadow-md transition-shadow">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
              <Icon className="w-4 h-4 text-primary" />
            </div>
            <div>
              <h3 className="font-jetbrains text-sm font-semibold text-foreground">
                {entry.title}
              </h3>
              <p className="text-xs text-muted-foreground">{entry.subtitle}</p>
            </div>
          </div>
          <span className="font-jetbrains text-xs text-primary whitespace-nowrap ml-4">
            {entry.period}
          </span>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {entry.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {entry.skills.map((skill) => (
            <Badge
              key={skill}
              variant="secondary"
              className="font-jetbrains text-xs"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
}