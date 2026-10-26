import React, { useEffect } from 'react';
import { X, BookOpen, Clock, CheckCircle2, UserCheck, Award, Layers } from 'lucide-react';
import { Course } from '../data/portfolioData';

interface CourseModalProps {
  course: Course | null;
  onClose: () => void;
}

export const CourseModal: React.FC<CourseModalProps> = ({ course, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (course) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [course, onClose]);

  if (!course) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] bg-zinc-900 border border-zinc-700/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-zinc-100"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-zinc-800 flex items-start justify-between gap-4 bg-zinc-950/60">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-1">
              <span className="text-zinc-200 font-semibold">{course.code}</span>
              <span>·</span>
              <span>{course.category}</span>
              <span>·</span>
              <span className="text-amber-400 font-bold">{course.sks} SKS</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {course.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
            aria-label="Tutup modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm">
          {/* Schedule & Metadata */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-xl bg-zinc-950/40 border border-zinc-800/80 text-xs">
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-zinc-400" />
              <div>
                <span className="text-zinc-500 block">Jadwal Kuliah</span>
                <span className="text-zinc-200 font-medium">{course.schedule}</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <UserCheck className="w-4 h-4 text-zinc-400" />
              <div>
                <span className="text-zinc-500 block">Status Perkuliahan</span>
                <span className="text-emerald-400 font-medium">{course.status} (Semester 1)</span>
              </div>
            </div>
          </div>

          {/* Course Synopsis */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-zinc-400 mb-2">
              Deskripsi Silabus Perkuliahan
            </h4>
            <p className="text-zinc-300 leading-relaxed text-sm">
              {course.description}
            </p>
          </div>

          {/* Topics Breakdown */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-zinc-400 mb-3 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-zinc-400" />
              <span>Pokok Bahasan &amp; Materi Mingguan</span>
            </h4>
            <div className="space-y-2">
              {course.topics.map((topic, index) => (
                <div
                  key={index}
                  className="p-3 rounded-lg bg-zinc-950/30 border border-zinc-800/60 flex items-start gap-3"
                >
                  <span className="font-mono text-xs text-zinc-500 mt-0.5 shrink-0">
                    M{index + 1}
                  </span>
                  <span className="text-xs sm:text-sm text-zinc-200">
                    {topic}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Competency Goals */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-zinc-400 mb-3 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-zinc-400" />
              <span>Capaian Pembelajaran Lulusan (CPL) Terkait</span>
            </h4>
            <div className="space-y-2">
              {course.competencies.map((comp, index) => (
                <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{comp}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-zinc-800 bg-zinc-950/60 flex items-center justify-between">
          <span className="text-xs text-zinc-400">
            Universitas Komputama Majenang · Semester 1
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-zinc-900 bg-white rounded-lg hover:bg-zinc-200 transition-colors cursor-pointer"
          >
            Tutup Silabus
          </button>
        </div>
      </div>
    </div>
  );
};
