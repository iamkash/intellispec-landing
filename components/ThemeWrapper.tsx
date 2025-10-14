'use client'

import { ThemeProvider } from '@/contexts/ThemeContext'

export function ThemeWrapper({ children }: { children: React.ReactNode }) {
  // Always light theme - no mounting check needed
  return <ThemeProvider>{children}</ThemeProvider>
} 