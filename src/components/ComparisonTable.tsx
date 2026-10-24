import React from 'react';
import { motion } from 'motion/react';
import { siteConfig } from '../config/siteConfig.ts';
import { Check, X, ShieldCheck, Sparkles } from 'lucide-react';

export const ComparisonTable: React.FC = () => {
  return (
    <section id="comparison" className="py-20 sm:py-28 bg-[#F7FAFC] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E6F7F5] text-xs font-semibold uppercase tracking-wider text-[#0A7F72] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#0E9F8E]" />
            <span>Honest Evaluation</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0B1F3A] tracking-tight">
            Done-For-You vs. DIY Software &amp; Generic Agencies
          </h2>

          <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
            Why busy clinic owners and doctors choose our turnkey infrastructure over complex software or unqualified marketing generalists.
          </p>
        </div>

        {/* Comparison Table with Row Stagger Animation */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              
              {/* Header */}
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-xs font-mono uppercase tracking-wider text-slate-500">
                  <th className="py-5 px-6 font-semibold w-1/4">Key Capability</th>
                  <th className="py-5 px-6 font-bold text-[#0A7F72] bg-[#E6F7F5]/80 w-2/5 border-x border-teal-200/80">
                    Clinic Growth Helpers (Done-For-You)
                  </th>
                  <th className="py-5 px-6 font-medium text-slate-500 w-1/5">
                    DIY Clinic Software / Portals
                  </th>
                  <th className="py-5 px-6 font-medium text-slate-500 w-1/5">
                    Generic Marketing Agencies
                  </th>
                </tr>
              </thead>

              {/* Rows sliding in one by one */}
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {siteConfig.comparison.map((row, idx) => (
                  <motion.tr
                    key={idx}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="hover:bg-slate-50/60 transition-colors"
                  >
                    <td className="py-4 px-6 font-semibold text-[#0B1F3A]">
                      {row.feature}
                    </td>

                    {/* Agency Column (Highlighted) */}
                    <td className="py-4 px-6 bg-[#E6F7F5]/30 border-x border-teal-200/60 font-medium text-slate-900">
                      <div className="flex items-start gap-2.5">
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.15 + idx * 0.08, type: 'spring' }}
                          className="w-5 h-5 rounded-full bg-[#0E9F8E] text-white flex items-center justify-center shrink-0 mt-0.5"
                        >
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </motion.div>
                        <span>{row.agency}</span>
                      </div>
                    </td>

                    {/* DIY Software */}
                    <td className="py-4 px-6 text-slate-500">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                        <span>{row.diy}</span>
                      </div>
                    </td>

                    {/* Generic Agency */}
                    <td className="py-4 px-6 text-slate-500">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
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
