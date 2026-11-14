import React, { useState } from 'react';
import { Anchor, Building2, FileText, CheckCircle2, Sparkles, Filter, ExternalLink } from 'lucide-react';
import { projects } from '@/data/portfolio';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'kapal' | 'bangunan'>('all');

  const filteredProjects = projects.filter((p) => {
    if (filter === 'kapal') return p.category.includes('Perkapalan');
    if (filter === 'bangunan') return p.category.includes('Bangunan');
    return true;
  });

  return (
    <section id="projects" className="py-16 sm:py-20 border-t border-neutral-200/60 dark:border-neutral-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Portofolio Proyek</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Portofolio Gambar Kerja &amp; Proyek
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Dokumentasi shop drawing struktur bangunan proyek kerja serta perancangan garis dan konstruksi lambung kapal saat PKL &amp; kejuruan.
          </p>
        </div>

        {/* Filter — scrollable on mobile */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-1">
          <div className="inline-flex p-1 rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 gap-1 flex-shrink-0">
            {[
              { key: 'all', label: 'Semua', icon: <Filter className="w-3.5 h-3.5" /> },
              { key: 'kapal', label: 'Perkapalan', icon: <Anchor className="w-3.5 h-3.5" /> },
              { key: 'bangunan', label: 'Bangunan', icon: <Building2 className="w-3.5 h-3.5" /> },
            ].map(({ key, label, icon }) => (
              <button
                key={key}
                onClick={() => setFilter(key as typeof filter)}
                className={`flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  filter === key
                    ? 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-sm'
                    : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                {icon}
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative w-full overflow-hidden bg-neutral-100 dark:bg-neutral-800" style={{ aspectRatio: '16/9' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.onerror = null;
                    target.src = 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80';
                  }}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-neutral-900/80 text-white backdrop-blur-md shadow-md">
                    {project.category.includes('Perkapalan') ? (
                      <Anchor className="w-3 h-3 text-sky-400" />
                    ) : (
                      <Building2 className="w-3 h-3 text-emerald-400" />
                    )}
                    {project.category}
                  </span>
                </div>

                {project.image && (
                  <a
                    href={project.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-3 right-3 p-1.5 rounded-full bg-neutral-900/75 hover:bg-neutral-900 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity shadow-md"
                    title="Buka gambar resolusi penuh"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              {/* Details */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col gap-3">
                <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors leading-snug">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="space-y-3 pt-3 border-t border-neutral-100 dark:border-neutral-800/80">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 text-[10px] sm:text-[11px] font-medium rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Terverifikasi BKI / SNI</span>
                    </span>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1 text-xs font-medium text-neutral-500 dark:text-neutral-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>Ajukan Pertanyaan</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
