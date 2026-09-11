import { ICONS } from '../data/icons';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nibicons.vercel.app';

export default function sitemap() {
  const now = new Date();

  const staticUrls = [
    { url: `${siteUrl}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
  ];

  const iconUrls = ICONS.map((icon) => ({
    url: `${siteUrl}/icons/${icon.name}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticUrls, ...iconUrls];
}
