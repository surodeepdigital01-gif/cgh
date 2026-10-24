/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { RouterProvider, useRouter } from './router/Router.tsx';
import { Navbar } from './components/Navbar.tsx';
import { Footer } from './components/Footer.tsx';
import { FloatingWhatsApp } from './components/FloatingWhatsApp.tsx';
import { PlaceholderGuideModal } from './components/PlaceholderGuideModal.tsx';

import { Preloader } from './components/Preloader.tsx';
import { ScrollProgressBar } from './components/ScrollProgressBar.tsx';

// Pages
import { HomePage } from './pages/HomePage.tsx';
import { ServicesPage } from './pages/ServicesPage.tsx';
import { HowItWorksPage } from './pages/HowItWorksPage.tsx';
import { GrowthGuaranteePage } from './pages/GrowthGuaranteePage.tsx';
import { CalculatorPage } from './pages/CalculatorPage.tsx';
import { AboutPage } from './pages/AboutPage.tsx';
import { ContactPage } from './pages/ContactPage.tsx';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage.tsx';
import { TermsPage } from './pages/TermsPage.tsx';
import { SpecialtiesPage } from './pages/SpecialtiesPage.tsx';
import { SpecialtyDetailPage } from './pages/SpecialtyDetailPage.tsx';

const MainLayout: React.FC = () => {
  const { currentPath, navigate } = useRouter();
  const [placeholderModalOpen, setPlaceholderModalOpen] = useState(false);
  const [isPreloaded, setIsPreloaded] = useState(false);

  // Dynamic route dispatcher
  const renderCurrentPage = () => {
    // Smooth redirects for removed specialty paths to dermatology
    if (
      currentPath === '/specialties/hair-transplant' ||
      currentPath === '/specialties/cosmetic-laser'
    ) {
      if (typeof window !== 'undefined') {
        setTimeout(() => navigate('/specialties/dermatology'), 0);
      }
      return <SpecialtyDetailPage slug="dermatology" />;
    }

    // Specialty detail pages
    if (currentPath.startsWith('/specialties/')) {
      const slug = currentPath.replace('/specialties/', '').replace(/\/$/, '');
      return <SpecialtyDetailPage slug={slug} />;
    }

    switch (currentPath) {
      case '/':
        return <HomePage />;
      case '/services':
        return <ServicesPage />;
      case '/specialties':
        return <SpecialtiesPage />;
      case '/how-it-works':
        return <HowItWorksPage />;
      case '/growth-commitment':
      case '/growth-guarantee':
        return <GrowthGuaranteePage />;
      case '/calculator':
        return <CalculatorPage />;
      case '/about':
        return <AboutPage />;
      case '/contact':
        return <ContactPage />;
      case '/privacy-policy':
        return <PrivacyPolicyPage />;
      case '/terms':
        return <TermsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 selection:bg-[#E6F7F5] selection:text-[#0A7F72]">
      {/* 1. Branded Short Preloader */}
      <Preloader onComplete={() => setIsPreloaded(true)} />

      {/* 2. Scroll Progress Bar in Medical Teal */}
      <ScrollProgressBar />

      {/* 3. Sticky Navbar with Frosted Glass Scroll Effect */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* Deep Navy Trust Footer */}
      <Footer onOpenPlaceholderGuide={() => setPlaceholderModalOpen(true)} />

      {/* Floating WhatsApp Contact Button */}
      <FloatingWhatsApp />

      {/* Strict Truthfulness Placeholder Checklist Modal */}
      <PlaceholderGuideModal
        isOpen={placeholderModalOpen}
        onClose={() => setPlaceholderModalOpen(false)}
      />
    </div>
  );
};

export default function App() {
  return (
    <RouterProvider>
      <MainLayout />
    </RouterProvider>
  );
}
