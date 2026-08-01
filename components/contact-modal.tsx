'use client'

import { X, MessageCircle, Mail } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { translations } from '@/lib/translations'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const { language } = useLanguage()
  const t = translations[language]

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
          className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl dark:shadow-2xl w-full max-w-md animate-scale-in border dark:border-slate-800"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b dark:border-slate-800">
            <h2 className="text-2xl font-bold text-foreground dark:text-slate-100">
              {t.contactModalTitle}
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
          <div className="p-6">
            <p className="text-muted-foreground dark:text-slate-400 mb-8 text-center">
              {t.contactModalSubtitle}
            </p>

            <div className="space-y-3">
              {/* WhatsApp Option */}
              <a
                href="https://wa.me/+201055891861"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="flex items-center gap-4 p-4 rounded-xl border-2 border-emerald-500/30 dark:border-emerald-500/30 hover:border-emerald-500 dark:hover:border-emerald-400 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/20 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-12 h-12 bg-emerald-500/20 dark:bg-emerald-500/20 rounded-lg flex items-center justify-center group-hover:bg-emerald-500/30 dark:group-hover:bg-emerald-500/30 transition-colors duration-300">
                  <MessageCircle className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground dark:text-slate-100">
                    {t.contactModalWhatsapp}
                  </h3>
                  <p className="text-sm text-muted-foreground dark:text-slate-400">
                    {language === 'en' ? 'Instant messaging' : 'الرسائل الفورية'}
                  </p>
                </div>
              </a>

              {/* Email Option */}
              <a
                href="mailto:mtmm@sahebelcode.xyz"
                onClick={onClose}
                className="flex items-center gap-4 p-4 rounded-xl border-2 border-primary/30 dark:border-emerald-500/30 hover:border-primary dark:hover:border-emerald-400 hover:bg-primary/5 dark:hover:bg-emerald-900/20 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-12 h-12 bg-primary/20 dark:bg-emerald-500/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 dark:group-hover:bg-emerald-500/30 transition-colors duration-300">
                  <Mail className="w-6 h-6 text-primary dark:text-emerald-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground dark:text-slate-100">
                    {t.contactModalEmail}
                  </h3>
                  <p className="text-sm text-muted-foreground dark:text-slate-400">
                    mtmm@sahebelcode.xyz
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 border-t dark:border-slate-800 text-center">
            <button
              onClick={onClose}
              className="text-muted-foreground dark:text-slate-400 hover:text-foreground dark:hover:text-slate-200 text-sm font-medium transition-colors duration-300"
            >
              {t.contactModalClose}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
