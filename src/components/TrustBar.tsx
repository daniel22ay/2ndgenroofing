import React from 'react';
import { ShieldCheck, Award, Heart, Star, CheckCircle2, DollarSign, Building2 } from 'lucide-react';

export const TrustBar: React.FC = () => {
  return (
    <section className="bg-[#0b2341] text-white border-y border-amber-500/20 py-8 relative overflow-hidden">
      {/* Background subtle geometric accents */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-amber-400 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-sky-400 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wide uppercase">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>Verified Florida Roofing Contractor • License CCC1333718</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-2 tracking-tight">
            Rooted in Trust. Backed by Two Generations of Craftsmanship.
          </h2>
        </div>

        {/* 6 Grid Trust Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {/* Card 1: Family Legacy */}
          <div className="bg-[#10335e]/80 border border-slate-700/60 hover:border-amber-500/40 p-4 rounded-xl flex flex-col items-center text-center transition-all duration-200 hover:-translate-y-0.5">
            <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 mb-2">
              <Award className="w-5 h-5" />
            </div>
            <span className="font-extrabold text-sm text-white">2 Generations</span>
            <span className="text-xs text-slate-300 mt-0.5">Florida Roofers (+ 3rd Gen preparing)</span>
          </div>

          {/* Card 2: License */}
          <div className="bg-[#10335e]/80 border border-slate-700/60 hover:border-amber-500/40 p-4 rounded-xl flex flex-col items-center text-center transition-all duration-200 hover:-translate-y-0.5">
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-2">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <span className="font-extrabold text-sm text-white">CCC1333718</span>
            <span className="text-xs text-slate-300 mt-0.5">State Certified & Fully Insured</span>
          </div>

          {/* Card 3: Nextdoor Fave */}
          <div className="bg-[#10335e]/80 border border-slate-700/60 hover:border-amber-500/40 p-4 rounded-xl flex flex-col items-center text-center transition-all duration-200 hover:-translate-y-0.5">
            <div className="w-10 h-10 rounded-full bg-rose-500/20 flex items-center justify-center text-rose-400 mb-2">
              <Heart className="w-5 h-5" />
            </div>
            <span className="font-extrabold text-sm text-white">Neighborhood Fave</span>
            <span className="text-xs text-slate-300 mt-0.5">Voted 3 Years in a Row</span>
          </div>

          {/* Card 4: Google & Angi */}
          <div className="bg-[#10335e]/80 border border-slate-700/60 hover:border-amber-500/40 p-4 rounded-xl flex flex-col items-center text-center transition-all duration-200 hover:-translate-y-0.5">
            <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 mb-2">
              <Star className="w-5 h-5 fill-amber-400" />
            </div>
            <span className="font-extrabold text-sm text-white">5.0 Star Rated</span>
            <span className="text-xs text-slate-300 mt-0.5">Google & Angi Approved (98% Recommend)</span>
          </div>

          {/* Card 5: Local Coverage */}
          <div className="bg-[#10335e]/80 border border-slate-700/60 hover:border-amber-500/40 p-4 rounded-xl flex flex-col items-center text-center transition-all duration-200 hover:-translate-y-0.5">
            <div className="w-10 h-10 rounded-full bg-sky-500/20 flex items-center justify-center text-sky-400 mb-2">
              <Building2 className="w-5 h-5" />
            </div>
            <span className="font-extrabold text-sm text-white">Sarasota & Manatee</span>
            <span className="text-xs text-slate-300 mt-0.5">Two Local Gulf Coast Offices</span>
          </div>

          {/* Card 6: Financing */}
          <div className="bg-[#10335e]/80 border border-slate-700/60 hover:border-amber-500/40 p-4 rounded-xl flex flex-col items-center text-center transition-all duration-200 hover:-translate-y-0.5">
            <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 mb-2">
              <DollarSign className="w-5 h-5" />
            </div>
            <span className="font-extrabold text-sm text-white">Hearth Financing</span>
            <span className="text-xs text-slate-300 mt-0.5">Up to $250k with Low Payments</span>
          </div>
        </div>

        {/* Association & Compliance Bar */}
        <div className="mt-6 pt-5 border-t border-slate-700/50 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs text-slate-300">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            <span>FRSA Member (Florida Roofing & Sheet Metal Association)</span>
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            <span>BBB A+ Rating</span>
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            <span>Direct Father & Son Job Supervision</span>
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            <span>Clean Site Guarantee & Magnetic Sweep</span>
          </span>
        </div>
      </div>
    </section>
  );
};
