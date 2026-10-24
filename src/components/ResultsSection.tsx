import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { siteConfig } from '../config/siteConfig.ts';
import { Quote, ChevronLeft, ChevronRight, Star, ShieldCheck, MapPin } from 'lucide-react';

export const ResultsSection: React.FC = () => {
  const testimonials = siteConfig.testimonials;
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scrolling carousel that pauses on hover
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % testimonials.length);
    }, 5500);

    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  return (
    <section id="results" className="py-20 sm:py-28 bg-white relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E6F7F5] text-xs font-semibold uppercase tracking-wider text-[#0A7F72] mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-[#0E9F8E]" />
            <span>Doctor Proof &amp; Verification</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0B1F3A] tracking-tight">
            Built for Doctors Who Care About Ethics and Results
          </h2>

          <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
            See how modern clinics eliminate missed calls and recover patient volume with our done-for-you growth infrastructure.
          </p>
        </div>

        {/* Carousel Container with Pause-on-Hover */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative max-w-5xl mx-auto"
        >
          {/* Active Testimonial Card */}
          <div className="bg-[#F7FAFC] rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-xl relative min-h-[320px] flex flex-col justify-between">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#E6F7F5] text-[#0E9F8E] font-mono text-xs font-bold border border-teal-200/60">
                    {testimonials[activeIdx].metric}
                  </span>
                  <div className="flex items-center gap-1 text-[#C8A24A]">
                    <span className="text-xs font-mono font-semibold text-slate-500 mr-2">Verified Practice Result</span>
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                </div>

                <blockquote className="font-serif italic text-lg sm:text-2xl text-[#0B1F3A] leading-relaxed">
                  &ldquo;{testimonials[activeIdx].quote}&rdquo;
                </blockquote>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-200">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-[#0B1F3A] text-white flex items-center justify-center font-bold text-sm shadow-sm font-sans">
                      {testimonials[activeIdx].avatarInitials}
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-base text-[#0B1F3A]">
                        {testimonials[activeIdx].doctorName}
                      </h4>
                      <p className="text-xs text-slate-600">
                        {testimonials[activeIdx].clinicName} · {testimonials[activeIdx].specialty}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                    <MapPin className="w-3.5 h-3.5 text-[#0E9F8E]" />
                    <span>{testimonials[activeIdx].location}, India</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Carousel Navigation Buttons & Dots */}
            <div className="flex items-center justify-between pt-6 mt-4 border-t border-slate-200/60">
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIdx(i)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      activeIdx === i ? 'w-8 bg-[#0E9F8E]' : 'w-2 bg-slate-300 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                  className="p-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 transition-colors cursor-pointer shadow-xs"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveIdx((prev) => (prev + 1) % testimonials.length)}
                  className="p-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 transition-colors cursor-pointer shadow-xs"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

          <div className="mt-4 text-center">
            <span className="text-[11px] text-slate-400 font-mono">
              Hover over card to pause carousel · All results easily configurable in <code className="bg-slate-100 px-1 py-0.5 rounded">src/config/siteConfig.ts</code>
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
