import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight, Anchor, Building2, Mail,
  MapPin, ShieldCheck, HardHat, PhoneCall,
  Linkedin, Github,
} from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-10 pb-24 md:pt-16 md:pb-32 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-sky-600/10 dark:bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-8">

          {/* ── Text block ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left space-y-5 w-full"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-[11px] sm:text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
              <span className="leading-tight">{personalInfo.availability}</span>
            </div>

            {/* Speciality chips */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
              {personalInfo.hero.specialties.map((spec, sIdx) => (
                <React.Fragment key={sIdx}>
                  <span className="inline-flex items-center gap-1">
                    {sIdx === 0 ? <Anchor className="w-3.5 h-3.5" /> : <Building2 className="w-3.5 h-3.5" />}
                    {spec}
                  </span>
                  {sIdx < personalInfo.hero.specialties.length - 1 && (
                    <span className="text-neutral-400">•</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Name headline */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.2]">
              {personalInfo.name}
            </h1>

            <p className="text-sm sm:text-base font-semibold text-neutral-700 dark:text-neutral-200">
              {personalInfo.role}
            </p>

            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {personalInfo.bio}
            </p>

            {/* Meta pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-[11px] sm:text-xs text-neutral-600 dark:text-neutral-400">
              <span className="inline-flex items-center gap-1 font-medium">
                <MapPin className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 flex-shrink-0" />
                {personalInfo.location}
              </span>
              <span className="hidden sm:inline text-neutral-300 dark:text-neutral-600">|</span>
              <span className="inline-flex items-center gap-1 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                {personalInfo.hero.metaText}
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1">
              <a
                href="#projects"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs sm:text-sm shadow-md shadow-sky-600/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Lihat Proyek <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white/70 dark:bg-neutral-900/70 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 font-semibold text-xs sm:text-sm transition-all"
              >
                <Mail className="w-3.5 h-3.5" /> Konsultasi
              </a>

              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 hover:text-emerald-600 dark:hover:text-emerald-400 text-neutral-700 dark:text-neutral-300 transition-colors shadow-sm"
                  aria-label="WhatsApp"
                  title="WhatsApp"
                >
                  <PhoneCall className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.socials.email}
                  className="p-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 hover:text-sky-600 dark:hover:text-sky-400 text-neutral-700 dark:text-neutral-300 transition-colors shadow-sm"
                  aria-label="Email"
                  title="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 hover:text-sky-600 dark:hover:text-sky-400 text-neutral-700 dark:text-neutral-300 transition-colors shadow-sm"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 hover:text-neutral-900 dark:hover:text-white text-neutral-700 dark:text-neutral-300 transition-colors shadow-sm"
                  aria-label="GitHub"
                  title="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* ── Photo card ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex-shrink-0"
          >
            <div className="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-80 lg:h-80">
              {/* Gradient ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-sky-600 via-teal-600 to-amber-500 p-1 shadow-2xl shadow-sky-600/20 rotate-3">
                <div className="w-full h-full bg-white dark:bg-neutral-950 rounded-[22px]" />
              </div>

              {/* Image */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-white/60 dark:border-neutral-800 shadow-xl -rotate-1 hover:rotate-0 transition-transform duration-500 group">
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />

                {/* Info card overlay */}
                <div className="absolute bottom-2 left-2 right-2 p-2.5 rounded-xl bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md border border-white/20 dark:border-neutral-700 text-left">
                  <div className="flex items-center gap-1 text-[10px] font-bold text-sky-600 dark:text-sky-400 mb-0.5">
                    <HardHat className="w-3 h-3 flex-shrink-0" />
                    <span>{personalInfo.hero.overlayBadge}</span>
                  </div>
                  <p className="text-[11px] font-bold text-neutral-900 dark:text-white truncate">
                    {personalInfo.name}
                  </p>
                  <p className="text-[10px] text-neutral-500 dark:text-neutral-400 truncate">
                    {personalInfo.hero.overlaySub}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
