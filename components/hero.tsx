'use client'

import { ArrowRight, Zap, Smartphone, MessageCircle } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { translations } from '@/lib/translations'

export default function Hero() {
  const { language, isArabic } = useLanguage()
  const t = translations[language]

  return (
    <section className="relative bg-gradient-to-b from-white via-secondary/30 to-white pt-20 pb-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 bg-secondary rounded-full px-4 py-2 animate-slide-up-fade">
            <Zap className="w-4 h-4 text-primary animate-pulse-glow" />
            <span className="text-sm font-medium text-primary">{t.heroHighlight}</span>
          </div>
        </div>

        {/* Headline */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-slide-up-fade" style={{ animationDelay: '0.1s' }}>
            {t.heroTitle}
          </h1>
          <p className="text-xl md:text-2xl text-primary font-semibold mb-6 animate-slide-up-fade" style={{ animationDelay: '0.2s' }}>
            {isArabic ? '✨' : '⭐'} {language === 'en' ? 'Proven Results' : 'نتائج مثبوتة'}
          </p>
        </div>

        {/* Subheadline */}
        <p className="text-center text-lg text-muted-foreground max-w-3xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          {t.heroSubtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up-fade" style={{ animationDelay: '0.4s' }}>
          <button className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:scale-105 transform">
            {t.heroGetStarted}
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="inline-flex items-center justify-center gap-2 border-2 border-secondary bg-secondary text-primary hover:bg-secondary/80 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 transform">
            {t.heroLearnMore}
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-muted rounded-2xl p-6 md:p-8 animate-scale-in" style={{ animationDelay: '0.5s' }}>
          <div className="flex items-center gap-3 text-center md:text-right group hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0s' }}>
            <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-full flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
              <Zap className="w-6 h-6 text-primary animate-float" />
            </div>
            <div>
              <p className="font-bold text-foreground">{language === 'en' ? 'Lightning Fast' : 'سرعة فائقة'}</p>
              <p className="text-sm text-muted-foreground">{language === 'en' ? 'Under 2 seconds' : 'أقل من ثانيتين'}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-center md:text-right group hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.1s' }}>
            <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-full flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
              <Smartphone className="w-6 h-6 text-primary animate-float" style={{ animationDelay: '0.3s' }} />
            </div>
            <div>
              <p className="font-bold text-foreground">{language === 'en' ? 'Fully Responsive' : 'متجاوب تماماً'}</p>
              <p className="text-sm text-muted-foreground">{language === 'en' ? '100% mobile optimized' : '100% متوافق موبايل'}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-center md:text-right group hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.2s' }}>
            <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-full flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
              <MessageCircle className="w-6 h-6 text-primary animate-float" style={{ animationDelay: '0.6s' }} />
            </div>
            <div>
              <p className="font-bold text-foreground">{language === 'en' ? 'Direct Contact' : 'التواصل المباشر'}</p>
              <p className="text-sm text-muted-foreground">{language === 'en' ? 'WhatsApp integrated' : 'ربط واتساب مباشر'}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
