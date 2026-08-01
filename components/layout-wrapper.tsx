'use client'

import { useLanguage } from '@/lib/language-context'
import { useEffect, useState } from 'react'

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const { isArabic } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Update document direction
    const htmlElement = document.documentElement
    if (isArabic) {
      htmlElement.setAttribute('dir', 'rtl')
      htmlElement.setAttribute('lang', 'ar')
    } else {
      htmlElement.setAttribute('dir', 'ltr')
      htmlElement.setAttribute('lang', 'en')
    }
    setMounted(true)
  }, [isArabic])

  if (!mounted) {
    return <>{children}</>
  }

  return <>{children}</>
}
