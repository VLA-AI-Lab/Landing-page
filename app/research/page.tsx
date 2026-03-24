import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Languages,
  Scale,
  Wheat,
  ArrowRight,
  ChevronRight,
  BookOpen,
  FlaskConical,
  FileText,
  ExternalLink,
  type LucideIcon,
} from 'lucide-react';

import { EmptyState } from '@/components/empty-state';

export const metadata: Metadata = {
  title: 'Research',
  description:
    'Explore our research domains, featured projects, and publications advancing AI for real-world impact in Ethiopia & Africa.',
};

/* ── image URLs ── */
const IMG_NLP =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDrQpLnfUUmCcjWoo77qGX8exmTUyBf7iAB0u5-qGOPFYNSFDP6XkkK9Fv8mknzi_Nm2fMXpaWtEQcwXxx3BsGq_aclEQvyiGhH9fPUgAq8B5-269BnMXWsibEKS2oFXASr5c0U7QXDBbWGEsfsMumR5ddnuiRIJbsHgQZLHg4jW_kvgXj4gUWMN4oOlt7uuxsU6rynN5DKgOXxceO8eUIwrMVyZjE3T_O6MiJu4NtlLQGMbHJZrcSOG7sngNyXwJEpg8hhzmoX';
const IMG_AGRICULTURE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDtH44HgKMQGw-PRfAzjHuOCIfJzm_hbK1ha0qbZyYQEX1m8OR4F0GVkkN6DD8MVGGIILYFDASFIZUsHacT9sGcqQzYK-D8Bj-oltHYfq9MEsfm3p9Bia_ORM3Hz8WYT3aQ30fHB_rQh61tbHyG8oVfatI1R8rTYik5KXEEEcjxceLh21de0IFPRBbiaJ6E4HhmHE7z2K3aKt9sJQD4KLQgvU2OKhiOIMO5AjVfVgIqgAK0dWMs0edlrDOIOpcPSTMq3b7deByz';
const IMG_MEDICAL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCOcEJwJUJvaT37whHjVRQnIaXgg50z0A29bj7GGRDmbPJzahM3bLZEubEp6y-39UefY-FXJacYCZ13ewsrmka8z8OweEQDHA57LXHIPsd1kVfAYSn3OZCBs1NpDdox2QTpbILkUToDYtZrtMO7qgG-jHf9zs7Ushmd65puYQnIgZEG654NfuJjYHIZOWXIhrDNdEGlVkE1Iw2BQ4qt0dqvANGrjolw1LQmbW73h1YICziLY34W2nOjZQvYeaR57HP6EAtUDkZa';
const IMG_CLIMATE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuB4ReRBcHsV5Jv9jiE9vZqSlPss1VY5Tre3rgGN1_JLckkFVOxXgWCi9AhFmXUDqiz9B1xq4EZzz3IwkucSnibCGWEWvQwDBJvR03sWGu5Sk9_jT5nA_tIFZLUcMxYjlNqtIZGMAPQ7PpBdd2kMr5W0ETt2rut4xSg_cr5OheB53N9NkCZS0gJQcMZxLghOeJGaOJRY75z1SArNvgV_FApoBlY2FiBrG3UGlw4x8i2O4gNHKVh5hntEXpGsE_bNoRfC1rn-31vL';

/* ══════════════════════════════════════════════════════════════════════════════
   DATA — These arrays drive all sections. When empty, a professional
   placeholder (EmptyState) is shown instead.
   ══════════════════════════════════════════════════════════════════════════════ */

interface Domain {
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  topics: string[];
}

