import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';
  return [
    { url: `${base}/`, priority: 1.0, changeFrequency: 'weekly', lastModified: new Date() },
  ];
}


