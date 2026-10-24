import React from 'react';
import { Hero } from '../components/Hero.tsx';
import { MarqueeStrip } from '../components/MarqueeStrip.tsx';
import { StatsCounter } from '../components/StatsCounter.tsx';
import { ProblemSection } from '../components/ProblemSection.tsx';
import { SolutionSection } from '../components/SolutionSection.tsx';
import { HowItWorksTimeline } from '../components/HowItWorksTimeline.tsx';
import { ResultsSection } from '../components/ResultsSection.tsx';
import { ComparisonTable } from '../components/ComparisonTable.tsx';
import { WhoWeServe } from '../components/WhoWeServe.tsx';
import { PricingSection } from '../components/PricingSection.tsx';
import { FAQSection } from '../components/FAQSection.tsx';
import { FinalCTAForm } from '../components/FinalCTAForm.tsx';

export const HomePage: React.FC = () => {
  return (
    <div className="w-full">
      {/* 1. Hero with Word-by-Word Reveal & WhatsApp Phone Mockup */}
      <Hero />

      {/* 2. Marquee Trust Strip */}
      <MarqueeStrip />

      {/* 3. Animated Count-Up Stats */}
      <StatsCounter />

      {/* 4. Problem Section: Why Most Clinics Lose Patients Online */}
      <ProblemSection />

      {/* 5. Solution: Your Complete Patient Growth System (4 Core Pillars) */}
      <SolutionSection />

      {/* 6. How It Works Timeline (14-Day Setup) */}
      <HowItWorksTimeline />

      {/* 7. Done-For-You vs DIY Software Comparison Table */}
      <ComparisonTable />

      {/* 8. Who We Serve: IVF, Dental, Orthopaedic, Dermatology & Eye Care */}
      <WhoWeServe />

      {/* 9. Engagement & Pricing Tiers (Single vs Multi-Location) */}
      <PricingSection />

      {/* 10. Results & Verified Doctor Testimonials (Built for Doctors Who Care About Ethics and Results) */}
      <ResultsSection />

      {/* 11. FAQ Section with Rotating Plus Accordion */}
      <FAQSection />

      {/* 12. Final CTA Band with Animated Lead Form */}
      <FinalCTAForm />
    </div>
  );
};
