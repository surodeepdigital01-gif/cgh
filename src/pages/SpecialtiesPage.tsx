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
      <section className="bg-[#0B1F3A] text-white pt-28 pb-16 sm:pt-36 sm:pb-24 relative overflow-hidden">
        {/* Soft atmospheric gradient */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#0E9F8E]/15 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0A7F72]/15 rounded-full blur-[130px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-300 block mb-3 font-sans">
              Clinical Specialization
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-[1.15]">
              Growth systems for appointment-led clinics
            </h1>
            <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed font-sans max-w-2xl">
              Our patient acquisition infrastructure is engineered around how patients discover, call, evaluate, and book high-consideration healthcare consultations. We build and operate the complete system so your doctors focus entirely on care.
            </p>
          </div>
        </div>
      </section>

      {/* Specialty Grid Section */}
      <section className="py-16 sm:py-24 bg-[#F7FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SPECIALTIES.map((spec, idx) => (
              <motion.div
                key={spec.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="text-xs font-semibold text-[#0E9F8E] tracking-wider uppercase mb-3 font-sans">
                    Specialty 0{idx + 1}
                  </div>

                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0B1F3A] mb-3 group-hover:text-[#0E9F8E] transition-colors">
                    <Link href={`/specialties/${spec.slug}`} className="focus:outline-none">
                      {spec.name}
                    </Link>
                  </h2>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6 font-sans">
                    {spec.hubDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/specialties/${spec.slug}`}
                    className="text-sm font-semibold text-[#0E9F8E] hover:text-[#0A7F72] inline-flex items-center gap-1.5 transition-colors group-hover:translate-x-0.5"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <button
                    onClick={() => navigate('/contact', { specialty: spec.name })}
                    className="text-xs font-medium text-slate-500 hover:text-slate-800 transition-colors"
                  >
                    Book Audit
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Shared Quality Proof & Commitment Banner */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0B1F3A] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden">
            <div className="max-w-2xl space-y-4 relative z-10">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-300 block font-sans">
                Done-For-You Delivery
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                Not sure where your clinic leaks patient revenue?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
                We run a complimentary 30-minute inquiry and missed-call audit for your specific practice. We test your response times and share a verified patient recovery roadmap.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  onClick={() => navigate('/contact')}
                  className="px-6 py-3.5 bg-[#0E9F8E] hover:bg-[#0A7F72] text-white font-semibold rounded-xl text-sm transition-all shadow-md inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Book Free Clinic Audit</span>
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
        </div>
      </section>
    </div>
  );
};
