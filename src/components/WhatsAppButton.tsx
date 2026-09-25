import React, { useState } from 'react';
import { MessageCircle, CheckCircle2, ShieldAlert, X, ExternalLink } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  isConfirmed?: boolean;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber = '19417049081',
  isConfirmed = true,
}) => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [confirmedState, setConfirmedState] = useState(isConfirmed);

  const prefilledText = encodeURIComponent(
    "Hi 2nd Gen Roofing, I found your website and I'd like to ask about my roofing project."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${prefilledText}`;

  const handleClick = (e: React.MouseEvent) => {
    // If already verified or standard click, open directly
    if (confirmedState) {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    } else {
      e.preventDefault();
      setShowConfirmModal(true);
    }
  };

  return (
    <>
      {/* Floating Desktop WhatsApp Button (Placed on lower-left) */}
      <div className="fixed bottom-20 left-5 sm:bottom-22 sm:left-6 z-30 group hidden sm:block">
        <button
          onClick={handleClick}
          className="relative flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer border-2 border-white focus:outline-none"
          aria-label="Chat on WhatsApp with 2nd Gen Roofing"
          title="Chat with 2nd Gen Roofing on WhatsApp"
        >
          {/* Official WhatsApp SVG Icon */}
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M12.031 2C6.495 2 2 6.505 2 12.046c0 1.995.586 3.864 1.603 5.441L2 22.046l4.721-1.545a10.02 10.02 0 0 0 5.31 1.545c5.536 0 10.031-4.505 10.031-10.046C22.062 6.505 17.567 2 12.031 2zm0 18.297c-1.637 0-3.21-.444-4.577-1.285l-.328-.202-3.003.983.998-2.915-.224-.356A8.196 8.196 0 0 1 3.844 12.046c0-4.516 3.673-8.197 8.187-8.197 4.514 0 8.187 3.681 8.187 8.197 0 4.516-3.673 8.251-8.187 8.251zm4.767-6.079c-.261-.131-1.545-.762-1.785-.85-.24-.087-.414-.131-.588.131-.174.262-.676.85-.828 1.025-.153.175-.305.197-.567.066-.261-.131-1.103-.406-2.102-1.296-.777-.693-1.302-1.549-1.455-1.811-.153-.262-.016-.403.115-.534.118-.118.261-.306.393-.459.131-.153.175-.262.261-.437.087-.175.044-.328-.022-.459-.066-.131-.588-1.419-.807-1.944-.213-.51-.43-.44-.588-.448-.153-.008-.328-.01-.502-.01-.174 0-.458.066-.698.328-.24.262-.916.896-.916 2.185 0 1.289.938 2.534 1.069 2.709.131.175 1.846 2.819 4.474 3.953.625.27 1.113.432 1.493.553.628.2 1.2.171 1.652.104.504-.075 1.545-.633 1.763-1.245.218-.612.218-1.136.153-1.245-.065-.109-.24-.175-.502-.306z" />
          </svg>

          <span className="text-xs font-black tracking-wide pr-1">WhatsApp Us</span>

          {/* Verification indicator */}
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-300 animate-ping absolute -top-1 -right-1" />
        </button>
      </div>

      {/* Confirmation Modal if owner verification needed */}
      {showConfirmModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-emerald-600 font-black text-base">
                <CheckCircle2 className="w-5 h-5" />
                <span>WhatsApp Click-to-Chat</span>
              </div>
              <button
                onClick={() => setShowConfirmModal(false)}
                className="p-1 text-slate-400 hover:text-slate-600 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
              <p>
                <strong>2nd Gen Roofing Number:</strong> (941) 704-9081
              </p>
              <p>
                This button opens WhatsApp with our pre-filled message:
              </p>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 italic font-mono text-[11px] text-slate-700">
                "Hi 2nd Gen Roofing, I found your website and I'd like to ask about my roofing project."
              </div>
            </div>

            <div className="pt-2 flex items-center justify-end gap-2">
              <button
                onClick={() => setShowConfirmModal(false)}
                className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setConfirmedState(true);
                  setShowConfirmModal(false);
                  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
                }}
                className="px-5 py-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-black rounded-xl shadow-xs flex items-center gap-1.5"
              >
                <span>Launch WhatsApp</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
