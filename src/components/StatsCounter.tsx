import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { siteConfig } from '../config/siteConfig.ts';
import { TrendingUp, ShieldCheck, Zap, PhoneCall } from 'lucide-react';

const CountUpNumber: React.FC<{
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}> = ({ target, prefix = '', suffix = '', duration = 1.8 }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeProgress * target);

      setDisplayValue(current);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      } else {
        setDisplayValue(target);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="font-mono tabular-nums font-bold">
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
};

export const StatsCounter: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-[#F6F1E9] text-[#0F2A4A] border-b border-[#0F2A4A]/10 relative overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-[#0F2A4A]/10">
          {siteConfig.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className={`flex flex-col justify-center text-center p-4 ${
                idx > 1 ? 'pt-6 lg:pt-4' : ''
              }`}
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F8F83] tracking-[-0.01em] mb-2">
                <CountUpNumber
                  target={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </div>

              <h4 className="text-base sm:text-lg font-serif font-bold text-[#0F2A4A] leading-[1.2] tracking-[-0.01em] mb-1.5">
                {stat.label}
              </h4>

              <p className="text-xs sm:text-sm text-[#0F2A4A]/75 max-w-[240px] mx-auto leading-[1.6] font-sans">
                {stat.subtext}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
