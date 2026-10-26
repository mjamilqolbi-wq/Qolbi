import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StatsBar } from './components/StatsBar';
import { AboutSection } from './components/AboutSection';
import { CoursesSection } from './components/CoursesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { TimelineSection } from './components/TimelineSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CourseModal } from './components/CourseModal';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { Course, Project } from './data/portfolioData';

export default function App() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);

  const handleOpenContact = () => {
    const contactElem = document.getElementById('kontak');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 selection:bg-zinc-800 selection:text-white flex flex-col antialiased">
      {/* Top Navigation */}
      <Navbar
        onOpenResume={() => setResumeOpen(true)}
        onOpenContact={handleOpenContact}
      />

      <main className="flex-1">
        {/* Hero Section with photo and split layout */}
        <HeroSection
          onOpenResume={() => setResumeOpen(true)}
          onOpenContact={handleOpenContact}
        />

        {/* 4-column metric strip below hero */}
        <StatsBar />

        {/* About & Academic Philosophy */}
        <AboutSection />

        {/* Semester 1 Coursework (8 Courses, 19 SKS) */}
        <CoursesSection onSelectCourse={(course) => setSelectedCourse(course)} />

        {/* Academic Projects (4 projects with demo & code) */}
        <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />

        {/* Educational Journey Timeline */}
        <TimelineSection />

        {/* Professional Contact Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <CourseModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}
