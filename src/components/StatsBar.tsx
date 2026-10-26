import React from 'react';
import { BookOpen, Layers, GraduationCap, Compass } from 'lucide-react';
import { STUDENT_PROFILE } from '../data/portfolioData';

export const StatsBar: React.FC = () => {
  const metrics = [
    {
      icon: BookOpen,
      value: `${STUDENT_PROFILE.totalSKS} SKS`,
      label: 'Beban Studi Semester 1',
      sub: 'Kurikulum Merdeka Mandiri',
    },
    {
      icon: Layers,
      value: '8 Mata Kuliah',
      label: 'Komputasi & Manajemen',
      sub: 'Fondasi Analisis & Koding',
    },
    {
      icon: GraduationCap,
      value: 'UNIKOM Majenang',
      label: 'Universitas Komputama',
      sub: 'Kab. Cilacap, Jawa Tengah',
    },
    {
      icon: Compass,
      value: 'Sumatera Utara',
      label: 'Daerah Asal',
      sub: 'Merantau Menuntut Ilmu',
    },
  ];

  return (
    <div className="w-full border-y border-zinc-800/80 bg-zinc-950/60 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {metrics.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className="flex flex-col border-l border-zinc-800/80 pl-4 first:border-l-0 sm:first:border-l sm:first:pl-4"
              >
                <div className="flex items-center gap-2 text-zinc-500 mb-1">
                  <Icon className="w-4 h-4 text-zinc-400" />
                  <span className="text-xs uppercase tracking-wider font-semibold text-zinc-400">
                    {item.label}
                  </span>
                </div>
                <span className="text-xl sm:text-2xl font-bold tracking-tight text-white font-mono tabular-nums">
                  {item.value}
                </span>
                <span className="text-xs text-zinc-500 mt-0.5">
                  {item.sub}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
