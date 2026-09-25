import React, { useState } from 'react';
import { Camera, MapPin, Tag, Check, ArrowRight } from 'lucide-react';
import { tileRoofImg, shingleRoofImg, metalRoofImg, repairImg } from '../assets/images';
import { BeforeAfterSlider } from './BeforeAfterSlider';

interface ProjectGalleryProps {
  onOpenEstimate: () => void;
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ onOpenEstimate }) => {
  const [filter, setFilter] = useState<'all' | 'shingle' | 'tile' | 'metal' | 'lowslope' | 'repairs'>('all');

  const projects = [
    {
      id: 1,
      title: 'Spanish Barrel Tile Reroof',
      category: 'tile',
      location: 'Palmer Ranch, Sarasota, FL',
      system: 'Clay Barrel Tile System',
      description: 'Complete removal of deteriorated 22-year-old tile, deck refastening, high-temp self-adhering underlayment, and new clay barrel installation.',
      image: tileRoofImg,
      badge: 'Tile Replacement',
    },
    {
      id: 2,
      title: 'Architectural Shingle Reroof',
      category: 'shingle',
      location: 'Bradenton River District, FL',
      system: 'GAF Timberline HDZ with LayerLock',
      description: 'Wind-rated to 130 MPH with Scotchgard algae resistance to withstand heavy summer moisture and tropical squalls.',
      image: shingleRoofImg,
      badge: 'Shingle Reroof',
    },
    {
      id: 3,
      title: 'Coastal Standing Seam Metal Roof',
      category: 'metal',
      location: 'Venice Island, FL',
      system: 'Concealed Fastener Kynar 500 Metal',
      description: 'Engineered for salt-air exposure and maximum wind uplift protection on a coastal residence.',
      image: metalRoofImg,
      badge: 'Metal Roofing',
    },
    {
      id: 4,
      title: 'Tile Valley & Flashing Repair',
      category: 'repairs',
      location: 'Lakewood Ranch, Bradenton, FL',
      system: 'Precision Tile Reset & Valley Seal',
      description: 'Fixed persistent interior ceiling leak around dormer flashing; matched original tile profile seamlessly without replacing undamaged roof sections.',
      image: repairImg,
      badge: 'Repair Work',
    },
    {
      id: 5,
      title: 'Low Slope Lanai Flat Roof',
      category: 'lowslope',
      location: 'Osprey, FL',
      system: 'Multi-Ply Modified Bitumen SBS',
      description: 'Seamless waterproofing over a newly expanded covered patio and outdoor living room, tying cleanly into the main shingle roof.',
      image: repairImg,
      badge: 'Low Slope',
    },
    {
      id: 6,
      title: 'Coastal Residence Shingle Overhaul',
      category: 'shingle',
      location: 'North Port, FL',
      system: 'Atlas Pinnacle Pristine Shingles',
      description: 'Replaced aging 3-tab shingles with high-definition architectural shingles. Passed all Sarasota County building inspections with zero defects.',
      image: shingleRoofImg,
      badge: 'Shingle Reroof',
    },
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-slate-100/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0b2341]/10 text-[#0b2341] text-xs font-bold uppercase tracking-wider mb-2">
            <Camera className="w-3.5 h-3.5" />
            <span>Proven Craftsmanship</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0b2341] tracking-tight">
            2nd Gen Roofing Project Showcase
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Real Florida Gulf Coast homes. Real father-and-son craftsmanship. See our actual replacements and repairs across Sarasota and Manatee counties.
          </p>
        </div>

        {/* Before & After Interactive Showcase */}
        <div className="mb-16">
          <BeforeAfterSlider />
        </div>

        {/* Gallery Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'tile', label: 'Tile Roofing' },
            { id: 'shingle', label: 'Shingle Reroofs' },
            { id: 'metal', label: 'Metal Roofs' },
            { id: 'lowslope', label: 'Low-Slope' },
            { id: 'repairs', label: 'Repairs & Restorations' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                filter === tab.id
                  ? 'bg-[#0b2341] text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-2.5 py-1 bg-[#0b2341]/90 backdrop-blur-md text-amber-400 text-xs font-bold rounded-md border border-slate-700">
                  {project.badge}
                </span>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="flex items-center gap-1.5 text-xs text-slate-200">
                    <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{project.location}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-black text-[#0b2341]">{project.title}</h3>
                  <p className="text-xs font-semibold text-amber-600 mt-0.5">{project.system}</p>
                  <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">{project.description}</p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-emerald-700 flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" />
                    <span>Owner Inspected</span>
                  </span>
                  <button
                    onClick={onOpenEstimate}
                    className="text-xs font-bold text-[#0b2341] hover:text-amber-600 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Get Similar Estimate</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Estimate Banner */}
        <div className="mt-14 bg-white rounded-2xl p-8 border border-slate-200 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <h4 className="text-xl font-black text-[#0b2341]">Thinking About Your Roof?</h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Let's talk about what your home needs. We provide 100% free physical inspections and written proposals with zero pressure.
            </p>
          </div>
          <button
            onClick={onOpenEstimate}
            className="px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm rounded-xl transition-colors shrink-0 shadow-sm border border-amber-300 cursor-pointer"
          >
            REQUEST YOUR FREE ESTIMATE
          </button>
        </div>

      </div>
    </section>
  );
};
