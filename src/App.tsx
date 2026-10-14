import React from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { TrustBar } from './components/TrustBar.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { TrainingSection } from './components/TrainingSection.tsx';
import { ProgramsSection } from './components/ProgramsSection.tsx';
import { PricingSection } from './components/PricingSection.tsx';
import { BmiCalculator } from './components/BmiCalculator.tsx';
import { FacilitiesGallery } from './components/FacilitiesGallery.tsx';
import { ReviewsSection } from './components/ReviewsSection.tsx';
import { EnquirySection } from './components/EnquirySection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { Footer } from './components/Footer.tsx';
import { FloatingWhatsApp } from './components/FloatingWhatsApp.tsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0D10] text-white flex flex-col selection:bg-[#D7FF35] selection:text-[#0B0D10]">
      {/* Main Sticky Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Split-Composition Hero with Athletic Editorial Photography */}
        <Hero />

        {/* High-Contrast Trust Bar (Rating, Reviews, Nagpur Location) */}
        <TrustBar />

        {/* 01. The Club (About) */}
        <AboutSection />

        {/* 02. Your Fitness Journey (Strength, Fitness, Endurance) */}
        <TrainingSection />

        {/* Training Programs (HIIT, Cardio, Zumba, Strength, Functional, Core) */}
        <ProgramsSection />

        {/* Membership Plans & Pricing */}
        <PricingSection />

        {/* 03. Know Your Numbers (Interactive BMI Screening Tool) */}
        <BmiCalculator />

        {/* 04. Inside Combat (Facilities Gallery with Lightbox) */}
        <FacilitiesGallery />

        {/* 05. Member Feedback (4.8★ Google Review Summaries) */}
        <ReviewsSection />

        {/* 06. Your Next Move (Membership & Visit Enquiry Form) */}
        <EnquirySection />

        {/* 07. Location & Hours (Akash Mall, Ayachit Rd, Timings Table, Map) */}
        <ContactSection />

        {/* 08. FAQ Section (AEO / GEO optimized answers) */}
        <FaqSection />
      </main>

      {/* Dark Athletic Minimal Footer */}
      <Footer />

      {/* Non-intrusive Floating WhatsApp Quick-Chat Widget */}
      <FloatingWhatsApp />
    </div>
  );
}
