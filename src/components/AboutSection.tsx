import { 
  Palette, 
  Target, 
  Sparkles, 
  CheckCircle2, 
  Award, 
  TrendingUp, 
  Layers
} from 'lucide-react';
import { STUDIO_STATS } from '../data/studioData';

export default function AboutSection() {
  const brandPalette = [
    { name: 'Dark Purple', hex: '#1B1035', usage: 'Main background', percentage: '60%', textColor: 'text-white' },
    { name: 'White', hex: '#FFFFFF', usage: 'Text & clean areas', percentage: '25%', textColor: 'text-gray-900' },
    { name: 'Violet', hex: '#7C3AED', usage: 'Buttons & accents', percentage: '10%', textColor: 'text-white' },
    { name: 'Bright Violet', hex: '#A855F7', usage: 'Highlights & gradients', percentage: '5%', textColor: 'text-white' },
  ];

  const highlights = [
    {
      title: 'CREATIVITY & CLARITY',
      desc: 'Designs that balance breathtaking artistry with crisp, instant comprehension.',
      icon: Sparkles
    },
    {
      title: 'PURPOSE-DRIVEN DESIGN',
      desc: 'Every element serves your business objectives, conversion funnels, and brand reputation.',
      icon: Target
    },
    {
      title: 'MULTI-FORMAT MASTERY',
      desc: 'Effortless translation from microscopic mobile app icons to colossal roadside billboards.',
      icon: Layers
    },
    {
      title: 'MEMORABLE IDENTITY',
      desc: 'Distinctive visual cues engineered to embed deeply into your customer’s memory.',
      icon: Award
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-[#140C28]/90 border-t border-purple-900/30 overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#7C3AED]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#241647] border border-purple-600/30 text-[#A855F7] text-xs font-bold tracking-widest uppercase mb-4">
            <Palette className="w-3.5 h-3.5" />
            <span>ABOUT SLR GRAPHICS</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight leading-tight mb-6">
            WE TURN IDEAS INTO <br />
            <span className="bg-gradient-to-r from-purple-200 via-white to-[#A855F7] bg-clip-text text-transparent">
              VISUAL EXPERIENCES.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-purple-200/90 leading-relaxed font-normal mb-6">
            <strong className="text-white font-semibold">SLR GRAPHICS</strong> is a creative design studio focused on delivering professional graphic design solutions for businesses, brands, creators, and individuals.
          </p>

          <p className="text-sm sm:text-base text-purple-300/80 leading-relaxed mb-6">
            From <strong className="text-white font-medium">brand identity and social media creatives to advertising, packaging and print design</strong>, we create visuals that combine creativity, clarity, and strong visual communication.
          </p>

          <div className="p-4 rounded-xl bg-[#241647]/50 border-l-4 border-[#7C3AED] text-sm text-purple-100 italic">
            "Our goal is simple: understand your vision, transform it into effective design, and help your brand stand out."
          </div>
        </div>

        {/* 4 Pillars of Studio Philosophy */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-[#1B1035] border border-purple-800/40 rounded-2xl p-6 hover:border-[#A855F7]/40 transition-colors shadow-sm"
              >
                <div className="w-11 h-11 rounded-xl bg-[#241647] border border-purple-500/30 flex items-center justify-center text-[#A855F7] mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-sm tracking-wider text-white mb-2 uppercase">
                  {item.title}
                </h3>
                <p className="text-xs text-purple-200/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Studio Statistics Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16 p-6 rounded-2xl bg-[#120A24] border border-purple-800/40">
          {STUDIO_STATS.map((stat, i) => (
            <div key={i} className="text-center p-3">
              <div className="font-display font-extrabold text-2xl sm:text-4xl text-white tracking-tight mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-purple-300/70 uppercase tracking-wider font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Brand Colors Architecture (as specified in guidelines) */}
        <div className="bg-[#241647]/50 border border-purple-700/30 rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="font-display font-bold text-lg text-white">
                SLR GRAPHICS COLOR SYSTEM
              </h3>
              <p className="text-xs text-purple-300/70">
                Crafted to maintain strict visual consistency across physical and digital mediums
              </p>
            </div>
            <div className="text-xs font-mono px-3 py-1.5 rounded-lg bg-[#120A24] text-purple-200 border border-purple-700/40">
              Ratio: 60% Dark Purple • 25% White • 10% Violet • 5% Bright Violet
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {brandPalette.map((color) => (
              <div
                key={color.hex}
                className="rounded-xl overflow-hidden border border-purple-800/50 bg-[#120A24] p-4 flex flex-col justify-between"
              >
                <div 
                  className="h-14 rounded-lg w-full mb-3 flex items-end p-2.5 shadow-inner"
                  style={{ backgroundColor: color.hex }}
                >
                  <span className={`text-[11px] font-mono font-bold ${color.textColor} drop-shadow-sm`}>
                    {color.percentage}
                  </span>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-white">{color.name}</h4>
                    <span className="text-[10px] font-mono text-purple-300">{color.hex}</span>
                  </div>
                  <p className="text-[11px] text-purple-300/70 mt-0.5">{color.usage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
