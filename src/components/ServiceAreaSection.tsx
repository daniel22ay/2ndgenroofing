import React, { useState } from 'react';
import { MapPin, Navigation, Phone, CheckCircle2, Building, Shield } from 'lucide-react';

interface ServiceAreaSectionProps {
  onOpenEstimate: () => void;
}

export const ServiceAreaSection: React.FC<ServiceAreaSectionProps> = ({ onOpenEstimate }) => {
  const [selectedCity, setSelectedCity] = useState<string>('Sarasota');

  const communities = [
    { name: 'Sarasota', county: 'Sarasota County', highlight: 'Downtown, Palmer Ranch, Gulf Gate, Siesta Key, Bird Key' },
    { name: 'Bradenton', county: 'Manatee County', highlight: 'River District, Lakewood Ranch, West Bradenton, Palma Sola' },
    { name: 'North Port', county: 'Sarasota County', highlight: 'Wellen Park, Heron Creek, Warm Mineral Springs' },
    { name: 'Venice', county: 'Sarasota County', highlight: 'Venice Island, South Venice, Venice Gardens' },
    { name: 'Osprey', county: 'Sarasota County', highlight: 'The Oaks, Blackburn Point, Coastal Estuaries' },
    { name: 'Palmetto', county: 'Manatee County', highlight: 'Historic Palmetto, Terra Ceia, Snead Island' },
    { name: 'Parrish', county: 'Manatee County', highlight: 'Foxbrook, Silverleaf, River’s Reach' },
    { name: 'Ruskin', county: 'South Shore / Suncoast', highlight: 'Little Harbor, Bahia Lakes, Shell Point' },
    { name: 'St. Pete', county: 'Pinellas / Suncoast', highlight: 'South Pinellas coastal neighborhoods' },
  ];

  return (
    <section id="service-areas" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-800 text-xs font-bold uppercase tracking-wider mb-2 border border-amber-500/20">
            <MapPin className="w-3.5 h-3.5 text-amber-600" />
            <span>Local Gulf Coast Service Coverage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0b2341] tracking-tight">
            Serving Sarasota & Manatee Counties
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Rooted in our community with two dedicated office locations. We know the local building codes, permitting departments, and coastal wind requirements of each area.
          </p>
        </div>

        {/* 2 Verified Physical Locations Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Sarasota Office */}
          <div className="bg-white rounded-2xl p-6 border-2 border-slate-200 hover:border-[#0b2341] transition-all shadow-xs flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#0b2341] text-amber-400 flex items-center justify-center shrink-0">
              <Building className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-600">
                Sarasota County Operations
              </span>
              <h3 className="text-lg font-black text-[#0b2341]">2nd Gen Roofing — Sarasota</h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                2237 Industrial Blvd Unit A, Sarasota, FL 34234-3119
              </p>
              <p className="text-xs text-slate-500 pt-1">
                License: CCC1333718 • Daily inspection & dispatch center
              </p>
            </div>
          </div>

          {/* Bradenton Office */}
          <div className="bg-white rounded-2xl p-6 border-2 border-slate-200 hover:border-[#0b2341] transition-all shadow-xs flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#0b2341] text-amber-400 flex items-center justify-center shrink-0">
              <Building className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-600">
                Manatee County Operations
              </span>
              <h3 className="text-lg font-black text-[#0b2341]">2nd Gen Roofing — Bradenton</h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                407 52nd Avenue Plz W, Bradenton, FL 34207-2945
              </p>
              <p className="text-xs text-slate-500 pt-1">
                License: CCC1333718 • Manatee County staging & customer care
              </p>
            </div>
          </div>
        </div>

        {/* Communities Grid */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div className="mb-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <h4 className="text-xl font-black text-[#0b2341]">Verified Communities We Serve</h4>
              <p className="text-xs text-slate-500 mt-0.5">Click any location to see coverage details</p>
            </div>
            <span className="text-xs font-bold bg-amber-50 text-amber-800 px-3 py-1 rounded-full border border-amber-200">
              No Travel or Distance Surcharges
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3.5">
            {communities.map((city) => {
              const isSelected = selectedCity === city.name;
              return (
                <button
                  key={city.name}
                  type="button"
                  onClick={() => setSelectedCity(city.name)}
                  className={`p-4 rounded-xl text-left border-2 transition-all cursor-pointer ${
                    isSelected
                      ? 'border-[#0b2341] bg-[#0b2341] text-white shadow-md'
                      : 'border-slate-100 hover:border-slate-300 bg-slate-50 text-slate-900'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-black text-sm">{city.name}</span>
                    <MapPin className={`w-3.5 h-3.5 ${isSelected ? 'text-amber-400' : 'text-slate-400'}`} />
                  </div>
                  <span className={`text-[11px] block mt-0.5 ${isSelected ? 'text-amber-300' : 'text-amber-600'}`}>
                    {city.county}
                  </span>
                  <p className={`text-[11px] mt-2 line-clamp-1 ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                    {city.highlight}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Active City Feature Banner */}
          <div className="mt-8 bg-amber-500/10 border border-amber-500/30 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8 text-amber-600 shrink-0" />
              <div>
                <h5 className="font-extrabold text-sm text-[#0b2341]">
                  Full Permitting & Rapid Inspection in {selectedCity}
                </h5>
                <p className="text-xs text-slate-600">
                  Our team coordinates all local municipal permits, secondary water barrier documentation, and final approvals directly with county inspectors.
                </p>
              </div>
            </div>
            <button
              onClick={onOpenEstimate}
              className="px-5 py-2.5 bg-[#0b2341] hover:bg-[#12365e] text-white font-bold text-xs rounded-xl transition-colors shrink-0 shadow-xs cursor-pointer"
            >
              Get Estimate in {selectedCity} →
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
