import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const Preloader: React.FC<{ onComplete?: () => void }> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if user already saw the preloader in this session
    const hasSeen = sessionStorage.getItem('clinic_preloader_seen');
    if (hasSeen) {
      setIsVisible(false);
      if (onComplete) onComplete();
      return;
    }

    const timer = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem('clinic_preloader_seen', 'true');
      if (onComplete) onComplete();
    }, 1400);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0B1F3A] text-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
        >
          {/* Logo Brand Fade In */}
          <motion.div
            className="flex flex-col items-center gap-3"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#0E9F8E] animate-ping" />
              <h2 className="text-2xl sm:text-3xl font-serif tracking-tight text-white">
                Clinic Growth Helpers
              </h2>
            </div>
            <p className="text-xs uppercase tracking-widest text-[#0E9F8E] font-medium font-sans">
              Done-For-You Patient Growth
            </p>
          </motion.div>

          {/* Teal Line Drawing Across */}
          <div className="w-56 h-[2px] bg-slate-800 rounded-full mt-6 overflow-hidden relative">
            <motion.div
              className="h-full bg-[#0E9F8E]"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.1, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
