import { FORM_ENDPOINT, FORM_ACCESS_KEY, FORM_FALLBACK_WHATSAPP } from '../config/siteConfig.ts';

export type FormLocation = 'Hero form' | 'Contact page' | 'CTA band';

export interface LeadFormData {
  name: string;
  clinic: string;
  city: string;
  whatsapp: string;
  specialty: string;
  email?: string;
  monthlyEnquiries?: string;
  consent: boolean;
  botcheck?: string;
}

export type FormValidationErrors = Record<string, string>;

export interface SubmitResult {
  success: boolean;
  message: string;
  fallbackWhatsAppUrl?: string;
  errors?: FormValidationErrors;
}

/**
 * Validates lead form input fields according to Indian phone standards and compliance requirements.
 */
export function validateLeadForm(data: LeadFormData): FormValidationErrors {
  const errors: FormValidationErrors = {};

  if (!data.name || !data.name.trim()) {
    errors.name = 'Please enter your name';
  }

  if (!data.clinic || !data.clinic.trim()) {
    errors.clinic = 'Please enter your clinic name';
  }

  if (!data.city || !data.city.trim()) {
    errors.city = 'Please enter your city / state';
  }

  // Validate Indian phone / WhatsApp number:
  // Must be 10 digits starting with 6, 7, 8, or 9 (with optional 91 or 0 prefix)
  const cleanedPhone = (data.whatsapp || '').replace(/[\s\-\(\)\+]/g, '');
  const digitsOnly = cleanedPhone.replace(/\D/g, '');
  let local10Digits = digitsOnly;
  if (digitsOnly.length === 12 && digitsOnly.startsWith('91')) {
    local10Digits = digitsOnly.slice(2);
  } else if (digitsOnly.length === 11 && digitsOnly.startsWith('0')) {
    local10Digits = digitsOnly.slice(1);
  }

  if (!data.whatsapp || !data.whatsapp.trim()) {
    errors.whatsapp = 'Please provide your Indian mobile or WhatsApp number';
  } else if (local10Digits.length !== 10 || !/^[6-9]\d{9}$/.test(local10Digits)) {
    errors.whatsapp = 'Please enter a valid 10-digit Indian phone or WhatsApp number';
  }

  if (!data.specialty || !data.specialty.trim()) {
    errors.specialty = 'Please select your clinic specialty';
  }

  if (!data.consent) {
    errors.consent = 'Please agree to be contacted about your audit';
  }

  if (data.email && data.email.trim()) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email.trim())) {
      errors.email = 'Please enter a valid email address';
    }
  }

  return errors;
}

/**
 * Formats current timestamp in Indian Standard Time (IST - Asia/Kolkata).
 */
export function getISTTimestamp(): string {
  try {
    return new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'medium',
    });
  } catch {
    return new Date().toISOString();
  }
}

/**
 * Single reusable submit function used by all lead forms on the site.
 * Sends data to FORM_ENDPOINT via Web3Forms API without logging or saving lead details locally.
 */
export async function submitLeadForm(
  formData: LeadFormData,
  formLocation: FormLocation
): Promise<SubmitResult> {
  // 1. Honeypot check: botcheck must remain empty
  if (formData.botcheck && formData.botcheck.trim().length > 0) {
    return {
      success: false,
      message: 'Something went wrong. Please message us on WhatsApp instead.',
      fallbackWhatsAppUrl: `https://wa.me/${FORM_FALLBACK_WHATSAPP}`,
    };
  }

  // 2. Validate fields
  const validationErrors = validateLeadForm(formData);
  if (Object.keys(validationErrors).length > 0) {
    return {
      success: false,
      message: 'Please complete all required fields.',
      errors: validationErrors,
    };
  }

  // 3. Prepare payload for Web3Forms
  const name = formData.name.trim();
  const clinic = formData.clinic.trim();
  const city = formData.city.trim();
  const whatsapp = formData.whatsapp.trim();
  const specialty = formData.specialty.trim();
  const istTime = getISTTimestamp();
  const pageUrl = typeof window !== 'undefined' ? window.location.href : '';

  const payload: Record<string, any> = {
    access_key: FORM_ACCESS_KEY,
    subject: `New Free Audit Request: ${clinic} (${city})`,
    from_name: 'Clinic Growth Helpers Website',
    name,
    clinic,
    city,
    whatsapp,
    specialty,
    'page URL': pageUrl,
    page_url: pageUrl,
    'form location': formLocation,
    form_location: formLocation,
    'date and time in IST': istTime,
    date_ist: istTime,
    botcheck: '',
  };

  if (formData.email && formData.email.trim()) {
    payload.email = formData.email.trim();
  }

  if (formData.monthlyEnquiries && formData.monthlyEnquiries.trim()) {
    payload['monthly enquiries'] = formData.monthlyEnquiries.trim();
    payload.monthly_enquiries = formData.monthlyEnquiries.trim();
  }

  // 4. Send POST request to Web3Forms API
  try {
    const response = await fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json().catch(() => null);

    if (response.ok && result && result.success) {
      return {
        success: true,
        message:
          'Thank you. We have received your request and will contact you on WhatsApp within 1 business day.',
      };
    } else {
      return {
        success: false,
        message: 'Something went wrong. Please message us on WhatsApp instead.',
        fallbackWhatsAppUrl: `https://wa.me/${FORM_FALLBACK_WHATSAPP}`,
      };
    }
  } catch {
    // Network or server error
    return {
      success: false,
      message: 'Something went wrong. Please message us on WhatsApp instead.',
      fallbackWhatsAppUrl: `https://wa.me/${FORM_FALLBACK_WHATSAPP}`,
    };
  }
}
