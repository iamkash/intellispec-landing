# Testing Strategy

## Overview

This document outlines the testing approach for the intelliSPEC Landing application, covering manual testing, automated testing strategies, and quality assurance processes.

## Testing Pyramid

```
            ┌─────────────────┐
            │   E2E Tests     │ ← Few, slow, expensive
            │  (Playwright)   │
            └─────────────────┘
         ┌──────────────────────┐
         │ Integration Tests    │ ← Some, moderate
         │  (React Testing)     │
         └──────────────────────┘
    ┌──────────────────────────────┐
    │     Unit Tests               │ ← Many, fast, cheap
    │  (Jest + React Testing)      │
    └──────────────────────────────┘
```

## Manual Testing

### Pre-Deployment Checklist

#### Functional Testing

**Navigation**:
- [ ] Header navigation works on all pages
- [ ] Footer links navigate correctly
- [ ] Mobile hamburger menu functions
- [ ] Dropdown menus appear and work
- [ ] All internal links work
- [ ] External links open in new tab

**Forms**:
- [ ] Contact form submits successfully
- [ ] Validation errors display correctly
- [ ] Success messages appear
- [ ] Email notifications sent
- [ ] Form clears after submission
- [ ] Error states handled gracefully

**Content**:
- [ ] All images load correctly
- [ ] Videos play properly
- [ ] Text is readable and formatted
- [ ] No Lorem Ipsum placeholder text
- [ ] Dates are current
- [ ] Pricing information accurate

#### Responsive Design Testing

**Breakpoints**:
```
Mobile:        320px, 375px, 414px
Tablet:        768px, 834px, 1024px
Desktop:       1280px, 1440px, 1920px
Large Desktop: 2560px
```

**Mobile (< 640px)**:
- [ ] Navigation collapses to hamburger
- [ ] Content stacks vertically
- [ ] Text is readable without zooming
- [ ] Buttons are thumb-sized (44x44px)
- [ ] Forms are easy to complete
- [ ] Images fit viewport

**Tablet (640px - 1024px)**:
- [ ] Layout adjusts appropriately
- [ ] Multi-column layouts work
- [ ] Images scale properly
- [ ] Touch targets adequate

**Desktop (> 1024px)**:
- [ ] Full navigation visible
- [ ] Content uses available space
- [ ] Hover states work
- [ ] No horizontal scrolling

#### Browser Compatibility

**Required Browsers**:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

**Testing Points**:
- [ ] Layout renders correctly
- [ ] JavaScript functions work
- [ ] CSS animations play
- [ ] Forms submit
- [ ] Images display

#### Performance Testing

**Lighthouse Audit**:
```bash
# Run in Chrome DevTools
1. Open DevTools (F12)
2. Go to Lighthouse tab
3. Select categories
4. Generate report
```

**Target Scores**:
- [ ] Performance: 90+
- [ ] Accessibility: 95+
- [ ] Best Practices: 95+
- [ ] SEO: 100

**Core Web Vitals**:
- [ ] LCP (Largest Contentful Paint): < 2.5s
- [ ] FID (First Input Delay): < 100ms
- [ ] CLS (Cumulative Layout Shift): < 0.1

#### Accessibility Testing

**Keyboard Navigation**:
- [ ] Tab through all interactive elements
- [ ] Focus indicators visible
- [ ] Enter/Space activates buttons
- [ ] Escape closes modals
- [ ] Skip navigation link works

**Screen Reader Testing**:
- [ ] Page title announced
- [ ] Headings read in order
- [ ] Links descriptive
- [ ] Images have alt text
- [ ] Forms have labels
- [ ] Error messages announced

**Tools**:
- Chrome DevTools Lighthouse
- WAVE Browser Extension
- axe DevTools Extension

#### SEO Testing

**Metadata**:
- [ ] Title tags present (50-60 characters)
- [ ] Meta descriptions present (150-160 characters)
- [ ] Open Graph tags present
- [ ] Twitter Card tags present
- [ ] Canonical URLs set correctly

