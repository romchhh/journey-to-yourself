import { lazy, Suspense } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import ForWhomSection from '@/components/ForWhomSection';
import Footer from '@/components/Footer';
import FixedButton from '@/components/FixedButton';

// Lazy load non-critical components
const AboutSection = lazy(() => import('@/components/AboutSection'));
const WhyImportantSection = lazy(() => import('@/components/WhyImportantSection'));
const JourneySection = lazy(() => import('@/components/JourneySection'));
const BonusesSection = lazy(() => import('@/components/BonusesSection'));
const WhyFormatWorksSection = lazy(() => import('@/components/WhyFormatWorksSection'));
const ResultsSection = lazy(() => import('@/components/ResultsSection'));
const AboutAuthorSection = lazy(() => import('@/components/AboutAuthorSection'));
const PauseSection = lazy(() => import('@/components/PauseSection'));
const FAQSection = lazy(() => import('@/components/FAQSection'));
const CTASection = lazy(() => import('@/components/CTASection'));

const LoadingPlaceholder = () => (
  <div className="min-h-[400px] flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-[#75DEAF] border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <HeroSection />
      <StatsSection />
      <ForWhomSection />
      <Suspense fallback={<LoadingPlaceholder />}>
      <AboutSection />
      <WhyImportantSection />
      <JourneySection />
      <BonusesSection />
      <WhyFormatWorksSection />
      <ResultsSection />
      <AboutAuthorSection />
      <PauseSection />
      <FAQSection />
      <CTASection />
      </Suspense>
      <Footer />
      <FixedButton />
    </div>
  );
}
