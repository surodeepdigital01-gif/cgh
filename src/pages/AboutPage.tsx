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
      <section className="bg-[#0F2A4A] text-[#F6F1E9] py-16 sm:py-20 border-b border-[#F6F1E9]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#14B8A6] block mb-2">
              Our Mission &amp; Ethics
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#F6F1E9] tracking-tight">
              About Clinic Growth Helpers
            </h1>
            <p className="text-[#F6F1E9]/70 text-base sm:text-lg mt-4 leading-relaxed">
              We bridge the gap between world-class clinical care and modern patient communication for specialty clinics across India.
            </p>
          </div>
        </div>
      </section>

      {/* Origin Story & The Doctor's Reality */}
      <section className="py-20 bg-[#F6F1E9] text-[#0F2A4A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0F2A4A]">
              Why We Started: The Reality of Indian Clinic Management
            </h2>
            <p className="text-base text-[#0F2A4A]/80 leading-relaxed">
              In India’s tier-1 and tier-2 cities, the healthcare landscape has transformed. Patients no longer rely solely on physical proximity—they search Google, watch educational reels on Instagram, read doctor credentials, and expect instant communication over WhatsApp.
            </p>
            <p className="text-base text-[#0F2A4A]/80 leading-relaxed">
              Meanwhile, clinic reception desks are under unprecedented strain. A single receptionist is tasked with greeting patients, billing consultations, organizing case files, answering physical desk questions, and simultaneously picking up a ringing landline and answering dozens of WhatsApp chats.
            </p>
            <div className="p-6 bg-white rounded-2xl border border-[#0F2A4A]/10 shadow-xs">
              <blockquote className="font-serif italic text-base sm:text-lg text-[#0F2A4A] leading-relaxed">
                &ldquo;When a patient with an urgent skin flare-up or toothache calls a clinic and gets a busy tone, they do not wait. They tap the next clinic listed on Google Maps. That is not a medical failure—it is a front-desk communication bottleneck.&rdquo;
              </blockquote>
            </div>
            <p className="text-base text-[#0F2A4A]/80 leading-relaxed">
              We founded <strong>Clinic Growth Helpers</strong> with a singular mission: to eliminate that bottleneck through 24/7 AI call assistants, instant WhatsApp triage, and high-converting doctor web infrastructure.
            </p>
          </div>

          {/* Our Core Guiding Principles */}
          <div className="space-y-6 pt-6 border-t border-[#0F2A4A]/10">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0F2A4A]">
              Our Core Principles
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-white rounded-2xl border border-[#0F2A4A]/10 space-y-2 shadow-xs">
                <div className="flex items-center gap-2 text-[#0F2A4A] font-bold text-sm font-serif">
                  <ShieldCheck className="w-5 h-5 text-[#14B8A6]" />
                  <span>1. 100% Medical Ethics Compliance</span>
                </div>
                <p className="text-xs text-[#0F2A4A]/70 leading-relaxed">
                  We strictly abide by National Medical Commission (NMC) regulations. We never fabricate reviews, never display sensationalist before-and-after surgical imagery, and never make unscientific clinical claims.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-[#0F2A4A]/10 space-y-2 shadow-xs">
                <div className="flex items-center gap-2 text-[#0F2A4A] font-bold text-sm font-serif">
                  <HeartHandshake className="w-5 h-5 text-[#14B8A6]" />
                  <span>2. Front-Desk Enablement, Not Replacement</span>
                </div>
                <p className="text-xs text-[#0F2A4A]/70 leading-relaxed">
                  Technology should support human empathy. Our systems handle repetitive triage and after-hours call rescue, empowering receptionists to deliver exceptional in-clinic hospitality to visiting patients.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-[#0F2A4A]/10 space-y-2 shadow-xs">
                <div className="flex items-center gap-2 text-[#0F2A4A] font-bold text-sm font-serif">
                  <Stethoscope className="w-5 h-5 text-[#14B8A6]" />
                  <span>3. Dignified Patient Communication</span>
                </div>
                <p className="text-xs text-[#0F2A4A]/70 leading-relaxed">
                  Patients seeking fertility, dermatology, or surgery care deserve respect and confidentiality. All conversational flows are written with empathy, clarity, and professionalism.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-[#0F2A4A]/10 space-y-2 shadow-xs">
                <div className="flex items-center gap-2 text-[#0F2A4A] font-bold text-sm font-serif">
                  <CheckCircle2 className="w-5 h-5 text-[#14B8A6]" />
                  <span>4. Transparent Clinical Attribution</span>
                </div>
                <p className="text-xs text-[#0F2A4A]/70 leading-relaxed">
                  No smoke and mirrors. Every month we review real consultation bookings, recovered missed calls, and patient inquiry channels directly with clinic directors.
                </p>
              </div>
            </div>
          </div>

          {/* Agency Background & Leadership Section */}
          <div className="space-y-6 pt-6 border-t border-[#0F2A4A]/10">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0F2A4A]">
              Agency Background &amp; Leadership
            </h3>

            {/* Main Founder Card */}
            <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#0F2A4A]/10 space-y-8 shadow-xs">
              
              {/* Two columns on desktop, stacked on mobile */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                
                {/* Left Column: Photo, Name, Title, Social buttons */}
                <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
                  {FOUNDER.photo && (
                    <div className="relative">
                      <img
                        src={FOUNDER.photo}
                        alt={FOUNDER.name}
                        className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl object-cover shadow-md border-2 border-white ring-1 ring-[#0F2A4A]/10"
                      />
                    </div>
                  )}

                  <div className="space-y-1">
                    <h4 className="text-xl sm:text-2xl font-serif font-bold text-[#0F2A4A]">
                      {FOUNDER.name}
                    </h4>
                    <p className="text-sm font-sans text-[#0F8F83] font-semibold">
                      {FOUNDER.title}
                    </p>
                  </div>

                  {/* LinkedIn & Instagram buttons */}
                  {(FOUNDER.linkedin || FOUNDER.instagram) && (
                    <div className="flex items-center gap-2 pt-1 flex-wrap justify-center md:justify-start">
                      {FOUNDER.linkedin && (
                        <a
                          href={FOUNDER.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F6F1E9] border border-[#0F2A4A]/10 hover:border-[#0F2A4A]/20 text-[#0F2A4A] text-xs font-sans transition-colors shadow-2xs"
                        >
                          <Linkedin className="w-3.5 h-3.5 text-[#0F2A4A]" />
                          <span>LinkedIn</span>
                        </a>
                      )}
                      {FOUNDER.instagram && (
                        <a
                          href={FOUNDER.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F6F1E9] border border-[#0F2A4A]/10 hover:border-[#0F2A4A]/20 text-[#0F2A4A] text-xs font-sans transition-colors shadow-2xs"
                        >
                          <Instagram className="w-3.5 h-3.5 text-[#0F2A4A]" />
                          <span>Instagram</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>

                {/* Right Column: Heading, Bio, Credentials */}
                <div className="md:col-span-8 space-y-4">
                  <h4 className="text-lg sm:text-xl font-serif font-bold text-[#0F2A4A]">
                    Meet the founder
                  </h4>

                  <div className="space-y-3 font-sans text-sm text-[#0F2A4A]/70 leading-relaxed">
                    {FOUNDER.bio.map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>

                  {/* Optional credentials list */}
                  {FOUNDER.credentials && FOUNDER.credentials.length > 0 && (
                    <div className="pt-2 flex flex-wrap gap-2">
                      {FOUNDER.credentials.map((credential, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full bg-[#14B8A6]/10 text-[#0F2A4A] border border-[#14B8A6]/20 text-xs font-sans font-medium"
                        >
                          {credential}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

              </div>

              {/* Below: "How I work with every clinic" Card with 4 items */}
              <div className="p-6 bg-[#F6F1E9] rounded-2xl border border-[#0F2A4A]/10 space-y-4">
                <h5 className="font-serif font-bold text-base text-[#0F2A4A] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#14B8A6]" />
                  <span>How I work with every clinic</span>
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-sans text-[#0F2A4A]/80">
                  <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-[#0F2A4A]/10 shadow-2xs">
                    <span className="w-6 h-6 rounded-full bg-[#14B8A6]/15 text-[#0F2A4A] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      1
                    </span>
                    <span className="leading-snug">A baseline audit before we start.</span>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-[#0F2A4A]/10 shadow-2xs">
                    <span className="w-6 h-6 rounded-full bg-[#14B8A6]/15 text-[#0F2A4A] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      2
                    </span>
                    <span className="leading-snug">A written growth target agreed with you.</span>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-[#0F2A4A]/10 shadow-2xs">
                    <span className="w-6 h-6 rounded-full bg-[#14B8A6]/15 text-[#0F2A4A] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      3
                    </span>
                    <span className="leading-snug">A shared monthly dashboard.</span>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-[#0F2A4A]/10 shadow-2xs">
                    <span className="w-6 h-6 rounded-full bg-[#14B8A6]/15 text-[#0F2A4A] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      4
                    </span>
                    <span className="leading-snug">A monthly review call with the founder.</span>
                  </div>
                </div>
              </div>

              {/* Team line */}
              {FOUNDER.teamLine && (
                <div className="p-4 bg-white rounded-xl border border-[#0F2A4A]/10 flex items-start sm:items-center gap-3 text-sm font-sans text-[#0F2A4A]/80 shadow-2xs">
                  <Users className="w-5 h-5 text-[#14B8A6] shrink-0 mt-0.5 sm:mt-0" />
                  <p className="leading-relaxed">
                    <strong className="text-[#0F2A4A] font-semibold">Team: </strong>
                    {FOUNDER.teamLine}
                  </p>
                </div>
              )}

              {/* Operational Hubs Block */}
              <div className="p-5 bg-white rounded-2xl border border-[#0F2A4A]/10 space-y-2 shadow-2xs">
                <div className="flex items-center gap-2 text-[#0F2A4A] font-serif font-bold text-base">
                  <Building className="w-4 h-4 text-[#14B8A6]" />
                  <span>Remote Operations</span>
                </div>
                <p className="text-sm font-sans font-normal text-[#0F2A4A]">
                  {siteConfig.brand.office}
                </p>
                <div className="text-xs font-sans font-normal text-[#0F2A4A]/70 pt-1 space-y-1 sm:space-y-0 sm:flex sm:flex-wrap sm:gap-x-4 sm:items-center">
                  <div>
                    <span className="text-[#0F2A4A]/50">Phone: </span>
                    <a href="tel:+917863977647" className="font-mono text-[#0F8F83] hover:underline">
                      +91 7863977647
                    </a>
                    <span className="text-[#0F2A4A]/40 mx-1">/</span>
                    <a href="tel:+918293471447" className="font-mono text-[#0F8F83] hover:underline">
                      +91 8293471447
                    </a>
                  </div>
                  <div>
                    <span className="text-[#0F2A4A]/50">WhatsApp: </span>
                    <a
                      href="https://wa.me/918293471447"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[#0F8F83] hover:underline"
                    >
                      +91 8293471447
                    </a>
                  </div>
                  <div>
                    <span className="text-[#0F2A4A]/50">Email: </span>
                    <a
                      href="mailto:hello@clinicgrowthhelpers.com"
                      className="font-sans text-[#0F8F83] hover:underline"
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
                  className="px-6 py-3.5 bg-[#14B8A6] hover:bg-[#0F8F83] text-[#0F2A4A] font-semibold rounded-xl text-sm transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 shadow-sm"
                >
                  <PhoneCall className="w-4 h-4 text-[#0F2A4A]" />
                  <span>Book a Call with the Founder</span>
                </button>

                {Boolean(FOUNDER.introVideoUrl) && (
                  <button
                    type="button"
                    onClick={() => setVideoModalOpen(true)}
                    className="px-6 py-3.5 bg-transparent hover:bg-[#0F2A4A]/5 border border-[#0F2A4A]/20 text-[#0F2A4A] font-semibold rounded-xl text-sm transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Play className="w-4 h-4 text-[#14B8A6]" />
                    <span>Watch the 60-second intro</span>
                  </button>
                )}
              </div>

            </div>
          </div>

          {/* Video Modal Player */}
          {videoModalOpen && FOUNDER.introVideoUrl && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F2A4A]/80 backdrop-blur-xs">
              <div className="bg-white rounded-2xl overflow-hidden max-w-2xl w-full shadow-2xl border border-[#0F2A4A]/10">
                <div className="flex items-center justify-between p-4 border-b border-[#0F2A4A]/10 bg-[#F6F1E9]">
                  <h4 className="font-serif font-bold text-[#0F2A4A] text-sm">
                    60-Second Intro with Surodeep Oraon
                  </h4>
                  <button
                    onClick={() => setVideoModalOpen(false)}
                    className="text-[#0F2A4A]/60 hover:text-[#0F2A4A] p-1 rounded-md cursor-pointer"
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

          {/* CTA Box */}
          <div className="p-6 sm:p-8 pb-14 sm:pb-8 bg-[#0F2A4A] text-[#F6F1E9] border border-[#F6F1E9]/10 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6 mb-16 sm:mb-8">
            <div>
              <h3 className="font-serif font-bold text-xl text-[#F6F1E9]">
                Partner with Clinic Growth Helpers
              </h3>
              <p className="text-xs text-[#F6F1E9]/70 mt-1">
                Let&apos;s build a reliable, ethical patient acquisition engine for your practice.
              </p>
            </div>
            <button
              type="button"
              onClick={() => navigate('/contact')}
              className="px-6 py-3 bg-[#14B8A6] hover:bg-[#0F8F83] text-[#0F2A4A] font-semibold rounded-xl text-xs transition-colors shrink-0 cursor-pointer flex items-center gap-2 relative z-10"
            >
              <PhoneCall className="w-4 h-4 text-[#0F2A4A]" />
              <span>Book Strategy Call</span>
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};
