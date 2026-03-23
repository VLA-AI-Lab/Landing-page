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
    <Link href="/" className="flex items-center gap-3 group">
      {/* Circular emblem */}
      <div className="relative size-10 rounded-full border-2 border-[#0F3E6D] flex items-center justify-center bg-white shadow-sm group-hover:shadow-md transition-shadow">
        <div className="size-7 rounded-full border border-[#0F3E6D]/30 flex items-center justify-center">
          <svg
            viewBox="0 0 24 24"
            className="size-4 text-[#0F3E6D]"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
        </div>
      </div>

      {/* Separator line */}
      <div className="h-9 w-px bg-gray-300" />

      {/* Brand text */}
      <div className="flex flex-col leading-tight">
        <span className="text-sm font-bold tracking-wide text-[#0F3E6D]">
          VLA AI LAB
        </span>
        <span className="text-[10px] font-medium tracking-[0.2em] text-gray-500 uppercase">
          Research Lab
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
