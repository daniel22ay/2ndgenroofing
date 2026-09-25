import React from 'react';
import { ArrowRight, CheckCircle2, Home, Wrench, Search, Layers, ShieldCheck, Flame, Wind } from 'lucide-react';
import { tileRoofImg, shingleRoofImg, metalRoofImg, repairImg } from '../assets/images';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
  onOpenEstimate: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService, onOpenEstimate }) => {
  const coreServices = [
    {
      id: 'replacement',
      title: 'Roof Replacements',
      badge: 'Full Systems',
      description: 'Professional reroofing built specifically to withstand Florida Gulf Coast intense sun, tropical rainstorms, and high winds.',
      image: tileRoofImg,
      bullets: [
        'Complete tear-off & deck inspection',
        'High-temp secondary water barrier underlayment',
        'Florida Building Code & wind uplift compliance',
        'Manufacturer certified warranties & spotless clean-up'
      ],
      types: ['Shingle Reroofs', 'Tile Reroofs', 'Metal Reroofs', 'Low Slope Systems'],
      cta: 'Schedule Replacement Estimate',
    },
    {
      id: 'repairs',
      title: 'Roof Repairs',
      badge: 'Fast Response',
      description: 'From sudden interior water leaks and slipped barrel tiles to wind-lifted shingles, we diagnose and stop roofing problems properly.',
      image: repairImg,
      bullets: [
        'Pinpoint leak detection and moisture tracing',
        'Shingle & tile matching to preserve roof aesthetics',
        'Valley flashing, pipe boot, and chimney repair',
        'Transparent before & after photo documentation'
      ],
      types: ['Shingle Repairs', 'Tile Roof Repairs', 'Flashing & Vent Seals', 'Storm Damage Fixes'],
      cta: 'Request Repair Inspection',
    },
    {
      id: 'inspections',
      title: 'Inspections & Maintenance',
      badge: 'Preventative Care',
      description: 'Help homeowners and buyers understand the true health of their roofing system before small deficiencies become expensive structural leaks.',
      image: shingleRoofImg,
      bullets: [
        'Comprehensive 21-point exterior and attic check',
        'Storm readiness & seal evaluations',
        'Real estate buyer & seller condition reports',
        'Honest assessment with zero fake upselling'
      ],
      types: ['Annual Maintenance', 'Storm Readiness', 'Real Estate Inspection', 'Roof Life Extension'],
      cta: 'Book Roof Inspection',
    },
  ];

  const specificSpecialties = [
    {
      title: 'Shingle Reroofs',
      system: 'Architectural Fiberglass Asphalt',
      brands: 'GAF Timberline HDZ • Atlas Pinnacle Pristine • Tamko Heritage',
      description: 'Durable, beautiful, and cost-effective. Featuring Scotchgard algae resistance to keep your Florida roof looking clean and pristine without dark streaking.',
      image: shingleRoofImg,
      features: ['Up to 130 MPH Wind Ratings', 'Algae & Mold Guard', 'LayerLock™ Technology', 'Class A Fire Rating'],
    },
    {
      title: 'Tile Reroofs & Repairs',
      system: 'Clay Barrel & Concrete Profile Tile',
      brands: 'Eagle • Boral • Crown Coastal Tile Profiles',
      description: 'The signature architectural style of Sarasota and Bradenton. Engineered for 50+ year longevity with high thermal efficiency that keeps coastal homes cooler.',
      image: tileRoofImg,
      features: ['Extreme Durability', 'High Thermal Mass', 'Hurricane Foam Adhesion', 'Classic Florida Elegance'],
    },
    {
      title: 'Metal Roofing',
      system: 'Standing Seam & 5V Crimp',
      brands: 'Galvalume • Aluminum • Coastal Kynar 500 Finishes',
      description: 'Maximum resilience against coastal salt air and tropical winds. Concealed fasteners eliminate puncture vulnerabilities, delivering decades of maintenance-free performance.',
      image: metalRoofImg,
      features: ['Max Wind Uplift Rating', 'Salt Air Corrosion Protection', 'Cool Roof Energy Savings', '50+ Year Life Expectancy'],
    },
    {
      title: 'Low Slope & Flat Roofs',
      system: 'Modified Bitumen & TPO Commercial/Residential',
      brands: 'Multi-ply SBS • Self-Adhering Membranes',
      description: 'Designed for patios, lanais, additions, and low-pitch roof sections common throughout Sarasota and Manatee County homes.',
      image: repairImg,
      features: ['Puddle & Ponding Resistance', 'Seamless Watertight Seals', 'Energy Star Reflective', 'Custom Low-Pitch Drainage'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-800 text-xs font-bold tracking-wide uppercase border border-amber-500/20 mb-3">
            <span>Verified 2nd Gen Roofing Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0b2341] tracking-tight">
            Complete Roofing Solutions Built for Florida's Gulf Coast
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Whether your home requires a full roof replacement, precision tile repair, or a preventative inspection, 
            Alejandro and AJ Amaya bring two generations of hands-on expertise to every square foot.
          </p>
        </div>

        {/* 3 Core Services Major Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {coreServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
            >
              {/* Image Header */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-amber-500 text-slate-950 text-xs font-black rounded-md uppercase tracking-wider shadow-xs">
                    {service.badge}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-black text-white">{service.title}</h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Checklist */}
                  <ul className="space-y-2 text-xs font-medium text-slate-700">
                    {service.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Sub-specialties tags */}
                <div className="pt-3 border-t border-slate-100">
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Capabilities:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {service.types.map((type, idx) => (
                      <span key={idx} className="text-xs bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-medium">
                        {type}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action CTA */}
                <button
                  onClick={() => {
                    onSelectService(service.title);
                    onOpenEstimate();
                  }}
                  className="w-full py-3 bg-[#0b2341] hover:bg-[#12365e] text-white font-bold text-sm rounded-xl transition-colors flex items-center justify-center gap-2 shadow-xs group-hover:bg-amber-500 group-hover:text-slate-950"
                >
                  <span>{service.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Specific Material & Reroof Specialties */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div className="border-b border-slate-100 pb-6 mb-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-amber-600">Material Systems</span>
              <h3 className="text-2xl font-black text-[#0b2341] mt-1">Specific Systems 2nd Gen Roofing Installs</h3>
            </div>
            <button
              onClick={onOpenEstimate}
              className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-lg transition-colors"
            >
              Ask About Your Roof System →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specificSpecialties.map((item, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-2xl p-5 border border-slate-200 hover:border-amber-400/80 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="h-32 rounded-xl overflow-hidden mb-4 relative">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-slate-950/20" />
                  </div>
                  <h4 className="text-lg font-black text-[#0b2341]">{item.title}</h4>
                  <p className="text-xs font-semibold text-amber-600 mt-0.5">{item.system}</p>
                  <p className="text-xs text-slate-500 font-mono mt-1">{item.brands}</p>
                  <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">{item.description}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/80">
                  <div className="space-y-1">
                    {item.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-[11px] text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => {
                      onSelectService(item.title);
                      onOpenEstimate();
                    }}
                    className="mt-4 w-full text-center py-2 text-xs font-bold text-[#0b2341] hover:text-amber-600 bg-white hover:bg-amber-50 rounded-lg border border-slate-200 transition-colors"
                  >
                    Get Free Quote →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
