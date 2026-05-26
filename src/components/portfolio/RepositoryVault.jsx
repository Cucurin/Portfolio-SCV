import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GitBranch, Star, ExternalLink, GitFork, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const BG_IMAGE = 'https://media.base44.com/images/public/69f2375e0ff755e65187c301/5bb0329c1_generated_c989ae61.png';

const GITHUB_USERNAME = 'Cucurin';

export default function RepositoryVault() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          const publicRepos = data.filter(repo => !repo.private);
          setRepos(publicRepos.slice(0, 9));
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section id="repos" className="relative py-24 md:py-32 overflow-hidden" ref={ref}>
      {/* Subtle background */}
      <div className="absolute inset-0 z-0 opacity-10">
        <img src={BG_IMAGE} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px flex-1 bg-border" />
            <span className="font-jetbrains text-xs text-muted-foreground tracking-widest uppercase">
              Repositorios
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>

          <h2 className="font-jetbrains text-3xl md:text-4xl font-bold text-center mb-4">
            Repository <span className="text-primary">Vault</span>
          </h2>
          <p className="text-center text-muted-foreground max-w-lg mx-auto mb-16">
            Proyectos públicos alojados en GitHub. Cada repositorio representa una pieza de ingeniería digital.
          </p>
        </motion.div>

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map(i => (
              <div key={i} className="glass-panel rounded-2xl p-6 animate-pulse h-48" />
            ))}
          </div>
        ) : repos.length === 0 ? (
          <div className="glass-panel rounded-2xl p-12 text-center">
            <p className="text-muted-foreground">No se encontraron repositorios públicos.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo, index) => (
              <RepoCard key={repo.id} repo={repo} index={index} isInView={isInView} />
            ))}
          </div>
        )}

        {/* GitHub Profile Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 glass-panel rounded-lg text-sm font-medium text-foreground hover:bg-card transition-colors"
          >
            Ver perfil completo en GitHub
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function RepoCard({ repo, index, isInView }) {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    return d.toLocaleDateString('es-ES', { month: 'short', year: 'numeric' });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
      onMouseMove={handleMouseMove}
      className="reveal-highlight glass-panel rounded-2xl p-6 group cursor-pointer hover:shadow-lg transition-shadow duration-300"
      style={{
        '--mouse-x': `${mousePos.x}%`,
        '--mouse-y': `${mousePos.y}%`,
      }}
      onClick={() => window.open(repo.html_url, '_blank')}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2">
          <GitBranch className="w-4 h-4 text-primary" />
          <h3 className="font-jetbrains text-sm font-semibold text-foreground truncate">
            {repo.name}
          </h3>
        </div>
        <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <p className="text-sm text-muted-foreground mb-6 line-clamp-2 min-h-[2.5rem]">
        {repo.description || 'Sin descripción disponible.'}
      </p>

      {repo.language && (
        <Badge variant="secondary" className="mb-4 font-jetbrains text-xs">
          {repo.language}
        </Badge>
      )}

      <div className="flex items-center gap-4 text-xs text-muted-foreground mt-auto">
        <span className="flex items-center gap-1">
          <Star className="w-3 h-3" />
          {repo.stargazers_count}
        </span>
        <span className="flex items-center gap-1">
          <GitFork className="w-3 h-3" />
          {repo.forks_count}
        </span>
        <span className="flex items-center gap-1 ml-auto">
          <Clock className="w-3 h-3" />
          {formatDate(repo.updated_at)}
        </span>
      </div>
    </motion.div>
  );
}