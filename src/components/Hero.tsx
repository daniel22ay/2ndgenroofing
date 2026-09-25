import React from 'react';
import { Phone, ArrowRight, Shield, Star, CheckCircle, MessageSquareText, Calendar, Sparkles } from 'lucide-react';
import { tileRoofImg, shingleRoofImg } from '../assets/images';

interface HeroProps {
  onOpenEstimate: () => void;
  onOpenChat: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEstimate, onOpenChat }) => {
  return (
    <section id="hero" className="relative bg-gradient-to-b from-[#07172b] via-[#0b2341] to-[#0e2d53] text-white pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
      {/* Subtle Florida sunshine ambient gradient */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 left-0 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Core Positioning & Conversions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-amber-400/30 text-amber-300 text-xs font-semibold shadow-inner">
              <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-ping" />
              <span>Sarasota & Bradenton's Roofing Professionals</span>
              <span className="text-slate-400">•</span>
              <span>Lic. #CCC1333718</span>
            </div>

            {/* Primary Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
              Two Generations of{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200">
                Florida Roofing
              </span>{' '}
              Experience.
            </h1>

            {/* Supporting Copy */}
            <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Family-owned and operated roofing professionals rooted in Florida's Gulf Coast.
              From coastal tile and architectural shingle replacements to fast, reliable leak repairs,
              our father-and-son team delivers unmatched local knowledge, clear communication, and guaranteed workmanship.
            </p>

            {/* Quick Benefits Bullet List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 max-w-xl mx-auto lg:mx-0 text-left text-sm text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Direct Owner Supervision on Every Job</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Zero Pressure • Transparent Written Quotes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Shingle, Tile, Metal & Low-Slope Reroofs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Hearth Low-Payment Financing Available</span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              {/* Primary CTA */}
              <button
                onClick={onOpenEstimate}
                className="w-full sm:w-auto px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-base rounded-xl shadow-lg hover:shadow-amber-500/25 transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center gap-3 border border-amber-300"
              >
                <span>REQUEST YOUR FREE ESTIMATE</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              {/* Secondary CTA */}
              <a
                href="tel:9417049081"
                className="w-full sm:w-auto px-6 py-4 bg-slate-800/90 hover:bg-slate-700/90 text-white font-bold text-base rounded-xl border border-slate-600/70 hover:border-slate-500 transition-all duration-200 flex items-center justify-center gap-2.5 shadow-xs"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>(941) 704-9081</span>
              </a>

              {/* Chat CTA */}
              <button
                onClick={onOpenChat}
                className="w-full sm:w-auto px-5 py-3.5 bg-white/10 hover:bg-white/15 text-slate-200 font-semibold text-sm rounded-xl border border-white/20 transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquareText className="w-4 h-4 text-emerald-400" />
                <span>Chat With Us</span>
              </button>
            </div>

            {/* Social Proof Mini Bar */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-300 border-t border-slate-700/60 mt-6">
              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-white">5.0 Star Rating</span>
                <span className="text-slate-400">(Google & Angi)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-amber-400" />
                <span>Nextdoor Fave 3 Years</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Free On-Site Consultations</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual High-Impact Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Featured Photo Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-700/60 group">
                <img
                  src={tileRoofImg}
                  alt="2nd Gen Roofing tile roof replacement in Sarasota Florida"
                  className="w-full h-80 sm:h-96 object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                
                {/* Overlay Badge */}
                <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-amber-400/30 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-xs font-semibold text-white">Sarasota Barrel Tile Reroof</span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-slate-700">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-amber-400 uppercase tracking-wider">Two Generations at Work</p>
                      <p className="text-sm font-extrabold text-white mt-0.5">Alejandro & AJ Amaya On-Site</p>
                      <p className="text-xs text-slate-300">Palmer Ranch, Sarasota • Full Spanish Tile Replacement</p>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-amber-500/20 text-amber-300 rounded border border-amber-400/30 shrink-0">
                      100% Passed Code
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Secondary Mini Project Card */}
              <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-white text-slate-900 p-3.5 rounded-xl shadow-xl border border-slate-200 items-center gap-3 z-20 max-w-xs animate-fade-in">
                <img
                  src={shingleRoofImg}
                  alt="Architectural shingle roof installation"
                  className="w-14 h-14 rounded-lg object-cover border border-slate-200 shrink-0"
                />
                <div>
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-500" />
                    ))}
                  </div>
                  <p className="text-xs font-bold text-slate-900 mt-0.5">"Fixed next day, zero hassle"</p>
                  <p className="text-[11px] text-slate-500">Bradenton Homeowner • Verified Angi Review</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
