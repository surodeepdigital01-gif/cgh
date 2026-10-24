/**
 * =============================================================================
 * CLINIC GROWTH HELPERS - MASTER CONFIGURATION & CONTENT FILE
 * =============================================================================
 * 
 * Non-developers: You can easily edit any text, pricing, phone numbers, or doctor
 * testimonials in this single file without touching HTML or React code.
 * All changes will automatically reflect across the entire website.
 */

export const siteConfig = {
  // Brand & Agency Information
  brand: {
    name: "Clinic Growth Helpers",
    tagline: "We help clinics get 50% more patients, online and on autopilot.",
    subheadline:
      "A complete, done-for-you patient acquisition system for modern IVF, dental, orthopaedic, dermatology and eye care clinics. We deploy your high-converting website, WhatsApp booking concierge, 24/7 AI call receptionist, and doctor authority content — so you focus 100% on patient care.",
    ctaPrimary: "Book Free Growth Audit",
    ctaSecondary: "See How It Works",
    phone: "+91 7863977647 / +91 8293471447",
    phoneNumbers: ["+91 7863977647", "+91 8293471447"],
    phoneRaw: ["917863977647", "918293471447"],
    whatsapp: "+91 8293471447",
    whatsappRaw: "918293471447",
    email: "hello@clinicgrowthhelpers.com",
    office: "Sector V, Kolkata, West Bengal, India",
    city: "Kolkata",
    state: "West Bengal",
    country: "India",
  },

  // Color Constants (for reference and inline styles if needed)
  colors: {
    navy: "#0B1F3A",
    navyDark: "#061224",
    teal: "#0E9F8E",
    tealDark: "#0A7F72",
    tealLight: "#E6F7F5",
    softWhite: "#F7FAFC",
    gold: "#C8A24A",
    goldLight: "#FAF4E6",
    slate: "#475569",
  },

  // Top Trust Marquee Bar Items
  marqueeItems: [
    "Built for today's modern clinics",
    "IVF · Dental · Orthopaedic · Dermatology · Eye Care",
    "24/7 WhatsApp Concierge · Zero Missed Calls",
    "NMC Ethical Guidelines Compliant",
    "Turnkey Setup in 14 Days",
    "100% Doctor Confidentiality & DPDP Act 2023 Ready",
  ],

  // Animated Key Growth Stats
  stats: [
    {
      value: 50,
      suffix: "%",
      label: "More Patient Inquiries",
      subtext: "Average increase in qualified consultations within 90 days",
    },
    {
      value: 24,
      suffix: "/7",
      label: "Automated Front-Desk Response",
      subtext: "Answers during OPD hours, lunch breaks & late nights",
    },
    {
      value: 5,
      prefix: "<",
      suffix: "s",
      label: "WhatsApp Response Time",
      subtext: "Captures high-intent searchers before they call competitors",
    },
    {
      value: 0,
      suffix: "",
      label: "Missed Patient Calls",
      subtext: "AI call receptionist answers busy lines and triggers instant booking",
    },
  ],

  // Problem Section: "Why Most Clinics Lose Patients Online"
  problems: [
    {
      id: "missed-calls",
      title: "Missed Calls After Hours & During OPD",
      description:
        "When receptionists are occupied with billing or walk-in queues, incoming calls ring out. Over 28% of patient calls happen after 7 PM or during lunch hours. In Indian metros, a caller who hears a busy tone taps the next doctor on Google within 45 seconds.",
      impact: "Up to ₹1,50,000+ lost patient lifetime value every single month.",
      icon: "PhoneMissed",
    },
    {
      id: "slow-whatsapp",
      title: "Slow WhatsApp Replies Go Cold",
      description:
        "Patients expect instant replies for procedure pricing, downtime, and consultation slots. When an inquiry sits unanswered on a front-desk smartphone for 2 hours, the prospective patient books an appointment elsewhere.",
      impact: "70% of unanswered WhatsApp inquiries never convert if delayed over 15 minutes.",
      icon: "MessageSquareDashed",
    },
    {
      id: "outdated-website",
      title: "Outdated Website & Weak Social Presence",
      description:
        "Most clinics have static brochure websites with hidden booking forms and no mobile optimization. Coupled with generic agency stock photos on Instagram, skeptical patients fail to feel the doctor's authentic clinical expertise.",
      impact: "High bounce rates and high patient acquisition cost with zero predictability.",
      icon: "GlobeX",
    },
  ],

  // Solution Section: "Your Complete Patient Growth System" (4 Core Pillars)
  services: [
    {
      id: "website",
      number: "01",
      title: "High-Converting Clinic Website",
      badge: "Sub-Second Speed",
      description:
        "A luxury, mobile-first web presence engineered for doctor authority. Verified clinical credentials, transparent procedure guidance, high-converting before/after showcases, and 1-tap WhatsApp and online appointment booking.",
      features: [
        "Lightning-fast mobile load speed (<1s) on Indian 4G/5G networks",
        "Specialty-specific clinical consultation pathways",
        "Verified doctor bio, clinical degrees & ethical treatment disclosures",
        "Google Business Profile & Local Map Pack search optimization",
      ],
      icon: "Globe",
    },
    {
      id: "whatsapp",
      number: "02",
      title: "WhatsApp Automation & Triage",
      badge: "Instant <5s Replies",
      description:
        "Official Meta WhatsApp Business Cloud API concierge operating 24 hours a day, 7 days a week. Instantly answers clinic timings, sends pre-consultation guidelines, schedules doctor slots, and prevents clinic no-shows with automated reminder sequences.",
      features: [
        "Instant automated response (<5 seconds) around the clock",
        "Specialty-specific condition triage and appointment scheduling",
        "Automated appointment booking synced directly to reception",
        "Automated pre-procedure prep notes & post-op follow-ups",
      ],
      icon: "MessageCircle",
    },
    {
      id: "ai-receptionist",
      number: "03",
      title: "24/7 AI Call Receptionist",
      badge: "English · Hindi · Bengali",
      description:
        "Never lose another patient to a busy phone line. Our voice-enabled front-desk AI politely answers secondary calls, provides doctor consultation hours, and immediately sends an SMS & WhatsApp booking link to the caller's phone.",
      features: [
        "Zero busy tones: answers multiple simultaneous phone calls",
        "Natural Indian bilingual accent (English, Hindi, Bengali fluency)",
        "Instant SMS/WhatsApp rescue link dispatched in under 10 seconds",
        "Receptionist dashboard with call recordings & patient call logs",
      ],
      icon: "PhoneCall",
    },
    {
      id: "social-growth",
      number: "04",
      title: "Doctor Authority & Social Media",
      badge: "Done-For-You Production",
      description:
        "Patients book doctors they trust. We research, script, and edit high-retention educational video reels and myth-busting carousels showcasing your clinical expertise—positioning you as the premier specialist clinic in your city.",
      features: [
        "Monthly script decks written specifically for your clinical voice",
        "High-definition video reel editing with captions and medical B-roll",
        "Ethical, dignity-first patient education (100% NMC compliant)",
        "Organic local follower growth and high-intent inbound inquiries",
      ],
      icon: "Video",
    },
  ],

  // How It Works: 4 Phased Steps
  howItWorks: [
    {
      step: "01",
      time: "Day 1–3",
      title: "Free Growth Audit",
      description:
        "We audit your clinic's current online patient journey, test your secret-shopper response time on phone and WhatsApp, and calculate your exact monthly inquiry leakage.",
      deliverable: "Custom Patient Leakage & Opportunity Diagnostic",
    },
    {
      step: "02",
      time: "Weeks 1–2",
      title: "Turnkey Setup",
      description:
        "We build your high-converting clinic website, configure official WhatsApp Business API endpoints, and train your 24/7 AI voice receptionist on your clinic's OPD rules.",
      deliverable: "Live Website & Automation Infrastructure",
    },
    {
      step: "03",
      time: "Week 3",
      title: "Launch & Go-Live",
      description:
        "We conduct a 45-minute remote training session with your reception staff, test call forwarding, and switch the system live with active patient booking triggers.",
      deliverable: "Full System Deployment & Front-Desk Handoff",
    },
    {
      step: "04",
      time: "Monthly",
      title: "Growth Reports & Optimization",
      description:
        "Every month we review real consultation numbers, calls rescued, and booking conversion rates directly with you on a 30-minute strategic Zoom review.",
      deliverable: "Monthly Verified Patient Influx & ROI Dashboard",
    },
  ],

  // Comparison Table: Done-For-You vs DIY Software
  comparison: [
    {
      feature: "Setup & Implementation",
      agency: "100% Done-For-You (Zero doctor tech work)",
      diy: "Requires weeks of manual setup & staff configuration",
      genericAgency: "Standard templates with no medical understanding",
    },
    {
      feature: "Missed Call Handling",
      agency: "24/7 AI Voice Receptionist + Instant WhatsApp rescue",
      diy: "None (Calls just go unanswered)",
      genericAgency: "Rings out to busy front-desk receptionist",
    },
    {
      feature: "WhatsApp Response Time",
      agency: "Under 5 seconds, 24 hours a day, 7 days a week",
      diy: "Dependent on receptionist checking their phone",
      genericAgency: "Slow manual replies (often 2–4 hours late)",
    },
    {
      feature: "Doctor Time Commitment",
      agency: "0 hours (You focus entirely on clinical consultations)",
      diy: "10–15 hours/week wrestling with software settings",
      genericAgency: "Constant meetings with junior account managers",
    },
    {
      feature: "Medical Ethics & NMC Compliance",
      agency: "Strictly compliant with Indian medical advertising codes",
      diy: "Unregulated",
      genericAgency: "Risky marketing tactics that violate NMC ethics",
    },
    {
      feature: "Asset Ownership",
      agency: "You permanently own your website code & WhatsApp data",
      diy: "Locked inside proprietary SaaS software",
      genericAgency: "Held hostage on agency sub-accounts",
    },
  ],

  // Results & Testimonials (Easily editable doctor quotes and clinic placeholders)
  testimonials: [
    {
      id: 1,
      quote:
        "Before Clinic Growth Helpers, our reception missed at least 6–8 calls every evening during busy laser procedures. Within 30 days of activating the AI call assistant and WhatsApp concierge, we saw our acne and anti-aging consultation bookings surge without hiring extra reception staff.",
      doctorName: "[Dr. A. Sharma, MD Dermatology]",
      clinicName: "[Aesthetic & Laser Skin Clinic]",
      location: "[Delhi NCR]",
      specialty: "Dermatology & Cosmetology",
      metric: "+54% Consultations in 90 Days",
      avatarInitials: "AS",
    },
    {
      id: 2,
      quote:
        "In hair restoration, every missed call is easily a ₹60,000 to ₹1,00,000 lost patient. The instant WhatsApp triage answered graft questions immediately at 10 PM and booked diagnostic trichology consults onto my calendar automatically. It paid for itself in the first 3 weeks.",
      doctorName: "[Dr. R. Sen, Hair Transplant Surgeon]",
      clinicName: "[Advanced Hair & Restoration Institute]",
      location: "[Bengaluru]",
      specialty: "FUE & Hair Restoration",
      metric: "Zero Missed Graft Inquiries",
      avatarInitials: "RS",
    },
    {
      id: 3,
      quote:
        "The differentiator for me was 'Done-For-You'. I didn't want my staff learning complicated software. Clinic Growth Helpers handled everything from website rebuild to WhatsApp verification. The monthly executive reporting is crisp and transparent.",
      doctorName: "[Dr. P. Mukherjee, Senior Cosmetic Dermatologist]",
      clinicName: "[Mukherjee Skin Center]",
      location: "[Mumbai]",
      specialty: "Clinical Dermatology & Laser",
      metric: "+42% Retained Patient Recall",
      avatarInitials: "PM",
    },
  ],

  // Who We Serve (5 Core Specialties)
  specialties: [
    {
      name: "IVF & Fertility Clinics",
      slug: "ivf-fertility",
      path: "/specialties/ivf-fertility",
      description:
        "Empathetic, private enquiry handling, consultation booking and follow-up across a long patient journey.",
      challenge: "High emotional stakes and privacy concerns cause prospective couples to drop out before booking.",
      solution: "Discreet WhatsApp counseling triage and confidential consultation booking pathways.",
    },
    {
      name: "Dental Clinics & Chains",
      slug: "dental",
      path: "/specialties/dental",
      description:
        "Appointment booking, treatment-plan follow-ups and recall reminders, with branch-wise routing for chains.",
      challenge: "Lost aligner and implant enquiries combined with unconfirmed 6-month hygiene recall drop-offs.",
      solution: "24/7 chair-side booking, branch-wise routing, and automated 6-month recall sequences.",
    },
    {
      name: "Orthopaedic & Physiotherapy Clinics",
      slug: "orthopaedic-physiotherapy",
      path: "/specialties/orthopaedic-physiotherapy",
      description:
        "Booking for joint, spine and sports-injury consultations, plus physiotherapy session reminders and care-plan follow-ups.",
      challenge: "Patients dropping out between initial consultation and ongoing physiotherapy sessions.",
      solution: "Urgent acute pain triage, surgeon OPD booking, and automated rehab session reminder loops.",
    },
    {
      name: "Dermatology Clinics (skin and hair)",
      slug: "dermatology",
      path: "/specialties/dermatology",
      description:
        "Instant WhatsApp triage for skin and hair enquiries, pre-consultation intake and follow-up for hair restoration and treatment plans.",
      challenge: "Skin triage mixed with hair restoration inquiries and slow replies during busy laser procedures.",
      solution: "Instant automated triage separating skin and hair pathways with structured pre-consult intake.",
    },
    {
      name: "Eye Care & Ophthalmology Clinics",
      slug: "eye-care",
      path: "/specialties/eye-care",
      description:
        "LASIK and cataract enquiry qualification, screening bookings and post-procedure follow-ups.",
      challenge: "LASIK price-shoppers who don't book suitability tests and uncoordinated family cataract bookings.",
      solution: "Suitability screening funnels, family-coordinated booking, and automated post-procedure review loops.",
    },
  ],

  // Engagement & Pricing Tiers (Easily editable)
  pricing: [
    {
      id: "single-clinic",
      name: "Single Clinic Growth System",
      badge: "Most Popular for Solo & Specialist Clinics",
      isPopular: true,
      priceDisplay: "Scoped on Free Strategy Call",
      priceNote: "Custom fixed 6-month investment tailored to your practice size",
      description:
        "Everything needed to turn your single-location clinic into an automated patient acquisition engine.",
      features: [
        "Complete bespoke clinic website (Mobile-first, sub-second load)",
        "Official Meta WhatsApp Business Cloud API setup & 24/7 triage",
        "24/7 AI Call Receptionist (English, Hindi & Bengali bilingual)",
        "Doctor authority video scriptwriting & editing (4 reels/month)",
        "Google Business Profile & Local 3-Pack Map optimization",
        "45-minute receptionist orientation & phone playbook",
        "Monthly strategic growth review directly with founders",
        "100% permanent ownership of all code & digital assets",
      ],
      ctaText: "Book Free Growth Audit",
    },
    {
      id: "multi-location",
      name: "Multi-Location Chain / Group",
      badge: "Multi-Branch & Hospital Groups",
      isPopular: false,
      priceDisplay: "Custom Enterprise Scope",
      priceNote: "Tailored for 2 to 10+ clinic branches across multiple cities",
      description:
        "Centralized multi-doctor routing, multi-branch appointment booking, and regional patient acquisition funnels for expanding healthcare brands.",
      features: [
        "Multi-branch clinic web ecosystem with location-based auto-routing",
        "Unified WhatsApp Cloud API with intelligent branch & doctor triage",
        "Multi-line AI Voice Call Receptionist with centralized reporting",
        "High-volume doctor video production & local brand dominance",
        "Multi-doctor OPD calendar synchronization & front-desk access",
        "Dedicated account strategist & priority technical SLA",
        "Custom CRM / EHR integration (Practo, Clinicea, Lybrate, etc.)",
      ],
      ctaText: "Discuss Multi-Branch Roadmap",
    },
  ],

  // FAQs - Genuine operational, clinical, legal, and commercial answers for modern clinic owners
  faqs: [
    {
      q: "How does patient data stay safe and compliant with Indian regulations?",
      a: "We adhere strictly to India's Digital Personal Data Protection (DPDP) Act 2023 and National Medical Commission (NMC) professional conduct standards. We never store or access confidential diagnostic health records, lab reports, or medical charts. Patient inquiries are encrypted in transit, routed via official Meta Cloud APIs, and your practice permanently retains 100% legal ownership of your patient database and conversation logs.",
      category: "Compliance & Privacy",
    },
    {
      q: "Will our existing front-desk receptionist be resistant, overwhelmed, or replaced?",
      a: "No, our systems are built specifically to empower and protect your front-desk reception, never replace them. In busy clinics, receptionists are constantly interrupted by ringing phones while attending to walk-in patients, collecting fees, or assisting doctors. Our AI handles the repetitive after-hours calls, sends WhatsApp clinic directions, and answers routine OPD timing questions. When serious patients want to book or ask complex questions, pre-qualified details are handed cleanly to your staff. Front desks consistently report feeling far less stressed during peak OPD hours.",
      category: "Front Desk & Operations",
    },
    {
      q: "How quickly does the complete growth system launch in our clinic?",
      a: "Our typical turnaround is 14 days from kickoff to live deployment. Week 1 is dedicated to the technical audit, official Meta WhatsApp Business API registration, and custom clinic web architecture. Week 2 focuses on AI call receptionist voice training tailored to your doctor schedules and OPD rules. We conduct a 45-minute remote orientation with your reception staff in Week 3 and launch live with zero downtime to your daily clinic operations.",
      category: "Setup & Timeline",
    },
    {
      q: "Do we retain 100% permanent ownership of our phone numbers and Meta WhatsApp account?",
      a: "Yes, absolutely. We register the official Meta WhatsApp Business Cloud API directly under your clinic's Meta Business Manager and verified GST or clinic establishment registration. You own the phone number, the WABA account, the website domain, and all patient communication records. Unlike traditional agencies that lock clinic assets inside their own sub-accounts, all digital infrastructure remains your clinic's permanent property even if you ever pause our engagement.",
      category: "Compliance & Privacy",
    },
    {
      q: "Can the AI call assistant and WhatsApp handle Hindi, Bengali, and regional patient queries?",
      a: "Yes. Patients across India rarely speak formal English when inquiring about clinical appointments; they frequently speak conversational Hindi, Bengali, or colloquial Hinglish (e.g., 'doctor sahab kab baithenge', 'OPD consultation fees kitna hai', 'root canal pain follow up slot mil sakta hai kya'). Our AI voice receptionist and WhatsApp concierge are trained on Indian healthcare conversational patterns, answering with polite medical etiquette and routing specialized clinical doubts directly to your human staff.",
      category: "Technology & AI",
    },
    {
      q: "How much time does the consulting doctor personally need to commit each week?",
      a: "Less than 30 minutes a week. Clinic Growth Helpers is 100% done-for-you, so doctors do not manage ad portals, write code, or wrestle with CRM software. For doctor-authority video content, our medical team delivers pre-researched, specialty-tailored scripts; you simply record a 45-to-60-second clip on your smartphone in between clinical consultations. We handle all editing, subtitles, local SEO optimization, and monthly performance reporting.",
      category: "Setup & Timeline",
    },
    {
      q: "What is the 6-Month Growth Commitment and how are results verified?",
      a: "We measure success solely through real, attended consultations and billed revenue—never by vanity clicks, impressions, or website traffic. Prior to kickoff, we record your past 90-day baseline consultations and revenue. Under our 6-Month Growth Commitment, if your clinic adheres to agreed operational standards (such as following up on escalated WhatsApp leads and keeping OPD slots open) and has not recovered its fee through verified online-sourced patients within 6 months, we continue managing your growth system at zero agency fee until the milestone is reached.",
      category: "Commitment & Pricing",
    },
    {
      q: "Does this interfere with our existing clinic management software (Practo, Clinicea, Lybrate)?",
      a: "No. Our system operates on the front end of patient discovery and front-desk communication—capturing inquiries, recovering missed calls after clinic hours, and providing instant WhatsApp assistance. When a consultation is booked, your front desk receives an instant, formatted WhatsApp alert and calendar notification with patient details and chief complaints, allowing your staff to seamlessly enter the booking into your existing EHR, billing software, or physical register.",
      category: "Technology & AI",
    },
    {
      q: "How do you filter price-shoppers and casual window shoppers from wasting our doctor's time?",
      a: "In specialties like IVF, dental implants, cosmetic dermatology, LASIK, and joint surgery, patients frequently ask 'how much does this cost' and disappear. Instead of sending raw price lists, our automated WhatsApp concierge asks 2–3 structured clinical intake questions (such as condition duration, prior treatments tried, and preferred consultation day). This educates the patient on the necessity of an in-person clinical diagnosis and filters serious patients before booking.",
      category: "Front Desk & Operations",
    },
    {
      q: "What happens to missed calls after 8:00 PM and on Sundays when the clinic is closed?",
      a: "According to clinic audit data, up to 35% of patient inquiries occur between 8:00 PM and 9:00 AM or on Sundays when clinic phone lines go unanswered. When a patient calls after hours, our 24/7 AI receptionist answers immediately, shares clinic location and OPD timings, and offers an appointment booking pathway. Within 10 seconds, an automated WhatsApp confirmation link is sent to the patient's phone. You start your Monday morning with confirmed bookings instead of lost patients.",
      category: "Front Desk & Operations",
    },
    {
      q: "How do you ensure strict compliance with National Medical Commission (NMC) ethics?",
      a: "We adhere rigorously to the NMC Registered Medical Practitioner (Professional Conduct) Regulations and Indian medical advertising standards. We never publish sensationalized 'guaranteed cure' claims, never fabricate testimonials, never use commercial discount coupons or Groupon-style deals, and never run aggressive sales copy. All patient-facing assets are designed with dignity, scientific accuracy, and educational clarity that elevates your doctor's professional standing.",
      category: "Compliance & Privacy",
    },
    {
      q: "Why don't you publish flat package prices on your website?",
      a: "Because modern clinics are not commodity shops. An independent solo dental practice with two operatories has completely different infrastructure and patient flow requirements than a 3-branch IVF center or an eye hospital performing high volumes of cataract and LASIK surgeries. We customize our system scope during a complimentary 30-minute Clinic Growth Audit based on your patient volume, specialty, and branch count. You receive a clear, fixed 6-month proposal with no hidden tech costs and no per-patient commission.",
      category: "Commitment & Pricing",
    },
  ],
  commitmentTerms: undefined as any, // assigned below
  founder: undefined as any, // assigned below
};

