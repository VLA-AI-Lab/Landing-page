import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Linkedin, GraduationCap, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'People & Team – VLA AI Lab',
  description:
    'Meet the minds behind VLA AI Lab – researchers, engineers, and academics advancing AI responsibly.',
};

/* ── images ── */
const IMG_DIRECTOR =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBQIHGcFy8ic1xeudsM19j-EhlIwm3evv3gNnpWVRf82ggC2RU19PO24IfV_OvXdR_KW7KUrOyqmOdiPAivycp2t3iVry50KUJTEUNb5HyPlnJ5KQ0UnEEn1NAnJ3CjLYx1Zg4aqB64sr6w1pU-z8UVcYP3nNEVxf91d-6AulhRk_zN6Ur1Dz6neCJDQBGZrcbFDNipJYNSeHvKJqh-JPZZrFEVrpT67gvgAyXYA_UeCsgWeBXZYcrWNtNbr5SO-oD1-ravIvr2';

/* ── data ── */

const director = {
  name: 'Dr. Alistair Vance',
  role: 'Lab Director & Principal Investigator',
  image: IMG_DIRECTOR,
  bio: "Dr. Vance leads VLA AI Lab with over 15 years of experience in neural architecture search and reinforcement learning. Formerly a Senior Research Scientist at Google DeepMind, he now focuses on bridging the gap between theoretical AI advancements and practical, scalable applications in healthcare and environmental science.",
  interests: ['Reinforcement Learning', 'Neural Architecture Search', 'AI Safety'],
};

const leadResearchers = [
  {
    name: 'Dr. Elena Rossi',
    role: 'Lead Researcher, NLP',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDK_rURhjmK_Us1fBpRXlrhDZwmD_cswNCIBDDM6j5nXv5hnemH0iCmY6gijZvzRpLt2jYzGL01DqeAxokIBc59np6fzHEtvSNixbaDMt4V1OOX9GY9p4uInHFCZ8iNbat_iiQLwVRCnE28s_XjZSj-Uk8SniI0wlr5g5ykJxHOywdi_vaTAtePZwbAWTMFYeEcl6HYVaOXFWA2QHAlq-9ssfVKTEBvmJb7M0yvnksBJ4WzUdodKVm6QvutAy4fkJoxJsf5tKKI',
    bio: "Specializing in large language models and semantic understanding. Elena's work focuses on reducing bias in generative models and improving context retention in long-form document analysis.",
    tags: ['NLP', 'Ethics'],
  },
  {
    name: 'James Chen',
    role: 'Lead Researcher, Computer Vision',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC5dEeDmrNXecUJDfX35N0J590zJJgCUdg76WdFOMZeWY9KVXKqkBHPmQTcILCPSFEzq49QlKrwJc_MwswKzFwI7Ig7ikvSuLmSkiraJfg6csfZ6GCn9TIHoMEY7hShkmojScoZLUruaalnZePDQxH39NbxkFQAO67lncuupuS1Wqo2BKkAhjZWpbRWDxwRoNnvGAO7W8KRjfNMH4srX03ctah0SQWrBr7squdLd_OZabJNgDBkY4zWiODARxLxzegG8fsFa7au',
    bio: 'James leads the Computer Vision division, developing state-of-the-art models for medical imaging diagnostics and autonomous navigation systems in unstructured environments.',
    tags: ['Computer Vision', 'Robotics'],
  },
  {
    name: 'Dr. Sarah Mbeki',
    role: 'Lead Researcher, Applied Systems',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuASYtYujNJHSD_dj4Y6--jDe_O67tD-0tx816PcPOlleO22ONqEoYbaEoIj8YKjlbJcyK_MZ_yvg6MLz-LOK6LNGKS7WEPPi1AtDkoKqcHZOSUu4X1ry9xPUGtKOQphPXSxB7tMuw4qPHOuvrx3ORdJWy9duaBDR6xKj-wykUpZMbIanq4-hRbTlYeri1ZF2uJjmUU7q8RJDyyfDjTbemhfZjc3NLHkkHQHijWZW4bRifbsw8ttUj_jJB_VcLc1HZhAKTKXlXIc',
    bio: 'Focusing on the deployment and scalability of AI systems. Sarah investigates efficient inference methods and edge-computing solutions for real-time AI applications.',
    tags: ['Edge AI', 'Optimization'],
  },
];

