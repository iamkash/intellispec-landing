# Security Best Practices

## Overview

This document outlines security measures, best practices, and guidelines for maintaining a secure intelliSPEC Landing application.

## Security Headers

### HTTP Security Headers

```javascript
// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',  // Prevents clickjacking
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',  // Prevents MIME sniffing
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',  // Controls referrer information
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',  // XSS protection
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',  // Feature policy
          },
        ],
      },
    ]
  },
}
```

### Content Security Policy (CSP)

```javascript
// next.config.js
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' https://cdn.sanity.io;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  font-src 'self' https://fonts.gstatic.com;
  img-src 'self' data: blob: https://cdn.sanity.io;
  media-src 'self' https://cdn.sanity.io;
  connect-src 'self' https://*.sanity.io;
  frame-src 'none';
`

module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
          },
        ],
      },
    ]
  },
}
```

## Environment Variables

### Secure Configuration

```bash
# .env.local (NEVER COMMIT THIS FILE)

# Public variables (accessible in browser)
NEXT_PUBLIC_SANITY_PROJECT_ID=abc123
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01

# Private variables (server-side only)
SANITY_API_TOKEN=sk_prod_xxxxxxxxxxxx
REVALIDATION_SECRET=strong_random_secret_here
DATABASE_URL=postgresql://user:pass@localhost:5432/db
API_SECRET_KEY=another_strong_secret
```

### .gitignore Configuration

```bash
# .gitignore
.env.local
.env*.local
.env.production
.env.development

# Keep only template
# .env.example
```

### Environment Variable Validation

```typescript
// lib/env.ts
import { z } from 'zod'

const envSchema = z.object({
  NEXT_PUBLIC_SANITY_PROJECT_ID: z.string().min(1),
  NEXT_PUBLIC_SANITY_DATASET: z.string().min(1),
  SANITY_API_TOKEN: z.string().min(1),
  REVALIDATION_SECRET: z.string().min(32),
})

// Validate at startup
const env = envSchema.parse({
  NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET,
  SANITY_API_TOKEN: process.env.SANITY_API_TOKEN,
  REVALIDATION_SECRET: process.env.REVALIDATION_SECRET,
})

export default env
```

## Input Validation & Sanitization

### Form Validation with Zod

```typescript
// lib/validation.ts
import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .regex(/^[a-zA-Z\s]+$/, 'Name can only contain letters'),
  
  email: z.string()
    .email('Invalid email address')
    .max(255, 'Email must be less than 255 characters'),
  
  company: z.string()
    .max(200, 'Company name must be less than 200 characters')
    .optional(),
  
  message: z.string()
    .min(10, 'Message must be at least 10 characters')
    .max(5000, 'Message must be less than 5000 characters'),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
```

### API Route Validation

```typescript
// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { contactFormSchema } from '@/lib/validation'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate input
    const validatedData = contactFormSchema.parse(body)
    
    // Sanitize before using
    const sanitizedData = {
      name: sanitizeString(validatedData.name),
      email: validatedData.email,
      message: sanitizeString(validatedData.message),
    }
    
    // Process sanitized data
    // ...
    
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

function sanitizeString(str: string): string {
  return str
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .substring(0, 1000) // Limit length
}
```

## Authentication & Authorization

### API Route Protection

```typescript
// lib/auth.ts
import { NextRequest } from 'next/server'

export function verifyWebhookSecret(request: NextRequest): boolean {
  const secret = request.nextUrl.searchParams.get('secret')
  const expectedSecret = process.env.REVALIDATION_SECRET
  
  return secret === expectedSecret
}

// app/api/revalidate/route.ts
import { verifyWebhookSecret } from '@/lib/auth'

export async function POST(request: NextRequest) {
  if (!verifyWebhookSecret(request)) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    )
  }
  
  // Process authorized request
}
```

### Rate Limiting

```typescript
// lib/rate-limit.ts
import { NextRequest } from 'next/server'

const rateLimit = new Map<string, { count: number; resetTime: number }>()

export function checkRateLimit(
  request: NextRequest,
  maxRequests: number = 10,
  windowMs: number = 60000
): boolean {
  const identifier = request.ip || 'unknown'
  const now = Date.now()
  
  const record = rateLimit.get(identifier)
  
  if (!record || now > record.resetTime) {
    rateLimit.set(identifier, {
      count: 1,
      resetTime: now + windowMs,
    })
    return true
  }
  
  if (record.count >= maxRequests) {
    return false
  }
  
  record.count++
  return true
}

// Usage in API route
export async function POST(request: NextRequest) {
  if (!checkRateLimit(request, 5, 60000)) {
    return NextResponse.json(
      { error: 'Too many requests' },
      { status: 429 }
    )
  }
  
  // Process request
}
```

## XSS Prevention

### Content Rendering

```typescript
// ✅ Safe - React escapes by default
<div>{userInput}</div>

// ❌ Dangerous - allows XSS
<div dangerouslySetInnerHTML={{ __html: userInput }} />

// ✅ Safe - sanitize first
import DOMPurify from 'isomorphic-dompurify'

<div dangerouslySetInnerHTML={{ 
  __html: DOMPurify.sanitize(userInput) 
}} />
```

### URL Sanitization

```typescript
// lib/url.ts
export function sanitizeUrl(url: string): string {
  // Only allow http/https protocols
  try {
    const parsed = new URL(url)
    if (!['http:', 'https:'].includes(parsed.protocol)) {
      return '#'
    }
    return url
  } catch {
    return '#'
  }
}

