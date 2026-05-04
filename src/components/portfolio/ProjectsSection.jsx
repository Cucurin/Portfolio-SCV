import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { useLang } from '@/lib/LanguageContext';

const PROJECTS_ES = [
  {
    title: 'App de Escritorio — .NET WPF',
    company: 'Aperture Technologies SL',
    period: 'Mar 2025 — Ago 2025',
    description: 'Diseño y desarrollo completo de la interfaz de usuario de una aplicación de escritorio con .NET WPF. Colaboré en el backend conectando la API con una base de datos PostgreSQL, asegurando una comunicación eficiente entre capas.',
    tags: ['.NET WPF', 'C#', 'PostgreSQL', 'API REST'],
    type: 'Profesional',
  },
  {
    title: 'CRM — Módulo de Logística',
    company: 'Aperture Technologies SL',
    period: 'Mar 2025 — Ago 2025',
    description: 'Desarrollo del módulo de logística dentro de un CRM empresarial (React + NestJS + NX). Integré Google Maps en tiempo real para el seguimiento de rutas y diseñé endpoints en el backend para la comunicación cliente-servidor.',
    tags: ['React', 'NestJS', 'NX', 'Google Maps API', 'TypeScript'],
    type: 'Profesional',
  },
  {
    title: 'Proyecto Pyrrha',
    company: 'Trabajo Final de Grado',
    period: 'Mar 2025 — Jun 2025',
    description: 'Videojuego desarrollado en Godot Engine como Trabajo Final de Grado, con temática medieval en estilo 2D y jugabilidad tipo metroidvania. Diseño de niveles, mecánicas de exploración y combate, gestión de assets y programación en GDScript.',
    tags: ['Godot Engine', 'GDScript', '2D', 'Metroidvania', 'Game Design'],
    type: 'Personal',
  },
  {
    title: 'Landing Page — Imprimark',
    company: 'Imprimark',
    period: '2025',
    description: 'Desarrollo de una landing page profesional para Imprimark con gestión de productos integrada, orientada a facilitar y agilizar el proceso de presupuestación para clientes y equipo interno.',
    tags: ['React', 'Landing Page', 'Gestión de Productos', 'Presupuestación'],
    type: 'Profesional',
  },
];

const PROJECTS_EN = [
  {
    title: 'Desktop App — .NET WPF',
    company: 'Aperture Technologies SL',
    period: 'Mar 2025 — Aug 2025',
    description: 'Full design and development of a desktop application UI using .NET WPF. Collaborated on the backend connecting the API to a PostgreSQL database, ensuring efficient layer communication.',
    tags: ['.NET WPF', 'C#', 'PostgreSQL', 'REST API'],
    type: 'Professional',
  },
  {
    title: 'CRM — Logistics Module',
    company: 'Aperture Technologies SL',
    period: 'Mar 2025 — Aug 2025',
    description: 'Development of the logistics module within a corporate CRM (React + NestJS + NX). Integrated real-time Google Maps for route tracking and designed backend endpoints for client-server communication.',
    tags: ['React', 'NestJS', 'NX', 'Google Maps API', 'TypeScript'],
    type: 'Professional',
  },
  {
    title: 'Project Pyrrha',
    company: 'Final Degree Project',
    period: 'Mar 2025 — Jun 2025',
    description: 'Video game developed in Godot Engine as a Final Degree Project, with a medieval 2D style and metroidvania gameplay. Level design, exploration and combat mechanics, asset management and GDScript programming.',
    tags: ['Godot Engine', 'GDScript', '2D', 'Metroidvania', 'Game Design'],
    type: 'Personal',
  },
  {
    title: 'Landing Page — Imprimark',
    company: 'Imprimark',
    period: '2025',
    description: 'Development of a professional landing page for Imprimark with integrated product management, aimed at streamlining the quoting process for clients and internal team.',
    tags: ['React', 'Landing Page', 'Product Management', 'Quoting'],
    type: 'Professional',
  },
];

const TYPE_COLORS = {
  Profesional: 'bg-primary/10 text-primary',
  Personal: 'bg-chart-2/10 text-chart-2',
  Professional: 'bg-primary/10 text-primary',
};

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { lang, t } = useLang();

  const PROJECTS = lang === 'es' ? PROJECTS_ES : PROJECTS_EN;

  return (
    <section id="projects" className="py-24 md:py-32" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px flex-1 bg-border" />
            <span className="font-jetbrains text-xs text-muted-foreground tracking-widest uppercase">{t.section_projects}</span>
            <div className="h-px flex-1 bg-border" />
          </div>
          <h2 className="font-jetbrains text-3xl md:text-4xl font-bold text-center mb-4">
            {t.projects_title} <span className="text-primary">{t.projects_title_highlight}</span>
          </h2>
          <p className="text-center text-muted-foreground max-w-lg mx-auto mb-16">
            {t.projects_subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="glass-panel rounded-2xl p-6 reveal-highlight hover:shadow-md transition-shadow flex flex-col gap-4"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-jetbrains text-sm font-semibold text-foreground leading-snug">{project.title}</h3>
                  <p className="text-xs text-primary font-medium mt-1">{project.company}</p>
                  <p className="text-xs text-muted-foreground">{project.period}</p>
                </div>
                <span className={`text-xs font-jetbrains px-2 py-0.5 rounded-full whitespace-nowrap ${TYPE_COLORS[project.type]}`}>
                  {project.type}
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="font-jetbrains text-xs">{tag}</Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}