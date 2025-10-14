# Styling System

## Overview

The IntelliSpec Landing styling system is built on Tailwind CSS with CSS custom properties for theming, following a utility-first approach with component-level abstractions.

## Technology Stack

- **Tailwind CSS 3.3.6** - Utility-first CSS framework
- **PostCSS** - CSS transformations
- **Autoprefixer** - Vendor prefix automation
- **CSS Custom Properties** - Theme variables
- **ShadCN UI** - Pre-styled component library

## Design Tokens

###

 Color System

Colors are defined using HSL (Hue, Saturation, Lightness) format in CSS custom properties, enabling easy theme customization.

```css
/* app/globals.css */
:root {
  /* Custom Brand Colors */
  --navy: 221 100% 19%;            /* #001742 */
  --blue: 204 100% 37.6%;          /* #0070C0 */
  --brand-blue: 204 100% 37.6%;
  --teal: 163 56% 57%;             /* #54BAA0 */

  /* Light Theme Colors */
  --background: 0 0% 100%;         /* #FFFFFF */
  --foreground: 221 100% 15%;      /* Dark text */
  
  /* Primary Colors */
  --primary: var(--navy);
  --primary-foreground: 0 0% 100%;
  --primary-light: 221 60% 85%;
  --primary-lighter: 221 40% 95%;

  /* Secondary Colors */
  --secondary: var(--blue);
  --secondary-foreground: 0 0% 100%;
  --secondary-light: 200 50% 90%;

  /* Accent/Teal */
  --accent: var(--teal);
  --accent-foreground: 0 0% 100%;
  --accent-light: 163 30% 85%;

  /* Neutral Colors */
  --muted: 221 20% 96%;
  --muted-foreground: 221 20% 40%;
  --border: 221 20% 88%;
  --input: 221 20% 96%;
  --ring: var(--primary);

  /* Status Colors */
  --destructive: 0 84% 60%;
  --destructive-foreground: 0 0% 100%;
  --success: 163 56% 45%;
  --warning: 38 92% 50%;
  --info: var(--blue);
}
```

### Typography System

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        'ibm-plex': ['IBM Plex Sans', 'system-ui', 'sans-serif']
      },
      fontSize: {
        hero: ['2.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        display: ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        subtitle: ['1.25rem', { lineHeight: '1.5', fontWeight: '500' }]
      }
    }
  }
}
```

**Font Loading**:
```typescript
// app/layout.tsx
import { Inter, IBM_Plex_Sans } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const ibmPlexSans = IBM_Plex_Sans({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-ibm-plex',
  display: 'swap',
})
```

### Spacing Scale

```javascript
// tailwind.config.js
spacing: {
  '18': '4.5rem',    // 72px
  '88': '22rem',     // 352px
  '128': '32rem',    // 512px
}
```

### Border Radius

```javascript
borderRadius: {
  lg: 'var(--radius)',                    // 0.5rem
  md: 'calc(var(--radius) - 2px)',       // 0.375rem
  sm: 'calc(var(--radius) - 4px)',       // 0.25rem
}
```

## Tailwind Configuration

### Full Configuration

```javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        // ... more colors
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
        float: 'float 6s ease-in-out infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        // ... more keyframes
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
}
```

## Component Styling Patterns

### 1. Utility Classes

Direct application of Tailwind utilities:

```tsx
<div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
  <h3 className="text-2xl font-bold mb-4">Title</h3>
  <p className="text-muted-foreground">Content</p>
</div>
```

### 2. Custom Classes (CSS @layer)

For repeated patterns:

```css
/* app/globals.css */
@layer components {
  .btn-primary {
    @apply bg-primary backdrop-blur-xl hover:bg-primary/90 
           text-primary-foreground font-semibold py-3 px-6 
           rounded-xl transition-all duration-300 transform 
           hover:scale-105 focus:outline-none focus:ring-2 
           focus:ring-primary/50 shadow-xl hover:shadow-2xl 
           border border-primary/40;
  }

  .card {
    @apply bg-white/85 backdrop-blur-xl border 
           border-slate-200/70 rounded-2xl shadow-lg 
           hover:shadow-xl transition-all duration-500 
           transform hover:-translate-y-2 hover:bg-white/90;
  }
}
```

### 3. Component Variants (CVA)

For components with multiple variants:

```typescript
import { cva, type VariantProps } from 'class-variance-authority'

const buttonVariants = cva(
  // Base styles
  'inline-flex items-center justify-center rounded-md font-medium transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        outline: 'border border-input bg-background hover:bg-accent',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
      },
      size: {
        sm: 'h-9 px-3 text-sm',
        md: 'h-10 px-4',
        lg: 'h-11 px-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
)

