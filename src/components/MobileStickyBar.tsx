import React from 'react';
import { Phone, ArrowRight, MessageSquare } from 'lucide-react';

interface MobileStickyBarProps {
  onOpenEstimate: () => void;
  onOpenChat: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenEstimate, onOpenChat }) => {
  const whatsappUrl = `https://wa.me/19417049081?text=${encodeURIComponent(
    "Hi 2nd Gen Roofing, I found your website and I'd like to ask about my roofing project."
  )}`;

  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 shadow-2xl safe-area-bottom">
      <div className="grid grid-cols-3 gap-2 items-center">
        
        {/* Button 1: Call */}
        <a
          href="tel:9417049081"
          className="flex flex-col items-center justify-center py-2 px-1 bg-amber-500 hover:bg-amber-400 active:scale-95 text-slate-950 rounded-xl transition-all shadow-xs"
        >
          <Phone className="w-4 h-4 mb-0.5" />
          <span className="text-[11px] font-black leading-tight">CALL</span>
        </a>

        {/* Button 2: WhatsApp */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 bg-[#25D366] hover:bg-[#20bd5a] active:scale-95 text-white rounded-xl transition-all shadow-xs"
        >
          <svg className="w-4 h-4 mb-0.5 fill-current" viewBox="0 0 24 24">
            <path d="M12.031 2C6.495 2 2 6.505 2 12.046c0 1.995.586 3.864 1.603 5.441L2 22.046l4.721-1.545a10.02 10.02 0 0 0 5.31 1.545c5.536 0 10.031-4.505 10.031-10.046C22.062 6.505 17.567 2 12.031 2zm0 18.297c-1.637 0-3.21-.444-4.577-1.285l-.328-.202-3.003.983.998-2.915-.224-.356A8.196 8.196 0 0 1 3.844 12.046c0-4.516 3.673-8.197 8.187-8.197 4.514 0 8.187 3.681 8.187 8.197 0 4.516-3.673 8.251-8.187 8.251z" />
          </svg>
          <span className="text-[11px] font-black leading-tight">WHATSAPP</span>
        </a>

        {/* Button 3: Get Estimate */}
        <button
          type="button"
          onClick={onOpenEstimate}
          className="flex flex-col items-center justify-center py-2 px-1 bg-[#0b2341] hover:bg-[#12365e] active:scale-95 text-white rounded-xl transition-all shadow-xs"
        >
          <ArrowRight className="w-4 h-4 mb-0.5 text-amber-400" />
          <span className="text-[11px] font-black leading-tight">ESTIMATE</span>
        </button>

      </div>
    </div>
  );
};