**Content**:
- [ ] H1 tag present and unique
- [ ] Heading hierarchy correct (H1 → H2 → H3)
- [ ] Images have alt attributes
- [ ] Links have descriptive text
- [ ] No broken links

**Technical**:
- [ ] Robots.txt accessible
- [ ] Sitemap.xml accessible
- [ ] Structured data valid (JSON-LD)
- [ ] Page speed acceptable
- [ ] Mobile-friendly

**Validation Tools**:
- Google Search Console
- Google Rich Results Test
- Bing Webmaster Tools
- Twitter Card Validator
- Facebook Sharing Debugger

## Automated Testing

### Unit Testing

**Setup**:
```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom
```

**Configuration**:
```javascript
// jest.config.js
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
}

// jest.setup.js
import '@testing-library/jest-dom'
```

**Example Unit Tests**:

```typescript
// components/ui/button.test.tsx
import { render, screen } from '@testing-library/react'
import { Button } from './button'

describe('Button', () => {
  it('renders children', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('applies variant classes', () => {
    render(<Button variant="outline">Click me</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('border')
  })

  it('handles click events', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    
    const button = screen.getByRole('button')
    button.click()
    
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('can be disabled', () => {
    render(<Button disabled>Click me</Button>)
    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
  })
})
```

```typescript
// lib/utils.test.ts
import { cn } from './utils'

describe('cn', () => {
  it('merges class names', () => {
    expect(cn('class1', 'class2')).toBe('class1 class2')
  })

  it('handles conditional classes', () => {
    expect(cn('base', true && 'conditional')).toBe('base conditional')
    expect(cn('base', false && 'conditional')).toBe('base')
  })

  it('resolves Tailwind conflicts', () => {
    expect(cn('px-4', 'px-8')).toBe('px-8')
  })
})
```

### Integration Testing

```typescript
// components/sections/ContactForm.test.tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import ContactForm from './ContactForm'

describe('ContactForm', () => {
  it('displays validation errors', async () => {
    render(<ContactForm />)
    
    const submitButton = screen.getByRole('button', { name: /send/i })
    fireEvent.click(submitButton)
    
    await waitFor(() => {
      expect(screen.getByText(/name is required/i)).toBeInTheDocument()
    })
  })

  it('submits form with valid data', async () => {
    const mockFetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ success: true }),
    })
    global.fetch = mockFetch

    render(<ContactForm />)
    
    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: 'John Doe' },
    })
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'john@example.com' },
    })
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: 'Test message here' },
    })
    
    fireEvent.click(screen.getByRole('button', { name: /send/i }))
    
    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledWith(
        '/api/contact',
        expect.objectContaining({
          method: 'POST',
          body: expect.stringContaining('John Doe'),
        })
      )
    })
  })
})
```

### End-to-End Testing

**Setup with Playwright**:
```bash
npm install --save-dev @playwright/test
npx playwright install
```

**Configuration**:
```typescript
// playwright.config.ts
import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
  },
})
```

**Example E2E Tests**:

```typescript
// e2e/navigation.spec.ts
import { test, expect } from '@playwright/test'

test('navigation menu works', async ({ page }) => {
  await page.goto('/')
  
  // Click Products menu
  await page.click('text=Products')
  
  // Verify dropdown appears
  await expect(page.locator('text=intelliINSPECT')).toBeVisible()
  
  // Click a module
  await page.click('text=intelliINSPECT')
  
  // Verify navigation
  await expect(page).toHaveURL('/modules/inspect')
})

test('contact form submission', async ({ page }) => {
  await page.goto('/contact')
  
  // Fill form
  await page.fill('input[name="name"]', 'Test User')
  await page.fill('input[name="email"]', 'test@example.com')
  await page.fill('textarea[name="message"]', 'Test message')
  
  // Submit
  await page.click('button[type="submit"]')
  
  // Verify success message
  await expect(page.locator('text=Thank you')).toBeVisible()
})

test('responsive design', async ({ page }) => {
  // Test mobile
  await page.setViewportSize({ width: 375, height: 667 })
  await page.goto('/')
  
  // Verify mobile menu
  await expect(page.locator('[aria-label="Menu"]')).toBeVisible()
  
  // Test desktop
  await page.setViewportSize({ width: 1920, height: 1080 })
  await page.goto('/')
  
  // Verify desktop navigation
  await expect(page.locator('nav')).toBeVisible()
})
```

