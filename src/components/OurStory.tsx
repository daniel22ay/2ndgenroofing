import React from 'react';
import { Users, Award, Shield, HeartHandshake, CheckCircle2, Phone } from 'lucide-react';
import { tileRoofImg, repairImg } from '../assets/images';
import { Logo } from './Logo';

export const OurStory: React.FC = () => {
  return (
    <section id="story" className="py-20 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Family Workmanship Grid */}
          <div className="lg:col-span-5 space-y-4">
            {/* Official Logo Banner */}
            <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-sm">
              <Logo size="full" />
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <img
                src={tileRoofImg}
                alt="2nd Gen Roofing craftsmanship on Florida Gulf Coast"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="px-2.5 py-1 bg-amber-500 text-slate-950 text-xs font-black rounded uppercase tracking-wider">
                  Gulf Coast Heritage
                </span>
                <p className="text-sm font-bold text-white mt-1">
                  Rooted in Sarasota & Manatee County, Florida
                </p>
              </div>
            </div>

            {/* Dual quote callout */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0b2341] text-amber-400 flex items-center justify-center font-black text-sm shrink-0">
                  2G
                </div>
                <div>
                  <h4 className="font-extrabold text-[#0b2341] text-sm">Alejandro & AJ Amaya</h4>
                  <p className="text-xs text-slate-500">Father & Son • 2nd Gen Roofing LLC</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                "Our family has spent decades walking Florida roofs. We believe that when someone trusts us with their home, 
                they deserve direct communication, honest options, and a roof built to protect their family for decades."
              </p>
            </div>
          </div>

          {/* Right Column: The Family Narrative */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-800 text-xs font-bold uppercase tracking-wider border border-amber-500/20">
              <Users className="w-3.5 h-3.5 text-amber-600" />
              <span>Our Family Story</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-[#0b2341] tracking-tight leading-tight">
              Two Generations of Dedicated Florida Roofers. <br className="hidden sm:inline" />
              <span className="text-amber-600">With a Third Generation Coming Up.</span>
            </h2>

            <div className="space-y-4 text-slate-700 text-base leading-relaxed font-normal">
              <p>
                In an industry too often dominated by transient storm chasers and anonymous subcontractors, 
                <strong> 2nd Gen Roofing</strong> was built on a very different foundation: family legacy, deep local roots, 
                and honest, personal accountability.
              </p>
              <p>
                As a family-owned and operated team led by Alejandro Amaya and his son AJ, 2nd Gen Roofing represents 
                two generations of hands-on Florida roofing craft. From early mornings handling barrel tile on coastal 
                Sarasota rooftops to managing complex architectural shingle reroofs in Bradenton, our family has lived 
                and breathed Florida roofing.
              </p>
              <p>
                Even more meaningful, the <strong>third generation</strong> is already growing up around the business—learning 
                the values of hard work, integrity, clean job sites, and treating every neighbor's home with the same care 
                we would give our own.
              </p>
            </div>

            {/* Core Family Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-sm text-[#0b2341]">Real Family Pride</h5>
                  <p className="text-xs text-slate-500">The owners you speak with on day one are the ones overseeing your roof.</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-sm text-[#0b2341]">Decades on Florida Roofs</h5>
                  <p className="text-xs text-slate-500">Unmatched practical knowledge of Gulf Coast weather patterns and codes.</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-sm text-[#0b2341]">Neighborhood Accountability</h5>
                  <p className="text-xs text-slate-500">Voted Nextdoor Neighborhood Fave 3 years running by our actual neighbors.</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-sm text-[#0b2341]">No High-Pressure Sales</h5>
                  <p className="text-xs text-slate-500">Straight answers, fair options, and transparent written estimates.</p>
                </div>
              </div>
            </div>

            {/* Owner Signature Bar */}
            <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">License Number:</span>
                <span className="text-sm font-extrabold text-[#0b2341]">Florida Certified CCC1333718</span>
              </div>
              <a
                href="tel:9417049081"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#0b2341] hover:bg-[#12365e] text-white font-bold text-xs rounded-lg transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Talk with Alejandro or AJ: (941) 704-9081</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
