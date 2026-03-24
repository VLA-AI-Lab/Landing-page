'use client';

import { useDomain, type Domain } from '@/lib/domain-context';

const options: { key: Domain; label: string; color: string }[] = [
  { key: 'vision', label: 'V', color: 'bg-[#1D9E75]' },
  { key: 'language', label: 'L', color: 'bg-[#EF9F27]' },
  { key: 'applied-ai', label: 'A', color: 'bg-[#7F77DD]' },
];

export function DomainSwitcher() {
  const { domain, setDomain } = useDomain();

  return (
    <div className="flex items-center gap-0.5 bg-gray-100 rounded-full p-0.5">
      {options.map((o) => {
        const active = domain === o.key;
        return (
          <button
            key={o.key}
            onClick={() => setDomain(o.key)}
            title={o.key === 'vision' ? 'Vision' : o.key === 'language' ? 'Language' : 'Applied AI'}
            className={`size-7 rounded-full text-xs font-bold transition-all duration-200 ${
              active
                ? `${o.color} text-white shadow-sm scale-110`
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}
