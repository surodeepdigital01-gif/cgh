import { ServiceItem, SpecialtyInfo } from '../types/index.ts';

export const CLINIC_SERVICES: ServiceItem[] = [
  {
    id: 'clinic-website',
    number: '01',
    title: 'High-Converting Clinic Website',
    shortDesc: 'Mobile-first, lightning-fast web infrastructure engineered for patient trust and immediate appointment booking.',
    longDesc: 'Most healthcare websites read like medical textbooks with slow loading speeds and hidden phone numbers. We design and engineer modern clinic web systems with verified doctor bios, clear treatment explanations, procedure pricing indicators, and direct 1-tap WhatsApp and appointment booking.',
    deliverables: [
      'Sub-second mobile loading speed with mobile-first layout',
      'Specialty-specific treatment landing pages with verified clinical credentials',
      '1-tap appointment booking widget and verified WhatsApp trigger',
      'Local SEO foundation with Google Business Profile synchronization',
      'Compliant medical copywriting adhering to National Medical Commission ethics'
    ],
    impactMetric: 'Eliminates bounce rates on patient mobile traffic',
    howItWorks: 'Built specifically for high-intent patients searching in your city who need immediate confidence in your doctor credentials.'
  },
  {
    id: 'whatsapp-chatbot',
    number: '02',
    title: 'WhatsApp Clinic Concierge',
    shortDesc: 'Instant 24/7 automated replies, verified clinic FAQ triage, appointment slot selection, and warm lead capture.',
    longDesc: 'Indian patients default to WhatsApp for everything—pricing inquiries, clinic location, doctor availability, and pre-consultation questions. When inquiries sit unreplied for 2 hours, patients book elsewhere. Our official WhatsApp Business automation responds in under 15 seconds, pre-qualifies the patient, and schedules the visit.',
    deliverables: [
      'Official Meta WhatsApp Business Cloud API setup & green badge readiness',
      'Automated instant responses (<15 seconds) 24 hours a day, 7 days a week',
      'Pre-consultation triage: specialty needed, symptoms, preferred doctor slot',
      'Automated appointment reminder flows to curb clinic no-shows',
      'Front-desk escalation: smoothly hands off complex inquiries to your staff'
    ],
    impactMetric: 'Responds in <15 seconds even during peak OT hours',
    howItWorks: 'Integrates with your clinic WhatsApp number to handle routine patient questions and capture bookings while your front desk is busy.'
  },
  {
    id: 'ai-call-assistant',
    number: '03',
    title: '24/7 AI Front-Desk Call Assistant',
    shortDesc: 'Never miss another patient call during busy clinic hours, lunch breaks, surgical procedures, or late nights.',
    longDesc: 'During active consultation hours, receptionists are busy billing, welcoming walk-ins, and checking vitals. Phone lines ring out. Our voice-enabled call assistant answers incoming and missed calls with a polite, professional human-like tone, answers clinic timings, sends booking links via WhatsApp, and logs details in your dashboard.',
    deliverables: [
      'Zero ring-outs: answers secondary and busy phone lines instantly',
      'Polite bilingual clinic greeting tailored to Indian healthcare patients',
      'Instant missed-call SMS & WhatsApp rescue link sent within 10 seconds',
      'Captures patient name, condition category, and callback preference',
      'Complete call recording and timestamped summary dashboard for reception staff'
    ],
    impactMetric: 'Zero missed calls during OPD and after-hours',
    howItWorks: 'Pairs with your existing clinic telephone or virtual PBX. When your desk is engaged, the assistant steps in without letting the caller hang up.'
  },
  {
    id: 'social-media-growth',
    number: '04',
    title: 'Organic Doctor Authority & Social Growth',
    shortDesc: 'Doctor-led educational video reels, patient myth-busting carousels, and local community positioning.',
    longDesc: 'Patients do not want generic stock graphics. They want to see the doctor explaining treatments clearly with dignity and empathy. We script, edit, and curate short-form video reels and educational carousels that establish your clinic as the most trusted authority in your geographic territory.',
    deliverables: [
      'Done-for-you monthly script decks tailored to your specialty and clinical voice',
      'High-retention editing of doctor videos optimized for Instagram and YouTube Shorts',
      'Educational myth-busting carousels on common patient questions and procedures',
      'Google Business Profile post updates and local patient updates',
      'Strict compliance with Indian medical ethics (no misleading guarantees or clinical claims)'
    ],
    impactMetric: 'Organic local authority and patient referral growth',
    howItWorks: 'You record short 30-to-60-second video clips following our pre-written prompts; our healthcare editing team handles all production and publishing.'
  },
  {
    id: 'growth-strategy',
    number: '05',
    title: 'Clinic Positioning & Patient Acquisition Strategy',
    shortDesc: 'Targeted local patient acquisition funnels focused on high-intent treatments in your local catchment area.',
    longDesc: 'General awareness does not fill consultation calendars. We build targeted patient acquisition pathways focused on specific high-consideration procedures—such as clear aligners, IVF consultation, joint rehabilitation, dermatology procedures, or cataract evaluation—targeting patients searching in your city.',
    deliverables: [
      'Geographic catchment analysis (10–15 km patient radius mapping)',
      'High-intent treatment packaging with clear consultation pathway',
      'Local search engine ranking optimization for "near me" clinical searches',
      'Competitor clinic gap analysis and distinct positioning strategy',
      'Front-desk telephone training script for handling high-intent patient inquiries'
    ],
    impactMetric: 'Higher average revenue per booked consultation',
    howItWorks: 'We align your clinic presence with the exact treatments that yield highest clinical satisfaction and healthy revenue margins.'
  },
  {
    id: 'performance-reporting',
    number: '06',
    title: 'Monthly Performance Reports & Strategy Review',
    shortDesc: 'Transparent patient acquisition analytics, call recovery breakdowns, and monthly doctor strategy meetings.',
    longDesc: 'No confusing vanity metrics or technical agency jargon. We present verified business and operational data: how many patient inquiries arrived, how many missed calls were recovered, which treatments drove interest, and what we are optimizing for the following month.',
    deliverables: [
      'Monthly executive report: total patient inquiries, calls rescued, bookings logged',
      'Front-desk response velocity analysis and patient drop-off insights',
      '30-minute monthly strategy Zoom review directly with clinic directors',
      'Continuous refinement of WhatsApp chatbot conversation flows',
      'Quarterly patient acquisition roadmap adjustment'
    ],
    impactMetric: '100% transparent reporting tied to real clinic visits',
    howItWorks: 'Every month you review exact numbers with your dedicated growth strategist to ensure your clinic investment stays on track.'
  }
];

