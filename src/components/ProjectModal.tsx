import React, { useState, useEffect } from 'react';
import { X, Play, Copy, Check, Terminal, Database, Code, CheckCircle2, Layers } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'code' | 'architecture' | 'simulation'>('overview');
  const [copied, setCopied] = useState(false);
  const [simRunning, setSimRunning] = useState(false);
  const [simOutput, setSimOutput] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      setActiveTab('overview');
      setSimOutput(null);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  const handleCopyCode = () => {
    if (project.codeSnippet) {
      navigator.clipboard.writeText(project.codeSnippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const runSimulation = () => {
    setSimRunning(true);
    setSimOutput('Menjalankan modul kompilasi...');
    setTimeout(() => {
      setSimOutput(project.simulatedOutput || 'Simulasi selesai dengan status SUCCESS (0 error).');
      setSimRunning(false);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl max-h-[92vh] bg-zinc-900 border border-zinc-700/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-zinc-100"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-zinc-800 bg-zinc-950/70 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-1">
              <span>{project.category}</span>
              <span>·</span>
              <span className="text-zinc-300">{project.courseOrigin}</span>
              <span>·</span>
              <span>{project.date}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {project.title}
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

        {/* Modal Navigation Tabs */}
        <div className="flex items-center gap-1 px-6 pt-3 border-b border-zinc-800 bg-zinc-950/40 overflow-x-auto">
          <button
            onClick={() => setActiveTab('overview')}
            className={`pb-3 px-3 text-xs sm:text-sm font-medium border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'overview'
                ? 'border-white text-white font-semibold'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Ikhtisar &amp; Masalah
          </button>

          {project.architectureDetails && (
            <button
              onClick={() => setActiveTab('architecture')}
              className={`pb-3 px-3 text-xs sm:text-sm font-medium border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === 'architecture'
                  ? 'border-white text-white font-semibold'
                  : 'border-transparent text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Skema Arsitektur / ERD
            </button>
          )}

          {project.codeSnippet && (
            <button
              onClick={() => setActiveTab('code')}
              className={`pb-3 px-3 text-xs sm:text-sm font-medium border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === 'code'
                  ? 'border-white text-white font-semibold'
                  : 'border-transparent text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Logika Kode Sumber
            </button>
          )}

          <button
            onClick={() => setActiveTab('simulation')}
            className={`pb-3 px-3 text-xs sm:text-sm font-medium border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'simulation'
                ? 'border-white text-white font-semibold'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Simulasi Eksekusi
          </button>
        </div>

        {/* Tab Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-sm">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Image banner */}
              <div className="aspect-[16/9] w-full rounded-xl overflow-hidden bg-zinc-950 border border-zinc-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Problem Solved */}
              <div className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800/80">
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 block mb-1">
                  Permasalahan yang Diselesaikan:
                </span>
                <p className="text-zinc-300 leading-relaxed text-sm">
                  {project.problemSolved}
                </p>
              </div>

              {/* Full Description */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                  Latar Belakang &amp; Metodologi Pengerjaan
                </h4>
                <p className="text-zinc-300 leading-relaxed text-sm">
                  {project.fullDesc}
                </p>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3">
                  Fitur &amp; Karakteristik Teknis
                </h4>
                <div className="space-y-2">
                  {project.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-zinc-300 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2.5">
                  Alat, Bahasa &amp; Pustaka Komputasi
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded bg-zinc-800/90 border border-zinc-700 text-xs text-zinc-200 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: ARCHITECTURE / SCHEMAS */}
          {activeTab === 'architecture' && project.architectureDetails && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Struktur Relasi Tabel &amp; Alur Data
                </h4>
                <span className="text-xs text-zinc-500 font-mono">Ternormalisasi 3NF</span>
              </div>
              <pre className="p-5 rounded-xl bg-zinc-950 border border-zinc-800 font-mono text-xs text-zinc-300 overflow-x-auto whitespace-pre-wrap leading-relaxed">
                {project.architectureDetails}
              </pre>
              <p className="text-xs text-zinc-400">
                Catatan: Skema di atas dirancang untuk menjamin integritas referensial dan mencegah anomali saat manipulasi data (insert, update, delete).
              </p>
            </div>
          )}

          {/* TAB 3: CODE SNIPPET */}
          {activeTab === 'code' && project.codeSnippet && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-400">
                  Cuplikan Implementasi Kode Prosedural
                </span>
                <button
                  onClick={handleCopyCode}
                  className="px-3 py-1 text-xs font-medium bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded border border-zinc-700 flex items-center gap-1.5 cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Tersalin!' : 'Salin Kode'}</span>
                </button>
              </div>
              <pre className="p-5 rounded-xl bg-zinc-950 border border-zinc-800 font-mono text-xs text-emerald-400 overflow-x-auto whitespace-pre leading-relaxed">
                {project.codeSnippet}
              </pre>
            </div>
          )}

          {/* TAB 4: SIMULATION */}
          {activeTab === 'simulation' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    Terminal Console Output Simulator
                  </h4>
                  <p className="text-xs text-zinc-500">
                    Uji alur eksekusi logika program secara langsung
                  </p>
                </div>
                <button
                  onClick={runSimulation}
                  disabled={simRunning}
                  className="px-4 py-2 text-xs font-semibold text-zinc-900 bg-white hover:bg-zinc-200 rounded-lg flex items-center gap-2 cursor-pointer transition-colors disabled:opacity-50"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{simRunning ? 'Memproses...' : 'Jalankan Program'}</span>
                </button>
              </div>

              <div className="p-5 rounded-xl bg-zinc-950 border border-zinc-800 font-mono text-xs min-h-[220px]">
                <div className="flex items-center gap-2 pb-3 mb-3 border-b border-zinc-800 text-zinc-500 text-[11px]">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>bash · environment unikom-majenang:~/projects</span>
                </div>
                {simOutput ? (
                  <pre className="text-zinc-200 whitespace-pre-wrap leading-relaxed animate-in fade-in duration-150">
                    {simOutput}
                  </pre>
                ) : (
                  <div className="text-zinc-500 flex flex-col items-center justify-center py-10 text-center">
                    <Terminal className="w-8 h-8 mb-2 opacity-40" />
                    <span>Klik tombol &quot;Jalankan Program&quot; di atas untuk mensimulasikan keluaran konsol.</span>
                  </div>
                )}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-zinc-800 bg-zinc-950/70 flex items-center justify-between">
          <span className="text-xs text-zinc-500">
            Karya Mahasiswa: {project.courseOrigin}
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-zinc-900 bg-white rounded-lg hover:bg-zinc-200 transition-colors cursor-pointer"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
