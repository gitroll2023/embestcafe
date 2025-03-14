import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import IntroSection from '../components/IntroSection';
import BenefitsSection from '../components/BenefitsSection';
import CaseStudiesSection from '../components/CaseStudiesSection';
import PricingSection from '../components/PricingSection';
import ContactSection from '../components/ContactSection';
import FaqSection from '../components/FaqSection';
import Footer from '../components/Footer';
import EarlyBirdBanner from '../components/EarlyBirdBanner';

export default function Home() {
  return (
    <>
      <EarlyBirdBanner />
      <main className="min-h-screen pt-[140px]">
        <Header />
        <HeroSection />
        <IntroSection />
        <BenefitsSection />
        <CaseStudiesSection />
        <PricingSection />
        <ContactSection />
        <FaqSection />
        <Footer />
      </main>
    </>
  );
}
