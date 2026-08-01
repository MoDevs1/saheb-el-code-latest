'use client'

import { Zap, Globe, ShoppingCart } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { translations } from '@/lib/translations'

export default function Services() {
  const { language, isArabic } = useLanguage()
  const t = translations[language]

  const services = [
    {
      icon: Zap,
      titleKey: language === 'en' ? 'serviceLandingPageTitle' : 'serviceLandingPageTitle',
      descKey: language === 'en' ? 'serviceLandingPageDesc' : 'serviceLandingPageDesc',
    },
    {
      icon: Globe,
      titleKey: language === 'en' ? 'serviceCorporateTitle' : 'serviceCorporateTitle',
      descKey: language === 'en' ? 'serviceCorporateDesc' : 'serviceCorporateDesc',
    },
    {
      icon: ShoppingCart,
      titleKey: language === 'en' ? 'serviceEcommerce' : 'serviceEcommerce',
      descKey: language === 'en' ? 'serviceEcommerceDesc' : 'serviceEcommerceDesc',
    },
  ]

  return (
    <section id="services" className="py-20 px-4 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up-fade">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t.servicesTitle}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.servicesSubtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-muted to-white border border-border rounded-2xl p-8 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 animate-slide-up-fade cursor-pointer"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-8 h-8 text-primary group-hover:rotate-12 transition-transform duration-300" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {t[service.titleKey]}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6 group-hover:text-foreground transition-colors duration-300">
                  {t[service.descKey]}
                </p>

                {/* Link */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-all duration-300 group-hover:translate-x-1"
                >
                  {t.heroLearnMore}
                  <span className="group-hover:translate-x-1 transition-transform duration-300">{isArabic ? '←' : '→'}</span>
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
