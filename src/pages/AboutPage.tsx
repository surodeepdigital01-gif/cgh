import React, { useState } from 'react';
import { useRouter } from '../router/Router.tsx';
import {
  ShieldCheck,
  HeartHandshake,
  Stethoscope,
  PhoneCall,
  CheckCircle2,
  Building,
  Users,
  Sparkles,
  Play,
  X,
  Linkedin,
  Instagram,
} from 'lucide-react';
import { FOUNDER, siteConfig } from '../config/siteConfig.ts';

export const AboutPage: React.FC = () => {
  const { navigate } = useRouter();
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 block mb-2">
              Our Mission &amp; Ethics
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
              About Clinic Growth Helpers
            </h1>
            <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed">
              We bridge the gap between world-class clinical care and modern patient communication for specialty clinics across India.
            </p>
          </div>
        </div>
      </section>

      {/* Origin Story & The Doctor's Reality */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
              Why We Started: The Reality of Indian Clinic Management
            </h2>
            <p className="text-base text-slate-700 leading-relaxed">
              In India’s tier-1 and tier-2 cities, the healthcare landscape has transformed. Patients no longer rely solely on physical proximity—they search Google, watch educational reels on Instagram, read doctor credentials, and expect instant communication over WhatsApp.
            </p>
            <p className="text-base text-slate-700 leading-relaxed">
              Meanwhile, clinic reception desks are under unprecedented strain. A single receptionist is tasked with greeting patients, billing consultations, organizing case files, answering physical desk questions, and simultaneously picking up a ringing landline and answering dozens of WhatsApp chats.
            </p>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <blockquote className="font-serif italic text-base sm:text-lg text-slate-900 leading-relaxed">
                &ldquo;When a patient with an urgent skin flare-up or toothache calls a clinic and gets a busy tone, they do not wait. They tap the next clinic listed on Google Maps. That is not a medical failure—it is a front-desk communication bottleneck.&rdquo;
              </blockquote>
            </div>
            <p className="text-base text-slate-700 leading-relaxed">
              We founded <strong>Clinic Growth Helpers</strong> with a singular mission: to eliminate that bottleneck through 24/7 AI call assistants, instant WhatsApp triage, and high-converting doctor web infrastructure.
            </p>
          </div>

          {/* Our Core Guiding Principles */}
          <div className="space-y-6 pt-6 border-t border-slate-100">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
              Our Core Principles
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm font-serif">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  <span>1. 100% Medical Ethics Compliance</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We strictly abide by National Medical Commission (NMC) regulations. We never fabricate reviews, never display sensationalist before-and-after surgical imagery, and never make unscientific clinical claims.
                </p>
              </div>

              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm font-serif">
                  <HeartHandshake className="w-5 h-5 text-emerald-600" />
                  <span>2. Front-Desk Enablement, Not Replacement</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Technology should support human empathy. Our systems handle repetitive triage and after-hours call rescue, empowering receptionists to deliver exceptional in-clinic hospitality to visiting patients.
                </p>
              </div>

              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm font-serif">
                  <Stethoscope className="w-5 h-5 text-emerald-600" />
                  <span>3. Dignified Patient Communication</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Patients seeking fertility, dermatology, or surgery care deserve respect and confidentiality. All conversational flows are written with empathy, clarity, and professionalism.
                </p>
              </div>

              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm font-serif">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>4. Transparent Clinical Attribution</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  No smoke and mirrors. Every month we review real consultation bookings, recovered missed calls, and patient inquiry channels directly with clinic directors.
                </p>
              </div>
            </div>
          </div>

          {/* Agency Background & Leadership Section */}
          <div className="space-y-6 pt-6 border-t border-slate-100">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
              Agency Background &amp; Leadership
            </h3>

            {/* Main Founder Card */}
            <div className="p-6 sm:p-8 bg-slate-50 rounded-3xl border border-slate-200/80 space-y-8 shadow-xs">
              
              {/* Two columns on desktop, stacked on mobile */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                
                {/* Left Column: Photo, Name, Title, Social buttons */}
                <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
                  {FOUNDER.photo && (
                    <div className="relative">
                      <img
                        src={FOUNDER.photo}
                        alt={FOUNDER.name}
                        className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl object-cover shadow-md border-2 border-white ring-1 ring-slate-200"
                      />
                    </div>
                  )}

                  <div className="space-y-1">
                    <h4 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
                      {FOUNDER.name}
                    </h4>
                    <p className="text-sm font-sans text-emerald-800 font-semibold">
                      {FOUNDER.title}
                    </p>
                  </div>

                  {/* LinkedIn & Instagram buttons (hidden if empty) */}
                  {(FOUNDER.linkedin || FOUNDER.instagram) && (
                    <div className="flex items-center gap-2 pt-1 flex-wrap justify-center md:justify-start">
                      {FOUNDER.linkedin && (
                        <a
                          href={FOUNDER.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-slate-300 text-slate-700 text-xs font-sans transition-colors shadow-2xs"
                        >
                          <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
                          <span>LinkedIn</span>
                        </a>
                      )}
                      {FOUNDER.instagram && (
                        <a
                          href={FOUNDER.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-slate-300 text-slate-700 text-xs font-sans transition-colors shadow-2xs"
                        >
                          <Instagram className="w-3.5 h-3.5 text-[#E4405F]" />
                          <span>Instagram</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>

                {/* Right Column: Heading, Bio, Credentials */}
                <div className="md:col-span-8 space-y-4">
                  <h4 className="text-lg sm:text-xl font-serif font-bold text-slate-900">
                    Meet the founder
                  </h4>

                  <div className="space-y-3 font-sans text-sm text-slate-600 leading-relaxed">
                    {FOUNDER.bio.map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>

                  {/* Optional credentials list (hidden if empty) */}
                  {FOUNDER.credentials && FOUNDER.credentials.length > 0 && (
                    <div className="pt-2 flex flex-wrap gap-2">
                      {FOUNDER.credentials.map((credential, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-sans font-medium"
                        >
                          {credential}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

              </div>

              {/* Below: "How I work with every clinic" Card with 4 items */}
              <div className="p-6 bg-emerald-50/50 rounded-2xl border border-emerald-200/80 space-y-4">
                <h5 className="font-serif font-bold text-base text-slate-900 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#0E9F8E]" />
                  <span>How I work with every clinic</span>
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-sans text-slate-700">
                  <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-emerald-100 shadow-2xs">
                    <span className="w-6 h-6 rounded-full bg-[#0E9F8E]/15 text-[#0A7F72] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      1
                    </span>
                    <span className="leading-snug">A baseline audit before we start.</span>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-emerald-100 shadow-2xs">
                    <span className="w-6 h-6 rounded-full bg-[#0E9F8E]/15 text-[#0A7F72] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      2
                    </span>
                    <span className="leading-snug">A written growth target agreed with you.</span>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-emerald-100 shadow-2xs">
                    <span className="w-6 h-6 rounded-full bg-[#0E9F8E]/15 text-[#0A7F72] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      3
                    </span>
                    <span className="leading-snug">A shared monthly dashboard.</span>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-emerald-100 shadow-2xs">
                    <span className="w-6 h-6 rounded-full bg-[#0E9F8E]/15 text-[#0A7F72] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      4
                    </span>
                    <span className="leading-snug">A monthly review call with the founder.</span>
                  </div>
                </div>
              </div>

              {/* Team line (hidden if empty) */}
              {FOUNDER.teamLine && (
                <div className="p-4 bg-white rounded-xl border border-slate-200 flex items-start sm:items-center gap-3 text-sm font-sans text-slate-700 shadow-2xs">
                  <Users className="w-5 h-5 text-[#0E9F8E] shrink-0 mt-0.5 sm:mt-0" />
                  <p className="leading-relaxed">
                    <strong className="text-slate-900 font-semibold">Team: </strong>
                    {FOUNDER.teamLine}
                  </p>
                </div>
              )}

              {/* Operational Office Block */}
              <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-2 shadow-2xs">
                <div className="flex items-center gap-2 text-slate-900 font-serif font-bold text-base">
                  <Building className="w-4 h-4 text-[#0E9F8E]" />
                  <span>Operational Office</span>
                </div>
                <p className="text-sm font-sans font-normal text-slate-800">
                  {siteConfig.brand.office}
                </p>
                <div className="text-xs font-sans font-normal text-slate-600 pt-1 space-y-1 sm:space-y-0 sm:flex sm:flex-wrap sm:gap-x-4 sm:items-center">
                  <div>
                    <span className="text-slate-500">Phone: </span>
                    <a href="tel:+917863977647" className="font-mono text-emerald-800 hover:underline">
                      +91 7863977647
                    </a>
                    <span className="text-slate-400 mx-1">/</span>
                    <a href="tel:+918293471447" className="font-mono text-emerald-800 hover:underline">
                      +91 8293471447
                    </a>
                  </div>
                  <div>
                    <span className="text-slate-500">WhatsApp: </span>
                    <a
                      href="https://wa.me/918293471447"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-emerald-800 hover:underline"
                    >
                      +91 8293471447
                    </a>
                  </div>
                  <div>
                    <span className="text-slate-500">Email: </span>
                    <a
                      href="mailto:hello@clinicgrowthhelpers.com"
                      className="font-sans text-emerald-800 hover:underline"
                    >
                      hello@clinicgrowthhelpers.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Two Buttons Under the Section */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => navigate('/contact')}
                  className="px-6 py-3.5 bg-[#0E9F8E] hover:bg-[#0A7F72] active:bg-[#086a5f] text-white font-semibold rounded-xl text-sm transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 shadow-sm"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Book a Call with the Founder</span>
                </button>

                {Boolean(FOUNDER.introVideoUrl) && (
                  <button
                    type="button"
                    onClick={() => setVideoModalOpen(true)}
                    className="px-6 py-3.5 bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 font-semibold rounded-xl text-sm transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 shadow-xs"
                  >
                    <Play className="w-4 h-4 text-[#0E9F8E]" />
                    <span>Watch the 60-second intro</span>
                  </button>
                )}
              </div>

            </div>
          </div>

          {/* Video Modal Player (if introVideoUrl is set) */}
          {videoModalOpen && FOUNDER.introVideoUrl && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs">
              <div className="bg-white rounded-2xl overflow-hidden max-w-2xl w-full shadow-2xl border border-slate-200">
                <div className="flex items-center justify-between p-4 border-b border-slate-100 bg-slate-50">
                  <h4 className="font-serif font-bold text-slate-900 text-sm">
                    60-Second Intro with Surodeep Oraon
                  </h4>
                  <button
                    onClick={() => setVideoModalOpen(false)}
                    className="text-slate-500 hover:text-slate-800 p-1 rounded-md cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="aspect-video w-full bg-black">
                  <iframe
                    src={FOUNDER.introVideoUrl}
                    title="Founder Intro"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          )}

          {/* CTA Box - Enhanced bottom padding & margin so floating buttons never cover CTA */}
          <div className="p-6 sm:p-8 pb-14 sm:pb-8 bg-slate-900 text-white rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6 mb-16 sm:mb-8">
            <div>
              <h3 className="font-serif font-bold text-xl text-white">
                Partner with Clinic Growth Helpers
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Let&apos;s build a reliable, ethical patient acquisition engine for your practice.
              </p>
            </div>
            <button
              type="button"
              onClick={() => navigate('/contact')}
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl text-xs transition-colors shrink-0 cursor-pointer flex items-center gap-2 relative z-10"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Book Strategy Call</span>
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};
