import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, MessageSquare, Copy, Check, ExternalLink, GraduationCap } from 'lucide-react';
import { STUDENT_PROFILE } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    purpose: 'Kolaborasi Proyek & Tugas Akademik',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedDraft, setCopiedDraft] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const purposes = [
    'Kolaborasi Proyek & Tugas Akademik',
    'Tawaran Magang / Freelance IT',
    'Diskusi Sistem Informasi & Teknologi',
    'Pertanyaan Studi di UNIKOM Majenang',
    'Keperluan Profesional Lainnya',
  ];

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Nama lengkap wajib diisi.';
    if (!formData.email.trim()) {
      errors.email = 'Alamat email wajib diisi.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Format email tidak valid.';
    }
    if (!formData.subject.trim()) errors.subject = 'Subjek pesan wajib diisi.';
    if (!formData.message.trim()) {
      errors.message = 'Isi pesan tidak boleh kosong.';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Pesan minimal berisi 10 karakter.';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const getMailtoUrl = () => {
    const subject = encodeURIComponent(`[Portofolio] ${formData.subject} - ${formData.name}`);
    const body = encodeURIComponent(
      `Nama: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Instansi: ${formData.institution || '-'}\n` +
      `Keperluan: ${formData.purpose}\n\n` +
      `Pesan:\n${formData.message}\n\n` +
      `--- Dikirim melalui formulir kontak portofolio Muhammad Jamil Qolbi`
    );
    return `mailto:${STUDENT_PROFILE.email}?subject=${subject}&body=${body}`;
  };

  const getWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Halo Jamil, saya ${formData.name} dari ${formData.institution || 'rekan'}.\n` +
      `Mengenai: *${formData.subject}* (${formData.purpose})\n\n` +
      `${formData.message}`
    );
    return `https://wa.me/6281234567890?text=${text}`;
  };

  const handleCopyDraft = () => {
    const draftText = 
      `Kepada: ${STUDENT_PROFILE.name} (${STUDENT_PROFILE.email})\n` +
      `Pengirim: ${formData.name} <${formData.email}>\n` +
      `Instansi: ${formData.institution || '-'}\n` +
      `Keperluan: ${formData.purpose}\n` +
      `Subjek: ${formData.subject}\n\n` +
      `${formData.message}`;

    navigator.clipboard.writeText(draftText);
    setCopiedDraft(true);
    setTimeout(() => setCopiedDraft(false), 2000);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      institution: '',
      purpose: 'Kolaborasi Proyek & Tugas Akademik',
      subject: '',
      message: '',
    });
    setSubmitted(false);
  };

  return (
    <section id="kontak" className="py-20 border-b border-zinc-900 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3">
            <span>Komunikasi Profesional</span>
            <span aria-hidden="true">·</span>
            <span>Jaringan &amp; Kolaborasi</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
            Hubungi Saya untuk Keperluan Profesional
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            Terbuka untuk kolaborasi proyek akademik, pertukaran studi teknologi sistem informasi, diskusi seputar komputasi, atau peluang magang dan proyek lepas (freelance).
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Primary Email Card */}
            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center text-white">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-zinc-400 block">Surat Elektronik Resmi</span>
                  <a 
                    href={`mailto:${STUDENT_PROFILE.email}`}
                    className="text-sm sm:text-base font-semibold text-white hover:text-zinc-200 transition-colors"
                  >
                    {STUDENT_PROFILE.email}
                  </a>
                </div>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Kirim pesan langsung ke email akademik/pribadi. Saya biasanya merespons dalam waktu 1x24 jam di hari kerja.
              </p>
            </div>

            {/* University Location Card */}
            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center text-white">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-zinc-400 block">Kampus &amp; Domisili Saat Ini</span>
                  <span className="text-sm sm:text-base font-semibold text-white block">
                    {STUDENT_PROFILE.university}
                  </span>
                </div>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Kecamatan Majenang, Kabupaten Cilacap, Jawa Tengah. Mahasiswa aktif Program Studi S1 Sistem Informasi.
              </p>
            </div>

            {/* Origin Card */}
            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center text-white">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-zinc-400 block">Daerah Asal Kelahiran</span>
                  <span className="text-sm sm:text-base font-semibold text-white block">
                    {STUDENT_PROFILE.origin}
                  </span>
                </div>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Putra daerah Sumatera Utara yang bersemangat menimba ilmu dan memperluas jaringan lintas wilayah di Indonesia.
              </p>
            </div>

            {/* Professional Assurance */}
            <div className="p-5 rounded-xl bg-zinc-900/20 border border-zinc-800/60 text-xs text-zinc-400 space-y-1.5">
              <span className="font-semibold text-zinc-300 block">Etika Korespondensi:</span>
              <p>
                Setiap pesan yang dikirimkan melalui formulir ini akan dijaga kerahasiaannya dan hanya digunakan untuk komunikasi profesional terkait.
              </p>
            </div>

          </div>

          {/* Right Column: Contact Form or Success View */}
          <div className="lg:col-span-7">
            
            {submitted ? (
              <div className="p-8 rounded-2xl bg-zinc-900/80 border border-zinc-700 shadow-xl space-y-6 animate-in fade-in duration-300">
                <div className="flex items-center gap-3 text-emerald-400">
                  <CheckCircle2 className="w-8 h-8" />
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      Draf Pesan Siap Dikirimkan!
                    </h3>
                    <p className="text-xs text-zinc-400">
                      Terima kasih, {formData.name}. Draf pesan profesional Anda telah berhasil disusun.
                    </p>
                  </div>
                </div>

                {/* Draft Message Card */}
                <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 space-y-2 text-xs font-mono text-zinc-300">
                  <div><span className="text-zinc-500">Subjek:</span> {formData.subject}</div>
                  <div><span className="text-zinc-500">Keperluan:</span> {formData.purpose}</div>
                  <div><span className="text-zinc-500">Pengirim:</span> {formData.name} ({formData.email})</div>
                  {formData.institution && (
                    <div><span className="text-zinc-500">Instansi:</span> {formData.institution}</div>
                  )}
                  <div className="pt-2 border-t border-zinc-850 whitespace-pre-wrap text-zinc-200">
                    {formData.message}
                  </div>
                </div>

                {/* Action Buttons to send directly */}
                <div className="space-y-3">
                  <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block">
                    Pilih Jalur Pengiriman:
                  </span>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Send via Default Email */}
                    <a
                      href={getMailtoUrl()}
                      className="py-3 px-4 rounded-lg bg-white text-zinc-950 hover:bg-zinc-200 text-xs font-bold transition-colors flex items-center justify-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Kirim via Email Resmi</span>
                    </a>

                    {/* Send via WhatsApp */}
                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Kirim via WhatsApp (+62)</span>
                    </a>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <button
                      onClick={handleCopyDraft}
                      className="text-xs text-zinc-400 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      {copiedDraft ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedDraft ? 'Draf Disalin!' : 'Salin Draf Teks'}</span>
                    </button>

                    <button
                      onClick={handleReset}
                      className="text-xs text-zinc-400 hover:text-white underline transition-colors cursor-pointer"
                    >
                      Kirim Pesan Lain
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <form 
                onSubmit={handleSubmit}
                className="p-6 sm:p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 shadow-lg space-y-5"
                noValidate
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Nama Lengkap <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Contoh: Budi Prasetyo"
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border text-sm text-white placeholder-zinc-600 focus:outline-none focus:ring-1 transition-colors ${
                        formErrors.name 
                          ? 'border-rose-500/80 focus:ring-rose-500' 
                          : 'border-zinc-800 focus:border-zinc-500 focus:ring-zinc-500'
                      }`}
                    />
                    {formErrors.name && (
                      <p className="text-xs text-rose-400 mt-1">{formErrors.name}</p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Alamat Email <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="nama@instansi.com"
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border text-sm text-white placeholder-zinc-600 focus:outline-none focus:ring-1 transition-colors ${
                        formErrors.email 
                          ? 'border-rose-500/80 focus:ring-rose-500' 
                          : 'border-zinc-800 focus:border-zinc-500 focus:ring-zinc-500'
                      }`}
                    />
                    {formErrors.email && (
                      <p className="text-xs text-rose-400 mt-1">{formErrors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Institution / Company */}
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Instansi / Perusahaan / Kampus (Opsional)
                    </label>
                    <input
                      type="text"
                      value={formData.institution}
                      onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                      placeholder="Contoh: PT Teknologi / Universitas ..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-colors"
                    />
                  </div>

                  {/* Purpose */}
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Kategori Keperluan
                    </label>
                    <select
                      value={formData.purpose}
                      onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-sm text-white focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-colors cursor-pointer"
                    >
                      {purposes.map((p, i) => (
                        <option key={i} value={p} className="bg-zinc-900 text-zinc-200">
                          {p}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                    Subjek Pesan <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Contoh: Kolaborasi Tugas Sistem Informasi / Tanya Proyek"
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border text-sm text-white placeholder-zinc-600 focus:outline-none focus:ring-1 transition-colors ${
                      formErrors.subject 
                        ? 'border-rose-500/80 focus:ring-rose-500' 
                        : 'border-zinc-800 focus:border-zinc-500 focus:ring-zinc-500'
                    }`}
                  />
                  {formErrors.subject && (
                    <p className="text-xs text-rose-400 mt-1">{formErrors.subject}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                    Isi Pesan Lengkap <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tuliskan pesan, rincian keperluan, atau tawaran kolaborasi secara rinci..."
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border text-sm text-white placeholder-zinc-600 focus:outline-none focus:ring-1 transition-colors resize-y ${
                      formErrors.message 
                        ? 'border-rose-500/80 focus:ring-rose-500' 
                        : 'border-zinc-800 focus:border-zinc-500 focus:ring-zinc-500'
                    }`}
                  />
                  {formErrors.message && (
                    <p className="text-xs text-rose-400 mt-1">{formErrors.message}</p>
                  )}
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3 rounded-lg bg-white hover:bg-zinc-200 text-zinc-950 text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm active:scale-[0.98]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Kirim Pesan Profesional</span>
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
