import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, GraduationCap, Mail } from 'lucide-react';
import { STUDENT_PROFILE } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Profil', href: '#profil' },
    { label: 'Mata Kuliah', href: '#mata-kuliah' },
    { label: 'Proyek', href: '#proyek' },
    { label: 'Perjalanan', href: '#perjalanan' },
    { label: 'Kontak', href: '#kontak' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single element) */}
        <a 
          href="#profil" 
          className="text-base sm:text-lg font-bold tracking-tight text-white hover:text-zinc-200 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2.5"
        >
          <span className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-700/80 flex items-center justify-center text-xs font-semibold text-white">
            JQ
          </span>
          <span>{STUDENT_PROFILE.name}</span>
        </a>

        {/* Zone 2: 4-5 Clean single-line text links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer text-left"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={onOpenResume}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer text-zinc-400 flex items-center gap-1"
          >
            CV Mahasiswa
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenContact}
            className="px-4 py-2 text-xs font-semibold text-zinc-900 bg-white rounded-lg hover:bg-zinc-200 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2 cursor-pointer shadow-sm"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Hubungi Saya</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-800 bg-zinc-950 px-4 pt-3 pb-5 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-left py-2 px-3 text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-900 rounded-md transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="text-left py-2 px-3 text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-900 rounded-md transition-colors flex items-center justify-between"
            >
              <span>Lihat CV / Resume</span>
              <ArrowUpRight className="w-4 h-4 text-zinc-500" />
            </button>
          </div>
          <div className="pt-2 border-t border-zinc-800/80">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-2.5 px-4 text-center text-xs font-semibold text-zinc-900 bg-white rounded-lg hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Hubungi Saya</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
