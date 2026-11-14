import React from 'react';
import { personalInfo } from '@/data/portfolio';
import { Anchor, Building2, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-neutral-200/60 dark:border-neutral-800/60 py-8 bg-white/50 dark:bg-neutral-950/50 backdrop-blur-sm text-xs text-neutral-500 dark:text-neutral-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Anchor className="w-3.5 h-3.5 text-sky-600" />
          <Building2 className="w-3.5 h-3.5 text-emerald-600" />
          <span className="font-semibold text-neutral-800 dark:text-neutral-200">{personalInfo.name}</span>
          <span>•</span>
          <span>{personalInfo.footerBadge}</span>
        </div>
        <p className="flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
          <span>{personalInfo.footerNote}</span>
        </p>
      </div>
    </footer>
  );
};
