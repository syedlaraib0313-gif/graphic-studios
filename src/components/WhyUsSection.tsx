import { 
  Zap, 
  Lightbulb, 
  Gem, 
  Paintbrush, 
  CheckCircle, 
  Users, 
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { WHY_PILLARS } from '../data/studioData';

export default function WhyUsSection() {
  const getPillarIcon = (id: string) => {
    switch (id) {
      case 'creative-thinking':
        return <Lightbulb className="w-6 h-6 text-[#A855F7]" />;
      case 'professional-quality':
        return <Gem className="w-6 h-6 text-[#A855F7]" />;
      case 'custom-design':
        return <Paintbrush className="w-6 h-6 text-[#A855F7]" />;
      case 'consistent-branding':
        return <ShieldCheck className="w-6 h-6 text-[#A855F7]" />;
      case 'client-focused':
        return <Users className="w-6 h-6 text-[#A855F7]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#A855F7]" />;
    }
  };

  return (
    <section id="why-us" className="relative py-24 bg-[#1B1035] overflow-hidden">
      {/* Background illumination */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#7C3AED]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#241647] border border-purple-600/30 text-[#A855F7] text-xs font-bold tracking-widest uppercase mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>THE SLR ADVANTAGE</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight mb-4">
            DESIGN WITH PURPOSE.
          </h2>

          <p className="text-sm sm:text-base text-purple-200/80 max-w-2xl mx-auto leading-relaxed">
            We don't merely decorate surfaces; we solve strategic communication challenges through intentional visual engineering and craftsmanship.
          </p>
        </div>

        {/* 5 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.id}
              className={`bg-[#241647]/50 hover:bg-[#241647]/80 border border-purple-700/30 hover:border-[#A855F7]/50 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-purple-900/30 flex flex-col justify-between ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#120A24] border border-purple-500/30 flex items-center justify-center">
                    {getPillarIcon(pillar.id)}
                  </div>
                  <span className="text-[10px] font-bold tracking-widest px-2.5 py-1 rounded-md bg-[#1B1035] text-purple-300 uppercase border border-purple-800/50">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-white mb-2 tracking-wide">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-purple-200/70 leading-relaxed mb-4">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 border-t border-purple-800/40 flex items-center justify-between text-xs text-purple-400">
                <span className="font-mono">Pillar 0{idx + 1}</span>
                <CheckCircle className="w-4 h-4 text-[#A855F7]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
