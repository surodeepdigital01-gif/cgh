import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useRouter } from '../router/Router.tsx';
import { siteConfig } from '../config/siteConfig.ts';
import { ArrowRight, Menu, X, Sparkles } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currentPath, navigate } = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '/services', sectionId: 'services' },
    { label: 'Specialties', href: '/specialties', sectionId: 'who-we-serve' },
    { label: 'How It Works', href: '/how-it-works', sectionId: 'how-it-works' },
    { label: 'Pricing', href: '/#pricing', sectionId: 'pricing' },
    { label: 'FAQ', href: '/#faq', sectionId: 'faq' },
  ];

  const handleNavClick = (href: string, sectionId?: string) => {
    setMobileMenuOpen(false);

    if (sectionId && (currentPath === '/' || href.startsWith('/#'))) {
      if (currentPath !== '/') {
        navigate('/');
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(href);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 h-16 lg:h-[72px] transition-shadow duration-200 bg-white/95 backdrop-blur-md border-b border-[#0F2A4A]/10 text-[#0F2A4A] ${
        isScrolled ? 'shadow-[0_4px_20px_rgba(15,42,74,0.08)]' : ''
      }`}
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between gap-4">
        {/* Brand Logo & Wordmark */}
        <button
          type="button"
          onClick={() => handleNavClick('/')}
          className="group flex items-center gap-3 text-left cursor-pointer focus:outline-none min-h-[44px]"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-[#0F2A4A] p-0.5 shadow-sm ring-1 ring-[#0F2A4A]/15 group-hover:ring-[#14B8A6] transition-colors duration-200 overflow-hidden shrink-0">
            <div className="w-full h-full rounded-[10px] bg-[#0F2A4A] flex flex-col items-center justify-center relative px-1">
              <div className="w-full flex items-center justify-between px-1 -mt-0.5 opacity-90">
                <div className="h-[1.5px] w-3.5 bg-[#14B8A6] rounded-full" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#14B8A6]" />
              </div>

              <div className="flex items-center justify-center font-sans font-black tracking-[-0.01em] leading-none text-[#F6F1E9] text-[13px] sm:text-sm">
                <span>CG</span>
                <span className="text-[#14B8A6] ml-0.5">H</span>
              </div>

              <span className="text-[6.5px] font-sans font-bold tracking-[0.12em] text-[#14B8A6] uppercase leading-none mt-0.5">
                GROWTH
              </span>
            </div>
          </div>
          <div>
            <span className="text-lg sm:text-xl font-serif font-bold tracking-[-0.01em] leading-tight block text-[#0F2A4A]">
              {siteConfig.brand.name}
            </span>
            <span className="text-[11px] tracking-[0.06em] uppercase font-semibold font-sans block text-[#0F8F83] leading-tight">
              Doctor Patient Growth
            </span>
          </div>
        </button>

        {/* Desktop Nav Links (1024px+) */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-medium text-[#0F2A4A]/80 font-sans">
          {navLinks.map((link) => (
            <button
              key={link.label}
              type="button"
              onClick={() => handleNavClick(link.href, link.sectionId)}
              className="relative py-2 group transition-colors cursor-pointer focus:outline-none hover:text-[#0F2A4A] min-h-[44px] flex items-center"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-2 left-0 w-0 h-0.5 bg-[#14B8A6] rounded-full transition-all duration-200 ease-out group-hover:w-full" />
            </button>
          ))}
        </nav>

        {/* Desktop Primary CTA Button (1024px+) */}
        <div className="hidden lg:flex items-center">
          <button
            type="button"
            onClick={() => handleNavClick('/contact')}
            className="group inline-flex items-center gap-2 px-5 py-2.5 min-h-[44px] bg-[#14B8A6] hover:bg-[#0F8F83] text-[#0F2A4A] text-sm font-semibold rounded-xl shadow-sm transition-colors duration-200 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#0F2A4A] shrink-0" />
            <span className="whitespace-nowrap">Book Free Clinic Audit</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 shrink-0 text-[#0F2A4A]" />
          </button>
        </div>

        {/* Mobile & Tablet Actions (<1024px) */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={() => handleNavClick('/contact')}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 min-h-[40px] bg-[#14B8A6] hover:bg-[#0F8F83] text-[#0F2A4A] text-xs font-semibold rounded-xl shadow-xs transition-colors cursor-pointer whitespace-nowrap"
          >
            <span>Book Free Audit</span>
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="min-w-[44px] min-h-[44px] p-2.5 rounded-xl transition-colors cursor-pointer text-[#0F2A4A] hover:bg-[#0F2A4A]/5 flex items-center justify-center"
            aria-label="Toggle navigation"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Dropdown Drawer (<1024px) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-b px-6 pt-3 pb-6 space-y-3 shadow-xl overflow-hidden bg-white/98 backdrop-blur-xl border-[#0F2A4A]/10 text-[#0F2A4A]"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  type="button"
                  onClick={() => handleNavClick(link.href, link.sectionId)}
                  className="text-left min-h-[44px] py-2.5 px-3 rounded-xl text-base font-medium transition-colors cursor-pointer text-[#0F2A4A]/85 hover:bg-[#F6F1E9] hover:text-[#0F2A4A]"
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-[#0F2A4A]/10">
              <button
                type="button"
                onClick={() => handleNavClick('/contact')}
                className="w-full min-h-[48px] py-3 px-4 bg-[#14B8A6] hover:bg-[#0F8F83] text-[#0F2A4A] text-sm font-semibold rounded-xl text-center shadow-sm flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <span>Book Free Clinic Audit</span>
                <ArrowRight className="w-4 h-4 text-[#0F2A4A]" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

