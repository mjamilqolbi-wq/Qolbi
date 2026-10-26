import React from 'react';
import { MapPin, Navigation, Milestone, GraduationCap } from 'lucide-react';
import { TIMELINE_JOURNEY } from '../data/portfolioData';

export const TimelineSection: React.FC = () => {
  return (
    <section id="perjalanan" className="py-20 border-b border-zinc-900 bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3">
            <span>Rekam Jejak</span>
            <span aria-hidden="true">·</span>
            <span>Perjalanan Akademik</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
            Perjalanan Menuntut Ilmu: Sumut ke Majenang
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Kisah langkah awal dan target capaian dari Sumatera Utara hingga menetap dan berkuliah di Universitas Komputama Majenang.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l border-zinc-800 ml-4 md:ml-32 space-y-12">
          {TIMELINE_JOURNEY.map((item, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-8 group">
              {/* Dot marker */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-zinc-900 border-2 border-zinc-600 group-hover:border-white transition-colors" />

              {/* Side date on desktop */}
              <div className="md:absolute md:-left-36 md:top-1 text-xs font-mono font-semibold text-zinc-400 md:text-right md:w-28 mb-1.5 md:mb-0">
                {item.period}
              </div>

              {/* Content Card */}
              <div className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-colors">
                <h3 className="text-base font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
