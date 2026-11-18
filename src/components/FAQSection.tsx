import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { siteConfig } from '../config/siteConfig.ts';
import { Plus, HelpCircle, ShieldCheck, Search, X, MessageSquare, ArrowRight } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = useMemo(() => {
    const cats = ['All'];
    siteConfig.faqs.forEach((faq: { category?: string }) => {
      const cat = faq.category || 'General';
      if (!cats.includes(cat)) {
        cats.push(cat);
      }
    });
    return cats;
  }, []);

  const filteredFaqs = useMemo(() => {
    return siteConfig.faqs.filter((faq: { q: string; a: string; category?: string }) => {
      const matchesCategory =
        selectedCategory === 'All' || faq.category === selectedCategory;
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        faq.q.toLowerCase().includes(query) ||
        faq.a.toLowerCase().includes(query) ||
        (faq.category && faq.category.toLowerCase().includes(query));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-12 md:py-16 lg:py-24 bg-[#F6F1E9] text-[#0F2A4A] border-t border-[#0F2A4A]/10">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#14B8A6]/10 label-eyebrow text-[#0F2A4A] mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-[#14B8A6]" />
              <span>Clinic Director Q&amp;A</span>
            </div>

            <h2 className="text-[clamp(2rem,3.5vw,3rem)] leading-[1.18] tracking-[-0.01em] font-serif font-bold text-[#0F2A4A]">
              Frequently Asked Questions by Clinic Owners
            </h2>

            <p className="text-[#0F2A4A]/75 text-base sm:text-lg mt-4 max-w-[65ch] mx-auto leading-[1.6] font-sans">
              Honest, operational answers on front-desk cooperation, DPDP and NMC compliance, multilingual AI, and our 6-Month Growth Commitment.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative mb-6 max-w-xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#0F2A4A]/40">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g., website, WhatsApp API, AI calls, reels, Google Ads, NMC)..."
              className="w-full min-h-[44px] pl-10 pr-11 py-3 text-sm sm:text-base bg-white border border-[#0F2A4A]/15 text-[#0F2A4A] rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#14B8A6] focus:border-transparent transition-all placeholder:text-[#0F2A4A]/40 shadow-xs"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 min-w-[44px] flex items-center justify-center text-[#0F2A4A]/40 hover:text-[#0F2A4A] cursor-pointer"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              const count =
                cat === 'All'
                  ? siteConfig.faqs.length
                  : siteConfig.faqs.filter((f: { category?: string }) => f.category === cat).length;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(cat);
                    setOpenIndex(0);
                  }}
                  className={`min-h-[44px] px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-[#0F2A4A] text-[#F6F1E9] shadow-sm'
                      : 'bg-white text-[#0F2A4A]/75 hover:bg-white/80 hover:text-[#0F2A4A] border border-[#0F2A4A]/10'
                  }`}
                >
                  {cat} <span className="ml-1 text-xs opacity-70">({count})</span>
                </button>
              );
            })}
          </div>

        {/* FAQ Accordion List */}
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-12 px-4 rounded-2xl bg-white border border-[#0F2A4A]/10">
            <HelpCircle className="w-8 h-8 text-[#0F2A4A]/40 mx-auto mb-2" />
            <p className="text-[#0F2A4A] font-medium">No questions matched your search.</p>
            <p className="text-[#0F2A4A]/60 text-xs sm:text-sm mt-1">Try different keywords or clear your search query.</p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-4 min-h-[44px] px-5 py-2.5 rounded-xl text-xs font-semibold bg-[#14B8A6] text-[#0F2A4A] hover:bg-[#0F8F83] transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-3.5">
            {filteredFaqs.map((faq: { q: string; a: string; category?: string }, idx: number) => {
              const isOpen = openIndex === idx;

              return (
                <motion.div
                  key={faq.q}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: Math.min(idx * 0.04, 0.3) }}
                  className={`rounded-2xl transition-all duration-200 overflow-hidden bg-white ${
                    isOpen
                      ? 'border-2 border-[#14B8A6] shadow-md'
                      : 'border border-[#0F2A4A]/10 hover:border-[#0F2A4A]/20'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="space-y-1.5 pr-2">
                      {faq.category && (
                        <span className="inline-block px-2.5 py-0.5 rounded label-eyebrow bg-[#14B8A6]/10 text-[#0F2A4A] border border-[#14B8A6]/20">
                          {faq.category}
                        </span>
                      )}
                      <h3 className="font-serif font-bold text-lg sm:text-xl text-[#0F2A4A] leading-[1.25] tracking-[-0.01em]">
                        {faq.q}
                      </h3>
                    </div>

                    {/* Rotating Plus Icon */}
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-all duration-200 ${
                        isOpen
                          ? 'bg-[#14B8A6] text-[#0F2A4A] rotate-45'
                          : 'bg-[#F6F1E9] text-[#0F2A4A] hover:bg-[#14B8A6]/20'
                      }`}
                    >
                      <Plus className="w-4 h-4 stroke-[2.5]" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-3 text-[#0F2A4A]/80 text-base leading-[1.6] border-t border-[#0F2A4A]/10 font-sans">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        )}

          {/* Doctor Assistance Help Card */}
          <div className="mt-12 rounded-3xl p-7 sm:p-9 bg-gradient-to-br from-[#0F2A4A] to-[#0A1D33] text-[#F6F1E9] border border-[#F6F1E9]/10 shadow-lg">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="space-y-2 max-w-xl">
                <div className="inline-flex items-center gap-1.5 label-eyebrow text-[#14B8A6]">
                  <ShieldCheck className="w-4 h-4 text-[#14B8A6]" />
                  <span>Doctor Consultation &amp; Operational Clarity</span>
                </div>
                <h3 className="text-[1.5rem] font-serif font-bold text-[#F6F1E9] leading-[1.2] tracking-[-0.01em]">
                  Have a specific operational question about your clinic?
                </h3>
                <p className="text-[#F6F1E9]/75 text-sm sm:text-base leading-[1.6] max-w-[65ch]">
                  We speak directly with clinic owners, medical directors, and practice managers. No sales pressure — just straightforward diagnostic numbers for your specialty.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
                <a
                  href="#book-audit"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('book-audit')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="min-h-[48px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#14B8A6] hover:bg-[#0F8F83] text-[#0F2A4A] font-semibold text-sm transition-colors shadow-sm cursor-pointer"
                >
                  <span>Book Free Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href={`https://wa.me/${siteConfig.brand.whatsappRaw}?text=${encodeURIComponent(
                    'Hello Clinic Growth Helpers, I am a clinic director and have a question regarding growth automation for my practice.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[48px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-transparent hover:bg-white/10 text-[#F6F1E9] font-semibold text-sm border border-[#F6F1E9]/30 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-[#14B8A6]" />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