const domains: Domain[] = [
  {
    icon: Languages,
    title: 'Language AI (NLP)',
    tagline: 'Natural Language Processing',
    description:
      'Developing Large Language Models (LLMs) and translation systems for low-resource African languages, preserving cultural heritage and enabling digital access.',
    topics: ['LLM Fine-tuning', 'Machine Translation', 'Morphological Analysis', 'Speech Recognition'],
  },
  {
    icon: Scale,
    title: 'Governance & Legal AI',
    tagline: 'Policy & Ethics',
    description:
      'Streamlining judicial processes, digitizing legal archives, and creating transparency tools for governance through intelligent document processing.',
    topics: ['Document Intelligence', 'Legal NER', 'Policy Analysis', 'Transparency Tools'],
  },
  {
    icon: Wheat,
    title: 'Agriculture & Climate AI',
    tagline: 'Food Security & Sustainability',
    description:
      'Predictive modeling for crop yields, pest detection, and climate resilience strategies to support food security across the continent.',
    topics: ['Crop Disease Detection', 'Yield Prediction', 'Climate Modeling', 'Satellite Imagery'],
  },
];

interface Project {
  image: string;
  alt: string;
  badge: string;
  badgeColor: string;
  title: string;
  description: string;
  status: string;
}

const projects: Project[] = [
  {
    image: IMG_NLP,
    alt: 'Amharic text processing visualisation',
    badge: 'NLP',
    badgeColor: 'bg-blue-600',
    title: 'Project Fidel: Amharic LLM',
    description:
      'A foundational Large Language Model specifically fine-tuned for Amharic and Ge\u2019ez script languages. This project aims to democratize access to generative AI tools for over 50\u00a0million speakers in the horn of Africa.',
    status: 'Active',
  },
  {
    image: IMG_AGRICULTURE,
    alt: 'Drone view of agricultural fields',
    badge: 'Agriculture',
    badgeColor: 'bg-green-600',
    title: 'CropGuard AI',
    description:
      'Using computer vision on satellite and drone imagery to detect early signs of rust disease in wheat crops. Early warning systems deployed in three regions have saved an estimated 15% of annual yield.',
    status: 'Active',
  },
  {
    image: IMG_MEDICAL,
    alt: 'Medical imaging diagnostics',
    badge: 'Healthcare',
    badgeColor: 'bg-rose-600',
    title: 'Predictive Diagnostics Engine',
    description:
      'Novel deep learning architectures to analyze medical imaging data. In partnership with major research hospitals, the collaboration resulted in a 14% improvement in early detection rates for rare pathologies.',
    status: 'In Partnership',
  },
  {
    image: IMG_CLIMATE,
    alt: 'Climate data visualisation from satellite',
    badge: 'Climate',
    badgeColor: 'bg-teal-600',
    title: 'Climate Modeling at Exascale',
    description:
      'Utilizing high-performance computing clusters to refine climate prediction models. By integrating reinforcement learning, we reduced computational costs by 40% while maintaining high-fidelity simulation accuracy.',
    status: 'In Partnership',
  },
];

interface Publication {
  venue: string;
  date: string;
  title: string;
  authors: string;
  tags: string[];
  featured: boolean;
}

const publications: Publication[] = [
  {
    venue: 'ICLR 2024',
    date: 'March 15, 2024',
    title: 'Tokenization Strategies for Morphologically Rich Semitic Languages',
    authors: 'A. Kebede, S. Johnson, M. Haile.',
    tags: ['PDF', 'Code'],
    featured: true,
  },
  {
    venue: 'NeurIPS 2023',
    date: 'December 10, 2023',
    title: 'Few-Shot Learning for African Crop Disease Detection',
    authors: 'B. Tadesse, R. Smith.',
    tags: ['PDF', 'Dataset'],
    featured: false,
  },
  {
    venue: 'ACL 2023',
    date: 'July 9, 2023',
    title: 'Cross-lingual Transfer for Low-Resource Ethiopian Languages',
    authors: 'M. Haile, A. Kebede, L. Tesfaye.',
    tags: ['PDF', 'Code', 'Demo'],
    featured: false,
  },
  {
    venue: 'CVPR 2023',
    date: 'June 18, 2023',
    title: 'Satellite-Based Crop Monitoring with Self-Supervised Vision Transformers',
    authors: 'B. Tadesse, K. Ayele.',
    tags: ['PDF'],
    featured: false,
  },
];

