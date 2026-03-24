import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { OrganizationJsonLd, WebsiteJsonLd } from '@/components/json-ld';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://vlaailab.com';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'VLA AI Lab | Vision, Language & Applied AI Research in Ethiopia',
    template: '%s | VLA AI Lab',
  },
  description:
    'VLA AI Lab is an applied AI research lab in Ethiopia advancing language technology, computer vision, governance AI, and climate AI for real-world impact across Africa.',
  keywords: [
    'VLA AI Lab',
    'VLA Lab',
    'AI research Ethiopia',
    'artificial intelligence Ethiopia',
    'AI lab Africa',
    'Ethiopian AI research',
    'NLP Ethiopia',
    'Amharic NLP',
    'Amharic language model',
    'African AI',
    'low-resource NLP',
    'computer vision Africa',
    'climate AI Ethiopia',
    'agricultural AI Africa',
    'governance AI',
    'machine learning Ethiopia',
    'deep learning Africa',
    'Addis Ababa AI lab',
    'Vision Language Applied AI',
    'AI research lab Addis Ababa',
  ],
  authors: [{ name: 'VLA AI Lab', url: BASE_URL }],
  creator: 'VLA AI Lab',
  publisher: 'VLA AI Lab',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'VLA AI Lab',
    title: 'VLA AI Lab | Vision, Language & Applied AI Research in Ethiopia',
    description:
      'Applied AI research for real-world impact in Ethiopia & Africa. Language technology, computer vision, governance, and climate AI.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VLA AI Lab | Vision, Language & Applied AI Research in Ethiopia',
    description:
      'Applied AI research for real-world impact in Ethiopia & Africa. Language technology, computer vision, governance, and climate AI.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  category: 'technology',
};

export const viewport: Viewport = {
  maximumScale: 1,
  themeColor: '#0F3E6D',
};

const inter = Inter({ subsets: ['latin'] });
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`bg-white dark:bg-gray-950 text-black dark:text-white ${inter.className} ${spaceGrotesk.variable}`}
    >
      <body className="min-h-[100dvh] bg-slate-50 flex flex-col antialiased">
        <OrganizationJsonLd />
        <WebsiteJsonLd />
        <Header />
        <div className="flex-1 pt-16">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
