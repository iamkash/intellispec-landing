# Troubleshooting Guide

## Common Issues & Solutions

### Build & Deployment Issues

#### Build Fails with TypeScript Errors

**Symptoms**:
```
Type error: Property 'X' does not exist on type 'Y'
```

**Solutions**:
```bash
# 1. Clear Next.js cache
rm -rf .next
npm run dev

# 2. Check for type errors
npm run type-check

# 3. Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# 4. Update TypeScript
npm install typescript@latest

# 5. Check tsconfig.json
# Ensure "strict": false if needed
```

#### Build Succeeds Locally but Fails on Vercel

**Symptoms**:
```
Error: Module not found
Error: Cannot find module 'X'
```

**Solutions**:
```bash
# 1. Check case sensitivity
# Windows/Mac are case-insensitive, Linux is not
# Ensure import paths match exact file names

# 2. Verify all dependencies are in package.json
npm install

# 3. Check .gitignore
# Ensure no required files are ignored

# 4. Test production build locally
npm run build
npm start

# 5. Check Vercel environment variables
# Ensure all required env vars are set
```

#### Out of Memory During Build

**Symptoms**:
```
FATAL ERROR: Reached heap limit Allocation failed
```

**Solutions**:
```bash
# 1. Increase Node.js memory limit
NODE_OPTIONS="--max_old_space_size=4096" npm run build

# 2. Optimize bundle size
# Remove unused dependencies
npm uninstall unused-package

# 3. Check for memory leaks in build process
# Review large image files
# Check for circular dependencies

# 4. Split large components
# Use dynamic imports
```

### Development Server Issues

#### Port Already in Use

**Symptoms**:
```
Error: listen EADDRINUSE: address already in use :::3000
```

**Solutions**:
```bash
# 1. Kill process on port 3000 (macOS/Linux)
lsof -ti:3000 | xargs kill -9

# 2. Kill process on port 3000 (Windows)
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# 3. Use different port
PORT=3001 npm run dev

# 4. Add to package.json
"dev": "next dev -p 3001"
```

#### Hot Reload Not Working

**Symptoms**:
- Changes not reflected
- Page doesn't refresh

**Solutions**:
```bash
# 1. Restart dev server
# Ctrl+C then npm run dev

# 2. Clear Next.js cache
rm -rf .next
npm run dev

# 3. Check file watchers (Linux)
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf
sudo sysctl -p

# 4. Check VS Code settings
# Disable "files.watcherExclude" for project directory

# 5. Use polling (slower but reliable)
# Add to next.config.js
module.exports = {
  webpack: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }
    return config
  },
}
```

### Styling Issues

#### Tailwind Classes Not Applied

**Symptoms**:
- Classes in code but no styles
- Only some classes work

**Solutions**:
```bash
# 1. Check content paths in tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
}

# 2. Restart dev server
npm run dev

# 3. Check for typos
# "bg-primay" vs "bg-primary"

# 4. Check class conflicts
# Use cn() utility for conditional classes

# 5. Clear Tailwind cache
rm -rf .next
npm run dev
```

#### Styles Flash or Load Incorrectly

**Symptoms**:
- FOUC (Flash of Unstyled Content)
- Wrong theme on load

**Solutions**:
```typescript
// 1. Add suppressHydrationWarning to html tag
<html suppressHydrationWarning>

// 2. Add blocking script for theme
<script dangerouslySetInnerHTML={{
  __html: `
    (function() {
      document.documentElement.classList.add('light');
    })();
  `
}} />

// 3. Ensure globals.css is imported in layout.tsx
import './globals.css'

// 4. Check CSS custom properties
:root {
  --background: 0 0% 100%;
}
```

#### Custom CSS Not Working

**Symptoms**:
- @layer not working
- @apply not recognized

