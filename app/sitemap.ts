import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sahebelcode.com'
  const lastModified = new Date()

  return [
    {
      url: baseUrl,
      lastModified: lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}#services`,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}#portfolio`,
      lastModified: lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}#about`,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}#contact`,
      lastModified: lastModified,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
  ]
}
