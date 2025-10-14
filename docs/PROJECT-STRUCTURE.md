# Project Structure

## Directory Organization

```
intellispec-landing/
├── app/                          # Next.js 14 App Router
│   ├── (routes)/                 # Route groups
│   │   ├── about/               # About pages
│   │   ├── blog/                # Blog listing & posts
│   │   ├── case-studies/        # Case studies
│   │   ├── careers/             # Careers page
│   │   ├── contact/             # Contact form
│   │   ├── demo/                # Demo request
│   │   ├── industries/          # Industry pages
│   │   ├── modules/             # Product modules
│   │   ├── partners/            # Partners page
│   │   ├── press/               # Press releases
│   │   ├── pricing/             # Pricing page
│   │   ├── privacy/             # Privacy policy
│   │   ├── resources/           # Resources hub
│   │   ├── solutions/           # Solutions overview
│   │   ├── support/             # Support page
│   │   ├── terms/               # Terms of service
│   │   └── white-papers/        # White papers
│   ├── api/                     # API routes
│   │   └── revalidate/         # ISR revalidation
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   ├── loading.tsx              # Loading UI
│   ├── not-found.tsx            # 404 page
│   ├── page.tsx                 # Homepage
│   ├── robots.ts                # Robots.txt generator
│   └── sitemap.ts               # Sitemap generator
├── components/                   # React components
│   ├── containers/              # Container components (future)
│   ├── debug/                   # Debug components
│   ├── layout/                  # Layout components
│   │   ├── Footer.tsx           # Site footer
│   │   ├── footerLinks.ts       # Footer navigation data
│   │   ├── Header.tsx           # Site header
│   │   └── navigation.ts        # Main navigation data
│   ├── sections/                # Page sections
│   │   ├── ContactForm.tsx      # Contact form section
│   │   ├── HeroSection.tsx      # Hero banner
│   │   ├── IndustriesServed.tsx # Industries grid
│   │   ├── IndustryTemplate.tsx # Industry page template
│   │   ├── LLMReadyBlock.tsx    # LLM-optimized content
│   │   ├── ModulesOverview.tsx  # Modules grid
│   │   ├── PartnersPage.tsx     # Partners section
│   │   ├── QuoteSlider.tsx      # Testimonials slider
│   │   ├── ResultsMetrics.tsx   # Metrics counter
│   │   ├── SolutionsOverview.tsx # Solutions grid
│   │   ├── StorytellingBlock.tsx # Narrative section
│   │   ├── SupportForm.tsx      # Support form
│   │   ├── TLDRBlock.tsx        # TL;DR summary
│   │   └── TrustedBySection.tsx # Logo grid
│   ├── seo/                     # SEO components (future)
│   ├── ui/                      # UI primitives (ShadCN)
│   │   ├── badge.tsx            # Badge component
│   │   ├── button.tsx           # Button component
│   │   ├── card.tsx             # Card component
│   │   ├── CTASection.tsx       # CTA component
│   │   ├── input.tsx            # Input component
│   │   ├── Logo.tsx             # Logo component
│   │   ├── ModuleLogo.tsx       # Module logo
│   │   ├── select.tsx           # Select component
│   │   ├── textarea.tsx         # Textarea component
│   │   └── ThemeToggle.tsx      # Theme switcher
│   ├── widgets/                 # Widget components (future)
│   ├── PortableText.tsx         # Sanity content renderer
│   ├── ShareButtons.tsx         # Social sharing
│   └── ThemeWrapper.tsx         # Theme provider
├── contexts/                     # React contexts
│   └── ThemeContext.tsx         # Theme state management
├── docs/                        # Documentation
│   ├── ARCHITECTURE.md          # Architecture overview
│   ├── PROJECT-STRUCTURE.md     # This file
│   ├── SEO-IMPLEMENTATION.md    # SEO guidelines
│   └── ...                      # Additional docs
├── hooks/                       # Custom React hooks (future)
├── lib/                         # Utility libraries
│   ├── debug-sanity.ts          # Sanity debugging
│   ├── sanity.ts                # Sanity configuration
│   ├── seo.ts                   # SEO helpers
│   ├── test-sanity.ts           # Sanity testing
│   ├── theme.ts                 # Theme utilities
│   └── utils.ts                 # General utilities
├── public/                      # Static assets
│   ├── images/                  # Images
│   │   ├── backup/             # Image backups
│   │   ├── hero/               # Hero images
│   │   ├── industries/         # Industry images
│   │   ├── integrations/       # Integration logos
│   │   ├── logos/              # Brand logos
│   │   └── modules/            # Module images
│   ├── videos/                  # Video assets
│   └── site.webmanifest         # PWA manifest
├── sanity/                      # Sanity CMS configuration
│   ├── env.ts                   # Sanity environment config
│   ├── lib/                     # Sanity utilities
│   │   ├── client.ts            # Sanity client
│   │   ├── image.ts             # Image builder
│   │   └── live.ts              # Live preview
│   └── schemaTypes/             # Content schemas
│       ├── author.ts            # Author schema
│       ├── blogPost.ts          # Blog post schema
│       ├── caseStudy.ts         # Case study schema
│       ├── index.ts             # Schema index
│       ├── pressItem.ts         # Press item schema
│       └── whitePaper.ts        # White paper schema
├── scripts/                     # Build/utility scripts
│   ├── optimize-images.js       # Image optimization
│   ├── optimize-media.js        # Media optimization
│   ├── update-module-images.js  # Module image updates
│   └── README.md                # Scripts documentation
├── types/                       # TypeScript types (future)
├── utils/                       # Utility functions (future)
├── .eslintrc.json              # ESLint configuration
├── .gitignore                  # Git ignore rules
├── components.json             # ShadCN configuration
├── DEPLOYMENT.md               # Deployment guide
├── env.example                 # Environment variables template
├── IMAGE-OPTIMIZATION-GUIDE.md # Image optimization guide
├── next.config.js              # Next.js configuration
├── package.json                # Dependencies
├── postcss.config.js           # PostCSS configuration
├── README.md                   # Project readme
├── SANITY_IMAGE_GUIDE.md       # Sanity image guide
├── SANITY_SETUP.md             # Sanity setup guide
├── sanity.cli.ts               # Sanity CLI configuration
├── sanity.config.ts            # Sanity studio configuration
├── tailwind.config.js          # Tailwind configuration
└── tsconfig.json               # TypeScript configuration
```

