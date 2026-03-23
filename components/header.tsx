'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/research', label: 'Research' },
  { href: '/about', label: 'About' },
  { href: '/team', label: 'Team' },
  { href: '/partners', label: 'Partners' },
];

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 group">
      {/* Isometric cube mark */}
      <svg viewBox="0 0 110 110" className="size-9 flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
        <polygon points="55,5 100,27.5 55,50 10,27.5" fill="#1D9E75"/>
        <polygon points="10,27.5 55,50 55,100 10,77.5" fill="#EF9F27"/>
        <polygon points="55,50 100,27.5 100,77.5 55,100" fill="#7F77DD"/>
        <line x1="55" y1="5" x2="55" y2="50" stroke="rgba(0,0,0,0.1)" strokeWidth="0.6"/>
        <line x1="55" y1="50" x2="10" y2="27.5" stroke="rgba(0,0,0,0.1)" strokeWidth="0.6"/>
        <line x1="55" y1="50" x2="100" y2="27.5" stroke="rgba(0,0,0,0.1)" strokeWidth="0.6"/>
        <line x1="55" y1="50" x2="55" y2="100" stroke="rgba(0,0,0,0.1)" strokeWidth="0.6"/>
      </svg>

      {/* Brand text */}
      <div className="flex flex-col leading-tight">
        <span className="text-sm font-extrabold tracking-tight">
          <span className="text-[#1D9E75]">V</span>
          <span className="text-[#EF9F27]">L</span>
          <span className="text-[#7F77DD]">A</span>
          <span className="text-gray-500 font-light ml-1">Lab</span>
        </span>
        <span className="text-[9px] font-medium tracking-[0.15em] text-gray-400 uppercase">
          Vision · Language · Applied AI
        </span>
      </div>
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 10);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.08)] border-b border-gray-200/60'
          : 'bg-white border-b border-gray-200'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200',
                  pathname === link.href
                    ? 'text-[#0F3E6D] bg-[#0F3E6D]/5'
                    : 'text-gray-600 hover:text-[#0F3E6D] hover:bg-gray-50'
                )}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/join-us"
              className={cn(
                'ml-3 inline-flex items-center px-5 py-2 text-sm font-semibold rounded-full transition-all duration-200',
                pathname === '/join-us'
                  ? 'bg-[#0F3E6D] text-white shadow-lg shadow-[#0F3E6D]/25'
                  : 'bg-[#0F3E6D] text-white hover:bg-[#0b3059] shadow-md shadow-[#0F3E6D]/20 hover:shadow-lg hover:shadow-[#0F3E6D]/30'
              )}
            >
              Join Us
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-[#0F3E6D] hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav overlay */}
      <div
        className={cn(
          'md:hidden overflow-hidden transition-all duration-300 ease-in-out',
          mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <nav
          className={cn(
            'px-4 pb-4 pt-2 space-y-1 border-t border-gray-100',
            scrolled ? 'bg-white/80 backdrop-blur-xl' : 'bg-white'
          )}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'block px-4 py-2.5 text-sm font-medium rounded-lg transition-colors',
                pathname === link.href
                  ? 'text-[#0F3E6D] bg-[#0F3E6D]/5'
                  : 'text-gray-600 hover:text-[#0F3E6D] hover:bg-gray-50'
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/join-us"
            className="block mx-4 mt-2 text-center px-5 py-2.5 text-sm font-semibold rounded-full bg-[#0F3E6D] text-white hover:bg-[#0b3059] shadow-md transition-all"
          >
            Join Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
