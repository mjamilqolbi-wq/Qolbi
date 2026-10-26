import React, { useState } from 'react';
import { Terminal, Database, Globe, Layers, ArrowUpRight, Code2 } from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');

  const categories = [
    'Semua',
    'Algoritma & Pemrograman',
    'Basis Data & SQL',
    'Desain Web',
    'Analisis Sistem',
  ];

  const filteredProjects = selectedCategory === 'Semua'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Algoritma & Pemrograman':
        return Terminal;
      case 'Basis Data & SQL':
        return Database;
      case 'Desain Web':
        return Globe;
      default:
        return Layers;
    }
  };

  return (
    <section id="proyek" className="py-20 border-b border-zinc-900 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3">
              <span>Portofolio Akademik</span>
              <span aria-hidden="true">·</span>
              <span>Semester 1</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
              Proyek Akademik Sederhana
            </h2>
            <p className="text-sm sm:text-base text-zinc-400">
              Kumpulan tugas besar, studi kasus proses bisnis, dan praktikum laboratorium yang dikerjakan selama perkuliahan di Universitas Komputama Majenang.
            </p>
          </div>

          <div className="text-xs text-zinc-500 font-mono">
            {filteredProjects.length} Proyek Ditampilkan
          </div>
        </div>

        {/* Filter Segmented Controls */}
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

        {/* Project Cards (2 columns on tablet/desktop with rich detail) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const Icon = getCategoryIcon(project.category);
            return (
              <article
                key={project.id}
                className="group rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-all overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Media Frame with fallbacks & zero broken image guarantee */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900 border-b border-zinc-850">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Dark gradient scrim */}
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent pointer-events-none" />

                    {/* Category floating identifier */}
                    <div className="absolute top-4 left-4 bg-zinc-950/80 backdrop-blur-md border border-zinc-800 rounded-lg px-3 py-1 text-xs font-medium text-zinc-300 flex items-center gap-1.5">
                      <Icon className="w-3.5 h-3.5 text-zinc-400" />
                      <span>{project.category}</span>
                    </div>

                    <div className="absolute top-4 right-4 bg-zinc-950/80 backdrop-blur-md border border-zinc-800 rounded-lg px-2.5 py-1 text-xs font-mono text-zinc-400">
                      {project.date}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    {/* Unboxed metadata: Mata kuliah sumber */}
                    <div className="flex items-center gap-2 text-xs text-zinc-400 mb-2 font-mono">
                      <span>Mata Kuliah: {project.courseOrigin}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-zinc-100 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-sm text-zinc-400 leading-relaxed mb-5">
                      {project.shortDesc}
                    </p>

                    {/* Tech Stack (rendered as clean subtle chips without garish pills) */}
                    <div className="space-y-2 mb-4">
                      <span className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider block">
                        Teknologi &amp; Alat:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map((tech, i) => (
                          <span
                            key={i}
                            className="text-xs px-2.5 py-1 rounded bg-zinc-800/80 border border-zinc-700/60 text-zinc-300 font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-6 pb-6 pt-2 border-t border-zinc-850 flex items-center justify-between">
                  <div className="text-xs text-zinc-500 flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5" />
                    <span>Dokumentasi &amp; Simulasi Kode Siap</span>
                  </div>

                  <button
                    onClick={() => onSelectProject(project)}
                    className="px-4 py-2 text-xs font-semibold text-white bg-zinc-800 hover:bg-zinc-700 rounded-lg border border-zinc-700 transition-colors flex items-center gap-1.5 cursor-pointer active:scale-95"
                  >
                    <span>Detail &amp; Simulasi</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
