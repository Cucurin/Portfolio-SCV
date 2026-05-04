import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const translations = {
  es: {
    // Navbar
    nav_home: 'Inicio',
    nav_projects: 'Proyectos',
    nav_career: 'Experiencia',
    nav_contact: 'Contacto',

    // Hero
    hero_available: 'Disponible para oportunidades',
    hero_description: 'Desarrollador & Arquitecto de Sistemas del sector tecnológico, basado en España. Construyendo el futuro digital con código limpio y diseño preciso.',
    hero_location: 'España',
    hero_btn_github: 'Ver GitHub',
    hero_btn_linkedin: 'Ver LinkedIn',
    hero_btn_cv: 'Descargar CV',
    hero_status_repos: '1 repositorio público · Miembro desde Dic 2023',
    hero_status_job_label: '// último.trabajo',
    hero_status_job_company: 'Aperture Technologies SL · Mar 2025 — Ago 2025',
    hero_status_linkedin_label: '// linkedin.perfil',
    hero_status_linkedin_sub: 'Profesional Tech · España',
    scroll_label: 'scroll',

    // Stats
    stat_experience: 'Años de experiencia',
    stat_repos: 'Repositorios',
    stat_certs: 'Certificaciones / Estudios',
    stat_languages: 'Idiomas',

    // Projects
    section_projects: 'Proyectos',
    projects_title: 'Proyectos',
    projects_title_highlight: 'Destacados',
    projects_subtitle: 'Proyectos profesionales en los que he participado activamente como desarrollador.',
    type_professional: 'Profesional',
    type_personal: 'Personal',

    // Career
    section_career: 'Trayectoria',
    career_title: 'Career',
    career_title_highlight: 'Graph',
    career_subtitle: 'Experiencia profesional, formación académica e idiomas extraídos de LinkedIn.',
    career_experience: 'Experiencia',
    career_education: 'Educación',
    career_stack: 'Stack Técnico',
    career_languages_label: 'Idiomas',
    career_profile: 'Perfil Profesional',
    career_email: 'Email',
    career_location: 'Ubicación',
    career_location_value: 'Comunitat Valenciana, España',
    career_status: 'Estado',
    career_status_value: 'Disponible',

    // Experience entries
    exp0_title: 'Junior Fullstack Developer',
    exp0_type: 'Contrato de prácticas · Híbrido',
    exp0_location: 'Aldaia, Comunitat Valenciana, España',
    exp0_duration: '6 meses',
    exp0_desc: `Participé activamente en dos proyectos de desarrollo:\n\n· Proyecto 1 — App de escritorio (.NET WPF): Diseñé y desarrollé la UI, y colaboré en el backend conectando la API con una base de datos PostgreSQL.\n\n· Proyecto 2 — CRM (React + NestJS + NX): A cargo del módulo de logística en frontend con integración de Google Maps en tiempo real, y diseño de endpoints en backend para la comunicación cliente-servidor.\n\n· Control de versiones: Gestioné repositorios y flujos de trabajo en GitHub, aplicando buenas prácticas de integración continua y revisión de código colaborativa.`,

    exp1_title: 'Operario',
    exp1_type: 'Jornada parcial · Presencial',
    exp1_duration: '3 años 11 meses',
    exp1_desc: 'Trabajo en imprenta con tareas de producción, gestión de vinilos y atención al proceso de fabricación.',

    exp2_title: 'Empleado en prácticas',
    exp2_type: 'Jornada completa · Presencial',
    exp2_duration: '3 meses',
    exp2_desc: 'Prácticas en el sector retail con enfoque en trato con clientes y compraventa de productos.',

    // Education entries
    edu0_degree: 'Curso en curso',
    edu0_field: 'Data Science + IA',
    edu1_degree: 'Ciclo Formativo de Grado Superior',
    edu1_field: 'Desarrollo de Aplicaciones Multiplataforma',
    edu2_degree: 'Ciclo Formativo de Grado Medio',
    edu2_field: 'Servicios Microinformáticos en Redes',

    // Languages
    lang_es: 'Español',
    lang_val: 'Valenciano',
    lang_en: 'Inglés',
    lang_native: 'Nativo / Bilingüe',
    lang_basic: 'Competencia básica',

    // Terminal
    section_terminal: 'Contacto',
    terminal_title: 'Terminal',
    terminal_title_highlight: 'Session',
    terminal_subtitle: 'Interactúa con el terminal para obtener información o conectar directamente.',
    terminal_boot: 'Portfolio Terminal v1.0.0 — Santiago Cabo Viera',
    terminal_hint: 'Escribe "help" para ver los comandos disponibles.',
    terminal_help: `Comandos disponibles:\n  about      → Sobre Santiago Cabo Viera\n  github     → Abrir perfil de GitHub\n  linkedin   → Abrir perfil de LinkedIn\n  contact    → Información de contacto\n  curriculum → Descargar CV en PDF\n  clear      → Limpiar terminal\n  help       → Mostrar este mensaje`,
    terminal_about: `Santiago Cabo Viera\n  Desarrollador & Arquitecto de Sistemas\n  Ubicación: España\n  Sector: Tecnología\n  GitHub: @Cucurin`,
    terminal_contact: `Puedes contactarme a través de:\n  → Email: scaboviera@gmail.com\n  → LinkedIn: linkedin.com/in/santiago-cabo-viera-a51996361\n  → GitHub: github.com/Cucurin`,
    terminal_github_open: 'Abriendo GitHub en nueva pestaña...',
    terminal_linkedin_open: 'Abriendo LinkedIn en nueva pestaña...',
    terminal_cv_download: 'Descargando CV... ✓',
    terminal_unknown: (cmd) => `Comando no reconocido: "${cmd}". Escribe "help" para ver opciones.`,
    footer_rights: '© 2026 Santiago Cabo Viera',
  },
  en: {
    // Navbar
    nav_home: 'Home',
    nav_projects: 'Projects',
    nav_career: 'Experience',
    nav_contact: 'Contact',

    // Hero
    hero_available: 'Available for opportunities',
    hero_description: 'Developer & Systems Architect in the tech sector, based in Spain. Building the digital future with clean code and precise design.',
    hero_location: 'Spain',
    hero_btn_github: 'View GitHub',
    hero_btn_linkedin: 'View LinkedIn',
    hero_btn_cv: 'Download CV',
    hero_status_repos: '1 public repository · Member since Dec 2023',
    hero_status_job_label: '// last.job',
    hero_status_job_company: 'Aperture Technologies SL · Mar 2025 — Aug 2025',
    hero_status_linkedin_label: '// linkedin.profile',
    hero_status_linkedin_sub: 'Tech Professional · Spain',
    scroll_label: 'scroll',

    // Stats
    stat_experience: 'Years of experience',
    stat_repos: 'Repositories',
    stat_certs: 'Certifications / Studies',
    stat_languages: 'Languages',

    // Projects
    section_projects: 'Projects',
    projects_title: 'Featured',
    projects_title_highlight: 'Projects',
    projects_subtitle: 'Professional projects I have actively participated in as a developer.',
    type_professional: 'Professional',
    type_personal: 'Personal',

    // Career
    section_career: 'Career',
    career_title: 'Career',
    career_title_highlight: 'Graph',
    career_subtitle: 'Professional experience, academic background and languages from LinkedIn.',
    career_experience: 'Experience',
    career_education: 'Education',
    career_stack: 'Tech Stack',
    career_languages_label: 'Languages',
    career_profile: 'Professional Profile',
    career_email: 'Email',
    career_location: 'Location',
    career_location_value: 'Valencian Community, Spain',
    career_status: 'Status',
    career_status_value: 'Available',

    // Experience entries
    exp0_title: 'Junior Fullstack Developer',
    exp0_type: 'Internship · Hybrid',
    exp0_location: 'Aldaia, Valencian Community, Spain',
    exp0_duration: '6 months',
    exp0_desc: `I actively participated in two development projects:\n\n· Project 1 — Desktop App (.NET WPF): Designed and developed the UI, and collaborated on the backend connecting the API to a PostgreSQL database.\n\n· Project 2 — CRM (React + NestJS + NX): In charge of the logistics module on the frontend with real-time Google Maps integration, and designed backend endpoints for client-server communication.\n\n· Version control: Managed repositories and workflows on GitHub, applying best practices for continuous integration and collaborative code review.`,

    exp1_title: 'Operator',
    exp1_type: 'Part-time · On-site',
    exp1_duration: '3 years 11 months',
    exp1_desc: 'Work at a printing company with production tasks, vinyl management and manufacturing process oversight.',

    exp2_title: 'Intern',
    exp2_type: 'Full-time · On-site',
    exp2_duration: '3 months',
    exp2_desc: 'Internship in the retail sector focused on customer service and buying/selling products.',

    // Education entries
    edu0_degree: 'Ongoing course',
    edu0_field: 'Data Science + AI',
    edu1_degree: 'Higher Vocational Training',
    edu1_field: 'Multiplatform Application Development',
    edu2_degree: 'Intermediate Vocational Training',
    edu2_field: 'Microcomputer Systems and Networks',

    // Languages
    lang_es: 'Spanish',
    lang_val: 'Valencian',
    lang_en: 'English',
    lang_native: 'Native / Bilingual',
    lang_basic: 'Basic proficiency',

    // Terminal
    section_terminal: 'Contact',
    terminal_title: 'Terminal',
    terminal_title_highlight: 'Session',
    terminal_subtitle: 'Interact with the terminal to get information or connect directly.',
    terminal_boot: 'Portfolio Terminal v1.0.0 — Santiago Cabo Viera',
    terminal_hint: 'Type "help" to see available commands.',
    terminal_help: `Available commands:\n  about      → About Santiago Cabo Viera\n  github     → Open GitHub profile\n  linkedin   → Open LinkedIn profile\n  contact    → Contact information\n  curriculum → Download CV as PDF\n  clear      → Clear terminal\n  help       → Show this message`,
    terminal_about: `Santiago Cabo Viera\n  Developer & Systems Architect\n  Location: Spain\n  Sector: Technology\n  GitHub: @Cucurin`,
    terminal_contact: `You can contact me via:\n  → Email: scaboviera@gmail.com\n  → LinkedIn: linkedin.com/in/santiago-cabo-viera-a51996361\n  → GitHub: github.com/Cucurin`,
    terminal_github_open: 'Opening GitHub in a new tab...',
    terminal_linkedin_open: 'Opening LinkedIn in a new tab...',
    terminal_cv_download: 'Downloading CV... ✓',
    terminal_unknown: (cmd) => `Unknown command: "${cmd}". Type "help" to see options.`,
    footer_rights: '© 2026 Santiago Cabo Viera',
  },
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('es');
  const t = translations[lang];
  const toggleLang = () => setLang(l => l === 'es' ? 'en' : 'es');

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}