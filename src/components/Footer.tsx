import React from 'react';
import { ShieldCheck, Phone, Mail, MapPin, ArrowRight, Heart } from 'lucide-react';
import { Logo } from './Logo';

interface FooterProps {
  onOpenEstimate: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEstimate }) => {
  const quickLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Our Story', href: '#story' },
    { label: 'Roof Services', href: '#services' },
    { label: 'Roofing Materials', href: '#materials' },
    { label: 'Cost Estimator', href: '#estimator' },
    { label: 'Completed Projects', href: '#projects' },
    { label: 'Customer Reviews', href: '#reviews' },
    { label: 'Service Areas', href: '#service-areas' },
    { label: 'Contact Us', href: '#contact' },
  ];

  const services = [
    'Shingle Reroofs (GAF/Atlas)',
    'Tile Reroofs & Repairs',
    'Standing Seam Metal',
    'Low-Slope & Flat Systems',
    'Leak Detection & Repair',
    'Storm Damage Inspections',
  ];

  const communities = [
    'Sarasota',
    'Bradenton',
    'Lakewood Ranch',
    'Venice',
    'North Port',
    'Osprey',
    'Palmetto',
    'Parrish',
    'Ruskin',
  ];

  return (
    <footer className="bg-[#07172b] text-white border-t border-slate-800 pt-16 pb-24 sm:pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & License (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white/95 p-2 rounded-xl inline-block shadow-sm">
              <Logo size="md" />
            </div>
            
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-sm pt-2">
              Family-owned and operated roofing company rooted in Florida's Gulf Coast. 
              Two generations of dedicated craftsmanship, with a third generation preparing to carry the tradition forward.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>Florida License #CCC1333718</span>
            </div>

            <div className="space-y-2 text-xs text-slate-300 pt-2">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <a href="tel:9417049081" className="hover:text-amber-400 transition-colors font-bold text-white">
                  (941) 704-9081
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <a href="mailto:info@2ndgenroofing.com" className="hover:text-amber-400 transition-colors">
                  info@2ndgenroofing.com
                </a>
              </p>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-extrabold tracking-wider uppercase text-amber-400">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-amber-400 transition-colors block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Roofing Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold tracking-wider uppercase text-amber-400">
              Core Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              {services.map((item, idx) => (
                <li key={idx} className="hover:text-white transition-colors">
                  {item}
                </li>
              ))}
            </ul>

            <div className="pt-3">
              <button
                onClick={onOpenEstimate}
                className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs rounded-lg transition-colors cursor-pointer"
              >
                <span>REQUEST FREE ESTIMATE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Col 4: Verified Locations & Service Areas (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold tracking-wider uppercase text-amber-400">
              Florida Offices
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="bg-slate-800/60 p-2.5 rounded-lg border border-slate-700/80">
                <span className="font-bold text-white block">Sarasota Office:</span>
                <span>2237 Industrial Blvd Unit A, Sarasota, FL 34234</span>
              </div>
              <div className="bg-slate-800/60 p-2.5 rounded-lg border border-slate-700/80">
                <span className="font-bold text-white block">Bradenton Office:</span>
                <span>407 52nd Avenue Plz W, Bradenton, FL 34207</span>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                Communities Served:
              </span>
              <div className="flex flex-wrap gap-1 text-[11px] text-slate-400">
                {communities.map((c, i) => (
                  <span key={c}>
                    {c}{i < communities.length - 1 ? ' • ' : ''}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} 2nd Gen Roofing LLC. All Rights Reserved. • Florida Certified Roofing Contractor CCC1333718.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Service</span>
            <span>•</span>
            <span className="text-slate-300">Family-Owned & Operated</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