const advisors = [
  {
    name: 'Prof. David Kim',
    role: 'Professor of CS, Stanford University',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuABn3HyMueBEtVANYtKzl_MLJjri_nnj11jW6gIJUY_ASiuZW34BRxGkJIc5T4pfHGNAxchbneXaT88ipkhOH6jUTTUyDKsGJ-yVPVO11ngXp1NjendouZLT4t9CoCjpR2NGkjeJJlf5cEisHtpNCTtt8nDKLmhhl6FNkU4kS7cK1Yg22wQ24oEZB2W6u8t5CDDSJzbpMoari0nWhFCS6qrFXN2zc2TJCRXpw19TaKSolFeiReIpm01CJ-OcomB77YB_ZjUZzAk',
    quote:
      'Advising on core algorithmic robustness and theoretical guarantees.',
  },
  {
    name: 'Dr. Anika Patel',
    role: 'Fellow, Royal Society of Engineering',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBksMeLget0Mlx8HOsQ2IE3gTxHXfg1e8MI2nNlk0sqyQrETtgABLtntCsalYT6Tj6fHlYw1tndEVXdDrF3ml2hitZM7hdlbdt9MOMA8NRigJbMgjfxb3abE1b2MZADtf6q-PxBwslILHrIJ_n64p4e48Qclxh196sQTA75ra4WOr_7Noiiid8ZCTucuFM7z5Kb1UyyOb3a71v9grjuN3XqAmR7tBekeDTZHy3tC0OgEfBq2pBtgNdscCz1GYSxv5MftzbRtnwh',
    quote:
      "Guiding the lab's strategy on responsible AI deployment in public sectors.",
  },
];

const collaborators = [
  {
    name: 'Michael Torres',
    role: 'PhD Candidate',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCBcZluhvY0hhnyJTlZgV59ML8eweLNNZh5tVFMou2GdsrOqbGQpkQAjSd2fLx7IazUYUS6jr7y039QJvDWO1N8IV9PTLWu3NAImNJUDxr6wZz8P6GIPXezIhPZrT7uPM4sV9UzzGQndgDbEbiVh6OFtWxpTPH8mZc3LlK--hyuV4AfPz9PCbjRGnKApm5YQvImP5NaHCqsq50epaGNxAualYUNVBuwU685lFlwwym0gZWoAcsGut6TKZu5fP2Lvb6eRflU4agz',
  },
  {
    name: 'Lisa Wong',
    role: 'Research Engineer',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCpc4TSUjbcSVC83of8gMulksxPa5Lzt_xXUa0ZqafcpbbHfSp6N1Mrhtj4hvTfhziQsiUwji9qToW9ZpCKyQQtCmp9fDrq76jp68142EUzzaH4BLUZsLX7cek9WNHY_ubxJgDvdUXtpo-VnhPaluGBv__dMQC_dzqg9PHAlqaI3LjnGWwdyiQaPgjNazpyfXYndKcw--uF1Q62GZsjxYWCqCF4BGewiYnsBBGT7tdEFBnKcwN2nJYkBKODi34kizdtiBUPcKrz',
  },
  {
    name: 'Robert Fox',
    role: 'Postdoc Fellow',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDAlghURaSf9lQeM3IMuXQ8OvM_NShKnpqR64-T29k7ebhR5qBzxFs8vIsMMi-MDrQjzCuxtp-SHVL2K0biCGO_cANCHuqxZ8-LJ9eDdeVKc4EXE5a9eOJDVcpuR2O1i-wJt5Z8V7XXLRIgbkN8YWX-gO-XPiKWuCxh0vbhYsBInqq1wLU9HRIrWNJkKhnXODobUOUzNjYZziIvI3L_e9UlZi6V7bBWhlxch8vie67s_NcF09z8CWdj4cbo0YDMXrd1AsPgcMR8',
  },
  {
    name: 'Jenny Wilson',
    role: 'Visiting Scholar',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCZQkBsrClNuy2NBjcHdsbrlJfiwJR-Jw37YWCZpMawzoGCXXxtqFyZwKPBuYa9MOYOJLAbP7uMGP4ULB7_ssuIbDFtE2-WGUF2WFXamzeSZ03hjA8KEs9Vr_UmzuVW2DbNAno5lCcN047Nmdgub_r-CdgvFsHO8UE8WWEuvyDS0Mu1u4YMGhwuQHHr__94mL03crGNlVqHgxi6dqe_09rb2xj-F81NWNukljGQV0zdlFhj-VneSGpQLvTj5WZSGIIVp_D96h2v',
  },
  {
    name: 'Guy Hawkins',
    role: 'Software Engineer',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDCvUIuFcKDAYAE5337haDmupWyw7Dof2kcG0_uIJzurvkazZ24acbmY2wFqegVNyxMeSHyUklJqHcaU8_9bcJOg3KUC07trdDBc8W6yYc3GWxJuqtLhNaXiFfR9an6AEvfd5_cm-qt8aUK6UGVbQUhOr24csB-YjGTWe8YxVm-HSwrp8fufvNf7k4zgR6h-H5sKS-UfE9fGOx1fUwWNRtXaNrLuvMgFfcHaRO8n2DOUJvJhgOHlUxJuNjQj1fi_20k3h1c-ZzX',
  },
];

/* ═══════════════════════════════════════════ PAGE ═══════════════════════════════════════════ */

