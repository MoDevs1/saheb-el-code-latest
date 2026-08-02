import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { LanguageProvider } from '@/lib/language-context'
import { ThemeProvider } from '@/lib/theme-context'
import SEOSchema from '@/components/seo-schema'

export const metadata: Metadata = {
  metadataBase: new URL('https://sahebelcode.com'),
  title: 'SahebElCode Company | Professional Web Development & Design Solutions',
  description: 'Transform your business online with professional web development and design solutions. 50+ projects delivered. Landing pages, corporate websites, and e-commerce solutions.',
  keywords: ['web development', 'web design', 'e-commerce', 'landing pages', 'corporate websites', 'Egypt', 'digital solutions'],
  generator: 'SahebElCode Company',
  applicationName: 'SahebElCode Company',
  authors: [{ name: 'SahebElCode Company' }],
  creator: 'SahebElCode Company',
  publisher: 'SahebElCode Company',
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    type: 'website',
    url: 'https://sahebelcode.com',
    title: 'SahebElCode Company | Professional Web Development & Design Solutions',
    description: 'Transform your business online with professional web development and design solutions. 50+ projects delivered.',
    siteName: 'SahebElCode Company',
    locale: 'ar_EG',
    alternateLocale: ['en_US'],
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SahebElCode Company - Web Development & Design',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SahebElCode Company | Professional Web Development & Design Solutions',
    description: 'Transform your business online with professional web development and design solutions.',
    images: ['/og-image.png'],
    creator: '@SahebElCode',
    site: '@SahebElCode',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
  alternates: {
    canonical: 'https://sahebelcode.com',
    languages: {
      'en-US': 'https://sahebelcode.com?lang=en',
      'ar-EG': 'https://sahebelcode.com?lang=ar',
    },
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://sahebelcode.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="google-site-verification-code" />
        <SEOSchema />
      </head>
      <body className="antialiased bg-background">
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
