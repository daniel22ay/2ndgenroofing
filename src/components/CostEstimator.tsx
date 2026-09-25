import React, { useState } from 'react';
import { Calculator, ArrowRight, CheckCircle2, Info, ShieldCheck, DollarSign } from 'lucide-react';

interface CostEstimatorProps {
  onSelectConfig: (configSummary: string) => void;
  onOpenEstimate: () => void;
}

export const CostEstimator: React.FC<CostEstimatorProps> = ({ onSelectConfig, onOpenEstimate }) => {
  const [sqft, setSqft] = useState<number>(2400);
  const [pitch, setPitch] = useState<'standard' | 'steep' | 'low'>('standard');
  const [material, setMaterial] = useState<'shingle' | 'tile' | 'metal' | 'lowslope'>('tile');
  const [existingLayers, setExistingLayers] = useState<'1' | '2'>('1');

  // Multipliers & base per square (100 sq ft) for educational Florida Gulf Coast pricing guidance
  const baseRates = {
    shingle: { name: 'Architectural Shingles (GAF/Atlas)', low: 450, high: 620, days: '2 - 3 Days', warranty: 'Lifetime / 25-50 yrs' },
    tile: { name: 'Clay & Concrete Barrel/Flat Tile', low: 900, high: 1400, days: '4 - 7 Days', warranty: '40 - 50+ yrs' },
    metal: { name: 'Standing Seam Metal', low: 1100, high: 1650, days: '3 - 5 Days', warranty: '50+ yrs' },
    lowslope: { name: 'Modified Bitumen / TPO', low: 550, high: 850, days: '1 - 2 Days', warranty: '20 - 25 yrs' },
  };

  const pitchMultiplier = pitch === 'low' ? 0.95 : pitch === 'standard' ? 1.0 : 1.25;
  const layerCost = existingLayers === '2' ? 45 * (sqft / 100) : 0;

  const currentRate = baseRates[material];
  const squares = sqft / 100;

  const estLow = Math.round(squares * currentRate.low * pitchMultiplier + layerCost);
  const estHigh = Math.round(squares * currentRate.high * pitchMultiplier + layerCost);

  const handleApplyConfig = () => {
    const summary = `${sqft} sq ft, ${pitch} pitch, ${currentRate.name}, Estimated: $${estLow.toLocaleString()} - $${estHigh.toLocaleString()}`;
    onSelectConfig(summary);
    onOpenEstimate();
  };

  return (
    <section id="estimator" className="py-20 bg-gradient-to-b from-slate-50 to-slate-100/80 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-800 text-xs font-bold uppercase tracking-wider mb-2 border border-amber-500/20">
            <Calculator className="w-3.5 h-3.5 text-amber-600" />
            <span>Interactive Florida Roof Planning Tool</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0b2341] tracking-tight">
            Transparent Roof Estimator
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Every Florida home has unique specifications. Use this interactive planner to understand material parameters, 
            timeline, and budget expectations before our on-site inspection.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Interactive Controls */}
            <div className="lg:col-span-7 p-6 sm:p-10 space-y-8 border-b lg:border-b-0 lg:border-r border-slate-200">
              
              {/* Step 1: Home Approximate Size */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-black text-[#0b2341] flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-amber-500 text-slate-950 font-bold text-xs flex items-center justify-center">1</span>
                    <span>Approximate Roof Area (Square Footage)</span>
                  </label>
                  <span className="text-base font-black text-amber-600 bg-amber-50 px-3 py-1 rounded-lg border border-amber-200">
                    {sqft.toLocaleString()} sq ft ({squares.toFixed(0)} squares)
                  </span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="5000"
                  step="100"
                  value={sqft}
                  onChange={(e) => setSqft(parseInt(e.target.value, 10))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-2">
                  <span>1,000 sq ft (Cottage)</span>
                  <span>2,400 sq ft (Typical Florida Home)</span>
                  <span>5,000+ sq ft (Estate)</span>
                </div>
              </div>

              {/* Step 2: Desired Material */}
              <div>
                <label className="text-sm font-black text-[#0b2341] flex items-center gap-2 mb-3">
                  <span className="w-6 h-6 rounded-full bg-amber-500 text-slate-950 font-bold text-xs flex items-center justify-center">2</span>
                  <span>Select Roofing Material System</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {[
                    { id: 'shingle', label: 'Shingle', sub: 'Architectural' },
                    { id: 'tile', label: 'Tile', sub: 'Barrel / Flat' },
                    { id: 'metal', label: 'Metal', sub: 'Standing Seam' },
                    { id: 'lowslope', label: 'Low Slope', sub: 'Mod-Bit / TPO' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setMaterial(item.id as any)}
                      className={`p-3 rounded-xl text-left border-2 transition-all cursor-pointer ${
                        material === item.id
                          ? 'border-amber-500 bg-amber-50/50 shadow-xs'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <span className={`block text-xs font-black ${material === item.id ? 'text-[#0b2341]' : 'text-slate-800'}`}>
                        {item.label}
                      </span>
                      <span className="block text-[11px] text-slate-500">{item.sub}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Roof Pitch & Complexity */}
              <div>
                <label className="text-sm font-black text-[#0b2341] flex items-center gap-2 mb-3">
                  <span className="w-6 h-6 rounded-full bg-amber-500 text-slate-950 font-bold text-xs flex items-center justify-center">3</span>
                  <span>Roof Pitch / Incline</span>
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'low', label: 'Low Pitch', desc: 'Flat or gentle slope' },
                    { id: 'standard', label: 'Standard Pitch', desc: 'Walkable typical slope' },
                    { id: 'steep', label: 'Steep Pitch', desc: 'High architectural peaks' },
                  ].map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setPitch(p.id as any)}
                      className={`p-3 rounded-xl text-left border-2 transition-all cursor-pointer ${
                        pitch === p.id
                          ? 'border-[#0b2341] bg-slate-900 text-white'
                          : 'border-slate-200 hover:border-slate-300 text-slate-800'
                      }`}
                    >
                      <span className="block text-xs font-bold">{p.label}</span>
                      <span className={`block text-[10px] ${pitch === p.id ? 'text-slate-300' : 'text-slate-500'}`}>
                        {p.desc}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 4: Existing Layers for Tear-Off */}
              <div>
                <label className="text-sm font-black text-[#0b2341] flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-full bg-amber-500 text-slate-950 font-bold text-xs flex items-center justify-center">4</span>
                  <span>Existing Roof Layers to Tear Off</span>
                </label>
                <div className="flex gap-4 text-xs font-semibold text-slate-700">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="layers"
                      checked={existingLayers === '1'}
                      onChange={() => setExistingLayers('1')}
                      className="accent-[#0b2341]"
                    />
                    <span>1 Existing Layer (Standard)</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="layers"
                      checked={existingLayers === '2'}
                      onChange={() => setExistingLayers('2')}
                      className="accent-[#0b2341]"
                    />
                    <span>2 Existing Layers (Extra tear-off)</span>
                  </label>
                </div>
              </div>

            </div>

            {/* Right Column: Estimated Summary & Direct Action */}
            <div className="lg:col-span-5 bg-[#0b2341] text-white p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-slate-700 pb-4 mb-6">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-amber-400">
                    Estimated Budget Range
                  </span>
                  <span className="text-[11px] bg-slate-800 px-2 py-0.5 rounded text-slate-300">
                    Sarasota / Manatee Average
                  </span>
                </div>

                <div className="mb-6">
                  <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                    ${estLow.toLocaleString()} - ${estHigh.toLocaleString()}
                  </div>
                  <p className="text-xs text-slate-300 mt-1">
                    Includes materials, certified Florida labor, complete tear-off, and magnetic clean-up.
                  </p>
                </div>

                {/* What is included in this 2nd Gen estimate */}
                <div className="space-y-3 bg-slate-900/80 p-4 rounded-2xl border border-slate-700 mb-6">
                  <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    Included with 2nd Gen Roofing:
                  </div>
                  <div className="space-y-2 text-xs text-slate-200">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Full tear-off down to wood deck with plywood re-nailing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Secondary Water Barrier (Peel & Stick) for insurance discounts</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>All brand new drip edge, vent boots, and valley flashings</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Direct father & son project supervision (Alejandro & AJ)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Full magnetic yard sweep for nails & debris</span>
                    </div>
                  </div>
                </div>

                {/* Timeline & Warranty */}
                <div className="grid grid-cols-2 gap-3 text-xs mb-6">
                  <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700">
                    <span className="text-slate-400 block text-[10px] uppercase">Typical Duration</span>
                    <span className="font-bold text-white text-sm">{currentRate.days}</span>
                  </div>
                  <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700">
                    <span className="text-slate-400 block text-[10px] uppercase">Warranty</span>
                    <span className="font-bold text-white text-sm">{currentRate.warranty}</span>
                  </div>
                </div>

                {/* Financing note */}
                <div className="bg-amber-500/10 border border-amber-500/30 p-3 rounded-xl flex items-center gap-3 text-xs text-amber-200 mb-6">
                  <DollarSign className="w-5 h-5 text-amber-400 shrink-0" />
                  <span>
                    <strong>Financing Available via Hearth:</strong> Loan options up to $250,000 with low monthly payment options.
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <div>
                <button
                  onClick={handleApplyConfig}
                  className="w-full py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm rounded-xl shadow-lg transition-all duration-200 flex items-center justify-center gap-2 border border-amber-300 cursor-pointer"
                >
                  <span>Apply to My Free Written Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[11px] text-slate-400 text-center mt-2">
                  *Online estimate for planning purposes. 2nd Gen Roofing confirms all specs with a free, no-surprise physical roof inspection.
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
