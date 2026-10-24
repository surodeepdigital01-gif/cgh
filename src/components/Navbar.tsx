import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useRouter } from '../router/Router.tsx';
import { siteConfig } from '../config/siteConfig.ts';
import { ArrowRight, PhoneCall, Menu, X, Sparkles } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currentPath, navigate } = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
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
    { label: 'Specialties', href: '/specialties' },
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
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/90 py-3 sm:py-3.5'
          : 'bg-[#0B1F3A]/90 backdrop-blur-md border-b border-white/10 py-3.5 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand Logo & Wordmark */}
        <button
          onClick={() => handleNavClick('/')}
          className="group flex items-center gap-2.5 text-left cursor-pointer focus:outline-none"
        >
          <div className="relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#0E9F8E] via-[#0A7F72] to-[#071F36] p-0.5 shadow-md shadow-[#0E9F8E]/25 ring-1 ring-white/20 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-[#0E9F8E]/40 transition-all duration-300 overflow-hidden shrink-0">
            {/* Ambient specular highlight glow */}
            <div className="absolute -top-2 -right-2 w-7 h-7 bg-emerald-300/30 rounded-full blur-xs pointer-events-none" />

            {/* Inner badge container */}
            <div className="w-full h-full rounded-[10px] bg-gradient-to-b from-white/10 to-transparent flex flex-col items-center justify-center relative px-1">
              {/* Subtle top growth indicator line with gold pulse node */}
              <div className="w-full flex items-center justify-between px-1 -mt-0.5 opacity-60">
                <div className="h-[1.5px] w-3.5 bg-emerald-200/80 rounded-full" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#C8A24A] shadow-xs" />
              </div>

              {/* Bold modern CGH wordmark with custom contrast */}
              <div className="flex items-center justify-center font-sans font-black tracking-tight leading-none text-white text-[13px] sm:text-sm drop-shadow-xs">
                <span>CG</span>
                <span className="text-[#34d399] ml-0.5">H</span>
              </div>

              {/* Micro badge label */}
              <span className="text-[6.5px] font-mono font-bold tracking-widest text-emerald-200/90 uppercase leading-none mt-0.5">
                GROWTH
              </span>
            </div>
          </div>
          <div>
            <span
              className={`text-lg sm:text-xl xl:text-2xl font-serif font-bold tracking-tight block transition-colors ${
                isScrolled ? 'text-[#0B1F3A]' : 'text-white'
              }`}
            >
              {siteConfig.brand.name}
            </span>
            <span
              className={`text-[10px] tracking-wider uppercase font-semibold font-sans block -mt-0.5 transition-colors ${
                isScrolled ? 'text-[#0E9F8E]' : 'text-emerald-300'
              }`}
            >
              Doctor Patient Growth
            </span>
          </div>
        </button>

        {/* Desktop Nav Links with Animated Underline */}
        <nav
          className={`hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-medium transition-colors ${
            isScrolled ? 'text-slate-700' : 'text-slate-200'
          }`}
        >
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href, link.sectionId)}
              className={`relative py-1 group transition-colors cursor-pointer focus:outline-none ${
                isScrolled ? 'hover:text-[#0E9F8E]' : 'hover:text-white'
              }`}
            >
              <span>{link.label}</span>
              {/* Animated underline on hover */}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0E9F8E] rounded-full transition-all duration-300 ease-out group-hover:w-full" />
            </button>
          ))}
        </nav>

        {/* Primary CTA Button: Magnetic feel with Teal Glow Pulse and Sliding Arrow */}
        <div className="hidden sm:flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleNavClick('/contact')}
            className="group relative inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 bg-[#0E9F8E] hover:bg-[#0A7F72] text-white text-xs sm:text-sm font-semibold rounded-xl shadow-md hover:shadow-teal-600/30 transition-all duration-200 cursor-pointer overflow-hidden"
          >
            {/* Subtle light pulse ring */}
            <span className="absolute -inset-1 rounded-xl bg-[#0E9F8E]/20 animate-pulse pointer-events-none" />

            <Sparkles className="w-4 h-4 text-emerald-200 shrink-0" />
            <span className="relative z-10 whitespace-nowrap">Book Free Clinic Audit</span>
            <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-200 group-hover:translate-x-1 shrink-0" />
          </motion.button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => handleNavClick('/contact')}
            className="px-3 py-1.5 bg-[#0E9F8E] text-white text-xs font-semibold rounded-lg sm:hidden whitespace-nowrap cursor-pointer shadow-xs"
          >
            Free Audit
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-lg transition-colors cursor-pointer ${
              isScrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Animated Dropdown Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`lg:hidden border-b px-5 pt-3 pb-6 space-y-3 shadow-xl overflow-hidden ${
              isScrolled
                ? 'bg-white/95 backdrop-blur-xl border-slate-200 text-slate-800'
                : 'bg-[#0B1F3A]/98 backdrop-blur-xl border-white/10 text-white'
            }`}
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href, link.sectionId)}
                  className={`text-left py-2 px-3 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                    isScrolled
                      ? 'text-slate-800 hover:bg-[#E6F7F5] hover:text-[#0E9F8E]'
                      : 'text-slate-200 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className={`pt-2 border-t ${isScrolled ? 'border-slate-100' : 'border-white/10'}`}>
              <button
                onClick={() => handleNavClick('/contact')}
                className="w-full py-3 px-4 bg-[#0E9F8E] hover:bg-[#0A7F72] text-white text-sm font-semibold rounded-xl text-center shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book Free Clinic Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
