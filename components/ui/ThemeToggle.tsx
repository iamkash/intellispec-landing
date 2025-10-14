'use client'

import React from 'react'
import { Sun } from 'lucide-react'

// Theme toggle components - disabled as app is light-only
// Kept for backwards compatibility but non-functional

export function ThemeToggle() {
  return (
    <button
      disabled
      className="relative w-12 h-6 bg-slate-200 rounded-full p-1 opacity-50 cursor-not-allowed"
      aria-label="Light mode (fixed)"
    >
      <div className="w-4 h-4 bg-white rounded-full shadow-md flex items-center justify-center">
        <Sun className="w-3 h-3 text-yellow-500" />
      </div>
    </button>
  )
}

export function ThemeToggleLarge() {
  return (
    <button
      disabled
      className="relative w-16 h-8 bg-slate-200 rounded-full p-1 opacity-50 cursor-not-allowed"
      aria-label="Light mode (fixed)"
    >
      <div className="w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center">
        <Sun className="w-4 h-4 text-yellow-500" />
      </div>
    </button>
  )
} 