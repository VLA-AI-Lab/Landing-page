import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Heart,
  Leaf,
  Handshake,
  Rocket,
  Mail,
  MessageCircle,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Partners & Collaboration',
  description:
    'VLA AI Lab partners — strategic alliances with universities, industry leaders, and government bodies powering real-world AI impact in Ethiopia and Africa.',
  openGraph: {
    title: 'Partners & Collaboration | VLA AI Lab',
    description:
      'VLA AI Lab partners — strategic alliances with universities, industry leaders, and government bodies powering real-world AI impact in Ethiopia and Africa.',
  },
  alternates: { canonical: '/partners' },
};

/* ── partner logos / placeholders ── */
const partnerLogos = [
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAB4Ck_M3mBMI4jjxgpH7Nqlbb9f-ejf48apnxfsfWix_FixLHF6OphPKcdAEXqUmZ46ju-90a4-eJrjiILC45R057Pio5wO4VtgVgmmpHt7OGC-yWTmxBpmuAYFUin7w8IKWka12y2ayXDFJ9cX11zAoQ9P4DgvXOQnl2inrNOD5tB0zz6igGA04santTe6OF5lCRZVP9Wo7B6YLgbMbkP5XKag0Y3owgnnz6Utb0D9oFs20lhdiseFRVcIXpfetyNhrCTh_yQ',
    alt: 'Partner organization',
    type: 'image' as const,
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAiK6Q9f9oVL4xpIc4Ag1LOF4s5U30aBGqop3c5LuM81jVUxE410ElY9MOWAOR0lOc5VReHgy5cgc1MYnkzO4obstjvEijvc2mQLbHNjzvoxfibzEyRBh4HDKgVizrp9ew-QCoAz4Od0wDo2I-reMDp1Iidw1PptuRBeZqIL0Bpo4XMaATASCQih9UuKQLq8e7QG0aH-4i-SiKVENOGnXNiYptsiZUsyeNBA4kJbHMFb7CJzXoZEKQNfywQH1mzeox4SMCY96lv',
    alt: 'Partner organization',
    type: 'image' as const,
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJTNTYIrf4dE41e2QfOHHnCHd0gLS7TLRwVnEZLcUDk5JALaK0a7FfXDgVgsa5c8h1UbtTIHFpkJvyLM4bqjStUtGf6rGcyf16qD3wHaS1iXxX-s4k8ODcSkAhigeqKKxnTlSDp6C6o1LX45kx2121XfB5oGZDQp1EVCj-QXK_zPbslUsT8XqsN4aNopWbWKkwwU74yqKiGjNA5dVIAiMVYd0qC7JVUh-yX02UKS-b9CQ5UIdRk8KJ1nyiHYcyTVTE17KFk0Gz',
    alt: 'Partner organization',
    type: 'image' as const,
  },
  { text: 'MIT CSAIL', type: 'text' as const },
  { text: 'Stanford HAI', type: 'text' as const },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUnkDSapvq81UZtdwPVHjFFlKIB6pSYs5pbhnnpnhbONkgYadltZ26pqn63cBJDNFZSQNKIUb1uSHMPRt2eQrNiMYL9HnHhObnJjIY35oVdLNdp0DBRiBGJjjTLQOwoXMzhuyBK6q0aECV4nmuKQHukv5O5jIYnHdgsmomB9jzv1SbBqkeQGZSqMsqm8YRHqwhLd_d2MKYJ53v9roIypQWaG0taVKjtDgzi8eAnYgE504t0rikUgxrXkjcmM_wlKXlA4V9p97R',
    alt: 'Partner organization',
    type: 'image' as const,
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAU-Hkz8fSenHlgOW4KniHbEyk0eIVGV8TQxCnennlmPTTzAridNWNacMfrQ5DcUjJpqMnQ3uEZuIYBQeGBX5uOCcdiRVVVqGD-TpecHzGWoLFXCHLT9GJQOT7aKshqreTXc_h4CfUuLrsYq2bDEvGlwIsi78Jm8rLkuSApJu91SRIfEGAn_bw56aaAI0hrDUrLWNaZBmCn0uJDvbmmlph3433BNNLGwi70mDGhW9kNMJUNzqEtZtOn6udc3R0iGRAimP34QUKQ',
    alt: 'Partner organization',
    type: 'image' as const,
  },
  { text: 'National Science Foundation', type: 'text' as const },
];

/* ── case studies ── */
const caseStudies = [
  {
    tag: 'Healthcare AI',
    tagIcon: Heart,
    title: 'Predictive Diagnostics with Global Health Partners',
    description:
      'In partnership with major research hospitals, VLA AI Lab deployed novel deep learning architectures to analyze medical imaging data. The collaboration resulted in a 14% improvement in early detection rates for rare pathologies, directly impacting patient outcomes across three continents.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCOcEJwJUJvaT37whHjVRQnIaXgg50z0A29bj7GGRDmbPJzahM3bLZEubEp6y-39UefY-FXJacYCZ13ewsrmka8z8OweEQDHA57LXHIPsd1kVfAYSn3OZCBs1NpDdox2QTpbILkUToDYtZrtMO7qgG-jHf9zs7Ushmd65puYQnIgZEG654NfuJjYHIZOWXIhrDNdEGlVkE1Iw2BQ4qt0dqvANGrjolw1LQmbW73h1YICziLY34W2nOjZQvYeaR57HP6EAtUDkZa',
    alt: 'Medical Imaging AI',
    reverse: false,
  },
  {
    tag: 'Environmental Sustainability',
    tagIcon: Leaf,
    title: 'Climate Modeling at Exascale',
    description:
      'Working alongside the National Center for Atmospheric Research, our team utilized high-performance computing clusters to refine climate prediction models. By integrating reinforcement learning, we reduced computational costs by 40% while maintaining high-fidelity simulation accuracy.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB4ReRBcHsV5Jv9jiE9vZqSlPss1VY5Tre3rgGN1_JLckkFVOxXgWCi9AhFmXUDqiz9B1xq4EZzz3IwkucSnibCGWEWvQwDBJvR03sWGu5Sk9_jT5nA_tIFZLUcMxYjlNqtIZGMAPQ7PpBdd2kMr5W0ETt2rut4xSg_cr5OheB53N9NkCZS0gJQcMZxLghOeJGaOJRY75z1SArNvgV_FApoBlY2FiBrG3UGlw4x8i2O4gNHKVh5hntEXpGsE_bNoRfC1rn-31vL',
    alt: 'Satellite Data Visualization',
    reverse: true,
  },
];

