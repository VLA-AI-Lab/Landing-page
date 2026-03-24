import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  FlaskConical,
  Users,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About & Mission – VLA AI Lab',
  description:
    'Our vision, mission, core values, and methodology at VLA AI Lab.',
};

/* ── images from prototype ── */
const IMG_MISSION =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBAdkNNKzm6IIa_CRSfzV-QXRT6vmIXVfKFTqhI8zhv83LAcwM2zL7LqQ8fVeMZlDwbWS_jzzxWuxy6lsJeD-i_gCH3jGAicg-UFSNoToS7yqdwCu3aEccpitGuzExCpqZWwsNTTyyf3W1wn-7nBtWSD8mIpOSdXk4UGp83qZKSnSlWXOlh0De3Lpv8ASgQ5a6Bhb4rgBrDtDWUkeWgRdEloJjqedvsjLMl3pll6nzQhlq0RZD4dOxqJSVHIr6JeAs9Wqj8Kg6w';

/* ── data ── */

const values = [
  {
    icon: FlaskConical,
    title: 'Scientific Rigor',
    description:
      'We believe in reproducible results and transparent methodology. Every claim we make is backed by data, and every model is stress-tested against the unknown.',
    iconBg: 'domain-bg-light',
    iconColor: 'domain-text',
  },
  {
    icon: Users,
    title: 'Radical Collaboration',
    description:
      'Silos kill innovation. We actively share knowledge across disciplines, merging cognitive science with computer engineering to forge new paths.',
    iconBg: 'domain-bg-light',
    iconColor: 'domain-text',
  },
  {
    icon: ShieldCheck,
    title: 'Ethical Impact',
    description:
      'Technology is not neutral. We prioritize research that uplifts society and minimizes harm, embedding safety protocols at the foundational level.',
    iconBg: 'domain-bg-light',
    iconColor: 'domain-text',
  },
];

const methodology = [
  {
    step: 1,
    title: 'Identify',
    description: 'Partner with industry to pinpoint high-impact inefficiencies.',
  },
  {
    step: 2,
    title: 'Research',
    description:
      'Develop novel algorithms and test against state-of-the-art benchmarks.',
  },
  {
    step: 3,
    title: 'Prototype',
    description:
      'Build minimum viable models (MVM) for controlled environment testing.',
  },
  {
    step: 4,
    title: 'Deploy',
    description:
      'Scale solutions with continuous monitoring and reinforcement learning.',
  },
];

const milestones = [
  {
    year: '2018',
    title: 'Foundation',
    description:
      'VLA AI Lab was established by Dr. Elena Rostova and a team of ex-CERN physicists with a seed grant from the National Science Foundation.',
    isCurrent: true,
  },
  {
    year: '2020',
    title: 'Project "Aegis" Breakthrough',
    description:
      'Published the seminal paper on self-correcting neural networks for medical imaging, reducing false positive rates by 45% in clinical trials.',
    isCurrent: false,
  },
  {
    year: '2022',
    title: 'Global Expansion',
    description:
      'Opened satellite labs in Zurich and Singapore to focus on sustainable energy grid optimization using reinforcement learning.',
    isCurrent: false,
  },
  {
    year: 'Present',
    title: 'The Generative Frontier',
    description:
      'Currently leading a multi-institutional consortium on safe, explainable Generative AI for enterprise applications.',
    isCurrent: false,
  },
];

/* ═══════════════════════════════════════════ PAGE ═══════════════════════════════════════════ */

