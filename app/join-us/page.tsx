import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin, GraduationCap, Users, Globe } from 'lucide-react';
import { ContactForm } from '@/components/contact-form';

export const metadata: Metadata = {
  title: 'Join Us',
  description:
    'Join VLA AI Lab — explore open research positions, internships, and collaboration opportunities in AI research in Addis Ababa, Ethiopia.',
  openGraph: {
    title: 'Join Us | VLA AI Lab',
    description:
      'Join VLA AI Lab — explore open research positions, internships, and collaboration opportunities in AI research in Addis Ababa, Ethiopia.',
  },
  alternates: { canonical: '/join-us' },
};

/* ── images ── */
const IMG_MAP =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCq4gOneKbtGpX_anyHBxL-tWd6wWMzmKOAaz7tltLnbRBstIFuCEz29ydcG7wxQOyefK4Gci_80wVU2ERT3p1w0W1qdO24hNJbI4nQbPGu_REhDNVeRrY9bdkV5K3_JyWeBxTw8tqEOSinaTBgh6AzFkRgXAIsRxWIWX0t2jdT-V12ozX5oyWaKF7GsNwOm48iCx3sfjXGuR5RUpwNbpYp8ORYES3VucJbsKBJJhS9rInJeDTuIzCj5KxkEx_wk6RkM0AD0qGx';

/* ── open positions ── */
const positions = [
  {
    title: 'PhD & Masters Students',
    type: 'Full-time • Annual Intake',
    description:
      'Seeking motivated students with a strong background in mathematics and programming. Focus areas: Generative AI, Reinforcement Learning.',
    icon: GraduationCap,
  },
  {
    title: 'Postdoctoral Researchers',
    type: 'Contract • Open until filled',
    description:
      'Ideal for researchers who have recently completed their PhD and wish to lead independent projects while mentoring junior students.',
    icon: Users,
  },
  {
    title: 'Visiting Scholars',
    type: 'Short-term • Flexible',
    description:
      'Collaboration opportunities for faculty and industry researchers to spend a semester or summer at our lab.',
    icon: Globe,
  },
];

/* ═══════════════════════════════════════════ PAGE ═══════════════════════════════════════════ */

export default function JoinUsPage() {
  return (
    <>
      {/* ────────────────────── HERO ────────────────────── */}
      <section className="relative bg-[#0F3E6D] py-20 overflow-hidden">
        {/* decorative wave */}
        <div className="absolute inset-0 opacity-10">
          <svg
            className="h-full w-full"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
          >
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
          </svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 tracking-tight">
            Connect With Our Lab
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            Whether you&rsquo;re a prospective student, a fellow researcher, or
            an industry partner, we&rsquo;re eager to collaborate on the future
            of Artificial Intelligence.
          </p>
        </div>
      </section>

      {/* ────────────────────── MAIN CONTENT ────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* ─── LEFT: positions + address ─── */}
          <div className="space-y-10">
            {/* Join the Lab */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="size-8 text-[#0F3E6D]" />
                <h2 className="text-3xl font-display font-bold text-gray-900">
                  Join the Lab
                </h2>
              </div>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We are always looking for exceptional talent to join our
                multidisciplinary team. At VLA AI Lab, you will work on
                cutting-edge problems in machine learning, computer vision, and
                neural networks.
              </p>

              <div className="space-y-6">
                {positions.map((pos) => {
                  const PosIcon = pos.icon;
                  return (
                    <div
                      key={pos.title}
                      className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow group"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#0F3E6D] transition-colors">
                            {pos.title}
                          </h3>
                          <p className="text-sm text-gray-500 mt-1">
                            {pos.type}
                          </p>
                        </div>
                        <ArrowRight className="size-5 text-gray-400 group-hover:text-[#0F3E6D] transition-colors flex-shrink-0 mt-1" />
                      </div>
                      <p className="text-gray-600 mt-3 text-sm">
                        {pos.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Visit Us */}
            <div className="pt-8 border-t border-gray-200">
              <h3 className="text-xl font-display font-bold text-gray-900 mb-4">
                Visit Us
              </h3>
              <div className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                <div className="h-48 relative">
                  <Image
                    src={IMG_MAP}
                    alt="Lab location map"
                    fill
                    className="object-cover opacity-50"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white p-2 rounded-full shadow-lg">
                      <MapPin className="size-7 text-[#0F3E6D]" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <address className="not-italic text-gray-600 space-y-1">
                    <p className="font-semibold text-gray-900">
                      VLA AI Lab
                    </p>
                    <p>Engineering Building II, Suite 400</p>
                    <p>123 Innovation Drive</p>
                    <p>Tech City, TC 94043</p>
                    <div className="mt-4 flex items-center gap-2 text-[#0F3E6D] font-medium cursor-pointer hover:underline">
                      <MapPin className="size-4" />
                      Get Directions
                    </div>
                  </address>
                </div>
              </div>
            </div>
          </div>

          {/* ─── RIGHT: contact form ─── */}
          <div>
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 lg:p-10 sticky top-24">
              <div className="mb-8">
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-2">
                  Send us a Message
                </h2>
                <p className="text-gray-500">
                  Have a question about our research or interested in a
                  partnership? Fill out the form below.
                </p>
              </div>

              <ContactForm />

              <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                <p className="text-sm text-gray-500 mb-3">
                  Or contact us directly at
                </p>
                <a
                  href="mailto:contact@vla.et"
                  className="text-lg font-bold text-[#0F3E6D] hover:underline"
                >
                  contact@vla.et
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ────────────────────── NEWSLETTER ────────────────────── */}
        <div className="mt-20 py-12 px-6 lg:px-12 bg-slate-900 rounded-2xl relative overflow-hidden">
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">
                Subscribe to our Research Digest
              </h3>
              <p className="text-slate-400 text-base md:text-lg">
                Get the latest papers, seminar announcements, and lab news
                delivered to your inbox monthly.
              </p>
            </div>
            <div className="w-full max-w-md lg:ml-auto">
              <form className="flex flex-col sm:flex-row gap-3">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="Enter your email"
                  className="w-full rounded-md border border-white/20 px-4 py-3 placeholder-slate-500 bg-white/10 text-white backdrop-blur-sm text-sm focus:outline-none focus:ring-2 focus:ring-[#0F3E6D]"
                />
                <button
                  type="submit"
                  className="flex-none rounded-md bg-[#0F3E6D] py-3 px-5 text-sm font-bold text-white shadow-sm hover:bg-[#0b3059] transition-colors"
                >
                  Subscribe
                </button>
              </form>
              <p className="mt-3 text-xs text-slate-500">
                We care about the protection of your data. Read our{' '}
                <Link href="#" className="font-medium text-white hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
