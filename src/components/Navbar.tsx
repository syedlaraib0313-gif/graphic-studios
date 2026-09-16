import { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { STUDIO_CONTACT } from '../data/studioData';
import SLRLogo from './SLRLogo';

interface NavbarProps {
  onStartProjectClick: () => void;
}

export default function Navbar({ onStartProjectClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['home', 'about', 'services', 'work', 'why-us', 'process', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#home', id: 'home' },
    { name: 'ABOUT', href: '#about', id: 'about' },
    { name: 'SERVICES', href: '#services', id: 'services' },
    { name: 'WORK', href: '#work', id: 'work' },
    { name: 'PROCESS', href: '#process', id: 'process' },
    { name: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#1B1035]/90 backdrop-blur-md border-b border-purple-900/30 py-3.5 shadow-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            className="flex items-center group cursor-pointer focus:outline-none"
            aria-label="SLR GRAPHICS Home"
          >
            <SLRLogo size="sm" showTagline={true} />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5 bg-[#120A24]/60 border border-purple-500/20 px-4 py-1.5 rounded-full backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#7C3AED] text-white shadow-sm shadow-purple-500/30'
                      : 'text-purple-200/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </nav>

          {/* Standout Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={STUDIO_CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-purple-200 hover:text-white hover:bg-purple-900/40 border border-purple-500/20 transition-colors"
              title="Chat on WhatsApp: 7004953962"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onStartProjectClick}
              className="relative group overflow-hidden rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#A855F7] px-5 py-2.5 text-xs font-bold tracking-wider uppercase text-white shadow-lg shadow-purple-700/30 hover:shadow-purple-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <span>START A PROJECT</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-purple-950/60 border border-purple-500/30 text-purple-200 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#120A24]/98 border-b border-purple-900/40 px-6 py-6 mt-3 space-y-4 backdrop-blur-xl animate-in fade-in slide-in-from-top duration-200">
          <div className="pb-3 border-b border-purple-900/40">
            <SLRLogo size="sm" showTagline={true} />
          </div>

          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className={`flex items-center justify-between w-full text-left py-2.5 px-3 rounded-lg text-sm font-semibold tracking-wider ${
                  activeSection === link.id
                    ? 'bg-[#7C3AED] text-white'
                    : 'text-purple-200 hover:bg-white/5 hover:text-white'
                }`}
              >
                <span>{link.name}</span>
                <span className="text-xs text-purple-400/60">→</span>
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-purple-900/40 flex flex-col gap-3">
            <a
              href={STUDIO_CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-emerald-500/30 bg-emerald-950/20 text-emerald-300 text-sm font-semibold"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us: 7004953962</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onStartProjectClick();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#A855F7] text-white font-bold text-sm tracking-wider uppercase shadow-lg shadow-purple-600/40 flex items-center justify-center gap-2"
            >
              <span>START A PROJECT</span>
              <Sparkles className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
