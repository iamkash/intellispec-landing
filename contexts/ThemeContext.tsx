'use client'

import React, { createContext, useContext } from 'react'
import { Theme } from '@/lib/theme'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Always light theme - no state needed
  const contextValue = {
    theme: 'light' as Theme,
    setTheme: () => {}, // no-op
    toggleTheme: () => {} // no-op
  }

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    // Return a default context to prevent errors during SSR
    return {
      theme: 'light' as Theme,
      setTheme: () => {},
      toggleTheme: () => {}
    }
  }
  return context
} 