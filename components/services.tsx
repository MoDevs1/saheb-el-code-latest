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
      titleKey: language === 'en' ? t.serviceLandingPageTitle : t.serviceLandingPageTitle,
      descKey: language === 'en' ? t.serviceLandingPageDesc : t.serviceLandingPageDesc,
    },
    {
      icon: Globe,
      titleKey: language === 'en' ? t.serviceCorporateTitle : t.serviceCorporateTitle,
      descKey: language === 'en' ? t.serviceCorporateDesc : t.serviceCorporateDesc,
    },
    {
      icon: ShoppingCart,
      titleKey: language === 'en' ? t.serviceEcommerce : t.serviceEcommerce,
      descKey: language === 'en' ? t.serviceEcommerceDesc : t.serviceEcommerceDesc,
    },
  ]

  return (
    <section id="services" className="py-20 px-4 bg-white dark:bg-[#0B0F17] overflow-hidden transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up-fade">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground dark:text-slate-100 mb-4">
            {t.servicesTitle}
          </h2>
          <p className="text-lg text-muted-foreground dark:text-slate-400 max-w-2xl mx-auto">
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
                className="group bg-gradient-to-br from-muted to-white dark:from-slate-900/60 dark:to-slate-800/40 border border-border dark:border-slate-800 rounded-2xl p-8 hover:shadow-lg hover:shadow-primary/10 dark:hover:shadow-emerald-500/20 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-2 animate-slide-up-fade cursor-pointer"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-secondary dark:bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/10 dark:group-hover:bg-emerald-500/20 group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-8 h-8 text-primary dark:text-emerald-400 group-hover:rotate-12 transition-transform duration-300" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground dark:text-slate-100 mb-4 group-hover:text-primary dark:group-hover:text-emerald-400 transition-colors duration-300">
                  {service.titleKey}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground dark:text-slate-400 leading-relaxed mb-6 group-hover:text-foreground dark:group-hover:text-slate-200 transition-colors duration-300">
                  {service.descKey}
                </p>

                {/* Link */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary dark:text-emerald-400 hover:text-primary/80 dark:hover:text-emerald-300 font-semibold transition-all duration-300 group-hover:translate-x-1"
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
