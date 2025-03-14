import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import IntroSection from '../components/IntroSection';
import BenefitsSection from '../components/BenefitsSection';
import CaseStudiesSection from '../components/CaseStudiesSection';
import PricingSection from '../components/PricingSection';
import ContactSection from '../components/ContactSection';
import FaqSection from '../components/FaqSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
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
  );
}
