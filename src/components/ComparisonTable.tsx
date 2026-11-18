import React from 'react';
import { motion } from 'motion/react';
import { siteConfig } from '../config/siteConfig.ts';
import { Check, X, Sparkles } from 'lucide-react';

export const ComparisonTable: React.FC = () => {
  return (
    <section id="comparison" className="py-12 md:py-16 lg:py-24 bg-[#F6F1E9] text-[#0F2A4A] border-t border-[#0F2A4A]/10">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#14B8A6]/10 label-eyebrow text-[#0F2A4A] border border-[#14B8A6]/20 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#14B8A6]" />
            <span>Honest Evaluation</span>
          </div>

          <h2 className="text-[clamp(2rem,3.5vw,3rem)] leading-[1.18] tracking-[-0.01em] font-serif font-bold text-[#0F2A4A]">
            Done-For-You vs. DIY Software &amp; Generic Agencies
          </h2>

          <p className="text-[#0F2A4A]/75 text-base sm:text-lg mt-4 leading-[1.6] max-w-[65ch] font-sans">
            Why busy clinic owners and doctors choose our turnkey infrastructure over complex software or unqualified marketing generalists.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-3xl border border-[#0F2A4A]/10 shadow-[0_10px_30px_rgba(15,42,74,0.06)] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              {/* Header */}
              <thead>
                <tr className="bg-[#F6F1E9]/50 border-b border-[#0F2A4A]/10 label-eyebrow text-[#0F2A4A]/75">
                  <th className="py-5 px-6 font-semibold w-1/4">Key Capability</th>
                  <th className="py-5 px-6 font-bold text-[#0F2A4A] bg-[#14B8A6]/10 w-2/5 border-x border-[#14B8A6]/20">
                    Clinic Growth Helpers (Done-For-You)
                  </th>
                  <th className="py-5 px-6 font-semibold text-[#0F2A4A]/65 w-1/5">
                    DIY Clinic Software / Portals
                  </th>
                  <th className="py-5 px-6 font-semibold text-[#0F2A4A]/65 w-1/5">
                    Generic Marketing Agencies
                  </th>
                </tr>
              </thead>

              {/* Rows */}
              <tbody className="divide-y divide-[#0F2A4A]/10 text-sm sm:text-base leading-[1.6] font-sans">
                {siteConfig.comparison.map((row, idx) => (
                  <motion.tr
                    key={idx}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: idx * 0.05 }}
                    className="hover:bg-[#F6F1E9]/30 transition-colors"
                  >
                    <td className="py-4 px-6 font-semibold text-[#0F2A4A] align-top">
                      {row.feature}
                    </td>

                    {/* Agency Column (Highlighted) */}
                    <td className="py-4 px-6 bg-[#14B8A6]/5 border-x border-[#14B8A6]/20 font-medium text-[#0F2A4A] align-top">
                      <div className="flex items-start gap-2.5">
                        <span className="h-[1.6em] flex items-center shrink-0">
                          <span className="w-5 h-5 rounded-full bg-[#14B8A6] text-[#0F2A4A] flex items-center justify-center">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </span>
                        </span>
                        <span>{row.agency}</span>
                      </div>
                    </td>

                    {/* DIY Software */}
                    <td className="py-4 px-6 text-[#0F2A4A]/70 align-top">
                      <div className="flex items-start gap-2">
                        <span className="h-[1.6em] flex items-center shrink-0">
                          <X className="w-4 h-4 text-[#0F2A4A]/45" />
                        </span>
                        <span>{row.diy}</span>
                      </div>
                    </td>

                    {/* Generic Agency */}
                    <td className="py-4 px-6 text-[#0F2A4A]/70 align-top">
                      <div className="flex items-start gap-2">
                        <span className="h-[1.6em] flex items-center shrink-0">
                          <X className="w-4 h-4 text-[#0F2A4A]/45" />
                        </span>
                        <span>{row.genericAgency}</span>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

