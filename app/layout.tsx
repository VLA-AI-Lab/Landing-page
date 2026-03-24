import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { DomainProvider } from '@/lib/domain-context';
import { DomainPicker } from '@/components/domain-picker';

export const metadata: Metadata = {
  title: 'VLA AI Lab – Vision, Language and Applied AI',
  description:
    'Applied AI research for real-world impact in Ethiopia & Africa. Language technology, computer vision, governance, and climate AI.',
};

export const viewport: Viewport = {
  maximumScale: 1,
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
        <DomainProvider>
          <Header />
          <div className="flex-1 pt-16">{children}</div>
          <Footer />
          <DomainPicker />
        </DomainProvider>
      </body>
    </html>
  );
}
