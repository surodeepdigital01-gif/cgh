import React from 'react';
import { motion } from 'motion/react';
import { siteConfig } from '../config/siteConfig.ts';
import { Clock, ArrowRight, ShieldCheck } from 'lucide-react';
import { useRouter } from '../router/Router.tsx';

export const HowItWorksTimeline: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <section id="how-it-works" className="py-12 md:py-16 lg:py-24 bg-[#0F2A4A] text-[#F6F1E9] relative">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#14B8A6]/10 label-eyebrow text-[#14B8A6] border border-[#14B8A6]/20 mb-3"
          >
            <Clock className="w-3.5 h-3.5 text-[#14B8A6]" />
            <span>Turnkey Implementation</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="text-[clamp(2rem,3.5vw,3rem)] leading-[1.18] tracking-[-0.01em] font-serif font-bold text-[#F6F1E9]"
          >
            How It Works: Live in Your Clinic in 14 Days
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="text-[#F6F1E9]/75 text-base sm:text-lg mt-4 leading-[1.6] max-w-[65ch] font-sans"
          >
            A disciplined, four-phase rollout tailored to busy clinic operations. We do the heavy engineering so your consultation schedule continues uninterrupted.
          </motion.p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative items-stretch">
          {siteConfig.howItWorks.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="h-full relative"
            >
              {/* Inter-card step progress connector on desktop */}
              {idx < siteConfig.howItWorks.length - 1 && (
                <div
                  className="hidden lg:flex absolute -right-3.5 top-[50px] -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-[#0F2A4A] border border-[#14B8A6] items-center justify-center text-[#14B8A6] shadow-md pointer-events-none"
                  aria-hidden="true"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              )}

              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                transition={{ duration: 0.2 }}
                className="bg-[#122A48] rounded-3xl p-6 sm:p-7 border border-[#F6F1E9]/10 shadow-[0_10px_30px_rgba(15,42,74,0.3)] hover:border-[#14B8A6]/40 hover:shadow-[0_16px_38px_rgba(10,29,51,0.45)] transition-colors transition-shadow duration-200 relative z-10 flex flex-col justify-between h-full"
              >
                <div className="flex flex-col flex-1">
                  {/* Step Top Circle with Number and Clean Time Badge */}
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#14B8A6] text-[#0F2A4A] flex items-center justify-center font-serif font-bold text-lg shadow-md shrink-0">
                      {step.step}
                    </div>
                    <span className="px-3 py-1 bg-[#14B8A6]/10 text-[#14B8A6] border border-[#14B8A6]/25 rounded-full font-sans text-xs font-semibold whitespace-nowrap shadow-xs">
                      {step.time}
                    </span>
                  </div>

                  <h3 className="text-[1.5rem] leading-[1.2] tracking-[-0.01em] font-serif font-bold text-[#F6F1E9] md:min-h-[3.6rem] mb-3">
                    {step.title}
                  </h3>

                  <p className="text-base text-[#F6F1E9]/75 leading-[1.6] mb-6 font-sans">
                    {step.description}
                  </p>
                </div>

                <div className="mt-auto pt-4 border-t border-[#F6F1E9]/10 md:min-h-[5.5rem]">
                  <span className="label-eyebrow text-[#14B8A6] block mb-1.5">
                    Key Output:
                  </span>
                  <p className="text-sm font-semibold text-[#F6F1E9] leading-[1.5] font-sans">
                    {step.deliverable}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Doctor Time Commitment Trust Banner */}
        <div className="mt-12 p-6 sm:p-8 bg-white/[0.07] rounded-3xl border border-[#F6F1E9]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xl">
          <div className="flex items-start sm:items-center gap-3.5">
            <ShieldCheck className="w-8 h-8 text-[#14B8A6] shrink-0 mt-0.5 sm:mt-0" />
            <div>
              <h4 className="text-lg font-serif font-bold text-[#F6F1E9] leading-[1.2] tracking-[-0.01em]">
                Total Doctor Time Required: Only 45 Minutes
              </h4>
              <p className="text-sm text-[#F6F1E9]/75 mt-1 leading-[1.6] max-w-[65ch]">
                We only need your existing clinic timings and doctor consultation rates. Our agency handles the rest.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => navigate('/contact')}
            className="min-h-[48px] px-5 py-3 bg-[#14B8A6] hover:bg-[#0F8F83] text-[#0F2A4A] font-semibold rounded-xl text-sm shrink-0 transition-colors cursor-pointer flex items-center gap-2 shadow-md"
          >
            <span>Request Your Clinic Diagnostic</span>
            <ArrowRight className="w-4 h-4 text-[#0F2A4A]" />
          </button>
        </div>
      </div>
    </section>
  );
};

