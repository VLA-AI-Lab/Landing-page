import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Team – Delta Applied AI',
  description: 'Meet the team behind Delta Applied AI Research Lab.',
};

export default function TeamPage() {
  return (
    <main className="min-h-[80dvh] flex items-center justify-center px-4">
      <div className="max-w-xl text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F3E6D]/5 border border-[#0F3E6D]/10">
          <span className="size-1.5 rounded-full bg-[#0F3E6D] animate-pulse" />
          <span className="text-xs font-medium text-[#0F3E6D] tracking-wide uppercase">
            Coming soon
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
          Our Team
        </h1>
        <p className="text-base sm:text-lg text-gray-500 max-w-md mx-auto">
          Meet the researchers and engineers driving innovation
          at Delta Applied AI. Profiles launching soon.
        </p>
      </div>
    </main>
  );
}
