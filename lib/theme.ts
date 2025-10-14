export type Theme = 'light'

export const themes: Theme[] = ['light']

export function getTheme(): Theme {
  return 'light'
}

export function setTheme(theme: Theme) {
  // Always light theme - no-op
  return
}

export function toggleTheme() {
  // Always light theme - no-op
  return 'light'
} 