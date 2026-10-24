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
    <section id="faq" className="py-20 sm:py-28 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E6F7F5] text-xs font-semibold uppercase tracking-wider text-[#0A7F72] mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#0E9F8E]" />
            <span>Clinic Director Q&A</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0B1F3A] tracking-tight">
            Frequently Asked Questions by Clinic Owners
          </h2>

          <p className="text-slate-600 text-base sm:text-lg mt-3 max-w-2xl mx-auto">
            Honest, operational answers on front-desk cooperation, DPDP and NMC compliance, multilingual AI, and our 6-Month Growth Commitment.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6 max-w-xl mx-auto">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions (e.g., NMC ethics, receptionist, WhatsApp ownership, Hindi, pricing)..."
            className="w-full pl-10 pr-10 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0E9F8E] focus:border-transparent transition-all placeholder:text-slate-400"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer"
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
                className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#0B1F3A] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {cat} <span className="ml-1 text-xs opacity-70">({count})</span>
              </button>
            );
          })}
        </div>

        {/* FAQ Accordion List */}
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-12 px-4 rounded-2xl bg-slate-50 border border-slate-200">
            <HelpCircle className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <p className="text-slate-700 font-medium">No questions matched your search.</p>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">Try different keywords or clear your search query.</p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-4 px-4 py-2 rounded-lg text-xs font-semibold bg-[#0E9F8E] text-white hover:bg-[#0A7F72] transition-colors cursor-pointer"
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
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'border-[#0E9F8E]/40 bg-[#F7FAFC] shadow-sm ring-1 ring-[#0E9F8E]/10'
                      : 'border-slate-200 bg-white hover:border-slate-300'
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
                        <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-semibold tracking-wide uppercase bg-emerald-50 text-[#0A7F72] border border-emerald-100">
                          {faq.category}
                        </span>
                      )}
                      <h3 className="font-serif font-bold text-base sm:text-lg text-[#0B1F3A] leading-snug">
                        {faq.q}
                      </h3>
                    </div>

                    {/* Rotating Plus Icon */}
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-all duration-300 ${
                        isOpen
                          ? 'bg-[#0E9F8E] text-white rotate-45'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
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
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-200/60 font-sans">
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
        <div className="mt-14 rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-[#0B1F3A] to-[#122E54] text-white shadow-md">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#14B8A6] uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Doctor Consultation & Operational Clarity</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                Have a specific operational question about your clinic?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                We speak directly with clinic owners, medical directors, and practice managers. No sales pressure — just straightforward diagnostic numbers for your specialty.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
              <a
                href="#audit-form"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('audit-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0E9F8E] hover:bg-[#0A7F72] text-white font-semibold text-xs sm:text-sm transition-colors shadow-sm cursor-pointer"
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
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm border border-white/20 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
