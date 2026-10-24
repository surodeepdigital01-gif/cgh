import React, { useState } from 'react';
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

  const getPillarIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Globe className="w-5 h-5 text-[#0E9F8E]" />;
      case 1:
        return <MessageCircle className="w-5 h-5 text-[#0E9F8E]" />;
      case 2:
        return <Phone className="w-5 h-5 text-[#0E9F8E]" />;
      case 3:
        return <Video className="w-5 h-5 text-[#0E9F8E]" />;
      case 4:
        return <Layers className="w-5 h-5 text-[#0E9F8E]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#0E9F8E]" />;
    }
  };

  const otherSpecialties = SPECIALTIES.filter((s) => s.slug !== specialty.slug);

  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <section className="bg-[#0B1F3A] text-white pt-28 pb-16 sm:pt-36 sm:pb-24 relative overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#0E9F8E]/15 rounded-full blur-[130px]" />
          <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#0A7F72]/15 rounded-full blur-[140px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-5">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-300 font-sans">
              <Link href="/specialties" className="hover:underline text-slate-300">
                Specialties
              </Link>
              <span>/</span>
              <span>{specialty.shortName}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-[1.15]">
              {specialty.name}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-2xl">
              {specialty.heroSummary}
            </p>

            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={() => navigate('/contact', { specialty: specialty.name })}
                className="px-7 py-3.5 bg-[#0E9F8E] hover:bg-[#0A7F72] text-white font-semibold rounded-xl text-sm transition-all shadow-md inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Book Free Clinic Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                href="/growth-commitment"
                className="px-6 py-3.5 bg-white/10 hover:bg-white/15 text-white font-medium rounded-xl text-sm transition-all inline-flex items-center justify-center text-center"
              >
                6-Month Growth Commitment Policy
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Where clinics in this specialty lose patients online */}
      <section className="py-16 sm:py-24 bg-[#F7FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-rose-600 block mb-2 font-sans">
              Common Growth Bottlenecks
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0B1F3A] tracking-tight">
              Where clinics in this specialty lose patients online
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed font-sans">
              High-intent patients seeking care in this specialty face specific hesitations and friction points. When front desks operate without automated systems, valuable consultations drop off before they are scheduled.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {specialty.painPoints.map((point, idx) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs space-y-3"
              >
                <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center font-mono font-bold text-xs">
                  0{idx + 1}
                </div>
                <h3 className="font-serif font-bold text-lg text-[#0B1F3A]">
                  {point.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Our system for [Specialty] (5 Elements) */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0E9F8E] block mb-2 font-sans">
              Tailored Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0B1F3A] tracking-tight">
              Our system for {specialty.shortName}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed font-sans">
              Built specifically around how patients book and attend appointments for {specialty.shortName.toLowerCase()}. Every element is configured and managed end-to-end by our team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {specialty.systemElements.map((elem, idx) => (
              <motion.div
                key={elem.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-6 sm:p-7 rounded-2xl bg-[#F7FAFC] border border-slate-200/90 shadow-2xs space-y-3"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white rounded-lg border border-slate-200 shadow-2xs">
                    {getPillarIcon(idx)}
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">
                      Element 0{idx + 1}
                    </span>
                    <h3 className="font-serif font-bold text-lg text-[#0B1F3A]">
                      {elem.title}
                    </h3>
                  </div>
                </div>

                <p className="text-slate-700 text-xs sm:text-sm font-medium leading-relaxed font-sans">
                  {elem.description}
                </p>

                <p className="text-slate-600 text-xs leading-relaxed font-sans pt-2 border-t border-slate-200/60">
                  {elem.detail}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Sample Patient Journey (Labeled clearly as Illustrative) */}
      <section className="py-16 sm:py-24 bg-[#F7FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0E9F8E] mb-2 font-sans">
              <span>Patient Conversion Timeline</span>
              <span className="text-slate-400">·</span>
              <span className="text-slate-500 font-normal">Illustrative</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0B1F3A] tracking-tight">
              Sample patient journey
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed font-sans">
              Here is an illustrative walkthrough of how an online enquiry moves smoothly into a confirmed, attended clinical consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialty.journeySteps.map((step, idx) => (
              <div
                key={step.step}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-[#0E9F8E] bg-[#E6F7F5] px-2.5 py-1 rounded">
                      {step.step}
                    </span>
                    <span className="text-[11px] text-slate-400 font-sans">Illustrative</span>
                  </div>
                  <h3 className="font-serif font-bold text-base text-[#0B1F3A] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Short FAQ */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12 text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0E9F8E] block mb-2 font-sans">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0B1F3A] tracking-tight">
              Questions from {specialty.shortName} clinics
            </h2>
          </div>

          <div className="space-y-4">
            {specialty.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl border border-slate-200 bg-[#F7FAFC] overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <span className="font-serif font-bold text-base sm:text-lg text-[#0B1F3A]">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#0E9F8E]' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-slate-700 leading-relaxed font-sans border-t border-slate-200/60 pt-4"
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

      {/* 6. CTA Band */}
      <section className="py-16 sm:py-20 bg-[#0B1F3A] text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-300 block font-sans">
            Ready to Streamline Patient Inquiries?
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
            Book Free Clinic Audit
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto font-sans leading-relaxed">
            We will review your clinic’s response speed, phone leakage, and patient intake workflows for {specialty.shortName.toLowerCase()}. Scoped with zero obligation.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              type="button"
              onClick={() => navigate('/contact', { specialty: specialty.name })}
              className="px-8 py-4 bg-[#0E9F8E] hover:bg-[#0A7F72] text-white font-semibold rounded-xl text-sm transition-all shadow-lg inline-flex items-center gap-2 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Book Free Clinic Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              href="/specialties"
              className="px-6 py-4 bg-white/10 hover:bg-white/15 text-white font-medium rounded-xl text-sm transition-all inline-flex items-center justify-center"
            >
              Explore all 5 specialties
            </Link>
          </div>
        </div>
      </section>

      {/* Other Specialties Nav Strip */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <h3 className="font-serif font-bold text-lg text-[#0B1F3A]">
              Explore other clinical specialties
            </h3>
            <Link href="/specialties" className="text-xs font-semibold text-[#0E9F8E] hover:underline">
              View all 5 specialties →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherSpecialties.map((other) => (
              <Link
                key={other.slug}
                href={`/specialties/${other.slug}`}
                className="p-4 rounded-xl border border-slate-200 hover:border-[#0E9F8E] hover:bg-[#F7FAFC] transition-all block group"
              >
                <div className="text-[11px] text-slate-400 font-sans mb-1">Specialty</div>
                <div className="font-serif font-bold text-sm text-[#0B1F3A] group-hover:text-[#0E9F8E] transition-colors">
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
