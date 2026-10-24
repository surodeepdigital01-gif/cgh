import React from 'react';
import { motion } from 'motion/react';
import { siteConfig } from '../config/siteConfig.ts';
import { PhoneMissed, MessageSquareDashed, Globe, AlertTriangle, ArrowRight } from 'lucide-react';
import { useRouter } from '../router/Router.tsx';

export const ProblemSection: React.FC = () => {
  const { navigate } = useRouter();

  const getIcon = (id: string) => {
    switch (id) {
      case 'missed-calls':
        return <PhoneMissed className="w-6 h-6 text-rose-500" />;
      case 'slow-whatsapp':
        return <MessageSquareDashed className="w-6 h-6 text-amber-500" />;
      default:
        return <Globe className="w-6 h-6 text-[#0E9F8E]" />;
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-[#F7FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with Staggered Scroll Reveal */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-xs font-semibold uppercase tracking-wider text-rose-800 mb-3"
          >
            <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
            <span>The Hidden Revenue Leak</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0B1F3A] tracking-tight"
          >
            Why Most Clinics Lose Patients Online Every Day
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed"
          >
            Doctors spend decades perfecting surgical and clinical outcomes, but patient acquisition leaks continuously through front-desk communication delays.
          </motion.p>
        </div>

        {/* 3 Problem Cards with Hover Lift & Staggered Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteConfig.problems.map((prob, idx) => (
            <motion.div
              key={prob.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: 'easeOut' }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-6">
                  {getIcon(prob.id)}
                </div>

                <h3 className="text-xl font-serif font-bold text-[#0B1F3A] mb-3">
                  {prob.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {prob.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <span className="text-[11px] font-mono uppercase tracking-wider text-rose-700 font-semibold block mb-1">
                  Estimated Financial Impact:
                </span>
                <p className="text-xs font-medium text-slate-800 bg-rose-50/70 p-2.5 rounded-lg border border-rose-100">
                  {prob.impact}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Link to Calculator / Audit */}
        <div className="mt-12 text-center">
          <button
            onClick={() => navigate('/calculator')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0E9F8E] hover:text-[#0A7F72] transition-colors cursor-pointer"
          >
            <span>Calculate how many patient inquiries your clinic is losing each month</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
