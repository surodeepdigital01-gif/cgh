import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../config/siteConfig.ts';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [msg, setMsg] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const encoded = encodeURIComponent(
      msg.trim() || 'Hello Clinic Growth Helpers, I run a healthcare clinic in India and would like to learn more about your done-for-you patient growth system.'
    );
    window.open(`https://wa.me/918293471447?text=${encoded}`, '_blank');
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating WhatsApp Launcher */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
        {/* Expanded Quick Chat Window */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.2 }}
              className="mb-3 w-80 max-w-[calc(100vw-40px)] bg-white rounded-3xl shadow-2xl border border-[#0F2A4A]/10 overflow-hidden"
            >
              <div className="bg-[#0F2A4A] text-[#F6F1E9] p-4 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#14B8A6]/20 flex items-center justify-center font-bold text-[#14B8A6]">
                    <MessageSquare className="w-5 h-5 text-[#14B8A6]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xs text-[#F6F1E9]">Clinic Growth Helpers</h4>
                    <p className="text-[11px] text-[#14B8A6]">WhatsApp Strategy Desk</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="min-w-[44px] min-h-[44px] -mr-2 text-[#F6F1E9]/80 hover:text-[#F6F1E9] flex items-center justify-center rounded-lg cursor-pointer"
                  aria-label="Close WhatsApp widget"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="p-4 bg-[#F6F1E9] space-y-3 text-xs text-[#0F2A4A]">
                <div className="bg-white p-3 rounded-xl border border-[#0F2A4A]/10 shadow-2xs space-y-1">
                  <p className="font-semibold text-[#0F2A4A]">Dr. / Practice Owner</p>
                  <p className="text-[#0F2A4A]/70 leading-relaxed text-xs">
                    Losing prospective patients to missed calls during OPD hours or late evenings? Send us a quick inquiry here.
                  </p>
                  <p className="text-[11px] text-[#0F2A4A]/70 font-sans pt-1">
                    Direct WhatsApp: <strong className="text-[#0F2A4A]">{siteConfig.brand.whatsapp}</strong>
                  </p>
                </div>

                <form onSubmit={handleSend} className="space-y-2">
                  <input
                    type="text"
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    placeholder="Type your clinic city or question..."
                    className="w-full min-h-[44px] px-3 py-2 text-xs bg-white text-[#0F2A4A] border border-[#0F2A4A]/15 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#14B8A6] placeholder:text-[#0F2A4A]/40"
                  />
                  <button
                    type="submit"
                    className="w-full min-h-[44px] py-2.5 px-3 bg-[#14B8A6] hover:bg-[#0F8F83] text-[#0F2A4A] font-semibold rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-sm cursor-pointer transition-colors"
                  >
                    <span>Start Chat on WhatsApp</span>
                    <Send className="w-3.5 h-3.5 text-[#0F2A4A]" />
                  </button>
                </form>

                <p className="text-[11px] text-[#0F2A4A]/65 text-center flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#14B8A6]" />
                  <span>100% Doctor Confidentiality</span>
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Compact 56px Round Icon-Only Button with Hover Tooltip */}
        <div className="relative group">
          <span
            role="tooltip"
            className="pointer-events-none absolute right-[calc(100%+12px)] top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-[#0F2A4A] border border-[#F6F1E9]/15 px-3 py-1.5 text-xs font-sans font-semibold text-[#F6F1E9] shadow-lg opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100"
          >
            {isOpen ? 'Close' : 'Chat with Us'}
          </span>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-14 h-14 rounded-full bg-[#14B8A6] hover:bg-[#0F8F83] text-[#0F2A4A] shadow-[0_8px_24px_rgba(15,42,74,0.28)] flex items-center justify-center cursor-pointer transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#14B8A6]"
            aria-label="Chat with Us on WhatsApp"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-[#0F2A4A]" />
            ) : (
              <MessageSquare className="w-6 h-6 fill-current text-[#0F2A4A]" />
            )}
          </button>
        </div>
      </div>
    </>
  );
};
