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
        return <PhoneMissed className="w-6 h-6 text-[#14B8A6]" />;
      case 'slow-whatsapp':
        return <MessageSquareDashed className="w-6 h-6 text-[#14B8A6]" />;
      default:
        return <Globe className="w-6 h-6 text-[#14B8A6]" />;
    }
  };

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-[#0F2A4A] text-[#F6F1E9] relative">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#14B8A6]/10 border border-[#14B8A6]/20 label-eyebrow text-[#14B8A6] mb-3"
          >
            <AlertTriangle className="w-3.5 h-3.5 text-[#14B8A6]" />
            <span>The Hidden Revenue Leak</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="text-[clamp(2rem,3.5vw,3rem)] leading-[1.18] tracking-[-0.01em] font-serif font-bold text-[#F6F1E9]"
          >
            Why Most Clinics Lose Patients Online Every Day
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="text-[#F6F1E9]/75 text-base sm:text-lg mt-4 leading-[1.6] max-w-[65ch] mx-auto font-sans"
          >
            Doctors spend decades perfecting surgical and clinical outcomes, but patient acquisition leaks continuously through front-desk communication delays.
          </motion.p>
        </div>

        {/* 3 Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {siteConfig.problems.map((prob, idx) => (
            <motion.div
              key={prob.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="h-full"
            >
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                transition={{ duration: 0.2 }}
                className="bg-white/[0.07] rounded-3xl p-6 sm:p-7 border border-[#F6F1E9]/10 shadow-[0_10px_30px_rgba(15,42,74,0.3)] hover:border-[#14B8A6]/40 hover:shadow-[0_16px_38px_rgba(10,29,51,0.45)] transition-colors transition-shadow duration-200 flex flex-col justify-between h-full"
              >
                <div className="flex flex-col flex-1">
                  <div className="w-12 h-12 rounded-xl bg-white/10 border border-[#F6F1E9]/10 flex items-center justify-center mb-6 shrink-0">
                    {getIcon(prob.id)}
                  </div>

                  <h3 className="text-[1.5rem] leading-[1.2] tracking-[-0.01em] font-serif font-bold text-[#F6F1E9] md:min-h-[3.6rem] mb-3">
                    {prob.title}
                  </h3>

                  <p className="text-base text-[#F6F1E9]/75 leading-[1.6] mb-6 font-sans">
                    {prob.description}
                  </p>
                </div>

                <div className="mt-auto pt-4 border-t border-[#F6F1E9]/10 md:min-h-[6.25rem]">
                  <span className="label-eyebrow text-[#14B8A6] block mb-2">
                    Estimated Financial Impact:
                  </span>
                  <p className="text-sm font-medium text-[#F6F1E9] bg-[#14B8A6]/10 p-3 rounded-xl border border-[#14B8A6]/20 leading-[1.5]">
                    {prob.impact}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Action Link to Calculator / Audit */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => navigate('/calculator')}
            className="min-h-[44px] inline-flex items-center gap-2 text-sm font-semibold text-[#14B8A6] hover:text-[#0F8F83] transition-colors cursor-pointer px-4 py-2"
          >
            <span>Calculate how many patient inquiries your clinic is losing each month</span>
            <ArrowRight className="w-4 h-4 text-[#14B8A6] shrink-0" />
          </button>
        </div>
      </div>
    </section>
  );
};

