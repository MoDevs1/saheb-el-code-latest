'use client'

import { Zap, Globe, BookOpen } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Zap,
      title: 'صفحات هبوط عالية التحويل',
      description: 'صفحات مبيعات مخصصة لإعلاناتك، مصممة لإقناع الزائر وتحويله لعميل يدفع فوراً.',
    },
    {
      icon: Globe,
      title: 'مواقع الشركات والأنشطة التجارية',
      description: 'موقع رسمي يعكس احترافية شركتك، يعرض خدماتك، ويسهل على العملاء الوصول لك.',
    },
    {
      icon: BookOpen,
      title: 'منظومات تعليمية وسنتر إلكتروني',
      description: 'مواقع مخصصة للمدرسين والمراكز التعليمية لتنظيم المواعيد وتسهيل حجز الطلاب.',
    },
  ]

  return (
    <section id="services" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            خدمات مصممة لنمو شغلك
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            نقدم حلول متكاملة تناسب احتياجات عملك من التخطيط إلى التنفيذ
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-muted to-white border border-border rounded-2xl p-8 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                  <Icon className="w-8 h-8 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Link */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
                >
                  اعرف المزيد
                  <span>←</span>
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
