import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Check, Sparkles, MessageCircle } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 border-t border-neutral-200/60 dark:border-neutral-800/60 bg-neutral-100/40 dark:bg-neutral-900/20 pb-32 sm:pb-36">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 text-xs font-semibold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Kontak &amp; Konsultasi</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Hubungi untuk Diskusi &amp; Proyek
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Terbuka untuk kebutuhan pembuatan shop drawing, as-built drawing, gambar teknik rancang bangun, maupun peluang kerja sama drafter.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Info Cards */}
          <div className="lg:col-span-5">
            <div className="p-5 sm:p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-sm space-y-5">
              <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                Informasi Kontak Langsung
              </h3>

              <div className="space-y-4">
                {[
                  {
                    icon: <Mail className="w-4 h-4" />,
                    color: 'sky',
                    label: 'Email Enjiniring',
                    content: (
                      <a href={`mailto:${personalInfo.email}`} className="font-semibold text-neutral-900 dark:text-white hover:text-sky-600 dark:hover:text-sky-400 transition-colors text-xs sm:text-sm break-all">
                        {personalInfo.email}
                      </a>
                    ),
                  },
                  {
                    icon: <Phone className="w-4 h-4" />,
                    color: 'emerald',
                    label: 'Telepon / WhatsApp',
                    content: (
                      <a href={personalInfo.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="font-semibold text-neutral-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center gap-1.5 text-xs sm:text-sm">
                        <span>{personalInfo.phone}</span>
                        <MessageCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                      </a>
                    ),
                  },
                  {
                    icon: <MapPin className="w-4 h-4" />,
                    color: 'amber',
                    label: 'Domisili Operasional',
                    content: <p className="font-semibold text-neutral-900 dark:text-white text-xs sm:text-sm">{personalInfo.location}</p>,
                  },
                ].map(({ icon, color, label, content }, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className={`p-2.5 rounded-xl bg-${color}-50 dark:bg-${color}-950/60 text-${color}-600 dark:text-${color}-400 flex-shrink-0`}>
                      {icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] text-neutral-500 dark:text-neutral-400 font-medium mb-0.5">{label}</p>
                      {content}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-700 dark:text-emerald-400 font-medium leading-relaxed">
                {personalInfo.contactNote}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-5 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-sm">
              {submitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white">Pesan Berhasil Terkirim!</h4>
                  <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 max-w-sm mx-auto">
                    Terima kasih atas pesan Anda. Saya akan segera meninjau dan menghubungi kembali.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300">
                        Nama Lengkap / Instansi *
                      </label>
                      <input
                        id="name" type="text" required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Contoh: Bpk. Rudi (PT Samudera Jaya)"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300">
                        Alamat Email *
                      </label>
                      <input
                        id="email" type="email" required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="nama@perusahaan.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300">
                      Jenis Proyek / Topik Konsultasi *
                    </label>
                    <input
                      id="subject" type="text" required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Misal: Desain Kapal Tugboat 30M / Analisis Gudang Baja"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300">
                      Deskripsi Kebutuhan Proyek *
                    </label>
                    <textarea
                      id="message" rows={4} required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tuliskan spesifikasi, lokasi galangan/proyek, target jadwal, atau dokumen yang ingin direview..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm shadow-md shadow-sky-600/20 hover:scale-[1.01] active:scale-[0.99] transition-all"
                  >
                    <Send className="w-4 h-4" />
                    Kirim Pesan Konsultasi
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