## Key Directories Explained

### `/app` Directory
The heart of the application using Next.js 14 App Router.

#### **Route Organization**
- Each folder represents a URL segment
- `page.tsx` files create accessible routes
- `layout.tsx` files define shared UI
- `loading.tsx` files define loading states
- `not-found.tsx` files define 404 states

#### **Special Files**
- `globals.css` - Global styles and CSS variables
- `robots.ts` - Dynamic robots.txt generation
- `sitemap.ts` - Dynamic sitemap.xml generation

### `/components` Directory
Reusable React components organized by purpose.

#### **Organization Strategy**
```
components/
├── layout/     # Structural components (Header, Footer)
├── sections/   # Page sections (Hero, Contact Form)
├── ui/         # Primitive components (Button, Input)
├── containers/ # Container/wrapper components
└── widgets/    # Complex reusable widgets
```

#### **Component Types**

**1. Layout Components** (`/layout`)
- Appear on multiple pages
- Define page structure
- Example: Header with navigation, Footer with links

**2. Section Components** (`/sections`)
- Full-width page sections
- Composition of UI components
- Example: HeroSection, ContactForm

**3. UI Primitives** (`/ui`)
- Base-level components from ShadCN
- Highly reusable
- Example: Button, Input, Card

**4. Widgets** (`/widgets`)
- Complex interactive components
- Self-contained functionality
- Example: Calculator, Charts (future)

### `/lib` Directory
Utility functions and configurations.

```typescript
lib/
├── sanity.ts       # Sanity client and queries
├── seo.ts          # SEO metadata helpers
├── theme.ts        # Theme utilities
└── utils.ts        # General utilities (cn, etc.)
```

### `/public` Directory
Static assets served directly.

#### **Image Organization**
```
public/images/
├── hero/           # Homepage hero images
├── industries/     # Industry-specific images
├── integrations/   # Integration partner logos
├── logos/          # Company/brand logos
└── modules/        # Product module images
```

#### **Best Practices**
- Use descriptive filenames (kebab-case)
- Organize by purpose/category
- Optimize before committing
- Include multiple sizes for responsive images

### `/sanity` Directory
Sanity CMS configuration and schemas.

