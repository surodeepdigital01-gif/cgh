export interface NavItem {
  label: string;
  href: string;
}

export type SpecialtyKey =
  | 'ivf-fertility'
  | 'dental'
  | 'orthopaedic-physiotherapy'
  | 'dermatology'
  | 'eye-care';

export interface SpecialtyJourneyStep {
  step: string;
  title: string;
  description: string;
}

export interface SpecialtyFaq {
  q: string;
  a: string;
}

export interface SpecialtySystemElement {
  title: string;
  description: string;
  detail: string;
}

export interface SpecialtyInfo {
  key: SpecialtyKey;
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  hubDescription: string;
  heroSummary: string;
  painPoints: {
    title: string;
    description: string;
  }[];
  systemElements: SpecialtySystemElement[];
  journeySteps: SpecialtyJourneyStep[];
  faqs: SpecialtyFaq[];
  typicalAvgTicket: number;
  typicalMonthlyPatients: number;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  deliverables: string[];
  impactMetric: string;
  howItWorks: string;
}

export interface BookingFormData {
  doctorName: string;
  clinicName: string;
  specialty: string;
  city: string;
  phone: string;
  email: string;
  currentMonthlyPatients: string;
  primaryBottleneck: string;
  preferredTime: string;
  preferredDate?: string;
  notes?: string;
}

export interface CalculatorInputs {
  specialty: SpecialtyKey;
  monthlyPatients: number;
  avgRevenuePerPatient: number;
  missedCallPercentage: number;
  whatsappDelayHours: number;
}

export interface CalculatorResults {
  estimatedMonthlyLostPatients: number;
  estimatedMonthlyLeakedRevenue: number;
  estimatedRecoverablePatients: number;
  estimatedMonthlyRecoveredRevenue: number;
  sixMonthProjectedGrowth: number;
  frontDeskHoursSavedWeekly: number;
}
