'use client'

import { useState } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { useTheme } from '@/lib/theme-context'
import { translations } from '@/lib/translations'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage, isArabic } = useLanguage()
  const { theme, toggleTheme } = useTheme()
  const t = translations[language]

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 dark:bg-[#0B0F17]/95 backdrop-blur-sm border-b border-border dark:border-slate-800 animate-slide-down transition-colors duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center group cursor-pointer">
          <div className="text-lg md:text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-scale-in group-hover:scale-105 transition-transform">
            {t.brandNameShort}
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-foreground dark:text-slate-100 hover:text-primary dark:hover:text-emerald-400 transition-colors duration-300 relative group">
            {t.home}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary dark:bg-emerald-400 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#services" className="text-foreground dark:text-slate-100 hover:text-primary dark:hover:text-emerald-400 transition-colors duration-300 relative group">
            {t.services}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary dark:bg-emerald-400 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#portfolio" className="text-foreground dark:text-slate-100 hover:text-primary dark:hover:text-emerald-400 transition-colors duration-300 relative group">
            {t.portfolio}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary dark:bg-emerald-400 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#about" className="text-foreground dark:text-slate-100 hover:text-primary dark:hover:text-emerald-400 transition-colors duration-300 relative group">
            {t.about}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary dark:bg-emerald-400 group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>

        {/* Right Section - Theme, Language Switcher & WhatsApp */}
        <div className="flex items-center gap-3 animate-slide-left">
          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-secondary dark:bg-slate-800 hover:bg-secondary/80 dark:hover:bg-slate-700 transition-all duration-300 relative group"
            title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
          >
            {theme === 'light' ? (
              <Moon size={20} className="text-foreground dark:text-emerald-400 animate-scale-in" />
            ) : (
              <Sun size={20} className="text-emerald-400 animate-scale-in" />
            )}
            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-foreground dark:bg-slate-800 text-background dark:text-emerald-400 text-xs rounded px-2 py-1 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 border dark:border-slate-700">
              {theme === 'light' ? 'Dark' : 'Light'}
            </span>
          </button>

          {/* Language Switcher */}
          <div className="flex items-center gap-1 bg-secondary dark:bg-slate-800 rounded-full p-1 cursor-pointer hover:bg-secondary/80 dark:hover:bg-slate-700 transition-colors duration-300">
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                language === 'en'
                  ? 'bg-primary text-white shadow-lg'
                  : 'text-foreground dark:text-slate-300 hover:text-primary dark:hover:text-emerald-400'
              }`}
            >
              EN
            </button>
            <div className="text-xs text-muted-foreground dark:text-slate-600 px-1">/</div>
            <button
              onClick={() => setLanguage('ar')}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                language === 'ar'
                  ? 'bg-primary text-white shadow-lg'
                  : 'text-foreground dark:text-slate-300 hover:text-primary dark:hover:text-emerald-400'
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
            className="md:hidden p-2 rounded-lg hover:bg-secondary dark:hover:bg-slate-800 transition-colors duration-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border dark:border-slate-800 bg-white dark:bg-slate-900 animate-slide-down transition-colors duration-300">
          <div className="px-4 py-4 space-y-3 flex flex-col">
            <a href="#" className="text-foreground dark:text-slate-100 hover:text-primary dark:hover:text-emerald-400 transition-colors duration-300 py-2">
              {t.home}
            </a>
            <a href="#services" className="text-foreground dark:text-slate-100 hover:text-primary dark:hover:text-emerald-400 transition-colors duration-300 py-2">
              {t.services}
            </a>
            <a href="#portfolio" className="text-foreground dark:text-slate-100 hover:text-primary dark:hover:text-emerald-400 transition-colors duration-300 py-2">
              {t.portfolio}
            </a>
            <a href="#about" className="text-foreground dark:text-slate-100 hover:text-primary dark:hover:text-emerald-400 transition-colors duration-300 py-2">
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
