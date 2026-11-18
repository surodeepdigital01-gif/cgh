import React from 'react';
import { useRouter } from '../router/Router.tsx';
import { ShieldCheck, Lock, Eye, FileText, CheckCircle2, ArrowRight } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-[#0F2A4A] text-[#F6F1E9] py-16 sm:py-20 border-b border-[#F6F1E9]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#14B8A6] block mb-2">
              Compliance &amp; Data Ethics
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#F6F1E9] tracking-tight">
              Healthcare Patient Data Privacy Policy
            </h1>
            <p className="text-[#F6F1E9]/80 text-base sm:text-lg mt-4 leading-relaxed">
              Our principles for protecting prospective patient inquiries, doctor-patient confidentiality, and adherence to India’s Digital Personal Data Protection (DPDP) Act 2023.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-[#F6F1E9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-[#0F2A4A]/80 text-sm leading-relaxed">
          
          <div className="p-6 bg-white rounded-2xl border border-[#0F2A4A]/10 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-[#0F2A4A] font-serif font-bold text-lg">
              <ShieldCheck className="w-5 h-5 text-[#0F8F83]" />
              <span>Summary: Our Patient Privacy Guarantee</span>
            </div>
            <p className="text-[#0F2A4A]/70">
              Clinic Growth Helpers operates purely as a front-desk technology and patient acquisition partner. We do not store, access, sell, or analyze clinical medical records, diagnostic test results, or doctor consultation notes.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-serif font-bold text-[#0F2A4A]">
              1. Scope &amp; Applicable Indian Regulations
            </h2>
            <p>
              This Privacy Policy explains how Clinic Growth Helpers (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) handles personal data collected through clinic websites, WhatsApp Business API endpoints, and AI voice call routing systems deployed on behalf of client clinics.
            </p>
            <p>
              Our data processing practices are built to comply with:
            </p>
            <ul className="space-y-2 list-disc pl-5 text-[#0F2A4A]/70">
              <li>The Digital Personal Data Protection Act (DPDP Act), 2023 of India</li>
              <li>Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011</li>
              <li>National Medical Commission (NMC) professional conduct standards regarding patient confidentiality</li>
              <li>DISHA (Digital Information Security in Healthcare Act) baseline data integrity principles</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-serif font-bold text-[#0F2A4A]">
              2. What Information is Processed
            </h2>
            <p>
              When a prospective patient contacts a clinic through our systems (web booking forms, phone calls, or WhatsApp), we collect only the minimal data necessary to facilitate the consultation booking:
            </p>
            <ul className="space-y-2 list-disc pl-5 text-[#0F2A4A]/70">
              <li><strong>Contact Identifiers:</strong> Name, phone number, WhatsApp identifier, and email address (if provided).</li>
              <li><strong>Appointment Logistics:</strong> Requested medical specialty, preferred consultation date/time slot, and clinic branch location.</li>
              <li><strong>Call Metadata:</strong> Timestamp of call, duration, and whether the call was answered or rescued via automated SMS/WhatsApp link.</li>
            </ul>
            <p className="font-semibold text-[#0F2A4A] pt-2">
              What We Never Collect:
            </p>
            <p className="text-[#0F2A4A]/70">
              We never request, store, or process medical histories, pathological laboratory reports, radiographic scans, prescription records, or payment card details. Such clinical information remains strictly between the registered doctor and the patient inside the clinic’s physical or certified EHR environment.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-serif font-bold text-[#0F2A4A]">
              3. WhatsApp Business API &amp; Communications
            </h2>
            <p>
              All WhatsApp communications are routed through Meta&apos;s official WhatsApp Business Cloud API. Messages are encrypted in transit. Automated conversational triage responses are generated solely to answer clinic timings, doctor credentials, and consultation booking requests.
            </p>
            <p>
              Patients retain the right to stop receiving automated reminders at any time by simply messaging &ldquo;STOP&rdquo; or requesting human front-desk escalation.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-serif font-bold text-[#0F2A4A]">
              4. Complete Clinic Data Ownership
            </h2>
            <p>
              Your clinic retains 100% legal ownership of all patient inquiries, leads, and appointment logs generated during our partnership. We do not co-mingle or cross-promote patient data across competing clinics. If you conclude your 6-month engagement with us, your clinic retains complete access to your patient lists.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-serif font-bold text-[#0F2A4A]">
              5. Contact Us Regarding Data Inquiries
            </h2>
            <p>
              For any questions regarding patient data security or our privacy protocols, please contact our data grievance officer at:
            </p>
            <div className="p-4 bg-white rounded-xl border border-[#0F2A4A]/10 font-mono text-xs text-[#0F2A4A] space-y-1.5 shadow-2xs">
              <p className="font-semibold text-[#0F2A4A]">Clinic Growth Helpers — Data Privacy &amp; Grievance Desk</p>
              <p>Email: <a href="mailto:hello@clinicgrowthhelpers.com" className="text-[#0F8F83] font-bold hover:underline">hello@clinicgrowthhelpers.com</a></p>
              <p>Phone: <a href="tel:+917863977647" className="text-[#0F8F83] font-bold hover:underline">+91 7863977647</a> / <a href="tel:+918293471447" className="text-[#0F8F83] font-bold hover:underline">+91 8293471447</a></p>
              <p>WhatsApp: <a href="https://wa.me/918293471447" className="text-[#0F8F83] font-bold hover:underline">+91 8293471447</a></p>
              <p>Operations: <strong className="text-[#0F2A4A] font-normal">Remote-First — Kolkata, Malda &amp; Siliguri, West Bengal, India</strong></p>
            </div>
          </div>

          <div className="pt-6 border-t border-[#0F2A4A]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => navigate('/terms')}
              className="text-xs font-semibold text-[#0F2A4A] hover:text-[#0F8F83] underline underline-offset-4 cursor-pointer"
            >
              View Terms of Service
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
