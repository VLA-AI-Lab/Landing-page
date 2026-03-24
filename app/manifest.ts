import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'VLA AI Lab – Vision, Language & Applied AI',
    short_name: 'VLA AI Lab',
    description:
      'Applied AI research lab in Ethiopia advancing language technology, computer vision, governance, and climate AI for Africa.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0F3E6D',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
