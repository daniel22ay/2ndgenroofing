import React from 'react';
import { Award, ShieldCheck, Clock, MessageSquare, Compass, CheckCircle2 } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const differentiators = [
    {
      icon: Award,
      title: 'Experience',
      badge: 'Two Generations',
      description:
        'Two generations of hands-on roofing expertise, with a third generation preparing to continue the family tradition. We have worked Florida roofs through every kind of weather, mastering the nuances of coastal installations.',
    },
    {
      icon: ShieldCheck,
      title: 'Quality',
      badge: 'Certified Craftsmanship',
      description:
        'We install manufacturer-certified systems with high-temp underlayment, hurricane-rated fastening schedules, and premium brand shingles and tiles from GAF, Atlas, and Eagle.',
    },
    {
      icon: Clock,
      title: 'Reliability',
      badge: 'On-Time & Dependable',
      description:
        'When we say we will be there, we show up. From prompt inspections to daily progress updates and thorough magnetic cleanup to protect your tires and pets, we respect your home.',
    },
    {
      icon: MessageSquare,
      title: 'Customer Focus',
      badge: 'No-Surprise Pricing',
      description:
        'Direct, honest communication from the owner team. We explain your roof’s true condition in plain English, never push unnecessary full replacements when a repair is sound, and stick to our written quotes.',
    },
    {
      icon: Compass,
      title: 'Local Knowledge',
      badge: 'Gulf Coast Specialists',
      description:
        'Deep understanding of Sarasota and Manatee County building codes, hurricane wind zones, high thermal expansion, and salt-air corrosion resistance that out-of-town storm chasers simply don’t possess.',
    },
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0b2341]/10 text-[#0b2341] text-xs font-bold uppercase tracking-wider mb-3">
            <span>The 2nd Gen Difference</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0b2341] tracking-tight">
            Why Sarasota & Bradenton Homeowners Trust 2nd Gen Roofing
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            We are not a franchise or an anonymous sales brokerage. We are a Florida family roofing company
            whose name and personal reputation are on every roof we touch.
          </p>
        </div>

        {/* 5 Distinct Differentiator Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-slate-50 rounded-2xl p-7 border border-slate-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#0b2341] text-amber-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-700 bg-amber-100/80 px-2.5 py-1 rounded-md">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-[#0b2341] mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Backed by FL License CCC1333718</span>
                </div>
              </div>
            );
          })}

          {/* 6th Card: Direct Owner Involvement Banner */}
          <div className="bg-gradient-to-br from-[#0b2341] to-[#12365e] rounded-2xl p-7 text-white flex flex-col justify-between shadow-md">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-amber-400 block mb-2">
                Personal Commitment
              </span>
              <h3 className="text-2xl font-black mb-3">Direct Father & Son Oversight</h3>
              <p className="text-slate-200 text-sm leading-relaxed">
                When you choose 2nd Gen Roofing, Alejandro and AJ Amaya are personally involved in your project.
                From estimating and permitting to final inspection walk-through, you work directly with decision-makers who care.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-700/80 flex items-center justify-between text-xs">
              <span className="font-bold text-amber-300">Alejandro & AJ Amaya</span>
              <span className="text-slate-300">Owners & Craftsmen</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
