import React from 'react';
import { useRouter } from '../router/Router.tsx';
import { FileText, ShieldCheck, Scale, ArrowRight } from 'lucide-react';

export const TermsPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-[#0F2A4A] text-[#F6F1E9] py-16 sm:py-20 border-b border-[#F6F1E9]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#14B8A6] block mb-2">
              Engagement Terms
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#F6F1E9] tracking-tight">
              Terms of Service &amp; Medical Advertising Compliance
            </h1>
            <p className="text-[#F6F1E9]/80 text-base sm:text-lg mt-4 leading-relaxed">
              Standard commercial terms governing the 6-Month Patient Acquisition System, agency scope boundaries, and regulatory responsibilities.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-[#F6F1E9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-[#0F2A4A]/80 text-sm leading-relaxed">
          
          <div className="p-6 bg-white rounded-2xl border border-[#0F2A4A]/10 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-[#0F2A4A] font-serif font-bold text-lg">
              <Scale className="w-5 h-5 text-[#0F8F83]" />
              <span>Summary of Agency Engagement</span>
            </div>
            <p className="text-[#0F2A4A]/70">
              Clinic Growth Helpers provides digital patient acquisition, front-desk AI voice assistance, official WhatsApp Business API automation, and clinic positioning services. We do not practice medicine or offer clinical consultation.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-serif font-bold text-[#0F2A4A]">
              1. The 6-Month System Engagement
            </h2>
            <p>
              The core patient acquisition system is delivered as a structured 6-month partnership encompassing infrastructure development, AI deployment, local search positioning, front-desk staff orientation, and monthly performance reviews.
            </p>
            <p>
              Specific commercial fees and payment milestones are tailored to each practice and recorded in your formal Service Agreement scoped during your initial strategy session.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-serif font-bold text-[#0F2A4A]">
              2. Strict Adherence to National Medical Commission (NMC) Ethics
            </h2>
            <p>
              Both the clinic and Clinic Growth Helpers agree to strictly uphold Indian medical advertising and ethics laws:
            </p>
            <ul className="space-y-2 list-disc pl-5 text-[#0F2A4A]/70">
              <li>No claims of guaranteed medical cures, surgical outcomes, or before/after comparative guarantees.</li>
              <li>No publication of fabricated or paid patient testimonials or deceptive doctor ratings.</li>
              <li>Doctor qualifications and registrations (e.g. State Medical Council or NMC numbers) displayed on web portals must be authentic and verified by the clinic.</li>
              <li>All digital messaging remains educational, transparent, and focused on patient access and operational triage.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-serif font-bold text-[#0F2A4A]">
              3. Clinic Responsibilities &amp; Front-Desk Cooperation
            </h2>
            <p>
              To ensure optimal patient conversion, the client clinic agrees to:
            </p>
            <ul className="space-y-2 list-disc pl-5 text-[#0F2A4A]/70">
              <li>Maintain active phone connections and provide access to the clinic&apos;s designated telephone line or virtual forwarding number.</li>
              <li>Ensure front-desk staff attend the 45-minute orientation session and follow up on escalated patient inquiries in a timely manner.</li>
              <li>Provide accurate OPD timings, doctor availability updates, and holiday schedules to keep AI and WhatsApp triage flows current.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-serif font-bold text-[#0F2A4A]">
              4. Intellectual Property &amp; Asset Ownership
            </h2>
            <p>
              Upon fulfillment of the 6-month agreement, the clinic maintains 100% permanent ownership of the custom clinic website code, domain assets, Meta WhatsApp Business API accounts, and creative content assets produced.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-serif font-bold text-[#0F2A4A]">
              5. Governing Law &amp; Jurisdiction
            </h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under this agreement shall be subject to the exclusive jurisdiction of the competent courts in <strong>Kolkata, West Bengal</strong>, India.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-serif font-bold text-[#0F2A4A]">
              6. Agency Contact &amp; Notices
            </h2>
            <div className="p-4 bg-white rounded-xl border border-[#0F2A4A]/10 font-mono text-xs text-[#0F2A4A] space-y-1.5 shadow-2xs">
              <p className="font-semibold text-[#0F2A4A]">Clinic Growth Helpers</p>
              <p>Email: <a href="mailto:hello@clinicgrowthhelpers.com" className="text-[#0F8F83] font-bold hover:underline">hello@clinicgrowthhelpers.com</a></p>
              <p>Phone: <a href="tel:+917863977647" className="text-[#0F8F83] font-bold hover:underline">+91 7863977647</a> / <a href="tel:+918293471447" className="text-[#0F8F83] font-bold hover:underline">+91 8293471447</a></p>
              <p>WhatsApp: <a href="https://wa.me/918293471447" className="text-[#0F8F83] font-bold hover:underline">+91 8293471447</a></p>
              <p>Operations: <strong className="text-[#0F2A4A] font-normal">Remote-First — Kolkata, Malda &amp; Siliguri, West Bengal, India</strong></p>
            </div>
          </div>

          <div className="pt-6 border-t border-[#0F2A4A]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => navigate('/growth-commitment')}
              className="text-xs font-semibold text-[#0F2A4A] hover:text-[#0F8F83] underline underline-offset-4 cursor-pointer"
            >
              View 6-Month Growth Commitment Policy
            </button>
            <button
              type="button"
              onClick={() => navigate('/contact')}
              className="px-6 py-2.5 bg-[#14B8A6] hover:bg-[#0F8F83] text-[#0F2A4A] font-semibold rounded-xl text-xs transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <span>Book Strategy Call</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};
