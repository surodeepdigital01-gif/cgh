import React from 'react';
import { motion } from 'motion/react';
import { Link, useRouter } from '../router/Router.tsx';
import { SPECIALTIES } from '../data/specialtiesData.ts';
import { ArrowRight, PhoneCall, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

export const SpecialtiesPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-[#0F2A4A] text-[#F6F1E9] pt-24 pb-12 md:pt-28 md:pb-16 lg:pt-32 lg:pb-24 relative overflow-hidden">
        {/* Soft atmospheric gradient */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#14B8A6]/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#14B8A6]/10 rounded-full blur-[130px]" />
        </div>

        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="label-eyebrow text-[#14B8A6] block mb-3">
              Clinical Specialization
            </span>
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-serif font-bold text-[#F6F1E9] tracking-[-0.01em] leading-[1.15]">
              Growth systems for appointment-led clinics
            </h1>
            <p className="text-[#F6F1E9]/80 text-base sm:text-lg mt-4 leading-[1.6] font-sans max-w-[65ch]">
              Our patient acquisition infrastructure is engineered around how patients discover, call, evaluate, and book high-consideration healthcare consultations. We build and operate the complete system so your doctors focus entirely on care.
            </p>
          </div>
        </div>
      </section>

      {/* Specialty Grid Section */}
      <section className="py-12 md:py-16 lg:py-24 bg-[#F6F1E9]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {SPECIALTIES.map((spec, idx) => (
              <motion.div
                key={spec.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.35, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="h-full"
              >
                <div className="h-full bg-white rounded-2xl p-6 sm:p-7 border border-[#0F2A4A]/10 shadow-xs hover:shadow-lg transition-[box-shadow,border-color] duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="label-eyebrow text-[#0F8F83] mb-3">
                      Specialty 0{idx + 1}
                    </div>

                    <h2 className="text-[1.5rem] font-serif font-bold text-[#0F2A4A] leading-[1.2] tracking-[-0.01em] mb-3 md:min-h-[3.6rem]">
                      <Link href={`/specialties/${spec.slug}`} className="focus:outline-none">
                        {spec.name}
                      </Link>
                    </h2>

                    <p className="text-[#0F2A4A]/75 text-base leading-[1.6] mb-6 font-sans max-w-[65ch]">
                      {spec.hubDescription}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#0F2A4A]/10 flex items-center justify-between gap-3 mt-auto">
                    <Link
                      href={`/specialties/${spec.slug}`}
                      className="min-h-[44px] text-sm font-semibold text-[#0F8F83] hover:text-[#0F2A4A] inline-flex items-center gap-1.5 transition-colors"
                    >
                      <span>Learn more</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <button
                      onClick={() => navigate('/contact', { specialty: spec.name })}
                      className="min-h-[44px] px-2 text-xs font-medium text-[#0F2A4A]/70 hover:text-[#0F2A4A] transition-colors cursor-pointer"
                    >
                      Book Audit
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Shared Quality Proof & Commitment Banner */}
      <section className="py-12 md:py-16 lg:py-24 bg-[#0F2A4A] text-[#F6F1E9] border-t border-[#F6F1E9]/10">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="bg-white/[0.07] border border-[#F6F1E9]/10 rounded-3xl p-8 sm:p-12 text-[#F6F1E9] relative overflow-hidden">
            <div className="max-w-2xl space-y-4 relative z-10">
              <span className="label-eyebrow text-[#14B8A6] block">
                Done-For-You Delivery
              </span>
              <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-serif font-bold text-[#F6F1E9] tracking-[-0.01em] leading-[1.18]">
                Not sure where your clinic leaks patient revenue?
              </h2>
              <p className="text-[#F6F1E9]/80 text-base sm:text-lg leading-[1.6] font-sans max-w-[65ch]">
                We run a complimentary 30-minute inquiry and missed-call audit for your specific practice. We test your response times and share a verified patient recovery roadmap.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  onClick={() => navigate('/contact')}
                  className="min-h-[48px] px-6 py-3.5 bg-[#14B8A6] hover:bg-[#0F8F83] text-[#0F2A4A] font-semibold rounded-xl text-sm transition-colors shadow-md inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Book Free Clinic Audit</span>
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
        </div>
      </section>
    </div>
  );
};
