import React, { useState, useEffect } from 'react';
import { useRouter } from '../router/Router.tsx';
import { FORM_FALLBACK_WHATSAPP } from '../config/siteConfig.ts';
import { submitLeadForm, LeadFormData } from '../utils/formSubmit.ts';
import {
  CheckCircle2,
  PhoneCall,
  Clock,
  MapPin,
  Building2,
  User,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  Mail,
  AlertCircle,
  ExternalLink,
} from 'lucide-react';

interface BookingFormProps {
  title?: string;
  subtitle?: string;
  initialSpecialty?: string;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  title = 'Book Your Free 30-Minute Clinic Growth Strategy Call',
  subtitle = 'We will review your current patient inquiry journey, analyze your missed-call leakage, and show you the exact system to acquire more patients.',
  initialSpecialty = '',
}) => {
  const { query } = useRouter();

  const [formData, setFormData] = useState<LeadFormData & {
    preferredTime: string;
    notes: string;
  }>({
    name: '',
    clinic: '',
    city: '',
    whatsapp: '',
    email: '',
    specialty: initialSpecialty || query.specialty || 'Dermatology',
    monthlyEnquiries: query.monthlyPatients ? `${query.monthlyPatients} patients/mo` : '100–300 patients',
    consent: false,
    botcheck: '',
    preferredTime: 'Morning (10:00 AM – 1:00 PM)',
    notes: query.estimatedRecovery ? `Calculated monthly recovery opportunity: ₹${query.estimatedRecovery}` : '',
  });

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (query.specialty) {
      setFormData((prev) => ({
        ...prev,
        specialty: query.specialty,
        monthlyEnquiries: query.monthlyPatients ? `${query.monthlyPatients} patients/mo` : prev.monthlyEnquiries,
      }));
    }
  }, [query]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setFieldErrors({});

    // Client-side validation
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name or doctor designation';
    if (!formData.clinic.trim()) errs.clinic = 'Please enter your clinic or hospital name';
    if (!formData.city.trim()) errs.city = 'Please enter your clinic city';

    const cleanDigits = formData.whatsapp.replace(/\D/g, '');
    let local10 = cleanDigits;
    if (cleanDigits.length === 12 && cleanDigits.startsWith('91')) local10 = cleanDigits.slice(2);
    else if (cleanDigits.length === 11 && cleanDigits.startsWith('0')) local10 = cleanDigits.slice(1);

    if (!formData.whatsapp.trim()) {
      errs.whatsapp = 'Please provide your Indian mobile or WhatsApp number';
    } else if (local10.length !== 10 || !/^[6-9]\d{9}$/.test(local10)) {
      errs.whatsapp = 'Please enter a valid 10-digit Indian phone or WhatsApp number';
    }

    if (!formData.specialty.trim()) errs.specialty = 'Please select your clinic specialty';
    if (!formData.consent) errs.consent = 'Please agree to be contacted about your audit';

    if (formData.email && formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }

    if (Object.keys(errs).length > 0) {
      setFieldErrors(errs);
      return;
    }

    setIsSubmitting(true);

    const result = await submitLeadForm(formData, 'Contact page');

    setIsSubmitting(false);

    if (result.success) {
      setIsSuccess(true);
      setErrorMessage(null);
      // Clear form on success
      setFormData({
        name: '',
        clinic: '',
        city: '',
        whatsapp: '',
        email: '',
        specialty: 'Dermatology',
        monthlyEnquiries: '100–300 patients',
        consent: false,
        botcheck: '',
        preferredTime: 'Morning (10:00 AM – 1:00 PM)',
        notes: '',
      });
    } else {
      setErrorMessage(result.message || 'Something went wrong. Please message us on WhatsApp instead.');
      if (result.errors) {
        setFieldErrors(result.errors);
      }
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-white rounded-2xl p-8 sm:p-10 border border-[#0F2A4A]/10 shadow-xl text-center max-w-2xl mx-auto animate-in fade-in duration-300">
        <div className="w-16 h-16 bg-[#14B8A6]/10 text-[#14B8A6] rounded-full flex items-center justify-center mx-auto mb-5 shadow-xs">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-serif font-bold text-[#0F2A4A] mb-2">
          Request Received
        </h3>
        <p className="text-[#0F2A4A]/80 text-sm max-w-lg mx-auto mb-6 leading-relaxed">
          Thank you. We have received your request and will contact you on WhatsApp within 1 business day.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <a
            href={`https://wa.me/${FORM_FALLBACK_WHATSAPP}?text=${encodeURIComponent(
              'Hello Clinic Growth Helpers, I just submitted a contact form request for my clinic.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 px-6 bg-[#14B8A6] hover:bg-[#0F8F83] text-[#0F2A4A] font-semibold rounded-xl text-xs flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
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
            className="py-3 px-6 bg-transparent border border-[#0F2A4A]/20 hover:bg-[#0F2A4A]/5 text-[#0F2A4A] font-semibold rounded-xl text-xs transition-all cursor-pointer"
          >
            Submit Another Clinic Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-[#0F2A4A]/10 shadow-xl overflow-hidden max-w-3xl mx-auto">
      {/* Header */}
      <div className="bg-[#0F2A4A] text-[#F6F1E9] p-6 sm:p-8 border-b border-[#F6F1E9]/10">
        <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#F6F1E9] mb-2">
          {title}
        </h3>
        <p className="text-sm text-[#F6F1E9]/70 leading-relaxed">
          {subtitle}
        </p>
      </div>

      {/* Form Fields */}
      <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
        {/* Hidden Honeypot Field */}
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

        {/* Error notification banner */}
        {errorMessage && (
          <div className="p-4 bg-[#14B8A6]/10 border border-[#14B8A6]/20 rounded-xl text-[#0F2A4A] text-xs space-y-2">
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
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Doctor Name */}
          <div>
            <label className="block text-xs font-semibold text-[#0F2A4A] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-[#0F2A4A]/50" />
              <span>Doctor / Owner Name *</span>
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Dr. Rajesh Verma / Clinic Director"
              className={`w-full px-4 py-2.5 bg-white text-[#0F2A4A] border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#14B8A6] placeholder:text-[#0F2A4A]/40 ${
                fieldErrors.name ? 'border-[#0F2A4A]' : 'border-[#0F2A4A]/15'
              }`}
            />
            {fieldErrors.name && (
              <p className="text-xs text-[#0F2A4A] font-medium mt-1">{fieldErrors.name}</p>
            )}
          </div>

          {/* Clinic Name */}
          <div>
            <label className="block text-xs font-semibold text-[#0F2A4A] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-[#0F2A4A]/50" />
              <span>Clinic / Hospital Name *</span>
            </label>
            <input
              type="text"
              required
              value={formData.clinic}
              onChange={(e) => setFormData({ ...formData, clinic: e.target.value })}
              placeholder="e.g. Verma Specialist Clinic"
              className={`w-full px-4 py-2.5 bg-white text-[#0F2A4A] border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#14B8A6] placeholder:text-[#0F2A4A]/40 ${
                fieldErrors.clinic ? 'border-[#0F2A4A]' : 'border-[#0F2A4A]/15'
              }`}
            />
            {fieldErrors.clinic && (
              <p className="text-xs text-[#0F2A4A] font-medium mt-1">{fieldErrors.clinic}</p>
            )}
          </div>

          {/* Specialty */}
          <div>
            <label className="block text-xs font-semibold text-[#0F2A4A] uppercase tracking-wider mb-1.5">
              Clinical Specialty *
            </label>
            <select
              value={formData.specialty}
              onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
              className="w-full px-4 py-2.5 bg-white text-[#0F2A4A] border border-[#0F2A4A]/15 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#14B8A6]"
            >
              <option value="IVF & Fertility">IVF &amp; Fertility</option>
              <option value="Dental">Dental</option>
              <option value="Orthopaedic & Physiotherapy">Orthopaedic &amp; Physiotherapy</option>
              <option value="Dermatology">Dermatology</option>
              <option value="Eye Care">Eye Care</option>
              <option value="Other">Other</option>
            </select>
            {fieldErrors.specialty && (
              <p className="text-xs text-[#0F2A4A] font-medium mt-1">{fieldErrors.specialty}</p>
            )}
          </div>

          {/* City */}
          <div>
            <label className="block text-xs font-semibold text-[#0F2A4A] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#0F2A4A]/50" />
              <span>City / Location *</span>
            </label>
            <input
              type="text"
              required
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              placeholder="e.g. Bengaluru / Delhi NCR / Mumbai"
              className={`w-full px-4 py-2.5 bg-white text-[#0F2A4A] border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#14B8A6] placeholder:text-[#0F2A4A]/40 ${
                fieldErrors.city ? 'border-[#0F2A4A]' : 'border-[#0F2A4A]/15'
              }`}
            />
            {fieldErrors.city && (
              <p className="text-xs text-[#0F2A4A] font-medium mt-1">{fieldErrors.city}</p>
            )}
          </div>

          {/* Phone / WhatsApp */}
          <div>
            <label className="block text-xs font-semibold text-[#0F2A4A] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <PhoneCall className="w-3.5 h-3.5 text-[#0F2A4A]/50" />
              <span>Indian Phone / WhatsApp Number *</span>
            </label>
            <input
              type="tel"
              required
              value={formData.whatsapp}
              onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
              placeholder="e.g. +91 98765 43210"
              className={`w-full px-4 py-2.5 bg-white text-[#0F2A4A] border rounded-xl text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[#14B8A6] placeholder:text-[#0F2A4A]/40 ${
                fieldErrors.whatsapp ? 'border-[#0F2A4A]' : 'border-[#0F2A4A]/15'
              }`}
            />
            {fieldErrors.whatsapp && (
              <p className="text-xs text-[#0F2A4A] font-medium mt-1">{fieldErrors.whatsapp}</p>
            )}
          </div>

          {/* Optional Email */}
          <div>
            <label className="block text-xs font-semibold text-[#0F2A4A] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#0F2A4A]/50" />
              <span>Email Address (Optional)</span>
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="doctor@clinic.com"
              className={`w-full px-4 py-2.5 bg-white text-[#0F2A4A] border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#14B8A6] placeholder:text-[#0F2A4A]/40 ${
                fieldErrors.email ? 'border-[#0F2A4A]' : 'border-[#0F2A4A]/15'
              }`}
            />
            {fieldErrors.email && (
              <p className="text-xs text-[#0F2A4A] font-medium mt-1">{fieldErrors.email}</p>
            )}
          </div>

          {/* Best Time to Call */}
          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-[#0F2A4A] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#0F2A4A]/50" />
              <span>Best Time for Strategy Call</span>
            </label>
            <select
              value={formData.preferredTime}
              onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
              className="w-full px-4 py-2.5 bg-white text-[#0F2A4A] border border-[#0F2A4A]/15 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#14B8A6]"
            >
              <option value="Morning (10:00 AM – 1:00 PM)">Morning (10:00 AM – 1:00 PM)</option>
              <option value="Afternoon (1:00 PM – 4:00 PM)">Afternoon (1:00 PM – 4:00 PM)</option>
              <option value="Evening (4:00 PM – 7:30 PM)">Evening (4:00 PM – 7:30 PM)</option>
              <option value="Post-Clinic (After 8:00 PM)">Post-Clinic (After 8:00 PM)</option>
            </select>
          </div>
        </div>

        {/* Notes (Optional) */}
        <div>
          <label className="block text-xs font-semibold text-[#0F2A4A] uppercase tracking-wider mb-1.5">
            Optional Notes or Specific Inquiries
          </label>
          <textarea
            rows={2}
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            placeholder="Tell us about your clinic setup, branches, or inquiries..."
            className="w-full px-4 py-2 bg-white text-[#0F2A4A] border border-[#0F2A4A]/15 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#14B8A6] placeholder:text-[#0F2A4A]/40"
          ></textarea>
        </div>

        {/* Required Consent Checkbox */}
        <div className="pt-1">
          <label className="flex items-start gap-2.5 cursor-pointer text-xs text-[#0F2A4A]">
            <input
              type="checkbox"
              required
              checked={formData.consent}
              onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
              className="mt-0.5 w-4 h-4 rounded border-[#0F2A4A]/30 text-[#14B8A6] focus:ring-[#14B8A6] cursor-pointer"
            />
            <span className="leading-snug select-none">
              I agree to be contacted on WhatsApp or phone about my audit *
            </span>
          </label>
          {fieldErrors.consent && (
            <p className="text-xs text-[#0F2A4A] font-medium mt-1 pl-6.5">{fieldErrors.consent}</p>
          )}
        </div>

        {/* Submit Button & Trust Cues */}
        <div className="pt-2 space-y-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 px-6 bg-[#14B8A6] hover:bg-[#0F8F83] active:bg-[#0F8F83] disabled:opacity-75 disabled:cursor-not-allowed text-[#0F2A4A] font-semibold rounded-xl shadow-md hover:shadow-lg transition-all text-sm flex items-center justify-center gap-2 cursor-pointer"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-[#0F2A4A]/40 border-t-[#0F2A4A] rounded-full animate-spin" />
                <span>Scheduling Strategy Session...</span>
              </span>
            ) : (
              <>
                <span>Confirm Free 30-Minute Strategy Call</span>
                <ArrowRight className="w-4 h-4 text-[#0F2A4A]" />
              </>
            )}
          </button>

          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-[#0F2A4A]/60 gap-2 pt-2 border-t border-[#0F2A4A]/10">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#14B8A6]" />
              <span>100% Confidential · Zero aggressive sales pitch</span>
            </span>
            <span>Scoped specifically for your clinic specialty</span>
          </div>
        </div>
      </form>
    </div>
  );
};
