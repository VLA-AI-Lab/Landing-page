import Image from 'next/image';
import Link from 'next/link';
import { Languages, Scale, Wheat, ArrowRight, ChevronRight } from 'lucide-react';

/* ── image URLs from prototype ── */
const IMG_RESEARCHERS =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCDR8q8P4tVm15YOIkiR5CrT99fh4SX2AC-CFLiYe9xGEyEa-rAg2mz2OInktb4t1xa2JXLbvkXXkqjvNqkzcAGdlhRiu-rwCFcx6Mq4PswVyhHrDf8Cv0g0YC3nB_M-vlC9Bx47ya_jqCKglNeJcgQ9PmlR2sQoXtTTP3-uxPG9hDgYRqd2tWsv9H9r8I_qjywul-oALfiEUnkE5sF3uXN0U5CGW-wdOXBb11kvEbjZzOMh6CWDS2IdrohQcqg6DZaOs6aRdOF';
const IMG_NLP =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDrQpLnfUUmCcjWoo77qGX8exmTUyBf7iAB0u5-qGOPFYNSFDP6XkkK9Fv8mknzi_Nm2fMXpaWtEQcwXxx3BsGq_aclEQvyiGhH9fPUgAq8B5-269BnMXWsibEKS2oFXASr5c0U7QXDBbWGEsfsMumR5ddnuiRIJbsHgQZLHg4jW_kvgXj4gUWMN4oOlt7uuxsU6rynN5DKgOXxceO8eUIwrMVyZjE3T_O6MiJu4NtlLQGMbHJZrcSOG7sngNyXwJEpg8hhzmoX';
const IMG_AGRICULTURE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDtH44HgKMQGw-PRfAzjHuOCIfJzm_hbK1ha0qbZyYQEX1m8OR4F0GVkkN6DD8MVGGIILYFDASFIZUsHacT9sGcqQzYK-D8Bj-oltHYfq9MEsfm3p9Bia_ORM3Hz8WYT3aQ30fHB_rQh61tbHyG8oVfatI1R8rTYik5KXEEEcjxceLh21de0IFPRBbiaJ6E4HhmHE7z2K3aKt9sJQD4KLQgvU2OKhiOIMO5AjVfVgIqgAK0dWMs0edlrDOIOpcPSTMq3b7deByz';

/* ── research domain data ── */
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

/* ── stats data ── */
const stats = [
  { value: '15+', label: 'Research Papers' },
  { value: '4', label: 'Key Patents' },
  { value: '12M+', label: 'Datapoints Collected' },
  { value: '8', label: 'University Partners' },
];

/* ── publications data ── */
const publications = [

];

/* ═══════════════════════════════════════════ PAGE ═══════════════════════════════════════════ */

