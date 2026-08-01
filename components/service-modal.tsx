'use client'

import { X, MessageCircle, CheckCircle } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { translations } from '@/lib/translations'

interface ServiceModalProps {
  isOpen: boolean
  onClose: () => void
  serviceTitle: string
  serviceIndex: number
}

export default function ServiceModal({ isOpen, onClose, serviceTitle, serviceIndex }: ServiceModalProps) {
  const { language, isArabic } = useLanguage()
  const t = translations[language]

  // Service details for each service type
  const serviceDetails = {
    0: {
      en: {
        features: ['High-converting design', 'SEO optimized', 'Fast loading speeds', 'Mobile responsive', 'Analytics integration'],
        deliverables: ['Custom landing page design', 'Optimized HTML/CSS/JS', 'Contact form integration', 'Analytics setup'],
        timeline: '7-14 days',
      },
      ar: {
        features: ['تصميم عالي التحويل', 'محسّن للبحث', 'سرعات تحميل سريعة', 'متجاوب موبايل', 'تكامل التحليلات'],
        deliverables: ['تصميم صفحة هبوط مخصصة', 'HTML/CSS/JS محسّن', 'تكامل نموذج الاتصال', 'إعداد التحليلات'],
        timeline: '7-14 يوم',
      },
    },
    1: {
      en: {
        features: ['Professional design', 'User authentication', 'Content management system', 'Multi-language support', 'SEO optimized'],
        deliverables: ['Custom website design', 'Admin dashboard', 'Content management system', 'SSL certificate'],
        timeline: '21-30 days',
      },
      ar: {
        features: ['تصميم احترافي', 'مصادقة المستخدم', 'نظام إدارة المحتوى', 'دعم متعدد اللغات', 'محسّن للبحث'],
        deliverables: ['تصميم موقع مخصص', 'لوحة تحكم للمسؤول', 'نظام إدارة المحتوى', 'شهادة SSL'],
        timeline: '21-30 يوم',
      },
    },
    2: {
      en: {
        features: ['Product catalog', 'Payment gateway integration', 'Inventory management', 'Order tracking', 'Customer accounts'],
        deliverables: ['Complete e-commerce platform', 'Payment processing setup', 'Inventory system', 'Admin dashboard', 'Customer portal'],
        timeline: '30-45 days',
      },
      ar: {
        features: ['كتالوج المنتجات', 'تكامل بوابة الدفع', 'إدارة المخزون', 'تتبع الطلبات', 'حسابات العملاء'],
        deliverables: ['منصة تجارة إلكترونية كاملة', 'إعداد معالجة الدفع', 'نظام المخزون', 'لوحة تحكم المسؤول', 'بوابة العملاء'],
        timeline: '30-45 يوم',
      },
    },
  }

  const details = serviceDetails[serviceIndex as keyof typeof serviceDetails]
  const currentDetails = details?.[language as keyof typeof details]

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 dark:bg-black/70 z-40 transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl dark:shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-scale-in border dark:border-slate-800"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 flex items-center justify-between p-6 border-b dark:border-slate-800 bg-white dark:bg-slate-900 z-10">
            <h2 className="text-2xl font-bold text-foreground dark:text-slate-100">
              {serviceTitle}
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-secondary dark:hover:bg-slate-800 rounded-lg transition-colors duration-200"
              aria-label="Close modal"
            >
              <X className="w-6 h-6 text-foreground dark:text-slate-100" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-8">
            {currentDetails && (
              <>
                {/* Features Section */}
                <div>
                  <h3 className="text-lg font-bold text-foreground dark:text-slate-100 mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary dark:text-emerald-400" />
                    {t.serviceModalFeatures}
                  </h3>
                  <ul className="space-y-2">
                    {currentDetails.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-muted-foreground dark:text-slate-400"
                      >
                        <span className="w-2 h-2 rounded-full bg-primary dark:bg-emerald-400 mt-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deliverables Section */}
                <div>
                  <h3 className="text-lg font-bold text-foreground dark:text-slate-100 mb-4">
                    {t.serviceModalDeliverables}
                  </h3>
                  <ul className="space-y-2">
                    {currentDetails.deliverables.map((deliverable, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-muted-foreground dark:text-slate-400"
                      >
                        <span className="w-2 h-2 rounded-full bg-primary dark:bg-emerald-400 mt-2 flex-shrink-0" />
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Timeline Section */}
                <div className="bg-secondary dark:bg-slate-800/50 border dark:border-slate-700 rounded-xl p-4">
                  <p className="text-sm text-muted-foreground dark:text-slate-400 mb-1">
                    {t.serviceModalTimeline}
                  </p>
                  <p className="text-2xl font-bold text-primary dark:text-emerald-400">
                    {currentDetails.timeline}
                  </p>
                </div>
              </>
            )}
          </div>

          {/* Footer / CTA */}
          <div className="sticky bottom-0 p-6 border-t dark:border-slate-800 bg-white dark:bg-slate-900 flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 px-6 py-3 rounded-lg border-2 border-secondary dark:border-slate-700 text-foreground dark:text-slate-100 font-semibold hover:bg-secondary dark:hover:bg-slate-800 transition-colors duration-300"
            >
              {t.contactModalClose}
            </button>
            <a
              href="https://wa.me/201055891861"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-primary dark:bg-emerald-500 hover:bg-primary/90 dark:hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg dark:hover:shadow-emerald-500/30"
            >
              <MessageCircle className="w-5 h-5" />
              {t.serviceModalRequestCTA}
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
