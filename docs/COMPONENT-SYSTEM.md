# Component System

## Component Architecture

The intelliSPEC Landing component system follows atomic design principles with React Server Components (RSC) and Client Components.

## Component Hierarchy

```
┌─────────────────────────────────────┐
│           Pages (Routes)             │
│  • app/page.tsx                      │
│  • app/modules/inspect/page.tsx      │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│      Sections (Organisms)            │
│  • HeroSection                       │
│  • ModulesOverview                   │
│  • ContactForm                       │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│    UI Components (Molecules/Atoms)   │
│  • Button, Card, Input               │
│  • Badge, Select, Textarea           │
└─────────────────────────────────────┘
```

## Server vs Client Components

### Server Components (Default)
**When to use**:
- Static content rendering
- Data fetching
- SEO-critical content
- No interactivity needed

```typescript
// app/modules/inspect/page.tsx
// This is a Server Component by default (no 'use client')

export default async function InspectPage() {
  // Can fetch data directly
  const data = await fetchModuleData()
  
  return (
    <div>
      <h1>{data.title}</h1>
      <ModuleContent data={data} />
    </div>
  )
}
```

**Benefits**:
- Zero JavaScript sent to client
- Direct database/API access
- Better SEO
- Faster initial page load

### Client Components
**When to use**:
- User interactions (onClick, onChange)
- React hooks (useState, useEffect)
- Browser APIs (localStorage, geolocation)
- Animation libraries (Framer Motion)

```typescript
// components/sections/PricingCalculator.tsx
'use client'

import { useState } from 'react'

export default function PricingCalculator() {
  const [modules, setModules] = useState([])
  
  return (
    <div>
      <button onClick={() => setModules([...modules, 'new'])}>
        Add Module
      </button>
    </div>
  )
}
```

**Benefits**:
- Full interactivity
- Access to React hooks
- Real-time updates
- Rich user experience

## Component Patterns

### 1. Presentational Components

**Purpose**: Display UI without logic

```typescript
// components/ui/card.tsx
interface CardProps {
  title: string
  description: string
  children?: React.ReactNode
}

export function Card({ title, description, children }: CardProps) {
  return (
    <div className="rounded-lg border bg-card p-6">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
      {children}
    </div>
  )
}
```

### 2. Container Components

**Purpose**: Handle data fetching and state

```typescript
// components/containers/ModulesContainer.tsx
export default async function ModulesContainer() {
  const modules = await fetchModules()
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {modules.map((module) => (
        <ModuleCard key={module.id} module={module} />
      ))}
    </div>
  )
}
```

### 3. Composition Pattern

**Purpose**: Build complex UIs from simple parts

```typescript
// components/sections/HeroSection.tsx
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function HeroSection() {
  return (
    <section className="hero-section">
      <Card title="Welcome" description="Get started">
        <div className="flex gap-4">
          <Button variant="default">Primary CTA</Button>
          <Button variant="outline">Secondary CTA</Button>
        </div>
      </Card>
    </section>
  )
}
```

### 4. Render Props Pattern

**Purpose**: Share logic between components

```typescript
interface RenderProps {
  data: any
  isLoading: boolean
}

interface DataFetcherProps {
  children: (props: RenderProps) => React.ReactNode
}

export function DataFetcher({ children }: DataFetcherProps) {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  
  // Fetch logic...
  
  return <>{children({ data, isLoading })}</>
}

// Usage
<DataFetcher>
  {({ data, isLoading }) => (
    isLoading ? <Loading /> : <Content data={data} />
  )}
</DataFetcher>
```

## Component Categories

### UI Primitives (`/components/ui`)

**Badge Component**
```typescript
// components/ui/badge.tsx
import { cva, type VariantProps } from 'class-variance-authority'

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground',
        secondary: 'bg-secondary text-secondary-foreground',
        destructive: 'bg-destructive text-destructive-foreground',
        outline: 'text-foreground border',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

interface BadgeProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}
```

**Button Component**
```typescript
// components/ui/button.tsx
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

// Usage with asChild for Link components
<Button asChild>
  <Link href="/demo">Book Demo</Link>
</Button>
```

### Section Components (`/components/sections`)

**Hero Section**
```typescript
// components/sections/HeroSection.tsx
'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background video/image */}
      <div className="absolute inset-0 -z-10">
        <video autoPlay muted loop className="object-cover w-full h-full">
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      </div>
      
      {/* Content */}
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Industrial Inspection<br />Reimagined
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Mobile-first, AI-powered platform for safety, compliance, 
            and operational excellence
          </p>
          <div className="flex gap-4">
            <Button size="lg">Book a Demo</Button>
            <Button size="lg" variant="outline">Learn More</Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
```

