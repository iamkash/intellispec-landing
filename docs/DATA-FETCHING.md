# Data Fetching & API Integration

## Overview

intelliSPEC Landing uses Next.js 14's data fetching capabilities with Sanity CMS as the content backend. This document covers patterns for fetching, caching, and revalidating data.

## Sanity CMS Integration

### Configuration

```typescript
// sanity/env.ts
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-07-21'
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
export const useCdn = false // Always fetch fresh data on server
```

```typescript
// sanity/lib/client.ts
import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: process.env.SANITY_API_TOKEN, // Optional, for authenticated requests
})
```

### Sanity Queries

```typescript
// lib/sanity.ts
import { client } from '@/sanity/lib/client'
import type { BlogPost, CaseStudy, PressItem, WhitePaper } from '@/types'

// Fetch all blog posts
export async function getBlogPosts(): Promise<BlogPost[]> {
  return client.fetch(`
    *[_type == "blogPost"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      author-> {
        name,
        image
      },
      mainImage,
      categories[]-> {
        title
      }
    }
  `)
}

// Fetch single blog post by slug
export async function getBlogPost(slug: string): Promise<BlogPost> {
  return client.fetch(`
    *[_type == "blogPost" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      _updatedAt,
      author-> {
        name,
        image,
        bio
      },
      mainImage,
      body,
      categories[]-> {
        title
      }
    }
  `, { slug })
}

// Fetch case studies
export async function getCaseStudies(): Promise<CaseStudy[]> {
  return client.fetch(`
    *[_type == "caseStudy"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      client,
      industry,
      challenge,
      solution,
      results,
      publishedAt,
      mainImage
    }
  `)
}

// Fetch press items
export async function getPressItems(): Promise<PressItem[]> {
  return client.fetch(`
    *[_type == "pressItem"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt,
      publication,
      excerpt,
      mainImage
    }
  `)
}

// Fetch white papers
export async function getWhitePapers(): Promise<WhitePaper[]> {
  return client.fetch(`
    *[_type == "whitePaper"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      downloadUrl,
      mainImage,
      category
    }
  `)
}
```

## Data Fetching Patterns

### 1. Server Components (Static Generation)

**Use Case**: Static content that doesn't change frequently

```typescript
// app/blog/page.tsx
import { getBlogPosts } from '@/lib/sanity'

// This will be generated at build time
export default async function BlogPage() {
  const posts = await getBlogPosts()
  
  return (
    <div>
      <h1>Blog</h1>
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

**Benefits**:
- Generated at build time
- Served as static HTML
- Fastest possible page load
- Perfect for SEO

### 2. Server Components (ISR - Incremental Static Regeneration)

**Use Case**: Content that updates periodically

```typescript
// app/case-studies/page.tsx
import { getCaseStudies } from '@/lib/sanity'

// Revalidate every hour
export const revalidate = 3600

export default async function CaseStudiesPage() {
  const studies = await getCaseStudies()
  
  return (
    <div>
      <h1>Case Studies</h1>
      {studies.map((study) => (
        <article key={study._id}>
          <h2>{study.title}</h2>
          <p>{study.challenge}</p>
        </article>
      ))}
    </div>
  )
}
```

**Benefits**:
- Static generation with periodic updates
- Balance between fresh content and performance
- Automatic background revalidation

### 3. Dynamic Routes with ISR

**Use Case**: Dynamic content pages

```typescript
// app/blog/[slug]/page.tsx
import { getBlogPost, getBlogPosts } from '@/lib/sanity'
import { notFound } from 'next/navigation'

// Generate static params at build time
export async function generateStaticParams() {
  const posts = await getBlogPosts()
  
  return posts.map((post) => ({
    slug: post.slug.current,
  }))
}

// Revalidate every hour
export const revalidate = 3600

export default async function BlogPostPage({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const post = await getBlogPost(params.slug)
  
  if (!post) {
    notFound()
  }
  
  return (
    <article>
      <h1>{post.title}</h1>
      <div>{post.body}</div>
    </article>
  )
}
```

### 4. Client-Side Data Fetching

**Use Case**: Interactive components, user-specific data

```typescript
// components/widgets/DynamicContent.tsx
'use client'

import { useState, useEffect } from 'react'

export default function DynamicContent() {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('/api/dynamic-data')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setIsLoading(false)
      })
  }, [])

  if (isLoading) return <div>Loading...</div>
  
  return <div>{/* Render data */}</div>
}
```

## API Routes

### Contact Form Handler

```typescript
// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  message: z.string().min(10),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate input
    const data = contactSchema.parse(body)
    
    // Send email (example with SendGrid, Resend, etc.)
    // await sendEmail({
    //   to: 'info@intellispec.com',
    //   from: data.email,
    //   subject: `Contact from ${data.name}`,
    //   text: data.message,
    // })
    
    return NextResponse.json({ success: true })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
```

### On-Demand Revalidation

```typescript
// app/api/revalidate/route.ts
import { revalidatePath, revalidateTag } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret')
  
  // Verify webhook secret
  if (secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
  }
  
  const body = await request.json()
  
  // Revalidate specific path
  if (body.path) {
    revalidatePath(body.path)
  }
  
  // Revalidate by tag
  if (body.tag) {
    revalidateTag(body.tag)
  }
  
  return NextResponse.json({ revalidated: true, now: Date.now() })
}
```

### Webhook Configuration in Sanity

```
Webhook URL: https://intellispec.com/api/revalidate?secret=YOUR_SECRET
Trigger: On create/update/delete
Document types: blogPost, caseStudy, pressItem, whitePaper
```

## Caching Strategies

### 1. Static Generation (Permanent Cache)

```typescript
// Default behavior - cached indefinitely
export default async function Page() {
  const data = await fetch('https://api.example.com/data')
  return <div>...</div>
}
```

### 2. Revalidate After Time Period

```typescript
// Revalidate every 60 seconds
export const revalidate = 60

