import React from 'react';
import { Link, useRouter } from '../router/Router.tsx';
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
  HelpCircle,
  Calendar,
} from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const { navigate } = useRouter();

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'clinic-website':
        return <Globe className="w-6 h-6 text-emerald-600" />;
      case 'whatsapp-chatbot':
        return <MessageCircle className="w-6 h-6 text-emerald-600" />;
      case 'ai-call-assistant':
        return <PhoneCall className="w-6 h-6 text-emerald-600" />;
      case 'social-media-growth':
        return <Video className="w-6 h-6 text-emerald-600" />;
      case 'growth-strategy':
        return <Target className="w-6 h-6 text-emerald-600" />;
      case 'performance-reporting':
        return <BarChart3 className="w-6 h-6 text-emerald-600" />;
      default:
        return <Zap className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <div className="w-full">
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 block mb-2">
              Our 6 Core Patient Growth Pillars
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
              A Connected Patient Acquisition Infrastructure
            </h1>
            <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed">
              We do not believe in piecemeal marketing. Isolated social media posts or a disconnected brochure website fail because the front desk cannot manage the leaks. Here is how our 6 interconnected pillars turn searchers into completed clinical consultations.
            </p>
          </div>
        </div>
      </section>

      {/* Services List Deep-Dive */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {CLINIC_SERVICES.map((srv, idx) => (
            <div
              key={srv.id}
              id={srv.id}
              className="scroll-mt-28 p-8 sm:p-12 rounded-3xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition-all shadow-xs"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Left Column: Number, Title, Overview */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded">
                      Pillar {srv.number}
                    </span>
                    <div className="p-2 bg-white rounded-lg border border-slate-200 shadow-2xs">
                      {getServiceIcon(srv.id)}
                    </div>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 tracking-tight">
                    {srv.title}
                  </h2>

                  <p className="text-base text-slate-700 leading-relaxed">
                    {srv.longDesc}
                  </p>

                  {/* How it works for clinic staff */}
                  <div className="p-4 bg-white rounded-xl border border-slate-200 text-xs text-slate-700 space-y-1">
                    <strong className="text-slate-900 block font-semibold">
                      Front-Desk &amp; Doctor Workflow Impact:
                    </strong>
                    <p className="leading-relaxed text-slate-600">
                      {srv.howItWorks}
                    </p>
                  </div>

                  {/* Verified Deliverables */}
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
                      Core Technical Deliverables Included:
                    </h3>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                      {srv.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Column: Case Proof Placeholder Card */}
                <div className="lg:col-span-5 flex flex-col justify-between bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-xs">
                  <div>
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                      <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                        Operational Benchmark
                      </span>
                      <span className="px-2 py-0.5 bg-emerald-50 text-emerald-800 rounded font-mono text-xs font-bold">
                        Target Impact
                      </span>
                    </div>

                    <div className="mb-6">
                      <p className="text-xs text-slate-500 mb-1">Target Outcome</p>
                      <p className="text-xl font-bold font-serif text-slate-900">
                        {srv.impactMetric}
                      </p>
                    </div>

                    {/* Strict Truthfulness Placeholder for Client Proof */}
                    <div className="p-5 bg-slate-50 rounded-xl border border-dashed border-slate-300 text-center space-y-2">
                      <span className="font-mono text-xs text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded font-semibold inline-block">
                        [Client result coming soon]
                      </span>
                      <p className="text-xs text-slate-500 leading-normal">
                        Verified case study documentation will be published here upon completion of active clinic cohort verification.
                      </p>
                      <p className="text-[11px] text-slate-400 italic">
                        In accordance with ethical healthcare standards, we do not fabricate testimonial data or mock client reviews.
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => navigate('/contact', { notes: `Interested in Pillar ${srv.number}: ${srv.title}` })}
                      className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                    >
                      <span>Inquire About This Pillar</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Integration Workflow Note */}
      <section className="py-16 bg-slate-100 border-t border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <ShieldCheck className="w-10 h-10 text-emerald-700 mx-auto" />
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Engineered to Empower Your Front Desk, Never to Disrupt It
          </h2>
          <p className="text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Our technology does not replace your receptionist or nursing team. It acts as a 24/7 digital safety net that relieves them of redundant phone triage, eliminates missed calls during peak billing, and ensures every prospective patient receives dignified, immediate attention.
          </p>
        </div>
      </section>

      {/* Bottom CTA Band */}
      <section className="py-20 bg-slate-950 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl font-serif font-bold text-white tracking-tight">
            Ready to Implement the Complete System in Your Clinic?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Book a 30-minute discovery call to evaluate which pillars will generate the highest immediate patient return for your practice.
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
