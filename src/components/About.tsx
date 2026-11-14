import React from 'react';
import { Ruler, ShieldCheck, HardHat, Sparkles, Anchor } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 border-t border-neutral-200/60 dark:border-neutral-800/60 bg-neutral-100/40 dark:bg-neutral-900/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tentang Saya</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
            {personalInfo.about.heading}
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {personalInfo.about.subheading}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Photo */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-sm">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-sky-600 to-amber-500 rounded-3xl blur-md opacity-30 group-hover:opacity-60 transition duration-500" />
              <div className="relative rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-xl">
                <img
                  src={personalInfo.about.image}
                  alt={personalInfo.about.imageTitle}
                  className="w-full h-56 sm:h-72 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="p-4 sm:p-5 space-y-1.5">
                  <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400 text-xs font-bold">
                    <Anchor className="w-4 h-4 flex-shrink-0" />
                    <span>{personalInfo.about.imageBadge}</span>
                  </div>
                  <h4 className="font-semibold text-sm sm:text-base text-neutral-900 dark:text-white">
                    {personalInfo.about.imageTitle}
                  </h4>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {personalInfo.about.imageDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bio + Stats */}
          <div className="lg:col-span-7 space-y-5">
            <div className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {personalInfo.about.paragraphs.map((paragraph, pIdx) => (
                <p key={pIdx}>{paragraph}</p>
              ))}
            </div>

            {/* Three pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {personalInfo.about.pillars.map((p, idx) => {
                const IconComponent = idx === 0 ? Ruler : idx === 1 ? ShieldCheck : HardHat;
                const colorClasses = {
                  sky: 'bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400',
                  emerald: 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400',
                  amber: 'bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400',
                }[p.color] || 'bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400';

                return (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-sm"
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-2 ${colorClasses}`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h5 className="font-semibold text-xs text-neutral-900 dark:text-white mb-1">{p.title}</h5>
                    <p className="text-[11px] text-neutral-500 dark:text-neutral-400 leading-snug">{p.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-neutral-200 dark:border-neutral-800">
              {personalInfo.stats.map((stat, idx) => (
                <div key={idx}>
                  <p className="text-2xl sm:text-3xl font-extrabold text-sky-600 dark:text-sky-400">
                    {stat.value}
                  </p>
                  <p className="text-[11px] text-neutral-500 dark:text-neutral-400 font-medium leading-tight">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
