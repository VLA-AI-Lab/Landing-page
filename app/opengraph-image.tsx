import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'VLA AI Lab – Vision, Language & Applied AI';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0F3E6D 0%, #1a5a9e 50%, #0F3E6D 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Background pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.06,
            backgroundImage:
              'radial-gradient(circle at 25% 25%, white 1px, transparent 1px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            display: 'flex',
          }}
        />

        {/* Logo cube */}
        <svg
          viewBox="0 0 110 110"
          width="120"
          height="120"
          style={{ marginBottom: 24 }}
        >
          <polygon points="55,5 100,27.5 55,50 10,27.5" fill="#1D9E75" />
          <polygon points="10,27.5 55,50 55,100 10,77.5" fill="#EF9F27" />
          <polygon points="55,50 100,27.5 100,77.5 55,100" fill="#7F77DD" />
        </svg>

        {/* Title */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            marginBottom: 16,
          }}
        >
          <span style={{ fontSize: 64, fontWeight: 800, color: '#1D9E75' }}>V</span>
          <span style={{ fontSize: 64, fontWeight: 800, color: '#EF9F27' }}>L</span>
          <span style={{ fontSize: 64, fontWeight: 800, color: '#7F77DD' }}>A</span>
          <span style={{ fontSize: 56, fontWeight: 300, color: 'rgba(255,255,255,0.7)', marginLeft: 8 }}>
            AI Lab
          </span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 28,
            color: 'rgba(255,255,255,0.85)',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            fontWeight: 500,
            marginBottom: 24,
          }}
        >
          Vision · Language · Applied AI
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 22,
            color: 'rgba(255,255,255,0.6)',
            maxWidth: 700,
            textAlign: 'center',
            lineHeight: 1.5,
          }}
        >
          Applied AI research for real-world impact in Ethiopia &amp; Africa
        </div>
      </div>
    ),
    { ...size }
  );
}
