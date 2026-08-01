'use client'

import { ArrowLeft } from 'lucide-react'
import { useState } from 'react'

export default function CTA() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `مرحبا، أنا ${formData.name}، هاتفي: ${formData.phone}، أهتم بـ: ${formData.service}`
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/?text=${encodedMessage}`, '_blank')
  }

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-r from-secondary to-primary/5">
      <div className="max-w-4xl mx-auto">
        {/* Main CTA Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            جاهز تحول زوارك لعملاء حقيقيين؟
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
            تواصل معنا اليوم واحصل على استشارة مجانية لمشروعك
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Quick Inquiry Form */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground mb-4">معلومات سريعة</h3>
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  placeholder="اسمك الكريم"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <input
                  type="tel"
                  placeholder="رقم الواتساب"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                >
                  <option value="">اختر الخدمة المطلوبة</option>
                  <option value="صفحة هبوط">صفحة هبوط</option>
                  <option value="موقع شركة">موقع شركة</option>
                  <option value="متجر إلكتروني">متجر إلكتروني</option>
                  <option value="منصة تعليمية">منصة تعليمية</option>
                  <option value="استشارة">استشارة مجانية</option>
                </select>
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-primary/30"
                >
                  احصل على استشارة مجانية
                </button>
              </form>
            </div>

            {/* Direct Contact */}
            <div className="bg-secondary rounded-xl p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">تواصل مباشر</h3>
                <p className="text-muted-foreground mb-6">
                  تواصل معنا عبر الواتساب للحصول على ردّ فوري من فريقنا
                </p>
              </div>

              <a
                href="https://wa.me/?text=مرحبا%20أرغب%20في%20الاستفسار"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-4 rounded-lg font-bold transition-all hover:shadow-lg hover:shadow-primary/30"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.782 1.14l-.46.264-4.514-1.19.96 3.852a9.879 9.879 0 00-.419 4.76c.043.867.271 1.719.541 2.531.26.775.643 1.485 1.196 2.04a9.9 9.9 0 005.031 2.722h.005c.344.043.683.066 1.02.066a9.88 9.88 0 009.031-5.474c.35-.704.656-1.438.909-2.195.253-.757.43-1.54.527-2.328A9.884 9.884 0 0012.05 6.97z" />
                </svg>
                تواصل عبر الواتساب
              </a>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-3xl font-bold text-primary">50+</p>
            <p className="text-muted-foreground mt-2">مشروع منجز</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary">100%</p>
            <p className="text-muted-foreground mt-2">رضا العملاء</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary">24/7</p>
            <p className="text-muted-foreground mt-2">دعم فني</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary">2+</p>
            <p className="text-muted-foreground mt-2">سنوات خبرة</p>
          </div>
        </div>
      </div>
    </section>
  )
}
