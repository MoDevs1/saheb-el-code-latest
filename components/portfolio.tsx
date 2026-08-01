'use client'

import { ExternalLink, MessageCircle } from 'lucide-react'

export default function Portfolio() {
  const projects = [
    {
      title: 'متجر الملابس الفاخرة',
      description: 'موقع متجر متكامل مع نظام إدارة المخزون والدفع الإلكتروني',
      tags: ['React', 'Tailwind', 'eCommerce'],
      image: 'bg-gradient-to-br from-blue-400 to-blue-600',
    },
    {
      title: 'منصة دورات تعليمية',
      description: 'منظومة تعليمية متكاملة مع نظام حجز وإدارة الطلاب',
      tags: ['Next.js', 'Database', 'Learning'],
      image: 'bg-gradient-to-br from-purple-400 to-purple-600',
    },
    {
      title: 'صفحة هبوط خدمات تسويق',
      description: 'صفحة هبوط عالية التحويل مصممة لزيادة العملاء',
      tags: ['Landing Page', 'Conversion', 'GSAP'],
      image: 'bg-gradient-to-br from-green-400 to-green-600',
    },
  ]

  return (
    <section id="portfolio" className="py-20 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            نماذج من أعمالنا
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            مشاريع حقيقية تم بناءها بأحدث تقنيات الفرونت إند
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              {/* Image Placeholder */}
              <div className={`${project.image} h-48 flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
              </div>

              {/* Content */}
              <div className="p-6 flex-grow flex flex-col">
                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs bg-secondary text-primary px-3 py-1 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/80 text-primary px-4 py-2 rounded-lg font-semibold transition-all text-sm">
                    <ExternalLink className="w-4 h-4" />
                    معاينة
                  </button>
                  <a
                    href="https://wa.me/?text=مرحبا%20أرغب%20في%20موقع%20مثل%20هذا"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg font-semibold transition-all text-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    اطلب مثله
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-xl font-bold transition-all hover:shadow-lg hover:shadow-primary/30">
            عرض جميع المشاريع
            <ExternalLink className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
