# Development Workflow

## Getting Started

### Prerequisites

- **Node.js** 18+ (LTS recommended)
- **npm** 9+ or **yarn** 1.22+
- **Git** 2.0+
- **VS Code** (recommended) or preferred IDE
- **Sanity Studio** account (optional for content management)

### Initial Setup

```bash
# Clone the repository
git clone https://github.com/intellispec/intellispec-landing.git
cd intellispec-landing

# Install dependencies
npm install

# Copy environment variables
cp env.example .env.local

# Configure environment variables
# Edit .env.local with your values:
# NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
# NEXT_PUBLIC_SANITY_DATASET=production
# SANITY_API_TOKEN=your_token

# Run development server
npm run dev
```

Visit `http://localhost:3000` to see your application.

## Development Commands

### Core Commands

```bash
# Start development server (with hot reload)
npm run dev

# Build for production
npm run build

# Start production server (must build first)
npm start

# Run linter
npm run lint

# Type checking
npm run type-check

# Image optimization
npm run optimize-images

# Media optimization
npm run optimize-media
```

### Package Scripts Explained

```json
{
  "scripts": {
    "dev": "next dev",                      // Development mode with HMR
    "build": "next build",                   // Production build
    "start": "next start",                   // Production server
    "lint": "next lint",                     // ESLint validation
    "type-check": "tsc --noEmit",           // TypeScript validation
    "optimize-images": "node scripts/optimize-images.js",
    "optimize-media": "node scripts/optimize-media.js"
  }
}
```

## Project Workflow

### 1. Feature Development

```bash
# Create feature branch
git checkout -b feature/new-feature

# Make changes
# ... edit files ...

# Test changes locally
npm run dev

# Check for type errors
npm run type-check

# Lint code
npm run lint

# Commit changes
git add .
git commit -m "feat: add new feature"

# Push to remote
git push origin feature/new-feature

# Create pull request on GitHub
```

### 2. Component Development

```typescript
// 1. Create component file
// components/sections/NewSection.tsx

'use client' // If client interactivity needed

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

interface NewSectionProps {
  title: string
  description: string
}

export default function NewSection({ title, description }: NewSectionProps) {
  return (
    <section className="py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          <p className="text-xl text-muted-foreground">{description}</p>
        </motion.div>
      </div>
    </section>
  )
}

// 2. Add to page
// app/page.tsx
import NewSection from '@/components/sections/NewSection'

export default function HomePage() {
  return (
    <>
      <NewSection 
        title="New Feature"
        description="Description of the feature"
      />
    </>
  )
}
```

### 3. Page Development

```typescript
// 1. Create page directory and files
// app/new-page/layout.tsx

import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/seo'

export const generateMetadata = async (): Promise<Metadata> =>
  createPageMetadata({
    title: 'New Page Title',
    description: 'Page description for SEO',
    canonicalPath: '/new-page'
  })

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

// app/new-page/page.tsx
export default function NewPage() {
  return (
    <main>
      <h1>New Page</h1>
      {/* Page content */}
    </main>
  )
}

// 2. Add to navigation
// components/layout/navigation.ts
export const navigation: NavItem[] = [
  // ... existing items
  {
    label: 'New Page',
    href: '/new-page',
    description: 'Description for dropdown',
    icon: IconComponent
  }
]

// 3. Add to sitemap
// app/sitemap.ts
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // ... existing routes
    {
      url: 'https://intellispec.com/new-page',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]
}
```

### 4. API Route Development

```typescript
// app/api/new-endpoint/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    // Process request
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
    
    // Validate and process
    
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { error: 'Bad request' },
      { status: 400 }
    )
  }
}
```

## Code Quality

### ESLint Configuration

```json
// .eslintrc.json
{
  "extends": [
    "next/core-web-vitals",
    "next/typescript"
  ],
  "rules": {
    "no-console": ["warn", { "allow": ["warn", "error"] }],
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "warn"
  }
}
```

### TypeScript Configuration

```json
// tsconfig.json
{
  "compilerOptions": {
    "strict": false,          // Set to true for stricter checking
    "noEmit": true,
    "esModuleInterop": true,
    "moduleResolution": "node",
    "jsx": "preserve",
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

### Pre-commit Checklist

- [ ] Code compiles without TypeScript errors
- [ ] ESLint passes without errors
- [ ] All components are properly typed
- [ ] New images are optimized
- [ ] Responsive design tested (mobile, tablet, desktop)
- [ ] Accessibility checked (keyboard nav, screen readers)
- [ ] SEO metadata added for new pages
- [ ] Performance checked (Lighthouse)

## Environment Management

### Environment Variables

```bash
# .env.local (never commit this file)

# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_secret_token
NEXT_PUBLIC_SANITY_API_VERSION=2025-07-21

