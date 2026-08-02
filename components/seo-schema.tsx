export default function SEOSchema() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'SahebElCode Company',
    alternateName: 'شركة صاحب الكود',
    description: 'Professional web development and design solutions',
    url: 'https://sahebelcode.com',
    telephone: '+201055891861',
    email: 'mtmm@sahebelcode.xyz',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Egypt',
      addressLocality: 'Egypt',
      addressRegion: 'Egypt',
      postalCode: '',
      addressCountry: 'EG',
    },
    sameAs: [
      'https://wa.me/+201055891861',
    ],
    image: 'https://sahebelcode.com/og-image.png',
    priceRange: '$$',
    areaServed: ['EG', 'AE', 'SA', 'KW'],
    serviceType: [
      'Web Development',
      'Web Design',
      'E-commerce Solutions',
      'Landing Page Design',
      'Corporate Website Development',
    ],
    knowsAbout: [
      'Web Development',
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'E-commerce',
      'SEO',
    ],
  }

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SahebElCode Company',
    alternateName: 'شركة صاحب الكود',
    url: 'https://sahebelcode.com',
    logo: 'https://sahebelcode.com/logo.png',
    description: 'Professional web development and design company delivering 50+ projects',
    foundingDate: '2020',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: '+201055891861',
      email: 'mtmm@sahebelcode.xyz',
    },
    sameAs: [
      'https://wa.me/+201055891861',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '50',
      bestRating: '5',
      worstRating: '1',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  )
}
