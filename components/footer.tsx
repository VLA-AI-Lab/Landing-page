import Link from 'next/link';

const researchLinks = [
  { href: '/research', label: 'Language Tech' },
  { href: '/research', label: 'Computer Vision' },
  { href: '/research', label: 'Policy & Ethics' },
];

const labLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/team', label: 'Our Team' },
  { href: '/join-us', label: 'Careers' },
  { href: '/about', label: 'Contact' },
];

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#0a1628] text-gray-300">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <svg viewBox="0 0 110 110" className="size-9 flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
                <polygon points="55,5 100,27.5 55,50 10,27.5" fill="#1D9E75"/>
                <polygon points="10,27.5 55,50 55,100 10,77.5" fill="#EF9F27"/>
                <polygon points="55,50 100,27.5 100,77.5 55,100" fill="#7F77DD"/>
                <line x1="55" y1="5" x2="55" y2="50" stroke="rgba(0,0,0,0.1)" strokeWidth="0.6"/>
                <line x1="55" y1="50" x2="10" y2="27.5" stroke="rgba(0,0,0,0.1)" strokeWidth="0.6"/>
                <line x1="55" y1="50" x2="100" y2="27.5" stroke="rgba(0,0,0,0.1)" strokeWidth="0.6"/>
                <line x1="55" y1="50" x2="55" y2="100" stroke="rgba(0,0,0,0.1)" strokeWidth="0.6"/>
              </svg>
              <span className="text-lg font-bold text-white tracking-wide">
                <span className="text-[#1D9E75]">V</span>
                <span className="text-[#EF9F27]">L</span>
                <span className="text-[#7F77DD]">A</span>
                <span className="font-light text-white/50 ml-1">Lab</span>
              </span>
            </div>
            <div className="space-y-1 text-sm text-gray-400">
              <p>Addis Ababa, Ethiopia</p>
              <p>Research for the future of Africa.</p>
            </div>
          </div>

          {/* Research column */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wide uppercase mb-4">
              Research
            </h3>
            <ul className="space-y-3">
              {researchLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Lab column */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wide uppercase mb-4">
              Lab
            </h3>
            <ul className="space-y-3">
              {labLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect column */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wide uppercase mb-4">
              Connect
            </h3>
            <div className="flex items-center gap-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="size-9 rounded-full bg-gray-700/50 flex items-center justify-center text-gray-400 hover:bg-[#0F3E6D] hover:text-white transition-all duration-200"
                aria-label="Twitter"
              >
                <TwitterIcon className="size-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="size-9 rounded-full bg-gray-700/50 flex items-center justify-center text-gray-400 hover:bg-[#0F3E6D] hover:text-white transition-all duration-200"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} VLA AI Lab. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="#"
                className="text-xs text-gray-500 hover:text-gray-300 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-xs text-gray-500 hover:text-gray-300 transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
