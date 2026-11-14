import React, { useState } from 'react';
import {
  Briefcase, GraduationCap, Calendar, MapPin,
  Award, CheckCircle2,
} from 'lucide-react';
import { experiences, educations } from '@/data/portfolio';

export const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'work' | 'education'>('work');

  return (
    <section id="experience" className="py-16 sm:py-20 border-t border-neutral-200/60 dark:border-neutral-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 text-xs font-semibold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Karier &amp; Latar Belakang</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Pengalaman Kerja &amp; Riwayat Studi
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Perjalanan berkarier dari pengalaman magang (PKL) perkapalan hingga bekerja profesional sebagai drafter struktur, didukung studi aktif S1 Teknik Sipil.
          </p>
        </div>

        {/* ── Tab Switcher — responsive stacked on xs ── */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex flex-col xs:flex-row sm:flex-row p-1.5 rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 w-full max-w-sm sm:max-w-none sm:w-auto gap-1">
            <button
              onClick={() => setActiveTab('work')}
              className={`flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex-1 sm:flex-none ${
                activeTab === 'work'
                  ? 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-sm'
                  : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              <Briefcase className="w-4 h-4 text-sky-600 dark:text-sky-400 flex-shrink-0" />
              <span>Pengalaman Kerja</span>
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex-1 sm:flex-none ${
                activeTab === 'education'
                  ? 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-sm'
                  : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              <GraduationCap className="w-4 h-4 text-amber-500 flex-shrink-0" />
              <span>Pendidikan &amp; Sertifikasi</span>
            </button>
          </div>
        </div>

        {/* ── Timeline ── */}
        <div className="max-w-3xl mx-auto">
          {activeTab === 'work' ? (
            <div className="relative border-l-2 border-sky-200 dark:border-sky-900/60 ml-3 sm:ml-6 space-y-8">
              {experiences.map((exp) => (
                <div key={exp.id} className="relative pl-5 sm:pl-7 group">
                  <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-white dark:bg-neutral-950 border-4 border-sky-600 group-hover:scale-125 transition-transform" />

                  <div className="p-4 sm:p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-sm hover:shadow-md transition-shadow">
                    {/* Role + Period */}
                    <div className="flex flex-col gap-1.5 mb-3">
                      <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white leading-snug">
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-semibold text-xs text-neutral-700 dark:text-neutral-200">
                          {exp.company}
                        </span>
                        <span className="text-neutral-400">•</span>
                        <span className="inline-flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-400">
                          <MapPin className="w-3 h-3 flex-shrink-0" />{exp.location}
                        </span>
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-md bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400">
                          <Calendar className="w-3 h-3 flex-shrink-0" />{exp.period}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-sky-600 dark:text-sky-400 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-neutral-100 dark:border-neutral-800/80">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 text-[10px] sm:text-[11px] font-medium rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="relative border-l-2 border-amber-200 dark:border-amber-900/60 ml-3 sm:ml-6 space-y-8">
              {educations.map((edu) => (
                <div key={edu.id} className="relative pl-5 sm:pl-7 group">
                  <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-white dark:bg-neutral-950 border-4 border-amber-500 group-hover:scale-125 transition-transform" />

                  <div className="p-4 sm:p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-col gap-1.5 mb-3">
                      <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white leading-snug">
                        {edu.degree}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-semibold text-xs text-neutral-700 dark:text-neutral-200">
                          {edu.institution}
                        </span>
                        <span className="text-neutral-400">•</span>
                        <span className="inline-flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-400">
                          <MapPin className="w-3 h-3 flex-shrink-0" />{edu.location}
                        </span>
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-md bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400">
                          <Calendar className="w-3 h-3 flex-shrink-0" />{edu.period}
                        </span>
                        {edu.gpa && (
                          <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                            {edu.gpa}
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-3">
                      {edu.description}
                    </p>

                    {edu.achievements && (
                      <div className="space-y-1.5 pt-2 border-t border-neutral-100 dark:border-neutral-800/80">
                        <h5 className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 flex items-center gap-1.5">
                          <Award className="w-3.5 h-3.5 text-amber-500" />
                          Prestasi &amp; Penghargaan:
                        </h5>
                        <ul className="space-y-1 text-xs text-neutral-600 dark:text-neutral-400 pl-4 list-disc">
                          {edu.achievements.map((ach, idx) => (
                            <li key={idx}>{ach}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
