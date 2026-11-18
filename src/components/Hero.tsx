import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useRouter } from '../router/Router.tsx';
import { siteConfig, FORM_FALLBACK_WHATSAPP } from '../config/siteConfig.ts';
import { submitLeadForm, LeadFormData } from '../utils/formSubmit.ts';
import {
  PhoneCall,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Send,
  MessageSquare,
  Lock,
  User,
  Building,
  MapPin,
  Stethoscope,
  Mail,
  AlertCircle,
  ExternalLink,
  X,
} from 'lucide-react';

export const Hero: React.FC = () => {
  const { navigate } = useRouter();

  // Word-by-word staggered reveal setup
  const headline = 'We Help Modern Clinics Turn Online Enquiries into Booked Patients and Revenue.';
  const words = headline.split(' ');
  const tealWords = new Set(['booked', 'patients', 'and', 'revenue']);

  // Interactive self-typing WhatsApp chat simulation loop
  const [chatStep, setChatStep] = useState(0);

  // Tab switch between simulation and inline audit form in hero
  const [heroTab, setHeroTab] = useState<'demo' | 'audit'>('demo');

  // Modal state for direct button click
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Hero Lead Form Data
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

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const sequence = [
      { step: 1, delay: 600 },
      { step: 2, delay: 2400 },
      { step: 3, delay: 4400 },
      { step: 4, delay: 6200 },
      { step: 0, delay: 10500 },
    ];

    let currentIdx = 0;
    let timer: NodeJS.Timeout;

    const runNext = () => {
      const item = sequence[currentIdx];
      timer = setTimeout(() => {
        setChatStep(item.step);
        currentIdx = (currentIdx + 1) % sequence.length;
        runNext();
      }, item.delay);
    };

    runNext();
    return () => clearTimeout(timer);
  }, []);

  const handleHeroSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setFieldErrors({});

    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name';
    if (!formData.clinic.trim()) errs.clinic = 'Please enter your clinic name';
    if (!formData.city.trim()) errs.city = 'Please enter your city / state';

    const cleanDigits = formData.whatsapp.replace(/\D/g, '');
    let local10 = cleanDigits;
    if (cleanDigits.length === 12 && cleanDigits.startsWith('91')) local10 = cleanDigits.slice(2);
    else if (cleanDigits.length === 11 && cleanDigits.startsWith('0')) local10 = cleanDigits.slice(1);

    if (!formData.whatsapp.trim()) {
      errs.whatsapp = 'Please provide your Indian mobile or WhatsApp number';
    } else if (local10.length !== 10 || !/^[6-9]\d{9}$/.test(local10)) {
      errs.whatsapp = 'Please enter a valid 10-digit Indian phone or WhatsApp number';
    }

    if (!formData.specialty.trim()) errs.specialty = 'Please select a specialty';
    if (!formData.consent) errs.consent = 'Please agree to be contacted about your audit';

    if (formData.email && formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }

    if (Object.keys(errs).length > 0) {
      setFieldErrors(errs);
      return;
    }

    setIsSubmitting(true);

    const result = await submitLeadForm(formData, 'Hero form');

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

  // Reusable Hero Lead Form Content (used in both inline tab and modal)
  const renderAuditForm = (inModal = false) => (
    <div className={`text-[#0F2A4A] ${inModal ? 'p-1' : 'bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#0F2A4A]/10'}`}>
      <AnimatePresence mode="wait">
        {isSuccess ? (
          <motion.div
            key="hero-success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-6 space-y-4"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', damping: 12 }}
              className="w-14 h-14 bg-[#14B8A6]/10 text-[#14B8A6] rounded-full flex items-center justify-center mx-auto shadow-md"
            >
              <CheckCircle2 className="w-9 h-9 stroke-[2.5]" />
            </motion.div>

            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0F2A4A]">
              Audit Request Received
            </h3>

            <p className="text-[#0F2A4A]/70 text-xs sm:text-sm max-w-sm mx-auto leading-relaxed">
              Thank you. We have received your request and will contact you on WhatsApp within 1 business day.
            </p>

            <div className="pt-2 flex flex-col gap-2.5 items-center">
              <a
                href={`https://wa.me/${FORM_FALLBACK_WHATSAPP}?text=${encodeURIComponent(
                  'Hello Clinic Growth Helpers, I just submitted an audit request in the hero form.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#14B8A6] hover:bg-[#0F8F83] text-[#0F2A4A] font-semibold rounded-xl text-xs shadow-md transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-[#0F2A4A]" />
                <span>Message us on WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  setIsSuccess(false);
                  setErrorMessage(null);
                  if (inModal) setIsModalOpen(false);
                }}
                className="text-xs font-semibold text-[#14B8A6] hover:text-[#0F8F83] hover:underline cursor-pointer pt-1"
              >
                {inModal ? 'Close window' : 'Submit another inquiry'}
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.form
            key="hero-form-inputs"
            onSubmit={handleHeroSubmit}
            className="space-y-3"
            initial={{ opacity: 1 }}
            data-location="Hero form"
          >
            {/* Honeypot */}
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

            <div>
              <h3 className="text-lg sm:text-xl font-serif font-bold text-[#0F2A4A]">
                Claim Your Free Growth Audit
              </h3>
              <p className="text-[11px] text-[#0F2A4A]/60 mt-0.5">
                Takes 30 seconds. Strictly confidential &amp; NMC ethical compliant.
              </p>
            </div>

            {/* Error Banner with fallback WhatsApp button */}
            {errorMessage && (
              <div className="p-3 bg-[#14B8A6]/10 border border-[#14B8A6]/20 rounded-xl text-[#0F2A4A] text-xs space-y-1.5">
                <div className="flex items-center gap-1.5 font-medium">
                  <AlertCircle className="w-4 h-4 text-[#14B8A6] shrink-0" />
                  <span>{errorMessage}</span>
                </div>
                <a
                  href={`https://wa.me/${FORM_FALLBACK_WHATSAPP}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#14B8A6] hover:bg-[#0F8F83] text-[#0F2A4A] rounded-lg font-semibold text-[11px] shadow-xs transition-colors"
                >
                  <MessageSquare className="w-3 h-3 text-[#0F2A4A]" />
                  <span>Message us on WhatsApp</span>
                  <ExternalLink className="w-3 h-3 ml-0.5 text-[#0F2A4A]" />
                </a>
              </div>
            )}

            {/* Doctor Name */}
            <div>
              <label className="label-eyebrow text-[#0F2A4A] mb-1.5 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#14B8A6]" />
                <span>Doctor / Owner Name *</span>
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Dr. Rajesh Verma"
                className={`w-full min-h-[44px] px-3 py-2 rounded-lg text-sm bg-white text-[#0F2A4A] border placeholder:text-[#0F2A4A]/40 focus:outline-none focus:ring-2 focus:ring-[#14B8A6] focus:border-[#14B8A6] transition-all ${
                  fieldErrors.name ? 'border-[#14B8A6] bg-[#14B8A6]/5' : 'border-[#0F2A4A]/15'
                }`}
              />
              {fieldErrors.name && <p className="text-[10px] text-[#0F8F83] mt-0.5 font-medium">{fieldErrors.name}</p>}
            </div>

            {/* Clinic Name */}
            <div>
              <label className="label-eyebrow text-[#0F2A4A] mb-1.5 flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-[#14B8A6]" />
                <span>Clinic Name *</span>
              </label>
              <input
                type="text"
                required
                value={formData.clinic}
                onChange={(e) => setFormData({ ...formData, clinic: e.target.value })}
                placeholder="Apex Specialty Clinic"
                className={`w-full min-h-[44px] px-3 py-2 rounded-lg text-sm bg-white text-[#0F2A4A] border placeholder:text-[#0F2A4A]/40 focus:outline-none focus:ring-2 focus:ring-[#14B8A6] focus:border-[#14B8A6] transition-all ${
                  fieldErrors.clinic ? 'border-[#14B8A6] bg-[#14B8A6]/5' : 'border-[#0F2A4A]/15'
                }`}
              />
              {fieldErrors.clinic && <p className="text-[11px] text-[#0F8F83] mt-0.5 font-medium">{fieldErrors.clinic}</p>}
            </div>

            {/* City & WhatsApp Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div>
                <label className="label-eyebrow text-[#0F2A4A] mb-1.5 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#14B8A6]" />
                  <span>City / State *</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  placeholder="e.g. Kolkata / Mumbai"
                  className={`w-full min-h-[44px] px-3 py-2 rounded-lg text-sm bg-white text-[#0F2A4A] border placeholder:text-[#0F2A4A]/40 focus:outline-none focus:ring-2 focus:ring-[#14B8A6] focus:border-[#14B8A6] transition-all ${
                    fieldErrors.city ? 'border-[#14B8A6] bg-[#14B8A6]/5' : 'border-[#0F2A4A]/15'
                  }`}
                />
                {fieldErrors.city && <p className="text-[11px] text-[#0F8F83] mt-0.5 font-medium">{fieldErrors.city}</p>}
              </div>

              <div>
                <label className="label-eyebrow text-[#0F2A4A] mb-1.5 flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-[#14B8A6]" />
                  <span>Phone / WhatsApp *</span>
                </label>
                <input
                  type="tel"
                  required
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  placeholder="+91 98765 43210"
                  className={`w-full min-h-[44px] px-3 py-2 rounded-lg text-sm font-mono bg-white text-[#0F2A4A] border placeholder:text-[#0F2A4A]/40 focus:outline-none focus:ring-2 focus:ring-[#14B8A6] focus:border-[#14B8A6] transition-all ${
                    fieldErrors.whatsapp ? 'border-[#14B8A6] bg-[#14B8A6]/5' : 'border-[#0F2A4A]/15'
                  }`}
                />
                {fieldErrors.whatsapp && (
                  <p className="text-[11px] text-[#0F8F83] mt-0.5 font-medium">{fieldErrors.whatsapp}</p>
                )}
              </div>
            </div>

            {/* Optional Email & Specialty Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div>
                <label className="label-eyebrow text-[#0F2A4A] mb-1.5 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#14B8A6]" />
                  <span>Email (Optional)</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="doctor@clinic.com"
                  className={`w-full min-h-[44px] px-3 py-2 rounded-lg text-sm bg-white text-[#0F2A4A] border placeholder:text-[#0F2A4A]/40 focus:outline-none focus:ring-2 focus:ring-[#14B8A6] focus:border-[#14B8A6] transition-all ${
                    fieldErrors.email ? 'border-[#14B8A6] bg-[#14B8A6]/5' : 'border-[#0F2A4A]/15'
                  }`}
                />
                {fieldErrors.email && <p className="text-[11px] text-[#0F8F83] mt-0.5 font-medium">{fieldErrors.email}</p>}
              </div>

              <div>
                <label className="label-eyebrow text-[#0F2A4A] mb-1.5 flex items-center gap-1.5">
                  <Stethoscope className="w-3.5 h-3.5 text-[#14B8A6]" />
                  <span>Specialty *</span>
                </label>
                <select
                  value={formData.specialty}
                  onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                  className="w-full min-h-[44px] px-3 py-2 rounded-lg border border-[#0F2A4A]/15 bg-white text-[#0F2A4A] text-sm focus:outline-none focus:ring-2 focus:ring-[#14B8A6] focus:border-[#14B8A6]"
                >
                  <option value="IVF & Fertility">IVF &amp; Fertility</option>
                  <option value="Dental">Dental</option>
                  <option value="Orthopaedic & Physiotherapy">Orthopaedic &amp; Physiotherapy</option>
                  <option value="Dermatology">Dermatology</option>
                  <option value="Eye Care">Eye Care</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* Consent Checkbox */}
            <div className="pt-1">
              <label className="flex items-start gap-2 cursor-pointer text-[11px] text-[#0F2A4A]/80">
                <input
                  type="checkbox"
                  required
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  className="mt-0.5 w-3.5 h-3.5 rounded border-[#0F2A4A]/20 text-[#14B8A6] focus:ring-[#14B8A6] cursor-pointer"
                />
                <span className="leading-snug select-none">
                  I agree to be contacted on WhatsApp or phone about my audit *
                </span>
              </label>
              {fieldErrors.consent && (
                <p className="text-[10px] text-[#0F8F83] mt-0.5 pl-5 font-medium">{fieldErrors.consent}</p>
              )}
            </div>

            {/* Submit Button: Teal fill with Navy text */}
            <div className="pt-1.5">
              <button
                disabled={isSubmitting}
                type="submit"
                className="w-full min-h-[44px] py-3 px-5 bg-[#14B8A6] hover:bg-[#0F8F83] disabled:opacity-75 disabled:cursor-not-allowed text-[#0F2A4A] font-semibold rounded-xl text-xs shadow-md transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 border-2 border-[#0F2A4A]/40 border-t-[#0F2A4A] rounded-full animate-spin" />
                    <span>Sending Audit Request...</span>
                  </span>
                ) : (
                  <>
                    <PhoneCall className="w-3.5 h-3.5 text-[#0F2A4A]" />
                    <span>Claim Your Free Growth Audit</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#0F2A4A]" />
                  </>
                )}
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <section className="relative pt-24 pb-12 md:pt-28 md:pb-16 lg:pt-32 lg:pb-24 bg-[#0F2A4A] text-[#F6F1E9] overflow-hidden">
      {/* Subtle solid/dark navy mesh background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#14B8A6]/5 rounded-full blur-[140px] pointer-events-none" />
        <div
          className="absolute bottom-10 left-[-100px] w-[550px] h-[550px] bg-[#0A1D33] rounded-full blur-[140px] pointer-events-none"
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(#F6F1E9 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headlines, Subheading & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Trust Kicker */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#F6F1E9]/15 text-xs text-[#14B8A6] font-medium"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#14B8A6]" />
              <span>Done-For-You Patient Growth for Modern Indian Clinics</span>
            </motion.div>

            {/* Word-by-word headline reveal */}
            <h1 className="text-[clamp(2.125rem,4.2vw,3.65rem)] leading-[1.14] tracking-[-0.015em] font-serif font-bold text-[#F6F1E9] max-w-3xl">
              {words.map((word, i) => {
                const clean = word.toLowerCase().replace(/[^a-z]/g, '');
                const isTeal = tealWords.has(clean);
                return (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.45,
                      delay: 0.1 + i * 0.04,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={`inline-block mr-2.5 ${
                      isTeal ? 'text-[#14B8A6] font-semibold' : ''
                    }`}
                  >
                    {word}
                  </motion.span>
                );
              })}
            </h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="text-base sm:text-lg text-[#F6F1E9]/75 max-w-[65ch] leading-[1.6] font-sans"
            >
              Website, WhatsApp automation, 24/7 AI call receptionist, social media and CRM, run end
              to end by our team. You focus on patients, we handle the growth.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <button
                type="button"
                onClick={() => {
                  setIsModalOpen(true);
                }}
                className="group min-h-[48px] inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#14B8A6] hover:bg-[#0F8F83] text-[#0F2A4A] font-semibold rounded-xl text-sm shadow-xl transition-colors duration-200 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-[#0F2A4A] shrink-0" />
                <span className="whitespace-nowrap">Claim Your Free Growth Audit</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 shrink-0 text-[#0F2A4A]" />
              </button>

              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById('how-it-works');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  else navigate('/how-it-works');
                }}
                className="min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent hover:bg-white/5 border border-[#F6F1E9]/30 text-[#F6F1E9] hover:border-[#14B8A6] hover:text-[#14B8A6] font-semibold rounded-xl text-sm transition-colors duration-200 cursor-pointer whitespace-nowrap"
              >
                <span>{siteConfig.brand.ctaSecondary}</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>
            </motion.div>

            {/* Trust Points */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.85 }}
              className="pt-6 border-t border-[#F6F1E9]/15 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-[#F6F1E9]/80"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#14B8A6]" />
                <span>100% Done-For-You</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#14B8A6]" />
                <span>NMC Medical Ethics Compliant</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#14B8A6]" />
                <span>6-Month Growth Commitment</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Toggleable Phone Simulation OR Inline Hero Form */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <div className="w-full max-w-[380px] sm:max-w-[400px] flex flex-col items-center">
              {/* View Switcher Pills */}
              <div className="flex items-center gap-1 p-1 bg-white/10 backdrop-blur-md rounded-xl border border-[#F6F1E9]/15 mb-4 text-xs">
                <button
                  type="button"
                  onClick={() => setHeroTab('demo')}
                  className={`min-h-[44px] sm:min-h-0 px-3.5 py-2 sm:py-1.5 rounded-lg transition-colors font-medium cursor-pointer ${
                    heroTab === 'demo'
                      ? 'bg-[#14B8A6] text-[#0F2A4A] font-semibold shadow-sm'
                      : 'text-[#F6F1E9]/75 hover:text-[#F6F1E9]'
                  }`}
                >
                  Live WhatsApp Demo
                </button>
                <button
                  type="button"
                  onClick={() => setHeroTab('audit')}
                  className={`min-h-[44px] sm:min-h-0 px-3.5 py-2 sm:py-1.5 rounded-lg transition-colors font-medium cursor-pointer ${
                    heroTab === 'audit'
                      ? 'bg-[#14B8A6] text-[#0F2A4A] font-semibold shadow-sm'
                      : 'text-[#F6F1E9]/75 hover:text-[#F6F1E9]'
                  }`}
                >
                  Claim Free Growth Audit
                </button>
              </div>

              {heroTab === 'audit' ? (
                <motion.div
                  key="hero-tab-audit"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="w-full"
                >
                  {renderAuditForm(false)}
                </motion.div>
              ) : (
                <motion.div
                  key="hero-tab-demo"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="w-full animate-float"
                >
                {/* Phone Frame */}
                <div className="bg-[#0A1D33] rounded-[38px] p-3 border-4 border-[#0F2A4A] shadow-2xl relative">
                  {/* Phone Speaker Notch */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-4 bg-[#0F2A4A] rounded-full flex items-center justify-center z-30">
                    <div className="w-10 h-1 bg-white/20 rounded-full" />
                  </div>

                  {/* Screen Content */}
                  <div className="bg-[#0A1D33] rounded-[30px] overflow-hidden border border-[#F6F1E9]/10 text-xs text-[#F6F1E9] flex flex-col h-[520px]">
                    {/* Top Header Bar */}
                    <div className="bg-[#0F2A4A] p-3 pt-6 flex items-center justify-between border-b border-[#F6F1E9]/10">
                      <div className="flex items-center gap-2.5">
                        <div className="relative">
                          <div className="w-9 h-9 rounded-full bg-[#14B8A6] flex items-center justify-center font-bold text-[#0F2A4A] text-xs">
                            ASC
                          </div>
                          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#14B8A6] border border-[#0F2A4A]" />
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <h4 className="font-semibold text-[#F6F1E9] text-xs">
                              Apex Specialty Clinic
                            </h4>
                            <span className="px-1.5 py-0.2 bg-[#14B8A6]/20 text-[#14B8A6] text-[9px] rounded font-mono font-semibold">
                              DEMO
                            </span>
                          </div>
                          <p className="text-[10px] text-[#14B8A6]">24/7 AI Concierge Active</p>
                        </div>
                      </div>
                      <Lock className="w-3.5 h-3.5 text-[#F6F1E9]/50" />
                    </div>

                    {/* Chat Messages Body */}
                    <div className="flex-1 p-3.5 overflow-y-auto space-y-3 bg-[#0A1D33] relative flex flex-col justify-end">
                      {/* Timestamp Pill */}
                      <div className="flex justify-center my-1">
                        <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-[9px] text-[#F6F1E9]/60 font-mono">
                          TODAY · 8:42 PM (AFTER OPD HOURS)
                        </span>
                      </div>

                      {/* Message 1: User Message in Teal */}
                      {chatStep >= 1 && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          className="self-end max-w-[85%] bg-[#14B8A6] text-[#0F2A4A] font-medium p-2.5 rounded-2xl rounded-tr-xs shadow-xs text-xs space-y-0.5"
                        >
                          <p className="leading-snug">
                            Do you have a consultation slot this Thursday?
                          </p>
                          <span className="text-[9px] text-[#0F2A4A]/70 block text-right font-mono">
                            8:42 PM ✓✓
                          </span>
                        </motion.div>
                      )}

                      {/* Message 2: Instant Bot Reply */}
                      {chatStep >= 2 && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          className="self-start max-w-[88%] bg-[#0F2A4A] text-[#F6F1E9] p-2.5 rounded-2xl rounded-tl-xs shadow-xs text-xs space-y-1 border border-[#F6F1E9]/10"
                        >
                          <div className="flex items-center gap-1 text-[10px] text-[#14B8A6] font-medium font-mono">
                            <Sparkles className="w-3 h-3 text-[#14B8A6]" />
                            <span>AI Concierge · Answered in 4s</span>
                          </div>
                          <p className="leading-snug text-[#F6F1E9]/90">
                            Hello! Yes, the clinic has an OPD consultation slot at{' '}
                            <strong className="text-[#F6F1E9]">4:30 PM this Thursday</strong>. May I reserve this slot for you?
                          </p>
                          <span className="text-[9px] text-[#F6F1E9]/50 block text-right font-mono">
                            8:42 PM
                          </span>
                        </motion.div>
                      )}

                      {/* Message 3 */}
                      {chatStep >= 3 && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          className="self-end max-w-[85%] bg-[#14B8A6] text-[#0F2A4A] font-medium p-2.5 rounded-2xl rounded-tr-xs shadow-xs text-xs space-y-0.5"
                        >
                          <p className="leading-snug">Yes please, my name is Vikram Patel.</p>
                          <span className="text-[9px] text-[#0F2A4A]/70 block text-right font-mono">
                            8:43 PM ✓✓
                          </span>
                        </motion.div>
                      )}

                      {/* Step 4 */}
                      <AnimatePresence>
                        {chatStep >= 4 && (
                          <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="p-3 bg-[#0F2A4A] text-[#F6F1E9] rounded-xl shadow-lg border border-[#14B8A6]/40 space-y-1.5"
                          >
                            <div className="flex items-center gap-1.5 font-bold text-xs text-[#14B8A6]">
                              <CheckCircle2 className="w-4 h-4 text-[#14B8A6] shrink-0" />
                              <span>Appointment Booked on Autopilot!</span>
                            </div>
                            <p className="text-[11px] text-[#F6F1E9] leading-tight">
                              <strong>Vikram Patel</strong> · Consultation Confirmed (Thursday, 4:30
                              PM)
                            </p>
                            <div className="flex items-center justify-between text-[9px] text-[#F6F1E9]/70 pt-1 border-t border-[#F6F1E9]/10">
                              <span>Synced to Clinic Calendar</span>
                              <span className="font-mono text-[#14B8A6]">Demo Record</span>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Mock Input Bar */}
                    <div className="bg-[#0F2A4A] p-2.5 flex items-center gap-2 border-t border-[#F6F1E9]/10">
                      <div className="flex-1 bg-white/10 rounded-full px-3 py-1.5 text-[11px] text-[#F6F1E9]/60 flex items-center justify-between">
                        <span>{chatStep === 0 ? 'Type a message...' : 'Appointment confirmed ✓'}</span>
                        <MessageSquare className="w-3.5 h-3.5 text-[#F6F1E9]/40" />
                      </div>
                      <div className="w-7 h-7 rounded-full bg-[#14B8A6] flex items-center justify-center text-[#0F2A4A]">
                        <Send className="w-3 h-3 text-[#0F2A4A]" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
            </div>
          </div>
        </div>
      </div>

      {/* Modal Dialog for Hero Form Trigger */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F2A4A]/80 backdrop-blur-sm overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#0F2A4A]/10 my-8"
            >
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 min-w-[44px] min-h-[44px] p-2 rounded-full text-[#0F2A4A]/60 hover:text-[#0F2A4A] hover:bg-[#F6F1E9] transition-colors cursor-pointer flex items-center justify-center"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              {renderAuditForm(true)}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
