import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nibicons.vercel.app';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Nibicons — a stroke icon set for interfaces',
    template: '%s · Nibicons',
  },
  description:
    'Nibicons is a consistent set of 24×24 stroke icons for web interfaces. Browse, copy SVG, and install via npm, yarn, pnpm, or CDN.',
  openGraph: {
    title: 'Nibicons — a stroke icon set for interfaces',
    description: 'Browse and copy consistent 24×24 stroke icons. Install via npm, yarn, pnpm, or CDN.',
    type: 'website',
    url: siteUrl,
  },
  twitter: {
    card: 'summary',
    title: 'Nibicons — a stroke icon set for interfaces',
    description: 'Browse and copy consistent 24×24 stroke icons.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