/* ═══════════════════════════════════════════ PAGE ═══════════════════════════════════════════ */

export default function ResearchPage() {
  return (
    <>
      {/* ────────────────────── HERO ────────────────────── */}
      <section className="relative bg-[#0F3E6D] py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0F3E6D]/60 to-[#0F3E6D]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-200 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
            <FlaskConical className="size-4" />
            Our Research
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Advancing AI for
            <br className="hidden sm:block" />
            Real-World Impact
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            From language technology to climate modeling, explore the research
            powering equitable AI solutions across Africa and beyond.
          </p>
        </div>
      </section>

      {/* ────────────────────── RESEARCH DOMAINS ────────────────────── */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#4a7a9e] font-bold uppercase tracking-widest text-sm mb-2 block">
              Focus Areas
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-900">
              Core Research Domains
            </h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto text-lg">
              We tackle Africa&rsquo;s most pressing challenges through three
              interconnected research pillars.
            </p>
          </div>

          {domains.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {domains.map((d) => (
                <div
                  key={d.title}
                  className="bg-white p-8 rounded-xl border border-slate-200 hover:border-[#0F3E6D]/30 hover:shadow-md transition-all duration-200 group"
                >
                  <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-[#0F3E6D] group-hover:bg-[#0F3E6D] group-hover:text-white transition-colors duration-200">
                    <d.icon className="size-7" strokeWidth={1.5} />
                  </div>
                  <span className="text-xs font-semibold text-[#0F3E6D] uppercase tracking-wider">
                    {d.tagline}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-1 mb-3">
                    {d.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-5">
                    {d.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {d.topics.map((t) => (
                      <span
                        key={t}
                        className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <EmptyState
              icon={FlaskConical}
              title="Research domains coming soon"
              description="We are currently finalizing our core research focus areas. Check back shortly for updates."
            />
          )}
        </div>
      </section>

      {/* ────────────────────── FEATURED PROJECTS ────────────────────── */}
      <section className="py-20 lg:py-28 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#4a7a9e] font-bold uppercase tracking-widest text-sm mb-2 block">
              Our Work
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-900">
              Featured Projects
            </h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto text-lg">
              Highlights from our current initiatives driving AI impact.
            </p>
          </div>

          {projects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((proj) => (
                <div
                  key={proj.title}
                  className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 hover:shadow-md transition-shadow duration-200 group flex flex-col"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={proj.image}
                      alt={proj.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span
                        className={`${proj.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full uppercase`}
                      >
                        {proj.badge}
                      </span>
                      <span className="bg-white/90 backdrop-blur-sm text-slate-700 text-xs font-medium px-3 py-1 rounded-full">
                        {proj.status}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0F3E6D] transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-5 flex-1">
                      {proj.description}
                    </p>
                    <div className="flex items-center gap-1 text-[#0F3E6D] font-medium text-sm">
                      Read Case Study <ChevronRight className="size-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <EmptyState
              icon={FlaskConical}
              title="Projects coming soon"
              description="Our team is actively working on groundbreaking research. Featured projects will appear here."
            />
          )}
        </div>
      </section>

      {/* ────────────────────── PUBLICATIONS ────────────────────── */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#4a7a9e] font-bold uppercase tracking-widest text-sm mb-2 block">
              Publications
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-900">
              Published Research
            </h2>
            <p className="text-slate-500 mt-3 max-w-lg mx-auto text-lg">
              Peer-reviewed papers from our lab, advancing the state of the art.
            </p>
          </div>

          {publications.length > 0 ? (
            <>
              {/* filter tabs placeholder — can be wired to state later */}
              <div className="flex flex-wrap gap-2 mb-8 justify-center">
                {['All', 'NLP', 'Computer Vision', 'Agriculture', 'Healthcare'].map(
                  (tab, i) => (
                    <span
                      key={tab}
                      className={`px-4 py-1.5 rounded-full text-sm font-medium cursor-pointer transition-colors ${
                        i === 0
                          ? 'bg-[#0F3E6D] text-white'
                          : 'bg-white text-slate-600 border border-slate-200 hover:border-[#0F3E6D]/30'
                      }`}
                    >
                      {tab}
                    </span>
                  )
                )}
              </div>

              <div className="space-y-4">
                {publications.map((pub) => (
                  <article
                    key={pub.title}
                    className={`relative p-6 rounded-xl border ${
                      pub.featured
                        ? 'border-[#0F3E6D]/20 bg-blue-50/50'
                        : 'border-slate-200 bg-white'
                    } hover:shadow-sm transition-shadow duration-200`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="text-xs font-bold text-[#0F3E6D] bg-[#0F3E6D]/10 px-2.5 py-0.5 rounded-full uppercase tracking-wide">
                            {pub.venue}
                          </span>
                          {pub.featured && (
                            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">
                              Featured
                            </span>
                          )}
                          <span className="text-xs text-slate-400 ml-auto hidden sm:block">
                            {pub.date}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-1">
                          {pub.title}
                        </h3>
                        <p className="text-slate-500 text-sm mb-3">
                          {pub.authors}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {pub.tags.map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center gap-1 text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full hover:bg-slate-200 transition-colors cursor-pointer font-medium"
                            >
                              <ExternalLink className="size-3" />
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <div className="text-center mt-12">
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 bg-white border border-slate-300 text-slate-700 px-6 py-2.5 rounded-lg hover:bg-slate-50 transition-colors font-medium text-sm shadow-sm"
                >
                  <BookOpen className="size-4" />
                  View Full Publication Archive
                </Link>
              </div>
            </>
          ) : (
            <EmptyState
              icon={FileText}
              title="No publications yet"
              description="Our papers are under review. Published work will be listed here once available."
            />
          )}
        </div>
      </section>

      {/* ────────────────────── METHODOLOGY ────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#0F3E6D] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold mb-4">
              Our Research Methodology
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              From hypothesis to deployment, our iterative cycle ensures
              excellence at every stage.
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-8 left-[12.5%] w-[75%] h-0.5 bg-blue-400/30" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: 1,
                  title: 'Identify',
                  desc: 'Partner with industry to pinpoint high-impact inefficiencies.',
                },
                {
                  step: 2,
                  title: 'Research',
                  desc: 'Develop novel algorithms and test against state-of-the-art benchmarks.',
                },
                {
                  step: 3,
                  title: 'Prototype',
                  desc: 'Build minimum viable models (MVM) for controlled environment testing.',
                },
                {
                  step: 4,
                  title: 'Deploy',
                  desc: 'Scale solutions with continuous monitoring and reinforcement learning.',
                },
              ].map((m) => (
                <div key={m.step} className="relative text-center">
                  <div className="w-16 h-16 mx-auto bg-white text-[#0F3E6D] rounded-full flex items-center justify-center font-bold text-xl shadow-lg mb-6 relative z-10 border-4 border-blue-400/40">
                    {m.step}
                  </div>
                  <h4 className="text-xl font-bold mb-2">{m.title}</h4>
                  <p className="text-sm text-blue-100 leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────── CTA ────────────────────── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-900 mb-6">
            Collaborate With Us
          </h2>
          <p className="text-slate-600 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Interested in our research or looking to partner on a project? We
            welcome collaborations with academic institutions, industry partners,
            and government organizations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/partners"
              className="bg-[#0F3E6D] text-white hover:bg-[#0b3059] px-8 py-3.5 rounded-lg font-semibold text-lg transition-colors shadow-md inline-flex items-center gap-2"
            >
              Explore Partnerships <ArrowRight className="size-5" />
            </Link>
            <Link
              href="/join-us"
              className="border border-slate-300 text-slate-700 hover:bg-white px-8 py-3.5 rounded-lg font-semibold text-lg transition-colors"
            >
              Join Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
