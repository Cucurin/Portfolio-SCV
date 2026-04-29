import React, { useState } from 'react';
import { Settings, Sun, Moon, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '@/lib/LanguageContext';

export default function SettingsPanel({ dark, onToggleDark }) {
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLang();

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full glass-panel shadow-lg flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors border border-border"
        aria-label="Ajustes"
      >
        <Settings className="w-5 h-5" />
      </button>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/20"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="fixed bottom-20 right-6 z-50 w-64 glass-panel rounded-2xl p-5 border border-border shadow-xl"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="font-jetbrains text-sm font-semibold text-foreground">
                  {t.settings.title}
                </span>
                <button onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground">
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Theme */}
              <div className="mb-5">
                <p className="text-xs text-muted-foreground mb-3 font-jetbrains tracking-widest uppercase">
                  {t.settings.theme}
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={() => !dark && onToggleDark()}
                    className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-inter border transition-all ${
                      !dark
                        ? 'bg-primary text-primary-foreground border-primary'
                        : 'border-border text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <Sun className="w-3.5 h-3.5" />
                    {t.settings.light}
                  </button>
                  <button
                    onClick={() => dark && onToggleDark()}
                    className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-inter border transition-all ${
                      dark
                        ? 'bg-primary text-primary-foreground border-primary'
                        : 'border-border text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <Moon className="w-3.5 h-3.5" />
                    {t.settings.dark}
                  </button>
                </div>
              </div>

              {/* Language */}
              <div>
                <p className="text-xs text-muted-foreground mb-3 font-jetbrains tracking-widest uppercase">
                  {t.settings.language}
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={() => setLang('es')}
                    className={`flex-1 py-2 rounded-lg text-xs font-inter border transition-all ${
                      lang === 'es'
                        ? 'bg-primary text-primary-foreground border-primary'
                        : 'border-border text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    🇪🇸 Español
                  </button>
                  <button
                    onClick={() => setLang('en')}
                    className={`flex-1 py-2 rounded-lg text-xs font-inter border transition-all ${
                      lang === 'en'
                        ? 'bg-primary text-primary-foreground border-primary'
                        : 'border-border text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    🇬🇧 English
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}