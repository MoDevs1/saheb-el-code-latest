'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { translations } from '@/lib/translations'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage, isArabic } = useLanguage()
  const t = translations[language]

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-border animate-slide-down">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center group cursor-pointer">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-scale-in group-hover:scale-105 transition-transform">
            {language === 'en' ? 'ENG/Mohamed' : 'م/محمد'}
          </div>
          <span className="text-xs font-semibold text-muted-foreground ml-1 animate-fade-in">
            {language === 'en' ? 'Tamer' : 'تامر'}
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-foreground hover:text-primary transition-colors duration-300 relative group">
            {t.home}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#services" className="text-foreground hover:text-primary transition-colors duration-300 relative group">
            {t.services}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#portfolio" className="text-foreground hover:text-primary transition-colors duration-300 relative group">
            {t.portfolio}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors duration-300 relative group">
            {t.about}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>

        {/* Right Section - Language Switcher & WhatsApp */}
        <div className="flex items-center gap-4 animate-slide-left">
          {/* Language Switcher */}
          <div className="flex items-center gap-1 bg-secondary rounded-full p-1 cursor-pointer hover:bg-secondary/80 transition-colors duration-300">
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                language === 'en'
                  ? 'bg-primary text-white shadow-lg'
                  : 'text-foreground hover:text-primary'
              }`}
            >
              EN
            </button>
            <div className="text-xs text-muted-foreground px-1">/</div>
            <button
              onClick={() => setLanguage('ar')}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                language === 'ar'
                  ? 'bg-primary text-white shadow-lg'
                  : 'text-foreground hover:text-primary'
              }`}
            >
              AR
            </button>
          </div>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/+201055891861"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full hover:bg-primary/90 transition-all duration-300 hover:shadow-lg transform hover:scale-105"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.991 1.523A9.9 9.9 0 005.17 12.23c0 5.465 4.431 9.897 9.896 9.897a9.87 9.87 0 009.897-9.897c0-5.465-4.432-9.897-9.897-9.897m0-1.8C18.896 4.179 24 9.281 24 12.03c0 2.748-5.104 7.851-11.972 7.851-2.748 0-7.851-5.104-7.851-11.972 0-2.748 5.104-7.851 11.972-7.851z" />
            </svg>
            {t.whatsapp}
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors duration-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-white animate-slide-down">
          <div className="px-4 py-4 space-y-3 flex flex-col">
            <a href="#" className="text-foreground hover:text-primary transition-colors duration-300 py-2">
              {t.home}
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors duration-300 py-2">
              {t.services}
            </a>
            <a href="#portfolio" className="text-foreground hover:text-primary transition-colors duration-300 py-2">
              {t.portfolio}
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors duration-300 py-2">
              {t.about}
            </a>
            <a
              href="https://wa.me/+201055891861"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 bg-primary text-white px-4 py-2 rounded-full hover:bg-primary/90 transition-colors duration-300"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.991 1.523A9.9 9.9 0 005.17 12.23c0 5.465 4.431 9.897 9.896 9.897a9.87 9.87 0 009.897-9.897c0-5.465-4.432-9.897-9.897-9.897m0-1.8C18.896 4.179 24 9.281 24 12.03c0 2.748-5.104 7.851-11.972 7.851-2.748 0-7.851-5.104-7.851-11.972 0-2.748 5.104-7.851 11.972-7.851z" />
              </svg>
              {t.whatsapp}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
