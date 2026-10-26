import React, { useState } from 'react';
import { ArrowRight, FileText, Send, MapPin, GraduationCap, Sparkles, User, Palette } from 'lucide-react';
import { STUDENT_PROFILE } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume, onOpenContact }) => {
  const [photoMode, setPhotoMode] = useState<'anime' | 'real'>('anime');

  const currentPhoto = photoMode === 'anime' 
    ? STUDENT_PROFILE.animePhotoUrl 
    : STUDENT_PROFILE.originalPhotoUrl;

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="profil" className="relative pt-10 pb-20 md:pt-16 md:pb-28 overflow-hidden">
      {/* Subtle radial ambient background glow */}
      <div 
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[720px] h-[500px] bg-orange-500/10 rounded-full blur-3xl"
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typographic Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Unboxed Metadata Kicker (Anti-pill discipline) */}
            <div className="flex items-center flex-wrap gap-2 text-xs sm:text-sm font-medium text-zinc-400 mb-5">
              <span className="text-zinc-200">Mahasiswa Semester 1</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>Sistem Informasi S1</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span className="text-zinc-300">Asal Sumatera Utara</span>
            </div>

            {/* Display Headline with balanced text wrap */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-white leading-[1.15] mb-6 [text-wrap:balance]">
              Menjembatani Logika Bisnis &amp; Arsitektur Teknologi Informasi.
            </h1>

            {/* Body Prose */}
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl mb-8">
              Halo! Saya <span className="text-white font-semibold">{STUDENT_PROFILE.name}</span>, mahasiswa perantau asal Sumatera Utara yang kini menempuh studi di{' '}
              <span className="text-zinc-100 font-medium">Universitas Komputama Majenang</span>. Berfokus pada penguasaan dasar algoritma pemrograman, pemodelan basis data relasional, dan perancangan sistem informasi modern.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              <button
                onClick={() => handleScrollTo('proyek')}
                className="px-5 py-3 text-sm font-semibold text-zinc-950 bg-white rounded-lg hover:bg-zinc-200 transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-white/5 active:scale-[0.98]"
              >
                <span>Lihat Proyek Akademik</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenResume}
                className="px-5 py-3 text-sm font-medium text-zinc-200 bg-zinc-900 border border-zinc-800 rounded-lg hover:bg-zinc-800 hover:text-white transition-all flex items-center gap-2 cursor-pointer active:scale-[0.98]"
              >
                <FileText className="w-4 h-4 text-zinc-400" />
                <span>Lihat CV / Resume</span>
              </button>

              <button
                onClick={onOpenContact}
                className="px-4 py-3 text-sm font-medium text-zinc-400 hover:text-white transition-colors cursor-pointer flex items-center gap-2 underline underline-offset-4 decoration-zinc-700 hover:decoration-white"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Kontak Profesional</span>
              </button>
            </div>

            {/* Origin & Campus Notice Badge & Circular rotating badge */}
            <div className="flex items-center gap-6 pt-6 border-t border-zinc-900">
              {/* Circular rotating stamp */}
              <div className="relative w-20 h-20 shrink-0">
                <svg
                  className="w-full h-full animate-[spin_24s_linear_infinite]"
                  viewBox="0 0 100 100"
                >
                  <path
                    id="circlePath"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    fill="none"
                  />
                  <text className="text-[9.5px] font-semibold uppercase tracking-[0.22em] fill-zinc-400">
                    <textPath href="#circlePath">
                      • SISTEM INFORMASI • UNIKOM MAJENANG •
                    </textPath>
                  </text>
                </svg>
                <div className="absolute inset-0 m-auto w-9 h-9 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-[10px] font-bold text-white tracking-tight">
                  2026
                </div>
              </div>

              {/* Quick Academic Context */}
              <div className="text-xs text-zinc-400 space-y-1">
                <div className="flex items-center gap-1.5 text-zinc-200 font-medium">
                  <GraduationCap className="w-4 h-4 text-zinc-400" />
                  <span>Universitas Komputama Majenang · Angkatan 2026</span>
                </div>
                <div className="flex items-center gap-1.5 text-zinc-400">
                  <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                  <span>Asal: Sumatera Utara ➔ Domisili: Majenang, Cilacap, Jawa Tengah</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Portrait Image with Modern Anime Style */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Photo Switcher Controls (Anime Modern vs Foto Asli) */}
              <div className="flex items-center justify-end mb-3">
                <div className="p-1 bg-zinc-900/90 border border-zinc-800 rounded-xl flex items-center gap-1 text-xs">
                  <button
                    onClick={() => setPhotoMode('anime')}
                    className={`px-3 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                      photoMode === 'anime'
                        ? 'bg-orange-500 text-zinc-950 font-bold shadow-md shadow-orange-500/20'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    <Palette className="w-3.5 h-3.5" />
                    <span>Anime Modern ✨</span>
                  </button>
                  <button
                    onClick={() => setPhotoMode('real')}
                    className={`px-3 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                      photoMode === 'real'
                        ? 'bg-zinc-800 text-white font-semibold'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    <User className="w-3.5 h-3.5" />
                    <span>Foto Asli 📷</span>
                  </button>
                </div>
              </div>

              {/* Decorative subtle border glow frame */}
              <div className="relative rounded-2xl p-2 bg-gradient-to-b from-orange-500/20 via-zinc-900/80 to-zinc-950 border border-zinc-800/90 shadow-2xl shadow-orange-500/5 group">
                
                <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-zinc-900">
                  <img
                    key={currentPhoto}
                    src={currentPhoto}
                    alt={STUDENT_PROFILE.name}
                    className="w-full h-full object-cover object-center filter saturate-[1.04] transition-all duration-700 group-hover:scale-105 animate-in fade-in duration-300"
                    referrerPolicy="no-referrer"
                  />

                  {/* Gradient bottom scrim to guarantee high contrast */}
                  <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-zinc-950 via-zinc-950/75 to-transparent pointer-events-none" />

                  {/* Overlay text on image */}
                  <div className="absolute bottom-4 inset-x-4">
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-orange-400 bg-orange-950/60 border border-orange-800/60 px-2 py-0.5 rounded">
                        {photoMode === 'anime' ? 'Modern Anime Edition' : 'Original Capture'}
                      </span>
                    </div>
                    <p className="text-white font-bold text-base sm:text-lg leading-snug">
                      {STUDENT_PROFILE.name}
                    </p>
                    <p className="text-xs text-zinc-300 mt-0.5">
                      S1 Sistem Informasi · Semester 1
                    </p>
                    <div className="mt-2.5 pt-2 border-t border-zinc-700/60 flex items-center justify-between text-[11px] text-zinc-400">
                      <span>Universitas Komputama Majenang</span>
                      <span>Sumut ➔ Majenang</span>
                    </div>
                  </div>
                </div>

                {/* Corner accent chip */}
                <div className="absolute -top-3 -right-3 bg-zinc-900 border border-zinc-700/80 rounded-lg py-1 px-3 text-[11px] font-medium text-zinc-200 shadow-lg flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-orange-400" />
                  <span>Semester 1 Aktif</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
