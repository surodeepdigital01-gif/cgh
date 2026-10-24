import React, { useState, useId } from 'react';
import { useRouter } from '../router/Router.tsx';
import { SPECIALTIES_DATA } from '../data/clinicData.ts';
import { SpecialtyKey } from '../types/index.ts';
import { Calculator as CalcIcon, TrendingUp, AlertCircle, ArrowRight, ShieldAlert, Sparkles } from 'lucide-react';

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
  // Total attempted inquiries roughly corresponds to current patients / (1 - missedRate/100)
  // Lost inquiries per month:
  const estimatedTotalInquiries = Math.round(monthlyPatients / (1 - missedRate / 100));
  const lostInquiriesMonthly = Math.max(0, estimatedTotalInquiries - monthlyPatients);

  // Leaked revenue per month if all lost inquiries walked away to competing clinics:
  const leakedRevenueMonthly = lostInquiriesMonthly * avgTicket;

  // Realistic recovery rate achievable by 24/7 AI call assistant + <15s WhatsApp response:
  // Conservative estimate: 35% of missed inquiries converted to completed visits
  const recoverablePatientsMonthly = Math.round(lostInquiriesMonthly * 0.35);
  const recoveredRevenueMonthly = recoverablePatientsMonthly * avgTicket;
  const sixMonthRecoveredRevenue = recoveredRevenueMonthly * 6;

  // Formatting helpers for Indian currency (Lakhs and Crores)
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
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xl overflow-hidden">
        
        {/* Calculator Header */}
        <div className="bg-slate-900 text-white p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-1">
                <CalcIcon className="w-4 h-4" />
                <span>Clinic Revenue Leakage & Patient Recovery Model</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold tracking-tight text-white">
                Interactive Clinic Growth & Missed-Call Calculator
              </h3>
            </div>
            <div className="px-3 py-1 bg-slate-800/80 border border-slate-700 rounded-md text-xs text-slate-300 self-start sm:self-auto font-mono">
              India Healthcare Benchmark
            </div>
          </div>
          <p className="text-sm text-slate-300 mt-2 max-w-2xl">
            See how many patient inquiries your clinic may be losing to unanswered phone calls during OPD and after-hours, and project your 6-month recoverable opportunity.
          </p>
        </div>

        {/* Calculator Body Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8">
          
          {/* Controls Column (Inputs) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Specialty Selector */}
            <div>
              <label htmlFor={specialtyId} className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">
                1. Select Clinic Specialty
              </label>
              <select
                id={specialtyId}
                value={selectedSpecialty}
                onChange={(e) => handleSpecialtyChange(e.target.value as SpecialtyKey)}
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
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
                <label htmlFor={monthlyPatientsId} className="font-semibold text-slate-800">
                  2. Current Monthly Patients / Consultations
                </label>
                <span className="font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded text-sm">
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
                className="w-full accent-emerald-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                <span>20 patients</span>
                <span>500</span>
                <span>1,000+ patients</span>
              </div>
            </div>

            {/* Slider 2: Average Revenue Per Patient */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <label htmlFor={avgTicketId} className="font-semibold text-slate-800">
                  3. Average Revenue per Patient / Procedure (₹)
                </label>
                <span className="font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded text-sm">
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
                className="w-full accent-emerald-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                <span>₹1,000</span>
                <span>₹75,000</span>
                <span>₹1,50,000+</span>
              </div>
            </div>

            {/* Slider 3: Missed Call / WhatsApp Delay Percentage */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <label htmlFor={missedRateId} className="font-semibold text-slate-800">
                  4. Estimated Missed Calls & Slow WhatsApp Replies (%)
                </label>
                <span className="font-mono font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded text-sm">
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
                className="w-full accent-amber-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                <span>5% (Rare)</span>
                <span>20% (Typical Indian clinic average)</span>
                <span>50% (High leakage)</span>
              </div>
              <p className="text-xs text-slate-500">
                Industry studies indicate Indian clinics lose 18% to 32% of prospective phone inquiries during lunch hours, peak doctor consultations, and after 8 PM.
              </p>
            </div>
          </div>

          {/* Results Column (Outputs) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-6">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4">
                <TrendingUp className="w-4 h-4 text-emerald-600" />
                <span>Estimated Monthly Opportunity</span>
              </div>

              {/* Highlight Box: Estimated Recoverable Revenue */}
              <div className="bg-white p-5 rounded-xl border border-emerald-200/80 shadow-xs mb-4">
                <span className="text-xs text-slate-500 block mb-1">
                  Estimated Monthly Recoverable Revenue
                </span>
                <p className="text-2xl sm:text-3xl font-bold font-mono text-emerald-700 tracking-tight">
                  {formatINR(recoveredRevenueMonthly)}
                  <span className="text-xs font-normal text-slate-500"> / month</span>
                </p>
                <p className="text-xs text-emerald-800/90 mt-1.5 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>
                    Recovers <strong>~{recoverablePatientsMonthly} patients/mo</strong> with instant 24/7 AI &amp; WhatsApp concierge
                  </span>
                </p>
              </div>

              {/* Secondary Breakdown */}
              <div className="space-y-3 text-xs">
                <div className="flex justify-between items-center py-2 border-b border-slate-200">
                  <span className="text-slate-600">Lost patient inquiries/mo:</span>
                  <span className="font-mono font-semibold text-slate-900">
                    ~{lostInquiriesMonthly} inquiries
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-200">
                  <span className="text-slate-600">Total leaked patient opportunity:</span>
                  <span className="font-mono font-semibold text-rose-600">
                    {formatINR(leakedRevenueMonthly)} / mo
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-200">
                  <span className="text-slate-600">6-Month Projected System Impact:</span>
                  <span className="font-mono font-bold text-emerald-700 text-sm">
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
                className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold rounded-xl shadow-sm hover:shadow transition-all text-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Discuss These Numbers on a Strategy Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Mandatory Truthfulness Label */}
              <div className="p-3 bg-amber-50/80 border border-amber-200 rounded-lg text-[11px] text-amber-900 leading-normal flex items-start gap-2">
                <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
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
