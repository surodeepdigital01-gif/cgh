import React from 'react';
import { motion } from 'motion/react';
import { siteConfig } from '../config/siteConfig.ts';
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  HeartPulse,
  Smile,
  Activity,
  Eye,
} from 'lucide-react';
import { useRouter } from '../router/Router.tsx';

interface SpecialtyCardData {
  name: string;
  slug: string;
  path: string;
  badge?: string;
  description: string;
  challenge: string;
  solution: string;
}

export const WhoWeServe: React.FC = () => {
  const { navigate } = useRouter();

  const specialtyBadges: Record<string, string> = {
    'ivf-fertility': 'Confidential Triage',
    dental: '24/7 Chair-Side Booking',
    'orthopaedic-physiotherapy': 'Acute Pain Pathways',
    dermatology: 'Skin & Hair Routing',
    'eye-care': 'LASIK & Cataract Funnels',
  };

  const getSpecialtyIcon = (slug: string) => {
    switch (slug) {
      case 'ivf-fertility':
        return <HeartPulse className="w-5 h-5 text-[#14B8A6]" />;
      case 'dental':
        return <Smile className="w-5 h-5 text-[#14B8A6]" />;
      case 'orthopaedic-physiotherapy':
        return <Activity className="w-5 h-5 text-[#14B8A6]" />;
      case 'dermatology':
        return <Sparkles className="w-5 h-5 text-[#14B8A6]" />;
      case 'eye-care':
      default:
        return <Eye className="w-5 h-5 text-[#14B8A6]" />;
    }
  };

  const getSpecialtySpanClass = (idx: number) => {
    if (idx < 3) {
      return 'md:col-span-1 lg:col-span-4';
    }
    if (idx === 3) {
      return 'md:col-span-1 lg:col-span-6';
    }
    return 'md:col-span-2 lg:col-span-6';
  };

  const renderSpecialtyCard = (spec: SpecialtyCardData, idx: number) => {
    const badgeText = specialtyBadges[spec.slug] || 'Specialty Protocol';
    const isSecondRow = idx >= 3;
    const isTabletFullCard = idx === 4;

    const headerHeightClass =
      idx === 4
        ? 'min-h-[44px]'
        : idx === 3
          ? 'min-h-[44px] md:min-h-[4.25rem] lg:min-h-[44px]'
          : 'min-h-[44px] md:min-h-[4.25rem] xl:min-h-[2.75rem]';

    const titleHeightClass =
      idx === 4
        ? ''
        : idx === 3
          ? 'md:min-h-[3.3rem] lg:min-h-[2rem]'
          : 'md:min-h-[3.3rem]';

    const descriptionHeightClass =
      idx === 4
        ? 'lg:min-h-[3.25rem]'
        : idx === 3
          ? 'md:min-h-[5.5rem] lg:min-h-[3.25rem]'
          : idx === 2
            ? 'md:min-h-[5.5rem] lg:min-h-[6.5rem]'
            : 'md:min-h-[6rem] lg:min-h-[6.5rem]';

    const calloutHeightClass =
      idx === 4
        ? 'lg:min-h-[6.25rem]'
        : idx === 3
          ? 'md:min-h-[7.25rem] lg:min-h-[6.25rem]'
          : 'md:min-h-[7.25rem]';

    return (
      <motion.div
        key={spec.slug || idx}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{
          duration: 0.45,
          delay: (isSecondRow ? idx - 3 : idx) * 0.08,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`h-full ${getSpecialtySpanClass(idx)}`}
      >
        <motion.div
          whileHover={{
            y: -4,
            transition: { duration: 0.2 },
          }}
          transition={{ duration: 0.2 }}
          className="group relative bg-[#122A48] rounded-3xl p-6 sm:p-7 flex flex-col justify-between h-full border border-[#F6F1E9]/10 shadow-[0_10px_30px_rgba(15,42,74,0.3)] hover:shadow-[0_16px_38px_rgba(10,29,51,0.45)] hover:border-[#14B8A6]/40 transition-colors transition-shadow duration-200"
        >
          <div className="flex flex-col flex-1">
            {/* Card Top: Specialty Number, Icon, Badge */}
            <div
              className={`flex flex-wrap items-center justify-between gap-2 mb-5 content-start ${headerHeightClass}`}
            >
              <div className="flex items-center gap-2.5 shrink-0">
                <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-[#F6F1E9]/15 shadow-2xs flex items-center justify-center shrink-0">
                  {getSpecialtyIcon(spec.slug)}
                </div>
                <span className="label-eyebrow text-[#14B8A6] whitespace-nowrap">
                  Specialty 0{idx + 1}
                </span>
              </div>

              <span className="px-2.5 py-1 rounded-full bg-[#14B8A6]/10 text-[#14B8A6] font-sans text-[11px] sm:text-xs font-semibold border border-[#14B8A6]/25 whitespace-nowrap">
                {badgeText}
              </span>
            </div>

            {/* Specialty Name */}
            <h3
              className={`text-[1.375rem] xl:text-[1.5rem] leading-[1.22] tracking-[-0.01em] font-serif font-bold text-[#F6F1E9] mb-3 ${titleHeightClass}`}
            >
              <button
                type="button"
                onClick={() => navigate(spec.path || `/specialties/${spec.slug}`)}
                className="text-left text-[#F6F1E9] hover:text-[#14B8A6] transition-colors focus:outline-none cursor-pointer"
              >
                {spec.name}
              </button>
            </h3>

            {/* Description */}
            <p
              className={`text-sm sm:text-[15px] text-[#F6F1E9]/75 leading-[1.6] font-sans mb-5 ${descriptionHeightClass}`}
            >
              {spec.description}
            </p>

            {/* Structured Callout: Bottleneck & Automated Solution */}
            <div
              className={`mb-6 ${
                isTabletFullCard
                  ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-3'
                  : 'space-y-3'
              }`}
            >
              <div
                className={`p-4 rounded-2xl bg-white/[0.04] border border-[#F6F1E9]/10 flex flex-col justify-start ${calloutHeightClass}`}
              >
                <span className="label-eyebrow text-[#14B8A6] block mb-1.5">
                  Primary Bottleneck
                </span>
                <p className="text-sm text-[#F6F1E9]/85 leading-[1.6] font-sans">
                  {spec.challenge}
                </p>
              </div>

              <div
                className={`p-4 rounded-2xl bg-[#14B8A6]/10 border border-[#14B8A6]/25 flex flex-col justify-start ${calloutHeightClass}`}
              >
                <div className="flex items-center gap-1.5 label-eyebrow text-[#14B8A6] mb-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#14B8A6] shrink-0" />
                  <span>Automated Solution</span>
                </div>
                <p className="text-sm text-[#F6F1E9] leading-[1.6] font-sans font-medium">
                  {spec.solution}
                </p>
              </div>
            </div>
          </div>

          {/* Card Footer: Pinned to Bottom */}
          <div className="mt-auto pt-5 border-t border-[#F6F1E9]/10 flex items-center justify-between gap-3 flex-wrap">
            <button
              type="button"
              onClick={() => navigate(spec.path || `/specialties/${spec.slug}`)}
              className="min-h-[44px] py-2 text-sm font-semibold text-[#F6F1E9]/85 hover:text-[#14B8A6] transition-colors inline-flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
            >
              <span>Clinical Details</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => navigate('/contact', { specialty: spec.name })}
              className="min-h-[44px] inline-flex items-center justify-center gap-1.5 px-5 py-2.5 bg-[#14B8A6] hover:bg-[#0F8F83] text-[#0F2A4A] text-xs font-semibold rounded-xl transition-colors shadow-2xs group/btn cursor-pointer whitespace-nowrap"
            >
              <span>Book Audit</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section id="who-we-serve" className="py-12 md:py-16 lg:py-24 bg-[#0F2A4A] text-[#F6F1E9] relative">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#14B8A6]/10 label-eyebrow text-[#14B8A6] border border-[#14B8A6]/20 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#14B8A6]" />
            <span>Specialty Focus</span>
          </div>

          <h2 className="text-[clamp(2rem,3.5vw,3rem)] leading-[1.18] tracking-[-0.01em] font-serif font-bold text-[#F6F1E9]">
            Built for Appointment-Led Clinics
          </h2>

          <p className="text-[#F6F1E9]/75 text-base sm:text-lg mt-4 leading-[1.6] max-w-[65ch] font-sans">
            Our growth systems are designed around how patients book, call and follow up in high-consideration clinics.
          </p>
        </div>

        {/* Unified Responsive Grid: 1 col mobile, 2 cols tablet (5th card full-width), 12-col desktop (3 + 2 balanced) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {siteConfig.specialties.map((spec, idx) =>
            renderSpecialtyCard(spec as SpecialtyCardData, idx)
          )}
        </div>

        {/* Global Closing Strip */}
        <div className="mt-12 p-6 sm:p-8 lg:p-10 rounded-3xl bg-white/[0.06] text-[#F6F1E9] flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6 shadow-xl border border-[#F6F1E9]/10">
          <div>
            <h4 className="text-xl sm:text-2xl font-serif font-bold text-[#F6F1E9] leading-[1.2] tracking-[-0.01em]">
              Don&apos;t See Your Clinical Specialty Listed?
            </h4>
            <p className="text-sm sm:text-base text-[#F6F1E9]/80 mt-2 max-w-[65ch] leading-[1.6] font-sans">
              We engineer custom patient acquisition and triage workflows for super-specialty surgical centers, pediatric practices, and cosmetic clinics.
            </p>
          </div>
          <button
            type="button"
            onClick={() => navigate('/contact')}
            className="w-full md:w-auto min-h-[48px] px-6 py-3.5 bg-[#14B8A6] hover:bg-[#0F8F83] text-[#0F2A4A] text-sm font-semibold rounded-xl shrink-0 transition-colors cursor-pointer shadow-md inline-flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <span>Request Custom Specialty Diagnostic</span>
            <ArrowRight className="w-4 h-4 text-[#0F2A4A]" />
          </button>
        </div>
      </div>
    </section>
  );
};