export default async function Page() {
  const data = await fetch('https://api.example.com/data')
  return <div>...</div>
}
```

### 3. On-Demand Revalidation

```typescript
// Revalidate manually via API route
import { revalidatePath } from 'next/cache'

export async function POST() {
  revalidatePath('/blog')
  return Response.json({ revalidated: true })
}
```

### 4. No Cache (Dynamic)

```typescript
// Always fetch fresh data
export const dynamic = 'force-dynamic'

export default async function Page() {
  const data = await fetch('https://api.example.com/data', {
    cache: 'no-store'
  })
  return <div>...</div>
}
```

### 5. Tag-Based Revalidation

```typescript
// Tag the cached data
const data = await fetch('https://api.example.com/data', {
  next: { tags: ['blog-posts'] }
})

// Revalidate all data with this tag
import { revalidateTag } from 'next/cache'
revalidateTag('blog-posts')
```

## Image Optimization

### Sanity Image URLs

```typescript
// sanity/lib/image.ts
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { client } from './client'

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

// Usage
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'

<Image
  src={urlFor(post.mainImage).width(800).height(600).url()}
  alt={post.title}
  width={800}
  height={600}
/>
```

### Next.js Image Component

```typescript
// Always use Next.js Image component for optimization
import Image from 'next/image'

// Remote images (must be configured in next.config.js)
<Image
  src="https://cdn.sanity.io/images/..."
  alt="Description"
  width={1200}
  height={630}
  priority  // For LCP image
/>

// Local images
<Image
  src="/images/hero.jpg"
  alt="Hero"
  width={1920}
  height={1080}
  priority
/>
```

## Error Handling

### Try-Catch in Server Components

```typescript
export default async function Page() {
  try {
    const data = await fetchData()
    return <Content data={data} />
  } catch (error) {
    console.error('Failed to fetch data:', error)
    return <ErrorState />
  }
}
```

### Error Boundaries

```typescript
// app/blog/error.tsx
'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}
```

### Loading States

```typescript
// app/blog/loading.tsx
export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary" />
    </div>
  )
}
```

## Type Safety

### Generate Types from Sanity

```bash
# Install Sanity CLI
npm install -g @sanity/cli

# Generate TypeScript types
sanity schema extract
sanity typegen generate
```

### Manual Type Definitions

```typescript
// types/sanity.ts
export interface BlogPost {
  _id: string
  _type: 'blogPost'
  title: string
  slug: {
    current: string
  }
  excerpt: string
  publishedAt: string
  _updatedAt: string
  author: {
    name: string
    image: any
  }
  mainImage: any
  body: any[]
  categories: Array<{
    title: string
  }>
}

export interface CaseStudy {
  _id: string
  _type: 'caseStudy'
  title: string
  slug: {
    current: string
  }
  client: string
  industry: string
  challenge: string
  solution: string
  results: any[]
  publishedAt: string
  mainImage: any
}
```

## Best Practices

### 1. Use Server Components by Default

```typescript
// Server Component (default)
export default async function Page() {
  const data = await fetchData()
  return <div>{data}</div>
}

// Only use 'use client' when necessary
'use client'
export default function InteractiveComponent() {
  const [state, setState] = useState()
  return <div onClick={() => setState(...)}>...</div>
}
```

### 2. Implement Proper Error Handling

```typescript
export default async function Page() {
  try {
    const data = await fetchData()
    
    if (!data) {
      notFound() // Triggers 404 page
    }
    
    return <Content data={data} />
  } catch (error) {
    console.error(error)
    throw error // Triggers error.tsx
  }
}
```

### 3. Use Appropriate Caching Strategy

```typescript
// Static - never changes
export default async function Page() {
  const data = await fetch('...') // Cached forever
  return <div>...</div>
}

// ISR - updates periodically
export const revalidate = 3600 // 1 hour
export default async function Page() {
  const data = await fetch('...')
  return <div>...</div>
}

// Dynamic - always fresh
export const dynamic = 'force-dynamic'
export default async function Page() {
  const data = await fetch('...', { cache: 'no-store' })
  return <div>...</div>
}
```

### 4. Optimize Images

```typescript
// Always use Next.js Image
import Image from 'next/image'

// Provide explicit dimensions
<Image src="..." alt="..." width={800} height={600} />

// Use priority for LCP images
<Image src="..." alt="..." fill priority />

// Use responsive sizes
<Image
  src="..."
  alt="..."
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  fill
/>
```

### 5. Implement Loading and Error States

```typescript
// app/blog/loading.tsx
export default function Loading() {
  return <Skeleton />
}

// app/blog/error.tsx
'use client'
export default function Error({ error, reset }) {
  return <ErrorDisplay error={error} onRetry={reset} />
}

// app/blog/not-found.tsx
export default function NotFound() {
  return <NotFoundPage />
}
```

---

**Last Updated**: October 2025
**Version**: 1.0.0

