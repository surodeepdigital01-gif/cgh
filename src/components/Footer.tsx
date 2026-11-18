import React from 'react';
import { useRouter, Link } from '../router/Router.tsx';
import { siteConfig } from '../config/siteConfig.ts';
import { Phone, Mail, MapPin, MessageSquare, ArrowRight } from 'lucide-react';

interface FooterProps {
  onOpenPlaceholderGuide?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-[#0F2A4A] text-[#F6F1E9] pt-16 pb-12 border-t border-[#F6F1E9]/10">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#F6F1E9]/10 font-sans">
          
          {/* Column 1: Brand & Positioning */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 text-2xl font-serif font-bold text-[#F6F1E9] tracking-tight group">
              <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-[#14B8A6] p-0.5 shadow-xs group-hover:scale-105 transition-transform overflow-hidden shrink-0">
                <div className="w-full h-full rounded-[6px] bg-[#0F2A4A] flex items-center justify-center">
                  <div className="flex items-center justify-center font-sans font-black tracking-tight leading-none text-[#F6F1E9] text-[11px]">
                    <span>CG</span>
                    <span className="text-[#14B8A6] ml-0.2">H</span>
                  </div>
                </div>
              </div>
              <span>{siteConfig.brand.name}</span>
            </Link>
            <p className="text-xs sm:text-sm text-[#F6F1E9]/70 max-w-sm leading-relaxed font-sans">
              Done-for-you growth and automation partner for modern clinics across India, serving IVF, dental, orthopaedic and physiotherapy, dermatology and eye care practices.
            </p>

            <div className="pt-2 flex flex-col gap-2.5 text-xs text-[#F6F1E9]/80 font-mono">
              <div className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-[#14B8A6] shrink-0 mt-0.5" />
                <div className="flex-1 font-mono">
                  <span className="text-[#F6F1E9]/60 font-sans">Phone: </span>
                  <a href="tel:+917863977647" className="text-[#14B8A6] hover:text-[#F6F1E9] transition-colors underline-offset-2 hover:underline">
                    +91 7863977647
                  </a>
                  <span className="text-[#F6F1E9]/60 font-sans"> / </span>
                  <a href="tel:+918293471447" className="text-[#14B8A6] hover:text-[#F6F1E9] transition-colors underline-offset-2 hover:underline">
                    +91 8293471447
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-[#14B8A6] shrink-0" />
                <span className="font-sans">
                  WhatsApp:{' '}
                  <a
                    href="https://wa.me/918293471447"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#14B8A6] hover:text-[#F6F1E9] transition-colors underline-offset-2 hover:underline font-mono"
                  >
                    +91 8293471447
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#14B8A6] shrink-0" />
                <span className="font-sans">
                  Email:{' '}
                  <a
                    href="mailto:hello@clinicgrowthhelpers.com"
                    className="text-[#14B8A6] hover:text-[#F6F1E9] transition-colors underline-offset-2 hover:underline font-sans"
                  >
                    hello@clinicgrowthhelpers.com
                  </a>
                </span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#14B8A6] shrink-0 mt-0.5" />
                <span className="leading-snug font-sans">
                  Operations: <strong className="text-[#F6F1E9] font-normal">Remote-First — Kolkata, Malda &amp; Siliguri, West Bengal, India</strong>
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: The 4 Core Solutions */}
          <div>
            <h4 className="text-xs font-semibold text-[#F6F1E9] uppercase tracking-wider mb-4 font-sans">
              Patient Growth Pillars
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-sans text-[#F6F1E9]/70">
              <li>
                <Link href="/services#website" className="hover:text-[#14B8A6] transition-colors">
                  High-Converting Clinic Website
                </Link>
              </li>
              <li>
                <Link href="/services#whatsapp" className="hover:text-[#14B8A6] transition-colors">
                  WhatsApp Concierge &amp; Triage
                </Link>
              </li>
              <li>
                <Link href="/services#ai-receptionist" className="hover:text-[#14B8A6] transition-colors">
                  24/7 AI Call Receptionist
                </Link>
              </li>
              <li>
                <Link href="/services#social-growth" className="hover:text-[#14B8A6] transition-colors">
                  Doctor Video Reels &amp; Authority
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[#14B8A6] font-medium inline-flex items-center gap-1 pt-1 hover:underline">
                  <span>View All Deliverables</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Specialties Served (Exact 5 Links + View All) */}
          <div>
            <h4 className="text-xs font-semibold text-[#F6F1E9] uppercase tracking-wider mb-4 font-sans">
              Specialties Served
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#F6F1E9]/70 font-sans">
              <li>
                <Link href="/specialties/ivf-fertility" className="hover:text-[#14B8A6] transition-colors block">
                  IVF &amp; Fertility Clinics
                </Link>
              </li>
              <li>
                <Link href="/specialties/dental" className="hover:text-[#14B8A6] transition-colors block">
                  Dental Clinics &amp; Chains
                </Link>
              </li>
              <li>
                <Link href="/specialties/orthopaedic-physiotherapy" className="hover:text-[#14B8A6] transition-colors block">
                  Orthopaedic &amp; Physiotherapy Clinics
                </Link>
              </li>
              <li>
                <Link href="/specialties/dermatology" className="hover:text-[#14B8A6] transition-colors block">
                  Dermatology Clinics (skin and hair)
                </Link>
              </li>
              <li>
                <Link href="/specialties/eye-care" className="hover:text-[#14B8A6] transition-colors block">
                  Eye Care &amp; Ophthalmology Clinics
                </Link>
              </li>
              <li className="pt-1">
                <Link href="/specialties" className="text-[#14B8A6] font-medium inline-flex items-center gap-1 hover:underline">
                  <span>View all specialties</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Links & Compliance */}
          <div>
            <h4 className="text-xs font-semibold text-[#F6F1E9] uppercase tracking-wider mb-4 font-sans">
              Agency &amp; Legal
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#F6F1E9]/70 font-sans">
              <li>
                <Link href="/how-it-works" className="hover:text-[#14B8A6] transition-colors">
                  How It Works (14-Day Setup)
                </Link>
              </li>
              <li>
                <Link href="/growth-commitment" className="hover:text-[#14B8A6] transition-colors">
                  6-Month Growth Commitment
                </Link>
              </li>
              <li>
                <Link href="/calculator" className="hover:text-[#14B8A6] transition-colors">
                  Interactive Revenue Calculator
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#14B8A6] transition-colors">
                  About Clinic Growth Helpers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#14B8A6] transition-colors">
                  Book Strategy Audit
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-[#14B8A6] transition-colors">
                  Patient Data Privacy (DPDP Act)
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#14B8A6] transition-colors">
                  Terms &amp; Compliance
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Regulatory Disclosure & Copyright */}
        <div className="pt-8 text-xs text-[#F6F1E9]/60 space-y-3 leading-relaxed font-sans">
          <p>
            <strong className="text-[#F6F1E9] font-semibold">National Medical Commission (NMC) Regulatory Disclosure:</strong> Clinic Growth Helpers is a patient acquisition and operational automation consultancy for medical clinics. We do not provide clinical or medical treatment advice, nor do we guarantee medical procedure results. All metrics and projections are based on operational response velocity and historical agency client benchmarks.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-[#F6F1E9]/60 gap-4">
            <p>© {new Date().getFullYear()} {siteConfig.brand.name}. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="/privacy-policy" className="hover:text-[#14B8A6] transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-[#14B8A6] transition-colors">Terms &amp; Compliance</Link>
              <Link href="/growth-commitment" className="hover:text-[#14B8A6] transition-colors">6-Month Growth Commitment</Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