/* ── partnership steps ── */
const steps = [
  {
    num: '01',
    icon: MessageCircle,
    title: 'Initiate Contact',
    description:
      'Reach out via our inquiry form. Briefly outline your research interests, problem space, or potential project scope. Our partnerships team reviews inquiries weekly.',
  },
  {
    num: '02',
    icon: Handshake,
    title: 'Discovery & Alignment',
    description:
      'We schedule a discovery session with relevant Principal Investigators (PIs) to explore alignment, feasibility, and mutual goals. This ensures a robust foundation for collaboration.',
  },
  {
    num: '03',
    icon: Rocket,
    title: 'Formalize & Launch',
    description:
      'Once scope is defined, we formalize the partnership through standard agreements (MOU/NDA) and launch the project with a dedicated research team.',
  },
];

/* ═══════════════════════════════════════════ PAGE ═══════════════════════════════════════════ */

export default function PartnersPage() {
  return (
    <>
      {/* ────────────────────── HERO ────────────────────── */}
      <section className="relative py-24 bg-slate-50 border-b border-gray-100 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Partners &amp;{' '}
            <span className="text-[#0F3E6D]">Collaboration</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed">
            We bridge the gap between theoretical AI research and real-world
            application through strategic alliances with industry leaders,
            academic institutions, and government bodies.
          </p>
        </div>
      </section>

      {/* ────────────────────── PARTNER LOGOS ────────────────────── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-bold text-[#0F3E6D] tracking-widest uppercase block mb-2">
              Our Network
            </span>
            <h2 className="font-display text-3xl font-bold text-gray-900">
              Trusted by Leading Institutions
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
            {partnerLogos.map((logo, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex justify-center items-center h-32 grayscale hover:grayscale-0 opacity-70 hover:opacity-100"
              >
                {logo.type === 'image' ? (
                  <Image
                    src={logo.src!}
                    alt={logo.alt!}
                    width={160}
                    height={40}
                    className="max-h-10 w-auto object-contain"
                  />
                ) : (
                  <span className="font-display font-bold text-xl text-gray-400 text-center">
                    {logo.text}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────── CASE STUDIES ────────────────────── */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-sm font-bold text-[#0F3E6D] tracking-widest uppercase block mb-2">
              Impact Stories
            </span>
            <h2 className="font-display text-3xl font-bold text-gray-900">
              Collaboration in Action
            </h2>
          </div>

          <div className="space-y-16">
            {caseStudies.map((study) => {
              const TagIcon = study.tagIcon;
              return (
                <div
                  key={study.title}
                  className={`flex flex-col ${
                    study.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
                  } gap-12 items-center`}
                >
                  {/* image */}
                  <div className="w-full lg:w-1/2">
                    <div className="relative rounded-2xl overflow-hidden shadow-lg h-80">
                      <Image
                        src={study.image}
                        alt={study.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>

                  {/* text */}
                  <div className="w-full lg:w-1/2 space-y-5">
                    <div className="flex items-center gap-2 text-[#0F3E6D] font-medium">
                      <TagIcon className="size-4" />
                      <span className="text-sm uppercase tracking-wide">
                        {study.tag}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl lg:text-3xl font-bold text-gray-900">
                      {study.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {study.description}
                    </p>
                    <Link
                      href="/research"
                      className="inline-flex items-center text-[#0F3E6D] font-semibold hover:underline gap-1"
                    >
                      Read Full Case Study
                      <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ────────────────────── HOW TO PARTNER ────────────────────── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl font-bold text-gray-900 mb-4">
              How to Partner With Us
            </h2>
            <p className="text-gray-600 text-lg">
              We offer flexible engagement models tailored to the needs of
              academic researchers, industry innovators, and public sector
              organizations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step) => {
              const StepIcon = step.icon;
              return (
                <div
                  key={step.num}
                  className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm relative"
                >
                  <span className="absolute top-4 right-4 font-display text-6xl font-bold text-[#0F3E6D]/5">
                    {step.num}
                  </span>
                  <div className="w-12 h-12 bg-[#0F3E6D]/10 rounded-lg flex items-center justify-center mb-6 text-[#0F3E6D]">
                    <StepIcon className="size-6" />
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/join-us"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium rounded-full shadow-sm text-white bg-[#0F3E6D] hover:bg-[#0b3059] transition-colors"
            >
              Start a Conversation
              <Mail className="size-5" />
            </Link>
            <p className="mt-4 text-sm text-gray-500">
              Typically respond within 48 hours for institutional inquiries.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
