import React from 'react';
import { motion } from 'motion/react';
import { siteConfig } from '../config/siteConfig.ts';
import { CheckCircle2, Sparkles, ArrowRight, ShieldCheck, PhoneCall } from 'lucide-react';
import { useRouter } from '../router/Router.tsx';

export const PricingSection: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <section id="pricing" className="py-12 md:py-16 lg:py-24 bg-[#F6F1E9] border-t border-[#0F2A4A]/10">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#14B8A6]/10 label-eyebrow text-[#0F2A4A] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#14B8A6]" />
            <span>Turnkey Engagement</span>
          </div>

          <h2 className="text-[clamp(2rem,3.5vw,3rem)] leading-[1.18] tracking-[-0.01em] font-serif font-bold text-[#0F2A4A]">
            Predictable Investment. Zero Software Headaches.
          </h2>

          <p className="text-[#0F2A4A]/75 text-base sm:text-lg mt-4 leading-[1.6] max-w-[65ch] mx-auto font-sans">
            We structure our partnership as a fixed done-for-you engagement so your clinic enjoys complete peace of mind with full asset ownership.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {siteConfig.pricing.map((tier, idx) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="h-full"
            >
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                transition={{ duration: 0.2 }}
                className={`rounded-3xl p-7 sm:p-9 lg:p-10 h-full flex flex-col justify-between bg-white transition-shadow duration-200 ${
                  tier.isPopular
                    ? 'border-2 border-[#14B8A6] shadow-[0_14px_36px_rgba(20,184,166,0.12)] hover:shadow-[0_18px_42px_rgba(20,184,166,0.18)]'
                    : 'border border-[#0F2A4A]/10 shadow-[0_10px_30px_rgba(15,42,74,0.06)] hover:shadow-[0_16px_38px_rgba(15,42,74,0.1)]'
                }`}
              >
                <div className="flex flex-col flex-1">
                  {/* Top Badge Slot Inside Card (identical vertical reservation in both cards) */}
                  <div className="min-h-[32px] mb-4 flex items-center">
                    {tier.isPopular ? (
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#14B8A6] text-[#0F2A4A] label-eyebrow shadow-2xs">
                        <Sparkles className="w-3.5 h-3.5 text-[#0F2A4A] shrink-0" />
                        <span>Most Popular for Solo Clinics</span>
                      </span>
                    ) : (
                      <div className="h-[28px]" aria-hidden="true" />
                    )}
                  </div>

                  {/* Card Header Block */}
                  <div className="mb-6">
                    <span className="label-eyebrow text-[#0F8F83] block min-h-[1.25rem]">
                      {tier.badge}
                    </span>
                    <h3 className="text-[1.5rem] leading-[1.2] tracking-[-0.01em] font-serif font-bold text-[#0F2A4A] mt-2 md:min-h-[3.6rem]">
                      {tier.name}
                    </h3>
                    <p className="text-base text-[#0F2A4A]/75 mt-2 leading-[1.6] md:min-h-[5.25rem] font-sans">
                      {tier.description}
                    </p>
                  </div>

                  {/* Engagement Fee Box (equal height & aligned vertical start) */}
                  <div className="p-5 rounded-2xl bg-[#F6F1E9]/60 border border-[#0F2A4A]/10 mb-7 md:min-h-[124px] flex flex-col justify-center">
                    <span className="text-xs font-sans font-semibold text-[#0F2A4A]/70 block mb-1">
                      Engagement Fee:
                    </span>
                    <p className="text-xl sm:text-2xl font-serif font-bold text-[#0F2A4A] leading-[1.2]">
                      {tier.priceDisplay}
                    </p>
                    <p className="text-xs text-[#0F2A4A]/70 mt-1 font-sans leading-[1.5]">
                      {tier.priceNote}
                    </p>
                  </div>

                  {/* Features List (aligned vertical start) */}
                  <div className="mb-8 flex-1">
                    <span className="label-eyebrow text-[#0F8F83] block mb-4">
                      Everything Included:
                    </span>
                    <ul className="space-y-3">
                      {tier.features.map((feat, fIdx) => (
                        <li
                          key={fIdx}
                          className="flex items-start gap-3 text-base leading-[1.6] text-[#0F2A4A]/85 font-sans"
                        >
                          <span className="h-[1.6em] flex items-center shrink-0">
                            <CheckCircle2 className="w-4 h-4 text-[#14B8A6]" />
                          </span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <div className="mt-auto pt-6 border-t border-[#0F2A4A]/10">
                  <button
                    type="button"
                    onClick={() => navigate('/contact', { notes: `Interested in ${tier.name}` })}
                    className={`w-full min-h-[48px] py-3.5 px-6 rounded-xl font-semibold text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm ${
                      tier.isPopular
                        ? 'bg-[#14B8A6] hover:bg-[#0F8F83] text-[#0F2A4A]'
                        : 'border-2 border-[#14B8A6] text-[#0F2A4A] hover:bg-[#14B8A6] hover:text-[#0F2A4A] bg-transparent'
                    }`}
                  >
                    <PhoneCall className="w-4 h-4 shrink-0" />
                    <span>{tier.ctaText}</span>
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Commitment Target Highlight */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-[#0F2A4A] text-[#F6F1E9] border border-[#14B8A6]/40 shadow-[0_14px_36px_rgba(15,42,74,0.14)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7 space-y-2.5">
              <div className="inline-flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#14B8A6] shrink-0" />
                <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#14B8A6]">
                  OUR 6-MONTH TARGET
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#F6F1E9] leading-tight">
                100 new patients in 6 months
              </h3>
              <p className="text-sm text-[#F6F1E9]/85 leading-relaxed font-sans">
                Attended, billed new patients who first reached you through the online system we build and run.
              </p>

              {/* Illustrative Progress Visual */}
              <div className="pt-2 space-y-1.5">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#F6F1E9]/65">
                  <span>Illustrative example</span>
                  <span className="text-[#14B8A6] font-semibold">0 &rarr; 100 patients (Months 1–6)</span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-[#F6F1E9]/10 overflow-hidden p-0.5">
                  <div className="h-full w-full rounded-full bg-gradient-to-r from-[#14B8A6]/40 via-[#14B8A6]/75 to-[#14B8A6]" />
                </div>
                <div className="flex items-center justify-between text-[10px] font-mono text-[#F6F1E9]/50">
                  <span>Start (0)</span>
                  <span>Month 2</span>
                  <span>Month 4</span>
                  <span>Month 6 (100)</span>
                </div>
              </div>

              <p className="text-xs text-[#F6F1E9]/60 pt-1 font-sans">
                A written target with a defined remedy. Not a guarantee of patient numbers or revenue.
              </p>
            </div>

            <div className="lg:col-span-5 lg:border-l lg:border-[#F6F1E9]/15 lg:pl-6 space-y-4">
              <p className="text-sm text-[#F6F1E9]/80 leading-relaxed font-sans">
                Our explicit operational targets are for your clinic to receive 100 new attended patients through the online system within 6 months and to recover its entire 6-month investment through verified online patient appointments and continued revenue growth.
              </p>
              <button
                type="button"
                onClick={() => navigate('/growth-commitment')}
                className="min-h-[44px] inline-flex items-center gap-2 text-xs font-semibold text-[#14B8A6] hover:text-[#F6F1E9] transition-colors cursor-pointer"
              >
                <span>Read Full 6-Month Growth Commitment</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

