import React from 'react';
import { motion } from 'motion/react';
import { siteConfig } from '../config/siteConfig.ts';
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { useRouter } from '../router/Router.tsx';

export const WhoWeServe: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E6F7F5] text-xs font-semibold uppercase tracking-wider text-[#0A7F72] mb-3 font-sans">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A24A]" />
            <span>Specialty Focus</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0B1F3A] tracking-tight">
            Built for Appointment-Led Clinics
          </h2>

          <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed font-sans">
            Our growth systems are designed around how patients book, call and follow up in high-consideration clinics.
          </p>
        </div>

        {/* 5 Specialty Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {siteConfig.specialties.map((spec, idx) => (
            <motion.div
              key={spec.slug || idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-[#F7FAFC] rounded-2xl p-7 sm:p-8 border border-slate-200 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-sans text-xs font-semibold text-[#0E9F8E] tracking-wider uppercase">
                    Specialty 0{idx + 1}
                  </span>
                  <button
                    onClick={() => navigate(spec.path || `/specialties/${spec.slug}`)}
                    className="text-xs text-slate-500 hover:text-[#0E9F8E] transition-colors font-medium"
                  >
                    Details →
                  </button>
                </div>

                <h3 className="text-xl font-serif font-bold text-[#0B1F3A] mb-2.5 group-hover:text-[#0E9F8E] transition-colors">
                  <button
                    onClick={() => navigate(spec.path || `/specialties/${spec.slug}`)}
                    className="text-left focus:outline-none cursor-pointer"
                  >
                    {spec.name}
                  </button>
                </h3>

                <p className="text-xs text-slate-600 mb-5 leading-relaxed font-sans">
                  {spec.description}
                </p>

                <div className="space-y-3 pt-3 border-t border-slate-200/80 text-xs font-sans">
                  <div>
                    <span className="font-semibold text-rose-700 block mb-0.5">Primary Bottleneck:</span>
                    <p className="text-slate-600 leading-snug">{spec.challenge}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-[#0A7F72] block mb-0.5">Automated Solution:</span>
                    <p className="text-slate-700 leading-snug font-medium">{spec.solution}</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-200 flex flex-col sm:flex-row gap-2">
                <button
                  type="button"
                  onClick={() => navigate(spec.path || `/specialties/${spec.slug}`)}
                  className="flex-1 py-2.5 px-3 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-semibold text-xs rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-1 shadow-2xs"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => navigate('/contact', { specialty: spec.name })}
                  className="flex-1 py-2.5 px-3 bg-[#0E9F8E] hover:bg-[#0A7F72] text-white font-semibold text-xs rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-1 shadow-2xs"
                >
                  <span>Book Audit</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