export default function HomePage() {
  return (
    <>
      {/* ────────────────────── HERO ────────────────────── */}
      <section className="relative bg-[#0F3E6D] overflow-hidden">
        {/* dot-grid overlay */}
        <div className="absolute inset-0 hero-pattern opacity-20" />

        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F3E6D] via-[#0F3E6D]/90 to-transparent" />

        {/* decorative blob – desktop only */}
        <div className="absolute right-0 top-0 h-full w-1/2 opacity-[0.08] pointer-events-none hidden lg:block">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path
              d="M42.7,-73.2C55.9,-67.1,67.6,-57.8,76.4,-46.6C85.2,-35.4,91.1,-22.3,90.4,-9.5C89.7,3.3,82.4,15.8,74.1,27.3C65.8,38.8,56.5,49.3,45.4,57.4C34.3,65.5,21.3,71.2,7.9,73.1C-5.5,75,-16.4,73.1,-27.6,69.5C-38.8,65.9,-50.3,60.6,-59.6,52.2C-68.9,43.8,-76,32.3,-79.6,19.8C-83.2,7.3,-83.3,-6.2,-78.9,-18.8C-74.5,-31.4,-65.6,-43.1,-54.6,-50.5C-43.6,-57.9,-30.5,-61,-17.8,-64.8C-5.1,-68.6,7.2,-73.1,20,-75.4"
              fill="#ffffff"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="lg:w-2/3">
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight tracking-tight">
              Delta Applied AI{' '}
              <br className="hidden sm:block" />
              Research Lab
            </h1>

            <p className="text-xl lg:text-2xl text-blue-100 font-light mb-10 max-w-2xl leading-relaxed">
              Applied AI research for real-world impact in{' '}
              <span className="font-semibold text-white">
                Ethiopia&nbsp;&amp;&nbsp;Africa
              </span>
              .
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
                className="border border-white/40 text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold text-lg transition-colors backdrop-blur-sm"
              >
                View Publications
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────── WHO WE ARE ────────────────────── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* text */}
            <div>
              <span className="text-[#4a7a9e] font-bold uppercase tracking-widest text-sm mb-2 block">
                Who We Are
              </span>
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">
                Bridging the Gap Between Theory and Practice
              </h2>
              <div className="text-slate-600 leading-relaxed text-lg space-y-4">
                <p>
                  Delta Applied AI Research Lab is dedicated to advancing the
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

            {/* image */}
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl group">
              <Image
                src={IMG_RESEARCHERS}
                alt="Researchers collaborating in a modern lab environment"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-[#0F3E6D]/20 mix-blend-multiply" />
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────── CORE RESEARCH DOMAINS ────────────────────── */}
      <section
        id="research"
        className="py-20 bg-white border-y border-slate-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* heading */}
          <div className="text-center mb-16">
            <span className="text-[#4a7a9e] font-bold uppercase tracking-widest text-sm mb-2 block">
              Our Focus
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-900">
              Core Research Domains
            </h2>
          </div>

          {/* cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {domains.map((d) => (
              <div
                key={d.title}
                className="bg-slate-50 p-8 rounded-xl border border-slate-200 hover:border-[#0F3E6D]/40 transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-[#0F3E6D] group-hover:bg-[#0F3E6D] group-hover:text-white transition-colors duration-300">
                  <d.icon className="size-7" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {d.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {d.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────── STATS BANNER ────────────────────── */}
      <section className="py-16 bg-[#0F3E6D] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:divide-x md:divide-blue-400/30">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-4xl lg:text-5xl font-display font-bold mb-2">
                  {s.value}
                </div>
                <div className="text-blue-200 text-sm font-medium uppercase tracking-wider">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────── FEATURED PROJECTS ────────────────────── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* heading row */}
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-display font-bold text-slate-900">
                Featured Projects
              </h2>
              <p className="text-slate-600 mt-2">
                Highlights from our current initiatives.
              </p>
            </div>
            <Link
              href="/research"
              className="hidden md:inline-flex items-center text-[#0F3E6D] font-semibold hover:underline gap-1"
            >
              View All Projects <ArrowRight className="size-4" />
            </Link>
          </div>

          {/* project cards */}
          <div className="space-y-8">
            {/* Project Fidel */}
            <div className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-slate-200 transition-all">
              <div className="md:w-1/3 relative min-h-[16rem]">
                <Image
                  src={IMG_NLP}
                  alt="Amharic text processing visualisation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                  NLP
                </span>
              </div>
              <div className="p-8 md:w-2/3 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  Project Fidel: Amharic LLM
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  A foundational Large Language Model specifically fine-tuned for
                  Amharic and Ge&apos;ez script languages. This project aims to
                  democratize access to generative AI tools for over 50&nbsp;million
                  speakers in the horn of Africa.
                </p>
                <Link
                  href="/research"
                  className="text-[#0F3E6D] font-medium hover:text-blue-700 inline-flex items-center gap-1"
                >
                  Read Case Study <ChevronRight className="size-4" />
                </Link>
              </div>
            </div>

            {/* CropGuard AI */}
            <div className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-slate-200 transition-all">
              <div className="md:w-1/3 relative min-h-[16rem]">
                <Image
                  src={IMG_AGRICULTURE}
                  alt="Drone view of agricultural fields"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                  Agriculture
                </span>
              </div>
              <div className="p-8 md:w-2/3 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  CropGuard AI
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Using computer vision on satellite and drone imagery to detect
                  early signs of rust disease in wheat crops. Early warning
                  systems deployed in three regions have saved an estimated 15%
                  of annual yield.
                </p>
                <Link
                  href="/research"
                  className="text-[#0F3E6D] font-medium hover:text-blue-700 inline-flex items-center gap-1"
                >
                  Read Case Study <ChevronRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* mobile-only "View All" */}
          <div className="mt-8 md:hidden text-center">
            <Link
              href="/research"
              className="inline-flex items-center text-[#0F3E6D] font-semibold hover:underline gap-1"
            >
              View All Projects <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ────────────────────── RECENT PUBLICATIONS ────────────────────── */}
      <section
        id="publications"
        className="py-20 bg-white border-t border-slate-200"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-10 text-center">
            Recent Publications
          </h2>

          <div className="space-y-6">
            {publications.map((pub) => (
              <article
                key={pub.title}
                className={`p-6 border-l-4 ${
                  pub.featured
                    ? 'border-[#0F3E6D]'
                    : 'border-slate-300'
                } bg-slate-50 rounded-r-lg hover:shadow-md transition-shadow`}
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2 sm:mb-0">
                    {pub.venue}
                  </span>
                  <span className="text-xs text-slate-500">{pub.date}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {pub.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4">{pub.authors}</p>
                <div className="flex gap-3">
                  {pub.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-slate-200 text-slate-700 px-2.5 py-1 rounded hover:bg-slate-300 transition-colors cursor-pointer"
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
              className="inline-flex items-center bg-white border border-slate-300 text-slate-700 px-6 py-2.5 rounded-lg hover:bg-slate-50 transition-colors font-medium text-sm"
            >
              View Archive
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}