// Usage
<a href={sanitizeUrl(userProvidedUrl)} target="_blank" rel="noopener noreferrer">
  Link
</a>
```

## CSRF Protection

### Next.js API Routes

```typescript
// lib/csrf.ts
import { NextRequest } from 'next/server'

export function verifyCsrfToken(request: NextRequest): boolean {
  const token = request.headers.get('x-csrf-token')
  const sessionToken = request.cookies.get('csrf-token')?.value
  
  return token === sessionToken
}

// Middleware
export async function POST(request: NextRequest) {
  if (!verifyCsrfToken(request)) {
    return NextResponse.json(
      { error: 'Invalid CSRF token' },
      { status: 403 }
    )
  }
  
  // Process request
}
```

## SQL Injection Prevention

### Parameterized Queries

```typescript
// ✅ Safe - parameterized query
const user = await db.query(
  'SELECT * FROM users WHERE email = $1',
  [userEmail]
)

// ❌ Dangerous - string concatenation
const user = await db.query(
  `SELECT * FROM users WHERE email = '${userEmail}'`
)
```

### ORM/Query Builder

```typescript
// Using Prisma (recommended)
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Safe by default
const user = await prisma.user.findUnique({
  where: { email: userEmail }
})
```

## File Upload Security

### Validation

```typescript
// lib/file-validation.ts
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp']
const MAX_SIZE = 5 * 1024 * 1024 // 5MB

export function validateFile(file: File): { valid: boolean; error?: string } {
  if (!ALLOWED_TYPES.includes(file.type)) {
    return { valid: false, error: 'Invalid file type' }
  }
  
  if (file.size > MAX_SIZE) {
    return { valid: false, error: 'File too large' }
  }
  
  return { valid: true }
}

// API route
export async function POST(request: NextRequest) {
  const formData = await request.formData()
  const file = formData.get('file') as File
  
  const validation = validateFile(file)
  if (!validation.valid) {
    return NextResponse.json(
      { error: validation.error },
      { status: 400 }
    )
  }
  
  // Process file
}
```

### Secure File Storage

```typescript
// Store with random names
import crypto from 'crypto'

function generateSecureFilename(originalName: string): string {
  const extension = path.extname(originalName)
  const randomName = crypto.randomBytes(16).toString('hex')
  return `${randomName}${extension}`
}

// Store outside public directory
const uploadDir = path.join(process.cwd(), 'uploads')
```

## Dependency Security

### Regular Updates

```bash
# Check for vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix

# Update dependencies
npm update

# Check for outdated packages
npm outdated
```

### Automated Security Scanning

```yaml
# .github/workflows/security.yml
name: Security Scan

on: [push, pull_request]

jobs:
  security:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
      - run: npm ci
      - run: npm audit
```

## Secrets Management

### Never Commit Secrets

```bash
# Use .gitignore
.env.local
.env*.local
*.pem
*.key
secrets/

# Check for leaked secrets
git log --all --full-history -- .env
```

### Environment-Specific Secrets

```bash
# Development
.env.local

# Production (Vercel)
# Set via Vercel dashboard or CLI
vercel env add SECRET_KEY production
```

### Rotate Secrets Regularly

```bash
# Generate strong secrets
openssl rand -base64 32

# Update in environment
# Redeploy application
```

## Logging & Monitoring

### Security Event Logging

```typescript
// lib/logger.ts
export function logSecurityEvent(
  event: string,
  details: Record<string, any>
) {
  console.warn('[SECURITY]', event, {
    timestamp: new Date().toISOString(),
    ...details,
  })
  
  // Send to monitoring service
  // e.g., Sentry, DataDog, etc.
}

// Usage
if (!verifyAuth(request)) {
  logSecurityEvent('unauthorized_access', {
    ip: request.ip,
    path: request.nextUrl.pathname,
  })
  return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
}
```

### Error Handling

```typescript
// Don't expose sensitive information in errors
try {
  // Operation
} catch (error) {
  console.error('Internal error:', error)
  
  // ✅ Generic message to client
  return NextResponse.json(
    { error: 'An error occurred' },
    { status: 500 }
  )
  
  // ❌ Don't expose details
  // return NextResponse.json({ error: error.message })
}
```

## Security Checklist

### Pre-Deployment

- [ ] All environment variables properly configured
- [ ] No secrets committed to git
- [ ] Security headers configured
- [ ] CSP policy implemented
- [ ] Input validation on all forms
- [ ] API routes protected
- [ ] Rate limiting implemented
- [ ] HTTPS enforced
- [ ] Dependencies updated
- [ ] No npm audit vulnerabilities
- [ ] Error messages don't expose sensitive info
- [ ] File uploads validated and secured
- [ ] SQL queries parameterized
- [ ] XSS prevention in place

### Regular Maintenance

- [ ] Review access logs weekly
- [ ] Update dependencies monthly
- [ ] Rotate secrets quarterly
- [ ] Security audit annually
- [ ] Review user permissions
- [ ] Check for exposed endpoints
- [ ] Monitor error rates
- [ ] Review security headers

## Incident Response

### Security Incident Steps

1. **Identify**: Detect the security issue
2. **Contain**: Limit the scope of the breach
3. **Investigate**: Understand what happened
4. **Remediate**: Fix the vulnerability
5. **Review**: Prevent future incidents

### Emergency Contacts

```
Security Team: security@intellispec.com
On-Call Engineer: +1-555-SECURITY
Incident Hotline: +1-555-INCIDENT
```

---

**Last Updated**: October 2025
**Version**: 1.0.0
**Security Level**: Production

