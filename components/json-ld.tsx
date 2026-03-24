const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://vlaailab.com';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ResearchOrganization',
  name: 'VLA AI Lab',
  alternateName: [
    'Vision Language and Applied AI Lab',
    'VLA Lab',
    'VLA AI Lab Ethiopia',
  ],
  url: BASE_URL,
  logo: `${BASE_URL}/icon.svg`,
  description:
    'Applied AI research lab in Addis Ababa, Ethiopia, advancing language technology, computer vision, governance AI, and climate AI for real-world impact across Africa.',
  foundingLocation: {
    '@type': 'Place',
    name: 'Addis Ababa, Ethiopia',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Addis Ababa',
      addressCountry: 'ET',
    },
  },
  areaServed: ['Ethiopia', 'Africa'],
  knowsAbout: [
    'Artificial Intelligence',
    'Natural Language Processing',
    'Computer Vision',
    'Machine Learning',
    'Large Language Models',
    'Low-resource NLP',
    'African languages AI',
    'Amharic NLP',
    'Climate AI',
    'Agricultural AI',
    'Governance AI',
  ],
  sameAs: [],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'VLA AI Lab',
  url: BASE_URL,
  description:
    'Official website of VLA AI Lab — Vision, Language & Applied AI research for Ethiopia and Africa.',
  publisher: {
    '@type': 'ResearchOrganization',
    name: 'VLA AI Lab',
  },
};

export function OrganizationJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}

export function WebsiteJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
    />
  );
}
