import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-[80dvh]">
      <div className="max-w-md space-y-6 p-4 text-center">
        <div className="inline-flex items-center justify-center size-16 rounded-full bg-[#0F3E6D]/5">
          <span className="text-2xl font-bold text-[#0F3E6D]">404</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
          Page Not Found
        </h1>
        <p className="text-base text-gray-500">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-5 py-2 text-sm font-semibold rounded-full border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 shadow-sm transition-all"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
