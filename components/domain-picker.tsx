'use client';

import { useDomain, type Domain } from '@/lib/domain-context';
import { Eye, MessageSquareText, Cpu } from 'lucide-react';

const domains: {
  key: Domain;
  label: string;
  tagline: string;
  icon: typeof Eye;
  color: string;
  bg: string;
  ring: string;
}[] = [
  {
    key: 'vision',
    label: 'Vision',
    tagline: 'Computer Vision & Perception',
    icon: Eye,
    color: 'text-[#1D9E75]',
    bg: 'bg-[#1D9E75]',
    ring: 'ring-[#1D9E75]',
  },
  {
    key: 'language',
    label: 'Language',
    tagline: 'NLP & Language Technology',
    icon: MessageSquareText,
    color: 'text-[#EF9F27]',
    bg: 'bg-[#EF9F27]',
    ring: 'ring-[#EF9F27]',
  },
  {
    key: 'applied-ai',
    label: 'Applied AI',
    tagline: 'Applied Research & Engineering',
    icon: Cpu,
    color: 'text-[#7F77DD]',
    bg: 'bg-[#7F77DD]',
    ring: 'ring-[#7F77DD]',
  },
];

export function DomainPicker() {
  const { domain, setDomain, showPicker, closePicker } = useDomain();

  if (!showPicker) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full mx-4 p-8 animate-in zoom-in-95 duration-300">
        {/* Cube logo */}
        <div className="flex justify-center mb-6">
          <svg viewBox="0 0 110 110" className="size-16" xmlns="http://www.w3.org/2000/svg">
            <polygon points="55,5 100,27.5 55,50 10,27.5" fill="#1D9E75"/>
            <polygon points="10,27.5 55,50 55,100 10,77.5" fill="#EF9F27"/>
            <polygon points="55,50 100,27.5 100,77.5 55,100" fill="#7F77DD"/>
            <line x1="55" y1="5" x2="55" y2="50" stroke="rgba(0,0,0,0.1)" strokeWidth="0.6"/>
            <line x1="55" y1="50" x2="10" y2="27.5" stroke="rgba(0,0,0,0.1)" strokeWidth="0.6"/>
            <line x1="55" y1="50" x2="100" y2="27.5" stroke="rgba(0,0,0,0.1)" strokeWidth="0.6"/>
            <line x1="55" y1="50" x2="55" y2="100" stroke="rgba(0,0,0,0.1)" strokeWidth="0.6"/>
          </svg>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
          Welcome to VLA Lab
        </h2>
        <p className="text-gray-500 text-center mb-8 text-sm">
          Choose your research interest to personalize your experience.
        </p>

        <div className="space-y-3">
          {domains.map((d) => {
            const Icon = d.icon;
            const selected = domain === d.key;
            return (
              <button
                key={d.key}
                onClick={() => setDomain(d.key)}
                className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all duration-200 text-left ${
                  selected
                    ? `${d.ring} ring-2 ring-offset-2 border-transparent`
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className={`w-12 h-12 rounded-lg ${selected ? d.bg : 'bg-gray-100'} flex items-center justify-center transition-colors duration-200`}>
                  <Icon className={`size-6 ${selected ? 'text-white' : d.color}`} />
                </div>
                <div>
                  <div className={`font-bold ${selected ? d.color : 'text-gray-900'} transition-colors`}>
                    {d.label}
                  </div>
                  <div className="text-sm text-gray-500">{d.tagline}</div>
                </div>
              </button>
            );
          })}
        </div>

        <button
          onClick={closePicker}
          className="mt-8 w-full py-3 rounded-xl font-semibold text-white text-sm transition-colors duration-200 domain-bg hover:opacity-90"
        >
          Continue
        </button>

        <p className="text-xs text-gray-400 text-center mt-4">
          You can change this anytime from the header.
        </p>
      </div>
    </div>
  );
}
