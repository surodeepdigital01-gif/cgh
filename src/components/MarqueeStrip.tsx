import React from 'react';
import { siteConfig } from '../config/siteConfig.ts';
import { Sparkles } from 'lucide-react';

export const MarqueeStrip: React.FC = () => {
  const items = siteConfig.marqueeItems;

  return (
    <div className="bg-[#08172c] border-y border-slate-800/80 py-3.5 overflow-hidden select-none">
      <div className="animate-marquee flex items-center whitespace-nowrap">
        {/* Double array to loop seamlessly */}
        {[...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-6 mx-4">
            <span className="text-xs sm:text-sm font-medium tracking-wide text-slate-300 hover:text-white transition-colors">
              {item}
            </span>
            <Sparkles className="w-3.5 h-3.5 text-[#0E9F8E] shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
};
