import React, { useState } from 'react';
import { FAQS } from '../data/clinicData.ts';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQAccordion: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-3">
      {FAQS.map((faq, idx) => {
        const isOpen = openIdx === idx;
        return (
          <div
            key={idx}
            className={`rounded-xl transition-all duration-200 overflow-hidden ${
              isOpen
                ? 'border-2 border-[#14B8A6] bg-white shadow-xs'
                : 'border border-[#0F2A4A]/10 bg-white hover:border-[#0F2A4A]/20'
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              aria-expanded={isOpen}
              className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#14B8A6] rounded-xl"
            >
              <div className="flex items-start gap-3">
                <HelpCircle
                  className={`w-5 h-5 shrink-0 mt-0.5 transition-colors ${
                    isOpen ? 'text-[#14B8A6]' : 'text-[#0F2A4A]/40'
                  }`}
                />
                <span className="font-serif font-semibold text-[#0F2A4A] text-base sm:text-lg">
                  {faq.q}
                </span>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-[#0F2A4A]/60 shrink-0 transition-transform duration-200 ${
                  isOpen ? 'rotate-180 text-[#14B8A6]' : ''
                }`}
              />
            </button>

            {isOpen && (
              <div className="px-5 pb-5 pt-1 text-[#0F2A4A]/80 text-sm leading-relaxed border-t border-[#0F2A4A]/10 sm:pl-13 animate-in fade-in duration-150">
                {faq.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
