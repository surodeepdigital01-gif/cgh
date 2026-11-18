import React from 'react';
import { Calculator } from '../components/Calculator.tsx';
import { useRouter } from '../router/Router.tsx';
import { PhoneCall, ShieldAlert, HelpCircle } from 'lucide-react';

export const CalculatorPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-[#0F2A4A] text-[#F6F1E9] pt-24 pb-12 md:pt-28 md:pb-16 lg:pt-32 lg:pb-24 border-b border-[#F6F1E9]/10">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="label-eyebrow text-[#14B8A6] block mb-3">
              Financial Modeling Tool
            </span>
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-serif font-bold text-[#F6F1E9] tracking-[-0.01em] leading-[1.15]">
              Clinic Revenue Opportunity &amp; Missed-Call Calculator
            </h1>
            <p className="text-[#F6F1E9]/75 text-base sm:text-lg mt-4 leading-[1.6] max-w-[65ch]">
              Understand how much revenue your practice is leaving on the table through missed phone calls during OPD, delayed WhatsApp responses, and uncaptured digital searchers.
            </p>
          </div>
        </div>
      </section>

      {/* Main Interactive Tool Section */}
      <section className="py-12 md:py-16 lg:py-24 bg-[#F6F1E9] border-b border-[#0F2A4A]/10 text-[#0F2A4A]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <Calculator embedded={false} />

          {/* Methodology & Assumptions */}
          <div className="max-w-5xl mx-auto mt-16 bg-white p-8 sm:p-10 rounded-3xl border border-[#0F2A4A]/10 shadow-xs space-y-6">
            <div className="flex items-center gap-3">
              <HelpCircle className="w-6 h-6 text-[#14B8A6]" />
              <h3 className="text-xl font-serif font-bold text-[#0F2A4A]">
                How Are These Projections Calculated?
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#0F2A4A]/70 leading-relaxed">
              <div className="p-4 bg-[#F6F1E9] rounded-xl border border-[#0F2A4A]/10 space-y-2">
                <strong className="text-[#0F2A4A] block font-semibold">1. Leakage Estimation</strong>
                <p>
                  When your clinic reports a 20% missed-call or delayed-reply rate, total patient inquiry volume is approximated as Current Patients ÷ (1 - Missed Rate). The delta represents lost prospective patients.
                </p>
              </div>

              <div className="p-4 bg-[#F6F1E9] rounded-xl border border-[#0F2A4A]/10 space-y-2">
                <strong className="text-[#0F2A4A] block font-semibold">2. Conservative 35% Recovery</strong>
                <p>
                  Not all lost callers will book. We apply a conservative 35% recovery rate achievable when an AI call assistant immediately rescues missed calls with an instant SMS/WhatsApp consultation link.
                </p>
              </div>

              <div className="p-4 bg-[#F6F1E9] rounded-xl border border-[#0F2A4A]/10 space-y-2">
                <strong className="text-[#0F2A4A] block font-semibold">3. Procedure Ticket Values</strong>
                <p>
                  Average revenue per patient is based on typical Indian private clinic procedure charges (e.g., IVF & Fertility ₹1,25,000; Dental Clinics & Chains ₹4,500; Orthopaedic & Physio ₹3,200; Dermatology ₹4,200; Eye Care ₹18,000).
                </p>
              </div>
            </div>

            <div className="p-4 bg-[#14B8A6]/10 border border-[#14B8A6]/20 rounded-xl text-xs text-[#0F2A4A] flex items-start gap-2.5">
              <ShieldAlert className="w-4 h-4 text-[#14B8A6] shrink-0 mt-0.5" />
              <p>
                <strong>Estimate based on your inputs, not a promise of results.</strong> Every clinic operates within unique local competitive environments, pricing structures, and clinical reputations. Use this model as an illustrative scenario to evaluate front-desk leakages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-12 md:py-16 lg:py-24 bg-[#0F2A4A] text-[#F6F1E9] text-center border-t border-[#F6F1E9]/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-6">
          <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-serif font-bold text-[#F6F1E9] tracking-[-0.01em] leading-[1.18]">
            Want an Exact Leakage Audit for Your Clinic?
          </h2>
          <p className="text-[#F6F1E9]/75 text-base sm:text-lg max-w-[65ch] mx-auto leading-[1.6]">
            Book a free 30-minute strategy call. We will review your clinic’s specific phone call volume, location catchment, and front-desk workflows.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => navigate('/contact')}
              className="min-h-[48px] px-8 py-3.5 bg-[#14B8A6] hover:bg-[#0F8F83] text-[#0F2A4A] font-semibold rounded-xl text-sm transition-colors shadow-lg inline-flex items-center gap-2 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-[#0F2A4A]" />
              <span>Book Strategy Call</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
