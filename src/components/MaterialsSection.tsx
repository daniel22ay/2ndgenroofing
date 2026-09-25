import React, { useState } from 'react';
import { Shield, Check, Wind, Sun, Droplets, ArrowRight } from 'lucide-react';
import { tileRoofImg, shingleRoofImg, metalRoofImg, repairImg } from '../assets/images';

interface MaterialsSectionProps {
  onOpenEstimate: () => void;
}

export const MaterialsSection: React.FC<MaterialsSectionProps> = ({ onOpenEstimate }) => {
  const [activeTab, setActiveTab] = useState<'shingle' | 'tile' | 'metal' | 'lowslope'>('tile');

  const materials = {
    tile: {
      name: 'Tile Roofing Systems',
      tag: 'Classic Florida Mediterranean',
      image: tileRoofImg,
      summary: 'Tile roofs are an iconic hallmark of Sarasota and Bradenton architecture. Built from heavy-duty concrete or clay, they deliver unmatched hurricane wind resistance, energy-saving thermal barrier insulation, and lasting curb appeal.',
      lifespan: '40 - 50+ Years',
      windResistance: 'Up to 150+ MPH with modern foam adhesive anchoring',
      bestFor: 'Luxury coastal residences, Spanish/Mediterranean architecture, long-term homeowners',
      brands: 'Eagle Roofing Products, Boral Clay, Crown Roofing Tiles',
      keyBenefits: [
        'Natural air circulation under tiles significantly lowers attic temperatures in Florida summers',
        'Exceptional resistance to rot, insect damage, and salt air corrosion',
        'Available in barrel, Spanish S, and modern flat contemporary profiles',
        'Installed with high-temp self-adhering secondary water barrier underlayment'
      ],
    },
    shingle: {
      name: 'Architectural Shingles',
      tag: 'Proven Value & High Wind Defense',
      image: shingleRoofImg,
      summary: 'Architectural dimensional shingles represent the most popular, cost-effective residential roofing solution. We install premium multi-layer shingles featuring advanced algae protection (Scotchgard) to prevent dark stains from Florida humidity.',
      lifespan: '25 - 30 Years',
      windResistance: 'Up to 130 MPH with enhanced fastener nailing patterns',
      bestFor: 'Single-family homes, HOA neighborhoods, cost-conscious homeowners seeking high aesthetics',
      brands: 'GAF Timberline HDZ, Atlas Pinnacle Pristine, Tamko Heritage',
      keyBenefits: [
        'High-definition dimensional wood-shake appearance with rich contrast colors',
        'Scotchgard / copper granule algae protection engineered against Florida humidity',
        'Fast installation with minimal disruption to your daily home life',
        'Fully eligible for manufacturer system-plus lifetime warranties'
      ],
    },
    metal: {
      name: 'Standing Seam Metal',
      tag: 'Maximum Hurricane & Coastal Resilience',
      image: metalRoofImg,
      summary: 'Metal roofing provides the ultimate defense against Gulf Coast extreme storms, high-velocity hurricane winds, and intense UV sun exposure. With concealed fastener standing seams, there are no exposed screws that can degrade over time.',
      lifespan: '50 - 70 Years',
      windResistance: 'Up to 160+ MPH (Highest Florida Category 5 ratings)',
      bestFor: 'Coastal waterfront homes, modern coastal cottages, eco-friendly energy-efficient builds',
      brands: 'Galvalume coated steel, Coastal marine-grade aluminum, Kynar 500 finishes',
      keyBenefits: [
        'Concealed clip fasteners expand and contract without risk of water penetrations',
        'Reflects up to 70% of solar radiant heat, dramatically reducing air conditioning bills',
        'Impervious to heavy Florida rain, mold, fire, and rot',
        'May qualify for Florida homeowner insurance wind mitigation discounts'
      ],
    },
    lowslope: {
      name: 'Low-Slope & Flat Roofing',
      tag: 'Watertight Commercial & Residential Systems',
      image: repairImg,
      summary: 'Many Sarasota and Bradenton homes feature low-pitch patio covers, Florida rooms, rear extensions, or modern flat sections. Standard shingles cannot be used on low pitches; instead, we install commercial-grade modified bitumen or single-ply membranes.',
      lifespan: '20 - 30 Years',
      windResistance: 'Engineered for Florida building code perimeter uplift compliance',
      bestFor: 'Lanais, carports, sunrooms, contemporary flat roof homes, commercial structures',
      brands: 'Multi-ply SBS Modified Bitumen, Self-Adhering Polyglass, TPO membranes',
      keyBenefits: [
        'Heavy-duty multi-layer protection engineered specifically against ponding water',
        'Granulated cap sheet surface reflects UV rays and resists foot traffic',
        'Heat-welded or self-adhered seams form an impervious, continuous waterproof skin',
        'Tied seamlessly into adjacent steep-slope shingle or tile roof sections'
      ],
    },
  };

  const current = materials[activeTab];

  return (
    <section id="materials" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0b2341]/10 text-[#0b2341] text-xs font-bold uppercase tracking-wider mb-3">
            <span>Roofing Materials & Systems</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0b2341] tracking-tight">
            Engineered Specifically for Florida Gulf Coast Conditions
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Every material we recommend is verified for durability under Sarasota and Manatee County's intense heat, salt air, and storm seasons.
          </p>
        </div>

        {/* Tab Selection Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {(['tile', 'shingle', 'metal', 'lowslope'] as const).map((key) => {
            const isActive = activeTab === key;
            const names = {
              tile: 'Tile Roofing',
              shingle: 'Architectural Shingles',
              metal: 'Standing Seam Metal',
              lowslope: 'Low-Slope / Flat',
            };
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-5 py-3 rounded-xl font-bold text-sm transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#0b2341] text-white shadow-md scale-102 border-2 border-[#12365e]'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border-2 border-transparent'
                }`}
              >
                {names[key]}
              </button>
            );
          })}
        </div>

        {/* Main Interactive Material Card */}
        <div className="bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left: Image & Quick Stats */}
            <div className="lg:col-span-6 relative min-h-[320px] lg:min-h-[460px]">
              <img
                src={current.image}
                alt={current.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="px-3 py-1 bg-amber-500 text-slate-950 font-black text-xs rounded uppercase tracking-wider mb-2 inline-block">
                  {current.tag}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black">{current.name}</h3>
                <p className="text-xs text-slate-300 mt-1">Installed with Two Generations of Craftsmanship</p>
              </div>
            </div>

            {/* Right: Technical Specs & Benefits */}
            <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  {current.summary}
                </p>

                {/* Specs Pill Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-white p-3 rounded-xl border border-slate-200">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Expected Lifespan</span>
                    <span className="text-sm font-extrabold text-[#0b2341]">{current.lifespan}</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-slate-200">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Wind Uplift Rating</span>
                    <span className="text-sm font-extrabold text-[#0b2341]">{current.windResistance}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                    Featured Brands & Materials:
                  </span>
                  <span className="text-xs font-semibold text-slate-800 bg-white px-3 py-1.5 rounded-lg border border-slate-200 inline-block">
                    {current.brands}
                  </span>
                </div>

                {/* Key Benefits List */}
                <div className="space-y-2.5">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                    Gulf Coast Performance Advantages:
                  </span>
                  {current.keyBenefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-slate-500 block">Best Application:</span>
                  <span className="text-xs font-bold text-slate-800">{current.bestFor}</span>
                </div>
                <button
                  onClick={onOpenEstimate}
                  className="w-full sm:w-auto px-6 py-3 bg-[#0b2341] hover:bg-[#12365e] text-white font-bold text-xs sm:text-sm rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm shrink-0"
                >
                  <span>Get Estimate for {current.name.split(' ')[0]}</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
