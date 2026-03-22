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
} from 'lucide-react';

import { CountUp } from '@/components/count-up';
import { EmptyState } from '@/components/empty-state';

/* ── image URLs ── */
const IMG_RESEARCHERS =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCDR8q8P4tVm15YOIkiR5CrT99fh4SX2AC-CFLiYe9xGEyEa-rAg2mz2OInktb4t1xa2JXLbvkXXkqjvNqkzcAGdlhRiu-rwCFcx6Mq4PswVyhHrDf8Cv0g0YC3nB_M-vlC9Bx47ya_jqCKglNeJcgQ9PmlR2sQoXtTTP3-uxPG9hDgYRqd2tWsv9H9r8I_qjywul-oALfiEUnkE5sF3uXN0U5CGW-wdOXBb11kvEbjZzOMh6CWDS2IdrohQcqg6DZaOs6aRdOF';
const IMG_NLP =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDrQpLnfUUmCcjWoo77qGX8exmTUyBf7iAB0u5-qGOPFYNSFDP6XkkK9Fv8mknzi_Nm2fMXpaWtEQcwXxx3BsGq_aclEQvyiGhH9fPUgAq8B5-269BnMXWsibEKS2oFXASr5c0U7QXDBbWGEsfsMumR5ddnuiRIJbsHgQZLHg4jW_kvgXj4gUWMN4oOlt7uuxsU6rynN5DKgOXxceO8eUIwrMVyZjE3T_O6MiJu4NtlLQGMbHJZrcSOG7sngNyXwJEpg8hhzmoX';
const IMG_AGRICULTURE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDtH44HgKMQGw-PRfAzjHuOCIfJzm_hbK1ha0qbZyYQEX1m8OR4F0GVkkN6DD8MVGGIILYFDASFIZUsHacT9sGcqQzYK-D8Bj-oltHYfq9MEsfm3p9Bia_ORM3Hz8WYT3aQ30fHB_rQh61tbHyG8oVfatI1R8rTYik5KXEEEcjxceLh21de0IFPRBbiaJ6E4HhmHE7z2K3aKt9sJQD4KLQgvU2OKhiOIMO5AjVfVgIqgAK0dWMs0edlrDOIOpcPSTMq3b7deByz';

/* ══════════════════════════════════════════════════════════════════════════════
   DATA — These arrays drive the dynamic sections. When empty, a clean
   placeholder is rendered instead.
   ══════════════════════════════════════════════════════════════════════════════ */

const domains = [
  {
    icon: Languages,
    title: 'Language AI (NLP)',
    description:
      'Developing Large Language Models (LLMs) and translation systems for low-resource African languages, preserving cultural heritage and enabling digital access.',
  },
  {
    icon: Scale,
    title: 'Gov & Legal AI',
    description:
      'Streamlining judicial processes, digitizing legal archives, and creating transparency tools for governance through intelligent document processing.',
  },
  {
    icon: Wheat,
    title: 'Ag & Climate AI',
    description:
      'Predictive modeling for crop yields, pest detection, and climate resilience strategies to support food security across the continent.',
  },
];

const stats = [
  { value: '15+', label: 'Research Papers' },
  { value: '4', label: 'Key Patents' },
  { value: '12M+', label: 'Datapoints Collected' },
  { value: '8', label: 'University Partners' },
];

const projects = [
  {
    image: IMG_NLP,
    alt: 'Amharic text processing visualisation',
    badge: 'NLP',
    badgeColor: 'bg-blue-600',
    title: 'Project Fidel: Amharic LLM',
    description:
      'A foundational Large Language Model specifically fine-tuned for Amharic and Ge\u2019ez script languages. This project aims to democratize access to generative AI tools for over 50\u00a0million speakers in the horn of Africa.',
  },
  {
    image: IMG_AGRICULTURE,
    alt: 'Drone view of agricultural fields',
    badge: 'Agriculture',
    badgeColor: 'bg-green-600',
    title: 'CropGuard AI',
    description:
      'Using computer vision on satellite and drone imagery to detect early signs of rust disease in wheat crops. Early warning systems deployed in three regions have saved an estimated 15% of annual yield.',
  },
];

const publications: {
  venue: string;
  date: string;
  title: string;
  authors: string;
  tags: string[];
  featured: boolean;
}[] = [
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
];

/* ═══════════════════════════════════════════ PAGE ═══════════════════════════════════════════ */

