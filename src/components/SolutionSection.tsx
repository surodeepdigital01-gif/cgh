import React from 'react';
import { motion } from 'motion/react';
import { siteConfig } from '../config/siteConfig.ts';
import { Globe, MessageCircle, PhoneCall, Video, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { useRouter } from '../router/Router.tsx';

export const SolutionSection: React.FC = () => {
  const { navigate } = useRouter();

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'website':
        return <Globe className="w-6 h-6 text-[#0E9F8E]" />;
      case 'whatsapp':
        return <MessageCircle className="w-6 h-6 text-[#0E9F8E]" />;
      case 'ai-receptionist':
        return <PhoneCall className="w-6 h-6 text-[#0E9F8E]" />;
      default:
        return <Video className="w-6 h-6 text-[#0E9F8E]" />;
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-white relative">
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
            <Sparkles className="w-3.5 h-3.5 text-[#C8A24A]" />
            <span>The Unified Solution</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0B1F3A] tracking-tight"
          >
            Your Complete Patient Growth System
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed"
          >
            Four interconnected growth engines that capture, reassure, and schedule patient appointments around the clock without adding workload to your staff.
          </motion.p>
        </div>

        {/* 4 Large Service Cards with 3D Tilt Hover and Gradient Border Glow */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {siteConfig.services.map((srv, idx) => (
            <motion.div
              key={srv.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: 'easeOut' }}
              whileHover={{
                y: -6,
                rotateX: 2,
                rotateY: -2,
                transition: { duration: 0.2 },
              }}
              style={{ transformStyle: 'preserve-3d' }}
              className="group relative bg-[#F7FAFC] rounded-3xl p-8 sm:p-10 border border-slate-200/90 hover:border-transparent transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-2xl overflow-hidden"
            >
              {/* Glowing Teal-to-Gold Gradient Border on Hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#0E9F8E] via-[#C8A24A]/40 to-[#0B1F3A] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 p-[1.5px]" />
              <div className="absolute inset-[1.5px] rounded-[22px] bg-[#F7FAFC] -z-10" />

              <div>
                {/* Card Top: Number, Icon, Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <motion.div
                      whileHover={{ rotate: 12, scale: 1.1 }}
                      className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center justify-center"
                    >
                      {getServiceIcon(srv.id)}
                    </motion.div>
                    <span className="font-mono text-xs font-bold text-slate-400">
                      PILLAR {srv.number}
                    </span>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-[#E6F7F5] text-[#0A7F72] text-xs font-semibold font-mono tracking-tight border border-teal-200/60">
                    {srv.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-serif font-bold text-[#0B1F3A] mb-3 group-hover:text-[#0E9F8E] transition-colors">
                  {srv.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {srv.description}
                </p>

                {/* Feature Bullet Points */}
                <div className="space-y-2.5 mb-8">
                  {srv.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#0E9F8E] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA on card */}
              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-500 font-mono">
                  100% Done-For-You
                </span>
                <button
                  type="button"
                  onClick={() => navigate('/contact', { notes: `Interested in ${srv.title}` })}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0E9F8E] group-hover:text-[#0A7F72] transition-colors cursor-pointer"
                >
                  <span>Inquire for Your Clinic</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global CTA Banner under services */}
        <div className="mt-16 p-8 rounded-3xl bg-[#0B1F3A] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h4 className="text-xl font-serif font-bold text-white">
              The Doctor Never Touches Any Software
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
              Our engineering team integrates the complete system with your phone numbers and Google accounts. You only see confirmed consultations.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate('/contact')}
            className="px-6 py-3.5 bg-[#0E9F8E] hover:bg-[#0A7F72] text-white text-xs sm:text-sm font-semibold rounded-xl shrink-0 transition-all cursor-pointer shadow-md"
          >
            Book Free Growth Audit
          </motion.button>
        </div>

      </div>
    </section>
  );
};