export const COMMITMENT_FREE_MONTHS = 1;

export const COMMITMENT_TERMS = {
  sectionTitle: "Commitment Terms",
  summaryNote: "These terms are summarised for clarity. The signed agreement is the final reference.",
  freeMonths: COMMITMENT_FREE_MONTHS,
  pillars: [
    {
      pillarNumber: 1,
      pillarTag: "Pillar 1",
      title: "1. Baseline Measurement Protocol",
      shortTitle: "Baseline Measurement Protocol",
      description:
        "Before the 6-month build starts, we record your starting numbers together, so every result is measured against facts.",
      bullets: [
        "Baseline period: the 90 days before your start date.",
        "What we record: monthly patient consultations, inbound call and WhatsApp enquiry volume, average revenue per patient, and the share of patients who came from online sources.",
        "Source: your clinic software, CRM or billing register, exported by your clinic and signed off by both sides at kickoff.",
        "If records are incomplete, we run a 30-day measurement period first and use that as the baseline.",
        "The baseline is written into your agreement and changes only by mutual written agreement.",
      ],
    },
    {
      pillarNumber: 2,
      pillarTag: "Pillar 2",
      title: "2. Minimum Clinic Commitments & Operational Standards",
      shortTitle: "Minimum Clinic Commitments & Operational Standards",
      description:
        "Our systems recover patients only when the clinic can respond. These are the minimum commitments from your side.",
      bullets: [
        "Follow up on escalated WhatsApp leads within 2 business hours.",
        "Keep phone and WhatsApp numbers active and funded.",
        "Keep consultation slots open for online bookings.",
        "Mark every appointment as booked, attended or no-show within 24 hours.",
        "Approve doctor content and scripts within 3 business days.",
        "Follow the agreed patient intake scripts.",
        "Share the monthly billing or revenue export by the 5th of each month.",
      ],
    },
    {
      pillarNumber: 3,
      pillarTag: "Pillar 3",
      title: "3. Verification of Results & Attended Consultations",
      shortTitle: "Verification of Results & Attended Consultations",
      description:
        "Results are never measured by impressions, clicks or website traffic. They are verified only through real attended consultations and billed revenue.",
      bullets: [
        "A result counts only when the patient attended and was billed, as recorded in your clinic billing records.",
        "Online-sourced means the patient's first contact came through a channel we run (website form, WhatsApp, AI call line or social media), recorded in the CRM booking-source field and confirmed at registration.",
        "Recovered missed calls and WhatsApp bookings count when they lead to an attended, billed consultation.",
        "Each month we reconcile our dashboard with your billing records, and both sides sign off the figures.",
        "Any disagreement on a figure must be raised within 7 days of the monthly report, and we review it together using the source records.",
        "The same numbers appear on your monthly dashboard, so you can check them at any time.",
      ],
    },
    {
      pillarNumber: 4,
      pillarTag: "Pillar 4",
      title: "4. Remedy & Continued Service Clause",
      shortTitle: "Remedy & Continued Service Clause",
      description:
        "If the agreed target is not met, there is a clear, limited remedy. It applies only if the clinic kept its side of the agreement.",
      bullets: [
        "Condition: at the end of month 6, the clinic has not recovered its 6-month investment through online-sourced revenue, and the clinic met its Pillar 2 commitments as shown in the monthly tracking log.",
        `Remedy: we add ${COMMITMENT_FREE_MONTHS} month(s) of the same service at no fee, with the same tracking and review calls.`,
        "How to claim: write to us within 15 days of the month-6 report. We reply in writing within 7 days.",
        "The remedy applies once per engagement, and any further work after that is agreed separately.",
        "Not covered: clinical outcomes, doctor unavailability or clinic closure, major price or service changes, WhatsApp, Meta or Google policy changes or platform outages, delays caused by missing access or approvals, and paid ad budgets unless included in the agreement.",
        "This is a written target and remedy. It is not a guarantee of patient numbers or revenue.",
      ],
    },
  ],
};

