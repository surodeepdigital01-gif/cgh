import React from 'react';
import { motion, type Variants } from 'motion/react';
import {
  Globe,
  MessageCircle,
  PhoneCall,
  Video,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { useRouter } from '../router/Router.tsx';

/**
 * EDITABLE CONTENT OBJECT FOR THE SERVICES / PILLARS SECTION
 * Modify any copy, badges, checklists, or titles directly here.
 */
export interface PillarItem {
  id: string;
  number: string;
  label: string;
  title: string;
  badge: string;
  description: string;
  features: string[];
  isFeatured?: boolean;
  isNew?: boolean;
}

export const SERVICES_CONTENT = {
  sectionTitle: 'The Clinic Growth System',
  sectionSubtitle:
    'Five connected growth engines that capture, reassure, book and retain patients, around the clock, without adding workload to your staff.',
  tag: 'The Unified Solution',
  closingStrip: {
    title: 'The Doctor Never Touches Any Software',
    description:
      'Our engineering team integrates the complete system with your phone numbers and Google accounts. You only see confirmed consultations.',
    buttonText: 'Book Free Growth Audit',
  },
  pillars: [
    {
      id: 'authority-website',
      number: '01',
      label: 'PILLAR 01',
      title: 'Authority Website',
      badge: 'Fast mobile load',
      description:
        'A luxury, mobile-first web presence engineered for doctor authority. Verified clinical credentials, transparent procedure guidance, before/after showcases (with consent, within NMC rules), and 1-tap WhatsApp and online appointment booking.',
      features: [
        'Fast mobile load speed on Indian 4G/5G networks',
        'Specialty-specific clinical consultation pathways',
        'Verified doctor bio, clinical degrees and ethical treatment disclosures',
        'Google Business Profile and local Map Pack optimisation',
      ],
    },
    {
      id: 'instant-whatsapp',
      number: '02',
      label: 'PILLAR 02',
      title: 'Instant WhatsApp Concierge',
      badge: 'Instant replies, 24/7',
      description:
        'Official Meta WhatsApp Business Cloud API concierge operating 24 hours a day, 7 days a week. Answers clinic timings, sends pre-consultation guidelines, schedules doctor slots, and reduces no-shows with automated reminders.',
      features: [
        'Instant automated response around the clock',
        'Specialty-specific condition triage with hot, warm and cold lead labels',
        'Appointment booking synced directly to reception',
        'Pre-procedure prep notes and post-op follow-ups',
        'Follow-up sequences on day 1, 3, 7 and 30',
      ],
    },
    {
      id: 'ai-voice-receptionist',
      number: '03',
      label: 'PILLAR 03',
      title: '24/7 AI Voice Receptionist',
      badge: 'English - Hindi - Bengali',
      description:
        'Never lose a patient to a busy phone line. A voice-enabled front-desk AI answers calls, gives consultation hours, and sends an SMS and WhatsApp booking link to the caller.',
      features: [
        'Answers multiple simultaneous calls, so no busy tones',
        'Natural Indian bilingual accent (English, Hindi, Bengali)',
        'Instant SMS/WhatsApp booking link sent to the caller',
        'Missed-call text-back and emergency forwarding to the doctor',
        'Dashboard with call recordings, summaries and call logs',
      ],
    },
    {
      id: 'doctor-authority-studio',
      number: '04',
      label: 'PILLAR 04',
      title: 'Doctor Authority Studio',
      badge: 'Done-for-you content',
      description:
        'Patients book doctors they trust. We research, script and edit educational video reels and myth-busting carousels that show your clinical expertise.',
      features: [
        'Monthly script decks written in your clinical voice',
        'Reel editing with captions and medical B-roll',
        'Ethical, dignity-first patient education, following NMC guidelines',
        'Organic local growth and high-intent inbound enquiries',
      ],
    },
    {
      id: 'patient-acquisition-engine',
      number: '05',
      label: 'PILLAR 05',
      title: 'Patient Acquisition and Revenue Engine',
      badge: 'Ads, tracking, retention',
      description:
        'The engine that brings patients in and shows you the revenue.',
      features: [
        'Google Search and Meta ads management',
        'Local SEO and treatment landing pages',
        'Lead CRM, call and form tracking',
        'Revenue dashboard: enquiries, bookings, attended visits and cost per patient, by source',
        'Patient reactivation, review and reputation system, recall automation',
      ],
      isFeatured: true,
      isNew: true,
    },
  ] as PillarItem[],
};

const pillarEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const pillarRevealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: (index: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: index * 0.1,
      ease: pillarEase,
    },
  }),
};

