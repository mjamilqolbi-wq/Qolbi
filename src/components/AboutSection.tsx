import React from 'react';
import { Target, Compass, Code, Database, Network, CheckCircle2 } from 'lucide-react';
import { STUDENT_PROFILE } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: Code,
      title: 'Logika & Algoritma Komputasi',
      desc: 'Membangun penalaran algoritmik terstruktur melalui pemecahan masalah dengan bahasa pemrograman C++ dan Python, mencakup kendali perulangan, array, dan fungsi modular.',
    },
    {
      icon: Database,
      title: 'Pemodelan Data & ERD',
      desc: 'Memahami prinsip normalisasi data (1NF hingga 3NF), perancangan relasi antar entitas, integritas data referensial, serta dasar sintaks SQL untuk basis data relasional.',
    },
    {
      icon: Network,
      title: 'Analisis Alur Sistem & Bisnis',
      desc: 'Menganalisis proses operasional organisasi, memetakan diagram alur dokumen (flowchart), dan merancang Data Flow Diagram (DFD) untuk menerjemahkan kebutuhan bisnis ke spesifikasi teknis.',
    },
    {
      icon: Target,
      title: 'Adaptabilitas & Karakter Perantau',
      desc: 'Menempuh perjalanan jauh dari Sumatera Utara ke Majenang melatih kemandirian, ketangguhan mental, dan dorongan kuat untuk memanfaatkan setiap peluang akademik sebaik mungkin.',
    },
  ];

  return (
    <section id="profil-detail" className="py-20 border-b border-zinc-900 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with anti-pill discipline */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3">
            <span>Tentang Mahasiswa</span>
            <span aria-hidden="true">·</span>
            <span>Profil &amp; Filosofi Akademik</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Dari Sumatera Utara ke Universitas Komputama Majenang.
          </h2>
          <p className="text-base text-zinc-400 leading-relaxed">
            Menempuh pendidikan tinggi di luar tanah kelahiran menjadi tonggak penting dalam membentuk perspektif dan disiplin diri. Sistem Informasi menjadi pilihan utama karena menghubungkan kecakapan rekayasa teknologi dengan strategi kebutuhan nyata di dunia industri.
          </p>
        </div>

        {/* Narrative & Quote Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-zinc-300 leading-relaxed">
            <p>
              Perjalanan saya bermula dari <strong className="text-white">Sumatera Utara</strong>, sebuah daerah dengan kekayaan budaya yang menempa semangat pantang menyerah. Dorongan kuat untuk mendalami dunia komputasi membawa saya memilih berkuliah di <strong className="text-white">Universitas Komputama Majenang</strong> pada Program Studi <strong className="text-white">S1 Sistem Informasi</strong>.
            </p>
            <p>
              Di semester pertama ini, fokus utama saya adalah membangun fondasi logika yang kokoh. Menurut pandangan saya, keberhasilan suatu sistem informasi tidak hanya diukur dari seberapa rumit kodenya, melainkan seberapa efektif sistem tersebut mempermudah manusia, mengefisienkan alur kerja, dan memberikan data yang akurat bagi para pengambil keputusan.
            </p>
            <p className="text-zinc-400">
              Melalui kombinasi mata kuliah pemrograman, konsep teknologi informasi, matematika diskrit, dan manajemen bisnis, saya secara bertahap mengasah keterampilan analitis untuk siap berkontribusi pada proyek pengembangan sistem nyata di masa mendatang.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="p-6 sm:p-7 rounded-2xl bg-zinc-900/70 border border-zinc-800 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                <Compass className="w-4 h-4 text-zinc-300" />
                <span>Prinsip Belajar Semester 1</span>
              </div>
              <blockquote className="text-base sm:text-lg font-medium text-zinc-100 italic leading-snug">
                &ldquo;{STUDENT_PROFILE.academicPhilosophy}&rdquo;
              </blockquote>
              <div className="pt-4 border-t border-zinc-800 text-xs text-zinc-400 flex items-center justify-between">
                <span className="font-semibold text-zinc-300">{STUDENT_PROFILE.name}</span>
                <span>NIM / Angkatan 2026</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Competence */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-zinc-800/80 border border-zinc-700/80 flex items-center justify-center text-zinc-200 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Skills & Tools List */}
        <div className="mt-14 pt-10 border-t border-zinc-900">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <h3 className="text-lg font-bold text-white">
              Keahlian &amp; Perangkat Komputasi yang Sedang Ditekuni
            </h3>
            <span className="text-xs text-zinc-500">
              Evaluasi Pembelajaran Mandiri &amp; Praktikum Laboratorium
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {STUDENT_PROFILE.skills.map((skill, index) => (
              <div
                key={index}
                className="p-4 rounded-lg bg-zinc-900/30 border border-zinc-800/60 flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-sm font-medium text-zinc-200">{skill.name}</span>
                </div>
                <span className="text-xs text-zinc-500 shrink-0">
                  {skill.level}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
