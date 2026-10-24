import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { siteConfig, FORM_FALLBACK_WHATSAPP } from '../config/siteConfig.ts';
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
      className="py-20 sm:py-28 bg-gradient-to-br from-[#0B1F3A] via-[#08172c] to-[#0A7F72] text-white relative overflow-hidden"
    >
      {/* Slow Shifting Ambient Glow Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0E9F8E]/20 rounded-full blur-[140px] animate-glow pointer-events-none" />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#C8A24A]/10 rounded-full blur-[140px] animate-glow pointer-events-none"
        style={{ animationDelay: '3s' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Value Proposition */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs text-emerald-300 font-medium">
              <ShieldCheck className="w-4 h-4 text-[#C8A24A]" />
              <span>Complimentary Practice Evaluation</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-[1.15]">
              Get Your Free Clinic Growth &amp; Missed-Call Audit
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl">
              Tell us a little about your clinic. Within 24 hours, our senior healthcare growth team
              will review your local search visibility, secret-shop your inquiry response speed,
              and prepare a custom 6-month growth roadmap.
            </p>

            <div className="space-y-3 pt-2 text-xs text-slate-300">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0E9F8E] shrink-0" />
                <span>Secret-shopper test of your clinic&apos;s phone &amp; WhatsApp speed</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0E9F8E] shrink-0" />
                <span>Catchment analysis of nearby competing clinics in your territory</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0E9F8E] shrink-0" />
                <span>Zero obligation · 100% Doctor Confidentiality</span>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Form with Animated Focus States & Success Checkmark */}
          <div className="lg:col-span-6">
            <div className="bg-white/95 backdrop-blur-xl text-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl border border-white/20">
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
                      className="w-16 h-16 bg-[#E6F7F5] text-[#0E9F8E] rounded-full flex items-center justify-center mx-auto shadow-md"
                    >
                      <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
                    </motion.div>

                    <h3 className="text-2xl font-serif font-bold text-[#0B1F3A]">
                      Audit Request Received
                    </h3>

                    <p className="text-slate-700 text-sm max-w-md mx-auto leading-relaxed">
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
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold rounded-xl text-xs shadow-md transition-all cursor-pointer"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Message us on WhatsApp</span>
                      </a>

                      <button
                        type="button"
                        onClick={() => {
                          setIsSuccess(false);
                          setErrorMessage(null);
                        }}
                        className="text-xs font-semibold text-[#0E9F8E] hover:underline cursor-pointer py-2 px-3"
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
                      <h3 className="text-xl font-serif font-bold text-[#0B1F3A]">
                        Claim Your Free Growth Audit
                      </h3>
                      <p className="text-xs text-slate-500 mt-1">
                        Takes 30 seconds to fill. Strictly confidential.
                      </p>
                    </div>

                    {/* Failure alert banner with fallback WhatsApp button */}
                    {errorMessage && (
                      <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-3.5 bg-rose-50 border border-rose-200 rounded-xl text-rose-800 text-xs space-y-2"
                      >
                        <div className="flex items-center gap-2 font-medium">
                          <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                          <span>{errorMessage}</span>
                        </div>
                        <a
                          href={`https://wa.me/${FORM_FALLBACK_WHATSAPP}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#25D366] text-white rounded-lg font-semibold text-xs shadow-xs hover:bg-[#20ba59] transition-colors"
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                          <span>Message us on WhatsApp</span>
                          <ExternalLink className="w-3 h-3 ml-0.5" />
                        </a>
                      </motion.div>
                    )}

                    {/* Doctor / Clinic Owner Name */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-slate-400" />
                        <span>Doctor / Clinic Owner Name *</span>
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.01 }}
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Dr. Rajesh Verma"
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-all bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0E9F8E] ${
                          fieldErrors.name ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300'
                        }`}
                      />
                      {fieldErrors.name && (
                        <p className="text-xs text-rose-600 mt-1">{fieldErrors.name}</p>
                      )}
                    </div>

                    {/* Clinic Name */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                        <Building className="w-3.5 h-3.5 text-slate-400" />
                        <span>Clinic / Practice Name *</span>
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.01 }}
                        type="text"
                        required
                        value={formData.clinic}
                        onChange={(e) => setFormData({ ...formData, clinic: e.target.value })}
                        placeholder="e.g. Verma Specialist Clinic"
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-all bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0E9F8E] ${
                          fieldErrors.clinic ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300'
                        }`}
                      />
                      {fieldErrors.clinic && (
                        <p className="text-xs text-rose-600 mt-1">{fieldErrors.clinic}</p>
                      )}
                    </div>

                    {/* Grid: City & WhatsApp Number */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          <span>City / State *</span>
                        </label>
                        <motion.input
                          whileFocus={{ scale: 1.01 }}
                          type="text"
                          required
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          placeholder="e.g. Delhi NCR / Bengaluru"
                          className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-all bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0E9F8E] ${
                            fieldErrors.city ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300'
                          }`}
                        />
                        {fieldErrors.city && (
                          <p className="text-xs text-rose-600 mt-1">{fieldErrors.city}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                          <MessageSquare className="w-3.5 h-3.5 text-slate-400" />
                          <span>Indian Phone / WhatsApp *</span>
                        </label>
                        <motion.input
                          whileFocus={{ scale: 1.01 }}
                          type="tel"
                          required
                          value={formData.whatsapp}
                          onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                          placeholder="e.g. +91 98765 43210"
                          className={`w-full px-4 py-2.5 rounded-xl border text-sm font-mono transition-all bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0E9F8E] ${
                            fieldErrors.whatsapp
                              ? 'border-rose-400 bg-rose-50/30'
                              : 'border-slate-300'
                          }`}
                        />
                        {fieldErrors.whatsapp && (
                          <p className="text-xs text-rose-600 mt-1">{fieldErrors.whatsapp}</p>
                        )}
                      </div>
                    </div>

                    {/* Optional Email Field */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-slate-400" />
                        <span>Email Address (Optional)</span>
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.01 }}
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="doctor@clinic.com"
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-all bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0E9F8E] ${
                          fieldErrors.email ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300'
                        }`}
                      />
                      {fieldErrors.email && (
                        <p className="text-xs text-rose-600 mt-1">{fieldErrors.email}</p>
                      )}
                    </div>

                    {/* Specialty Selection */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                        <Stethoscope className="w-3.5 h-3.5 text-slate-400" />
                        <span>Clinical Specialty *</span>
                      </label>
                      <select
                        value={formData.specialty}
                        onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-[#0E9F8E]"
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
                        <p className="text-xs text-rose-600 mt-1">{fieldErrors.specialty}</p>
                      )}
                    </div>

                    {/* Required Consent Checkbox */}
                    <div className="pt-1">
                      <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-700">
                        <input
                          type="checkbox"
                          required
                          checked={formData.consent}
                          onChange={(e) =>
                            setFormData({ ...formData, consent: e.target.checked })
                          }
                          className="mt-0.5 w-4 h-4 rounded border-slate-300 text-[#0E9F8E] focus:ring-[#0E9F8E] cursor-pointer"
                        />
                        <span className="leading-snug select-none">
                          I agree to be contacted on WhatsApp or phone about my audit *
                        </span>
                      </label>
                      {fieldErrors.consent && (
                        <p className="text-xs text-rose-600 mt-1 pl-6.5">{fieldErrors.consent}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <motion.button
                        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                        disabled={isSubmitting}
                        type="submit"
                        className="w-full py-3.5 px-6 bg-[#0E9F8E] hover:bg-[#0A7F72] active:bg-[#086b5f] text-white font-semibold rounded-xl text-sm shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                            <span>Sending Audit Request...</span>
                          </span>
                        ) : (
                          <>
                            <PhoneCall className="w-4 h-4" />
                            <span>Claim Your Free Growth Audit</span>
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </motion.button>
                    </div>

                    <p className="text-[11px] text-slate-400 text-center pt-1">
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
