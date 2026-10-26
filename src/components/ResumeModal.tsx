import React, { useEffect } from 'react';
import { X, Printer, Download, Mail, MapPin, GraduationCap, Award, CheckCircle2 } from 'lucide-react';
import { STUDENT_PROFILE, COURSES, PROJECTS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] bg-zinc-950 border border-zinc-700/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-zinc-100"
        role="dialog"
        aria-modal="true"
      >
        {/* Header Actions */}
        <div className="px-6 py-4 border-b border-zinc-800 bg-zinc-900/80 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-white" />
            <span className="text-sm font-bold text-white">Curriculum Vitae Akademik Mahasiswa</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 text-xs font-semibold text-zinc-900 bg-white hover:bg-zinc-200 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Cetak / Simpan PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
              aria-label="Tutup CV"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable CV Container */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-zinc-300 print:text-black print:bg-white print:p-0">
          
          {/* Top Header Card */}
          <div className="border-b border-zinc-800 pb-6 print:border-black">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-5">
              <div className="flex items-start gap-4">
                <img
                  src={STUDENT_PROFILE.animePhotoUrl}
                  alt={STUDENT_PROFILE.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover border border-zinc-700 print:border-black shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h1 className="text-xl sm:text-2xl font-extrabold text-white print:text-black tracking-tight">
                    {STUDENT_PROFILE.name}
                  </h1>
                  <p className="text-xs sm:text-sm font-medium text-zinc-300 print:text-zinc-700 mt-0.5">
                    Mahasiswa S1 Sistem Informasi (Semester 1) · {STUDENT_PROFILE.university}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-400 print:text-zinc-600 mt-2">
                    <div className="flex items-center gap-1">
                      <Mail className="w-3.5 h-3.5" />
                      <span>{STUDENT_PROFILE.email}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>Asal: {STUDENT_PROFILE.origin} | Domisili: {STUDENT_PROFILE.currentLocation}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-xs text-zinc-400 print:text-zinc-600 sm:text-right shrink-0">
                <span className="block font-mono font-semibold text-white print:text-black">Angkatan 2026</span>
                <span>Status: Mahasiswa Aktif</span>
              </div>
            </div>
          </div>

          {/* Ringkasan Profil */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-400 print:text-zinc-600 mb-2">
              Ringkasan Profil &amp; Target Karir
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 print:text-zinc-800 leading-relaxed">
              {STUDENT_PROFILE.bio} Memiliki ketertarikan tinggi pada analisis sistem bisnis, pemrograman prosedural &amp; berorientasi objek, serta manajemen basis data. Memiliki disiplin kemandirian sebagai mahasiswa perantau asal Sumatera Utara yang bertekad mencapai prestasi akademik maksimal di Universitas Komputama Majenang.
            </p>
          </div>

          {/* Riwayat Pendidikan */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-400 print:text-zinc-600 mb-3">
              Riwayat Pendidikan
            </h2>
            <div className="p-4 rounded-xl bg-zinc-900/50 print:bg-zinc-100 border border-zinc-800 print:border-zinc-300 space-y-1">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-sm font-bold text-white print:text-black">
                    Universitas Komputama Majenang (UNIKOM)
                  </h3>
                  <p className="text-xs text-zinc-300 print:text-zinc-700">
                    Sarjana (S1) Sistem Informasi — Fakultas Ilmu Komputer &amp; Teknologi Informasi
                  </p>
                </div>
                <span className="text-xs font-mono text-zinc-400 print:text-zinc-600">
                  2026 – Sekarang
                </span>
              </div>
              <p className="text-xs text-zinc-400 print:text-zinc-600 pt-1">
                Semester 1 · Beban Studi: 19 SKS Aktif · Target IPK: &ge; 3.85
              </p>
            </div>
          </div>

          {/* Mata Kuliah Semester 1 (19 SKS) */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-400 print:text-zinc-600 mb-3">
              Mata Kuliah Semester 1 (Total 19 SKS)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {COURSES.map((c) => (
                <div 
                  key={c.id} 
                  className="p-2.5 rounded bg-zinc-900/40 print:bg-zinc-100 border border-zinc-800/80 print:border-zinc-300 flex items-center justify-between"
                >
                  <span className="font-medium text-zinc-200 print:text-zinc-900">{c.name}</span>
                  <span className="font-mono text-zinc-400 print:text-zinc-600 shrink-0 ml-2">{c.sks} SKS</span>
                </div>
              ))}
            </div>
          </div>

          {/* Proyek Akademik Terpilih */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-400 print:text-zinc-600 mb-3">
              Proyek Akademik Semester 1
            </h2>
            <div className="space-y-3">
              {PROJECTS.map((proj) => (
                <div 
                  key={proj.id} 
                  className="p-3.5 rounded-lg bg-zinc-900/30 print:bg-zinc-100 border border-zinc-800/60 print:border-zinc-300"
                >
                  <div className="flex items-start justify-between">
                    <h3 className="text-xs sm:text-sm font-bold text-white print:text-black">
                      {proj.title}
                    </h3>
                    <span className="text-[11px] font-mono text-zinc-400 print:text-zinc-600">
                      {proj.date}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-300 print:text-zinc-700 mt-1">
                    {proj.shortDesc}
                  </p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {proj.techStack.map((tech, i) => (
                      <span key={i} className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-800 print:bg-zinc-200 text-zinc-300 print:text-zinc-800 font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Keahlian & Keterampilan */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-400 print:text-zinc-600 mb-3">
              Keahlian Teknis &amp; Perangkat
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="space-y-1">
                <span className="font-semibold text-zinc-200 print:text-zinc-800 block">Pemrograman &amp; Data:</span>
                <p className="text-zinc-400 print:text-zinc-600">C++, Python Dasar, MySQL, Relational Database Normalization, HTML5, Tailwind CSS</p>
              </div>
              <div className="space-y-1">
                <span className="font-semibold text-zinc-200 print:text-zinc-800 block">Analisis &amp; Produktivitas:</span>
                <p className="text-zinc-400 print:text-zinc-600">Diagram Alur Bisnis (DFD &amp; Flowchart), Draw.io, Git, Microsoft Office / Excel, Visual Studio Code</p>
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-zinc-800 bg-zinc-900/80 flex items-center justify-between text-xs text-zinc-500">
          <span>{STUDENT_PROFILE.name} · Universitas Komputama Majenang</span>
          <button
            onClick={onClose}
            className="px-4 py-2 font-semibold text-zinc-900 bg-white rounded-lg hover:bg-zinc-200 transition-colors cursor-pointer"
          >
            Tutup CV
          </button>
        </div>
      </div>
    </div>
  );
};
