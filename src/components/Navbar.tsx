import React from 'react';
import { Sun, Moon, Send, Anchor, Building2 } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/80 dark:bg-neutral-950/80 border-b border-neutral-200/60 dark:border-neutral-800/60 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-3">

        {/* Name / Brand */}
        <a href="#hero" className="flex flex-col min-w-0 group flex-shrink-0">
          <span className="font-bold text-xs sm:text-sm tracking-tight text-neutral-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors truncate">
            {personalInfo.name}
          </span>
          <span className="text-[10px] sm:text-[11px] text-neutral-500 dark:text-neutral-400 font-medium flex items-center gap-1">
            <Anchor className="w-2.5 h-2.5 text-sky-600 flex-shrink-0" />
            <span>{personalInfo.hero.specialties[0] || 'Drafter'}</span>
            {personalInfo.hero.specialties[1] && (
              <>
                <span className="text-neutral-300 dark:text-neutral-700">•</span>
                <Building2 className="w-2.5 h-2.5 text-emerald-600 flex-shrink-0" />
                <span>{personalInfo.hero.specialties[1]}</span>
              </>
            )}
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-5 text-xs font-semibold text-neutral-600 dark:text-neutral-300">
          {[
            ['#about',      'Tentang'],
            ['#experience', 'Karier & Studi'],
            ['#skills',     'Keahlian'],
            ['#projects',   'Proyek'],
            ['#contact',    'Kontak'],
          ].map(([href, label]) => (
            <a key={href} href={href} className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors whitespace-nowrap">
              {label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle color theme"
            className="p-2 rounded-xl bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 transition-colors"
          >
            {darkMode
              ? <Sun className="w-4 h-4 text-amber-400" />
              : <Moon className="w-4 h-4 text-sky-600" />}
          </button>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold shadow-sm transition-all whitespace-nowrap"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Konsultasi</span>
          </a>
        </div>
      </div>
    </header>
  );
};
