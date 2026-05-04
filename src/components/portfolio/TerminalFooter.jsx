import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';

const CV_URL = 'https://media.base44.com/files/public/69f2375e0ff755e65187c301/d158fd013_CurriculumVitae-SantiagoCabo.pdf';

export default function TerminalFooter() {
  const { t } = useLang();
  const [lines, setLines] = useState([]);
  const [input, setInput] = useState('');
  const inputRef = useRef(null);
  const terminalRef = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Reset terminal when language changes
  useEffect(() => {
    setLines([
      { type: 'system', text: t.terminal_boot },
      { type: 'system', text: t.terminal_hint },
    ]);
  }, [t.terminal_boot, t.terminal_hint]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  const handleCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    const newLines = [...lines, { type: 'input', text: `$ ${cmd}` }];

    if (trimmed === 'clear') {
      setLines([]);
      setInput('');
      return;
    }

    if (trimmed === 'github') {
      window.open('https://github.com/Cucurin', '_blank');
      newLines.push({ type: 'system', text: t.terminal_github_open });
    } else if (trimmed === 'linkedin') {
      window.open('https://www.linkedin.com/in/santiago-cabo-viera-a51996361', '_blank');
      newLines.push({ type: 'system', text: t.terminal_linkedin_open });
    } else if (trimmed === 'curriculum') {
      const a = document.createElement('a');
      a.href = CV_URL;
      a.download = 'CurriculumVitae-SantiagoCabo.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      newLines.push({ type: 'system', text: t.terminal_cv_download });
    } else if (trimmed === 'help') {
      newLines.push({ type: 'output', text: t.terminal_help });
    } else if (trimmed === 'about') {
      newLines.push({ type: 'output', text: t.terminal_about });
    } else if (trimmed === 'contact') {
      newLines.push({ type: 'output', text: t.terminal_contact });
    } else if (trimmed) {
      newLines.push({ type: 'error', text: t.terminal_unknown(trimmed) });
    }

    setLines(newLines);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleCommand(input);
  };

  return (
    <section id="terminal" className="py-24 md:py-32" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px flex-1 bg-border" />
            <span className="font-jetbrains text-xs text-muted-foreground tracking-widest uppercase">{t.section_terminal}</span>
            <div className="h-px flex-1 bg-border" />
          </div>
          <h2 className="font-jetbrains text-3xl md:text-4xl font-bold text-center mb-4">
            {t.terminal_title} <span className="text-primary">{t.terminal_title_highlight}</span>
          </h2>
          <p className="text-center text-muted-foreground max-w-lg mx-auto mb-16">
            {t.terminal_subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <div className="rounded-2xl overflow-hidden shadow-xl border border-border">
            <div className="bg-foreground/95 px-4 py-3 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-destructive/70" />
              <div className="w-3 h-3 rounded-full bg-chart-4/70" />
              <div className="w-3 h-3 rounded-full bg-success/70" />
              <span className="ml-4 font-jetbrains text-xs text-background/60">scv@portfolio:~</span>
            </div>

            <div
              ref={terminalRef}
              className="bg-foreground/90 p-6 h-72 overflow-y-auto cursor-text"
              onClick={() => inputRef.current?.focus()}
            >
              {lines.map((line, i) => (
                <div key={i} className="mb-1">
                  {line.type === 'input' && <p className="font-jetbrains text-sm text-white">{line.text}</p>}
                  {line.type === 'output' && <pre className="font-jetbrains text-sm text-primary-foreground/70 whitespace-pre-wrap">{line.text}</pre>}
                  {line.type === 'system' && <p className="font-jetbrains text-sm text-primary/80">{line.text}</p>}
                  {line.type === 'error' && <p className="font-jetbrains text-sm text-destructive/80">{line.text}</p>}
                </div>
              ))}

              <div className="flex items-center gap-2 mt-2">
                <span className="font-jetbrains text-sm text-success">$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent font-jetbrains text-sm text-white outline-none caret-white"
                  spellCheck={false}
                  autoComplete="off"
                />
                <span className="w-2 h-4 bg-white terminal-cursor" />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mt-8"
        >
          <a href="https://github.com/Cucurin" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 glass-panel rounded-lg text-sm text-muted-foreground hover:text-foreground transition-colors">
            <Github className="w-4 h-4" /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/santiago-cabo-viera-a51996361" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 glass-panel rounded-lg text-sm text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
          <a href="mailto:scaboviera@gmail.com"
            className="flex items-center gap-2 px-5 py-2.5 glass-panel rounded-lg text-sm text-muted-foreground hover:text-foreground transition-colors">
            <Mail className="w-4 h-4" /> Email
          </a>
          <a href={CV_URL} download="CurriculumVitae-SantiagoCabo.pdf"
            className="flex items-center gap-2 px-5 py-2.5 glass-panel rounded-lg text-sm text-muted-foreground hover:text-foreground transition-colors">
            <Download className="w-4 h-4" /> {t.hero_btn_cv}
          </a>
        </motion.div>

        <div className="text-center mt-12 pt-6 border-t border-border">
          <p className="font-jetbrains text-xs text-muted-foreground">{t.footer_rights}</p>
        </div>
      </div>
    </section>
  );
}