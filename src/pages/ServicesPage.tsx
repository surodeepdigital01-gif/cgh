import React from 'react';
import { motion } from 'motion/react';
import { useRouter } from '../router/Router.tsx';
import { CLINIC_SERVICES } from '../data/clinicData.ts';
import {
  PhoneCall,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe,
  MessageCircle,
  Video,
  Target,
  BarChart3,
} from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const { navigate } = useRouter();

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'clinic-website':
        return <Globe className="w-6 h-6 text-[#14B8A6]" />;
      case 'whatsapp-chatbot':
        return <MessageCircle className="w-6 h-6 text-[#14B8A6]" />;
      case 'ai-call-assistant':
        return <PhoneCall className="w-6 h-6 text-[#14B8A6]" />;
      case 'social-media-growth':
        return <Video className="w-6 h-6 text-[#14B8A6]" />;
      case 'growth-strategy':
        return <Target className="w-6 h-6 text-[#14B8A6]" />;
      case 'performance-reporting':
        return <BarChart3 className="w-6 h-6 text-[#14B8A6]" />;
      default:
        return <Zap className="w-6 h-6 text-[#14B8A6]" />;
    }
  };

  return (
    <div className="w-full">
      {/* Header Banner */}
      <section className="bg-[#0F2A4A] text-[#F6F1E9] py-16 sm:py-20 border-b border-[#F6F1E9]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#14B8A6] block mb-2">
              Our 6 Core Patient Growth Pillars
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#F6F1E9] tracking-tight">
              A Connected Patient Acquisition Infrastructure
            </h1>
            <p className="text-[#F6F1E9]/70 text-base sm:text-lg mt-4 leading-relaxed">
              We do not believe in piecemeal marketing. Isolated social media posts or a disconnected brochure website fail because the front desk cannot manage the leaks. Here is how our 6 interconnected pillars turn searchers into completed clinical consultations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List Deep-Dive */}
      <section className="py-20 bg-[#F6F1E9] text-[#0F2A4A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-20">
          {CLINIC_SERVICES.map((srv, idx) => (
            <motion.div
              key={srv.id}
              id={srv.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: idx === 0 ? 0.05 : 0,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="scroll-mt-28 p-6 sm:p-12 rounded-3xl border border-[#0F2A4A]/10 bg-white hover:shadow-md transition-shadow duration-300 shadow-xs"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Left Column: Number, Title, Overview */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-bold text-[#0F2A4A] bg-[#14B8A6]/15 px-3 py-1 rounded">
                      Pillar {srv.number}
                    </span>
                    <div className="p-2 bg-[#F6F1E9] rounded-lg border border-[#0F2A4A]/10 shadow-2xs">
                      {getServiceIcon(srv.id)}
                    </div>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0F2A4A] tracking-tight">
                    {srv.title}
                  </h2>

                  <p className="text-base text-[#0F2A4A]/80 leading-relaxed">
                    {srv.longDesc}
                  </p>

                  {/* How it works for clinic staff */}
                  <div className="p-4 bg-[#F6F1E9] rounded-xl border border-[#0F2A4A]/10 text-xs text-[#0F2A4A] space-y-1">
                    <strong className="text-[#0F2A4A] block font-semibold">
                      Front-Desk &amp; Doctor Workflow Impact:
                    </strong>
                    <p className="leading-relaxed text-[#0F2A4A]/70">
                      {srv.howItWorks}
                    </p>
                  </div>

                  {/* Verified Deliverables */}
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-[#0F2A4A]/60 mb-3">
                      Core Technical Deliverables Included:
                    </h3>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-[#0F2A4A]/80">
                      {srv.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#14B8A6] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Column: Case Proof Placeholder Card */}
                <div className="lg:col-span-5 flex flex-col justify-between bg-[#F6F1E9] p-6 sm:p-8 rounded-2xl border border-[#0F2A4A]/10 shadow-xs">
                  <div>
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#0F2A4A]/10">
                      <span className="text-xs font-mono uppercase tracking-wider text-[#0F2A4A]/50">
                        Operational Benchmark
                      </span>
                      <span className="px-2 py-0.5 bg-[#14B8A6]/15 text-[#0F2A4A] rounded font-mono text-xs font-bold">
                        Target Impact
                      </span>
                    </div>

                    <div className="mb-6">
                      <p className="text-xs text-[#0F2A4A]/60 mb-1">Target Outcome</p>
                      <p className="text-xl font-bold font-serif text-[#0F2A4A]">
                        {srv.impactMetric}
                      </p>
                    </div>

                    {/* Strict Truthfulness Placeholder for Client Proof */}
                    <div className="p-5 bg-white rounded-xl border border-dashed border-[#0F2A4A]/20 text-center space-y-2">
                      <span className="font-mono text-xs text-[#0F2A4A] bg-[#14B8A6]/15 px-2 py-0.5 rounded font-semibold inline-block">
                        [Client result coming soon]
                      </span>
                      <p className="text-xs text-[#0F2A4A]/70 leading-normal">
                        Verified case study documentation will be published here upon completion of active clinic cohort verification.
                      </p>
                      <p className="text-[11px] text-[#0F2A4A]/50 italic">
                        In accordance with ethical healthcare standards, we do not fabricate testimonial data or mock client reviews.
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-[#0F2A4A]/10">
                    <button
                      type="button"
                      onClick={() => navigate('/contact', { notes: `Interested in Pillar ${srv.number}: ${srv.title}` })}
                      className="w-full min-h-[44px] py-3 px-4 bg-[#14B8A6] hover:bg-[#0F8F83] text-[#0F2A4A] font-semibold rounded-xl text-sm sm:text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                    >
                      <span>Inquire About This Pillar</span>
                      <ArrowRight className="w-4 h-4 text-[#0F2A4A]" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Integration Workflow Note */}
      <section className="py-16 bg-white border-t border-b border-[#0F2A4A]/10 text-[#0F2A4A]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl mx-auto px-6 lg:px-8 text-center space-y-4"
        >
          <ShieldCheck className="w-10 h-10 text-[#14B8A6] mx-auto" />
          <h2 className="text-2xl font-serif font-bold text-[#0F2A4A]">
            Engineered to Empower Your Front Desk, Never to Disrupt It
          </h2>
          <p className="text-sm text-[#0F2A4A]/70 max-w-2xl mx-auto leading-relaxed">
            Our technology does not replace your receptionist or nursing team. It acts as a 24/7 digital safety net that relieves them of redundant phone triage, eliminates missed calls during peak billing, and ensures every prospective patient receives dignified, immediate attention.
          </p>
        </motion.div>
      </section>

      {/* Bottom CTA Band */}
      <section className="py-20 bg-[#0F2A4A] text-[#F6F1E9] text-center border-t border-[#F6F1E9]/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto px-6 lg:px-8 space-y-6"
        >
          <h2 className="text-3xl font-serif font-bold text-[#F6F1E9] tracking-tight">
            Ready to Implement the Complete System in Your Clinic?
          </h2>
          <p className="text-[#F6F1E9]/70 text-sm sm:text-base max-w-xl mx-auto">
            Book a 30-minute discovery call to evaluate which pillars will generate the highest immediate patient return for your practice.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => navigate('/contact')}
              className="w-full sm:w-auto min-h-[44px] px-8 py-3.5 bg-[#14B8A6] hover:bg-[#0F8F83] text-[#0F2A4A] font-semibold rounded-xl text-sm transition-all shadow-lg inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-[#0F2A4A]" />
              <span>Book Free Strategy Call</span>
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
