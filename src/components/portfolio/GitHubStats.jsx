import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLang } from '@/lib/LanguageContext';

const STATS = (t) => [
  { value: '1+', label: t.stats.años },
  { value: '1', label: t.stats.repos },
  { value: '3+', label: t.stats.certs },
  { value: '3', label: t.stats.idiomas },
];

export default function GitHubStats() {
  const { t } = useLang();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="py-16 border-y border-border bg-card/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS(t).map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="font-jetbrains text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}