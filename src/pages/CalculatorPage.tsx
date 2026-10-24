import React from 'react';
import { Calculator } from '../components/Calculator.tsx';
import { useRouter } from '../router/Router.tsx';
import { PhoneCall, ShieldAlert, TrendingUp, HelpCircle, ArrowRight } from 'lucide-react';

export const CalculatorPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 block mb-2">
              Financial Modeling Tool
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
              Clinic Revenue Opportunity &amp; Missed-Call Calculator
            </h1>
            <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed">
              Understand how much revenue your practice is leaving on the table through missed phone calls during OPD, delayed WhatsApp responses, and uncaptured digital searchers.
            </p>
          </div>
        </div>
      </section>

      {/* Main Interactive Tool Section */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Calculator embedded={false} />

          {/* Methodology & Assumptions */}
          <div className="max-w-5xl mx-auto mt-16 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xs space-y-6">
            <div className="flex items-center gap-3">
              <HelpCircle className="w-6 h-6 text-emerald-700" />
              <h3 className="text-xl font-serif font-bold text-slate-900">
                How Are These Projections Calculated?
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-600 leading-relaxed">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                <strong className="text-slate-900 block font-semibold">1. Leakage Estimation</strong>
                <p>
                  When your clinic reports a 20% missed-call or delayed-reply rate, total patient inquiry volume is approximated as Current Patients ÷ (1 - Missed Rate). The delta represents lost prospective patients.
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                <strong className="text-slate-900 block font-semibold">2. Conservative 35% Recovery</strong>
                <p>
                  Not all lost callers will book. We apply a conservative 35% recovery rate achievable when an AI call assistant immediately rescues missed calls with an instant SMS/WhatsApp consultation link.
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                <strong className="text-slate-900 block font-semibold">3. Procedure Ticket Values</strong>
                <p>
                  Average revenue per patient is based on typical Indian private clinic procedure charges (e.g., IVF & Fertility ₹1,25,000; Dental Clinics & Chains ₹4,500; Orthopaedic & Physio ₹3,200; Dermatology ₹4,200; Eye Care ₹18,000).
                </p>
              </div>
            </div>

            <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-start gap-2.5">
              <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <p>
                <strong>Estimate based on your inputs, not a promise of results.</strong> Every clinic operates within unique local competitive environments, pricing structures, and clinical reputations. Use this model as an illustrative scenario to evaluate front-desk leakages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-20 bg-slate-950 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl font-serif font-bold text-white tracking-tight">
            Want an Exact Leakage Audit for Your Clinic?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Book a free 30-minute strategy call. We will review your clinic’s specific phone call volume, location catchment, and front-desk workflows.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => navigate('/contact')}
              className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl text-sm transition-all shadow-lg hover:shadow-emerald-900/40 inline-flex items-center gap-2 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Book Strategy Call</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
