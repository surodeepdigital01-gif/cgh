import React, { useState, useId } from 'react';
import { useRouter } from '../router/Router.tsx';
import { SPECIALTIES_DATA } from '../data/clinicData.ts';
import { SpecialtyKey } from '../types/index.ts';
import { Calculator as CalcIcon, TrendingUp, ArrowRight, ShieldAlert, Sparkles } from 'lucide-react';

interface CalculatorProps {
  embedded?: boolean;
}

export const Calculator: React.FC<CalculatorProps> = ({ embedded = false }) => {
  const { navigate } = useRouter();
  const specialtyId = useId();
  const monthlyPatientsId = useId();
  const avgTicketId = useId();
  const missedRateId = useId();

  const [selectedSpecialty, setSelectedSpecialty] = useState<SpecialtyKey>('dermatology');
  const [monthlyPatients, setMonthlyPatients] = useState<number>(220);
  const [avgTicket, setAvgTicket] = useState<number>(3500);
  const [missedRate, setMissedRate] = useState<number>(22);

  const handleSpecialtyChange = (specKey: SpecialtyKey) => {
    setSelectedSpecialty(specKey);
    const spec = SPECIALTIES_DATA.find((s) => s.key === specKey);
    if (spec) {
      setAvgTicket(spec.typicalAvgTicket);
      setMonthlyPatients(spec.typicalMonthlyPatients);
    }
  };

  // Mathematical Calculations
  const estimatedTotalInquiries = Math.round(monthlyPatients / (1 - missedRate / 100));
  const lostInquiriesMonthly = Math.max(0, estimatedTotalInquiries - monthlyPatients);
  const leakedRevenueMonthly = lostInquiriesMonthly * avgTicket;

  // Realistic recovery rate achievable by 24/7 AI call assistant + <15s WhatsApp response:
  const recoverablePatientsMonthly = Math.round(lostInquiriesMonthly * 0.35);
  const recoveredRevenueMonthly = recoverablePatientsMonthly * avgTicket;
  const sixMonthRecoveredRevenue = recoveredRevenueMonthly * 6;

  // Formatting helpers for Indian currency
  const formatINR = (val: number): string => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const handleBookWithData = () => {
    navigate('/contact', {
      specialty: selectedSpecialty,
      monthlyPatients: monthlyPatients.toString(),
      avgTicket: avgTicket.toString(),
      estimatedRecovery: recoveredRevenueMonthly.toString(),
    });
  };

  return (
    <div className={`w-full ${embedded ? '' : 'max-w-5xl mx-auto'}`}>
      <div className="bg-white rounded-2xl border border-[#0F2A4A]/10 shadow-xl overflow-hidden">
        
        {/* Calculator Header */}
        <div className="bg-[#0F2A4A] text-[#F6F1E9] p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-[#14B8A6] label-eyebrow mb-1">
                <CalcIcon className="w-4 h-4 text-[#14B8A6]" />
                <span>Clinic Revenue Leakage & Patient Recovery Model</span>
              </div>
              <h3 className="text-[1.5rem] font-serif font-bold tracking-[-0.01em] leading-[1.2] text-[#F6F1E9]">
                Interactive Clinic Growth & Missed-Call Calculator
              </h3>
            </div>
            <div className="px-3 py-1 bg-white/10 border border-[#F6F1E9]/20 rounded-md text-xs text-[#F6F1E9] self-start sm:self-auto font-sans font-medium">
              India Healthcare Benchmark
            </div>
          </div>
          <p className="text-sm text-[#F6F1E9]/70 mt-2 max-w-2xl">
            See how many patient inquiries your clinic may be losing to unanswered phone calls during OPD and after-hours, and project your 6-month recoverable opportunity.
          </p>
        </div>

        {/* Calculator Body Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8">
          
          {/* Controls Column (Inputs) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Specialty Selector */}
            <div>
              <label htmlFor={specialtyId} className="block text-xs font-semibold uppercase tracking-wider text-[#0F2A4A] mb-2">
                1. Select Clinic Specialty
              </label>
              <select
                id={specialtyId}
                value={selectedSpecialty}
                onChange={(e) => handleSpecialtyChange(e.target.value as SpecialtyKey)}
                className="w-full px-4 py-2.5 bg-white border border-[#0F2A4A]/15 rounded-xl text-sm font-medium text-[#0F2A4A] focus:outline-none focus:ring-2 focus:ring-[#14B8A6]"
              >
                {SPECIALTIES_DATA.map((spec) => (
                  <option key={spec.key} value={spec.key}>
                    {spec.name} (Typical ticket: {formatINR(spec.typicalAvgTicket)})
                  </option>
                ))}
              </select>
            </div>

            {/* Slider 1: Monthly Patients */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <label htmlFor={monthlyPatientsId} className="font-semibold text-[#0F2A4A]">
                  2. Current Monthly Patients / Consultations
                </label>
                <span className="font-mono font-bold text-[#0F2A4A] bg-[#14B8A6]/15 px-2.5 py-0.5 rounded text-sm">
                  {monthlyPatients} patients/mo
                </span>
              </div>
              <input
                id={monthlyPatientsId}
                type="range"
                min="20"
                max="1000"
                step="10"
                value={monthlyPatients}
                onChange={(e) => setMonthlyPatients(Number(e.target.value))}
                className="w-full accent-[#14B8A6] cursor-pointer h-2 bg-[#F6F1E9] rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-[#0F2A4A]/50 font-mono">
                <span>20 patients</span>
                <span>500</span>
                <span>1,000+ patients</span>
              </div>
            </div>

            {/* Slider 2: Average Revenue Per Patient */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <label htmlFor={avgTicketId} className="font-semibold text-[#0F2A4A]">
                  3. Average Revenue per Patient / Procedure (₹)
                </label>
                <span className="font-mono font-bold text-[#0F2A4A] bg-[#14B8A6]/15 px-2.5 py-0.5 rounded text-sm">
                  {formatINR(avgTicket)}
                </span>
              </div>
              <input
                id={avgTicketId}
                type="range"
                min="1000"
                max="150000"
                step="500"
                value={avgTicket}
                onChange={(e) => setAvgTicket(Number(e.target.value))}
                className="w-full accent-[#14B8A6] cursor-pointer h-2 bg-[#F6F1E9] rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-[#0F2A4A]/50 font-mono">
                <span>₹1,000</span>
                <span>₹75,000</span>
                <span>₹1,50,000+</span>
              </div>
            </div>

            {/* Slider 3: Missed Call / WhatsApp Delay Percentage */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <label htmlFor={missedRateId} className="font-semibold text-[#0F2A4A]">
                  4. Estimated Missed Calls & Slow WhatsApp Replies (%)
                </label>
                <span className="font-mono font-bold text-[#0F2A4A] bg-[#14B8A6]/15 px-2.5 py-0.5 rounded text-sm">
                  {missedRate}% unhandled
                </span>
              </div>
              <input
                id={missedRateId}
                type="range"
                min="5"
                max="50"
                step="1"
                value={missedRate}
                onChange={(e) => setMissedRate(Number(e.target.value))}
                className="w-full accent-[#14B8A6] cursor-pointer h-2 bg-[#F6F1E9] rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-[#0F2A4A]/50 font-mono">
                <span>5% (Rare)</span>
                <span>20% (Typical Indian clinic average)</span>
                <span>50% (High leakage)</span>
              </div>
              <p className="text-xs text-[#0F2A4A]/60">
                Industry studies indicate Indian clinics lose 18% to 32% of prospective phone inquiries during lunch hours, peak doctor consultations, and after 8 PM.
              </p>
            </div>
          </div>

          {/* Results Column (Outputs) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-[#F6F1E9] p-6 rounded-xl border border-[#0F2A4A]/10 space-y-6">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#0F2A4A]/60 mb-4">
                <TrendingUp className="w-4 h-4 text-[#14B8A6]" />
                <span>Estimated Monthly Opportunity</span>
              </div>

              {/* Highlight Box: Estimated Recoverable Revenue */}
              <div className="bg-white p-5 rounded-xl border border-[#0F2A4A]/10 shadow-xs mb-4">
                <span className="text-xs text-[#0F2A4A]/60 block mb-1">
                  Estimated Monthly Recoverable Revenue
                </span>
                <p className="text-2xl sm:text-3xl font-bold font-mono text-[#0F2A4A] tracking-[-0.01em]">
                  {formatINR(recoveredRevenueMonthly)}
                  <span className="text-xs font-normal text-[#0F2A4A]/60"> / month</span>
                </p>
                <p className="text-xs text-[#0F2A4A]/80 mt-1.5 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#14B8A6] shrink-0" />
                  <span>
                    Recovers <strong>~{recoverablePatientsMonthly} patients/mo</strong> with instant 24/7 AI &amp; WhatsApp concierge
                  </span>
                </p>
              </div>

              {/* Secondary Breakdown */}
              <div className="space-y-3 text-xs">
                <div className="flex justify-between items-center py-2 border-b border-[#0F2A4A]/10">
                  <span className="text-[#0F2A4A]/70">Lost patient inquiries/mo:</span>
                  <span className="font-mono font-semibold text-[#0F2A4A]">
                    ~{lostInquiriesMonthly} inquiries
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[#0F2A4A]/10">
                  <span className="text-[#0F2A4A]/70">Total leaked patient opportunity:</span>
                  <span className="font-mono font-semibold text-[#0F2A4A] bg-[#14B8A6]/10 px-2 py-0.5 rounded">
                    {formatINR(leakedRevenueMonthly)} / mo
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[#0F2A4A]/10">
                  <span className="text-[#0F2A4A]/70">6-Month Projected System Impact:</span>
                  <span className="font-mono font-bold text-[#0F2A4A] text-sm">
                    {formatINR(sixMonthRecoveredRevenue)}
                  </span>
                </div>
              </div>
            </div>

            {/* CTA & Disclaimer */}
            <div className="space-y-3 pt-2">
              <button
                type="button"
                onClick={handleBookWithData}
                className="w-full py-3 px-4 bg-[#14B8A6] hover:bg-[#0F8F83] text-[#0F2A4A] font-semibold rounded-xl shadow-sm hover:shadow transition-all text-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Discuss These Numbers on a Strategy Call</span>
                <ArrowRight className="w-4 h-4 text-[#0F2A4A]" />
              </button>

              {/* Truthfulness Label */}
              <div className="p-3 bg-[#14B8A6]/10 border border-[#14B8A6]/20 rounded-lg text-[11px] text-[#0F2A4A] leading-normal flex items-start gap-2">
                <ShieldAlert className="w-4 h-4 text-[#14B8A6] shrink-0 mt-0.5" />
                <p>
                  <strong>Estimate based on your inputs, not a promise of results.</strong> Actual clinic results depend on patient demand, clinical reputation, response velocity, and doctor consultation fees.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
