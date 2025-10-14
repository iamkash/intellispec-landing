# IntelliSpec Landing Page

A modern, responsive, high-performance landing page for IntelliSpec — a mobile-first, modular SaaS software application designed for industrial inspection, safety, turnaround execution, compliance, and operational reporting.

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
2. **Modules Overview**: Grid layout showcasing all 10 IntelliSpec modules
3. **Industries Served**: Industry-specific solutions and use cases
4. **Solutions Overview**: Comprehensive solution offerings
5. **Storytelling Block**: Problem → Solution → Results narrative
6. **Quote Slider**: Customer testimonials with auto-rotation
7. **Results Metrics**: Animated counters with key performance indicators
8. **Trusted By**: Company logos and trust indicators
9. **Contact Form**: Lead capture with validation
10. **Footer**: Comprehensive navigation and company information

## 🛠 Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + ShadCN UI + SCSS modules
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React, Heroicons, Phosphor Icons

### Backend & CMS
- **CMS**: Sanity.io (configured and ready)
- **Deployment**: Vercel (optimized)
- **Hosting**: Edge-ready, SEO-optimized

### Development Tools
- **Package Manager**: npm
- **Linting**: ESLint
- **Type Checking**: TypeScript
- **Build Tool**: Next.js built-in

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd intellispec-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Add your environment variables:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=your_sanity_api_token
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Design System

### Colors
- **Primary**: #00B2A9 (Teal)
- **Secondary**: #004173 (Deep Blue)
- **Highlight**: #F9A825 (Safety Yellow/Orange)
- **Background**: #F8F9FA
- **Section Alt**: #EDF2F6
- **Text**: #1A1A1A

### Typography
- **Headings**: Inter, 700 weight, tight tracking
- **Body**: Inter, 400 weight, relaxed line-height
- **Display**: IBM Plex Sans for technical content

### Components
- **Buttons**: Primary, Secondary, Outline variants
- **Cards**: Hover effects, shadows, rounded corners
- **Forms**: Validation, error states, loading states
- **Navigation**: Dropdown menus, mobile responsive

## 📱 Responsive Design

The landing page is built with a mobile-first approach:

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px
- **Large Desktop**: > 1280px

## 🚀 Performance Optimizations

- **Images**: Next.js Image component with WebP/AVIF formats
- **Fonts**: Google Fonts with display=swap
- **Animations**: Hardware-accelerated CSS transforms
- **Bundle**: Code splitting and dynamic imports
- **Caching**: Static generation where possible

## 📊 SEO Features

- **Meta Tags**: Dynamic Open Graph and Twitter cards
- **Structured Data**: JSON-LD schema markup
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Sitemap**: Auto-generated XML sitemap
- **Robots.txt**: Search engine optimization

## 🔧 Customization

### Adding New Sections
1. Create a new component in `components/sections/`
2. Import and add to `app/page.tsx`
3. Follow the existing pattern with motion animations

### Modifying Colors
1. Update `tailwind.config.js` color palette
2. Modify CSS variables in `app/globals.css`
3. Update component styles as needed

### Adding New Modules
1. Update the modules array in `components/sections/ModulesOverview.tsx`
2. Add corresponding route in navigation
3. Create module detail page if needed

## 📝 Content Management

The project is set up for Sanity CMS integration:

### Content Types
- **Modules**: Product information and features
- **Industries**: Industry-specific content
- **Testimonials**: Customer quotes and reviews
- **Blog Posts**: Thought leadership content
- **Team**: Company information and bios

### CMS Setup
1. Create a Sanity project
2. Configure content schemas
3. Update environment variables
4. Deploy content studio

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables
3. Deploy automatically on push

### Manual Deployment
```bash
npm run build
npm start
```

## 📈 Analytics & Tracking

Ready for integration with:
- Google Analytics 4
- Google Tag Manager
- Hotjar
- Mixpanel
- Custom event tracking

## 🔒 Security

- **CSP Headers**: Content Security Policy
- **HTTPS**: Secure by default
- **Form Validation**: Client and server-side validation
- **XSS Protection**: Sanitized inputs and outputs

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is proprietary software. All rights reserved.

## 🆘 Support

For support and questions:
- Email: info@intellispec.com
- Phone: +1 (555) 123-4567
- Documentation: [docs.intellispec.com](https://docs.intellispec.com)

---

**Built with ❤️ by the IntelliSpec Team** 