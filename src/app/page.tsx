"use client";

import { useState } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import IntroSection from '../components/IntroSection';
import BenefitsSection from '../components/BenefitsSection';
import CaseStudiesSection from '../components/CaseStudiesSection';
import PricingSection from '../components/PricingSection';
import PartnersSection from '../components/PartnersSection';
import ContactSection from '../components/ContactSection';
import FaqSection from '../components/FaqSection';
import Footer from '../components/Footer';
import FloatingQuoteBar from '../components/FloatingQuoteBar';

type FormPlan = 'premium';
type ContractDuration = 3 | 6 | 12;
type ContentMarketingType = null | 'gift' | 'rental';
type BlogMarketingType = null | 'twice' | 'four';

export interface QuoteState {
  plan: FormPlan;
  duration: ContractDuration;
  contentMarketing: ContentMarketingType;
  blogMarketing: BlogMarketingType;
}

export default function Home() {
  const [quoteState, setQuoteState] = useState<QuoteState>({
    plan: 'premium',
    duration: 3,
    contentMarketing: null,
    blogMarketing: null
  });

  const handleQuoteChange = (updates: Partial<QuoteState>) => {
    setQuoteState(prev => ({ ...prev, ...updates }));
  };

  return (
    <>
      <main className="min-h-screen">
        <Header />
        <HeroSection />
        <IntroSection />
        <BenefitsSection />
        <CaseStudiesSection />
        <PricingSection onPlanSelect={(plan) => handleQuoteChange({ plan })} />
        <PartnersSection />
        <ContactSection quoteState={quoteState} onQuoteChange={handleQuoteChange} />
        <FaqSection />
        <Footer />
      </main>
      <FloatingQuoteBar quoteState={quoteState} onQuoteChange={handleQuoteChange} />
    </>
  );
}
