import React, { useState, useEffect } from 'react';
import { Phone, Mail, Shield, Menu, X, ArrowRight, Clock, MapPin, Award } from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  onOpenEstimate: () => void;
  onOpenChat: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEstimate, onOpenChat }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Our Story', href: '#story' },
    { label: 'Services', href: '#services' },
    { label: 'Roof Systems', href: '#materials' },
    { label: 'Projects', href: '#projects' },
    { label: 'Calculator', href: '#estimator' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Service Areas', href: '#service-areas' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Utility Bar - Compact */}
      <div className="bg-[#07172b] text-slate-300 text-[11px] py-1 px-4 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-y-0.5">
          {/* Left Info Badges */}
          <div className="flex items-center gap-x-4">
            <span className="inline-flex items-center gap-1 text-amber-400 font-semibold">
              <Shield className="w-3 h-3" />
              <span>FL Lic. #CCC1333718</span>
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-slate-300">
              <MapPin className="w-3 h-3 text-amber-500" />
              <span>Sarasota & Manatee Counties</span>
            </span>
            <span className="hidden md:inline-flex items-center gap-1 text-slate-300">
              <Award className="w-3 h-3 text-amber-400" />
              <span>Two Generations of Florida Roofers</span>
            </span>
          </div>

          {/* Right Direct Contact Links */}
          <div className="flex items-center gap-3 ml-auto">
            <a
              href="mailto:info@2ndgenroofing.com"
              className="hidden lg:inline-flex items-center gap-1 text-slate-300 hover:text-amber-400 transition-colors"
            >
              <Mail className="w-3 h-3 text-amber-400" />
              <span>info@2ndgenroofing.com</span>
            </a>
            <a
              href="tel:9417049081"
              className="inline-flex items-center gap-1 font-bold text-white hover:text-amber-400 transition-colors bg-amber-500/10 hover:bg-amber-500/20 px-2 py-0.5 rounded border border-amber-500/30 text-[11px]"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span>(941) 704-9081</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - Streamlined Height */}
      <nav
        className={`w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-1.5 border-b border-slate-200'
            : 'bg-white py-2 border-b border-slate-100 shadow-2xs'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="focus:outline-none shrink-0">
            <Logo size="sm" />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-slate-700 hover:text-[#0b2341] font-semibold text-xs px-2 py-1 rounded-md hover:bg-slate-100 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Action CTAs */}
          <div className="hidden md:flex items-center gap-2.5">
            <button
              onClick={onOpenChat}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-semibold text-slate-700 hover:text-[#0b2341] bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors border border-slate-200 cursor-pointer"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>AI Assistant</span>
            </button>

            <a
              href="tel:9417049081"
              className="hidden lg:inline-flex items-center gap-1 text-xs font-bold text-[#0b2341] hover:text-amber-600 transition-colors px-1"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span>(941) 704-9081</span>
            </a>

            <button
              onClick={onOpenEstimate}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#0b2341] hover:bg-[#10335e] text-white font-bold text-xs rounded-lg shadow-2xs hover:shadow-xs transition-all duration-150 border border-[#1b4478] cursor-pointer"
            >
              <span>Free Estimate</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={onOpenEstimate}
              className="md:hidden inline-flex items-center px-2.5 py-1 bg-[#0b2341] text-white text-[11px] font-bold rounded-md"
            >
              <span>Estimate</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-md text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 space-y-3">
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-2 text-sm font-semibold text-slate-800 hover:text-[#0b2341] hover:bg-slate-50 rounded-md transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href="tel:9417049081"
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-lg transition-colors text-sm shadow-xs"
              >
                <Phone className="w-4 h-4" />
                <span>Call (941) 704-9081</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEstimate();
                }}
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#0b2341] hover:bg-[#10335e] text-white font-bold rounded-lg transition-colors text-sm"
              >
                <span>Request Free Estimate</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenChat();
                }}
                className="flex items-center justify-center gap-2 w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium rounded-lg text-xs"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Chat with 2nd Gen Assistant</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