#### **Structure**
```
sanity/
├── env.ts                # Environment configuration
├── lib/                  # Client utilities
│   ├── client.ts         # Sanity client setup
│   ├── image.ts          # Image URL builder
│   └── live.ts           # Live preview setup
└── schemaTypes/          # Content models
    ├── author.ts         # Author schema
    ├── blogPost.ts       # Blog post schema
    ├── caseStudy.ts      # Case study schema
    ├── pressItem.ts      # Press release schema
    └── whitePaper.ts     # White paper schema
```

### `/docs` Directory
Project documentation.

```
docs/
├── ARCHITECTURE.md           # System architecture
├── PROJECT-STRUCTURE.md      # This file
├── COMPONENT-SYSTEM.md       # Component guide
├── STYLING-SYSTEM.md         # Styling guide
├── SEO-IMPLEMENTATION.md     # SEO guide
├── DEPLOYMENT.md             # Deployment guide
└── ...                       # Additional docs
```

## File Naming Conventions

### Components
- **PascalCase**: `HeroSection.tsx`, `ContactForm.tsx`
- **Descriptive names**: Clearly indicate purpose
- **Location-based**: Match folder organization

### Utilities
- **camelCase**: `sanity.ts`, `seo.ts`, `utils.ts`
- **Function-based**: Name after primary export

### Configuration
- **kebab-case**: `next.config.js`, `tailwind.config.js`
- **Standard names**: Follow framework conventions

### Assets
- **kebab-case**: `hero-image.jpg`, `company-logo.png`
- **Descriptive**: Include context in filename

## Import Patterns

### Alias Configuration
```typescript
// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

### Usage Examples
```typescript
// Components
import { Button } from '@/components/ui/button'
import HeroSection from '@/components/sections/HeroSection'

// Utilities
import { cn } from '@/lib/utils'
import { createPageMetadata } from '@/lib/seo'

// Types
import type { NavItem } from '@/types'
```

## Code Organization Best Practices

### 1. **Colocation**
Keep related files together:
```
modules/
├── inspect/
│   ├── layout.tsx         # Metadata & layout
│   └── page.tsx           # Page content
```

### 2. **Separation of Concerns**
```
components/
├── ui/                     # Pure presentation
├── sections/               # Composition + logic
└── containers/             # Data fetching + state
```

### 3. **Single Responsibility**
Each file should have one clear purpose:
- **Component file**: One component export
- **Utility file**: Related utility functions
- **Config file**: One configuration object

### 4. **Barrel Exports**
Use index files for convenient imports:
```typescript
// components/ui/index.ts
export { Button } from './button'
export { Input } from './input'
export { Card } from './card'

// Usage
import { Button, Input, Card } from '@/components/ui'
```

## Adding New Features

### Adding a New Page
```
1. Create folder in /app
   app/new-feature/
   
2. Add page.tsx
   app/new-feature/page.tsx
   
3. Add layout.tsx (optional)
   app/new-feature/layout.tsx
   
4. Add to navigation
   components/layout/navigation.ts
   
5. Add to sitemap
   app/sitemap.ts
```

### Adding a New Component
```
1. Determine component type
   - UI primitive → /ui
   - Page section → /sections
   - Layout → /layout
   
2. Create component file
   components/[type]/ComponentName.tsx
   
3. Export from index (optional)
   components/[type]/index.ts
   
4. Document usage in component
   Add JSDoc comments
```

### Adding a New Utility
```
1. Create utility file
   lib/feature.ts
   
2. Export functions
   export function helperFunction() {}
   
3. Add types
   export type HelperType = {}
   
4. Document in file
   Add JSDoc comments
```

## Migration Path

### Current State → Future State

**Current**:
```
/hooks (empty)
/types (empty)
/utils (empty)
```

**Future** (as codebase grows):
```
/hooks              # Custom React hooks
  ├── useMediaQuery.ts
  ├── useIntersectionObserver.ts
  └── useDebounce.ts

/types              # Shared TypeScript types
  ├── content.ts    # CMS content types
  ├── api.ts        # API response types
  └── common.ts     # Common types

/utils              # Pure utility functions
  ├── date.ts       # Date formatting
  ├── string.ts     # String manipulation
  └── array.ts      # Array helpers
```

---

**Last Updated**: October 2025
**Version**: 1.0.0

