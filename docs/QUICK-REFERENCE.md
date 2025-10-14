# Quick Reference Guide

## Common Commands

### Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type checking
npm run type-check

# Linting
npm run lint

# Image optimization
npm run optimize-images
npm run optimize-media
```

### Git Workflow

```bash
# Create feature branch
git checkout -b feature/feature-name

# Commit changes
git add .
git commit -m "feat: add new feature"

# Push to remote
git push origin feature/feature-name

# Update main
git checkout main
git pull origin main
```

## File Templates

### Page Component

```typescript
// app/new-page/page.tsx
export default function NewPage() {
  return (
    <main className="min-h-screen">
      <section className="py-20">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">Page Title</h1>
          <p className="text-xl text-muted-foreground">Description</p>
        </div>
      </section>
    </main>
  )
}
```

### Layout with Metadata

```typescript
// app/new-page/layout.tsx
import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/seo'

export const generateMetadata = async (): Promise<Metadata> =>
  createPageMetadata({
    title: 'Page Title - IntelliSpec',
    description: 'Page description for SEO',
    canonicalPath: '/new-page'
  })

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
```

### Section Component

```typescript
// components/sections/NewSection.tsx
interface NewSectionProps {
  title: string
  description: string
}

export default function NewSection({ title, description }: NewSectionProps) {
  return (
    <section className="py-20 bg-muted">
      <div className="container-custom">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-lg text-muted-foreground">{description}</p>
      </div>
    </section>
  )
}
```

### Client Component with State

```typescript
// components/sections/InteractiveComponent.tsx
'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function InteractiveComponent() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Count: {count}</p>
      <Button onClick={() => setCount(count + 1)}>
        Increment
      </Button>
    </div>
  )
}
```

### API Route

```typescript
// app/api/endpoint/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const data = { message: 'Success' }
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    // Process request
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { error: 'Bad request' },
      { status: 400 }
    )
  }
}
```

## Common Patterns

### Fetching Data (Server Component)

```typescript
// app/blog/page.tsx
import { getBlogPosts } from '@/lib/sanity'

export const revalidate = 3600 // 1 hour

export default async function BlogPage() {
  const posts = await getBlogPosts()
  
  return (
    <div>
      {posts.map((post) => (
        <article key={post._id}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </div>
  )
}
```

### Image Component

```typescript
import Image from 'next/image'

// Local image
<Image
  src="/images/hero.jpg"
  alt="Hero image"
  width={1920}
  height={1080}
  priority  // For LCP image
/>

// Remote image (Sanity)
<Image
  src={urlFor(post.mainImage).width(800).height(600).url()}
  alt={post.title}
  width={800}
  height={600}
/>

// Responsive image
<Image
  src="/images/hero.jpg"
  alt="Hero"
  fill
  className="object-cover"
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

### Form with Validation

```typescript
'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const schema = z.object({
  email: z.string().email('Invalid email'),
  message: z.string().min(10, 'Too short'),
})

type FormData = z.infer<typeof schema>

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email')} />
      {errors.email && <span>{errors.email.message}</span>}
      
      <textarea {...register('message')} />
      {errors.message && <span>{errors.message.message}</span>}
      
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send'}
      </button>
    </form>
  )
}
```

### Animation

```typescript
'use client'

import { motion } from 'framer-motion'

// Fade in on scroll
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  <Content />
</motion.div>

// Stagger children
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

<motion.div
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
>
  {items.map((item) => (
    <motion.div key={item.id} variants={itemVariants}>
      <Item data={item} />
    </motion.div>
  ))}
</motion.div>
```

## Styling Quick Reference

### Common Classes

```typescript
// Container
<div className="container-custom">  // Max-width container with padding

// Card
<div className="card">  // Glass-morphism card with hover

// Button variants
<button className="btn-primary">    // Primary action button
<button className="btn-secondary">  // Secondary button
<button className="btn-outline">    // Outline button

// Text
<h1 className="text-4xl font-bold">
<p className="text-muted-foreground">
<span className="text-primary">

// Spacing
<section className="py-20">        // Section padding
<div className="mb-8">              // Margin bottom
<div className="gap-6">             // Grid/flex gap

// Layout
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="flex items-center justify-between">
```

### Responsive Design

```typescript
// Mobile first
<div className="
  text-base         /* Mobile: 16px */
  md:text-lg        /* Tablet: 18px */
  lg:text-xl        /* Desktop: 20px */
">

// Grid columns
<div className="
  grid-cols-1       /* Mobile: 1 column */
  sm:grid-cols-2    /* Tablet: 2 columns */
  lg:grid-cols-3    /* Desktop: 3 columns */
  xl:grid-cols-4    /* Large: 4 columns */
">
```

## Environment Variables

```bash
# Public (accessible in browser)
NEXT_PUBLIC_SANITY_PROJECT_ID=abc123
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-07-21

# Private (server-side only)
SANITY_API_TOKEN=sk_prod_xxxxx
REVALIDATION_SECRET=your_secret
```

## Debugging

### Console Logging

```typescript
// Development only
if (process.env.NODE_ENV === 'development') {
  console.log('Debug:', data)
}

// Always log errors
console.error('Error:', error)
console.warn('Warning:', issue)
```

### React DevTools

```bash
# Install browser extension
# Chrome: React Developer Tools
# Firefox: React Developer Tools

# Usage:
# 1. Open DevTools
# 2. Go to "Components" tab
# 3. Inspect component props/state
```

### Network Inspection

```bash
# Chrome DevTools → Network tab
# Filter by:
# - All: See all requests
# - XHR/Fetch: API calls
# - Img: Image loads
# - JS: Script loads
# - CSS: Style loads
```

## Performance

### Optimization Checklist

- [ ] Use `next/image` for all images
- [ ] Add `priority` to LCP image
- [ ] Lazy load heavy components with `dynamic()`
- [ ] Use Server Components by default
- [ ] Only add `'use client'` when necessary
- [ ] Memoize expensive computations with `useMemo`
- [ ] Memoize callbacks with `useCallback`
- [ ] Use animations with `transform` and `opacity` only

### Performance Testing

```bash
# Lighthouse in Chrome
# 1. Open DevTools (F12)
# 2. Go to Lighthouse tab
# 3. Select categories
# 4. Generate report

# Target scores:
# Performance: 90+
# Accessibility: 95+
# Best Practices: 95+
# SEO: 100
```

## Deployment

### Vercel Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Environment Variables on Vercel

```bash
# Set via CLI
vercel env add VARIABLE_NAME production

# Or via dashboard:
# 1. Go to vercel.com/dashboard
# 2. Select project
# 3. Go to Settings → Environment Variables
# 4. Add variables
# 5. Redeploy
```

## Troubleshooting

### Common Issues

```bash
# Port in use
lsof -ti:3000 | xargs kill -9  # macOS/Linux
netstat -ano | findstr :3000   # Windows

# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# TypeScript errors
npm run type-check

# Build test
npm run build
```

## Useful Links

- **Next.js Docs**: https://nextjs.org/docs
- **React Docs**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com/docs
- **TypeScript**: https://www.typescriptlang.org/docs
- **Sanity**: https://www.sanity.io/docs
- **Vercel**: https://vercel.com/docs

## Git Commit Conventions

```bash
feat:     # New feature
fix:      # Bug fix
docs:     # Documentation
style:    # Formatting
refactor: # Code restructure
test:     # Adding tests
chore:    # Maintenance

# Examples
git commit -m "feat: add pricing calculator"
git commit -m "fix: resolve mobile navigation bug"
git commit -m "docs: update API documentation"
```

---

**Last Updated**: October 2025
**Version**: 1.0.0

