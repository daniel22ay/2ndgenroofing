import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { ServicesSection } from './components/ServicesSection';
import { MaterialsSection } from './components/MaterialsSection';
import { CostEstimator } from './components/CostEstimator';
import { WhyChooseUs } from './components/WhyChooseUs';
import { OurStory } from './components/OurStory';
import { ProjectGallery } from './components/ProjectGallery';
import { ReviewsSection } from './components/ReviewsSection';
import { ServiceAreaSection } from './components/ServiceAreaSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AiChatbot } from './components/AiChatbot';
import { WhatsAppButton } from './components/WhatsAppButton';
import { MobileStickyBar } from './components/MobileStickyBar';
import { EstimateModal } from './components/EstimateModal';

export default function App() {
  const [isEstimateModalOpen, setIsEstimateModalOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Roof Replacement');
  const [estimatorNotes, setEstimatorNotes] = useState('');

  const handleOpenEstimate = (service = 'Roof Replacement', notes = '') => {
    setSelectedService(service);
    if (notes) {
      setEstimatorNotes(notes);
    }
    setIsEstimateModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-amber-400 selection:text-slate-950 font-sans">
      {/* Navigation */}
      <Navbar
        onOpenEstimate={() => handleOpenEstimate('Roof Replacement')}
        onOpenChat={() => setIsChatOpen(true)}
      />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenEstimate={() => handleOpenEstimate('Roof Replacement')}
          onOpenChat={() => setIsChatOpen(true)}
        />

        {/* Immediate Trust & Credential Badges Bar */}
        <TrustBar />

        {/* Core Roofing Services & Systems */}
        <ServicesSection
          onSelectService={(service) => setSelectedService(service)}
          onOpenEstimate={() => handleOpenEstimate(selectedService)}
        />

        {/* Roofing Materials: Tile, Shingle, Metal, Low Slope */}
        <MaterialsSection
          onOpenEstimate={() => handleOpenEstimate(selectedService)}
        />

        {/* Transparent Interactive Cost Estimator */}
        <CostEstimator
          onSelectConfig={(summary) => {
            setSelectedService('Roof Replacement');
            setEstimatorNotes(summary);
          }}
          onOpenEstimate={() => handleOpenEstimate('Roof Replacement', estimatorNotes)}
        />

        {/* Differentiators: Why Choose 2nd Gen */}
        <WhyChooseUs />

        {/* Family Legacy: Our Story */}
        <OurStory />

        {/* Real Workmanship & Interactive Before/After Gallery */}
        <ProjectGallery
          onOpenEstimate={() => handleOpenEstimate(selectedService)}
        />

        {/* Customer Testimonials & Reviews */}
        <ReviewsSection />

        {/* Service Areas: Sarasota County & Manatee County */}
        <ServiceAreaSection
          onOpenEstimate={() => handleOpenEstimate('Roof Inspection')}
        />

        {/* Contact & Estimate Form Section */}
        <ContactSection
          onOpenChat={() => setIsChatOpen(true)}
        />
      </main>

      {/* Comprehensive Footer */}
      <Footer
        onOpenEstimate={() => handleOpenEstimate('Roof Replacement')}
      />

      {/* Floating WhatsApp Button (Desktop) */}
      <WhatsAppButton />

      {/* AI Website Assistant ("2nd Gen Roofing Assistant") */}
      <AiChatbot
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        onOpenEstimate={() => handleOpenEstimate(selectedService)}
      />

      {/* Floating Chat Trigger Button (Desktop, bottom left) */}
      <div className="fixed bottom-6 left-5 sm:bottom-6 sm:left-6 z-30 hidden sm:block">
        <button
          onClick={() => setIsChatOpen(true)}
          className="flex items-center gap-2 px-4 py-3 bg-[#0b2341] hover:bg-[#12365e] text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105 border-2 border-amber-400 group cursor-pointer"
          aria-label="Open 2nd Gen AI Assistant"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-xs font-black tracking-wide">Ask 2nd Gen AI</span>
        </button>
      </div>

      {/* Sticky Mobile Contact Bar */}
      <MobileStickyBar
        onOpenEstimate={() => handleOpenEstimate(selectedService)}
        onOpenChat={() => setIsChatOpen(true)}
      />

      {/* Free Estimate Request Modal */}
      <EstimateModal
        isOpen={isEstimateModalOpen}
        onClose={() => setIsEstimateModalOpen(false)}
        initialService={selectedService}
        initialNotes={estimatorNotes}
      />
    </div>
  );
}
