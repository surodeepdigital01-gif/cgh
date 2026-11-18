import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useRouter, Link } from '../router/Router.tsx';
import { SPECIALTIES } from '../data/specialtiesData.ts';
import { SpecialtyInfo } from '../types/index.ts';
import {
  PhoneCall,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ChevronDown,
  Globe,
  MessageCircle,
  Phone,
  Video,
  Layers,
  Sparkles,
} from 'lucide-react';

interface SpecialtyDetailPageProps {
  slug?: string;
}

export const SpecialtyDetailPage: React.FC<SpecialtyDetailPageProps> = ({ slug: propSlug }) => {
  const { currentPath, navigate } = useRouter();

  // Extract slug from prop or currentPath
  const currentSlug = propSlug || currentPath.replace('/specialties/', '').replace(/^\//, '');
  const specialty: SpecialtyInfo | undefined =
    SPECIALTIES.find((s) => s.slug === currentSlug) || SPECIALTIES[3]; // Fallback to dermatology if not found

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    setOpenFaq(0);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [currentSlug]);

  const getPillarIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Globe className="w-5 h-5 text-[#14B8A6]" />;
      case 1:
        return <MessageCircle className="w-5 h-5 text-[#14B8A6]" />;
      case 2:
        return <Phone className="w-5 h-5 text-[#14B8A6]" />;
      case 3:
        return <Video className="w-5 h-5 text-[#14B8A6]" />;
      case 4:
        return <Layers className="w-5 h-5 text-[#14B8A6]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#14B8A6]" />;
    }
  };

  const otherSpecialties = SPECIALTIES.filter((s) => s.slug !== specialty.slug);

  return (
    <div className="w-full">
      {/* 1. Hero Section (Navy) */}
      <section className="bg-[#0F2A4A] text-[#F6F1E9] pt-24 pb-12 md:pt-28 md:pb-16 lg:pt-32 lg:pb-24 relative overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#14B8A6]/10 rounded-full blur-[130px]" />
          <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#14B8A6]/10 rounded-full blur-[140px]" />
        </div>

        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-5">
            <div className="flex items-center gap-2 label-eyebrow text-[#14B8A6]">
              <Link href="/specialties" className="hover:underline text-[#F6F1E9]/75 min-h-[44px] inline-flex items-center">
                Specialties
              </Link>
              <span>/</span>
              <span>{specialty.shortName}</span>
            </div>

            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-serif font-bold text-[#F6F1E9] tracking-[-0.01em] leading-[1.15]">
              {specialty.name}
            </h1>

            <p className="text-base sm:text-lg text-[#F6F1E9]/80 leading-[1.6] font-sans max-w-[65ch]">
              {specialty.heroSummary}
            </p>

            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={() => navigate('/contact', { specialty: specialty.name })}
                className="min-h-[48px] px-7 py-3.5 bg-[#14B8A6] hover:bg-[#0F8F83] text-[#0F2A4A] font-semibold rounded-xl text-sm transition-colors shadow-md inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Book Free Clinic Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                href="/growth-commitment"
                className="min-h-[48px] px-6 py-3.5 bg-white/[0.07] hover:bg-white/[0.12] text-[#F6F1E9] border border-[#F6F1E9]/15 font-medium rounded-xl text-sm transition-colors inline-flex items-center justify-center text-center"
              >
                6-Month Growth Commitment Policy
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Where clinics in this specialty lose patients online (Cream) */}
      <section className="py-12 md:py-16 lg:py-24 bg-[#F6F1E9] border-b border-[#0F2A4A]/10">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="inline-block label-eyebrow text-[#0F2A4A] bg-[#14B8A6]/10 px-3 py-1 rounded-full mb-3">
              Common Growth Bottlenecks
            </span>
            <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-serif font-bold text-[#0F2A4A] tracking-[-0.01em] leading-[1.18]">
              Where clinics in this specialty lose patients online
            </h2>
            <p className="text-[#0F2A4A]/75 text-base sm:text-lg mt-3 leading-[1.6] font-sans max-w-[65ch]">
              High-intent patients seeking care in this specialty face specific hesitations and friction points. When front desks operate without automated systems, valuable consultations drop off before they are scheduled.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {specialty.painPoints.map((point, idx) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.35, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="h-full"
              >
                <div className="h-full bg-white rounded-2xl p-6 sm:p-7 border border-[#0F2A4A]/10 shadow-xs hover:shadow-lg transition-[box-shadow,border-color] duration-300 flex flex-col space-y-3">
                  <div className="w-8 h-8 rounded-lg bg-[#14B8A6]/10 text-[#0F2A4A] flex items-center justify-center font-sans font-bold text-xs">
                    0{idx + 1}
                  </div>
                  <h3 className="font-serif font-bold text-[1.5rem] leading-[1.2] tracking-[-0.01em] text-[#0F2A4A]">
                    {point.title}
                  </h3>
                  <p className="text-[#0F2A4A]/75 text-base leading-[1.6] font-sans max-w-[65ch]">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Our system for [Specialty] (5 Elements) (Navy) */}
      <section className="py-12 md:py-16 lg:py-24 bg-[#0F2A4A] text-[#F6F1E9] border-b border-[#F6F1E9]/10">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="label-eyebrow text-[#14B8A6] block mb-2">
              Tailored Architecture
            </span>
            <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-serif font-bold text-[#F6F1E9] tracking-[-0.01em] leading-[1.18]">
              Our system for {specialty.shortName}
            </h2>
            <p className="text-[#F6F1E9]/75 text-base sm:text-lg mt-3 leading-[1.6] font-sans max-w-[65ch]">
              Built specifically around how patients book and attend appointments for {specialty.shortName.toLowerCase()}. Every element is configured and managed end-to-end by our team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {specialty.systemElements.map((elem, idx) => (
              <motion.div
                key={elem.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.35, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="h-full"
              >
                <div className="h-full p-6 sm:p-7 rounded-2xl bg-white/[0.07] border border-[#F6F1E9]/10 shadow-2xs hover:shadow-xl hover:border-[#14B8A6]/40 transition-[box-shadow,border-color] duration-300 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-[#0F2A4A] rounded-lg border border-[#F6F1E9]/15 shadow-2xs shrink-0">
                        {getPillarIcon(idx)}
                      </div>
                      <div>
                        <span className="label-eyebrow text-[#F6F1E9]/65 block mb-1">
                          Element 0{idx + 1}
                        </span>
                        <h3 className="font-serif font-bold text-[1.5rem] leading-[1.2] tracking-[-0.01em] text-[#F6F1E9]">
                          {elem.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-[#F6F1E9]/90 text-base font-medium leading-[1.6] font-sans max-w-[65ch]">
                      {elem.description}
                    </p>
                  </div>

                  <p className="text-[#F6F1E9]/70 text-sm leading-[1.6] font-sans pt-3 border-t border-[#F6F1E9]/10 mt-auto">
                    {elem.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Sample Patient Journey (Cream) */}
      <section className="py-12 md:py-16 lg:py-24 bg-[#F6F1E9] border-b border-[#0F2A4A]/10">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 label-eyebrow text-[#0F8F83] mb-2">
              <span>Patient Conversion Timeline</span>
              <span className="text-[#0F2A4A]/30">·</span>
              <span className="text-[#0F2A4A]/60 font-medium">Illustrative</span>
            </div>
            <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-serif font-bold text-[#0F2A4A] tracking-[-0.01em] leading-[1.18]">
              Sample patient journey
            </h2>
            <p className="text-[#0F2A4A]/75 text-base sm:text-lg mt-3 leading-[1.6] font-sans max-w-[65ch]">
              Here is an illustrative walkthrough of how an online enquiry moves smoothly into a confirmed, attended clinical consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {specialty.journeySteps.map((step) => (
              <div
                key={step.step}
                className="h-full bg-white rounded-2xl p-6 border border-[#0F2A4A]/10 shadow-xs relative flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="label-eyebrow text-[#0F2A4A] bg-[#14B8A6]/20 px-2.5 py-1 rounded">
                    {step.step}
                  </span>
                  <span className="text-xs text-[#0F2A4A]/55 font-sans">Illustrative</span>
                </div>
                <h3 className="font-serif font-bold text-lg leading-[1.2] tracking-[-0.01em] text-[#0F2A4A] mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-[#0F2A4A]/75 leading-[1.6] font-sans">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Short FAQ (Navy) */}
      <section className="py-12 md:py-16 lg:py-24 bg-[#0F2A4A] text-[#F6F1E9] border-b border-[#F6F1E9]/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="label-eyebrow text-[#14B8A6] block mb-2">
              Frequently Asked Questions
            </span>
            <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-serif font-bold text-[#F6F1E9] tracking-[-0.01em] leading-[1.18]">
              Questions from {specialty.shortName} clinics
            </h2>
          </div>

          <div className="space-y-4">
            {specialty.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.q}
                  className={`rounded-2xl border transition-colors overflow-hidden ${
                    isOpen
                      ? 'border-2 border-[#14B8A6] bg-white/[0.08]'
                      : 'border-[#F6F1E9]/10 bg-white/[0.05]'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full min-h-[56px] p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <span className="font-serif font-bold text-base sm:text-lg leading-[1.3] text-[#F6F1E9]">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#F6F1E9]/60 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#14B8A6]' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="px-5 pb-6 sm:px-6 text-base text-[#F6F1E9]/80 leading-[1.6] font-sans border-t border-[#F6F1E9]/10 pt-4"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. CTA Band (Cream) */}
      <section className="py-12 md:py-16 lg:py-24 bg-[#F6F1E9] text-center relative overflow-hidden border-b border-[#0F2A4A]/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-6 relative z-10">
          <span className="label-eyebrow text-[#0F8F83] block">
            Ready to Streamline Patient Inquiries?
          </span>
          <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-serif font-bold text-[#0F2A4A] tracking-[-0.01em] leading-[1.18]">
            Book Free Clinic Audit
          </h2>
          <p className="text-[#0F2A4A]/75 text-base sm:text-lg max-w-[65ch] mx-auto font-sans leading-[1.6]">
            We will review your clinic’s response speed, phone leakage, and patient intake workflows for {specialty.shortName.toLowerCase()}. Scoped with zero obligation.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              type="button"
              onClick={() => navigate('/contact', { specialty: specialty.name })}
              className="min-h-[48px] px-8 py-3.5 bg-[#14B8A6] hover:bg-[#0F8F83] text-[#0F2A4A] font-semibold rounded-xl text-sm transition-colors shadow-md inline-flex items-center gap-2 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Book Free Clinic Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              href="/specialties"
              className="min-h-[48px] px-6 py-3.5 bg-white text-[#0F2A4A] border border-[#0F2A4A]/15 hover:border-[#14B8A6] font-medium rounded-xl text-sm transition-colors inline-flex items-center justify-center"
            >
              Explore all 5 specialties
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Other Specialties Nav Strip (Navy) */}
      <section className="py-12 md:py-16 bg-[#0F2A4A] text-[#F6F1E9] border-t border-[#F6F1E9]/10">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <h3 className="font-serif font-bold text-lg text-[#F6F1E9] tracking-[-0.01em]">
              Explore other clinical specialties
            </h3>
            <Link href="/specialties" className="min-h-[44px] inline-flex items-center text-xs font-semibold text-[#14B8A6] hover:underline">
              View all 5 specialties →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
            {otherSpecialties.map((other) => (
              <Link
                key={other.slug}
                href={`/specialties/${other.slug}`}
                className="min-h-[44px] p-4 rounded-xl border border-[#F6F1E9]/10 hover:border-[#14B8A6] bg-white/[0.05] hover:bg-white/[0.08] transition-colors flex flex-col justify-between group"
              >
                <div className="label-eyebrow text-[#F6F1E9]/55 mb-1">Specialty</div>
                <div className="font-serif font-bold text-sm text-[#F6F1E9] transition-colors">
                  {other.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
