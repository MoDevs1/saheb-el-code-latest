'use client'

import { useState } from 'react'
import { useLanguage } from '@/lib/language-context'
import { translations } from '@/lib/translations'

export default function CTA() {
  const { language, isArabic } = useLanguage()
  const t = translations[language]
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const serviceName = formData.service || (language === 'en' ? 'General Inquiry' : 'استفسار عام')
    const message = language === 'en'
      ? `Hello, I'm ${formData.name}, my phone: ${formData.phone}, interested in: ${serviceName}`
      : `مرحبا، أنا ${formData.name}، هاتفي: ${formData.phone}، أهتم بـ: ${serviceName}`
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/1234567890?text=${encodedMessage}`, '_blank')
  }

  const stats = [
    { numberKey: '50', labelKey: 'ctaStats.projects' },
    { numberKey: '100', labelKey: 'ctaStats.clients' },
    { numberKey: '24/7', labelKey: 'ctaStats.support' },
    { numberKey: '2+', labelKey: 'ctaStats.satisfaction' },
  ]

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-r from-secondary to-primary/5 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Main CTA Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 animate-scale-in">
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4 animate-slide-up-fade">
            {t.ctaTitle}
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-muted-foreground text-center mb-8 max-w-2xl mx-auto animate-fade-in">
            {t.ctaSubtitle}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Quick Inquiry Form */}
            <div className="space-y-4 animate-slide-right">
              <h3 className="text-xl font-bold text-foreground mb-4">{t.ctaContactForm}</h3>
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  placeholder={t.ctaName}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 hover:border-primary"
                  required
                />
                <input
                  type="tel"
                  placeholder={t.ctaPhone}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 hover:border-primary"
                  required
                />
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 hover:border-primary"
                >
                  <option value="">{t.ctaSelectService}</option>
                  <option value={t.ctaLandingPage}>{t.ctaLandingPage}</option>
                  <option value={t.ctaCorporate}>{t.ctaCorporate}</option>
                  <option value={t.ctaEcommerce}>{t.ctaEcommerce}</option>
                </select>
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:scale-105 transform"
                >
                  {t.ctaSendMessage}
                </button>
              </form>
            </div>

            {/* Direct Contact */}
            <div className="bg-secondary rounded-xl p-6 flex flex-col justify-between animate-slide-left group hover:shadow-lg transition-all duration-300">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">{t.ctaDirectContact}</h3>
                <p className="text-muted-foreground mb-6 group-hover:text-foreground transition-colors duration-300">
                  {t.ctaWhatsappText}
                </p>
              </div>

              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-4 rounded-lg font-bold transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:scale-110 transform group-hover:animate-pulse-glow"
              >
                <svg className="w-5 h-5 animate-float" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.782 1.14l-.46.264-4.514-1.19.96 3.852a9.879 9.879 0 00-.419 4.76c.043.867.271 1.719.541 2.531.26.775.643 1.485 1.196 2.04a9.9 9.9 0 005.031 2.722h.005c.344.043.683.066 1.02.066a9.88 9.88 0 009.031-5.474c.35-.704.656-1.438.909-2.195.253-.757.43-1.54.527-2.328A9.884 9.884 0 0012.05 6.97z" />
                </svg>
                {t.whatsapp}
              </a>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="animate-slide-up-fade group hover:scale-110 transition-transform duration-300" style={{ animationDelay: `${index * 0.1}s` }}>
              <p className="text-3xl font-bold text-primary group-hover:scale-125 transition-transform duration-300">{stat.numberKey}{language === 'en' ? '+' : ''}</p>
              <p className="text-muted-foreground mt-2 group-hover:text-foreground transition-colors duration-300">{t[stat.labelKey]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
