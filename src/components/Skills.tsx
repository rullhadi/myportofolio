import React from 'react';
import { Anchor, Building2, Wrench, Sparkles, CheckCircle2 } from 'lucide-react';
import { skillCategories } from '@/data/portfolio';

export const Skills: React.FC = () => {
  const getCategoryIcon = (title: string) => {
    if (title.includes('Perkapalan'))
      return <Anchor className="w-4 h-4 text-sky-600 dark:text-sky-400" />;
    if (title.includes('Bangunan'))
      return <Building2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
    return <Wrench className="w-4 h-4 text-amber-500" />;
  };

  return (
    <section id="skills" className="py-16 sm:py-20 border-t border-neutral-200/60 dark:border-neutral-800/60 bg-neutral-100/40 dark:bg-neutral-900/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Keahlian Teknis</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Kompetensi Drafting &amp; Keahlian Teknis
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Keahlian drafting presisi tinggi dengan AutoCAD 2D/3D, pemahaman rancang bangun kapal vokasi, dan penguasaan gambar struktur sipil bangunan.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-sm hover:shadow-md transition-shadow space-y-4"
            >
              <div className="flex items-center gap-2.5 pb-2 border-b border-neutral-100 dark:border-neutral-800">
                <div className="p-2 rounded-xl bg-neutral-100 dark:bg-neutral-800">
                  {getCategoryIcon(category.title)}
                </div>
                <h3 className="font-bold text-sm text-neutral-900 dark:text-white leading-snug">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-3.5">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-1">
                    <div className="flex justify-between text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 flex-shrink-0" />
                        <span className="leading-tight">{skill.name}</span>
                      </span>
                      <span className="text-neutral-500 dark:text-neutral-400 ml-2 flex-shrink-0">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-sky-600 to-teal-500 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Badge strip */}
        <div className="mt-10 p-5 rounded-2xl border border-dashed border-neutral-300 dark:border-neutral-800 text-center space-y-3">
          <p className="text-[11px] uppercase tracking-wider font-bold text-neutral-500 dark:text-neutral-400">
            Perangkat Lunak, Standar Gambar Kerja &amp; Ruang Lingkup Drafting
          </p>
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {[
              'AutoCAD 2D', 'AutoCAD 3D', 'Shop Drawing', 'As-Built Drawing',
              'Lines Plan Kapal', 'General Arrangement', 'Bukaan Pelat', 'Detail Pembesian Beton',
              'Detail Baja WF', 'Layout & Plotting', 'SketchUp 3D', 'CSI SAP2000 (Dasar)',
              'Microsoft Excel / BoQ', 'Standar Gambar ISO / SNI',
            ].map((badge, bIdx) => (
              <span
                key={bIdx}
                className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-neutral-200/70 dark:bg-neutral-800/80 text-neutral-800 dark:text-neutral-200 hover:scale-105 transition-transform cursor-default"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