export default function TeamPage() {
  return (
    <>
      {/* ────────────────────── HERO ────────────────────── */}
      <section className="relative pt-20 pb-16 bg-gradient-to-b from-blue-50 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Team
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed">
            Meet the minds behind VLA AI Lab. We are a diverse group of
            researchers, engineers, and academics dedicated to advancing the
            frontiers of artificial intelligence responsibly.
          </p>
        </div>
      </section>

      {/* ────────────────────── CORE LEADERSHIP ────────────────────── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* section divider */}
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-gray-200" />
            <h2 className="text-2xl font-bold text-center text-[#0F3E6D] uppercase tracking-wide">
              Core Leadership
            </h2>
            <div className="h-px flex-1 bg-gray-200" />
          </div>

          {/* Director card */}
          <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-xl overflow-hidden mb-16 border border-gray-100">
            <div className="md:w-1/3 relative min-h-[20rem]">
              <Image
                src={director.image}
                alt={director.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              {/* mobile overlay */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-6 md:hidden">
                <h3 className="text-white text-2xl font-bold">
                  {director.name}
                </h3>
                <p className="text-blue-200 font-medium">{director.role.split(' & ')[0]}</p>
              </div>
            </div>
            <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
              <div className="hidden md:block mb-4">
                <h3 className="text-3xl font-display font-bold text-gray-900">
                  {director.name}
                </h3>
                <p className="text-[#0F3E6D] font-medium text-lg mt-1">
                  {director.role}
                </p>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {director.bio}
              </p>
              <div className="mb-6">
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">
                  Research Interests
                </h4>
                <div className="flex flex-wrap gap-2">
                  {director.interests.map((interest) => (
                    <span
                      key={interest}
                      className="px-3 py-1 bg-blue-50 text-[#0F3E6D] text-sm rounded-full font-medium"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4 mt-auto">
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#0F3E6D] transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="size-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#0F3E6D] transition-colors"
                  aria-label="Google Scholar"
                >
                  <GraduationCap className="size-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Lead researchers grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadResearchers.map((person) => (
              <div
                key={person.name}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden flex flex-col h-full"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      {person.name}
                    </h3>
                    <p className="text-[#0F3E6D] text-sm font-medium">
                      {person.role}
                    </p>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {person.bio}
                  </p>
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <div className="mb-3 flex flex-wrap gap-1">
                      {person.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <a
                        href="#"
                        className="text-gray-400 hover:text-[#0F3E6D] transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="size-5" />
                      </a>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-[#0F3E6D] transition-colors"
                        aria-label="Google Scholar"
                      >
                        <GraduationCap className="size-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────── ACADEMIC ADVISORS ────────────────────── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl font-bold text-[#0F3E6D] uppercase tracking-wide">
              Academic Advisors
            </h2>
            <div className="h-px flex-1 bg-gray-200" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advisors.map((advisor) => (
              <div
                key={advisor.name}
                className="flex bg-white p-6 rounded-lg shadow-sm border border-gray-100 items-start gap-5"
              >
                <div className="relative w-20 h-20 flex-shrink-0 rounded-full overflow-hidden ring-2 ring-[#0F3E6D]/20">
                  <Image
                    src={advisor.image}
                    alt={advisor.name}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {advisor.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">{advisor.role}</p>
                  <p className="text-sm text-gray-600 italic">
                    &ldquo;{advisor.quote}&rdquo;
                  </p>
                  <div className="mt-3 flex gap-3">
                    <a
                      href="#"
                      className="text-gray-400 hover:text-[#0F3E6D] transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="size-4" />
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-[#0F3E6D] transition-colors"
                      aria-label="Website"
                    >
                      <Globe className="size-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────── RESEARCH COLLABORATORS ────────────────────── */}
      <section className="py-16 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-xl font-bold text-gray-500 uppercase tracking-wide">
              Research Collaborators
            </h2>
            <div className="h-px flex-1 bg-gray-200" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {collaborators.map((person) => (
              <div key={person.name} className="group text-center">
                <div className="relative w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden ring-2 ring-gray-100 group-hover:ring-[#0F3E6D] transition-all">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>
                <h4 className="font-semibold text-gray-900 text-sm">
                  {person.name}
                </h4>
                <p className="text-xs text-gray-500">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────── CTA ────────────────────── */}
      <section className="bg-[#0F3E6D] py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join the Future of Applied AI
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            We are always looking for passionate researchers, engineers, and
            students to join our lab. Check out our open positions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/join-us"
              className="bg-white text-[#0F3E6D] font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors shadow-lg inline-flex items-center justify-center gap-2"
            >
              View Openings <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/join-us"
              className="border border-blue-300/40 text-white font-semibold py-3 px-8 rounded-full hover:bg-white/10 transition-colors inline-flex items-center justify-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
