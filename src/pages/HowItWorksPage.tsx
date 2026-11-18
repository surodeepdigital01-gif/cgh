import React from 'react';
import { Link, useRouter } from '../router/Router.tsx';
import { TIMELINE_STEPS } from '../data/clinicData.ts';
import {
  Calendar,
  CheckCircle2,
  ArrowRight,
  PhoneCall,
  ShieldCheck,
  Search,
  Wrench,
  Rocket,
  TrendingUp,
  FileSpreadsheet,
  Users,
} from 'lucide-react';

export const HowItWorksPage: React.FC = () => {
  const { navigate } = useRouter();

  const phaseIcons = [
    <Search key="1" className="w-6 h-6 text-[#14B8A6]" />,
    <Wrench key="2" className="w-6 h-6 text-[#14B8A6]" />,
    <Rocket key="3" className="w-6 h-6 text-[#14B8A6]" />,
    <TrendingUp key="4" className="w-6 h-6 text-[#14B8A6]" />,
  ];

  return (
    <div className="w-full">
      {/* Hero Header */}
      <section className="bg-[#0F2A4A] text-[#F6F1E9] pt-24 pb-12 md:pt-28 md:pb-16 lg:pt-32 lg:pb-24 border-b border-[#F6F1E9]/10">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="label-eyebrow text-[#14B8A6] block mb-3">
              Implementation Playbook
            </span>
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-serif font-bold text-[#F6F1E9] tracking-[-0.01em] leading-[1.15]">
              How We Build Your Clinic Growth Engine in 6 Months
            </h1>
            <p className="text-[#F6F1E9]/80 text-base sm:text-lg mt-4 leading-[1.6] max-w-[65ch]">
              A transparent, phased engagement designed around your clinic schedule. We handle 95% of the heavy lifting, requiring only 45 minutes of front-desk orientation and short doctor review checkpoints.
            </p>
          </div>
        </div>
      </section>

      {/* 4 Steps Section (Cream) */}
      <section className="py-12 md:py-16 lg:py-24 bg-[#F6F1E9]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="label-eyebrow text-[#0F8F83] block mb-2">
              The Phased Deployment
            </span>
            <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-serif font-bold text-[#0F2A4A] tracking-[-0.01em] leading-[1.18]">
              Four Structured Phases from Audit to Compounding Retainers
            </h2>
          </div>

          <div className="space-y-16">
            {TIMELINE_STEPS.map((step, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start p-8 sm:p-10 bg-white rounded-3xl border border-[#0F2A4A]/10 shadow-xs"
              >
                {/* Left col: Phase metadata */}
                <div className="lg:col-span-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-[#F6F1E9] rounded-xl border border-[#0F2A4A]/10 shadow-2xs">
                      {phaseIcons[idx]}
                    </div>
                    <div>
                      <span className="label-eyebrow text-[#0F8F83]">
                        {step.step}
                      </span>
                      <p className="text-sm font-semibold text-[#0F2A4A] font-sans mt-0.5">
                        {step.timeframe}
                      </p>
                    </div>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-[#0F2A4A] pt-1">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#0F2A4A]/60 leading-normal">
                    Designed to execute in parallel with your normal OPD operations without taxing clinic nursing or billing staff.
                  </p>
                </div>

                {/* Right col: Description and deliverables */}
                <div className="lg:col-span-8 bg-[#F6F1E9]/40 p-6 sm:p-8 rounded-2xl border border-[#0F2A4A]/10 space-y-6">
                  <p className="text-sm sm:text-base text-[#0F2A4A]/80 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {step.deliverables.map((del, dIdx) => (
                      <div
                        key={dIdx}
                        className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#0F2A4A]/10 text-xs text-[#0F2A4A] font-medium"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#14B8A6] shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-[#0F2A4A]/10 flex items-center justify-between text-xs text-[#0F2A4A]/60">
                    <span>Clinic Time Commitment: &le; 1 hour</span>
                    <span className="text-[#0F8F83] font-medium">Turnkey execution by agency</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6-Month Timeline Visual Component (Navy) */}
      <section className="py-12 md:py-16 lg:py-24 bg-[#0F2A4A] text-[#F6F1E9] border-t border-[#F6F1E9]/10">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="label-eyebrow text-[#14B8A6] block mb-2">
              The 6-Month Trajectory
            </span>
            <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-serif font-bold text-[#F6F1E9] tracking-[-0.01em] leading-[1.18]">
              What the Full 6 Months Look Like
            </h2>
            <p className="text-[#F6F1E9]/80 text-base sm:text-lg mt-2 leading-[1.6] max-w-[65ch]">
              Here is how your clinic transitions from missed-call leaks to a self-sustaining patient acquisition machine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            <div className="bg-white/[0.07] p-5 rounded-2xl border border-[#F6F1E9]/10 space-y-2">
              <span className="text-xs font-mono text-[#14B8A6] font-bold">Month 1</span>
              <h4 className="font-serif font-bold text-sm text-[#F6F1E9]">Audit &amp; Setup</h4>
              <p className="text-xs text-[#F6F1E9]/70">Audit call leakages, set up WhatsApp Business API, register verified profiles, and design website.</p>
            </div>

            <div className="bg-white/[0.07] p-5 rounded-2xl border border-[#F6F1E9]/10 space-y-2">
              <span className="text-xs font-mono text-[#14B8A6] font-bold">Month 2</span>
              <h4 className="font-serif font-bold text-sm text-[#F6F1E9]">Go-Live &amp; AI</h4>
              <p className="text-xs text-[#F6F1E9]/70">Launch website and 24/7 AI call assistant. Front-desk team trained in a 45-min remote session.</p>
            </div>

            <div className="bg-white/[0.07] p-5 rounded-2xl border border-[#F6F1E9]/10 space-y-2">
              <span className="text-xs font-mono text-[#14B8A6] font-bold">Month 3</span>
              <h4 className="font-serif font-bold text-sm text-[#F6F1E9]">Patient Campaigns</h4>
              <p className="text-xs text-[#F6F1E9]/70">Launch targeted local search and treatment positioning campaigns. Doctor reels published.</p>
            </div>

            <div className="bg-white/[0.07] p-5 rounded-2xl border border-[#F6F1E9]/10 space-y-2">
              <span className="text-xs font-mono text-[#14B8A6] font-bold">Month 4</span>
              <h4 className="font-serif font-bold text-sm text-[#F6F1E9]">Triage Tuning</h4>
              <p className="text-xs text-[#F6F1E9]/70">Review appointment show-up rates. Optimize chatbot scripts and automated SMS/WhatsApp reminders.</p>
            </div>

            <div className="bg-white/[0.07] p-5 rounded-2xl border border-[#F6F1E9]/10 space-y-2">
              <span className="text-xs font-mono text-[#14B8A6] font-bold">Month 5</span>
              <h4 className="font-serif font-bold text-sm text-[#F6F1E9]">Recall Loops</h4>
              <p className="text-xs text-[#F6F1E9]/70">Activate patient retention &amp; procedure check-in sequences. Maximize lifetime patient value.</p>
            </div>

            <div className="bg-white/[0.07] p-5 rounded-2xl border border-[#F6F1E9]/10 space-y-2">
              <span className="text-xs font-mono text-[#14B8A6] font-bold">Month 6</span>
              <h4 className="font-serif font-bold text-sm text-[#F6F1E9]">Full Recovery</h4>
              <p className="text-xs text-[#F6F1E9]/70">Review 6-month investment recovery. Permanent ownership of assets handed over. Transition to retainer.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Front-Desk Onboarding FAQ card (Cream) */}
      <section className="py-20 bg-[#F6F1E9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 sm:p-10 rounded-3xl border border-[#0F2A4A]/10 shadow-xs space-y-6">
          <div className="flex items-center gap-3">
            <Users className="w-6 h-6 text-[#0F8F83]" />
            <h3 className="text-xl font-serif font-bold text-[#0F2A4A]">
              How Does Front-Desk Training Work?
            </h3>
          </div>
          <p className="text-sm text-[#0F2A4A]/80 leading-relaxed">
            Many clinic software implementations fail because front-desk staff find them complex. We take the opposite approach: your staff does not need to learn a whole new EHR. In a single 45-minute training call, we show them how to:
          </p>
          <ul className="space-y-2 text-xs text-[#0F2A4A]/80">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#14B8A6] shrink-0 mt-0.5" />
              <span>Receive instant WhatsApp notifications when an emergency or high-ticket consult needs human attention</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#14B8A6] shrink-0 mt-0.5" />
              <span>View the daily missed-call rescue log to see which patients were pre-booked by the AI voice assistant</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#14B8A6] shrink-0 mt-0.5" />
              <span>Use 1-click WhatsApp message templates to answer procedure pricing without typing long paragraphs</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Bottom CTA (Navy) */}
      <section className="py-12 md:py-16 lg:py-24 bg-[#0F2A4A] text-[#F6F1E9] text-center border-t border-[#F6F1E9]/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-6">
          <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-serif font-bold text-[#F6F1E9] tracking-[-0.01em] leading-[1.18]">
            Schedule Your Clinic’s Initial Patient Leakage Audit
          </h2>
          <p className="text-[#F6F1E9]/80 text-base sm:text-lg max-w-[65ch] mx-auto leading-[1.6]">
            Book a 30-minute discovery session with our senior healthcare growth team today.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => navigate('/contact')}
              className="min-h-[48px] px-8 py-3.5 bg-[#14B8A6] hover:bg-[#0F8F83] text-[#0F2A4A] font-semibold rounded-xl text-sm transition-colors shadow-md inline-flex items-center gap-2 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Book Free Strategy Call</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