### API Route Testing

```typescript
// app/api/contact/route.test.ts
import { POST } from './route'
import { NextRequest } from 'next/server'

describe('/api/contact', () => {
  it('validates required fields', async () => {
    const request = new NextRequest('http://localhost:3000/api/contact', {
      method: 'POST',
      body: JSON.stringify({}),
    })

    const response = await POST(request)
    const data = await response.json()

    expect(response.status).toBe(400)
    expect(data.error).toBe('Validation failed')
  })

  it('accepts valid data', async () => {
    const validData = {
      name: 'John Doe',
      email: 'john@example.com',
      message: 'Test message here',
    }

    const request = new NextRequest('http://localhost:3000/api/contact', {
      method: 'POST',
      body: JSON.stringify(validData),
    })

    const response = await POST(request)
    const data = await response.json()

    expect(response.status).toBe(200)
    expect(data.success).toBe(true)
  })
})
```

## Continuous Integration

### GitHub Actions Workflow

```yaml
# .github/workflows/test.yml
name: Test

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2

      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Run linter
        run: npm run lint

      - name: Type check
        run: npm run type-check

      - name: Run unit tests
        run: npm test

      - name: Build
        run: npm run build

      - name: Run E2E tests
        run: npx playwright test

      - name: Upload test results
        if: always()
        uses: actions/upload-artifact@v2
        with:
          name: playwright-report
          path: playwright-report/
```

## Testing Best Practices

### What to Test

**Do Test**:
- User interactions
- Form validation
- API responses
- Error handling
- Edge cases
- Accessibility
- Critical user paths

**Don't Test**:
- Third-party libraries
- Next.js internals
- CSS styling details
- Implementation details

### Writing Good Tests

```typescript
// ✅ Good - tests behavior
it('displays error when email is invalid', async () => {
  render(<ContactForm />)
  
  fireEvent.change(screen.getByLabelText(/email/i), {
    target: { value: 'invalid' },
  })
  fireEvent.blur(screen.getByLabelText(/email/i))
  
  await waitFor(() => {
    expect(screen.getByText(/invalid email/i)).toBeInTheDocument()
  })
})

// ❌ Bad - tests implementation
it('calls validateEmail function', () => {
  const form = new ContactForm()
  form.validateEmail('invalid')
  expect(form.errors.email).toBeDefined()
})
```

### Test Organization

```
__tests__/
├── unit/
│   ├── components/
│   │   └── button.test.tsx
│   └── lib/
│       └── utils.test.ts
├── integration/
│   └── forms/
│       └── contact.test.tsx
└── e2e/
    ├── navigation.spec.ts
    └── forms.spec.ts
```

## Quality Gates

### Definition of Done

A feature is "done" when:
- [ ] Code written and reviewed
- [ ] Unit tests written and passing
- [ ] Integration tests written and passing
- [ ] E2E tests written and passing (if applicable)
- [ ] Manual testing completed
- [ ] Accessibility tested
- [ ] Performance acceptable
- [ ] Documentation updated
- [ ] Deployed to staging
- [ ] Product owner approved

### Pre-Merge Checklist

- [ ] All tests passing
- [ ] Code review approved
- [ ] No linter errors
- [ ] No TypeScript errors
- [ ] Build succeeds
- [ ] Performance acceptable
- [ ] Accessibility validated
- [ ] Documentation updated

---

**Last Updated**: October 2025
**Version**: 1.0.0

