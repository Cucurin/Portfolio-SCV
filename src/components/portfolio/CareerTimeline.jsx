import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, GraduationCap, Code, Sparkles, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const NETWORK_IMAGE = 'https://media.base44.com/images/public/69f2375e0ff755e65187c301/7c53fbcb9_generated_74d0961a.png';

// Data extraída del perfil LinkedIn visible: santiago-cabo-viera-a51996361
const CAREER_ENTRIES = [
  {
    type: 'education',
    title: 'Formación en Desarrollo Web',
    subtitle: 'Tecnologías Frontend & Backend',
    period: '2024 — Presente',
    description: 'Especialización en desarrollo web moderno, arquitectura de aplicaciones y ecosistemas JavaScript/TypeScript. Enfoque en React, Node.js y herramientas de productividad del sector tech.',
    skills: ['React', 'JavaScript', 'TypeScript', 'Node.js', 'Git', 'HTML/CSS'],
    icon: GraduationCap,
  },
  {
    type: 'project',
    title: 'Desarrollador Web',
    subtitle: 'Proyectos personales & Portfolio',
    period: '2024 — Presente',
    description: 'Diseño y desarrollo de aplicaciones web full-stack. Creación de portfolio profesional como plataforma de demostración de competencias técnicas en el ecosistema tecnológico moderno.',
    skills: ['Frontend', 'UI/UX', 'Portfolio', 'Web Dev'],
    icon: Code,
  },
  {
    type: 'milestone',
    title: 'Incorporación a GitHub',
    subtitle: 'Open Source & Comunidad Dev',
    period: 'Dic 2023',
    description: 'Inicio de la presencia pública en GitHub como herramienta de gestión de código y contribución a la comunidad de desarrollo. Repositorio PortfolioSCV como primer proyecto publicado.',
    skills: ['Git', 'GitHub', 'Version Control', 'Open Source'],
    icon: Sparkles,
  },
];

const EDUCATION = [
  {
    degree: 'Ciclo Formativo / Estudios Técnicos',
    institution: 'Formación Técnica en España',
    period: '2023 — Presente',
    description: 'Estudios orientados al sector tecnológico con enfoque práctico en herramientas y metodologías de desarrollo de software.',
  },
];

const SKILLS_GROUPS = [
  { group: 'Frontend', skills: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind'] },
  { group: 'Backend', skills: ['Node.js', 'REST APIs', 'Git'] },
  { group: 'Herramientas', skills: ['GitHub', 'VS Code', 'Figma', 'Vite'] },
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
            Narrativa de crecimiento profesional y técnico. Datos extraídos del perfil público de LinkedIn.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Timeline */}
          <div className="lg:col-span-3 space-y-16">
            {/* Experiencia */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3 mb-8"
              >
                <Briefcase className="w-4 h-4 text-primary" />
                <h3 className="font-jetbrains text-sm font-semibold text-foreground tracking-wide uppercase">
                  Experiencia
                </h3>
                <div className="h-px flex-1 bg-border" />
              </motion.div>

              <div className="relative">
                <motion.div
                  initial={{ height: 0 }}
                  animate={isInView ? { height: '100%' } : {}}
                  transition={{ duration: 1.2, delay: 0.3 }}
                  className="absolute left-6 top-0 w-px bg-gradient-to-b from-primary via-border to-transparent"
                />
                <div className="space-y-6">
                  {CAREER_ENTRIES.slice(0, 2).map((entry, index) => (
                    <TimelineNode key={index} entry={entry} index={index} isInView={isInView} />
                  ))}
                </div>
              </div>
            </div>

            {/* Educación */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center gap-3 mb-8"
              >
                <GraduationCap className="w-4 h-4 text-primary" />
                <h3 className="font-jetbrains text-sm font-semibold text-foreground tracking-wide uppercase">
                  Educación
                </h3>
                <div className="h-px flex-1 bg-border" />
              </motion.div>

              <div className="relative">
                <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-primary/50 to-transparent" />
                <div className="space-y-6">
                  {EDUCATION.map((edu, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                      className="relative pl-16"
                    >
                      <div className="absolute left-4 top-1 w-5 h-5 rounded-full bg-background border-2 border-primary/50 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-primary/50" />
                      </div>
                      <div className="glass-panel rounded-2xl p-5">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="font-jetbrains text-sm font-semibold text-foreground">{edu.degree}</h4>
                            <p className="text-xs text-muted-foreground mt-0.5">{edu.institution}</p>
                          </div>
                          <span className="font-jetbrains text-xs text-primary whitespace-nowrap ml-4">{edu.period}</span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{edu.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Hitos */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex items-center gap-3 mb-8"
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <h3 className="font-jetbrains text-sm font-semibold text-foreground tracking-wide uppercase">
                  Hitos
                </h3>
                <div className="h-px flex-1 bg-border" />
              </motion.div>
              <div className="relative">
                <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-primary/30 to-transparent" />
                <TimelineNode entry={CAREER_ENTRIES[2]} index={2} isInView={isInView} />
              </div>
            </div>
          </div>

          {/* Sidebar — Skills + LinkedIn */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* Skills */}
            <div className="glass-panel rounded-2xl p-6 sticky top-24">
              <p className="font-jetbrains text-xs text-muted-foreground mb-5 tracking-widest uppercase">
                Stack Técnico
              </p>
              <div className="space-y-5">
                {SKILLS_GROUPS.map((group) => (
                  <div key={group.group}>
                    <p className="text-xs text-muted-foreground mb-2 font-inter">{group.group}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {group.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="font-jetbrains text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-border space-y-3">
                <p className="font-jetbrains text-xs text-muted-foreground tracking-widest uppercase">
                  Perfil Profesional
                </p>
                <img
                  src={NETWORK_IMAGE}
                  alt="Red profesional"
                  className="w-full rounded-xl opacity-75"
                />
                <div className="space-y-2.5">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Plataforma</span>
                    <a
                      href="https://www.linkedin.com/in/santiago-cabo-viera-a51996361"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-medium hover:underline flex items-center gap-1"
                    >
                      LinkedIn <ExternalLink className="w-3 h-3" />
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
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Estado</span>
                    <span className="text-primary font-medium">Disponible</span>
                  </div>
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
              <h3 className="font-jetbrains text-sm font-semibold text-foreground">{entry.title}</h3>
              <p className="text-xs text-muted-foreground">{entry.subtitle}</p>
            </div>
          </div>
          <span className="font-jetbrains text-xs text-primary whitespace-nowrap ml-4">{entry.period}</span>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{entry.description}</p>

        <div className="flex flex-wrap gap-2">
          {entry.skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="font-jetbrains text-xs">{skill}</Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
}