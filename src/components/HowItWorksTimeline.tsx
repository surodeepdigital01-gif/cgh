import React from 'react';
import { motion } from 'motion/react';
import { siteConfig } from '../config/siteConfig.ts';
import { CheckCircle2, Clock, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { useRouter } from '../router/Router.tsx';

export const HowItWorksTimeline: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-[#F7FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E6F7F5] text-xs font-semibold uppercase tracking-wider text-[#0A7F72] mb-3"
          >
            <Clock className="w-3.5 h-3.5 text-[#0E9F8E]" />
            <span>Turnkey Implementation</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0B1F3A] tracking-tight"
          >
            How It Works: Live in Your Clinic in 14 Days
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed"
          >
            A disciplined, four-phase rollout tailored to busy clinic operations. We do the heavy engineering so your consultation schedule continues uninterrupted.
          </motion.p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {/* Subtle animated connecting line across desktop columns */}
          <div className="hidden lg:block absolute top-12 left-12 right-12 h-1 bg-slate-200 -z-0">
            <motion.div
              className="h-full bg-gradient-to-r from-[#0E9F8E] via-[#0E9F8E] to-[#C8A24A]"
              initial={{ width: '0%' }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
            />
          </div>

          {siteConfig.howItWorks.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15, ease: 'easeOut' }}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 relative z-10 flex flex-col justify-between"
            >
              <div>
                {/* Step Top Circle with Number */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#0B1F3A] text-white flex items-center justify-center font-serif font-bold text-lg shadow-md">
                    {step.step}
                  </div>
                  <span className="px-2.5 py-1 bg-slate-100 rounded-full font-mono text-[11px] font-semibold text-slate-700">
                    {step.time}
                  </span>
                </div>

                <h3 className="text-xl font-serif font-bold text-[#0B1F3A] mb-2">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#0E9F8E] font-bold block mb-1">
                  Key Output:
                </span>
                <p className="text-xs font-semibold text-slate-800">
                  {step.deliverable}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Doctor Time Commitment Trust Banner */}
        <div className="mt-12 p-6 sm:p-8 bg-white rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-[#0E9F8E] shrink-0" />
            <div>
              <h4 className="text-base font-serif font-bold text-[#0B1F3A]">
                Total Doctor Time Required: Only 45 Minutes
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                We only need your existing clinic timings and doctor consultation rates. Our agency handles the rest.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => navigate('/contact')}
            className="px-5 py-2.5 bg-[#0E9F8E] hover:bg-[#0A7F72] text-white font-semibold rounded-xl text-xs sm:text-sm shrink-0 transition-colors cursor-pointer flex items-center gap-2"
          >
            <span>Request Your Clinic Diagnostic</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
