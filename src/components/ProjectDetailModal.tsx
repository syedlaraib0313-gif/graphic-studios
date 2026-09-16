import { X, CheckCircle2, ArrowRight, ExternalLink } from 'lucide-react';
import { PortfolioProject } from '../types';

interface ProjectDetailModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
  onRequestSimilar: (projectTitle: string) => void;
}

export default function ProjectDetailModal({ project, onClose, onRequestSimilar }: ProjectDetailModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#0E071A]/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-[#1B1035] border border-purple-600/40 rounded-3xl shadow-2xl shadow-purple-950/80 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-[#120A24]/90 text-purple-200 hover:text-white border border-purple-500/30 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Cover Image */}
        <div className="relative h-72 sm:h-96 w-full bg-[#120A24] overflow-hidden">
          <img
            src={project.mockupImage}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1B1035] via-[#1B1035]/40 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full bg-[#7C3AED] text-white text-[11px] font-bold tracking-wider uppercase">
                {project.category}
              </span>
              <span className="px-3 py-1 rounded-full bg-[#241647]/90 text-purple-300 text-[11px] font-medium border border-purple-500/30">
                {project.year} Case Study
              </span>
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm text-purple-200 font-medium">
              Client: {project.client}
            </p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Services Provided Badges */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-purple-300 uppercase mb-3">
              Services Provided
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.services.map((srv, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-lg bg-[#241647] border border-purple-600/30 text-xs font-semibold text-white"
                >
                  {srv}
                </span>
              ))}
            </div>
          </div>

          {/* Project Summary & Narrative */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-purple-300 uppercase mb-2">
              Overview & Creative Challenge
            </h4>
            <p className="text-sm sm:text-base text-purple-100/90 leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Color Palette Swatches */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-purple-300 uppercase mb-3">
              Project Color Palette
            </h4>
            <div className="flex flex-wrap items-center gap-3">
              {project.palette.map((hex, i) => (
                <div key={i} className="flex items-center gap-2 bg-[#120A24] px-3 py-1.5 rounded-lg border border-purple-800/50">
                  <span 
                    className="w-5 h-5 rounded-md border border-white/20 shadow-sm"
                    style={{ backgroundColor: hex }}
                  />
                  <span className="text-xs font-mono text-purple-200">{hex}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Deliverables */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-purple-300 uppercase mb-3">
              Final Deliverables Produced
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.deliverables.map((del, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-purple-200 bg-[#120A24]/60 p-3 rounded-xl border border-purple-800/30">
                  <CheckCircle2 className="w-4 h-4 text-[#A855F7] shrink-0 mt-0.5" />
                  <span>{del}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Gallery images */}
          {project.galleryImages && project.galleryImages.length > 1 && (
            <div>
              <h4 className="text-xs font-bold tracking-widest text-purple-300 uppercase mb-3">
                Visual Assets & Mockup Details
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.galleryImages.slice(1).map((imgUrl, index) => (
                  <div key={index} className="rounded-xl overflow-hidden border border-purple-800/40 h-52 bg-[#120A24]">
                    <img 
                      src={imgUrl} 
                      alt={`${project.title} detail ${index + 1}`} 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Modal Footer CTA */}
          <div className="pt-6 border-t border-purple-800/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-purple-300">
              Inspired by this work? We can create a tailored visual solution for your brand.
            </div>
            <button
              onClick={() => {
                onClose();
                onRequestSimilar(project.title);
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#A855F7] text-white font-bold text-xs tracking-wider uppercase hover:brightness-110 shadow-lg shadow-purple-900/40 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>REQUEST SIMILAR DESIGN</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