interface ButtonProps 
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({ variant, size, className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}
```

## Glass Morphism Effects

### Glass Card Styles

```css
@layer utilities {
  .glass-morphism {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(40px);
    -webkit-backdrop-filter: blur(40px);
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  }

  .glass-morphism-heavy {
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(60px);
    -webkit-backdrop-filter: blur(60px);
    border: 1px solid rgba(0, 0, 0, 0.15);
    box-shadow: 0 16px 64px rgba(0, 0, 0, 0.12);
  }

  .glass-card {
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(50px);
    -webkit-backdrop-filter: blur(50px);
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  }
}
```

### Usage

```tsx
<div className="glass-morphism rounded-2xl p-8">
  <h3>Glass Effect Card</h3>
  <p>Content with backdrop blur</p>
</div>
```

## Animation System

### Tailwind Animations

```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 20px rgba(71, 85, 105, 0.3); }
  50% { box-shadow: 0 0 40px rgba(71, 85, 105, 0.6); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-pulse-glow {
  animation: pulse-glow 3s ease-in-out infinite;
}
```

### Framer Motion Integration

```tsx
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="card"
>
  <h3>Animated Card</h3>
</motion.div>
```

## Responsive Design

### Breakpoint System

```javascript
// Tailwind default breakpoints
{
  'sm': '640px',   // Mobile landscape, tablet portrait
  'md': '768px',   // Tablet landscape
  'lg': '1024px',  // Desktop
  'xl': '1280px',  // Large desktop
  '2xl': '1536px'  // Extra large desktop
}
```

### Mobile-First Approach

```tsx
<div className="
  grid grid-cols-1          /* Mobile: 1 column */
  sm:grid-cols-2            /* Tablet: 2 columns */
  lg:grid-cols-3            /* Desktop: 3 columns */
  xl:grid-cols-4            /* Large: 4 columns */
  gap-4
">
  {/* Grid items */}
</div>
```

### Responsive Typography

```tsx
<h1 className="
  text-3xl                  /* Mobile */
  sm:text-4xl               /* Small tablet */
  md:text-5xl               /* Tablet */
  lg:text-6xl               /* Desktop */
  font-bold
">
  Responsive Heading
</h1>
```

## Theme System

### Light/Dark Mode Support

```typescript
// contexts/ThemeContext.tsx
'use client'

import { createContext, useContext, useState } from 'react'

type Theme = 'light' | 'dark'

const ThemeContext = createContext<{
  theme: Theme
  setTheme: (theme: Theme) => void
}>({ theme: 'light', setTheme: () => {} })

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light')

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={theme}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
```

### Theme Toggle Component

```tsx
'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'
import { Button } from '@/components/ui/button'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {theme === 'light' ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
    </Button>
  )
}
```

## Accessibility

### Focus Styles

```css
@layer base {
  * {
    @apply focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2;
  }
}
```

### Screen Reader Only Content

```css
@layer utilities {
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
}
```

## Performance Optimization

### Purge Configuration

```javascript
// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // Tailwind will remove unused classes in production
}
```

### Critical CSS

```tsx
// app/layout.tsx
import './globals.css' // Includes critical styles

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```

## Best Practices

### 1. Use Semantic Class Names

```tsx
// Good
<button className="btn-primary">Submit</button>

// Avoid
<button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
  Submit
</button>
```

### 2. Group Related Utilities

```tsx
// Good - grouped by category
<div className="
  flex items-center justify-between
  rounded-lg border border-gray-200
  px-4 py-3
  hover:shadow-lg transition-shadow
">
```

### 3. Use cn() Helper for Conditional Classes

```typescript
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Usage
<div className={cn(
  'base-class',
  isActive && 'active-class',
  variant === 'primary' && 'primary-class'
)}>
```

### 4. Extract Repeated Patterns

```css
/* Instead of repeating */
<div className="rounded-lg shadow-md p-6 bg-white">

/* Create a component class */
@layer components {
  .card-base {
    @apply rounded-lg shadow-md p-6 bg-white;
  }
}

<div className="card-base">
```

## Common Patterns

### Card Component

```css
@layer components {
  .card {
    @apply bg-white/85 backdrop-blur-xl border border-slate-200/70;
    @apply rounded-2xl shadow-lg hover:shadow-xl;
    @apply transition-all duration-500 transform hover:-translate-y-2;
  }

  .card-solid {
    @apply bg-white/90 backdrop-blur-xl border border-slate-200/80;
    @apply rounded-2xl shadow-lg hover:shadow-xl;
    @apply transition-all duration-500 transform hover:-translate-y-2;
  }
}
```

### Button Patterns

```css
@layer components {
  .btn-primary {
    @apply bg-primary hover:bg-primary/90 text-primary-foreground;
    @apply font-semibold py-3 px-6 rounded-xl;
    @apply transition-all duration-300 transform hover:scale-105;
    @apply focus:outline-none focus:ring-2 focus:ring-primary/50;
    @apply shadow-xl hover:shadow-2xl border border-primary/40;
  }

  .btn-secondary {
    @apply bg-secondary hover:bg-secondary/90 text-secondary-foreground;
    @apply font-semibold py-3 px-6 rounded-xl;
    @apply transition-all duration-300 transform hover:scale-105;
    @apply focus:outline-none focus:ring-2 focus:ring-secondary/50;
    @apply shadow-xl hover:shadow-2xl border border-secondary/40;
  }

  .btn-outline {
    @apply bg-background/10 backdrop-blur-xl;
    @apply border-2 border-primary/30 text-primary hover:bg-primary/10;
    @apply font-semibold py-3 px-6 rounded-xl;
    @apply transition-all duration-300 transform hover:scale-105;
    @apply focus:outline-none focus:ring-2 focus:ring-primary/50;
    @apply shadow-xl hover:shadow-2xl;
  }
}
```

---

**Last Updated**: October 2025
**Version**: 1.0.0

