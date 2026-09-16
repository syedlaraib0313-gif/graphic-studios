import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import WhyUsSection from './components/WhyUsSection';
import ProcessSection from './components/ProcessSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProjectDetailModal from './components/ProjectDetailModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { PortfolioProject } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [preselectedService, setPreselectedService] = useState<string>('');

  const handleStartProjectClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewWorkClick = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceName: string) => {
    setPreselectedService(serviceName);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRequestSimilarProject = (projectTitle: string) => {
    setPreselectedService(`Project inspired by ${projectTitle}`);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#1B1035] text-white flex flex-col selection:bg-[#7C3AED] selection:text-white">
      {/* Navigation Header */}
      <Navbar onStartProjectClick={handleStartProjectClick} />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onViewWorkClick={handleViewWorkClick}
          onStartProjectClick={handleStartProjectClick}
          onSelectService={handleSelectService}
        />

        {/* About Section */}
        <AboutSection />

        {/* Services Section */}
        <ServicesSection onSelectServiceForProject={handleSelectService} />

        {/* Portfolio Section */}
        <PortfolioSection onSelectProject={(project) => setSelectedProject(project)} />

        {/* Why SLR Graphics Section */}
        <WhyUsSection />

        {/* 5-Step Process Section */}
        <ProcessSection />

        {/* Contact Section */}
        <ContactSection 
          preselectedService={preselectedService} 
          onClearPreselectedService={() => setPreselectedService('')}
        />
      </main>

      {/* Studio Footer */}
      <Footer />

      {/* Floating Direct WhatsApp Action */}
      <FloatingWhatsApp />

      {/* Case Study Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onRequestSimilar={handleRequestSimilarProject}
      />
    </div>
  );
}