**Solutions**:
```bash
# 1. Configure VS Code
# Create .vscode/settings.json
{
  "css.lint.unknownAtRules": "ignore"
}

# 2. Check PostCSS config
# postcss.config.js should include tailwindcss

# 3. Restart language server
# VS Code: Cmd/Ctrl + Shift + P
# "TypeScript: Restart TS Server"
```

### Image Issues

#### Images Not Loading

**Symptoms**:
```
Error: Invalid src prop
Unoptimized image warning
```

**Solutions**:
```typescript
// 1. Check image path
// Correct: /images/hero.jpg
// Incorrect: images/hero.jpg

// 2. For remote images, configure next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
}

// 3. Provide explicit dimensions
<Image
  src="/images/hero.jpg"
  alt="Hero"
  width={1920}
  height={1080}
/>

// 4. Check file exists in public directory
ls public/images/hero.jpg
```

#### Image Quality Poor

**Symptoms**:
- Blurry images
- Low quality

**Solutions**:
```typescript
// 1. Increase quality prop
<Image
  src="/images/hero.jpg"
  alt="Hero"
  width={1920}
  height={1080}
  quality={90}  // Default is 75
/>

// 2. Use larger source image
// Source should be 2x desired display size

// 3. Check image format
// Use WebP/AVIF for better quality at smaller size

// 4. Disable optimization for specific images
<Image
  src="/images/hero.jpg"
  alt="Hero"
  unoptimized
  width={1920}
  height={1080}
/>
```

### Data Fetching Issues

#### Sanity Data Not Loading

**Symptoms**:
```
Error: Cannot read property 'X' of undefined
No data returned
```

**Solutions**:
```bash
# 1. Check environment variables
echo $NEXT_PUBLIC_SANITY_PROJECT_ID
echo $NEXT_PUBLIC_SANITY_DATASET

# 2. Verify Sanity connection
# Create test file
import { client } from '@/sanity/lib/client'

async function test() {
  const result = await client.fetch('*[_type == "blogPost"][0]')
  console.log(result)
}

# 3. Check CORS settings in Sanity
# https://www.sanity.io/manage
# Add your domain to CORS origins

# 4. Verify API token (if using)
# Check token has correct permissions
```

#### Data Not Updating

**Symptoms**:
- Old data still showing
- Changes in Sanity not reflected

**Solutions**:
```bash
# 1. Clear Next.js cache
rm -rf .next
npm run dev

# 2. Check revalidation settings
export const revalidate = 60 // Seconds

# 3. Manual revalidation
curl -X POST http://localhost:3000/api/revalidate?secret=YOUR_SECRET

# 4. Check Sanity webhook
# Verify webhook is configured and firing

# 5. Use force-dynamic for always fresh data
export const dynamic = 'force-dynamic'
```

### Form Issues

#### Form Validation Not Working

**Symptoms**:
- No error messages
- Form submits without validation

**Solutions**:
```typescript
// 1. Check Zod schema
const schema = z.object({
  email: z.string().email(), // Validate email format
})

// 2. Verify form resolver
const form = useForm({
  resolver: zodResolver(schema), // Don't forget resolver
})

// 3. Check error display
{errors.email && (
  <p className="text-destructive">{errors.email.message}</p>
)}

// 4. Test validation
console.log(form.formState.errors)
```

#### Form Submission Fails

**Symptoms**:
```
Network error
CORS error
404 error
```

**Solutions**:
```typescript
// 1. Check API route path
// File: app/api/contact/route.ts
// URL: /api/contact (no trailing slash)

// 2. Verify HTTP method
export async function POST(request: NextRequest) {
  // POST handler
}

// 3. Check request headers
fetch('/api/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})

// 4. Add error handling
try {
  const response = await fetch('/api/contact', { ... })
  if (!response.ok) {
    throw new Error('Failed to submit')
  }
} catch (error) {
  console.error('Submission error:', error)
}
```

### Animation Issues

#### Framer Motion Not Working

**Symptoms**:
- No animations
- Console errors
- Hydration mismatches

