import { useState } from 'react';
import { 
  Palette, 
  ArrowUpRight, 
  ExternalLink, 
  Eye, 
  Sparkles,
  Layers
} from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData';
import { PortfolioCategory, PortfolioProject } from '../types';

interface PortfolioSectionProps {
  onSelectProject: (project: PortfolioProject) => void;
}

export default function PortfolioSection({ onSelectProject }: PortfolioSectionProps) {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('ALL');

  const categories: PortfolioCategory[] = [
    'ALL',
    'BRANDING',
    'SOCIAL MEDIA',
    'PRINT',
    'PACKAGING',
    'ADVERTISING'
  ];

  const filteredProjects = activeCategory === 'ALL'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="relative py-24 bg-[#140C28] border-t border-purple-900/30 overflow-hidden">
      {/* Background illumination */}
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-[#A855F7]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-[#7C3AED]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#241647] border border-purple-600/30 text-[#A855F7] text-xs font-bold tracking-widest uppercase mb-4">
              <Layers className="w-3.5 h-3.5" />
              <span>PORTFOLIO</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight mb-3">
              OUR CREATIVE WORK
            </h2>

            <p className="text-sm sm:text-base text-purple-200/80 max-w-xl leading-relaxed">
              Curated case studies exhibiting identity systems, tactical advertising campaigns, packaging architectures, and high-impact print collateral.
            </p>
          </div>

          <div className="text-xs text-purple-300 font-mono bg-[#1B1035] px-4 py-2 rounded-xl border border-purple-800/50 self-start md:self-end">
            Showing <strong className="text-white">{filteredProjects.length}</strong> Selected Case Studies
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-purple-900/40 pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold tracking-wider transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#7C3AED] text-white shadow-lg shadow-purple-900/50 scale-105'
                  : 'bg-[#1B1035] text-purple-300/80 border border-purple-800/40 hover:bg-[#241647] hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group bg-[#1B1035] border border-purple-800/40 hover:border-[#A855F7]/60 rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-purple-950/50 flex flex-col cursor-pointer"
            >
              {/* Image Container with Mockup */}
              <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-[#120A24]">
                <img
                  src={project.mockupImage}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                
                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B1035] via-transparent to-transparent opacity-80" />

                {/* Floating Category Tag */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#120A24]/90 backdrop-blur-md text-[11px] font-bold tracking-wider text-purple-200 uppercase border border-purple-500/30 shadow-md">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="px-2.5 py-1 rounded-full bg-[#7C3AED] text-[10px] font-extrabold tracking-wider text-white uppercase flex items-center gap-1 shadow-md">
                      <Sparkles className="w-2.5 h-2.5" /> Featured
                    </span>
                  )}
                </div>

                {/* Hover Quick Action Badge */}
                <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-10 h-10 rounded-full bg-white text-[#1B1035] flex items-center justify-center shadow-xl">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  {/* Project Name & Client */}
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="font-display font-extrabold text-xl text-white group-hover:text-purple-200 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-purple-400 font-medium">
                        Concept / Client: {project.client}
                      </p>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-purple-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0 mt-1" />
                  </div>

                  {/* Services Provided String (e.g. Logo • Packaging • Menu • Social Media) */}
                  <div className="py-2 mb-3">
                    <div className="text-xs font-semibold text-[#A855F7] tracking-wide">
                      {project.services.join(' • ')}
                    </div>
                  </div>

                  {/* Short description */}
                  <p className="text-xs sm:text-sm text-purple-200/70 line-clamp-2 leading-relaxed mb-4">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Bottom Row with Palette Dots and View Case Study */}
                <div className="pt-4 border-t border-purple-800/40 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    {project.palette.map((color, i) => (
                      <span
                        key={i}
                        className="w-3.5 h-3.5 rounded-full border border-purple-900/50"
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>

                  <span className="text-xs font-bold tracking-wider text-purple-300 group-hover:text-white flex items-center gap-1">
                    VIEW CASE STUDY →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
