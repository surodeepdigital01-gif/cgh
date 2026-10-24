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
      <section className="bg-slate-950 text-white py-16 sm:py-20 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 block mb-2">
              Performance Commitment
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
              Our 6-Month Clinic Growth Commitment Policy
            </h1>
            <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed">
              We align our incentives with your clinical practice. Our explicit operational target is for your clinic to recover its entire 6-month investment through verified online patient appointments and continued revenue growth.
            </p>
          </div>
        </div>
      </section>

      {/* Main Terms & Conditions Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Overview Statement */}
          <div className="p-6 sm:p-8 bg-emerald-50/60 rounded-3xl border border-emerald-200 space-y-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-7 h-7 text-emerald-700 shrink-0" />
              <h2 className="text-xl font-serif font-bold text-slate-900">
                Core Philosophy: Mutually Accountable Partnership
              </h2>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed font-sans">
              A healthcare patient acquisition system is a collaborative effort between our digital technology/marketing infrastructure and your clinic’s front-desk operations. When patient inquiries are captured in seconds and handled warmly by reception, appointment bookings compound naturally.
            </p>
          </div>

          {/* Four Core Commitment Pillar Cards */}
          <div className="space-y-6">
            <h3 className="text-xl font-serif font-bold text-slate-900">
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
                  className="p-5 sm:p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3.5 transition-all duration-200 hover:shadow-md"
                >
                  <div className="flex items-center justify-between gap-3 flex-wrap sm:flex-nowrap">
                    <h4 className="font-serif font-bold text-base text-slate-900 break-words">
                      {pillar.title}
                    </h4>
                    <span className="text-xs font-mono font-medium text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded shrink-0">
                      {pillar.pillarTag}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed font-sans break-words">
                    {pillar.description}
                  </p>
                  <ul className="space-y-2 pt-1 font-sans text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {pillar.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0E9F8E] mt-2 shrink-0" />
                        <span className="flex-1 min-w-0 break-words">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Note under the four cards */}
            <p className="text-xs sm:text-sm text-slate-500 italic pt-1 text-center sm:text-left break-words font-sans">
              {COMMITMENT_TERMS.summaryNote}
            </p>
          </div>

          {/* Legal Non-Deceptive Notice */}
          <div className="p-5 bg-slate-100 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-1.5">
            <div className="flex items-center gap-1.5 font-semibold text-slate-900">
              <AlertCircle className="w-4 h-4 text-slate-700 shrink-0" />
              <span>National Medical Commission Compliance Note</span>
            </div>
            <p className="font-sans break-words">
              This commitment applies strictly to business performance, front-desk technology uptime, and marketing operations. It does not under any circumstances constitute a medical or clinical commitment of procedure outcomes, cure rates, or patient health results.
            </p>
          </div>

          {/* CTA Box */}
          <div className="p-6 sm:p-8 bg-slate-900 text-white rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-serif font-bold text-xl text-white">
                Discuss the Commitment for Your Clinic
              </h3>
              <p className="text-xs text-slate-400 mt-1 font-sans">
                We review your specialty baseline and draft your specific commitment milestones on our call.
              </p>
            </div>
            <button
              type="button"
              onClick={() => navigate('/contact')}
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl text-xs transition-colors shrink-0 cursor-pointer flex items-center gap-2"
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
