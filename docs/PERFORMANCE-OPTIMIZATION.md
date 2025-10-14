# Performance Optimization

## Performance Goals

### Target Metrics (Core Web Vitals)

- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1
- **TTFB (Time to First Byte)**: < 600ms
- **FCP (First Contentful Paint)**: < 1.8s

### Lighthouse Targets

- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 100

## Image Optimization

### 1. Next.js Image Component

**Always use `next/image` for automatic optimization**:

```typescript
import Image from 'next/image'

// ✅ Good - automatic optimization
<Image
  src="/images/hero.jpg"
  alt="Hero image"
  width={1920}
  height={1080}
  priority  // For LCP image
/>

// ❌ Avoid - no optimization
<img src="/images/hero.jpg" alt="Hero image" />
```

### 2. Image Priority

```typescript
// Mark LCP (above-the-fold) images as priority
<Image
  src="/images/hero.jpg"
  alt="Hero"
  fill
  priority  // Loads immediately, no lazy loading
  className="object-cover"
/>

// Other images lazy load by default
<Image
  src="/images/feature.jpg"
  alt="Feature"
  width={800}
  height={600}
  // No priority - lazy loads when near viewport
/>
```

### 3. Responsive Images

```typescript
<Image
  src="/images/hero.jpg"
  alt="Hero"
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  className="object-cover"
/>
```

### 4. Image Formats

```javascript
// next.config.js
module.exports = {
  images: {
    formats: ['image/webp', 'image/avif'],
    // Next.js automatically serves best format
  }
}
```

### 5. Image Optimization Script

```bash
# Run before committing images
npm run optimize-images
```

```javascript
// scripts/optimize-images.js
const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

async function optimizeImage(inputPath, outputPath) {
  await sharp(inputPath)
    .resize(1920, 1080, {
      fit: 'inside',
      withoutEnlargement: true
    })
    .webp({ quality: 85 })
    .toFile(outputPath)
}
```

## Font Optimization

### 1. Google Fonts with next/font

```typescript
// app/layout.tsx
import { Inter, IBM_Plex_Sans } from 'next/font/google'

// Automatic optimization, self-hosting
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',  // Prevents FOIT (Flash of Invisible Text)
})

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-ibm-plex',
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${ibmPlexSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
```

### Benefits:
- Fonts self-hosted (no external requests)
- Automatic font subsetting
- Zero layout shift
- Perfect Lighthouse score

## Code Splitting & Lazy Loading

### 1. Dynamic Imports

```typescript
import dynamic from 'next/dynamic'

// Lazy load heavy components
const HeavyChart = dynamic(
  () => import('@/components/widgets/Chart'),
  {
    loading: () => <div>Loading chart...</div>,
    ssr: false  // Client-side only if needed
  }
)

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <HeavyChart data={data} />
    </div>
  )
}
```

### 2. Route-Based Code Splitting

```typescript
// Automatic with Next.js App Router
// Each page.tsx is a separate bundle

// app/blog/page.tsx → blog.js
// app/pricing/page.tsx → pricing.js
// Loaded only when navigating to that route
```

### 3. Component-Level Code Splitting

```typescript
// Only load when component is used
const ContactForm = dynamic(
  () => import('@/components/sections/ContactForm')
)

export default function ContactPage() {
  return (
    <div>
      <h1>Contact Us</h1>
      <ContactForm />
    </div>
  )
}
```

## React Optimization

### 1. React.memo

```typescript
import { memo } from 'react'

interface CardProps {
  title: string
  description: string
}

// Prevents re-render if props haven't changed
const Card = memo(function Card({ title, description }: CardProps) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
})

export default Card
```

### 2. useMemo

```typescript
import { useMemo } from 'react'

export default function ExpensiveComponent({ items }) {
  // Only recalculates when items change
  const processedItems = useMemo(() => {
    return items.map(item => ({
      ...item,
      processed: expensiveOperation(item)
    }))
  }, [items])

  return <div>{/* render processedItems */}</div>
}
```

### 3. useCallback

```typescript
import { useCallback } from 'react'

export default function ParentComponent() {
  // Function reference stays stable across renders
  const handleClick = useCallback(() => {
    console.log('Clicked')
  }, [])

  return <ChildComponent onClick={handleClick} />
}
```

## Server Components vs Client Components

### Use Server Components (Default)

```typescript
// app/blog/page.tsx
// No 'use client' = Server Component

export default async function BlogPage() {
  // Data fetching on server
  const posts = await fetchPosts()
  
  return (
    <div>
      {posts.map(post => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  )
}
```

**Benefits**:
- Zero JavaScript sent to client
- Direct data fetching
- Better SEO
- Faster initial load

### Use Client Components When Needed

```typescript
// components/sections/InteractiveForm.tsx
'use client'

import { useState } from 'react'

export default function InteractiveForm() {
  const [value, setValue] = useState('')
  
  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  )
}
```

**Only when**:
- Using React hooks (useState, useEffect, etc.)
- Event handlers (onClick, onChange)
- Browser APIs (localStorage, etc.)

## Caching Strategies

### 1. Static Generation

```typescript
// Generated at build time, cached forever
export default async function StaticPage() {
  const data = await fetchData()
  return <div>{data}</div>
}
```