export default function AboutPage() {
  return (
    <>
      {/* ────────────────────── VISION HERO ────────────────────── */}
      <section className="relative py-24 sm:py-32 bg-slate-50 overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="domain-text font-semibold tracking-wide uppercase text-sm mb-4 block">
            Our Vision
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
            To bridge the gap between theoretical intelligence and practical
            application, creating{' '}
            <span className="domain-text">AI&nbsp;that&nbsp;matters.</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We envision a future where artificial intelligence solves
            humanity&rsquo;s most complex challenges through rigorous scientific
            inquiry and ethical deployment.
          </p>
        </div>
      </section>

      {/* ────────────────────── MISSION ────────────────────── */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full domain-bg-light domain-text text-xs font-semibold uppercase tracking-wider">
                Our Mission
              </span>
              <h2 className="font-display text-3xl font-bold text-gray-900">
                Applied Science for Real-World Impact
              </h2>
              <div className="text-gray-600 text-lg leading-relaxed space-y-4">
                <p>
                  At VLA AI Lab, we do not innovate for
                  innovation&rsquo;s sake. Our mission is to translate
                  cutting-edge neural architectures into robust, scalable systems
                  that address critical needs in healthcare, logistics, and
                  environmental sustainability.
                </p>
                <p>
                  We operate at the intersection of academic rigor and industrial
                  agility. By fostering deep partnerships with universities and
                  enterprise leaders, we ensure our models are not just
                  state-of-the-art on benchmarks, but resilient in the wild.
                </p>
              </div>
              <div className="pt-2">
                <Link
                  href="/research"
                  className="inline-flex items-center domain-text font-semibold hover:underline gap-1"
                >
                  Read our latest Annual Report
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px]">
                <Image
                  src={IMG_MISSION}
                  alt="Researchers collaborating"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────── CORE VALUES ────────────────────── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl font-bold text-gray-900 mb-4">
              Core Values
            </h2>
            <p className="text-gray-600">
              The principles that guide our research, our partnerships, and our
              code.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div
                  className={`w-14 h-14 ${v.iconBg} rounded-lg flex items-center justify-center mb-6`}
                >
                  <v.icon className={`size-7 ${v.iconColor}`} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {v.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────── METHODOLOGY ────────────────────── */}
      <section className="py-24 domain-bg-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold mb-4">
              The VLA Methodology
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From hypothesis to deployment, our iterative cycle ensures
              excellence.
            </p>
          </div>

          <div className="relative">
            {/* connecting line – desktop only */}
            <div className="hidden md:block absolute top-8 left-[12.5%] w-[75%] h-0.5 bg-white/15" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {methodology.map((m) => (
                <div key={m.step} className="relative text-center">
                  <div className="w-16 h-16 mx-auto bg-white domain-text rounded-full flex items-center justify-center font-bold text-xl shadow-lg mb-6 relative z-10 border-4 border-white/20">
                    {m.step}
                  </div>
                  <h4 className="text-xl font-bold mb-2">{m.title}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {m.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────── MILESTONES ────────────────────── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Milestones
          </h2>

          <div className="relative border-l-2 border-gray-200 ml-4 md:ml-0 space-y-12">
            {milestones.map((m) => (
              <div
                key={m.year}
                className="relative flex flex-col md:flex-row gap-8 items-start"
              >
                {/* dot */}
                <div
                  className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full ring-4 ring-slate-50 ${
                    m.isCurrent ? 'domain-bg' : 'bg-gray-300'
                  }`}
                />

                {/* year */}
                <div className="md:w-32 md:text-right flex-shrink-0 pl-6 md:pl-0">
                  <span
                    className={`text-lg font-bold ${
                      m.isCurrent ? 'domain-text' : 'text-gray-500'
                    }`}
                  >
                    {m.year}
                  </span>
                </div>

                {/* content */}
                <div className="flex-grow pl-6 md:pl-0">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {m.title}
                  </h3>
                  <p className="text-gray-600">{m.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────── CTA ────────────────────── */}
      <section className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-display font-bold text-gray-900">
              Join the frontier
            </h2>
            <p className="mt-2 text-lg text-gray-600">
              Interested in collaborating or joining our team?
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              href="/join-us"
              className="px-6 py-3 text-base font-medium rounded-lg domain-text domain-bg-light hover:opacity-80 transition-colors"
            >
              View Open Roles
            </Link>
            <Link
              href="/partners"
              className="px-6 py-3 text-base font-medium rounded-lg text-white domain-bg domain-bg-hover shadow-md transition-colors"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
