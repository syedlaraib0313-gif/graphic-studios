import { useState } from 'react';
import { 
  Sparkles, 
  Share2, 
  Printer, 
  PackageCheck, 
  Briefcase, 
  Layers, 
  Check, 
  ArrowRight,
  HelpCircle,
  FileCheck
} from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import { ServiceCategory } from '../types';

interface ServicesSectionProps {
  onSelectServiceForProject: (serviceTitle: string) => void;
}

export default function ServicesSection({ onSelectServiceForProject }: ServicesSectionProps) {
  const [activeTab, setActiveTab] = useState<string>('ALL');

  const getCategoryIcon = (category: ServiceCategory) => {
    switch (category) {
      case 'BRANDING':
        return <Sparkles className="w-5 h-5 text-[#A855F7]" />;
      case 'SOCIAL MEDIA':
        return <Share2 className="w-5 h-5 text-[#A855F7]" />;
      case 'PRINT':
        return <Printer className="w-5 h-5 text-[#A855F7]" />;
      case 'PACKAGING':
        return <PackageCheck className="w-5 h-5 text-[#A855F7]" />;
      case 'BUSINESS':
        return <Briefcase className="w-5 h-5 text-[#A855F7]" />;
      case 'DIGITAL':
        return <Layers className="w-5 h-5 text-[#A855F7]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#A855F7]" />;
    }
  };

  const filteredServices = activeTab === 'ALL' 
    ? SERVICES_DATA 
    : SERVICES_DATA.filter((s) => s.category === activeTab);

  return (
    <section id="services" className="relative py-24 bg-[#1B1035] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#7C3AED]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#241647] border border-purple-600/30 text-[#A855F7] text-xs font-bold tracking-widest uppercase mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>OUR EXPERTISE</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight mb-4">
            COMPLETE GRAPHIC DESIGN SOLUTIONS
          </h2>

          <p className="text-base text-purple-200/80 max-w-2xl mx-auto leading-relaxed">
            From visionary identity systems to production-certified print and packaging, SLR GRAPHICS delivers bespoke visual engineering for forward-thinking brands.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {['ALL', 'BRANDING', 'SOCIAL MEDIA', 'PRINT', 'PACKAGING', 'BUSINESS', 'DIGITAL'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wider transition-all duration-200 cursor-pointer ${
                activeTab === cat
                  ? 'bg-gradient-to-r from-[#7C3AED] to-[#A855F7] text-white shadow-md shadow-purple-900/40 scale-105'
                  : 'bg-[#120A24] text-purple-300/80 border border-purple-800/40 hover:bg-[#241647] hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-[#241647]/50 hover:bg-[#241647]/80 border border-purple-700/30 hover:border-[#A855F7]/50 rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-purple-900/30 group"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#120A24] border border-purple-500/30 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                    {getCategoryIcon(service.category)}
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-md bg-[#1B1035] text-purple-300 border border-purple-800/50">
                    {service.category}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="font-display font-bold text-xl text-white mb-1.5 group-hover:text-purple-200 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-[#A855F7] font-semibold mb-3">
                  {service.tagline}
                </p>
                <p className="text-xs text-purple-200/70 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Offerings list */}
                <div className="space-y-2 mb-6 pt-4 border-t border-purple-800/40">
                  <p className="text-[11px] font-bold text-purple-300/80 tracking-wider uppercase">
                    Includes:
                  </p>
                  <ul className="space-y-2">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-purple-100/90">
                        <span className="w-4 h-4 rounded-full bg-[#7C3AED]/20 border border-purple-500/40 flex items-center justify-center text-[#A855F7] mt-0.5 shrink-0">
                          <Check className="w-2.5 h-2.5" />
                        </span>
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Deliverables & CTA */}
              <div className="pt-4 border-t border-purple-800/40 space-y-4">
                <div className="flex items-center gap-1.5 text-[11px] text-purple-300/70">
                  <FileCheck className="w-3.5 h-3.5 text-[#A855F7] shrink-0" />
                  <span className="truncate">{service.deliverablesSummary}</span>
                </div>

                <button
                  onClick={() => onSelectServiceForProject(service.title)}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#120A24] hover:bg-[#7C3AED] text-purple-200 hover:text-white border border-purple-600/30 hover:border-transparent text-xs font-bold tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 group/btn cursor-pointer"
                >
                  <span>REQUEST {service.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Project Note */}
        <div className="mt-12 p-6 rounded-2xl bg-[#120A24] border border-purple-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#241647] text-[#A855F7] flex items-center justify-center shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Need a customized bundle or specialized design work?</h4>
              <p className="text-xs text-purple-300/80">We craft tailored retainer packages and combined multi-service solutions.</p>
            </div>
          </div>
          <button
            onClick={() => onSelectServiceForProject('Custom Design Package')}
            className="shrink-0 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#A855F7] text-white text-xs font-bold tracking-wider uppercase hover:brightness-110 shadow-md shadow-purple-900/30 cursor-pointer"
          >
            DISCUSS CUSTOM SCOPE
          </button>
        </div>
      </div>
    </section>
  );
}
