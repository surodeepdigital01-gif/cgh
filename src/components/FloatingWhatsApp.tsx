import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, ShieldCheck, PhoneCall, Sparkles } from 'lucide-react';
import { useRouter } from '../router/Router.tsx';
import { siteConfig } from '../config/siteConfig.ts';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [msg, setMsg] = useState('');
  const { navigate } = useRouter();

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
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end">
        {/* Expanded Quick Chat Window */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 15 }}
              className="mb-3 w-80 bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden"
            >
              <div className="bg-[#075E54] text-white p-4 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center font-bold text-white">
                    <MessageSquare className="w-5 h-5 text-emerald-100" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xs text-white">Clinic Growth Helpers</h4>
                    <p className="text-[10px] text-emerald-200 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      <span>WhatsApp Strategy Desk</span>
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white p-1 rounded-md cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="p-4 bg-slate-50 space-y-3 text-xs text-slate-700">
                <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs space-y-1">
                  <p className="font-semibold text-slate-900">Dr. / Practice Owner</p>
                  <p className="text-slate-600 leading-relaxed text-[11px]">
                    Losing prospective patients to missed calls during OPD hours or late evenings? Send us a quick inquiry here.
                  </p>
                  <p className="text-[10px] text-slate-400 font-mono pt-1">
                    Direct WhatsApp: <strong className="text-emerald-700">{siteConfig.brand.whatsapp}</strong>
                  </p>
                </div>

                <form onSubmit={handleSend} className="space-y-2">
                  <input
                    type="text"
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    placeholder="Type your clinic city or question..."
                    className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0E9F8E]"
                  />
                  <button
                    type="submit"
                    className="w-full py-2 px-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
                  >
                    <span>Start Chat on WhatsApp</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>

                <p className="text-[10px] text-slate-400 text-center flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-[#0E9F8E]" />
                  <span>100% Doctor Confidentiality</span>
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulse Ring WhatsApp Trigger Button */}
        <div className="relative">
          {/* Gentle Pulse Ring */}
          <span className="absolute -inset-1.5 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none" />

          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="relative px-3 py-2 sm:px-4 sm:py-3 bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1caa4f] text-white rounded-full shadow-xl flex items-center gap-1.5 sm:gap-2 cursor-pointer focus:outline-none"
            aria-label="Chat with Clinic Growth Helpers on WhatsApp"
          >
            <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 fill-current shrink-0" />
            <span className="text-[11px] sm:text-xs font-semibold whitespace-nowrap">
              {isOpen ? 'Close' : 'Chat with Us'}
            </span>
          </motion.button>
        </div>
      </div>
    </>
  );
};
