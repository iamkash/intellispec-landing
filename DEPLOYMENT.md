# intelliSPEC Landing Page - Deployment Guide

## Overview
This guide covers the complete deployment process for the intelliSPEC landing page to Vercel, including troubleshooting common build issues.

## Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Git repository set up
- Vercel account (free tier available)

## Step 1: Project Setup Verification

### Check Dependencies
```bash
# Verify all dependencies are installed
npm install

# Check for any missing dependencies
npm audit
```

### Verify Build Configuration
Ensure your `next.config.js` is properly configured:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js configuration
}

module.exports = nextConfig
```

## Step 2: Local Build Testing

### Test Build Locally
```bash
# Run the build command to catch any issues before deployment
npm run build
```

### Common Build Issues & Solutions

#### Issue 1: TypeScript Errors
**Error**: `Type '{ role: string; challenges: string[]; ... }' is not assignable to type 'PersonaSolution[]'`

**Solution**: Update data structures to match TypeScript interfaces
```typescript
// Before (incorrect)
personas: [
  {
    role: "Plant Manager",
    challenges: [...],
    solutions: [...],
    benefits: [...]
  }
]

// After (correct)
personas: [
  {
    role: "Plant Manager",
    focus: "Operational Excellence",
    icon: Building2,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    story: {
      challenge: "...",
      solution: "...",
      outcome: "..."
    },
    metrics: {
      "Efficiency Gain": "85%",
      "Compliance Rate": "98%"
    },
    testimonial: {
      quote: "...",
      author: "...",
      title: "...",
      company: "..."
    },
    features: [...]
  }
]
```

#### Issue 2: Missing Imports
**Error**: `Cannot find name 'Wrench'`

**Solution**: Add missing imports to the file
```typescript
import { 
  // ... existing imports
  Wrench,
  Building2,
  Shield,
  TrendingUp
} from 'lucide-react'
```

#### Issue 3: Empty Page Files
**Error**: `File 'page.tsx' is not a module`

**Solution**: Ensure all page files have proper content
```typescript
// app/industries/page.tsx
import React from 'react';
import IndustriesServed from '@/components/sections/IndustriesServed';

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Industries We Serve
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover how our modular platform transforms operations across diverse industrial sectors
          </p>
        </div>
        <IndustriesServed />
      </div>
    </main>
  );
}
```

## Step 3: Vercel CLI Installation & Setup

### Install Vercel CLI
```bash
# Install Vercel CLI globally
npm install -g vercel
```

### Login to Vercel
```bash
# Login with your company email
vercel login

# Follow the prompts:
# 1. Choose "Continue with Email"
# 2. Enter your email: kmohammed@pksti.com
# 3. Check your email for verification link
# 4. Click the verification link
```

## Step 4: Initial Deployment

### Deploy to Vercel
```bash
# Deploy to Vercel (creates preview deployment)
vercel

# Follow the prompts:
# - Set up and deploy? → yes
# - Which scope? → Select your scope
# - Link to existing project? → no
# - Project name? → intellispec-landing
# - Directory? → ./
# - Modify settings? → no
# - Use default protection? → yes
```

### Production Deployment
```bash
# Deploy to production
vercel --prod
```

## Step 5: Deployment Verification

### Check Build Logs
If deployment fails, check the logs:
```bash
# View deployment logs
vercel inspect [deployment-url] --logs

# Example:
vercel inspect intellispec-landing-7ezyjfph8-kashifs-projects-2815cfc7.vercel.app --logs
```

### Verify Deployment
- Visit the provided URL to ensure the site loads correctly
- Test all major pages and functionality
- Check responsive design on mobile devices
- Verify theme switching works

## Step 6: Post-Deployment Configuration

### Environment Variables (if needed)
```bash
# Add environment variables
vercel env add VARIABLE_NAME

# Example:
vercel env add NEXT_PUBLIC_API_URL
```

### Custom Domain Setup
1. Go to Vercel Dashboard: https://vercel.com/dashboard
2. Select your project
3. Go to Settings → Domains
4. Add your custom domain
5. Configure DNS records as instructed

### Analytics Setup
```bash
# Add Vercel Analytics
npm install @vercel/analytics

# Or add Google Analytics
# Add GA tracking code to _app.tsx or layout.tsx
```

## Step 7: Continuous Deployment

### Git Integration
For automatic deployments on code changes:
1. Connect your Git repository in Vercel dashboard
2. Configure branch deployment rules
3. Set up preview deployments for pull requests

### Deployment Commands Reference
```bash
# Development deployment
vercel

# Production deployment
vercel --prod

# Deploy specific directory
vercel ./dist

# Deploy with specific environment
vercel --env NODE_ENV=production

# View deployment status
vercel ls

# Remove deployment
vercel remove [deployment-id]
```

## Troubleshooting

### Common Issues

#### Build Fails with TypeScript Errors
1. Run `npm run build` locally first
2. Fix all TypeScript errors
3. Ensure all interfaces are properly implemented
4. Check for missing imports

#### Missing Dependencies
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### Environment Variables
Ensure all required environment variables are set in Vercel dashboard:
1. Go to Project Settings → Environment Variables
2. Add any required variables
3. Redeploy the project

#### Performance Issues
- Optimize images using Next.js Image component
- Implement proper caching strategies
- Use dynamic imports for large components
- Monitor Core Web Vitals in Vercel Analytics

## Project Structure
```
intellispec-landing/
├── app/                    # Next.js 13+ app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── industries/        # Industry pages
│   ├── modules/           # Module pages
│   └── roi-calculator/    # ROI calculator
├── components/            # React components
│   ├── sections/          # Page sections
│   ├── ui/               # UI components
│   └── widgets/          # Widget components
├── contexts/             # React contexts
├── hooks/                # Custom hooks
├── lib/                  # Utility libraries
├── types/                # TypeScript types
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── package.json          # Dependencies
```

## Performance Optimization

### Build Optimization
- Use Next.js Image component for optimized images
- Implement proper code splitting
- Use React.memo for expensive components
- Optimize bundle size with dynamic imports

### Runtime Optimization
- Implement proper caching strategies
- Use CDN for static assets
- Optimize API calls with SWR or React Query
- Monitor Core Web Vitals

## Security Considerations

### Environment Variables
- Never commit sensitive data to Git
- Use Vercel environment variables for secrets
- Implement proper API key management

### Content Security
- Sanitize user inputs
- Implement proper CORS policies
- Use HTTPS for all external requests
- Regular security audits

## Monitoring & Maintenance

### Vercel Analytics
- Monitor page views and user behavior
- Track Core Web Vitals
- Set up alerts for performance issues

### Error Monitoring
- Implement error boundary components
- Set up error tracking (Sentry, LogRocket)
- Monitor build and runtime errors

### Regular Updates
- Keep dependencies updated
- Monitor for security vulnerabilities
- Regular performance audits
- Content updates and SEO optimization

## Support & Resources

### Vercel Documentation
- [Vercel CLI Documentation](https://vercel.com/docs/cli)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- [Vercel Dashboard](https://vercel.com/dashboard)

### Troubleshooting Resources
- [Vercel Community](https://github.com/vercel/vercel/discussions)
- [Next.js GitHub Issues](https://github.com/vercel/next.js/issues)
- [Vercel Status Page](https://vercel-status.com)

---

**Last Updated**: July 20, 2025  
**Deployment URL**: https://intellispec-landing-fmd9et4ym-kashifs-projects-2815cfc7.vercel.app  
**Vercel Project**: intellispec-landing 