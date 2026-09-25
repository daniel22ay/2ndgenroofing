import React from 'react';
import { Phone, Mail, MapPin, Shield, Clock, MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';
import { LeadForm } from './LeadForm';

interface ContactSectionProps {
  onOpenChat: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenChat }) => {
  const whatsappUrl = `https://wa.me/19417049081?text=${encodeURIComponent(
    "Hi 2nd Gen Roofing, I found your website and I'd like to ask about my roofing project."
  )}`;

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Business Details & Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-500/30">
              <Shield className="w-3.5 h-3.5 text-amber-400" />
              <span>Contact 2nd Gen Roofing</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              Let's Talk About Your Roof. <br />
              <span className="text-amber-400">Two Generations Ready to Help.</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Have questions about a leak, considering an architectural shingle or tile replacement, 
              or need an honest second opinion? Reach out directly to Alejandro and AJ Amaya today.
            </p>

            {/* Direct Contact Methods Cards */}
            <div className="space-y-3 pt-2">
              
              {/* Phone */}
              <a
                href="tel:9417049081"
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-800/90 border border-slate-700 hover:border-amber-400 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block">
                    Direct Phone Line
                  </span>
                  <span className="text-lg font-black text-white group-hover:text-amber-300 transition-colors">
                    (941) 704-9081
                  </span>
                  <span className="text-[11px] text-slate-400 block mt-0.5">
                    Click to call Alejandro or AJ
                  </span>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:info@2ndgenroofing.com"
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-800/90 border border-slate-700 hover:border-amber-400 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-700 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    Official Email
                  </span>
                  <span className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                    info@2ndgenroofing.com
                  </span>
                  <span className="text-[11px] text-slate-400 block mt-0.5">
                    Prompt response within 1 business day
                  </span>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#25D366]/15 border border-[#25D366]/40 hover:border-[#25D366] transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12.031 2C6.495 2 2 6.505 2 12.046c0 1.995.586 3.864 1.603 5.441L2 22.046l4.721-1.545a10.02 10.02 0 0 0 5.31 1.545c5.536 0 10.031-4.505 10.031-10.046C22.062 6.505 17.567 2 12.031 2zm0 18.297c-1.637 0-3.21-.444-4.577-1.285l-.328-.202-3.003.983.998-2.915-.224-.356A8.196 8.196 0 0 1 3.844 12.046c0-4.516 3.673-8.197 8.187-8.197 4.514 0 8.187 3.681 8.187 8.197 0 4.516-3.673 8.251-8.187 8.251z" />
                  </svg>
                </div>
                <div>
                  <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block">
                    WhatsApp Chat
                  </span>
                  <span className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                    Chat on WhatsApp: (941) 704-9081
                  </span>
                  <span className="text-[11px] text-slate-400 block mt-0.5">
                    Fast messaging & project photo sharing
                  </span>
                </div>
              </a>

            </div>

            {/* Office Locations */}
            <div className="bg-slate-800/60 p-5 rounded-2xl border border-slate-700 space-y-3">
              <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                Operating Locations in Florida:
              </h4>
              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Sarasota:</strong> 2237 Industrial Blvd Unit A, Sarasota, FL 34234-3119</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Bradenton:</strong> 407 52nd Avenue Plz W, Bradenton, FL 34207-2945</span>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Hours:</strong> Mon - Fri: 7:30 AM – 6:00 PM • Sat by appointment</span>
                </div>
              </div>
            </div>

            {/* Chatbot Trigger Pill */}
            <button
              onClick={onOpenChat}
              className="w-full py-3 px-4 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl border border-slate-700 text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Have a quick question? Ask our 2nd Gen AI Assistant</span>
            </button>

          </div>

          {/* Right Column: Embedded Lead Form */}
          <div className="lg:col-span-7">
            <LeadForm />
          </div>

        </div>

      </div>
    </section>
  );
};
