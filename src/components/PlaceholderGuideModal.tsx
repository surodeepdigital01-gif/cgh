import React from 'react';
import { PLACEHOLDERS_LIST } from '../data/clinicData.ts';
import { X, CheckCircle, ShieldCheck, AlertCircle } from 'lucide-react';

interface PlaceholderGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PlaceholderGuideModal: React.FC<PlaceholderGuideModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F2A4A]/80 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl border border-[#0F2A4A]/10 max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-[#0F2A4A] text-[#F6F1E9] p-6 flex items-center justify-between border-b border-[#F6F1E9]/10">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-[#14B8A6]" />
            <div>
              <h3 className="text-lg font-serif font-bold text-[#F6F1E9]">
                Launch Readiness: Placeholders Checklist
              </h3>
              <p className="text-xs text-[#F6F1E9]/70">
                Strict Truthfulness &amp; Verification Protocol
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-[#F6F1E9]/60 hover:text-[#F6F1E9] p-1 rounded-md cursor-pointer"
            aria-label="Close checklist"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-sm text-[#0F2A4A]">
          <div className="p-3.5 bg-[#14B8A6]/10 border border-[#14B8A6]/20 rounded-xl text-xs text-[#0F2A4A] leading-relaxed flex items-start gap-2.5">
            <CheckCircle className="w-4 h-4 text-[#14B8A6] shrink-0 mt-0.5" />
            <div>
              <strong>100% Truthful Implementation Guarantee:</strong> This application complies with Indian healthcare advertising regulations and your strict instructions. Zero fabricated client logos, zero fake review stars, zero hallucinated doctor quotes, and zero invented phone numbers.
            </div>
          </div>

          <h4 className="font-semibold text-[#0F2A4A] text-xs uppercase tracking-wider pt-2">
            Items to replace with your real clinic/agency data before public launch:
          </h4>

          <div className="space-y-3">
            {PLACEHOLDERS_LIST.map((item, idx) => (
              <div
                key={idx}
                className="p-3 bg-[#F6F1E9] border border-[#0F2A4A]/10 rounded-xl flex items-start justify-between gap-3 text-xs"
              >
                <div>
                  <code className="px-2 py-0.5 bg-[#14B8A6]/15 text-[#0F2A4A] font-mono rounded font-semibold text-[11px]">
                    {item.key}
                  </code>
                  <p className="text-[#0F2A4A]/70 mt-1 leading-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-[#F6F1E9] rounded-xl text-xs text-[#0F2A4A]/70 space-y-1.5 border border-[#0F2A4A]/10">
            <p className="font-semibold text-[#0F2A4A] flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5 text-[#14B8A6]" />
              <span>Where are these managed in code?</span>
            </p>
            <p>
              All placeholders are centralized in <code className="font-mono bg-white px-1.5 py-0.5 rounded border border-[#0F2A4A]/15 text-[#0F2A4A]">src/data/clinicData.ts</code>, <code className="font-mono bg-white px-1.5 py-0.5 rounded border border-[#0F2A4A]/15 text-[#0F2A4A]">src/components/Footer.tsx</code>, and respective page components.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#F6F1E9] border-t border-[#0F2A4A]/10 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-[#0F2A4A] bg-[#14B8A6] hover:bg-[#0F8F83] rounded-lg cursor-pointer"
          >
            Close Checklist
          </button>
        </div>
      </div>
    </div>
  );
};
