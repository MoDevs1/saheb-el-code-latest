'use client'

import { useState } from 'react'
import { Zap, Globe, ShoppingCart } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { translations } from '@/lib/translations'
import ServiceModal from './service-modal'

export default function Services() {
  const { language, isArabic } = useLanguage()
  const t = translations[language]
  const [selectedService, setSelectedService] = useState<number | null>(null)

  // WhatsApp message templates for each service
  const whatsappMessages = {
    en: {
      landing: encodeURIComponent('Hello SahebElCode, I would like to know more about your Landing Page service.'),
      corporate: encodeURIComponent('Hello SahebElCode, I would like to know more about your Corporate Website service.'),
      ecommerce: encodeURIComponent('Hello SahebElCode, I would like to know more about your E-commerce Website service.'),
    },
    ar: {
      landing: encodeURIComponent('مرحبا صاحب الكود، أود معرفة المزيد عن خدمة صفحة الهبوط الخاصة بك.'),
      corporate: encodeURIComponent('مرحبا صاحب الكود، أود معرفة المزيد عن خدمة موقع الشركة الخاصة بك.'),
      ecommerce: encodeURIComponent('مرحبا صاحب الكود، أود معرفة المزيد عن خدمة موقع التجارة الإلكترونية الخاصة بك.'),
    },
  }

  const services = [
    {
      icon: Zap,
      titleKey: language === 'en' ? t.serviceLandingPageTitle : t.serviceLandingPageTitle,
      descKey: language === 'en' ? t.serviceLandingPageDesc : t.serviceLandingPageDesc,
      whatsappMessage: language === 'en' ? whatsappMessages.en.landing : whatsappMessages.ar.landing,
    },
    {
      icon: Globe,
      titleKey: language === 'en' ? t.serviceCorporateTitle : t.serviceCorporateTitle,
      descKey: language === 'en' ? t.serviceCorporateDesc : t.serviceCorporateDesc,
      whatsappMessage: language === 'en' ? whatsappMessages.en.corporate : whatsappMessages.ar.corporate,
    },
    {
      icon: ShoppingCart,
      titleKey: language === 'en' ? t.serviceEcommerce : t.serviceEcommerce,
      descKey: language === 'en' ? t.serviceEcommerceDesc : t.serviceEcommerceDesc,
      whatsappMessage: language === 'en' ? whatsappMessages.en.ecommerce : whatsappMessages.ar.ecommerce,
    },
  ]

  return (
    <section id="services" className="relative overflow-hidden bg-background px-4 py-24 transition-colors duration-300 before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-primary/50 before:to-transparent">
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
                className="group relative cursor-pointer overflow-hidden rounded-3xl border border-border/80 bg-card/70 p-8 shadow-[0_18px_60px_-28px_color-mix(in_srgb,var(--primary)_45%,transparent)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/70 hover:shadow-[0_24px_80px_-28px_color-mix(in_srgb,var(--primary)_75%,transparent)] animate-slide-up-fade"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-secondary dark:bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/10 dark:group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-8 h-8 text-primary dark:text-blue-400 group-hover:rotate-12 transition-transform duration-300" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground dark:text-slate-100 mb-4 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors duration-300">
                  {service.titleKey}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground dark:text-slate-400 leading-relaxed mb-6 group-hover:text-foreground dark:group-hover:text-slate-200 transition-colors duration-300">
                  {service.descKey}
                </p>

                {/* Link */}
                <button
                  onClick={() => setSelectedService(index)}
                  className="inline-flex items-center gap-2 text-primary dark:text-blue-400 hover:text-primary/80 dark:hover:text-blue-300 font-semibold transition-all duration-300 group-hover:translate-x-1 cursor-pointer"
                >
                  {t.heroLearnMore}
                  <span className="group-hover:translate-x-1 transition-transform duration-300">{isArabic ? '←' : '→'}</span>
                </button>
              </div>
            )
          })}
        </div>
      </div>

      {/* Service Modal */}
      {selectedService !== null && (
        <ServiceModal
          isOpen={selectedService !== null}
          onClose={() => setSelectedService(null)}
          serviceTitle={services[selectedService]?.titleKey || ''}
          serviceIndex={selectedService}
        />
      )}
    </section>
  )
}
