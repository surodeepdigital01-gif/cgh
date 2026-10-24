import { SpecialtyInfo } from '../types/index.ts';

export const SPECIALTIES: SpecialtyInfo[] = [
  {
    key: 'ivf-fertility',
    slug: 'ivf-fertility',
    name: 'IVF & Fertility Clinics',
    shortName: 'IVF & Fertility',
    tagline: 'Empathetic, discreet patient intake and long-journey consultation workflows.',
    hubDescription: 'Empathetic, private enquiry handling, consultation booking and follow-up across a long patient journey.',
    heroSummary: 'Built for fertility clinics requiring confidential enquiry handling, compassionate patient qualification, and structured consultation booking across an emotionally sensitive journey.',
    typicalAvgTicket: 125000,
    typicalMonthlyPatients: 40,
    painPoints: [
      {
        title: 'Long Consideration & Patient Hesitation',
        description: 'Couples deliberate for months before scheduling an initial consultation. When early inquiries receive robotic or impersonal replies, prospective patients disengage quietly.',
      },
      {
        title: 'Privacy Concerns on Standard Phone Calls',
        description: 'Many patients cannot comfortably discuss sensitive fertility questions during workday phone calls at an office desk or in shared living spaces.',
      },
      {
        title: 'Enquiry Drop-Off Across Multi-Stage Timelines',
        description: 'Without automated, respectful check-ins between diagnostic testing, semen analysis, and initial protocol consultations, clinics lose touch with prospective parents.',
      },
    ],
    systemElements: [
      {
        title: 'Website',
        description: 'Built for patient reassurance, doctor credentials, and confidential consultation requests.',
        detail: 'Clear explanations of IUI, IVF, ICSI, and fertility preservation with zero intimidating clinical jargon, prominent privacy disclosures, and discreet appointment request paths.',
      },
      {
        title: 'WhatsApp Automation',
        description: 'Private 24/7 messaging concierge designed around patient comfort.',
        detail: 'Automated, non-judgmental guidance that answers clinic hours, diagnostic testing FAQs, and appointment slots without requiring callers to disclose sensitive medical details publicly.',
      },
      {
        title: '24/7 AI Call Receptionist',
        description: 'Polite bilingual voice assistance fluent in English, Hindi, and Bengali.',
        detail: 'Discreetly handles secondary clinic lines during busy OPD hours, answers doctor consulting times, and immediately sends a confidential WhatsApp booking link to the caller.',
      },
      {
        title: 'Social Media',
        description: 'Doctor-led educational video scripts answering fertility myths with dignity.',
        detail: 'Clear, ethical guidance focusing on fertility preservation, timeline expectations, and reproductive health science, adhering strictly to NMC compliance.',
      },
      {
        title: 'CRM & Patient Journey Management',
        description: 'Structured follow-ups tailored to long consideration cycles.',
        detail: 'Tracks enquiry milestones, consultation attendance, and follow-up reminders so front-desk teams maintain compassionate contact without manual spreadsheet tracking.',
      },
    ],
    journeySteps: [
      {
        step: 'Step 01',
        title: 'Discreet First Enquiry',
        description: 'Prospective couple reaches out via private WhatsApp or the clinic website after researching specialists.',
      },
      {
        step: 'Step 02',
        title: 'Confidential Triage',
        description: 'Automated assistant shares consulting hours, doctor credentials, and pre-consultation checklist items in private chat.',
      },
      {
        step: 'Step 03',
        title: 'Consultation Confirmation',
        description: 'The preferred consultation slot is scheduled with calendar invite, location map, and discreet clinic entry details.',
      },
      {
        step: 'Step 04',
        title: 'Attended Visit & Care Coordination',
        description: 'Clinic front desk welcomes the couple; post-visit diagnostics and follow-up consultation reminders sync automatically.',
      },
    ],
    faqs: [
      {
        q: 'How does the system ensure patient privacy for sensitive fertility enquiries?',
        a: 'All digital interactions adhere strictly to India’s Digital Personal Data Protection (DPDP) Act 2023. Inquiries are handled over official Meta Cloud APIs without storing medical charts or diagnostic test results. The clinic permanently owns all communication records.',
      },
      {
        q: 'Does the system replace our clinic fertility counselors?',
        a: 'No. The system is built for front-of-house intake and appointment scheduling. It removes front-desk friction so prospective parents can connect directly with your qualified counselors and fertility specialists faster.',
      },
      {
        q: 'How does bilingual call assistance help prospective patients?',
        a: 'Many patients prefer speaking in their regional language when discussing sensitive appointments. The AI call receptionist greets callers naturally in English, Hindi, or Bengali, eliminating language barriers during initial booking.',
      },
    ],
  },
  {
    key: 'dental',
    slug: 'dental',
    name: 'Dental Clinics & Chains',
    shortName: 'Dental Clinics & Chains',
    tagline: 'Appointment booking, treatment-plan follow-ups, recall reminders, and branch-wise routing.',
    hubDescription: 'Appointment booking, treatment-plan follow-ups and recall reminders, with branch-wise routing for chains.',
    heroSummary: 'Built for solo practices and multi-chair dental chains needing instant appointment booking, high-value treatment plan follow-ups, and automated 6-month hygiene recalls.',
    typicalAvgTicket: 4500,
    typicalMonthlyPatients: 280,
    painPoints: [
      {
        title: 'Unconfirmed Hygiene & Recall Reminders',
        description: 'Existing patients delay routine 6-month cleaning, scaling, and periodic checkups when clinics rely on manual phone calls that go to voicemail.',
      },
      {
        title: 'Lost High-Value Implant & Aligner Enquiries',
        description: 'Prospective patients inquiring about clear aligners or full-mouth dental implants require prompt answers on procedure stages. Slow front-desk replies send them to franchise chains.',
      },
      {
        title: 'Multi-Branch Routing Bottlenecks',
        description: 'Chains with 2 or more locations struggle when phone inquiries for Branch A ring at Branch B, creating confusion over chair availability and consulting specialists.',
      },
    ],
    systemElements: [
      {
        title: 'Website',
        description: 'Modern, high-speed dental web infrastructure with clear chairside visuals.',
        detail: 'Procedure guides for preventive dentistry, clear aligners, restorative implants, and pediatric care with 1-tap WhatsApp consultation scheduling and branch selectors.',
      },
      {
        title: 'WhatsApp Automation',
        description: '24/7 automated chair booking and recall reminders.',
        detail: 'Instant slot booking, automated pre-visit instructions (e.g., fasting for conscious sedation), and structured 6-month hygiene recall sequences.',
      },
      {
        title: '24/7 AI Call Receptionist',
        description: 'Answers busy lines during dental procedures and after hours.',
        detail: 'Handles patient calls during active procedures when reception is sterilizing or billing, answering chair hours and dispatching instant booking links in English, Hindi, and Bengali.',
      },
      {
        title: 'Social Media',
        description: 'Doctor-led oral health education and case overviews.',
        detail: 'Clean, educational videos explaining aligner wear time, implant longevity, and preventive oral health care adhering strictly to dental ethics.',
      },
      {
        title: 'CRM & Branch Routing',
        description: 'Intelligent multi-branch chair and doctor calendar synchronization.',
        detail: 'Directs incoming patients to their nearest clinic location and consulting dentist while logging appointment statuses to prevent double-booking.',
      },
    ],
    journeySteps: [
      {
        step: 'Step 01',
        title: 'Inquiry or Recall Trigger',
        description: 'A new patient searches for an implant consultation or an existing patient receives their automated 6-month checkup reminder.',
      },
      {
        step: 'Step 02',
        title: 'Branch & Treatment Selection',
        description: 'WhatsApp concierge guides the patient to choose their preferred branch, doctor, and treatment category.',
      },
      {
        step: 'Step 03',
        title: 'Chair Slot Confirmed',
        description: 'The appointment is booked on the clinic calendar with pre-visit intake details and automated Google Maps directions.',
      },
      {
        step: 'Step 04',
        title: 'Attended Treatment & Recall Loop',
        description: 'The patient attends their consultation; post-procedure instructions and future recall reminders are scheduled automatically.',
      },
    ],
    faqs: [
      {
        q: 'Can this route patients to different branches in our dental chain?',
        a: 'Yes. The system is built with branch-wise routing. Inquiries on WhatsApp or phone can easily direct patients to their nearest clinic location based on pin code or patient choice.',
      },
      {
        q: 'How does the system help with high-ticket treatments like aligners and implants?',
        a: 'High-ticket dental treatments require structured reassurance. The system delivers instant procedure overviews, doctor credentials, and consultation booking paths within seconds of patient contact.',
      },
      {
        q: 'Does it work alongside our dental clinic management software?',
        a: 'Yes. Our system operates on the front end of patient discovery and front-desk communication, passing confirmed bookings and caller details directly into your front desk’s workflow.',
      },
    ],
  },
  {
    key: 'orthopaedic-physiotherapy',
    slug: 'orthopaedic-physiotherapy',
    name: 'Orthopaedic & Physiotherapy Clinics',
    shortName: 'Orthopaedic & Physiotherapy',
    tagline: 'Booking for joint, spine and sports injury consults with physiotherapy session care-plans.',
    hubDescription: 'Booking for joint, spine and sports-injury consultations, plus physiotherapy session reminders and care-plan follow-ups.',
    heroSummary: 'Built for orthopaedic surgeons, sports medicine doctors, and physiotherapy centers requiring fast acute-injury consultation booking and sustained session compliance.',
    typicalAvgTicket: 3200,
    typicalMonthlyPatients: 260,
    painPoints: [
      {
        title: 'Patient Drop-Out Between Consult and Therapy',
        description: 'Patients often attend the initial orthopaedic consultation but drop out before completing their prescribed 5-to-10 physiotherapy sessions as acute pain subsides.',
      },
      {
        title: 'Unanswered Calls for Acute Joint & Sports Injuries',
        description: 'Patients suffering acute sprains, back spasms, or joint locks call during evening hours or weekends. A missed call causes them to visit a general hospital emergency room.',
      },
      {
        title: 'Unstructured Care-Plan Adherence Follow-Ups',
        description: 'Front-desk teams lack the bandwidth to manually remind rehabilitation patients of upcoming exercise milestones and post-consultation reviews.',
      },
    ],
    systemElements: [
      {
        title: 'Website',
        description: 'Clear joint, spine, and sports medicine clinical service pathways.',
        detail: 'Dedicated sections for knee arthroscopy, joint replacement counseling, spine rehab, and sports recovery with verified surgeon credentials and 1-tap OPD booking.',
      },
      {
        title: 'WhatsApp Automation',
        description: 'Session scheduling and automated rehab adherence loops.',
        detail: 'Automated appointment reminders for physiotherapy sessions, doctor consultation scheduling, and pre-consultation X-ray/MRI preparation guidelines.',
      },
      {
        title: '24/7 AI Call Receptionist',
        description: 'Polite bilingual emergency and OPD phone triage.',
        detail: 'Answers secondary clinic lines when staff are occupied with traction or electrotherapy sessions, providing consulting hours and sending booking links immediately.',
      },
      {
        title: 'Social Media',
        description: 'Doctor-led posture, mobility, and joint health educational scripts.',
        detail: 'Educational video reels explaining ergonomic workplace habits, recovery timelines, and joint care facts adhering strictly to medical guidelines.',
      },
      {
        title: 'CRM & Care-Plan Follow-Up',
        description: 'Tracks full patient rehabilitation courses from Day 1 to recovery.',
        detail: 'Monitors session attendance, flags skipped physiotherapy appointments, and sends structured follow-up prompts to protect treatment outcomes.',
      },
    ],
    journeySteps: [
      {
        step: 'Step 01',
        title: 'Acute or Chronic Inquiry',
        description: 'Patient in discomfort calls or sends an enquiry regarding joint, back, or sports pain.',
      },
      {
        step: 'Step 02',
        title: 'Consultation Scheduling',
        description: 'Automated triage registers the condition category, shares doctor OPD timings, and confirms a consultation slot.',
      },
      {
        step: 'Step 03',
        title: 'Clinical Evaluation',
        description: 'Patient attends consultation with the orthopaedic specialist; a rehabilitation therapy plan is prescribed.',
      },
      {
        step: 'Step 04',
        title: 'Session Reminders & Follow-Up',
        description: 'Automated WhatsApp reminders maintain adherence across all physiotherapy sessions until complete discharge.',
      },
    ],
    faqs: [
      {
        q: 'How does the system help improve physiotherapy course completion?',
        a: 'The system uses automated WhatsApp reminder loops that notify patients before each therapy session, making rescheduling frictionless and reducing drop-out before care plans are completed.',
      },
      {
        q: 'Can the system handle both surgical consultations and physiotherapy bookings?',
        a: 'Yes. The system is built with distinct pathways for specialist surgical OPD consultations (knee, hip, spine) and ongoing rehabilitation physiotherapy appointments.',
      },
      {
        q: 'How does it respond when patients call with urgent pain outside OPD hours?',
        a: 'The 24/7 AI call receptionist answers immediately, provides next-day consulting hours, and dispatches a prioritized booking link via WhatsApp so the patient is secured before visiting an unrelated ER.',
      },
    ],
  },
  {
    key: 'dermatology',
    slug: 'dermatology',
    name: 'Dermatology Clinics (skin and hair)',
    shortName: 'Dermatology (skin and hair)',
    tagline: 'Instant WhatsApp triage for skin and hair enquiries, pre-consultation intake and follow-up.',
    hubDescription: 'Instant WhatsApp triage for skin and hair enquiries, pre-consultation intake and follow-up for hair restoration and treatment plans.',
    heroSummary: 'Built for dermatology and aesthetic skin/hair practices requiring rapid enquiry triage, distinct skin versus hair restoration pathways, and high-converting consultation booking.',
    typicalAvgTicket: 4200,
    typicalMonthlyPatients: 240,
    painPoints: [
      {
        title: 'Skin Triage Mixed Up with Hair Restoration Enquiries',
        description: 'Clinics receive routine acne questions alongside high-consideration hair transplant and PRP inquiries in one unorganized front-desk inbox, causing delayed replies.',
      },
      {
        title: 'Slow WhatsApp Replies During Busy Laser Procedures',
        description: 'When the front desk is busy assisting the doctor or billing procedures, prospective patients asking for slot availability wait hours and book at competing aesthetic centers.',
      },
      {
        title: 'Lack of Structured Pre-Consultation Intake',
        description: 'Doctors spend valuable consultation minutes asking basic history questions that could have been collected cleanly before the patient arrived.',
      },
    ],
    systemElements: [
      {
        title: 'Website',
        description: 'Sub-second mobile experience showcasing clinical skin and hair pathways.',
        detail: 'Clear, ethical procedure explanations for acne scar revision, pigmentation, anti-aging therapies, and FUE hair restoration with doctor credentials and 1-tap booking.',
      },
      {
        title: 'WhatsApp Automation',
        description: 'Instant triage separating skin and hair restoration inquiries.',
        detail: 'Routes clinical dermatology inquiries to OPD booking and hair loss inquiries to structured diagnostic consultation pathways in under 15 seconds.',
      },
      {
        title: '24/7 AI Call Receptionist',
        description: 'Polite bilingual voice receptionist in English, Hindi, and Bengali.',
        detail: 'Answers secondary clinic phone lines during active laser treatments and after-hours, ensuring zero busy tones and dispatching instant booking links.',
      },
      {
        title: 'Social Media',
        description: 'Doctor authority video scriptwriting and educational carousels.',
        detail: 'Curated myth-busting content on skin barrier health, hair loss prevention, and aesthetic procedure facts adhering strictly to NMC ethical guidelines.',
      },
      {
        title: 'CRM & Treatment Plan Reminders',
        description: 'Automated follow-up workflows for multi-session procedures.',
        detail: 'Tracks treatment session schedules for chemical peels, laser sittings, and post-procedure check-ins to prevent patient drop-off.',
      },
    ],
    journeySteps: [
      {
        step: 'Step 01',
        title: 'Inquiry Discovery',
        description: 'Patient discovers clinic on local search or social media and taps the WhatsApp booking trigger.',
      },
      {
        step: 'Step 02',
        title: 'Intelligent Triage',
        description: 'Automated concierge categorizes whether the patient needs skin consultation or hair restoration guidance.',
      },
      {
        step: 'Step 03',
        title: 'Slot Confirmation',
        description: 'Consultation slot is selected with doctor timings, clinic address, and pre-care guidelines sent to the patient.',
      },
      {
        step: 'Step 04',
        title: 'Attended Consultation & Plan Follow-Up',
        description: 'Patient attends consultation; follow-up reminder sequences ensure adherence to prescribed treatment sessions.',
      },
    ],
    faqs: [
      {
        q: 'How does the system separate skin enquiries from hair restoration?',
        a: 'The WhatsApp concierge immediately asks the patient if their inquiry relates to skin concerns (acne, pigmentation, lasers) or hair concerns (hair thinning, PRP, transplant), channeling them into tailored consultation funnels.',
      },
      {
        q: 'Does this comply with NMC advertising guidelines for dermatologists?',
        a: 'Yes, 100%. We adhere strictly to National Medical Commission ethics. We never generate misleading claims, unverified testimonials, or exaggerated clinical cures.',
      },
      {
        q: 'Can the system collect pre-consultation details from the patient?',
        a: 'Yes. The automated assistant can share a lightweight, compliant intake form where patients note their primary concern and duration before visiting the clinic.',
      },
    ],
  },
  {
    key: 'eye-care',
    slug: 'eye-care',
    name: 'Eye Care & Ophthalmology Clinics',
    shortName: 'Eye Care & Ophthalmology',
    tagline: 'LASIK and cataract enquiry qualification, screening bookings and post-procedure follow-ups.',
    hubDescription: 'LASIK and cataract enquiry qualification, screening bookings and post-procedure follow-ups.',
    heroSummary: 'Built for eye hospitals and ophthalmology practices requiring structured LASIK candidacy qualification, cataract evaluation booking, and post-procedure checkup reminders.',
    typicalAvgTicket: 18000,
    typicalMonthlyPatients: 210,
    painPoints: [
      {
        title: 'LASIK Price-Shoppers Who Never Book a Suitability Test',
        description: 'Young patients inquire casually about LASIK costs across multiple clinics and drop off without understanding that corneal suitability must be tested first.',
      },
      {
        title: 'Cataract Inquiries Coordinated by Family Members',
        description: 'Elderly patients often have consultations booked by adult children who need clear scheduling, hospital timing flexibility, and bilingual reassurance.',
      },
      {
        title: 'Post-Procedure Follow-Up Gaps',
        description: 'Patients recovering from minor eye procedures or laser corrections miss their Day 1 or Day 7 follow-up checkups when reminders are handled manually.',
      },
    ],
    systemElements: [
      {
        title: 'Website',
        description: 'Accessible, high-contrast web infrastructure designed for eye care patients.',
        detail: 'Clear, readable typography with structured pathways for LASIK suitability, cataract surgery options, glaucoma screening, and pediatric ophthalmology.',
      },
      {
        title: 'WhatsApp Automation',
        description: 'Instant candidacy screening and evaluation booking.',
        detail: 'Interactive 3-question LASIK qualification flow that guides patients to schedule a diagnostic corneal evaluation instead of merely shopping on price.',
      },
      {
        title: '24/7 AI Call Receptionist',
        description: 'Calm bilingual assistance in English, Hindi, and Bengali.',
        detail: 'Politely answers incoming patient and family calls during busy surgical OT days, answering surgeon consultation hours and sending booking links immediately.',
      },
      {
        title: 'Social Media',
        description: 'Surgeon-led video scripts addressing common eye care concerns.',
        detail: 'Educational content explaining blade-free laser vision correction, modern cataract lens options, and digital eye strain science in an ethical format.',
      },
      {
        title: 'CRM & Surgical Follow-Up',
        description: 'Automated post-procedure checkup and drop adherence reminders.',
        detail: 'Dispatches automated Day 1, Day 7, and Day 30 review reminders to ensure post-surgical compliance and positive patient recovery.',
      },
    ],
    journeySteps: [
      {
        step: 'Step 01',
        title: 'Procedure Inquiry',
        description: 'Patient or family member reaches out regarding LASIK or cataract evaluation options.',
      },
      {
        step: 'Step 02',
        title: 'Qualification & Suitability',
        description: 'Automated assistant explains the need for a comprehensive diagnostic screening and provides slot choices.',
      },
      {
        step: 'Step 03',
        title: 'Screening Booked',
        description: 'Consultation slot is reserved on the clinic calendar with pre-test guidelines (e.g. discontinuing contact lenses before screening).',
      },
      {
        step: 'Step 04',
        title: 'Attended Evaluation & Post-Care',
        description: 'Patient undergoes corneal or cataract evaluation; surgical counseling and follow-up reviews are tracked cleanly.',
      },
    ],
    faqs: [
      {
        q: 'How does the system help convert LASIK price-shoppers into booked consultations?',
        a: 'Instead of engaging in a low-margin price war, our system educates the patient on why corneal thickness and eye geometry determine suitability, guiding them directly into a booked diagnostic evaluation.',
      },
      {
        q: 'Can family members book appointments for elderly cataract patients?',
        a: 'Yes. The booking flow explicitly allows a family member to input patient details and receive all appointment times, clinic directions, and preparation notes via WhatsApp.',
      },
      {
        q: 'Does it support post-procedure checkup reminders?',
        a: 'Yes. The system automatically schedules Day 1, Day 7, and Day 30 reminder messages on WhatsApp to ensure patients attend post-procedure reviews.',
      },
    ],
  },
];