**Solutions**:
```typescript
// 1. Add 'use client' directive
'use client'

import { motion } from 'framer-motion'

// 2. Check initial/animate props
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
>

// 3. For server-rendered content, use conditional rendering
'use client'

import { useState, useEffect } from 'react'

export default function AnimatedComponent() {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  if (!mounted) return <div>Loading...</div>
  
  return <motion.div ...>
}
```

### Performance Issues

#### Slow Page Load

**Symptoms**:
- Long TTFB
- Slow LCP
- Poor Lighthouse score

**Solutions**:
```bash
# 1. Check bundle size
npm run build
# Look for red warnings

# 2. Add dynamic imports
const Heavy = dynamic(() => import('./Heavy'), {
  loading: () => <Skeleton />
})

# 3. Optimize images
# Use next/image
# Add priority to LCP image

# 4. Check for blocking scripts
# Move scripts to bottom or defer

# 5. Enable ISR
export const revalidate = 3600
```

#### High Memory Usage

**Symptoms**:
- Browser tab crashes
- Slow scrolling
- High CPU usage

**Solutions**:
```typescript
// 1. Check for memory leaks
// Use Chrome DevTools Memory profiler

// 2. Clean up effects
useEffect(() => {
  const subscription = subscribe()
  
  return () => {
    subscription.unsubscribe() // Cleanup
  }
}, [])

// 3. Use pagination for long lists
// Don't render 1000+ items at once

// 4. Optimize re-renders
// Use React.memo, useMemo, useCallback
```

### Environment Variable Issues

#### Environment Variables Undefined

**Symptoms**:
```
undefined
Cannot read property 'X' of undefined
```

**Solutions**:
```bash
# 1. Check file name
# Must be .env.local (not .env)

# 2. Restart dev server after changes
# Ctrl+C then npm run dev

# 3. For client-side variables, use NEXT_PUBLIC_ prefix
NEXT_PUBLIC_API_KEY=abc123

# 4. Verify in code
console.log(process.env.NEXT_PUBLIC_API_KEY)

# 5. Check Vercel deployment
# Set variables in Vercel dashboard
# Redeploy after setting
```

## Debugging Tools

### Browser DevTools

```bash
# Console
console.log('Debug:', data)

# Network tab
# Check failed requests
# Verify request/response data

# Performance tab
# Profile component renders
# Check for long tasks

# React DevTools
# Install browser extension
# Inspect component props/state
```

### VS Code Debugging

```json
// .vscode/launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Next.js: debug server-side",
      "type": "node-terminal",
      "request": "launch",
      "command": "npm run dev"
    },
    {
      "name": "Next.js: debug client-side",
      "type": "chrome",
      "request": "launch",
      "url": "http://localhost:3000"
    }
  ]
}
```

### Logging Best Practices

```typescript
// Development logging
if (process.env.NODE_ENV === 'development') {
  console.log('Debug info:', data)
}

// Error logging (always)
console.error('Error:', error)

// Warning logging
console.warn('Warning:', issue)
```

## Getting Help

### Information to Provide

When seeking help, include:

1. **Error message**: Full error text
2. **Steps to reproduce**: What you did
3. **Expected behavior**: What should happen
4. **Actual behavior**: What actually happened
5. **Environment**: OS, Node version, npm version
6. **Browser**: Browser and version (if frontend issue)
7. **Code**: Relevant code snippets
8. **Console output**: Any error messages

### Resources

- **Next.js Documentation**: https://nextjs.org/docs
- **React Documentation**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com/docs
- **TypeScript**: https://www.typescriptlang.org/docs
- **Stack Overflow**: Tag with `next.js`, `react`, `typescript`
- **GitHub Issues**: Check for similar issues

### Support Channels

- **Team Slack**: #dev-support
- **Email**: dev-team@intellispec.com
- **Emergency**: On-call engineer

---

**Last Updated**: October 2025
**Version**: 1.0.0

