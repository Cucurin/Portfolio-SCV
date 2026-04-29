import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, GitFork, ExternalLink, Github } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useLang } from '@/lib/LanguageContext';

const LANGUAGE_COLORS = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Python: '#3572A5',
  'C#': '#178600',
  Java: '#b07219',
  HTML: '#e34c26',
  CSS: '#563d7c',
  default: '#8b949e',
};

export default function RepositoryVault() {
  const { t } = useLang();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/Cucurin/repos?sort=updated&per_page=12')
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) setRepos(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section id="repos" className="py-24 md:py-32" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px flex-1 bg-border" />
            <span className="font-jetbrains text-xs text-muted-foreground tracking-widest uppercase">{t.repos.sectionLabel}</span>
            <div className="h-px flex-1 bg-border" />
          </div>
          <h2 className="font-jetbrains text-3xl md:text-4xl font-bold text-center mb-4">
            {t.repos.title} <span className="text-primary">{t.repos.titleHighlight}</span>
          </h2>
          <p className="text-center text-muted-foreground max-w-lg mx-auto mb-16">
            {t.repos.subtitle}
          </p>
        </motion.div>

        {loading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="glass-panel rounded-2xl p-6 animate-pulse h-40" />
            ))}
          </div>
        ) : repos.length === 0 ? (
          <p className="text-center text-muted-foreground">{t.repos.noRepos}</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {repos.map((repo, i) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.07 }}
                className="glass-panel rounded-2xl p-6 border border-border hover:border-primary/40 hover:shadow-md transition-all group reveal-highlight flex flex-col gap-3"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <Github className="w-4 h-4 text-muted-foreground shrink-0" />
                    <span className="font-jetbrains text-sm font-semibold text-foreground truncate group-hover:text-primary transition-colors">
                      {repo.name}
                    </span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-muted-foreground shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed flex-1">
                  {repo.description || t.repos.sinDescripcion}
                </p>

                <div className="flex items-center justify-between mt-1">
                  <div className="flex items-center gap-3">
                    {repo.language && (
                      <div className="flex items-center gap-1.5">
                        <span
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ backgroundColor: LANGUAGE_COLORS[repo.language] || LANGUAGE_COLORS.default }}
                        />
                        <span className="text-xs text-muted-foreground">{repo.language}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Star className="w-3 h-3" />{repo.stargazers_count}</span>
                    <span className="flex items-center gap-1"><GitFork className="w-3 h-3" />{repo.forks_count}</span>
                  </div>
                </div>

                {repo.topics?.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-1">
                    {repo.topics.slice(0, 3).map(topic => (
                      <Badge key={topic} variant="secondary" className="font-jetbrains text-xs py-0">{topic}</Badge>
                    ))}
                  </div>
                )}
              </motion.a>
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-10"
        >
          <a
            href="https://github.com/Cucurin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 glass-panel rounded-lg text-sm text-muted-foreground hover:text-foreground border border-border transition-colors"
          >
            <Github className="w-4 h-4" />
            {t.repos.verPerfil}
          </a>
        </motion.div>
      </div>
    </section>
  );
}