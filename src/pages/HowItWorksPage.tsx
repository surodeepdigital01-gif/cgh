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
    <Search key="1" className="w-6 h-6 text-emerald-600" />,
    <Wrench key="2" className="w-6 h-6 text-emerald-600" />,
    <Rocket key="3" className="w-6 h-6 text-emerald-600" />,
    <TrendingUp key="4" className="w-6 h-6 text-emerald-600" />,
  ];

  return (
    <div className="w-full">
      {/* Hero Header */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 block mb-2">
              Implementation Playbook
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
              How We Build Your Clinic Growth Engine in 6 Months
            </h1>
            <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed">
              A transparent, phased engagement designed around your clinic schedule. We handle 95% of the heavy lifting, requiring only 45 minutes of front-desk orientation and short doctor review checkpoints.
            </p>
          </div>
        </div>
      </section>

      {/* 4 Steps Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800 block mb-2 font-mono">
              The Phased Deployment
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 tracking-tight">
              Four Structured Phases from Audit to Compounding Retainers
            </h2>
          </div>

          <div className="space-y-16">
            {TIMELINE_STEPS.map((step, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start p-8 sm:p-10 bg-slate-50 rounded-3xl border border-slate-200"
              >
                {/* Left col: Phase metadata */}
                <div className="lg:col-span-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
                      {phaseIcons[idx]}
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-emerald-800 uppercase tracking-wider">
                        {step.step}
                      </span>
                      <p className="text-sm font-semibold text-slate-900 font-mono">
                        {step.timeframe}
                      </p>
                    </div>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-slate-900 pt-1">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-normal">
                    Designed to execute in parallel with your normal OPD operations without taxing clinic nursing or billing staff.
                  </p>
                </div>

                {/* Right col: Description and deliverables */}
                <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-6">
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {step.deliverables.map((del, dIdx) => (
                      <div
                        key={dIdx}
                        className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 font-medium"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span>Clinic Time Commitment: &le; 1 hour</span>
                    <span className="text-emerald-700 font-medium">Turnkey execution by agency</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6-Month Timeline Visual Component */}
      <section className="py-20 bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 block mb-2">
              The 6-Month Trajectory
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
              What the Full 6 Months Look Like
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2">
              Here is how your clinic transitions from missed-call leaks to a self-sustaining patient acquisition machine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            <div className="bg-slate-800/90 p-5 rounded-2xl border border-slate-700 space-y-2">
              <span className="text-xs font-mono text-emerald-400 font-bold">Month 1</span>
              <h4 className="font-serif font-bold text-sm text-white">Audit &amp; Setup</h4>
              <p className="text-xs text-slate-400">Audit call leakages, set up WhatsApp Business API, register verified profiles, and design website.</p>
            </div>

            <div className="bg-slate-800/90 p-5 rounded-2xl border border-slate-700 space-y-2">
              <span className="text-xs font-mono text-emerald-400 font-bold">Month 2</span>
              <h4 className="font-serif font-bold text-sm text-white">Go-Live &amp; AI</h4>
              <p className="text-xs text-slate-400">Launch website and 24/7 AI call assistant. Front-desk team trained in a 45-min remote session.</p>
            </div>

            <div className="bg-slate-800/90 p-5 rounded-2xl border border-slate-700 space-y-2">
              <span className="text-xs font-mono text-emerald-400 font-bold">Month 3</span>
              <h4 className="font-serif font-bold text-sm text-white">Patient Campaigns</h4>
              <p className="text-xs text-slate-400">Launch targeted local search and treatment positioning campaigns. Doctor reels published.</p>
            </div>

            <div className="bg-slate-800/90 p-5 rounded-2xl border border-slate-700 space-y-2">
              <span className="text-xs font-mono text-emerald-400 font-bold">Month 4</span>
              <h4 className="font-serif font-bold text-sm text-white">Triage Tuning</h4>
              <p className="text-xs text-slate-400">Review appointment show-up rates. Optimize chatbot scripts and automated SMS/WhatsApp reminders.</p>
            </div>

            <div className="bg-slate-800/90 p-5 rounded-2xl border border-slate-700 space-y-2">
              <span className="text-xs font-mono text-emerald-400 font-bold">Month 5</span>
              <h4 className="font-serif font-bold text-sm text-white">Recall Loops</h4>
              <p className="text-xs text-slate-400">Activate patient retention &amp; procedure check-in sequences. Maximize lifetime patient value.</p>
            </div>

            <div className="bg-slate-800/90 p-5 rounded-2xl border border-slate-700 space-y-2">
              <span className="text-xs font-mono text-emerald-400 font-bold">Month 6</span>
              <h4 className="font-serif font-bold text-sm text-white">Full Recovery</h4>
              <p className="text-xs text-slate-400">Review 6-month investment recovery. Permanent ownership of assets handed over. Transition to retainer.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Front-Desk Onboarding FAQ card */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200 space-y-6">
          <div className="flex items-center gap-3">
            <Users className="w-6 h-6 text-emerald-700" />
            <h3 className="text-xl font-serif font-bold text-slate-900">
              How Does Front-Desk Training Work?
            </h3>
          </div>
          <p className="text-sm text-slate-700 leading-relaxed">
            Many clinic software implementations fail because front-desk staff find them complex. We take the opposite approach: your staff does not need to learn a whole new EHR. In a single 45-minute training call, we show them how to:
          </p>
          <ul className="space-y-2 text-xs text-slate-700">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
              <span>Receive instant WhatsApp notifications when an emergency or high-ticket consult needs human attention</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
              <span>View the daily missed-call rescue log to see which patients were pre-booked by the AI voice assistant</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
              <span>Use 1-click WhatsApp message templates to answer procedure pricing without typing long paragraphs</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-slate-950 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl font-serif font-bold text-white tracking-tight">
            Schedule Your Clinic’s Initial Patient Leakage Audit
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Book a 30-minute discovery session with our senior healthcare growth team today.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => navigate('/contact')}
              className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl text-sm transition-all shadow-lg hover:shadow-emerald-900/40 inline-flex items-center gap-2 cursor-pointer"
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
