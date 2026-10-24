import React, { useState, useEffect } from 'react';
import { PhoneCall, MessageCircle, CalendarCheck, TrendingUp, Clock, CheckCircle2 } from 'lucide-react';

export const DashboardMockup: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'live-feed'>('overview');
  const [ticker, setTicker] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTicker((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const feedEvents = [
    {
      time: 'Just now',
      type: 'call',
      title: 'Missed Call Rescued',
      detail: 'Patient (Delhi NCR) called during surgery OPD · AI Voice Assistant answered & sent WhatsApp booking link.',
      status: 'Appointment Confirmed',
    },
    {
      time: '3 mins ago',
      type: 'whatsapp',
      title: 'WhatsApp Concierge',
      detail: 'Hair consultation pricing inquiry answered in 8 seconds · Booked consultation for Thursday 4:30 PM.',
      status: 'Slot Reserved',
    },
    {
      time: '12 mins ago',
      type: 'reminder',
      title: 'Automated Recall Loop',
      detail: 'Laser treatment follow-up reminder sent · Patient confirmed attendance for tomorrow.',
      status: 'No-Show Prevented',
    },
  ];

  return (
    <div className="w-full bg-slate-900/90 backdrop-blur-xl border border-slate-700/60 rounded-2xl p-5 sm:p-6 text-white shadow-2xl relative overflow-hidden">
      {/* Top Banner / Disclaimer Label */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
          <span className="font-semibold text-slate-200">Clinic Growth System OS</span>
          <span className="text-slate-500 hidden sm:inline">|</span>
          <span className="text-emerald-400/90 font-mono hidden sm:inline text-[11px]">24/7 Front-Desk Active</span>
        </div>
        <div className="px-2.5 py-0.5 rounded bg-slate-800 text-[10px] text-slate-400 uppercase tracking-wider font-mono">
          Illustrative example
        </div>
      </div>

      {/* Quick Nav Tabs */}
      <div className="flex items-center gap-2 mt-4 mb-5 p-1 bg-slate-950/60 rounded-lg text-xs font-medium">
        <button
          type="button"
          onClick={() => setActiveTab('overview')}
          className={`flex-1 py-1.5 px-3 rounded-md transition-all text-center cursor-pointer ${
            activeTab === 'overview'
              ? 'bg-emerald-600 text-white font-semibold shadow-xs'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          Clinic Performance Overview
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('live-feed')}
          className={`flex-1 py-1.5 px-3 rounded-md transition-all text-center cursor-pointer ${
            activeTab === 'live-feed'
              ? 'bg-emerald-600 text-white font-semibold shadow-xs'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          Live Patient Recovery Stream
        </button>
      </div>

      {activeTab === 'overview' ? (
        <div className="space-y-5">
          {/* 3 Metric Cards */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            <div className="bg-slate-800/70 border border-slate-700/50 rounded-xl p-3">
              <div className="flex items-center justify-between text-slate-400 mb-1">
                <span className="text-[11px] sm:text-xs">Calls Handled</span>
                <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <p className="text-lg sm:text-2xl font-bold font-mono tabular-nums text-white">99.4%</p>
              <p className="text-[10px] text-emerald-400 mt-0.5">Zero busy tone ring-outs</p>
            </div>

            <div className="bg-slate-800/70 border border-slate-700/50 rounded-xl p-3">
              <div className="flex items-center justify-between text-slate-400 mb-1">
                <span className="text-[11px] sm:text-xs">WhatsApp Reply</span>
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <p className="text-lg sm:text-2xl font-bold font-mono tabular-nums text-white">&lt;14s</p>
              <p className="text-[10px] text-emerald-400 mt-0.5">24/7 automated triage</p>
            </div>

            <div className="bg-slate-800/70 border border-slate-700/50 rounded-xl p-3">
              <div className="flex items-center justify-between text-slate-400 mb-1">
                <span className="text-[11px] sm:text-xs">Consults Booked</span>
                <CalendarCheck className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <p className="text-lg sm:text-2xl font-bold font-mono tabular-nums text-white">+38%</p>
              <p className="text-[10px] text-emerald-400 mt-0.5">Month 3 recovery benchmark</p>
            </div>
          </div>

          {/* Animated Growth SVG Line & Chart Visual */}
          <div className="bg-slate-950/80 rounded-xl p-4 border border-slate-800">
            <div className="flex items-center justify-between mb-3 text-xs">
              <div>
                <span className="font-semibold text-slate-200">6-Month Patient Acquisition Curve</span>
                <p className="text-[11px] text-slate-400">Baseline before audit vs. System launch</p>
              </div>
              <div className="flex items-center gap-3 text-[11px]">
                <span className="flex items-center gap-1.5 text-slate-400">
                  <span className="w-2.5 h-0.5 bg-slate-500 rounded"></span> Baseline
                </span>
                <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                  <span className="w-2.5 h-0.5 bg-emerald-400 rounded"></span> With System
                </span>
              </div>
            </div>

            {/* SVG Visual */}
            <div className="h-32 w-full relative">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 400 120" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="growthGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10B981" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#10B981" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                {/* Horizontal grid lines */}
                <line x1="0" y1="30" x2="400" y2="30" stroke="#334155" strokeDasharray="3 3" strokeWidth="0.5" />
                <line x1="0" y1="65" x2="400" y2="65" stroke="#334155" strokeDasharray="3 3" strokeWidth="0.5" />
                <line x1="0" y1="100" x2="400" y2="100" stroke="#334155" strokeDasharray="3 3" strokeWidth="0.5" />

                {/* Stagnant baseline curve */}
                <path
                  d="M 0 95 Q 100 92, 200 90 T 400 88"
                  fill="none"
                  stroke="#64748b"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />

                {/* Growth curve with fill */}
                <path
                  d="M 0 95 C 70 92, 110 82, 160 62 C 220 40, 300 24, 400 12 L 400 120 L 0 120 Z"
                  fill="url(#growthGrad)"
                />
                <path
                  d="M 0 95 C 70 92, 110 82, 160 62 C 220 40, 300 24, 400 12"
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />

                {/* Checkpoint dots */}
                <circle cx="160" cy="62" r="4.5" fill="#10B981" stroke="#0B132B" strokeWidth="2" />
                <circle cx="400" cy="12" r="5" fill="#34D399" stroke="#0B132B" strokeWidth="2" />
              </svg>
            </div>

            <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-2 pt-1 border-t border-slate-900">
              <span>Month 0 (Audit)</span>
              <span>Month 2 (Launch)</span>
              <span>Month 4 (Scale)</span>
              <span>Month 6 (Matured)</span>
            </div>
          </div>
        </div>
      ) : (
        /* Live Patient Recovery Stream */
        <div className="space-y-3">
          {feedEvents.map((ev, idx) => (
            <div
              key={idx}
              className={`p-3 rounded-xl border transition-all ${
                ticker === idx
                  ? 'bg-slate-800/90 border-emerald-500/50 shadow-md'
                  : 'bg-slate-800/40 border-slate-700/40 opacity-75'
              }`}
            >
              <div className="flex items-center justify-between text-xs mb-1">
                <div className="flex items-center gap-1.5 font-semibold text-slate-200">
                  {ev.type === 'call' && <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />}
                  {ev.type === 'whatsapp' && <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />}
                  {ev.type === 'reminder' && <Clock className="w-3.5 h-3.5 text-emerald-400" />}
                  <span>{ev.title}</span>
                </div>
                <span className="text-[10px] text-slate-400 font-mono">{ev.time}</span>
              </div>
              <p className="text-xs text-slate-300 leading-snug">{ev.detail}</p>
              <div className="mt-2 flex items-center justify-between text-[11px] pt-1.5 border-t border-slate-700/50">
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  {ev.status}
                </span>
                <span className="text-[10px] text-slate-500">Zero doctor disruption</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Footer note */}
      <div className="mt-4 pt-3 border-t border-slate-800/70 flex items-center justify-between text-[11px] text-slate-400">
        <span className="flex items-center gap-1 text-emerald-400">
          <TrendingUp className="w-3.5 h-3.5" />
          <span>Continuous front-desk protection</span>
        </span>
        <span className="font-mono text-[10px] text-slate-500">Illustrative dashboard model</span>
      </div>
    </div>
  );
};
