import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FORM_FALLBACK_WHATSAPP } from '../config/siteConfig.ts';
import { submitLeadForm, LeadFormData } from '../utils/formSubmit.ts';
import {
  PhoneCall,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  User,
  Building,
  MapPin,
  MessageSquare,
  Stethoscope,
  Mail,
  AlertCircle,
  ExternalLink,
} from 'lucide-react';

export const FinalCTAForm: React.FC = () => {
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    clinic: '',
    city: '',
    whatsapp: '',
    email: '',
    specialty: 'Dermatology',
    consent: false,
    botcheck: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setFieldErrors({});

    // Client validation first to highlight specific fields
    const newFieldErrors: Record<string, string> = {};
    if (!formData.name.trim()) newFieldErrors.name = 'Please enter your name';
    if (!formData.clinic.trim()) newFieldErrors.clinic = 'Please enter your clinic name';
    if (!formData.city.trim()) newFieldErrors.city = 'Please enter your city / state';

    const cleanDigits = formData.whatsapp.replace(/\D/g, '');
    let local10 = cleanDigits;
    if (cleanDigits.length === 12 && cleanDigits.startsWith('91')) local10 = cleanDigits.slice(2);
    else if (cleanDigits.length === 11 && cleanDigits.startsWith('0')) local10 = cleanDigits.slice(1);

    if (!formData.whatsapp.trim()) {
      newFieldErrors.whatsapp = 'Please provide your Indian mobile or WhatsApp number';
    } else if (local10.length !== 10 || !/^[6-9]\d{9}$/.test(local10)) {
      newFieldErrors.whatsapp = 'Please enter a valid 10-digit Indian phone or WhatsApp number';
    }

    if (!formData.specialty.trim()) newFieldErrors.specialty = 'Please select a specialty';
    if (!formData.consent) newFieldErrors.consent = 'Please agree to be contacted about your audit';
    if (formData.email && formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newFieldErrors.email = 'Please enter a valid email address';
    }

    if (Object.keys(newFieldErrors).length > 0) {
      setFieldErrors(newFieldErrors);
      return;
    }

    setIsSubmitting(true);

    const result = await submitLeadForm(formData, 'CTA band');

    setIsSubmitting(false);

    if (result.success) {
      setIsSuccess(true);
      setErrorMessage(null);
      // Clear the form on success
      setFormData({
        name: '',
        clinic: '',
        city: '',
        whatsapp: '',
        email: '',
        specialty: 'Dermatology',
        consent: false,
        botcheck: '',
      });
    } else {
      setErrorMessage(result.message || 'Something went wrong. Please message us on WhatsApp instead.');
      if (result.errors) {
        setFieldErrors(result.errors);
      }
    }
  };

  return (
    <section
      id="book-audit"
      className="py-12 md:py-16 lg:py-24 bg-gradient-to-b from-[#0F2A4A] to-[#0A1D33] text-[#F6F1E9] relative overflow-hidden border-t border-[#F6F1E9]/10"
    >
      {/* Subtle ambient glow in accent teal */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#14B8A6]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#14B8A6]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading & Value Proposition */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#F6F1E9]/15 label-eyebrow text-[#14B8A6]">
              <ShieldCheck className="w-4 h-4 text-[#14B8A6]" />
              <span>Complimentary Practice Evaluation</span>
            </div>

            <h2 className="text-[clamp(2rem,3.5vw,3rem)] leading-[1.18] tracking-[-0.01em] font-serif font-bold text-[#F6F1E9]">
              Get Your Free Clinic Growth &amp; Missed-Call Audit
            </h2>

            <p className="text-[#F6F1E9]/75 text-base sm:text-lg leading-[1.6] max-w-[65ch] font-sans">
              Tell us a little about your clinic. Within 24 hours, our senior healthcare growth team
              will review your local search visibility, secret-shop your inquiry response speed,
              and prepare a custom 6-month growth roadmap.
            </p>

            <div className="space-y-3 pt-2 text-xs text-[#F6F1E9]/80">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#14B8A6] shrink-0" />
                <span>Secret-shopper test of your clinic&apos;s phone &amp; WhatsApp speed</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#14B8A6] shrink-0" />
                <span>Catchment analysis of nearby competing clinics in your territory</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#14B8A6] shrink-0" />
                <span>Zero obligation · 100% Doctor Confidentiality</span>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Form with Animated Focus States & Success Checkmark */}
          <div className="lg:col-span-6">
            <div className="bg-white text-[#0F2A4A] rounded-3xl p-8 sm:p-10 shadow-2xl border border-[#0F2A4A]/10">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-8 space-y-4"
                  >
                    {/* Animated Drawn Checkmark Circle */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', damping: 12 }}
                      className="w-16 h-16 bg-[#14B8A6]/10 text-[#14B8A6] rounded-full flex items-center justify-center mx-auto shadow-md"
                    >
                      <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
                    </motion.div>

                    <h3 className="text-2xl font-serif font-bold text-[#0F2A4A]">
                      Audit Request Received
                    </h3>

                    <p className="text-[#0F2A4A]/80 text-sm max-w-md mx-auto leading-relaxed">
                      Thank you. We have received your request and will contact you on WhatsApp
                      within 1 business day.
                    </p>

                    <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center items-center">
                      <a
                        href={`https://wa.me/${FORM_FALLBACK_WHATSAPP}?text=${encodeURIComponent(
                          'Hello Clinic Growth Helpers, I just submitted an audit request on your website and would like to connect.'
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#14B8A6] hover:bg-[#0F8F83] text-[#0F2A4A] font-semibold rounded-xl text-xs shadow-md transition-all cursor-pointer"
                      >
                        <MessageSquare className="w-4 h-4 text-[#0F2A4A]" />
                        <span>Message us on WhatsApp</span>
                      </a>

                      <button
                        type="button"
                        onClick={() => {
                          setIsSuccess(false);
                          setErrorMessage(null);
                        }}
                        className="text-xs font-semibold text-[#0F8F83] hover:underline cursor-pointer py-2 px-3"
                      >
                        Submit another clinic request
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-4"
                    initial={{ opacity: 1 }}
                  >
                    {/* Hidden Honeypot field for bot protection */}
                    <input
                      type="text"
                      name="botcheck"
                      value={formData.botcheck}
                      onChange={(e) => setFormData({ ...formData, botcheck: e.target.value })}
                      className="hidden"
                      style={{ display: 'none' }}
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    <div className="mb-4">
                      <h3 className="text-xl font-serif font-bold text-[#0F2A4A]">
                        Claim Your Free Growth Audit
                      </h3>
                      <p className="text-xs text-[#0F2A4A]/60 mt-1">
                        Takes 30 seconds to fill. Strictly confidential.
                      </p>
                    </div>

                    {/* Failure alert banner with fallback WhatsApp button */}
                    {errorMessage && (
                      <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-3.5 bg-[#14B8A6]/10 border border-[#14B8A6]/20 rounded-xl text-[#0F2A4A] text-xs space-y-2"
                      >
                        <div className="flex items-center gap-2 font-medium">
                          <AlertCircle className="w-4 h-4 text-[#14B8A6] shrink-0" />
                          <span>{errorMessage}</span>
                        </div>
                        <a
                          href={`https://wa.me/${FORM_FALLBACK_WHATSAPP}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#14B8A6] text-[#0F2A4A] rounded-lg font-semibold text-xs shadow-xs hover:bg-[#0F8F83] transition-colors"
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                          <span>Message us on WhatsApp</span>
                          <ExternalLink className="w-3 h-3 ml-0.5" />
                        </a>
                      </motion.div>
                    )}

                    {/* Doctor / Clinic Owner Name */}
                    <div>
                      <label className="label-eyebrow text-[#0F2A4A] mb-1.5 flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-[#0F2A4A]/50" />
                        <span>Doctor / Clinic Owner Name *</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Dr. Rajesh Verma"
                        className={`w-full min-h-[44px] px-4 py-2.5 rounded-xl border text-sm transition-all bg-white text-[#0F2A4A] focus:outline-none focus:ring-2 focus:ring-[#14B8A6] placeholder:text-[#0F2A4A]/40 ${
                          fieldErrors.name ? 'border-[#0F2A4A]' : 'border-[#0F2A4A]/15'
                        }`}
                      />
                      {fieldErrors.name && (
                        <p className="text-xs text-[#0F2A4A] font-medium mt-1">{fieldErrors.name}</p>
                      )}
                    </div>

                    {/* Clinic Name */}
                    <div>
                      <label className="label-eyebrow text-[#0F2A4A] mb-1.5 flex items-center gap-1.5">
                        <Building className="w-3.5 h-3.5 text-[#0F2A4A]/50" />
                        <span>Clinic / Practice Name *</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.clinic}
                        onChange={(e) => setFormData({ ...formData, clinic: e.target.value })}
                        placeholder="e.g. Verma Specialist Clinic"
                        className={`w-full min-h-[44px] px-4 py-2.5 rounded-xl border text-sm transition-all bg-white text-[#0F2A4A] focus:outline-none focus:ring-2 focus:ring-[#14B8A6] placeholder:text-[#0F2A4A]/40 ${
                          fieldErrors.clinic ? 'border-[#0F2A4A]' : 'border-[#0F2A4A]/15'
                        }`}
                      />
                      {fieldErrors.clinic && (
                        <p className="text-xs text-[#0F2A4A] font-medium mt-1">{fieldErrors.clinic}</p>
                      )}
                    </div>

                    {/* Grid: City & WhatsApp Number */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="label-eyebrow text-[#0F2A4A] mb-1.5 flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-[#0F2A4A]/50" />
                          <span>City / State *</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          placeholder="e.g. Delhi NCR / Bengaluru"
                          className={`w-full min-h-[44px] px-4 py-2.5 rounded-xl border text-sm transition-all bg-white text-[#0F2A4A] focus:outline-none focus:ring-2 focus:ring-[#14B8A6] placeholder:text-[#0F2A4A]/40 ${
                            fieldErrors.city ? 'border-[#0F2A4A]' : 'border-[#0F2A4A]/15'
                          }`}
                        />
                        {fieldErrors.city && (
                          <p className="text-xs text-[#0F2A4A] font-medium mt-1">{fieldErrors.city}</p>
                        )}
                      </div>

                      <div>
                        <label className="label-eyebrow text-[#0F2A4A] mb-1.5 flex items-center gap-1.5">
                          <MessageSquare className="w-3.5 h-3.5 text-[#0F2A4A]/50" />
                          <span>Indian Phone / WhatsApp *</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.whatsapp}
                          onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                          placeholder="e.g. +91 98765 43210"
                          className={`w-full min-h-[44px] px-4 py-2.5 rounded-xl border text-sm font-mono transition-all bg-white text-[#0F2A4A] focus:outline-none focus:ring-2 focus:ring-[#14B8A6] placeholder:text-[#0F2A4A]/40 ${
                            fieldErrors.whatsapp ? 'border-[#0F2A4A]' : 'border-[#0F2A4A]/15'
                          }`}
                        />
                        {fieldErrors.whatsapp && (
                          <p className="text-xs text-[#0F2A4A] font-medium mt-1">{fieldErrors.whatsapp}</p>
                        )}
                      </div>
                    </div>

                    {/* Optional Email Field */}
                    <div>
                      <label className="label-eyebrow text-[#0F2A4A] mb-1.5 flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-[#0F2A4A]/50" />
                        <span>Email Address (Optional)</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="doctor@clinic.com"
                        className={`w-full min-h-[44px] px-4 py-2.5 rounded-xl border text-sm transition-all bg-white text-[#0F2A4A] focus:outline-none focus:ring-2 focus:ring-[#14B8A6] placeholder:text-[#0F2A4A]/40 ${
                          fieldErrors.email ? 'border-[#0F2A4A]' : 'border-[#0F2A4A]/15'
                        }`}
                      />
                      {fieldErrors.email && (
                        <p className="text-xs text-[#0F2A4A] font-medium mt-1">{fieldErrors.email}</p>
                      )}
                    </div>

                    {/* Specialty Selection */}
                    <div>
                      <label className="label-eyebrow text-[#0F2A4A] mb-1.5 flex items-center gap-1.5">
                        <Stethoscope className="w-3.5 h-3.5 text-[#0F2A4A]/50" />
                        <span>Clinical Specialty *</span>
                      </label>
                      <select
                        value={formData.specialty}
                        onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                        className="w-full min-h-[44px] px-4 py-2.5 rounded-xl border border-[#0F2A4A]/15 bg-white text-[#0F2A4A] text-sm focus:outline-none focus:ring-2 focus:ring-[#14B8A6]"
                      >
                        <option value="IVF & Fertility">IVF &amp; Fertility</option>
                        <option value="Dental">Dental</option>
                        <option value="Orthopaedic & Physiotherapy">
                          Orthopaedic &amp; Physiotherapy
                        </option>
                        <option value="Dermatology">Dermatology</option>
                        <option value="Eye Care">Eye Care</option>
                        <option value="Other">Other</option>
                      </select>
                      {fieldErrors.specialty && (
                        <p className="text-xs text-[#0F2A4A] font-medium mt-1">{fieldErrors.specialty}</p>
                      )}
                    </div>

                    {/* Required Consent Checkbox */}
                    <div className="pt-1">
                      <label className="flex items-start gap-2.5 cursor-pointer text-xs sm:text-sm text-[#0F2A4A]">
                        <input
                          type="checkbox"
                          required
                          checked={formData.consent}
                          onChange={(e) =>
                            setFormData({ ...formData, consent: e.target.checked })
                          }
                          className="mt-1 w-4 h-4 rounded border-[#0F2A4A]/30 text-[#14B8A6] focus:ring-[#14B8A6] cursor-pointer"
                        />
                        <span className="leading-snug select-none">
                          I agree to be contacted on WhatsApp or phone about my audit *
                        </span>
                      </label>
                      {fieldErrors.consent && (
                        <p className="text-xs text-[#0F2A4A] font-medium mt-1 pl-6.5">{fieldErrors.consent}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        disabled={isSubmitting}
                        type="submit"
                        className="w-full min-h-[48px] py-3.5 px-6 bg-[#14B8A6] hover:bg-[#0F8F83] text-[#0F2A4A] font-semibold rounded-xl text-sm shadow-lg transition-colors cursor-pointer flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <span className="w-4 h-4 border-2 border-[#0F2A4A]/40 border-t-[#0F2A4A] rounded-full animate-spin" />
                            <span>Sending Audit Request...</span>
                          </span>
                        ) : (
                          <>
                            <PhoneCall className="w-4 h-4 text-[#0F2A4A]" />
                            <span>Claim Your Free Growth Audit</span>
                            <ArrowRight className="w-4 h-4 text-[#0F2A4A]" />
                          </>
                        )}
                      </button>
                    </div>

                    <p className="text-[11px] text-[#0F2A4A]/50 text-center pt-1">
                      🔒 Zero spam. We never share doctor contact details with third parties.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
