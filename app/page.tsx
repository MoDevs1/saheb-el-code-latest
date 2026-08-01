'use client'

import { useEffect } from 'react'
import { useLanguage } from '@/lib/language-context'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Services from '@/components/services'
import Portfolio from '@/components/portfolio'
import WhyUs from '@/components/why-us'
import CTA from '@/components/cta'
import Footer from '@/components/footer'

export default function Home() {
  const { isArabic } = useLanguage()

  useEffect(() => {
    // Update document direction based on language
    const htmlElement = document.documentElement
    if (isArabic) {
      htmlElement.setAttribute('dir', 'rtl')
      htmlElement.setAttribute('lang', 'ar')
    } else {
      htmlElement.setAttribute('dir', 'ltr')
      htmlElement.setAttribute('lang', 'en')
    }
  }, [isArabic])

  return (
    <div className="w-full bg-background">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <WhyUs />
      <CTA />
      <Footer />
    </div>
  )
}
