import React from 'react';
import { ArrowUp, Heart, GraduationCap, MapPin } from 'lucide-react';
import { STUDENT_PROFILE } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-zinc-900 bg-zinc-950 py-10 text-xs text-zinc-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Identity & Campus info */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-center sm:text-left">
            <span className="font-bold text-zinc-200 text-sm">
              {STUDENT_PROFILE.name}
            </span>
            <span className="hidden sm:inline text-zinc-700">|</span>
            <span>Program Studi S1 Sistem Informasi</span>
            <span className="hidden sm:inline text-zinc-700">·</span>
            <span>{STUDENT_PROFILE.university}</span>
          </div>

          {/* Location & Academic Note */}
          <div className="flex items-center gap-4 text-zinc-400">
            <span>Asal: {STUDENT_PROFILE.origin}</span>
            <span>·</span>
            <span>Majenang, Cilacap, Jateng</span>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors flex items-center gap-1.5 cursor-pointer"
            aria-label="Kembali ke atas"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-zinc-900/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-zinc-600">
          <p>
            &copy; {new Date().getFullYear()} {STUDENT_PROFILE.name}. Portofolio Akademik Semester 1.
          </p>
          <p>
            Universitas Komputama Majenang (UNIKOM) · S1 Sistem Informasi
          </p>
        </div>
      </div>
    </footer>
  );
};
