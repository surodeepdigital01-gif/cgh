import React from 'react';
import { BookingForm } from '../components/BookingForm.tsx';
import { Phone, Mail, MapPin, MessageSquare, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-[#0F2A4A] text-[#F6F1E9] py-16 sm:py-20 border-b border-[#F6F1E9]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#14B8A6] block mb-2">
              Get in Touch
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#F6F1E9] tracking-tight">
              Book Your Free Clinic Growth Strategy Call
            </h1>
            <p className="text-[#F6F1E9]/70 text-base sm:text-lg mt-4 leading-relaxed">
              Speak directly with our senior clinic growth team. We will review your clinic’s current patient journey, assess your missed-call volume, and scope a tailored 6-month patient acquisition plan.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Contact Info + Booking Form */}
      <section className="py-20 bg-[#F6F1E9] border-b border-[#0F2A4A]/10 text-[#0F2A4A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Direct Info & Discovery Agenda */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Agenda Box */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#0F2A4A]/10 shadow-xs space-y-5">
                <h3 className="font-serif font-bold text-xl text-[#0F2A4A]">
                  What Happens on This 30-Minute Call?
                </h3>
                <ul className="space-y-3.5 text-xs sm:text-sm text-[#0F2A4A]/80">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#14B8A6] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#0F2A4A] block font-semibold">1. Patient Inquiry &amp; Missed-Call Audit</strong>
                      <span className="text-[#0F2A4A]/70">We estimate how many calls and WhatsApp inquiries your clinic is dropping during OPD and after-hours.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#14B8A6] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#0F2A4A] block font-semibold">2. Local Competitive Catchment Analysis</strong>
                      <span className="text-[#0F2A4A]/70">We analyze patient search trends for your specialty within a 10–15 km radius of your clinic.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#14B8A6] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#0F2A4A] block font-semibold">3. 6-Month Roadmap &amp; Investment Scoping</strong>
                      <span className="text-[#0F2A4A]/70">We outline the exact deliverables, timeline, and investment tailored specifically to your practice.</span>
                    </div>
                  </li>
                </ul>

                <div className="pt-3 border-t border-[#0F2A4A]/10 flex items-center gap-2 text-xs text-[#0F2A4A]/60">
                  <ShieldCheck className="w-4 h-4 text-[#14B8A6] shrink-0" />
                  <span>Zero aggressive sales pitching · 100% confidential</span>
                </div>
              </div>

              {/* Direct Agency Contact Card */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#0F2A4A]/10 shadow-xs space-y-4">
                <h4 className="font-serif font-bold text-lg text-[#0F2A4A]">
                  Prefer Direct Contact?
                </h4>
                <p className="text-xs text-[#0F2A4A]/70 leading-relaxed">
                  You can reach our strategy desk directly via phone, WhatsApp, or email:
                </p>

                <div className="space-y-3 pt-2 text-xs font-mono text-[#0F2A4A]">
                  <div className="p-3 bg-[#F6F1E9] rounded-xl border border-[#0F2A4A]/10 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-[#14B8A6] shrink-0" />
                        <span className="text-[10px] text-[#0F2A4A]/60 font-sans uppercase tracking-wider font-semibold">Phone Lines</span>
                      </div>
                      <span className="text-[10px] text-[#0F2A4A] bg-[#14B8A6]/15 px-2 py-0.5 rounded font-sans font-medium">9 AM – 9 PM IST</span>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 pt-1 font-mono">
                      <a
                        href="tel:+917863977647"
                        className="flex-1 px-3 py-2 bg-white rounded-lg border border-[#0F2A4A]/15 text-[#0F2A4A] font-bold hover:border-[#14B8A6] hover:text-[#0F8F83] transition-colors flex items-center justify-between"
                      >
                        <span>+91 7863977647</span>
                        <span className="text-[10px] text-[#14B8A6] font-sans font-normal">Call</span>
                      </a>
                      <a
                        href="tel:+918293471447"
                        className="flex-1 px-3 py-2 bg-white rounded-lg border border-[#0F2A4A]/15 text-[#0F2A4A] font-bold hover:border-[#14B8A6] hover:text-[#0F8F83] transition-colors flex items-center justify-between"
                      >
                        <span>+91 8293471447</span>
                        <span className="text-[10px] text-[#14B8A6] font-sans font-normal">Call</span>
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-[#14B8A6]/10 rounded-xl border border-[#14B8A6]/20">
                    <MessageSquare className="w-4 h-4 text-[#14B8A6] shrink-0" />
                    <div className="flex-1">
                      <span className="text-[10px] text-[#0F2A4A] block font-sans uppercase tracking-wider font-semibold">WhatsApp Desk (24/7)</span>
                      <strong className="text-[#0F2A4A] font-bold text-sm">+91 8293471447</strong>
                    </div>
                    <a
                      href="https://wa.me/918293471447?text=Hello%20Clinic%20Growth%20Helpers,%20I%20would%20like%20to%20discuss%20patient%20growth%20for%20my%20clinic"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-[#14B8A6] hover:bg-[#0F8F83] text-[#0F2A4A] rounded-lg font-sans text-xs font-semibold shadow-xs"
                    >
                      Chat
                    </a>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-[#F6F1E9] rounded-xl border border-[#0F2A4A]/10">
                    <Mail className="w-4 h-4 text-[#14B8A6] shrink-0" />
                    <div className="flex-1">
                      <span className="text-[10px] text-[#0F2A4A]/50 block font-sans uppercase tracking-wider font-semibold">Email</span>
                      <a
                        href="mailto:hello@clinicgrowthhelpers.com"
                        className="text-[#0F2A4A] hover:text-[#0F8F83] font-bold block transition-colors"
                      >
                        hello@clinicgrowthhelpers.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-[#F6F1E9] rounded-xl border border-[#0F2A4A]/10">
                    <MapPin className="w-4 h-4 text-[#14B8A6] shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <span className="text-[10px] text-[#0F2A4A]/50 block font-sans uppercase tracking-wider font-semibold">Remote Operations</span>
                      <strong className="text-[#0F2A4A] font-semibold block leading-snug">
                        Kolkata, Malda &amp; Siliguri, West Bengal, India
                      </strong>
                      <span className="text-[11px] text-[#0F2A4A]/60 block mt-0.5 font-sans">
                        We operate remotely — serving clinics across West Bengal &amp; India
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Booking Form */}
            <div className="lg:col-span-7">
              <BookingForm
                title="Schedule Your Discovery Session"
                subtitle="Fill in your clinic details below. We typically confirm appointment time slots within 2 hours on business days."
              />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