**Contact Form**
```typescript
// components/sections/ContactForm.tsx
'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type FormData = z.infer<typeof formSchema>

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    // Submit to API
    await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
  }

  return (
    <section className="py-20">
      <div className="container-custom max-w-2xl">
        <h2 className="text-4xl font-bold mb-8 text-center">Get in Touch</h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <Input
              {...register('name')}
              placeholder="Full Name"
              aria-invalid={errors.name ? 'true' : 'false'}
            />
            {errors.name && (
              <p className="text-sm text-destructive mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <Input
              {...register('email')}
              type="email"
              placeholder="Email Address"
              aria-invalid={errors.email ? 'true' : 'false'}
            />
            {errors.email && (
              <p className="text-sm text-destructive mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <Input
              {...register('company')}
              placeholder="Company (Optional)"
            />
          </div>

          <div>
            <Textarea
              {...register('message')}
              placeholder="Your Message"
              rows={5}
              aria-invalid={errors.message ? 'true' : 'false'}
            />
            {errors.message && (
              <p className="text-sm text-destructive mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      </div>
    </section>
  )
}
```

### Layout Components (`/components/layout`)

**Header with Navigation**
```typescript
// components/layout/Header.tsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Logo from '@/components/ui/Logo'
import { navigation } from './navigation'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-colors',
        isScrolled ? 'bg-white/95 backdrop-blur shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <div key={item.label} className="relative">
                {item.children ? (
                  <button
                    className="flex items-center gap-1 hover:text-primary"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (
                  <Link href={item.href!} className="hover:text-primary">
                    {item.label}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.children && activeDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href!}
                        className="block px-4 py-3 hover:bg-muted"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <Button asChild className="hidden lg:inline-flex">
            <Link href="/demo">Book a Demo</Link>
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden"
            >
              {/* Mobile menu items */}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
```

## Animation Patterns

### Framer Motion Integration

```typescript
import { motion } from 'framer-motion'

// Fade in on scroll
const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeInVariants}
  transition={{ duration: 0.6 }}
>
  <Content />
</motion.div>

// Stagger children animation
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
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

## TypeScript Best Practices

### Component Props Types

```typescript
// Define props interface
interface ButtonProps {
  variant?: 'default' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
}

// Use the interface
export function Button({ 
  variant = 'default',
  size = 'md',
  children,
  ...props 
}: ButtonProps) {
  return <button {...props}>{children}</button>
}
```

### Extending HTML Attributes

```typescript
interface InputProps 
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export function Input({ label, error, ...props }: InputProps) {
  return (
    <div>
      {label && <label>{label}</label>}
      <input {...props} />
      {error && <span className="text-destructive">{error}</span>}
    </div>
  )
}
```

## Testing Components

### Unit Testing with Jest

```typescript
import { render, screen } from '@testing-library/react'
import { Button } from './button'

describe('Button', () => {
  it('renders with children', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('applies variant classes', () => {
    render(<Button variant="outline">Click me</Button>)
    const button = screen.getByText('Click me')
    expect(button).toHaveClass('border')
  })
})
```

### Integration Testing

```typescript
import { render, screen, fireEvent } from '@testing-library/react'
import ContactForm from './ContactForm'

describe('ContactForm', () => {
  it('shows validation errors', async () => {
    render(<ContactForm />)
    
    const submitButton = screen.getByText('Send Message')
    fireEvent.click(submitButton)
    
    expect(await screen.findByText('Name is required')).toBeInTheDocument()
  })
})
```

## Performance Optimization

### Lazy Loading Components

```typescript
import dynamic from 'next/dynamic'

// Lazy load heavy components
const HeavyChart = dynamic(
  () => import('@/components/widgets/Chart'),
  { loading: () => <p>Loading chart...</p> }
)

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <HeavyChart />
    </div>
  )
}
```

### React.memo for Expensive Renders

```typescript
import { memo } from 'react'

interface ExpensiveComponentProps {
  data: ComplexData
}

const ExpensiveComponent = memo(function ExpensiveComponent({ 
  data 
}: ExpensiveComponentProps) {
  // Expensive computation
  return <div>{/* render */}</div>
})
```

---

**Last Updated**: October 2025
**Version**: 1.0.0