### 2. Incremental Static Regeneration (ISR)

```typescript
// Regenerate every hour
export const revalidate = 3600

export default async function ISRPage() {
  const data = await fetchData()
  return <div>{data}</div>
}
```

### 3. On-Demand Revalidation

```typescript
// app/api/revalidate/route.ts
import { revalidatePath } from 'next/cache'

export async function POST() {
  revalidatePath('/blog')
  return Response.json({ revalidated: true })
}
```

### 4. Client-Side Caching

```typescript
// Use SWR or React Query for client-side caching
import useSWR from 'swr'

export default function ClientData() {
  const { data, error } = useSWR('/api/data', fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    refreshInterval: 60000  // 1 minute
  })

  if (error) return <div>Failed</div>
  if (!data) return <div>Loading...</div>
  return <div>{data}</div>
}
```

## Bundle Optimization

### 1. Analyze Bundle Size

```bash
# Install bundle analyzer
npm install @next/bundle-analyzer

# Configure in next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  // ... config
})

# Run analysis
ANALYZE=true npm run build
```

### 2. Tree Shaking

```typescript
// ✅ Good - only imports what's needed
import { Button } from '@/components/ui/button'

// ❌ Avoid - imports entire library
import * as Components from '@/components/ui'
```

### 3. Remove Unused Code

```bash
# TypeScript helps identify unused code
npm run type-check

# ESLint identifies unused imports
npm run lint
```

## Animation Performance

### 1. Use transform and opacity

```css
/* ✅ Good - GPU accelerated */
.animate {
  transform: translateX(100px);
  opacity: 0.5;
}

/* ❌ Avoid - causes layout recalculation */
.animate {
  left: 100px;
  width: 200px;
}
```

### 2. Framer Motion Optimization

```typescript
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3 }}
  // Use transform properties only
  style={{ willChange: 'transform, opacity' }}
>
  Content
</motion.div>
```

### 3. CSS Animations

```css
@keyframes slideIn {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.element {
  animation: slideIn 0.3s ease-out;
  will-change: transform, opacity;
}
```

## Rendering Performance

### 1. Minimize Re-renders

```typescript
// Bad - creates new function on every render
<button onClick={() => handleClick(id)}>Click</button>

// Good - stable function reference
const handleClick = useCallback((id) => {
  // handle click
}, [])

<button onClick={() => handleClick(id)}>Click</button>
```

### 2. Virtual Scrolling for Long Lists

```typescript
import { FixedSizeList } from 'react-window'

export default function LongList({ items }) {
  return (
    <FixedSizeList
      height={600}
      itemCount={items.length}
      itemSize={50}
      width="100%"
    >
      {({ index, style }) => (
        <div style={style}>{items[index]}</div>
      )}
    </FixedSizeList>
  )
}
```

### 3. Debounce & Throttle

```typescript
import { useState, useCallback } from 'react'
import { debounce } from 'lodash'

export default function SearchInput() {
  const [value, setValue] = useState('')

  // Debounce search API calls
  const debouncedSearch = useCallback(
    debounce((searchTerm) => {
      // API call
    }, 300),
    []
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    debouncedSearch(e.target.value)
  }

  return <input value={value} onChange={handleChange} />
}
```

## Network Optimization

### 1. HTTP Headers

```javascript
// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|webp|avif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          }
        ],
      },
    ]
  },
}
```

### 2. Compression

```javascript
// Automatic in production with Next.js
// Serves gzipped/brotli assets
```

### 3. CDN Configuration

```javascript
// Vercel automatically provides global CDN
// Custom CDN configuration in next.config.js
module.exports = {
  assetPrefix: process.env.CDN_URL,
}
```

## Performance Monitoring

### 1. Web Vitals Reporting

```typescript
// app/layout.tsx
export function reportWebVitals(metric) {
  console.log(metric)
  
  // Send to analytics
  // analytics.track(metric.name, metric.value)
}
```

### 2. Performance API

```typescript
'use client'

import { useEffect } from 'react'

export default function PerformanceMonitor() {
  useEffect(() => {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        console.log(`${entry.name}: ${entry.duration}ms`)
      }
    })

    observer.observe({ entryTypes: ['measure'] })

    return () => observer.disconnect()
  }, [])

  return null
}
```

## Checklist

### Pre-Deployment Performance Audit

- [ ] All images use `next/image` component
- [ ] LCP image has `priority` prop
- [ ] Images have explicit width/height
- [ ] Fonts use `next/font` for optimization
- [ ] Heavy components use dynamic imports
- [ ] Expensive computations use `useMemo`
- [ ] Event handlers use `useCallback`
- [ ] Long lists use virtualization
- [ ] Animations use transform/opacity only
- [ ] Bundle size analyzed and optimized
- [ ] Lighthouse score > 90 on all pages
- [ ] Core Web Vitals in green
- [ ] No console errors/warnings
- [ ] TypeScript compiles without errors

### Performance Testing Tools

- **Lighthouse** - Chrome DevTools
- **WebPageTest** - webpagetest.org
- **GTmetrix** - gtmetrix.com
- **PageSpeed Insights** - pagespeed.web.dev
- **Chrome DevTools Performance** - Profile rendering

---

**Last Updated**: October 2025
**Version**: 1.0.0

