# intelliSPEC Landing Page

A modern, responsive, high-performance landing page for intelliSPEC — a mobile-first, modular SaaS software application designed for industrial inspection, safety, turnaround execution, compliance, and operational reporting.

> 📚 **[View Complete Technical Documentation →](./docs/README.md)**  
> Comprehensive guides covering architecture, development workflow, styling, performance, security, testing, and more.

## 🚀 Features

### Core Features

- **Modern Design**: Clean, professional design with Apple-inspired minimalist aesthetics
- **Responsive Layout**: Mobile-first design that works perfectly on all devices
- **High Performance**: Optimized for fast loading times (LCP < 2.5s)
- **SEO Optimized**: Semantic HTML, meta tags, and structured data
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation
- **Animations**: Smooth Framer Motion animations and micro-interactions

### Technical Features

- **Next.js 14**: Latest App Router with TypeScript
- **Tailwind CSS**: Utility-first styling with custom design system
- **ShadCN UI**: Pre-built, accessible components
- **Framer Motion**: Smooth animations and page transitions
- **React Hook Form**: Form handling with Zod validation
- **Sanity CMS**: Content management system integration (ready)
- **Performance**: Optimized images, fonts, and bundle size

### Landing Page Sections

1. **Hero Section**: Video background with compelling headline and CTAs
2. **Modules Overview**: Grid layout showcasing all 10 intelliSPEC modules
3. **Industries Served**: Industry-specific solutions and use cases
4. **Solutions Overview**: Comprehensive solution offerings
5. **Storytelling Block**: Problem → Solution → Results narrative
6. **Quote Slider**: Customer testimonials with auto-rotation
7. **Results Metrics**: Animated counters with key performance indicators
8. **Trusted By**: Company logos and trust indicators
9. **Contact Form**: Lead capture with validation
10. **Footer**: Comprehensive navigation and company information

## 🛠 Tech Stack

- **Framework**: Next.js 14.2.0 (App Router)
- **Language**: TypeScript 5.3.3
- **Styling**: Tailwind CSS 3.3.6 + ShadCN UI
- **CMS**: Sanity.io 3.99.0
- **Animations**: Framer Motion 10.18.0
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React, Heroicons, Phosphor Icons
- **Deployment**: Vercel

**[→ See detailed architecture documentation](./docs/ARCHITECTURE.md)**

## 🚀 Quick Start

```bash
# Clone and install
git clone https://github.com/iamkash/intellispec-landing.git
cd intellispec-landing
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your Sanity credentials

# Start development server
npm run dev
# Open http://localhost:3000
```

**[→ Complete setup guide](./docs/DEVELOPMENT-WORKFLOW.md)**

## 📚 Documentation

Comprehensive technical documentation is available covering all aspects of development:

- **[Architecture Overview](./docs/ARCHITECTURE.md)** - System design and technology stack
- **[Project Structure](./docs/PROJECT-STRUCTURE.md)** - File organization and conventions
- **[Component System](./docs/COMPONENT-SYSTEM.md)** - Component patterns and best practices
- **[Styling System](./docs/STYLING-SYSTEM.md)** - Design tokens, Tailwind, and themes
- **[Development Workflow](./docs/DEVELOPMENT-WORKFLOW.md)** - Setup, commands, and Git workflow
- **[Data Fetching & API](./docs/DATA-FETCHING.md)** - Sanity CMS and API patterns
- **[Performance Optimization](./docs/PERFORMANCE-OPTIMIZATION.md)** - Core Web Vitals and optimization
- **[Security Best Practices](./docs/SECURITY.md)** - Security guidelines and implementation
- **[Content Management](./docs/CONTENT-MANAGEMENT.md)** - Sanity CMS workflows and guidelines
- **[Testing Strategy](./docs/TESTING-STRATEGY.md)** - Testing approach and examples
- **[Troubleshooting Guide](./docs/TROUBLESHOOTING.md)** - Common issues and solutions
- **[Quick Reference](./docs/QUICK-REFERENCE.md)** - Commands and code templates

## 🎨 Key Features

### Design & Performance

- ✅ Mobile-first responsive design (< 640px to 1920px+)
- ✅ Core Web Vitals optimized (LCP < 2.5s, CLS < 0.1)
- ✅ Lighthouse score 90+ (Performance, A11y, Best Practices, SEO)
- ✅ Light theme with glass-morphism effects
- ✅ Smooth Framer Motion animations

### SEO & Accessibility

- ✅ Dynamic metadata with Open Graph and Twitter cards
- ✅ JSON-LD structured data for rich results
- ✅ WCAG 2.1 Level AA compliant
- ✅ Auto-generated sitemap and robots.txt
- ✅ Semantic HTML with proper heading hierarchy

### Developer Experience

- ✅ TypeScript for type safety
- ✅ Tailwind CSS + ShadCN UI components
- ✅ Hot reload and fast refresh
- ✅ ESLint and type checking
- ✅ Sanity CMS integration ready

## 🤝 Contributing

See **[Development Workflow](./docs/DEVELOPMENT-WORKFLOW.md)** for:

- Git workflow and branching strategy
- Code quality standards
- Commit message conventions
- Pull request process

## 📊 Project Stats

- **Bundle Size**: < 200KB initial load
- **Lighthouse Score**: 90+ across all metrics
- **Build Time**: < 2 minutes
- **Deployment**: Automatic via Vercel
- **Uptime**: 99.9% SLA

## 📄 License

This project is proprietary software. All rights reserved.

## 🆘 Support & Resources

- 📧 **Email**: info@intellispec.com
- 📚 **Documentation**: [Complete Technical Docs](./docs/README.md)
- 🐛 **Bug Reports**: GitHub Issues
- 💬 **Discussions**: GitHub Discussions

### External Resources

- [Next.js 14 Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Sanity.io Documentation](https://www.sanity.io/docs)
- [Vercel Platform](https://vercel.com/docs)

---

**Last Updated**: October 2025  
**Version**: 1.0.0  
**Built with ❤️ by the intelliSPEC Team**
