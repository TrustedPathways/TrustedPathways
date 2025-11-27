import React from 'react';
import Header from '@/components/landing/Header';
import HeroSection from '@/components/landing/HeroSection';
import HeroImage from '@/components/landing/HeroImage';
import QualificationSection from '@/components/landing/QualificationSection';
import ValueStackSection from '@/components/landing/ValueStackSection';
import HowItWorksSection from '@/components/landing/HowItWorksSection';
import StorySection from '@/components/landing/StorySection';
import WhyChooseSection from '@/components/landing/WhyChooseSection';
import TestimonialsSection from '@/components/landing/TestimonialsSection';
import FinalCTASection from '@/components/landing/FinalCTASection';
import Footer from '@/components/landing/Footer';
import MobileCTA from '@/components/landing/MobileCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <HeroImage />
        <QualificationSection />
        <ValueStackSection />
        <HowItWorksSection />
        <StorySection />
        <WhyChooseSection />
        <TestimonialsSection />
        <FinalCTASection />
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
}
