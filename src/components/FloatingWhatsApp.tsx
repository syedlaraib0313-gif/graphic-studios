import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { STUDIO_CONTACT } from '../data/studioData';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Mini Dismissible Tooltip */}
      {showTooltip && (
        <div className="bg-[#120A24] border border-emerald-500/40 text-white text-xs px-3.5 py-2 rounded-2xl shadow-xl backdrop-blur-md flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
          <span>Chat directly: <strong>7004953962</strong></span>
          <button 
            onClick={() => setShowTooltip(false)}
            className="text-purple-400 hover:text-white ml-1"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={STUDIO_CONTACT.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-2xl shadow-emerald-950/70 hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-emerald-300/40 group"
        aria-label="Chat with SLR GRAPHICS on WhatsApp"
        title="WhatsApp: 7004953962"
      >
        <MessageCircle className="w-7 h-7 group-hover:rotate-12 transition-transform" />
      </a>
    </div>
  );
}
