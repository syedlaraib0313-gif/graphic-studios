import { useId } from 'react';

interface SLRLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showTagline?: boolean;
  className?: string;
  variant?: 'full' | 'mark-only' | 'stacked';
}

export default function SLRLogo({
  size = 'md',
  showTagline = true,
  className = '',
  variant = 'full',
}: SLRLogoProps) {
  const uid = useId().replace(/:/g, '-');
  const isStacked = variant === 'stacked';

  // Dimensions mapping
  const iconDimensions = {
    sm: { box: 'w-9 h-9', textTitle: 'text-lg', textSub: 'text-[9px]' },
    md: { box: 'w-11 h-11', textTitle: 'text-xl', textSub: 'text-[10px]' },
    lg: { box: 'w-14 h-14', textTitle: 'text-2xl', textSub: 'text-xs' },
    hero: { box: 'w-20 h-20', textTitle: 'text-3xl sm:text-4xl', textSub: 'text-xs' },
  }[size];

  return (
    <div
      className={`flex ${isStacked ? 'flex-col items-center text-center' : 'items-center'} gap-3 group select-none ${className}`}
    >
      {/* Precision Geometric SVG Emblem */}
      <div
        className={`relative ${iconDimensions.box} rounded-2xl bg-gradient-to-br from-[#241647] via-[#1B1035] to-[#120A24] border border-[#A855F7]/40 p-1 flex items-center justify-center shadow-lg shadow-purple-950/60 group-hover:border-[#A855F7] group-hover:shadow-purple-700/40 transition-all duration-300 group-hover:scale-105 shrink-0 overflow-hidden`}
      >
        {/* Ambient background glow inside badge */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#7C3AED]/30 via-transparent to-[#A855F7]/20 opacity-80 group-hover:opacity-100 transition-opacity" />

        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full relative z-10 drop-shadow-[0_2px_8px_rgba(124,58,237,0.5)]"
        >
          <defs>
            {/* Unique IDs via useId */}
            <linearGradient id={`slr-main-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="35%" stopColor="#C084FC" />
              <stop offset="80%" stopColor="#7C3AED" />
              <stop offset="100%" stopColor="#581C87" />
            </linearGradient>

            <linearGradient id={`slr-accent-${uid}`} x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F3E8FF" />
              <stop offset="50%" stopColor="#A855F7" />
              <stop offset="100%" stopColor="#7C3AED" />
            </linearGradient>

            <filter id={`slr-glow-${uid}`} x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Background Technical Geometry Grid Lines (Subtle Precision Ring) */}
          <circle cx="50" cy="50" r="42" stroke="#A855F7" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.35" />
          <circle cx="50" cy="50" r="30" stroke="#7C3AED" strokeWidth="0.6" opacity="0.25" />

          {/* SLR Monogram Vector Geometry */}
          {/* S - Upper Dynamic Ribbon */}
          <path
            d="M 68 26 C 68 26 53 19 38 23 C 27 26 23 35 28 43 C 33 50 49 51 58 55 C 69 59 71 70 64 77 C 56 85 37 84 29 78"
            stroke={`url(#slr-main-${uid})`}
            strokeWidth="8.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* L - Foundation Horizontal & Vertical Spine */}
          <path
            d="M 28 28 L 28 72 L 48 72"
            stroke={`url(#slr-accent-${uid})`}
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.95"
          />

          {/* R - Upper Loop & Dynamic Kick */}
          <path
            d="M 48 42 C 58 42 66 36 64 28 C 62 21 54 20 46 22 M 52 46 L 68 72"
            stroke={`url(#slr-main-${uid})`}
            strokeWidth="7.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Center Aperture / Focus Sparkle Core */}
          <path
            d="M 50 40 L 52.5 47.5 L 60 50 L 52.5 52.5 L 50 60 L 47.5 52.5 L 40 50 L 47.5 47.5 Z"
            fill="#FFFFFF"
            filter={`url(#slr-glow-${uid})`}
          />

          {/* Precision Dot Accent */}
          <circle cx="73" cy="24" r="3.5" fill="#A855F7" />
          <circle cx="73" cy="24" r="1.5" fill="#FFFFFF" />
        </svg>
      </div>

      {/* Typography Wordmark (SLR GRAPHICS) */}
      {variant !== 'mark-only' && (
        <div className={`flex flex-col leading-tight ${isStacked ? 'items-center' : ''}`}>
          <div className="flex items-center gap-2">
            <span
              className={`font-display font-black tracking-[0.12em] text-white ${iconDimensions.textTitle} group-hover:text-purple-100 transition-colors drop-shadow-sm`}
            >
              SLR <span className="bg-gradient-to-r from-purple-200 via-white to-[#A855F7] bg-clip-text text-transparent">GRAPHICS</span>
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#A855F7] group-hover:scale-125 transition-transform animate-pulse" />
          </div>

          {showTagline && (
            <div className={`flex items-center gap-2 mt-0.5 ${isStacked ? 'justify-center' : ''}`}>
              <span
                className={`font-mono font-semibold tracking-[0.28em] text-purple-300/80 uppercase ${iconDimensions.textSub}`}
              >
                CREATIVE STUDIO
              </span>
              <span className="text-[9px] text-[#A855F7]/60">•</span>
              <span className="text-[9px] font-mono text-purple-400/70 tracking-wider">
                EST. 2026
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
