'use client'

import { ArrowRight, Zap, Smartphone, MessageCircle } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-white via-secondary/30 to-white pt-20 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 bg-secondary rounded-full px-4 py-2">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">⚡ نساعد أصحاب الأعمال على زيادة مبيعاتهم</span>
          </div>
        </div>

        {/* Headline */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            احصل على موقع إلكتروني احترافي
          </h2>
          <h3 className="text-2xl md:text-3xl text-primary font-semibold mb-6">
            يضاعف مبيعاتك ويثبت حضورك الرقمي
          </h3>
        </div>

        {/* Subheadline */}
        <p className="text-center text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
          نصمم ونطور صفحات هبوط ومواقع فائقة السرعة، متجاوبة 100% مع الموبايل، ومصممة خصيصاً لجذب العملاء وتسهيل التواصل معك مباشرة.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:shadow-lg hover:shadow-primary/30">
            احجز موقعك الآن
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="inline-flex items-center justify-center gap-2 border-2 border-secondary bg-secondary text-primary hover:bg-secondary/80 px-8 py-4 rounded-xl font-bold text-lg transition-all">
            شاهد أعمالنا
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-muted rounded-2xl p-6 md:p-8">
          <div className="flex items-center gap-3 text-center md:text-right">
            <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="font-bold text-foreground">سرعة تحميل جبارة</p>
              <p className="text-sm text-muted-foreground">أقل من 2 ثانية</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-center md:text-right">
            <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
              <Smartphone className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="font-bold text-foreground">تصميم متجاوب</p>
              <p className="text-sm text-muted-foreground">100% متوافق موبايل</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-center md:text-right">
            <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="font-bold text-foreground">ربط الواتساب المباشر</p>
              <p className="text-sm text-muted-foreground">احصل على الطلبات فوراً</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
