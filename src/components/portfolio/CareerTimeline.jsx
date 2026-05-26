import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, GraduationCap, Globe, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useLang } from '@/lib/LanguageContext';

const SKILLS_GROUPS = [
  { groupKey: 'Frontend', skills: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind', '.NET WPF'] },
  { groupKey: 'Backend', skills: ['NestJS', 'Node.js', 'C#', '.NET', 'PostgreSQL', 'REST APIs', 'Python'] },
  { groupKey: 'Herramientas', skills: ['GitHub', 'NX', 'Google Maps API', 'Git', 'VS Code', 'Data Science', 'Machine Learning', 'IA'] },
];

const SKILLS_GROUPS_EN = [
  { groupKey: 'Frontend', skills: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind', '.NET WPF'] },
  { groupKey: 'Backend', skills: ['NestJS', 'Node.js', 'C#', '.NET', 'PostgreSQL', 'REST APIs', 'Python'] },
  { groupKey: 'Tools', skills: ['GitHub', 'NX', 'Google Maps API', 'Git', 'VS Code', 'Data Science', 'Machine Learning', 'AI'] },
];

export default function CareerTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { lang, t } = useLang();

  const EXPERIENCE = [
    {
      title: t.exp0_title,
      company: 'Aperture Technologies SL',
      type: t.exp0_type,
      period: lang === 'es' ? 'Mar 2021 — Ago 2025' : 'Mar 2021 — Aug 2025',
      duration: '5 años',
      description: t.exp0_desc,
      skills: ['.NET Framework', 'C#', 'React', 'NestJS', 'NX', 'PostgreSQL', 'Google Maps API', 'GitHub'],
    },
    {
      title: t.exp1_title,
      company: 'Imprimark',
      type: t.exp1_type,
      period: lang === 'es' ? 'Ene 2021 — Nov 2024' : 'Jan 2021 — Nov 2024',
      duration: t.exp1_duration,
      description: t.exp1_desc,
      skills: [lang === 'es' ? 'Imprenta' : 'Printing', lang === 'es' ? 'Vinilos' : 'Vinyls'],
    },
    {
      title: t.exp2_title,
      company: 'Cash Converters España',
      type: t.exp2_type,
      period: lang === 'es' ? 'Mar 2023 — May 2023' : 'Mar 2023 — May 2023',
      duration: t.exp2_duration,
      description: t.exp2_desc,
      skills: [lang === 'es' ? 'Trato con clientes' : 'Customer service', lang === 'es' ? 'Compraventa' : 'Buy & Sell'],
    },
  ];

  const EDUCATION = [
    {
      degree: t.edu0_degree,
      field: t.edu0_field,
      institution: 'Evolve Academy',
      period: lang === 'es' ? 'Abr 2026 — Presente' : 'Apr 2026 — Present',
      skills: ['Data Science', lang === 'es' ? 'Inteligencia Artificial' : 'Artificial Intelligence', 'Machine Learning', 'Python'],
    },
    {
      degree: t.edu1_degree,
      field: t.edu1_field,
      institution: 'IES Serra Perenxisa',
      period: lang === 'es' ? 'Sep 2023 — Jun 2025' : 'Sep 2023 — Jun 2025',
      skills: ['Java', 'Python', 'DAM', lang === 'es' ? 'Multiplataforma' : 'Multiplatform'],
    },
    {
      degree: t.edu2_degree,
      field: t.edu2_field,
      institution: 'IES Serra Perenxisa',
      period: lang === 'es' ? 'Sep 2021 — Jun 2023' : 'Sep 2021 — Jun 2023',
      skills: [lang === 'es' ? 'Sistemas operativos' : 'Operating Systems', lang === 'es' ? 'Gestión de redes' : 'Network Management', lang === 'es' ? 'Microinformática' : 'Microcomputing'],
    },
  ];

  const LANGUAGES = [
    { lang: t.lang_es, level: t.lang_native },
    { lang: t.lang_val, level: t.lang_native },
    { lang: t.lang_en, level: t.lang_basic },
  ];

  const skillGroups = lang === 'es' ? SKILLS_GROUPS : SKILLS_GROUPS_EN;

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
            <span className="font-jetbrains text-xs text-muted-foreground tracking-widest uppercase">{t.section_career}</span>
            <div className="h-px flex-1 bg-border" />
          </div>
          <h2 className="font-jetbrains text-3xl md:text-4xl font-bold text-center mb-4">
            {t.career_title} <span className="text-primary">{t.career_title_highlight}</span>
          </h2>
          <p className="text-center text-muted-foreground max-w-lg mx-auto mb-16">
            {t.career_subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left column — Timeline */}
          <div className="lg:col-span-3 space-y-16">

            {/* Experiencia */}
            <div>
              <SectionHeader icon={Briefcase} label={t.career_experience} delay={0.2} isInView={isInView} />
              <div className="relative mt-8">
                <motion.div
                  initial={{ height: 0 }}
                  animate={isInView ? { height: '100%' } : {}}
                  transition={{ duration: 1.2, delay: 0.3 }}
                  className="absolute left-6 top-0 w-px bg-gradient-to-b from-primary via-border to-transparent"
                />
                <div className="space-y-6">
                  {EXPERIENCE.map((exp, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.35 + i * 0.12 }}
                      className="relative pl-16"
                    >
                      <div className="absolute left-4 top-2 w-5 h-5 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <div className="glass-panel rounded-2xl p-6 reveal-highlight hover:shadow-md transition-shadow">
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                          <div>
                            <h3 className="font-jetbrains text-sm font-semibold text-foreground">{exp.title}</h3>
                            <p className="text-xs text-primary font-medium mt-0.5">{exp.company}</p>
                            <p className="text-xs text-muted-foreground">{exp.type}</p>
                          </div>
                          <div className="text-right">
                            <span className="font-jetbrains text-xs text-primary block">{exp.period}</span>
                            <span className="font-jetbrains text-xs text-muted-foreground">{exp.duration}</span>
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground mt-3 mb-4 space-y-2">
                          {exp.description.split('\n').filter(l => l.trim()).map((line, j) =>
                            line.startsWith('·') ? (
                              <div key={j} className="flex gap-2">
                                <span className="text-primary mt-0.5 shrink-0">·</span>
                                <p className="leading-relaxed">{line.slice(1).trim()}</p>
                              </div>
                            ) : (
                              <p key={j} className="leading-relaxed font-medium text-foreground/80">{line}</p>
                            )
                          )}
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.skills.map(s => (
                            <Badge key={s} variant="secondary" className="font-jetbrains text-xs">{s}</Badge>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Educación */}
            <div>
              <SectionHeader icon={GraduationCap} label={t.career_education} delay={0.6} isInView={isInView} />
              <div className="relative mt-8">
                <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-primary/50 to-transparent" />
                <div className="space-y-6">
                  {EDUCATION.map((edu, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.7 + i * 0.12 }}
                      className="relative pl-16"
                    >
                      <div className="absolute left-4 top-2 w-5 h-5 rounded-full bg-background border-2 border-primary/50 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-primary/50" />
                      </div>
                      <div className="glass-panel rounded-2xl p-5 reveal-highlight hover:shadow-md transition-shadow">
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                          <div>
                            <h3 className="font-jetbrains text-sm font-semibold text-foreground">{edu.field}</h3>
                            <p className="text-xs text-primary font-medium mt-0.5">{edu.institution}</p>
                            <p className="text-xs text-muted-foreground">{edu.degree}</p>
                          </div>
                          <span className="font-jetbrains text-xs text-primary whitespace-nowrap">{edu.period}</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {edu.skills.map(s => (
                            <Badge key={s} variant="secondary" className="font-jetbrains text-xs">{s}</Badge>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Right column — Skills + Languages + Profile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div className="glass-panel rounded-2xl p-6 sticky top-24 space-y-6">
              <div>
                <p className="font-jetbrains text-xs text-muted-foreground mb-4 tracking-widest uppercase">{t.career_stack}</p>
                <div className="space-y-4">
                  {skillGroups.map((group) => (
                    <div key={group.groupKey}>
                      <p className="text-xs text-muted-foreground mb-2 font-inter">{group.groupKey}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {group.skills.map(skill => (
                          <Badge key={skill} variant="secondary" className="font-jetbrains text-xs">{skill}</Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Idiomas */}
              <div className="pt-5 border-t border-border">
                <div className="flex items-center gap-2 mb-4">
                  <Globe className="w-3.5 h-3.5 text-primary" />
                  <p className="font-jetbrains text-xs text-muted-foreground tracking-widest uppercase">{t.career_languages_label}</p>
                </div>
                <div className="space-y-2.5">
                  {LANGUAGES.map(({ lang: l, level }) => (
                    <div key={l} className="flex justify-between items-center text-sm">
                      <span className="font-medium text-foreground">{l}</span>
                      <span className="text-xs text-muted-foreground">{level}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Perfil */}
              <div className="pt-5 border-t border-border">
                <p className="font-jetbrains text-xs text-muted-foreground mb-4 tracking-widest uppercase">{t.career_profile}</p>
                <div className="flex justify-center mb-5">
                  <img
                    src="https://media.base44.com/images/public/69f2375e0ff755e65187c301/e06a3c464_image.png"
                    alt="Santiago Cabo Viera"
                    className="w-full h-80 rounded-xl object-cover border border-primary/20 shadow-md"
                    style={{ objectPosition: '50% 8%' }}
                  />
                </div>
                <div className="space-y-2.5">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{t.career_email}</span>
                    <a href="mailto:scaboviera@gmail.com" className="text-primary font-medium hover:underline">
                      scaboviera@gmail.com
                    </a>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">LinkedIn</span>
                    <a href="https://www.linkedin.com/in/santiago-cabo-viera-a51996361" target="_blank" rel="noopener noreferrer"
                      className="text-primary font-medium hover:underline flex items-center gap-1">
                      {lang === 'es' ? 'Ver perfil' : 'View profile'} <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">GitHub</span>
                    <a href="https://github.com/Cucurin" target="_blank" rel="noopener noreferrer"
                      className="text-primary font-medium hover:underline flex items-center gap-1">
                      @Cucurin <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{t.career_location}</span>
                    <span className="text-foreground">{t.career_location_value}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{t.career_status}</span>
                    <span className="text-primary font-medium">{t.career_status_value}</span>
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

function SectionHeader({ icon: Icon, label, delay, isInView }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="flex items-center gap-3"
    >
      <Icon className="w-4 h-4 text-primary" />
      <h3 className="font-jetbrains text-sm font-semibold text-foreground tracking-wide uppercase">{label}</h3>
      <div className="h-px flex-1 bg-border" />
    </motion.div>
  );
}