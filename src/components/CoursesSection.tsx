import React, { useState } from 'react';
import { BookOpen, Clock, ChevronRight, CheckCircle, GraduationCap, Award } from 'lucide-react';
import { COURSES, Course, STUDENT_PROFILE } from '../data/portfolioData';

interface CoursesSectionProps {
  onSelectCourse: (course: Course) => void;
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({ onSelectCourse }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');

  const categories = [
    'Semua',
    'Keahlian Inti',
    'Dasar Komputasi',
    'Bisnis & Manajemen',
    'Wajib Umum',
  ];

  const filteredCourses = selectedCategory === 'Semua'
    ? COURSES
    : COURSES.filter((c) => c.category === selectedCategory);

  return (
    <section id="mata-kuliah" className="py-20 border-b border-zinc-900 bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3">
              <span>Kurikulum Akademik</span>
              <span aria-hidden="true">·</span>
              <span>Semester 1 Ganjil 2026/2027</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
              Daftar Mata Kuliah yang Diikuti
            </h2>
            <p className="text-sm sm:text-base text-zinc-400">
              Menempuh total <strong className="text-zinc-200">19 SKS</strong> di Program Studi Sistem Informasi Universitas Komputama Majenang, memadukan kompetensi pemrograman, fondasi infrastruktur, dan tata kelola bisnis.
            </p>
          </div>

          {/* SKS Summary badge */}
          <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-center gap-4 shrink-0">
            <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-300">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-zinc-400">Total Beban Studi</div>
              <div className="text-lg font-bold text-white font-mono tabular-nums">
                {STUDENT_PROFILE.totalSKS} SKS · 8 Mata Kuliah
              </div>
            </div>
          </div>
        </div>

        {/* Filter Segmented Controls (interactive buttons) */}
        <div className="flex items-center gap-1.5 p-1 bg-zinc-900/80 border border-zinc-800/80 rounded-xl overflow-x-auto mb-10 w-full sm:w-auto sm:inline-flex">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-zinc-800 text-white shadow-sm border border-zinc-700/80 font-semibold'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-850'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Courses Grid (3-column on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Meta header unboxed */}
                <div className="flex items-center justify-between text-xs text-zinc-400 mb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="font-mono font-medium text-zinc-300">{course.code}</span>
                    <span aria-hidden="true">·</span>
                    <span>{course.category}</span>
                  </div>
                  <span className="font-mono font-semibold text-zinc-200 bg-zinc-800/80 px-2 py-0.5 rounded text-[11px]">
                    {course.sks} SKS
                  </span>
                </div>

                {/* Course Title */}
                <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-zinc-100 transition-colors">
                  {course.name}
                </h3>

                {/* Synopsis */}
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4 line-clamp-3">
                  {course.description}
                </p>

                {/* Schedule info */}
                <div className="flex items-center gap-2 text-xs text-zinc-400 mb-4 pb-4 border-b border-zinc-850">
                  <Clock className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                  <span>{course.schedule}</span>
                </div>

                {/* Sample Topics */}
                <div className="space-y-1.5 mb-5">
                  <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider block">
                    Fokus Pembelajaran Utama:
                  </span>
                  {course.topics.slice(0, 3).map((topic, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                      <span className="text-zinc-500 text-[10px] mt-0.5">•</span>
                      <span className="line-clamp-1">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectCourse(course)}
                className="w-full py-2.5 px-3 rounded-lg bg-zinc-850 hover:bg-zinc-800 text-xs font-medium text-zinc-200 hover:text-white border border-zinc-800 transition-colors flex items-center justify-between cursor-pointer group-hover:border-zinc-700"
              >
                <span>Buka Silabus &amp; Catatan Lengkap</span>
                <ChevronRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Context Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-zinc-800/80 flex items-center justify-center text-zinc-300 shrink-0">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">
                Kurikulum Program Studi Sistem Informasi Universitas Komputama Majenang
              </p>
              <p className="text-xs text-zinc-400">
                Disusun sesuai Standar Kompetensi Nasional untuk menghasilkan analis sistem dan pengembang teknologi yang adaptif.
              </p>
            </div>
          </div>
          <div className="text-xs text-zinc-400 text-right whitespace-nowrap">
            Status Semester: <span className="text-emerald-400 font-semibold">Aktif Berjalan</span>
          </div>
        </div>

      </div>
    </section>
  );
};