export const SolutionSection: React.FC = () => {
  const { navigate } = useRouter();

  const getPillarIcon = (id: string) => {
    switch (id) {
      case 'authority-website':
        return <Globe className="w-5 h-5 text-[#14B8A6]" />;
      case 'instant-whatsapp':
        return <MessageCircle className="w-5 h-5 text-[#14B8A6]" />;
      case 'ai-voice-receptionist':
        return <PhoneCall className="w-5 h-5 text-[#14B8A6]" />;
      case 'doctor-authority-studio':
        return <Video className="w-5 h-5 text-[#14B8A6]" />;
      case 'patient-acquisition-engine':
      default:
        return <BarChart3 className="w-5 h-5 text-[#14B8A6]" />;
    }
  };

  const row1Pillars = SERVICES_CONTENT.pillars.slice(0, 3);
  const row2Pillars = SERVICES_CONTENT.pillars.slice(3, 5);

  const renderPillarCard = (pillar: PillarItem, rowLocalIndex: number) => {
    const isFeatured = pillar.isFeatured;

    return (
      <motion.div
        key={pillar.id}
        variants={pillarRevealVariants}
        custom={rowLocalIndex}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15, margin: '0px 0px -48px 0px' }}
        className="h-full flex-1"
      >
        <motion.div
          whileHover={{
            y: -6,
            transition: { duration: 0.22, ease: pillarEase },
          }}
          transition={{ duration: 0.22, ease: pillarEase }}
          className={`group relative bg-white rounded-3xl p-7 sm:p-8 flex flex-col justify-between h-full transition-shadow transition-colors duration-200 ${
            isFeatured
              ? 'border-2 border-[#14B8A6] shadow-[0_14px_38px_rgba(20,184,166,0.12)] hover:shadow-[0_18px_44px_rgba(20,184,166,0.18)]'
              : 'border border-[#0F2A4A]/10 shadow-[0_10px_30px_rgba(15,42,74,0.06)] hover:shadow-xl hover:border-[#14B8A6]/40'
          }`}
        >
        <div>
          {/* Card Top: Pillar Label, Icon, Key-Metric Badge & Featured New Tag */}
          <div className="flex flex-wrap items-center justify-between gap-2.5 sm:gap-3 mb-5">
            <div className="flex items-center gap-2.5">
              <motion.div
                whileHover={{ rotate: 8, scale: 1.05 }}
                className="w-10 h-10 rounded-xl bg-[#F6F1E9] border border-[#0F2A4A]/10 shadow-2xs flex items-center justify-center shrink-0"
              >
                {getPillarIcon(pillar.id)}
              </motion.div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-[#14B8A6] uppercase tracking-wider">
                  {pillar.label}
                </span>
                {pillar.isNew && (
                  <span className="px-2 py-0.5 rounded-full bg-[#14B8A6] text-[#0F2A4A] text-[10px] font-bold uppercase tracking-wider font-mono">
                    New
                  </span>
                )}
              </div>
            </div>

            <span className="px-3 py-1 rounded-full bg-[#14B8A6]/10 text-[#0F2A4A] text-xs font-semibold font-mono tracking-tight border border-[#14B8A6]/25 whitespace-nowrap">
              {pillar.badge}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0F2A4A] mb-3 group-hover:text-[#0F8F83] transition-colors leading-snug">
            {pillar.title}
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-sm text-[#0F2A4A]/70 leading-relaxed font-sans mb-5">
            {pillar.description}
          </p>

          {/* Checklist with check icons */}
          <ul className="space-y-2.5 my-6">
            {pillar.features.map((feat, fIdx) => (
              <li
                key={fIdx}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-[#0F2A4A]/90 leading-snug font-sans"
              >
                <CheckCircle2 className="w-4 h-4 text-[#14B8A6] shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Card Footer: 100% Done-For-You badge & Action Button */}
        <div className="mt-auto pt-5 border-t border-[#0F2A4A]/10 flex flex-col items-start sm:flex-row sm:items-center justify-between gap-3.5 sm:gap-3">
          <span className="inline-flex items-center text-xs font-medium text-[#0F2A4A]/60 font-mono bg-[#0F2A4A]/5 px-2.5 py-1 rounded-md border border-[#0F2A4A]/10">
            100% Done-For-You
          </span>
          <button
            type="button"
            onClick={() =>
              navigate('/contact', {
                notes: `Interested in ${pillar.label}: ${pillar.title}`,
              })
            }
            className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-1.5 px-5 py-2.5 bg-[#14B8A6] hover:bg-[#0F8F83] text-[#0F2A4A] text-sm sm:text-xs font-semibold rounded-xl transition-all shadow-2xs group/btn cursor-pointer"
          >
            <span>See This in Action</span>
            <ArrowRight className="w-4 h-4 sm:w-3.5 sm:h-3.5 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#F6F1E9] text-[#0F2A4A] relative">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: pillarEase }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#14B8A6]/10 text-xs font-semibold uppercase tracking-wider text-[#0F2A4A] border border-[#14B8A6]/20 mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#14B8A6]" />
            <span>{SERVICES_CONTENT.tag}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.08, ease: pillarEase }}
            className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0F2A4A] tracking-tight"
          >
            {SERVICES_CONTENT.sectionTitle}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.16, ease: pillarEase }}
            className="text-[#0F2A4A]/70 text-base sm:text-lg mt-3 leading-relaxed font-sans"
          >
            {SERVICES_CONTENT.sectionSubtitle}
          </motion.p>
        </div>

        {/* Row 1: Pillars 01 to 03 (3-column grid on desktop, 1-col on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8 items-stretch">
          {row1Pillars.map((pillar, idx) => renderPillarCard(pillar, idx))}
        </div>

        {/* Row 2: Pillars 04 & 05 (2-column layout on desktop: Pillar 04 col-span-5, Pillar 05 col-span-7) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          <div className="lg:col-span-5 flex flex-col">
            {renderPillarCard(row2Pillars[0], 0)}
          </div>
          <div className="lg:col-span-7 flex flex-col">
            {renderPillarCard(row2Pillars[1], 1)}
          </div>
        </div>

        {/* Global Closing Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: pillarEase }}
          className="mt-14 sm:mt-16 p-6 sm:p-10 rounded-3xl bg-[#0F2A4A] text-[#F6F1E9] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6 shadow-xl border border-[#F6F1E9]/10"
        >
          <div>
            <h4 className="text-xl sm:text-2xl font-serif font-bold text-[#F6F1E9]">
              {SERVICES_CONTENT.closingStrip.title}
            </h4>
            <p className="text-xs sm:text-sm text-[#F6F1E9]/80 mt-1.5 max-w-2xl leading-relaxed font-sans">
              {SERVICES_CONTENT.closingStrip.description}
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={() => navigate('/contact')}
            className="w-full sm:w-auto min-h-[44px] px-6 py-3 bg-[#14B8A6] hover:bg-[#0F8F83] text-[#0F2A4A] text-sm font-semibold rounded-xl shrink-0 transition-all cursor-pointer shadow-md inline-flex items-center justify-center gap-2"
          >
            <span>{SERVICES_CONTENT.closingStrip.buttonText}</span>
            <ArrowRight className="w-4 h-4 text-[#0F2A4A]" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

