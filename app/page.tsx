'use client'

import Header from '@/components/header'
import Hero from '@/components/hero'
import Services from '@/components/services'
import Portfolio from '@/components/portfolio'
import WhyUs from '@/components/why-us'
import CTA from '@/components/cta'
import Footer from '@/components/footer'

export default function Home() {
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
