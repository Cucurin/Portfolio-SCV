import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Activity, GitCommit, BookOpen, Users } from 'lucide-react';

const GITHUB_USERNAME = 'Cucurin';

export default function GitHubStats() {
  const [stats, setStats] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
      .then(res => res.json())
      .then(data => {
        setStats({ repos: data.public_repos || 0 });
      })
      .catch(() => {});
  }, []);

  const statItems = [
    { label: 'Años de experiencia', value: '5+', icon: Activity },
    { label: 'Repositorios', value: stats ? stats.repos : '—', icon: BookOpen },
    { label: 'Certificaciones / Estudios', value: 2, icon: GitCommit },
    { label: 'Idiomas', value: 3, icon: Users },
  ];

  return (
    <section ref={ref} className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {statItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-panel rounded-2xl p-6 text-center reveal-highlight"
              >
                <Icon className="w-5 h-5 text-primary mx-auto mb-3" />
                <p className="font-jetbrains text-2xl font-bold text-foreground">
                  {item.value}
                </p>
                <p className="text-xs text-muted-foreground mt-1">{item.label}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}