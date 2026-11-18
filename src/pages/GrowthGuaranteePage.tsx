import React from 'react';
import { motion } from 'motion/react';
import { useRouter } from '../router/Router.tsx';
import { ShieldCheck, AlertCircle, PhoneCall } from 'lucide-react';
import { COMMITMENT_TERMS } from '../config/siteConfig.ts';

export const GrowthGuaranteePage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-[#0F2A4A] text-[#F6F1E9] py-16 sm:py-20 border-b border-[#F6F1E9]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#14B8A6] block mb-2">
              Performance Commitment
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#F6F1E9] tracking-tight">
              Our 6-Month Clinic Growth Commitment Policy
            </h1>
            <p className="text-[#F6F1E9]/80 text-base sm:text-lg mt-4 leading-relaxed">
              Our explicit operational targets are for your clinic to receive 100 new attended patients through the online system within 6 months and to recover its entire 6-month investment through verified online patient appointments and continued revenue growth.
            </p>
          </div>
        </div>
      </section>

      {/* Main Terms & Conditions Section */}
      <section className="py-16 sm:py-20 bg-[#F6F1E9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* 6-Month Operational Target Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="p-6 sm:p-8 bg-white rounded-3xl border border-[#0F2A4A]/10 shadow-xs space-y-6"
          >
            <div className="space-y-2.5">
              <span className="inline-block text-xs font-mono font-bold uppercase tracking-wider text-[#0F8F83] bg-[#14B8A6]/15 px-3 py-1 rounded">
                {COMMITMENT_TERMS.targetSection.eyebrow}
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0F2A4A] tracking-tight">
                {COMMITMENT_TERMS.targetSection.headline}
              </h2>
              <p className="text-sm sm:text-base text-[#0F2A4A]/80 leading-relaxed font-sans max-w-2xl">
                {COMMITMENT_TERMS.targetSection.description}
              </p>
            </div>

            {/* Illustrative Trajectory Visual */}
            <div className="p-5 sm:p-6 bg-[#F6F1E9]/70 rounded-2xl border border-[#0F2A4A]/10 space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#0F2A4A]/70">
                  {COMMITMENT_TERMS.targetSection.illustrativeLabel}
                </span>
                <span className="text-xs sm:text-sm font-mono font-bold text-[#0F2A4A]">
                  {COMMITMENT_TERMS.targetSection.trajectoryTitle}
                </span>
              </div>

              {/* Progress Track + Milestones */}
              <div className="relative pt-2 pb-1">
                <div className="hidden sm:block absolute top-[18px] left-6 right-6 h-1.5 bg-[#0F2A4A]/10 rounded-full overflow-hidden">
                  <div className="h-full w-full bg-[#14B8A6] rounded-full" />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 relative z-10">
                  {COMMITMENT_TERMS.targetSection.milestones.map((step, idx) => {
                    const isFinal = idx === COMMITMENT_TERMS.targetSection.milestones.length - 1;
                    return (
                      <div
                        key={step.label}
                        className="flex flex-col items-start sm:items-center gap-2 bg-white sm:bg-transparent p-3 sm:p-0 rounded-xl border sm:border-0 border-[#0F2A4A]/10"
                      >
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center border-2 text-[10px] font-mono font-bold transition-colors ${
                            isFinal
                              ? 'bg-[#14B8A6] border-[#0F2A4A] text-[#0F2A4A]'
                              : 'bg-white border-[#14B8A6] text-[#0F2A4A]'
                          }`}
                        >
                          {idx + 1}
                        </div>
                        <span
                          className={`text-xs sm:text-sm font-mono ${
                            isFinal ? 'font-bold text-[#0F2A4A]' : 'font-medium text-[#0F2A4A]/80'
                          } sm:text-center`}
                        >
                          {step.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#0F2A4A]/70 font-sans border-t border-[#0F2A4A]/10 pt-4">
              {COMMITMENT_TERMS.targetSection.disclaimer}
            </p>
          </motion.div>

          {/* Overview Statement */}
          <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#0F2A4A]/10 shadow-xs space-y-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-7 h-7 text-[#0F8F83] shrink-0" />
              <h2 className="text-xl font-serif font-bold text-[#0F2A4A]">
                Core Philosophy: Mutually Accountable Partnership
              </h2>
            </div>
            <p className="text-sm text-[#0F2A4A]/80 leading-relaxed font-sans">
              A healthcare patient acquisition system is a collaborative effort between our digital technology/marketing infrastructure and your clinic’s front-desk operations. When patient inquiries are captured in seconds and handled warmly by reception, appointment bookings compound naturally.
            </p>
          </div>

          {/* Four Core Commitment Pillar Cards */}
          <div className="space-y-6">
            <h3 className="text-xl font-serif font-bold text-[#0F2A4A]">
              {COMMITMENT_TERMS.sectionTitle}
            </h3>

            <div className="space-y-6">
              {COMMITMENT_TERMS.pillars.map((pillar, idx) => (
                <motion.div
                  key={pillar.pillarTag}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="p-5 sm:p-6 bg-white rounded-2xl border border-[#0F2A4A]/10 shadow-xs space-y-3.5 transition-all duration-200 hover:shadow-md"
                >
                  <div className="flex items-center justify-between gap-3 flex-wrap sm:flex-nowrap">
                    <h4 className="font-serif font-bold text-base text-[#0F2A4A] break-words">
                      {pillar.title}
                    </h4>
                    <span className="text-xs font-mono font-medium text-[#0F2A4A] bg-[#14B8A6]/20 px-2.5 py-0.5 rounded shrink-0">
                      {pillar.pillarTag}
                    </span>
                  </div>
                  <p className="text-sm text-[#0F2A4A]/70 leading-relaxed font-sans break-words">
                    {pillar.description}
                  </p>
                  <ul className="space-y-2 pt-1 font-sans text-xs sm:text-sm text-[#0F2A4A]/80 leading-relaxed">
                    {pillar.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6] mt-2 shrink-0" />
                        <span className="flex-1 min-w-0 break-words">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Note under the four cards */}
            <p className="text-xs sm:text-sm text-[#0F2A4A]/60 italic pt-1 text-center sm:text-left break-words font-sans">
              {COMMITMENT_TERMS.summaryNote}
            </p>
          </div>

          {/* Legal Non-Deceptive Notice */}
          <div className="p-5 bg-white/70 rounded-xl border border-[#0F2A4A]/10 text-xs text-[#0F2A4A]/70 space-y-1.5">
            <div className="flex items-center gap-1.5 font-semibold text-[#0F2A4A]">
              <AlertCircle className="w-4 h-4 text-[#0F2A4A]/60 shrink-0" />
              <span>National Medical Commission Compliance Note</span>
            </div>
            <p className="font-sans break-words">
              This commitment applies strictly to business performance, front-desk technology uptime, and marketing operations. It does not under any circumstances constitute a medical or clinical commitment of procedure outcomes, cure rates, or patient health results.
            </p>
          </div>

          {/* CTA Box */}
          <div className="p-6 sm:p-8 bg-[#0F2A4A] text-[#F6F1E9] rounded-3xl border border-[#F6F1E9]/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-serif font-bold text-xl text-[#F6F1E9]">
                Discuss the Commitment for Your Clinic
              </h3>
              <p className="text-xs text-[#F6F1E9]/70 mt-1 font-sans">
                We review your specialty baseline and draft your specific commitment milestones on our call.
              </p>
            </div>
            <button
              type="button"
              onClick={() => navigate('/contact')}
              className="px-6 py-3 bg-[#14B8A6] hover:bg-[#0F8F83] text-[#0F2A4A] font-semibold rounded-xl text-xs transition-colors shrink-0 cursor-pointer flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Book Discovery Call</span>
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};
