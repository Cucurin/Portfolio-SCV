import React, { createContext, useContext, useState } from 'react';

export const translations = {
  es: {
    nav: {
      inicio: 'Inicio',
      proyectos: 'Proyectos',
      experiencia: 'Experiencia',
      contacto: 'Contacto',
    },
    hero: {
      available: 'Disponible para oportunidades',
      description: 'Desarrollador & Arquitecto de Sistemas del sector tecnológico, basado en España. Construyendo el futuro digital con código limpio y diseño preciso.',
      location: 'España',
      verGithub: 'Ver GitHub',
      verLinkedin: 'Ver LinkedIn',
      githubProfile: '// github.profile',
      githubDesc: '1 repositorio público · Miembro desde Dic 2023',
      ultimoTrabajo: '// último.trabajo',
      aperturePeriod: 'Aperture Technologies SL · Mar 2025 — Ago 2025',
      linkedinPerfil: '// linkedin.perfil',
      linkedinDesc: 'Profesional Tech · España',
      scroll: 'scroll',
    },
    stats: {
      años: 'Años de experiencia',
      repos: 'Repositorios',
      certs: 'Certificaciones / Estudios',
      idiomas: 'Idiomas',
    },
    repos: {
      sectionLabel: 'Repositorios',
      title: 'Repository',
      titleHighlight: 'Vault',
      subtitle: 'Proyectos públicos alojados en GitHub. Cada repositorio representa una pieza de ingeniería digital.',
      noRepos: 'No se encontraron repositorios públicos.',
      sinDescripcion: 'Sin descripción disponible.',
      verPerfil: 'Ver perfil completo en GitHub',
    },
    career: {
      sectionLabel: 'Trayectoria',
      title: 'Career',
      titleHighlight: 'Graph',
      subtitle: 'Experiencia profesional, formación académica e idiomas extraídos de LinkedIn.',
      experiencia: 'Experiencia',
      educacion: 'Educación',
      stackTecnico: 'Stack Técnico',
      idiomas: 'Idiomas',
      perfilProfesional: 'Perfil Profesional',
      email: 'Email',
      ubicacion: 'Ubicación',
      estado: 'Estado',
      disponible: 'Disponible',
      languages: [
        { lang: 'Español', level: 'Nativo / Bilingüe' },
        { lang: 'Valenciano', level: 'Nativo / Bilingüe' },
        { lang: 'Inglés', level: 'Nivel B1' },
      ],
    },
    terminal: {
      sectionLabel: 'Contacto',
      title: 'Terminal',
      titleHighlight: 'Session',
      subtitle: 'Interactúa con el terminal para obtener información o conectar directamente.',
      initLine1: 'Portfolio Terminal v1.0.0 — Santiago Cabo Viera',
      initLine2: 'Escribe "help" para ver los comandos disponibles.',
      cmdHelp: `Comandos disponibles:\n  about      → Sobre Santiago Cabo Viera\n  github     → Abrir perfil de GitHub\n  linkedin   → Abrir perfil de LinkedIn\n  contact    → Información de contacto\n  clear      → Limpiar terminal\n  help       → Mostrar este mensaje`,
      cmdAbout: `Santiago Cabo Viera\n  Desarrollador & Arquitecto de Sistemas\n  Ubicación: España\n  Sector: Tecnología\n  GitHub: @Cucurin`,
      cmdContact: `Puedes contactarme a través de:\n  → Email: scaboviera@gmail.com\n  → LinkedIn: linkedin.com/in/santiago-cabo-viera-a51996361\n  → GitHub: github.com/Cucurin`,
      openingGithub: 'Abriendo GitHub en nueva pestaña...',
      openingLinkedin: 'Abriendo LinkedIn en nueva pestaña...',
      unknownCmd: (cmd) => `Comando no reconocido: "${cmd}". Escribe "help" para ver opciones.`,
      footer: '© 2026 Santiago Cabo Viera',
    },
    settings: {
      title: 'Ajustes',
      theme: 'Tema',
      light: 'Claro',
      dark: 'Oscuro',
      language: 'Idioma',
    },
  },
  en: {
    nav: {
      inicio: 'Home',
      proyectos: 'Projects',
      experiencia: 'Experience',
      contacto: 'Contact',
    },
    hero: {
      available: 'Available for opportunities',
      description: 'Developer & Systems Architect in the tech sector, based in Spain. Building the digital future with clean code and precise design.',
      location: 'Spain',
      verGithub: 'View GitHub',
      verLinkedin: 'View LinkedIn',
      githubProfile: '// github.profile',
      githubDesc: '1 public repository · Member since Dec 2023',
      ultimoTrabajo: '// last.job',
      aperturePeriod: 'Aperture Technologies SL · Mar 2025 — Aug 2025',
      linkedinPerfil: '// linkedin.profile',
      linkedinDesc: 'Tech Professional · Spain',
      scroll: 'scroll',
    },
    stats: {
      años: 'Years of experience',
      repos: 'Repositories',
      certs: 'Certifications / Studies',
      idiomas: 'Languages',
    },
    repos: {
      sectionLabel: 'Repositories',
      title: 'Repository',
      titleHighlight: 'Vault',
      subtitle: 'Public projects hosted on GitHub. Each repository represents a piece of digital engineering.',
      noRepos: 'No public repositories found.',
      sinDescripcion: 'No description available.',
      verPerfil: 'View full GitHub profile',
    },
    career: {
      sectionLabel: 'Career',
      title: 'Career',
      titleHighlight: 'Graph',
      subtitle: 'Professional experience, academic background and languages from LinkedIn.',
      experiencia: 'Experience',
      educacion: 'Education',
      stackTecnico: 'Tech Stack',
      idiomas: 'Languages',
      perfilProfesional: 'Professional Profile',
      email: 'Email',
      ubicacion: 'Location',
      estado: 'Status',
      disponible: 'Available',
      languages: [
        { lang: 'Spanish', level: 'Native / Bilingual' },
        { lang: 'Valencian', level: 'Native / Bilingual' },
        { lang: 'English', level: 'B1 Level' },
      ],
    },
    terminal: {
      sectionLabel: 'Contact',
      title: 'Terminal',
      titleHighlight: 'Session',
      subtitle: 'Interact with the terminal to get information or connect directly.',
      initLine1: 'Portfolio Terminal v1.0.0 — Santiago Cabo Viera',
      initLine2: 'Type "help" to see available commands.',
      cmdHelp: `Available commands:\n  about      → About Santiago Cabo Viera\n  github     → Open GitHub profile\n  linkedin   → Open LinkedIn profile\n  contact    → Contact information\n  clear      → Clear terminal\n  help       → Show this message`,
      cmdAbout: `Santiago Cabo Viera\n  Developer & Systems Architect\n  Location: Spain\n  Sector: Technology\n  GitHub: @Cucurin`,
      cmdContact: `You can contact me through:\n  → Email: scaboviera@gmail.com\n  → LinkedIn: linkedin.com/in/santiago-cabo-viera-a51996361\n  → GitHub: github.com/Cucurin`,
      openingGithub: 'Opening GitHub in a new tab...',
      openingLinkedin: 'Opening LinkedIn in a new tab...',
      unknownCmd: (cmd) => `Unknown command: "${cmd}". Type "help" to see options.`,
      footer: '© 2026 Santiago Cabo Viera',
    },
    settings: {
      title: 'Settings',
      theme: 'Theme',
      light: 'Light',
      dark: 'Dark',
      language: 'Language',
    },
  },
};

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('es');
  const t = translations[lang];
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}