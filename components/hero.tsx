'use client'

import { ArrowRight, Zap, Smartphone, MessageCircle } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { translations } from '@/lib/translations'

export default function Hero() {
  const { language, isArabic } = useLanguage()
  const t = translations[language]

  return (
    <section className="relative bg-gradient-to-b from-white via-secondary/30 to-white dark:from-[#0B0F17] dark:via-slate-900/30 dark:to-[#0B0F17] pt-20 pb-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 bg-secondary dark:bg-slate-800/80 border dark:border-emerald-500/30 rounded-full px-4 py-2 animate-slide-up-fade">
            <Zap className="w-4 h-4 text-primary dark:text-emerald-400 animate-pulse-glow" />
            <span className="text-sm font-medium text-primary dark:text-emerald-400">{t.heroHighlight}</span>
          </div>
        </div>

        {/* Headline */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground dark:text-slate-100 leading-tight mb-6 animate-slide-up-fade" style={{ animationDelay: '0.1s' }}>
            {t.heroTitle}
          </h1>
          <p className="text-xl md:text-2xl text-primary dark:text-emerald-400 font-semibold mb-6 animate-slide-up-fade" style={{ animationDelay: '0.2s' }}>
            {isArabic ? '✨' : '⭐'} {language === 'en' ? 'Proven Results' : 'نتائج مثبوتة'}
          </p>
        </div>

        {/* Subheadline */}
        <p className="text-center text-lg text-muted-foreground dark:text-slate-400 max-w-3xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          {t.heroSubtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up-fade" style={{ animationDelay: '0.4s' }}>
          <button className="inline-flex items-center justify-center gap-2 bg-primary dark:bg-emerald-500 hover:bg-primary/90 dark:hover:bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 dark:hover:shadow-emerald-500/30 hover:scale-105 transform">
            {t.heroGetStarted}
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="inline-flex items-center justify-center gap-2 border-2 border-secondary dark:border-slate-800 bg-secondary dark:bg-slate-800/50 text-primary dark:text-emerald-400 hover:bg-secondary/80 dark:hover:bg-slate-800 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 transform">
            {t.heroLearnMore}
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-muted dark:bg-slate-900/50 border dark:border-slate-800 rounded-2xl p-6 md:p-8 animate-scale-in" style={{ animationDelay: '0.5s' }}>
          <div className="flex items-center gap-3 text-center md:text-right group hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0s' }}>
            <div className="flex-shrink-0 w-12 h-12 bg-secondary dark:bg-slate-800 rounded-full flex items-center justify-center group-hover:bg-primary/10 dark:group-hover:bg-emerald-500/20 transition-colors duration-300">
              <Zap className="w-6 h-6 text-primary dark:text-emerald-400 animate-float" />
            </div>
            <div>
              <p className="font-bold text-foreground dark:text-slate-100">{language === 'en' ? 'Lightning Fast' : 'سرعة فائقة'}</p>
              <p className="text-sm text-muted-foreground dark:text-slate-400">{language === 'en' ? 'Under 2 seconds' : 'أقل من ثانيتين'}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-center md:text-right group hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.1s' }}>
            <div className="flex-shrink-0 w-12 h-12 bg-secondary dark:bg-slate-800 rounded-full flex items-center justify-center group-hover:bg-primary/10 dark:group-hover:bg-emerald-500/20 transition-colors duration-300">
              <Smartphone className="w-6 h-6 text-primary dark:text-emerald-400 animate-float" style={{ animationDelay: '0.3s' }} />
            </div>
            <div>
              <p className="font-bold text-foreground dark:text-slate-100">{language === 'en' ? 'Fully Responsive' : 'متجاوب تماماً'}</p>
              <p className="text-sm text-muted-foreground dark:text-slate-400">{language === 'en' ? '100% mobile optimized' : '100% متوافق موبايل'}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-center md:text-right group hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.2s' }}>
            <div className="flex-shrink-0 w-12 h-12 bg-secondary dark:bg-slate-800 rounded-full flex items-center justify-center group-hover:bg-primary/10 dark:group-hover:bg-emerald-500/20 transition-colors duration-300">
              <MessageCircle className="w-6 h-6 text-primary dark:text-emerald-400 animate-float" style={{ animationDelay: '0.6s' }} />
            </div>
            <div>
              <p className="font-bold text-foreground dark:text-slate-100">{language === 'en' ? 'Direct Contact' : 'التواصل المباشر'}</p>
              <p className="text-sm text-muted-foreground dark:text-slate-400">{language === 'en' ? 'WhatsApp integrated' : 'ربط واتساب مباشر'}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
