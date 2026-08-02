'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

export type Language = 'en' | 'ar'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  isArabic: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const defaultContext: LanguageContextType = {
  language: 'en',
  setLanguage: () => {},
  isArabic: false,
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Load language from localStorage on mount
    try {
      const savedLanguage = localStorage.getItem('language') as Language
      if (savedLanguage === 'ar' || savedLanguage === 'en') {
        setLanguageState(savedLanguage)
      }
    } catch (error) {
      console.log('localStorage not available')
    }
    setMounted(true)
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    try {
      localStorage.setItem('language', lang)
    } catch (error) {
      console.log('localStorage not available')
    }
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isArabic: language === 'ar' }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    return defaultContext
  }
  return context
}