import { SPECIALTIES } from './specialtiesData.ts';

export const SPECIALTIES_DATA: SpecialtyInfo[] = SPECIALTIES;
export { SPECIALTIES };

export const TIMELINE_STEPS = [
  {
    step: 'Phase 1',
    timeframe: 'Month 1',
    title: 'Clinic Audit & Infrastructure Build',
    description: 'We audit your current patient journey, identify call leakages, set up official WhatsApp Business API, and design your high-converting website foundation.',
    deliverables: ['Patient leakage audit', 'WhatsApp API registration', 'Copywriting & doctor positioning', 'Clinic workflow integration']
  },
  {
    step: 'Phase 2',
    timeframe: 'Month 2',
    title: 'AI Call Assistant & Automation Launch',
    description: 'We deploy the 24/7 AI call assistant, test front-desk handoff protocols, and launch the conversion-optimized clinic website with 1-tap WhatsApp booking.',
    deliverables: ['AI phone assistant activation', 'WhatsApp triage automation live', 'Website launch with local SEO', 'Front-desk staff training']
  },
  {
    step: 'Phase 3',
    timeframe: 'Months 3 – 4',
    title: 'Patient Acquisition & Doctor Authority',
    description: 'We roll out local patient acquisition campaigns and organic educational video content highlighting your treatments and doctor expertise.',
    deliverables: ['Targeted treatment campaigns', 'Doctor video scripts & edited reels', 'Google Maps ranking optimization', 'Weekly appointment monitoring']
  },
  {
    step: 'Phase 4',
    timeframe: 'Months 5 – 6',
    title: 'Compounding Growth & Investment Recovery',
    description: 'Continuous conversion optimization, automated patient recall workflows, and performance reviews to ensure full investment recovery within 6 months.',
    deliverables: ['Monthly executive review calls', 'Patient recall automation', 'Conversion rate optimization', 'Transition to maintenance plan']
  }
];

import { siteConfig } from '../config/siteConfig.ts';

export const FAQS = siteConfig.faqs;

export const PLACEHOLDERS_LIST = [
  { key: 'Phone: +91 7863977647 / +91 8293471447', description: 'Configured and active for client calls across India' },
  { key: 'WhatsApp: +91 8293471447', description: 'Configured and active for 24/7 instant chat and booking support' },
  { key: 'Email: hello@clinicgrowthhelpers.com', description: 'Official agency contact email configured across all pages' },
  { key: 'Office: Sector V, Kolkata, West Bengal', description: 'Registered operational headquarters configured' },
  { key: '[Client result coming soon]', description: 'Verified clinic case study and real patient acquisition metrics to be added upon completion of partner engagements' },
  { key: 'Founder: Surodeep Oraon (Configured)', description: 'Founder profile, photo, leadership bio and direct clinic working model configured in siteConfig.ts' },
  { key: 'Team: 5-Member Operations (Configured)', description: 'In-house healthcare web engineering, WhatsApp automation and support team configured' }
];
