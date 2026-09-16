import { Sparkles, MessageCircle, Mail, ArrowUp } from 'lucide-react';
import { STUDIO_CONTACT } from '../data/studioData';
import SLRLogo from './SLRLogo';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About Studio', href: '#about' },
    { label: 'Design Services', href: '#services' },
    { label: 'Portfolio', href: '#work' },
    { label: 'Our Process', href: '#process' },
    { label: 'Why SLR', href: '#why-us' },
    { label: 'Contact', href: '#contact' },
  ];

  const serviceCategories = [
    'Brand Identity & Systems',
    'Social Media Campaigns',
    'Tactile Print & Menus',
    'Packaging & Label Architecture',
    'Business Presentation Decks',
    'High-Converting Digital Assets'
  ];

  return (
    <footer className="bg-[#120A24] text-white border-t border-purple-900/40 relative overflow-hidden">
      {/* Subtle bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-48 bg-[#7C3AED]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Col 1 & 2: Studio Identity */}
          <div className="lg:col-span-2 space-y-4">
            <SLRLogo size="md" showTagline={true} />

            <p className="text-xs sm:text-sm text-purple-200/80 leading-relaxed max-w-sm">
              SLR GRAPHICS provides complete visual design solutions for businesses, brands, creators, and individuals. Focused on creating professional, modern, memorable, and purposeful visuals that make an impact.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs text-purple-300">
              <a 
                href={STUDIO_CONTACT.whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp: <strong className="text-white">7004953962</strong></span>
              </a>
              <a 
                href={`mailto:${STUDIO_CONTACT.email}`}
                className="flex items-center gap-2 hover:text-purple-200 transition-colors"
              >
                <Mail className="w-4 h-4 text-[#A855F7]" />
                <span>Email: <strong className="text-white">{STUDIO_CONTACT.email}</strong></span>
              </a>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-purple-300 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-purple-200/80">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-white hover:underline transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Design Capabilities */}
          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-purple-300 mb-4">
              Design Solutions
            </h4>
            <ul className="space-y-2.5 text-xs text-purple-200/80">
              {serviceCategories.map((srv) => (
                <li key={srv} className="hover:text-white transition-colors cursor-default">
                  {srv}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Brand Palette & Hours */}
          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-purple-300 mb-4">
              Studio Details
            </h4>
            <div className="space-y-3 text-xs text-purple-200/80">
              <div>
                <span className="block text-purple-400 text-[11px] font-mono">Working Hours:</span>
                <span>{STUDIO_CONTACT.hours}</span>
              </div>
              <div>
                <span className="block text-purple-400 text-[11px] font-mono">Territory:</span>
                <span>Worldwide Design Delivery</span>
              </div>
              <div className="pt-2">
                <span className="block text-purple-400 text-[11px] font-mono mb-1.5">Official Palette:</span>
                <div className="flex items-center gap-1.5">
                  <span className="w-4 h-4 rounded-full bg-[#1B1035] border border-purple-600" title="#1B1035 Dark Purple" />
                  <span className="w-4 h-4 rounded-full bg-[#FFFFFF]" title="#FFFFFF White" />
                  <span className="w-4 h-4 rounded-full bg-[#7C3AED]" title="#7C3AED Violet" />
                  <span className="w-4 h-4 rounded-full bg-[#A855F7]" title="#A855F7 Bright Violet" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="pt-8 border-t border-purple-900/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-purple-400">
          <p>© {new Date().getFullYear()} SLR GRAPHICS. All rights reserved. Creative Design Studio.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1B1035] hover:bg-[#241647] border border-purple-800/60 text-purple-300 hover:text-white transition-colors cursor-pointer"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
