'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

export type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

const defaultContext: ThemeContextType = {
  theme: 'light',
  setTheme: () => { },
  toggleTheme: () => { },
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Load theme from localStorage on mount
    try {
      const savedTheme = localStorage.getItem('theme') as Theme
      if (savedTheme === 'dark' || savedTheme === 'light') {
        setThemeState(savedTheme)
        applyTheme(savedTheme)
      } else {
        // Check system preference
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          setThemeState('dark')
          applyTheme('dark')
        }
      }
    } catch (error) {
      console.log('localStorage not available')
    }
    setMounted(true)
  }, [])

  const applyTheme = (themeToApply: Theme) => {
    const html = document.documentElement
    if (themeToApply === 'dark') {
      html.classList.add('dark')
      html.classList.remove('light')
    } else {
      html.classList.remove('dark')
      html.classList.add('light')
    }
  }

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
    try {
      localStorage.setItem('theme', newTheme)
    } catch (error) {
      console.log('localStorage not available')
    }
    applyTheme(newTheme)
  }

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    return defaultContext
  }
  return context
}
