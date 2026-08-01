'use client'

import { Zap, MessageCircle, Palette, Wrench } from 'lucide-react'

export default function WhyUs() {
  const features = [
    {
      icon: Zap,
      title: 'سرعة فائقة',
      description: 'تحميل الموقع في أقل من 2 ثانية، مما يحسن من تجربة المستخدم ويزيد من التحويلات.',
    },
    {
      icon: MessageCircle,
      title: 'ربط الواتساب المباشر',
      description: 'استلام طلبات العملاء على واتسابك فوراً مع تكامل سلس وسهل.',
    },
    {
      icon: Palette,
      title: 'تصميم عصري وجذاب',
      description: 'لمسات بسيطة ومريحة للعين تناسب الموبايل والكمبيوتر بشكل مثالي.',
    },
    {
      icon: Wrench,
      title: 'دعم فني وتعديلات',
      description: 'متابعة ودعم مستمر بعد تسليم الموقع لضمان رضاك التام.',
    },
  ]

  return (
    <section id="why-us" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            لماذا صاحب الكود؟
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            نحن نختار الجودة والاحترافية في كل مشروع
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="flex gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Additional Benefits */}
        <div className="mt-16 bg-gradient-to-r from-secondary to-white border border-border rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-foreground mb-6">مميزات إضافية</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-bold text-primary mb-2">🔒 آمن وموثوق</h4>
              <p className="text-muted-foreground text-sm">
                أعلى معايير الأمان والحماية لموقعك وبيانات عملائك
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-2">📱 متوافق تماماً</h4>
              <p className="text-muted-foreground text-sm">
                يعمل بشكل مثالي على جميع الأجهزة والمتصفحات
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-2">🎯 محسّن للبحث</h4>
              <p className="text-muted-foreground text-sm">
                تحسين محركات البحث لزيادة ظهورك في نتائج البحث
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
