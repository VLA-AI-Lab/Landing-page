import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-[85dvh] flex items-center justify-center px-4">
      <div className="max-w-2xl text-center space-y-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F3E6D]/5 border border-[#0F3E6D]/10">
          <span className="size-1.5 rounded-full bg-[#0F3E6D] animate-pulse" />
          <span className="text-xs font-medium text-[#0F3E6D] tracking-wide uppercase">
            Coming soon
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1]">
          Research for the
          <span className="block text-[#0F3E6D]">Future of Africa</span>
        </h1>

        {/* Subtext */}
        <p className="text-base sm:text-lg text-gray-500 max-w-lg mx-auto leading-relaxed">
          Delta Applied AI Research Lab is building cutting-edge solutions
          in language technology, computer vision, and AI policy &amp; ethics.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/about"
            className="inline-flex items-center px-6 py-2.5 text-sm font-semibold rounded-full bg-[#0F3E6D] text-white hover:bg-[#0b3059] shadow-md shadow-[#0F3E6D]/20 hover:shadow-lg hover:shadow-[#0F3E6D]/30 transition-all duration-200"
          >
            Learn More
          </Link>
          <Link
            href="/join-us"
            className="inline-flex items-center px-6 py-2.5 text-sm font-semibold rounded-full border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 shadow-sm transition-all duration-200"
          >
            Join the Lab
          </Link>
        </div>
      </div>
    </main>
  );
}