export default function HomePage() {
  return (
    <>
      {/* ────────────────────── HERO ────────────────────── */}
      <section className="relative bg-[#0F3E6D] overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F3E6D] via-[#0F3E6D]/90 to-transparent" />

        {/* decorative blob – desktop only */}
        <div className="absolute right-0 top-0 h-full w-1/2 opacity-[0.08] pointer-events-none hidden lg:block">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path
              d="M42.7,-73.2C55.9,-67.1,67.6,-57.8,76.4,-46.6C85.2,-35.4,91.1,-22.3,90.4,-9.5C89.7,3.3,82.4,15.8,74.1,27.3C65.8,38.8,56.5,49.3,45.4,57.4C34.3,65.5,21.3,71.2,7.9,73.1C-5.5,75,-16.4,73.1,-27.6,69.5C-38.8,65.9,-50.3,60.6,-59.6,52.2C-68.9,43.8,-76,32.3,-79.6,19.8C-83.2,7.3,-83.3,-6.2,-78.9,-18.8C-74.5,-31.4,-65.6,-43.1,-54.6,-50.5C-43.6,-57.9,-30.5,-61,-17.8,-64.8C-5.1,-68.6,7.2,-73.1,20,-75.4"
              fill="#ffffff"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="lg:w-2/3">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-200 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
              Applied AI Research
            </span>

            <h1 className="text-4xl lg:text-6xl font-display font-bold text-white mb-6 leading-[1.1] tracking-tight">
              VLA AI Lab{' '}
              <br className="hidden sm:block" />
              Vision, Language &amp; Applied AI
            </h1>

            <p className="text-xl lg:text-2xl text-blue-100 font-light mb-10 max-w-2xl leading-relaxed">
              Applied AI research for real-world impact in{' '}
              <span className="font-semibold text-white">Ethiopia&nbsp;&amp;&nbsp;Africa</span>.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#research"
                className="bg-white text-[#0F3E6D] hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold text-lg transition-colors shadow-lg"
              >
                Explore Research
              </a>
              <a
                href="#publications"
                className="border border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold text-lg transition-colors backdrop-blur-sm"
              >
                View Publications
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────── WHO WE ARE ────────────────────── */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-[#4a7a9e] font-bold uppercase tracking-widest text-sm mb-2 block">
                Who We Are
              </span>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-900 mb-6 leading-tight">
                Bridging the Gap Between Theory and Practice
              </h2>
              <div className="text-slate-600 leading-relaxed text-lg space-y-4">
                <p>
                  VLA AI Lab is dedicated to advancing the
                  state of Artificial Intelligence while ensuring equitable
                  access to its benefits. Situated at the intersection of
                  academic rigor and industry necessity, we focus on solving
                  pressing challenges unique to the African context.
                </p>
                <p>
                  From low-resource natural language processing to
                  climate-resilient agricultural models, our interdisciplinary
                  team pushes the boundaries of what is possible, ensuring that
                  the future of AI is inclusive and transformative.
                </p>
              </div>
            </div>

            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={IMG_RESEARCHERS}
                alt="Researchers collaborating in a modern lab environment"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-[#0F3E6D]/20 mix-blend-multiply" />
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────── CORE RESEARCH DOMAINS ────────────────────── */}
      <section id="research" className="py-20 lg:py-28 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#4a7a9e] font-bold uppercase tracking-widest text-sm mb-2 block">
              Our Focus
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
                  className="bg-slate-50 p-8 rounded-xl border border-slate-200 hover:border-[#0F3E6D]/30 hover:shadow-md transition-all duration-200 group"
                >
                  <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-[#0F3E6D] group-hover:bg-[#0F3E6D] group-hover:text-white transition-colors duration-200">
                    <d.icon className="size-7" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{d.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{d.description}</p>
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

      {/* ────────────────────── STATS BANNER ────────────────────── */}
      <section className="py-16 bg-[#0F3E6D] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {stats.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:divide-x md:divide-blue-400/25">
              {stats.map((s) => (
                <div key={s.label} className="py-2">
                  <div className="text-4xl lg:text-5xl font-display font-bold mb-2">
                    <CountUp value={s.value} duration={2000} />
                  </div>
                  <div className="text-blue-200 text-sm font-medium uppercase tracking-wider">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <EmptyState
              title="Impact metrics coming soon"
              description="We are compiling our latest research impact data."
              className="text-white [&_h3]:text-blue-200 [&_p]:text-blue-300 [&>div>div]:bg-blue-900/40"
            />
          )}
        </div>
      </section>

      {/* ────────────────────── FEATURED PROJECTS ────────────────────── */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-12">
            <div>
              <span className="text-[#4a7a9e] font-bold uppercase tracking-widest text-sm mb-2 block">
                Highlights
              </span>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-900">
                Featured Projects
              </h2>
              <p className="text-slate-500 mt-2 text-lg">
                Highlights from our current initiatives.
              </p>
            </div>
            <Link
              href="/research"
              className="hidden md:inline-flex items-center text-[#0F3E6D] font-semibold hover:underline gap-1 shrink-0"
            >
              View All Projects <ArrowRight className="size-4" />
            </Link>
          </div>

          {projects.length > 0 ? (
            <div className="space-y-8">
              {projects.map((proj) => (
                <div
                  key={proj.title}
                  className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-slate-200 transition-shadow duration-200"
                >
                  <div className="md:w-1/3 relative min-h-[16rem]">
                    <Image
                      src={proj.image}
                      alt={proj.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <span
                      className={`absolute top-4 left-4 ${proj.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full uppercase`}
                    >
                      {proj.badge}
                    </span>
                  </div>
                  <div className="p-8 md:w-2/3 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                      {proj.title}
                    </h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {proj.description}
                    </p>
                    <Link
                      href="/research"
                      className="text-[#0F3E6D] font-medium hover:text-blue-800 inline-flex items-center gap-1"
                    >
                      Read Case Study <ChevronRight className="size-4" />
                    </Link>
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

          {projects.length > 0 && (
            <div className="mt-8 md:hidden text-center">
              <Link
                href="/research"
                className="inline-flex items-center text-[#0F3E6D] font-semibold hover:underline gap-1"
              >
                View All Projects <ArrowRight className="size-4" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* ────────────────────── RECENT PUBLICATIONS ────────────────────── */}
      <section id="publications" className="py-20 lg:py-28 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#4a7a9e] font-bold uppercase tracking-widest text-sm mb-2 block">
              Latest Work
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-900">
              Recent Publications
            </h2>
            <p className="text-slate-500 mt-3 max-w-lg mx-auto text-lg">
              Peer-reviewed research from our team, advancing the state of the art.
            </p>
          </div>

          {publications.length > 0 ? (
            <>
              <div className="space-y-5">
                {publications.map((pub) => (
                  <article
                    key={pub.title}
                    className={`relative p-6 border-l-4 ${
                      pub.featured
                        ? 'border-[#0F3E6D] bg-blue-50/40'
                        : 'border-slate-200 bg-slate-50'
                    } rounded-r-lg hover:shadow-sm transition-shadow duration-200`}
                  >
                    {pub.featured && (
                      <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider text-[#0F3E6D] bg-blue-100 px-2 py-0.5 rounded-full">
                        Featured
                      </span>
                    )}
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                        {pub.venue}
                      </span>
                      <span className="text-xs text-slate-400">{pub.date}</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1.5">
                      {pub.title}
                    </h3>
                    <p className="text-slate-500 text-sm mb-4">{pub.authors}</p>
                    <div className="flex gap-2">
                      {pub.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-slate-200/80 text-slate-600 px-3 py-1 rounded-full hover:bg-slate-300 transition-colors cursor-pointer font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>

              <div className="text-center mt-10">
                <Link
                  href="/research"
                  className="inline-flex items-center gap-2 bg-white border border-slate-300 text-slate-700 px-6 py-2.5 rounded-lg hover:bg-slate-50 transition-colors font-medium text-sm"
                >
                  <BookOpen className="size-4" />
                  View Full Archive
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

      {/* ────────────────────── CTA / JOIN ────────────────────── */}
      <section className="py-20 lg:py-24 bg-[#0F3E6D] text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6 leading-tight">
            Shape the Future of AI in Africa
          </h2>
          <p className="text-blue-100 text-lg lg:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            We&rsquo;re looking for passionate researchers, engineers, and
            thinkers ready to tackle meaningful problems with cutting-edge AI.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/join-us"
              className="bg-white text-[#0F3E6D] hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold text-lg transition-colors shadow-lg inline-flex items-center gap-2"
            >
              View Open Positions <ArrowRight className="size-5" />
            </Link>
            <Link
              href="/about"
              className="border border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
