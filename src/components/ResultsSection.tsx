import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { siteConfig } from '../config/siteConfig.ts';
import { ChevronLeft, ChevronRight, Star, ShieldCheck, MapPin } from 'lucide-react';

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
    <section id="results" className="py-12 md:py-16 lg:py-24 bg-[#0F2A4A] text-[#F6F1E9] relative overflow-hidden border-t border-[#F6F1E9]/10">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#14B8A6]/10 label-eyebrow text-[#14B8A6] mb-3 border border-[#14B8A6]/20">
            <ShieldCheck className="w-3.5 h-3.5 text-[#14B8A6]" />
            <span>Doctor Proof &amp; Verification</span>
          </div>

          <h2 className="text-[clamp(2rem,3.5vw,3rem)] leading-[1.18] tracking-[-0.01em] font-serif font-bold text-[#F6F1E9]">
            Built for Doctors Who Care About Ethics and Results
          </h2>

          <p className="text-[#F6F1E9]/75 text-base sm:text-lg mt-4 leading-[1.6] max-w-[65ch] font-sans">
            See how modern clinics eliminate missed calls and recover patient volume with our done-for-you growth infrastructure.
          </p>
        </div>

        {/* Carousel Container with Pause-on-Hover */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative w-full"
        >
          {/* Active Testimonial Card */}
          <div className="bg-white/[0.07] backdrop-blur-xs rounded-3xl p-7 sm:p-10 lg:p-12 border border-[#F6F1E9]/10 shadow-[0_10px_30px_rgba(15,42,74,0.3)] relative min-h-[320px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="px-3 py-1 rounded-full bg-[#14B8A6]/10 text-[#14B8A6] font-sans text-xs font-semibold border border-[#14B8A6]/20">
                    {testimonials[activeIdx].metric}
                  </span>
                  <div className="flex items-center gap-1 text-[#14B8A6]">
                    <span className="label-eyebrow text-[#F6F1E9]/75 mr-2">Verified Practice Result</span>
                    <Star className="w-4 h-4 fill-[#14B8A6]" />
                    <Star className="w-4 h-4 fill-[#14B8A6]" />
                    <Star className="w-4 h-4 fill-[#14B8A6]" />
                    <Star className="w-4 h-4 fill-[#14B8A6]" />
                    <Star className="w-4 h-4 fill-[#14B8A6]" />
                  </div>
                </div>

                <blockquote className="font-serif italic text-lg sm:text-2xl text-[#F6F1E9] leading-[1.5]">
                  &ldquo;{testimonials[activeIdx].quote}&rdquo;
                </blockquote>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-[#F6F1E9]/10">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-[#14B8A6] text-[#0F2A4A] flex items-center justify-center font-bold text-sm shadow-sm font-sans shrink-0">
                      {testimonials[activeIdx].avatarInitials}
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-base text-[#F6F1E9] leading-[1.2] tracking-[-0.01em]">
                        {testimonials[activeIdx].doctorName}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#F6F1E9]/75 mt-0.5">
                        {testimonials[activeIdx].clinicName} · {testimonials[activeIdx].specialty}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-[#F6F1E9]/70 font-sans">
                    <MapPin className="w-3.5 h-3.5 text-[#14B8A6] shrink-0" />
                    <span>{testimonials[activeIdx].location}, India</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Carousel Navigation Buttons & Dots */}
            <div className="flex items-center justify-between pt-6 mt-4 border-t border-[#F6F1E9]/10">
              <div className="flex items-center gap-1.5">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveIdx(i)}
                    className="min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
                    aria-label={`Go to slide ${i + 1}`}
                  >
                    <span
                      className={`h-2 rounded-full transition-all block ${
                        activeIdx === i ? 'w-8 bg-[#14B8A6]' : 'w-2.5 bg-[#F6F1E9]/25 hover:bg-[#F6F1E9]/45'
                      }`}
                    />
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                  className="min-w-[44px] min-h-[44px] rounded-xl bg-white/[0.07] border border-[#F6F1E9]/10 hover:bg-white/[0.14] text-[#F6F1E9] transition-colors cursor-pointer flex items-center justify-center"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setActiveIdx((prev) => (prev + 1) % testimonials.length)}
                  className="min-w-[44px] min-h-[44px] rounded-xl bg-white/[0.07] border border-[#F6F1E9]/10 hover:bg-white/[0.14] text-[#F6F1E9] transition-colors cursor-pointer flex items-center justify-center"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-4 text-center">
            <span className="text-xs text-[#F6F1E9]/55 font-sans">
              Hover over card to pause carousel · All results easily configurable in <code className="bg-white/10 px-1 py-0.5 rounded text-[#F6F1E9]/80 font-mono">src/config/siteConfig.ts</code>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
