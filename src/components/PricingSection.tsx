import React from 'react';
import { motion } from 'motion/react';
import { siteConfig } from '../config/siteConfig.ts';
import { CheckCircle2, Sparkles, ArrowRight, ShieldCheck, PhoneCall } from 'lucide-react';
import { useRouter } from '../router/Router.tsx';

export const PricingSection: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-[#F7FAFC] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E6F7F5] text-xs font-semibold uppercase tracking-wider text-[#0A7F72] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A24A]" />
            <span>Turnkey Engagement</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0B1F3A] tracking-tight">
            Predictable Investment. Zero Software Headaches.
          </h2>

          <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
            We structure our partnership as a fixed done-for-you engagement so your clinic enjoys complete peace of mind with full asset ownership.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {siteConfig.pricing.map((tier) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -5 }}
              className={`rounded-3xl p-8 sm:p-10 transition-all flex flex-col justify-between relative shadow-lg ${
                tier.isPopular
                  ? 'bg-white border-2 border-[#0E9F8E] shadow-xl'
                  : 'bg-white border border-slate-200 shadow-md'
              }`}
            >
              {/* Champagne Gold "Most Popular" Badge */}
              {tier.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#C8A24A] to-[#B38F3B] text-white text-[11px] font-bold uppercase tracking-wider shadow-md flex items-center gap-1.5 font-mono">
                  <Sparkles className="w-3 h-3" />
                  <span>Most Popular for Solo Clinics</span>
                </div>
              )}

              <div>
                <div className="mb-6">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                    {tier.badge}
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-[#0B1F3A] mt-1">
                    {tier.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {tier.description}
                  </p>
                </div>

                {/* Price Display */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6">
                  <span className="text-xs text-slate-500 block mb-1">Engagement Fee:</span>
                  <p className="text-xl sm:text-2xl font-serif font-bold text-[#0B1F3A]">
                    {tier.priceDisplay}
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5 font-mono">
                    {tier.priceNote}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#0E9F8E] font-bold block mb-1">
                    Everything Included:
                  </span>
                  {tier.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#0E9F8E] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA Button */}
              <div className="pt-6 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => navigate('/contact', { notes: `Interested in ${tier.name}` })}
                  className={`w-full py-3.5 px-6 rounded-xl font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md ${
                    tier.isPopular
                      ? 'bg-[#0E9F8E] hover:bg-[#0A7F72] text-white'
                      : 'bg-[#0B1F3A] hover:bg-slate-800 text-white'
                  }`}
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>{tier.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Guarantee Reinforcement */}
        <div className="max-w-3xl mx-auto mt-12 p-5 bg-white rounded-2xl border border-emerald-200 text-center text-xs text-slate-600 flex items-center justify-center gap-3">
          <ShieldCheck className="w-5 h-5 text-[#0E9F8E] shrink-0" />
          <span>
            Backed by our <strong>6-Month Growth Guarantee</strong>: We work with you until your investment is recovered through verified patient appointments.
          </span>
        </div>

      </div>
    </section>
  );
};