siteConfig.commitmentTerms = COMMITMENT_TERMS;

/**
 * Founder & Leadership Profile
 * Easily editable fields for the agency leadership and founder details.
 * Empty fields will automatically be hidden in the UI with zero placeholders or brackets rendered.
 */
export const FOUNDER = {
  // Founder full name
  name: "Surodeep Oraon",

  // Role / Title
  title: "Founder, Clinic Growth Helpers",

  // Photo path or URL (leave empty string to hide photo area)
  photo: "/assets/aistudio/WhatsApp_Image_2026-10-23_at_15.09.48_7afb8c5e.jpeg",

  // 3 short paragraphs for the bio
  bio: [
    "I founded Clinic Growth Helpers after working closely with healthcare practices across India and observing the same critical challenge everywhere: dedicated doctors lose prospective patients daily because busy front desks miss phone calls and leave WhatsApp inquiries unanswered.",
    "Our entire approach is 100% done-for-you. We engineer high-converting clinic websites, activate 24/7 AI call assistants, and build automated WhatsApp booking triage that engages patients within seconds—eliminating reception bottlenecks without requiring the doctor to learn software.",
    "Every clinic works directly with me on strategic positioning, baseline audits, and monthly performance reviews. We maintain strict ethical transparency and focus exclusively on verified, attended patient consultations.",
  ],

  // Optional credentials or certifications list (hidden if empty, do not invent credentials)
  credentials: [] as string[],

  // Team composition line (hidden if empty)
  teamLine: "Supported by a dedicated 5-member in-house team managing clinic web engineering, WhatsApp automation, and front-desk operational support.",

  // Social media profile links (leave empty string to hide buttons)
  linkedin: "",

  // Instagram profile link (leave empty string to hide buttons)
  instagram: "",

  // Optional 60-second video intro URL (hidden if empty string; if present, opens modal player)
  introVideoUrl: "",
};

siteConfig.founder = FOUNDER;

/**
 * =============================================================================
 * LEAD CAPTURE & WEB3FORMS CONFIGURATION
 * =============================================================================
 */

// Web3Forms API endpoint used by all lead forms to deliver submissions via email
export const FORM_ENDPOINT = "https://api.web3forms.com/submit";

// Web3Forms access key linked to the recipient email inbox
export const FORM_ACCESS_KEY = "cb853403-74c5-4d50-a753-030643b64737";

// Fallback WhatsApp number used when a form submission fails due to network or server issues
export const FORM_FALLBACK_WHATSAPP = siteConfig.brand.whatsappRaw;
