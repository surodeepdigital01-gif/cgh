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
    <div className={`text-slate-800 ${inModal ? 'p-1' : 'bg-white/95 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/20'}`}>
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
              className="w-14 h-14 bg-[#E6F7F5] text-[#0E9F8E] rounded-full flex items-center justify-center mx-auto shadow-md"
            >
              <CheckCircle2 className="w-9 h-9 stroke-[2.5]" />
            </motion.div>

            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0B1F3A]">
              Audit Request Received
            </h3>

            <p className="text-slate-700 text-xs sm:text-sm max-w-sm mx-auto leading-relaxed">
              Thank you. We have received your request and will contact you on WhatsApp within 1 business day.
            </p>

            <div className="pt-2 flex flex-col gap-2.5 items-center">
              <a
                href={`https://wa.me/${FORM_FALLBACK_WHATSAPP}?text=${encodeURIComponent(
                  'Hello Clinic Growth Helpers, I just submitted an audit request in the hero form.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold rounded-xl text-xs shadow-md transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Message us on WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  setIsSuccess(false);
                  setErrorMessage(null);
                  if (inModal) setIsModalOpen(false);
                }}
                className="text-xs font-semibold text-[#0E9F8E] hover:underline cursor-pointer pt-1"
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
              <h3 className="text-lg sm:text-xl font-serif font-bold text-[#0B1F3A]">
                Claim Your Free Growth Audit
              </h3>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Takes 30 seconds. Strictly confidential &amp; NMC ethical compliant.
              </p>
            </div>

            {/* Error Banner with fallback WhatsApp button */}
            {errorMessage && (
              <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-rose-800 text-xs space-y-1.5">
                <div className="flex items-center gap-1.5 font-medium">
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
                <a
                  href={`https://wa.me/${FORM_FALLBACK_WHATSAPP}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#25D366] text-white rounded-lg font-semibold text-[11px] shadow-xs hover:bg-[#20ba59] transition-colors"
                >
                  <MessageSquare className="w-3 h-3" />
                  <span>Message us on WhatsApp</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
              </div>
            )}

            {/* Doctor Name */}
            <div>
              <label className="block text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-0.5 flex items-center gap-1">
                <User className="w-3 h-3 text-slate-400" />
                <span>Doctor / Owner Name *</span>
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Dr. Rajesh Verma"
                className={`w-full px-3 py-2 rounded-lg border text-xs bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0E9F8E] ${
                  fieldErrors.name ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300'
                }`}
              />
              {fieldErrors.name && <p className="text-[10px] text-rose-600 mt-0.5">{fieldErrors.name}</p>}
            </div>

            {/* Clinic Name */}
            <div>
              <label className="block text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-0.5 flex items-center gap-1">
                <Building className="w-3 h-3 text-slate-400" />
                <span>Clinic Name *</span>
              </label>
              <input
                type="text"
                required
                value={formData.clinic}
                onChange={(e) => setFormData({ ...formData, clinic: e.target.value })}
                placeholder="Apex Specialty Clinic"
                className={`w-full px-3 py-2 rounded-lg border text-xs bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0E9F8E] ${
                  fieldErrors.clinic ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300'
                }`}
              />
              {fieldErrors.clinic && <p className="text-[10px] text-rose-600 mt-0.5">{fieldErrors.clinic}</p>}
            </div>

            {/* City & WhatsApp Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div>
                <label className="block text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-0.5 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-slate-400" />
                  <span>City / State *</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  placeholder="e.g. Kolkata / Mumbai"
                  className={`w-full px-3 py-2 rounded-lg border text-xs bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0E9F8E] ${
                    fieldErrors.city ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300'
                  }`}
                />
                {fieldErrors.city && <p className="text-[10px] text-rose-600 mt-0.5">{fieldErrors.city}</p>}
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-0.5 flex items-center gap-1">
                  <MessageSquare className="w-3 h-3 text-slate-400" />
                  <span>Phone / WhatsApp *</span>
                </label>
                <input
                  type="tel"
                  required
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  placeholder="+91 98765 43210"
                  className={`w-full px-3 py-2 rounded-lg border text-xs font-mono bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0E9F8E] ${
                    fieldErrors.whatsapp ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300'
                  }`}
                />
                {fieldErrors.whatsapp && (
                  <p className="text-[10px] text-rose-600 mt-0.5">{fieldErrors.whatsapp}</p>
                )}
              </div>
            </div>

            {/* Optional Email & Specialty Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div>
                <label className="block text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-0.5 flex items-center gap-1">
                  <Mail className="w-3 h-3 text-slate-400" />
                  <span>Email (Optional)</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="doctor@clinic.com"
                  className={`w-full px-3 py-2 rounded-lg border text-xs bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0E9F8E] ${
                    fieldErrors.email ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300'
                  }`}
                />
                {fieldErrors.email && <p className="text-[10px] text-rose-600 mt-0.5">{fieldErrors.email}</p>}
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-0.5 flex items-center gap-1">
                  <Stethoscope className="w-3 h-3 text-slate-400" />
                  <span>Specialty *</span>
                </label>
                <select
                  value={formData.specialty}
                  onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-slate-50 text-xs focus:outline-none focus:ring-2 focus:ring-[#0E9F8E]"
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
              <label className="flex items-start gap-2 cursor-pointer text-[11px] text-slate-700">
                <input
                  type="checkbox"
                  required
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  className="mt-0.5 w-3.5 h-3.5 rounded border-slate-300 text-[#0E9F8E] focus:ring-[#0E9F8E] cursor-pointer"
                />
                <span className="leading-snug select-none">
                  I agree to be contacted on WhatsApp or phone about my audit *
                </span>
              </label>
              {fieldErrors.consent && (
                <p className="text-[10px] text-rose-600 mt-0.5 pl-5">{fieldErrors.consent}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-1.5">
              <button
                disabled={isSubmitting}
                type="submit"
                className="w-full py-3 px-5 bg-[#0E9F8E] hover:bg-[#0A7F72] active:bg-[#086b5f] disabled:opacity-75 disabled:cursor-not-allowed text-white font-semibold rounded-xl text-xs shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    <span>Sending Audit Request...</span>
                  </span>
                ) : (
                  <>
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Claim Your Free Growth Audit</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
    <section className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 bg-[#0B1F3A] text-white overflow-hidden">
      {/* Slow-moving animated gradient mesh background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0E9F8E]/15 rounded-full blur-[130px] animate-glow" />
        <div
          className="absolute bottom-10 left-[-100px] w-[550px] h-[550px] bg-[#0A7F72]/15 rounded-full blur-[140px] animate-glow"
          style={{ animationDelay: '2.5s' }}
        />
        <div
          className="absolute top-1/3 left-1/3 w-[350px] h-[350px] bg-[#C8A24A]/10 rounded-full blur-[110px] animate-glow"
          style={{ animationDelay: '4s' }}
        />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines, Subheading & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Trust Kicker */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs text-emerald-300 font-medium"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C8A24A]" />
              <span>Done-For-You Patient Growth for Modern Indian Clinics</span>
            </motion.div>

            {/* Word-by-word headline reveal */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-normal leading-[1.15] max-w-2xl">
              {words.map((word, i) => {
                const clean = word.toLowerCase().replace(/[^a-z]/g, '');
                const isTeal = tealWords.has(clean);
                return (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 14, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{
                      duration: 0.5,
                      delay: 0.15 + i * 0.05,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={`inline-block mr-2.5 ${
                      isTeal ? 'text-[#0E9F8E] font-semibold' : ''
                    }`}
                  >
                    {word}
                  </motion.span>
                );
              })}
            </h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed"
            >
              Website, WhatsApp automation, 24/7 AI call receptionist, social media and CRM, run end
              to end by our team. You focus on patients, we handle the growth.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  // Open modal directly or switch right tab to audit
                  setIsModalOpen(true);
                }}
                className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-[#0E9F8E] hover:bg-[#0A7F72] active:bg-[#096d62] text-white font-semibold rounded-xl text-sm shadow-xl shadow-teal-900/30 transition-all duration-200 cursor-pointer overflow-hidden"
              >
                <span className="absolute -inset-1 rounded-xl bg-[#0E9F8E]/30 animate-pulse pointer-events-none" />
                <PhoneCall className="w-4 h-4 text-emerald-200 shrink-0 relative z-10" />
                <span className="relative z-10 whitespace-nowrap">Claim Your Free Growth Audit</span>
                <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-200 group-hover:translate-x-1 shrink-0" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  const el = document.getElementById('how-it-works');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  else navigate('/how-it-works');
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold rounded-xl text-sm transition-all duration-200 cursor-pointer whitespace-nowrap"
              >
                <span>{siteConfig.brand.ctaSecondary}</span>
                <ArrowRight className="w-4 h-4 text-slate-300 shrink-0" />
              </motion.button>
            </motion.div>

            {/* Trust Points */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-300"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0E9F8E]" />
                <span>100% Done-For-You</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0E9F8E]" />
                <span>NMC Medical Ethics Compliant</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0E9F8E]" />
                <span>6-Month Growth Commitment</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Toggleable Phone Simulation OR Inline Hero Form */}
          <div className="lg:col-span-5 flex flex-col items-center">
            {/* View Switcher Pills */}
            <div className="flex items-center gap-1 p-1 bg-white/10 backdrop-blur-md rounded-xl border border-white/15 mb-4 text-xs">
              <button
                type="button"
                onClick={() => setHeroTab('demo')}
                className={`px-3 py-1.5 rounded-lg transition-all font-medium cursor-pointer ${
                  heroTab === 'demo'
                    ? 'bg-[#0E9F8E] text-white shadow-sm'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Live WhatsApp Demo
              </button>
              <button
                type="button"
                onClick={() => setHeroTab('audit')}
                className={`px-3 py-1.5 rounded-lg transition-all font-medium cursor-pointer ${
                  heroTab === 'audit'
                    ? 'bg-[#0E9F8E] text-white shadow-sm'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Claim Free Growth Audit
              </button>
            </div>

            {heroTab === 'audit' ? (
              <motion.div
                key="hero-tab-audit"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-[390px]"
              >
                {renderAuditForm(false)}
              </motion.div>
            ) : (
              <motion.div
                key="hero-tab-demo"
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="w-full max-w-[340px] sm:max-w-[360px] animate-float"
              >
                {/* Phone Frame */}
                <div className="bg-slate-900 rounded-[38px] p-3 border-4 border-slate-700/80 shadow-2xl relative">
                  {/* Phone Speaker Notch */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-4 bg-slate-800 rounded-full flex items-center justify-center z-30">
                    <div className="w-10 h-1 bg-slate-600 rounded-full" />
                  </div>

                  {/* Screen Content */}
                  <div className="bg-[#0b141a] rounded-[30px] overflow-hidden border border-slate-800 text-xs text-slate-100 flex flex-col h-[520px]">
                    {/* WhatsApp Top Header Bar */}
                    <div className="bg-[#1f2c34] p-3 pt-6 flex items-center justify-between border-b border-slate-700/50">
                      <div className="flex items-center gap-2.5">
                        <div className="relative">
                          <div className="w-9 h-9 rounded-full bg-[#0E9F8E] flex items-center justify-center font-bold text-white text-xs">
                            ASC
                          </div>
                          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-[#1f2c34]" />
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <h4 className="font-semibold text-slate-100 text-xs">
                              Apex Specialty Clinic
                            </h4>
                            <span className="px-1.5 py-0.2 bg-[#0E9F8E]/20 text-[#0E9F8E] text-[9px] rounded font-mono font-semibold">
                              DEMO
                            </span>
                          </div>
                          <p className="text-[10px] text-emerald-400">24/7 AI Concierge Active</p>
                        </div>
                      </div>
                      <Lock className="w-3.5 h-3.5 text-slate-400" />
                    </div>

                    {/* Chat Messages Body */}
                    <div className="flex-1 p-3.5 overflow-y-auto space-y-3 bg-[#0b141a] relative flex flex-col justify-end">
                      {/* Timestamp Pill */}
                      <div className="flex justify-center my-1">
                        <span className="px-2.5 py-0.5 rounded-full bg-[#182229] text-[9px] text-slate-400 font-mono">
                          TODAY · 8:42 PM (AFTER OPD HOURS)
                        </span>
                      </div>

                      {/* Message 1 */}
                      {chatStep >= 1 && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          className="self-end max-w-[85%] bg-[#005c4b] text-white p-2.5 rounded-2xl rounded-tr-xs shadow-xs text-xs space-y-0.5"
                        >
                          <p className="leading-snug">
                            Do you have a consultation slot this Thursday?
                          </p>
                          <span className="text-[9px] text-emerald-200 block text-right font-mono">
                            8:42 PM ✓✓
                          </span>
                        </motion.div>
                      )}

                      {/* Message 2: Instant Reply */}
                      {chatStep >= 2 && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          className="self-start max-w-[88%] bg-[#202c33] text-slate-100 p-2.5 rounded-2xl rounded-tl-xs shadow-xs text-xs space-y-1 border border-slate-700/40"
                        >
                          <div className="flex items-center gap-1 text-[10px] text-[#0E9F8E] font-medium font-mono">
                            <Sparkles className="w-3 h-3 text-[#C8A24A]" />
                            <span>AI Concierge · Answered in 4s</span>
                          </div>
                          <p className="leading-snug text-slate-200">
                            Hello! Yes, the clinic has an OPD consultation slot at{' '}
                            <strong>4:30 PM this Thursday</strong>. May I reserve this slot for you?
                          </p>
                          <span className="text-[9px] text-slate-400 block text-right font-mono">
                            8:42 PM
                          </span>
                        </motion.div>
                      )}

                      {/* Message 3 */}
                      {chatStep >= 3 && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          className="self-end max-w-[85%] bg-[#005c4b] text-white p-2.5 rounded-2xl rounded-tr-xs shadow-xs text-xs space-y-0.5"
                        >
                          <p className="leading-snug">Yes please, my name is Vikram Patel.</p>
                          <span className="text-[9px] text-emerald-200 block text-right font-mono">
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
                            className="p-3 bg-gradient-to-r from-[#0E9F8E] to-[#0A7F72] text-white rounded-xl shadow-lg border border-emerald-400/40 space-y-1.5"
                          >
                            <div className="flex items-center gap-1.5 font-bold text-xs text-white">
                              <CheckCircle2 className="w-4 h-4 text-emerald-100 shrink-0" />
                              <span>Appointment Booked on Autopilot!</span>
                            </div>
                            <p className="text-[11px] text-emerald-50 leading-tight">
                              <strong>Vikram Patel</strong> · Consultation Confirmed (Thursday, 4:30
                              PM)
                            </p>
                            <div className="flex items-center justify-between text-[9px] text-emerald-100 pt-1 border-t border-emerald-400/30">
                              <span>Synced to Clinic Calendar</span>
                              <span className="font-mono">Demo Record</span>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Mock Input Bar */}
                    <div className="bg-[#1f2c34] p-2.5 flex items-center gap-2 border-t border-slate-700/50">
                      <div className="flex-1 bg-[#2a3942] rounded-full px-3 py-1.5 text-[11px] text-slate-400 flex items-center justify-between">
                        <span>{chatStep === 0 ? 'Type a message...' : 'Appointment confirmed ✓'}</span>
                        <MessageSquare className="w-3.5 h-3.5 text-slate-400" />
                      </div>
                      <div className="w-7 h-7 rounded-full bg-[#0E9F8E] flex items-center justify-center text-white">
                        <Send className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Modal Dialog for Hero Form Trigger */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 my-8"
            >
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
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
