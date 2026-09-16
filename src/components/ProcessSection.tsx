import { useState } from 'react';
import { 
  RotateCw, 
  Search, 
  Lightbulb, 
  PenTool, 
  SlidersHorizontal, 
  Send,
  ArrowRight,
  Check
} from 'lucide-react';
import { PROCESS_STEPS } from '../data/studioData';

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Search className="w-5 h-5 text-[#A855F7]" />;
      case 1:
        return <Lightbulb className="w-5 h-5 text-[#A855F7]" />;
      case 2:
        return <PenTool className="w-5 h-5 text-[#A855F7]" />;
      case 3:
        return <SlidersHorizontal className="w-5 h-5 text-[#A855F7]" />;
      case 4:
        return <Send className="w-5 h-5 text-[#A855F7]" />;
      default:
        return <RotateCw className="w-5 h-5 text-[#A855F7]" />;
    }
  };

  return (
    <section id="process" className="relative py-24 bg-[#140C28] border-t border-purple-900/30 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#7C3AED]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#241647] border border-purple-600/30 text-[#A855F7] text-xs font-bold tracking-widest uppercase mb-4">
            <RotateCw className="w-3.5 h-3.5" />
            <span>HOW WE WORK</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight mb-4">
            OUR 5-STEP DESIGN PROCESS
          </h2>

          <p className="text-sm sm:text-base text-purple-200/80 max-w-xl mx-auto leading-relaxed">
            A battle-tested creative methodology that eliminates guesswork and consistently delivers standout visual identities on time.
          </p>
        </div>

        {/* 5-Step Horizontal Navigation Bar on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-10">
          {PROCESS_STEPS.map((step, idx) => {
            const isCurrent = activeStep === idx;
            return (
              <button
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-2xl text-left border transition-all duration-200 cursor-pointer ${
                  isCurrent
                    ? 'bg-[#7C3AED] border-[#A855F7] shadow-lg shadow-purple-900/50 scale-[1.02]'
                    : 'bg-[#1B1035] border-purple-800/40 hover:bg-[#241647] text-purple-200'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-mono font-extrabold ${isCurrent ? 'text-purple-200' : 'text-purple-400'}`}>
                    {step.number}
                  </span>
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${isCurrent ? 'bg-white/20 text-white' : 'bg-[#120A24]'}`}>
                    {getStepIcon(idx)}
                  </div>
                </div>
                <div className="font-display font-bold text-sm text-white uppercase tracking-wider">
                  {step.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Active Step Focus Card */}
        <div className="bg-[#1B1035] border border-purple-700/40 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden mb-12">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#A855F7]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-display font-extrabold text-3xl sm:text-4xl text-[#A855F7]">
                  {PROCESS_STEPS[activeStep].number}
                </span>
                <span className="w-2 h-2 rounded-full bg-purple-400" />
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white uppercase tracking-wide">
                  {PROCESS_STEPS[activeStep].title}
                </h3>
              </div>

              <p className="text-base sm:text-lg text-purple-100 font-medium mb-3">
                {PROCESS_STEPS[activeStep].subtitle}
              </p>

              <p className="text-sm sm:text-base text-purple-200/80 leading-relaxed mb-6">
                {PROCESS_STEPS[activeStep].description}
              </p>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#120A24] border border-purple-800/60 text-xs text-purple-200">
                <span className="font-bold text-[#A855F7] uppercase tracking-wider">Key Deliverable:</span>
                <span>{PROCESS_STEPS[activeStep].keyDeliverable}</span>
              </div>
            </div>

            {/* Step Controls */}
            <div className="flex items-center gap-3 self-end lg:self-center">
              <button
                onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : PROCESS_STEPS.length - 1))}
                className="px-4 py-2.5 rounded-xl bg-[#241647] hover:bg-[#7C3AED] text-purple-200 hover:text-white border border-purple-600/30 text-xs font-bold transition-colors cursor-pointer"
              >
                PREVIOUS
              </button>
              <button
                onClick={() => setActiveStep((prev) => (prev < PROCESS_STEPS.length - 1 ? prev + 1 : 0))}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#A855F7] text-white text-xs font-bold tracking-wider uppercase hover:brightness-110 shadow-md flex items-center gap-1.5 cursor-pointer"
              >
                <span>NEXT STEP</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* 5-Step Visual Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {PROCESS_STEPS.map((step, idx) => (
            <div 
              key={idx}
              className="bg-[#120A24]/60 border border-purple-900/40 rounded-2xl p-4 flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-mono font-bold text-[#A855F7] mb-1">
                  {step.number}
                </div>
                <h4 className="font-display font-bold text-sm text-white mb-2 uppercase">
                  {step.title}
                </h4>
                <p className="text-[11px] text-purple-200/70 leading-relaxed mb-3">
                  {step.description}
                </p>
              </div>
              <div className="text-[10px] text-purple-400 font-mono pt-2 border-t border-purple-900/40">
                Phase 0{idx + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
