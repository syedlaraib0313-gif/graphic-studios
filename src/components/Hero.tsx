import { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Smartphone, 
  Printer, 
  Package, 
  Megaphone, 
  Layers,
  MessageCircle,
  Mail,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { TAGLINE_OPTIONS, STUDIO_CONTACT } from '../data/studioData';
import { MAIN_SERVICES_OVERVIEW } from '../data/servicesData';

interface HeroProps {
  onViewWorkClick: () => void;
  onStartProjectClick: () => void;
  onSelectService: (serviceName: string) => void;
}

export default function Hero({ onViewWorkClick, onStartProjectClick, onSelectService }: HeroProps) {
  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTaglineIndex((prev) => (prev + 1) % TAGLINE_OPTIONS.length);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'BRANDING':
        return <ShieldCheck className="w-5 h-5 text-[#A855F7]" />;
      case 'SOCIAL MEDIA':
        return <Smartphone className="w-5 h-5 text-[#A855F7]" />;
      case 'PRINT DESIGN':
        return <Printer className="w-5 h-5 text-[#A855F7]" />;
      case 'PACKAGING':
        return <Package className="w-5 h-5 text-[#A855F7]" />;
      case 'ADVERTISING':
        return <Megaphone className="w-5 h-5 text-[#A855F7]" />;
      case 'DIGITAL DESIGN':
        return <Layers className="w-5 h-5 text-[#A855F7]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#A855F7]" />;
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 overflow-hidden flex flex-col justify-center">
      {/* Ambient Studio Lighting Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#7C3AED]/20 to-[#A855F7]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-[#7C3AED]/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-[#A855F7]/15 rounded-full blur-[110px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(#A855F7 1px, transparent 1px)',
          backgroundSize: '28px 28px'
        }} 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Top Studio Positioning Badge */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#241647]/80 border border-purple-500/30 text-purple-200 text-xs font-semibold backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="tracking-wide">CREATIVE GRAPHIC DESIGN STUDIO</span>
            <span className="text-purple-400">|</span>
            <span className="text-purple-300/80">Available For New Projects</span>
          </div>
        </div>

        {/* Hero Headlines */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-[1.1] mb-6">
            BRINGING YOUR BRAND <br />
            <span className="bg-gradient-to-r from-white via-purple-100 to-[#A855F7] bg-clip-text text-transparent">
              TO LIFE
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-purple-200/90 font-normal leading-relaxed max-w-2xl mx-auto mb-6">
            Creative design solutions built to make your brand look{' '}
            <span className="text-white font-semibold">professional</span>,{' '}
            <span className="text-white font-semibold">memorable</span>, and{' '}
            <span className="text-white font-semibold">impactful</span>.
          </p>

          {/* Dynamic Studio Tagline Showcase */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#120A24]/70 border border-purple-800/40 text-xs sm:text-sm text-purple-300 mb-8">
            <span className="text-purple-400 font-bold uppercase tracking-wider text-[11px]">Philosophy:</span>
            <span className="font-medium text-white transition-opacity duration-300 italic">
              "{TAGLINE_OPTIONS[currentTaglineIndex]}"
            </span>
          </div>

          {/* Primary Call to Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onViewWorkClick}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-[#1B1035] hover:bg-purple-50 font-bold text-sm tracking-wider uppercase shadow-xl hover:shadow-2xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-2"
            >
              <span>VIEW OUR WORK</span>
              <ChevronRight className="w-4 h-4 text-[#7C3AED]" />
            </button>

            <button
              onClick={onStartProjectClick}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#A855F7] text-white hover:brightness-110 font-bold text-sm tracking-wider uppercase shadow-lg shadow-purple-900/50 hover:shadow-purple-700/60 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>START A PROJECT</span>
            </button>
          </div>

          {/* Direct WhatsApp / Email quick bar */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs text-purple-300/80">
            <a 
              href={STUDIO_CONTACT.whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-emerald-300 transition-colors bg-[#241647]/50 px-3 py-1.5 rounded-lg border border-purple-700/30"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp: <strong className="text-white font-medium">7004953962</strong></span>
            </a>
            <a 
              href={`mailto:${STUDIO_CONTACT.email}`}
              className="flex items-center gap-1.5 hover:text-purple-200 transition-colors bg-[#241647]/50 px-3 py-1.5 rounded-lg border border-purple-700/30"
            >
              <Mail className="w-3.5 h-3.5 text-purple-400" />
              <span>Email: <strong className="text-white font-medium">{STUDIO_CONTACT.email}</strong></span>
            </a>
          </div>
        </div>

        {/* 6 Main Services Spotlight Cards */}
        <div className="mt-14">
          <div className="flex items-center justify-between mb-5 px-1">
            <span className="text-xs font-bold tracking-[0.2em] text-purple-300/80 uppercase">
              Core Design Capabilities
            </span>
            <span className="text-xs text-purple-400/80">
              6 Specialized Practice Areas
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {MAIN_SERVICES_OVERVIEW.map((srv) => (
              <div
                key={srv.name}
                onClick={() => onSelectService(srv.name)}
                className="group relative bg-[#241647]/60 hover:bg-[#241647]/90 border border-purple-700/30 hover:border-[#A855F7]/50 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 cursor-pointer backdrop-blur-sm shadow-md hover:shadow-purple-900/30"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#120A24] border border-purple-500/20 flex items-center justify-center group-hover:scale-110 group-hover:border-purple-400/40 transition-all">
                    {getServiceIcon(srv.name)}
                  </div>
                  <ArrowRight className="w-4 h-4 text-purple-400/50 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="font-display font-bold text-base tracking-wide text-white mb-1 group-hover:text-purple-200 transition-colors">
                  {srv.name}
                </h3>
                <p className="text-xs text-purple-200/70 line-clamp-2 leading-relaxed">
                  {srv.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