# Revalidation
REVALIDATION_SECRET=your_secret_for_webhooks

# Analytics (if configured)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Environment File Structure

```
.env.local          # Local development (gitignored)
.env.example        # Template (committed to git)
.env.production     # Production (Vercel)
.env.preview        # Preview deployments (Vercel)
```

## Git Workflow

### Branch Strategy

```
main
├── develop                  # Development branch
│   ├── feature/new-feature  # Feature branches
│   ├── feature/another      # Another feature
│   └── bugfix/fix-issue     # Bug fixes
└── hotfix/critical-fix      # Production hotfixes
```

### Commit Message Convention

```bash
# Format
<type>(<scope>): <subject>

# Types
feat:     # New feature
fix:      # Bug fix
docs:     # Documentation
style:    # Formatting, no code change
refactor: # Code restructure, no feature change
test:     # Adding tests
chore:    # Maintenance tasks

# Examples
feat(pricing): add ROI calculator
fix(header): correct mobile navigation bug
docs(api): update API documentation
style(button): improve button hover states
refactor(components): extract common logic to hook
```

### Pull Request Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tested locally
- [ ] Tested on mobile
- [ ] Tested on different browsers
- [ ] Performance checked

## Screenshots
[Add screenshots if applicable]

## Related Issues
Fixes #123
```

## Debugging

### Next.js Debugging

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

### Common Debug Tasks

```typescript
// Enable verbose logging
console.log('Debug:', data)

// React DevTools
// Install browser extension

// Next.js Debug Mode
// Set in next.config.js
module.exports = {
  reactStrictMode: true,
  // ... other config
}
```

### VS Code Extensions

```json
// Recommended extensions (.vscode/extensions.json)
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "bradlc.vscode-tailwindcss",
    "ms-vscode.vscode-typescript-next",
    "csstools.postcss"
  ]
}
```

## Performance Monitoring

### Development Performance

```bash
# Analyze bundle size
npm run build
# Check .next/analyze for bundle visualization

# Check build output
npm run build
# Look for red warnings in output
```

### Lighthouse Testing

```bash
# Run Lighthouse in Chrome DevTools
# 1. Open DevTools (F12)
# 2. Go to Lighthouse tab
# 3. Generate report

# Target scores:
# Performance: 90+
# Accessibility: 95+
# Best Practices: 95+
# SEO: 100
```

## Content Management

### Sanity Studio

```bash
# Start Sanity Studio locally
cd studio
sanity start

# Deploy Sanity Studio
sanity deploy

# Import content
sanity dataset import data.ndjson production

# Export content
sanity dataset export production
```

### Content Workflow

```
1. Create/Edit content in Sanity Studio
2. Publish content
3. Webhook triggers revalidation
4. Next.js updates cached pages
5. Changes appear on live site
```

## Testing Workflow

### Manual Testing Checklist

**Responsive Design**:
- [ ] Mobile (< 640px)
- [ ] Tablet (640px - 1024px)
- [ ] Desktop (> 1024px)
- [ ] Large desktop (> 1280px)

**Browser Compatibility**:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

**Functionality**:
- [ ] Navigation works
- [ ] Forms submit correctly
- [ ] Links navigate properly
- [ ] Images load and display
- [ ] Animations play smoothly

**Accessibility**:
- [ ] Keyboard navigation works
- [ ] Screen reader friendly
- [ ] Color contrast sufficient
- [ ] Focus indicators visible

## Deployment Checklist

### Pre-Deployment

- [ ] All tests passing
- [ ] TypeScript compiles without errors
- [ ] ESLint passes
- [ ] Build succeeds locally
- [ ] Environment variables configured
- [ ] Performance audited
- [ ] SEO metadata complete
- [ ] Images optimized
- [ ] Analytics configured
- [ ] Error tracking setup

### Post-Deployment

- [ ] Visit live site
- [ ] Check all major pages
- [ ] Test forms
- [ ] Verify analytics tracking
- [ ] Check lighthouse scores
- [ ] Monitor error logs
- [ ] Verify SEO metadata in production

## Troubleshooting

### Common Issues

**Build Failures**:
```bash
# Clear Next.js cache
rm -rf .next

# Clear node modules
rm -rf node_modules
npm install

# Check for TypeScript errors
npm run type-check
```

**Styling Issues**:
```bash
# Rebuild Tailwind
npm run dev  # Restart dev server

# Check for CSS conflicts
# Use browser DevTools to inspect
```

**Environment Variables**:
```bash
# Verify .env.local exists
# Check variable names (must start with NEXT_PUBLIC_ for client-side)
# Restart dev server after changes
```

---

**Last Updated**: October 2025
**Version**: 1.0.0

