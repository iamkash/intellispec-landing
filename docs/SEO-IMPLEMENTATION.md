### SEO and LLM Search Implementation Guide

This guide documents the standards, patterns, and checklists for implementing and maintaining SEO and LLM-search readiness across the application (Next.js App Router). Follow these instructions when creating new pages, enhancing existing pages, or updating images/content.

### Principles
- Prefer the Next.js Metadata API over legacy head tags for consistent SSR metadata.
- Structured data must reflect on-page content. Never publish synthetic ratings/prices not visible on the page.
- Use `next/image` for all images; provide width/height/alt; set `priority` for LCP hero images.
- Use canonical URLs everywhere to avoid duplication and dilution.
- Optimize for human readability and LLMs: clear H1 intent, scannable H2s, TL;DR, and Key Takeaways.

## Core Architecture

### Metadata API pattern
- All pages and layouts must export `generateMetadata` using our helper `createPageMetadata` from `lib/seo.ts`.
- Do not use `<Head>` or `next/head`.

```ts
// Example: app/industries/power/layout.tsx
import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/seo'

export const generateMetadata = async (): Promise<Metadata> =>
  createPageMetadata({
    title: 'Power Industry – Modern Reliability & Compliance',
    description: 'Safety, compliance, inspections, and analytics for power industry operations.',
    canonicalPath: '/industries/power'
  })

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
```

Notes:
- Always pass `canonicalPath`; the helper builds absolute canonicals.
- Do not include `keywords` meta (ignored by major search engines).
- If a social image (OG) exists, pass `ogImageUrl` and ensure the file exists (1200×630).

### Discovery files
- `app/robots.ts`: Centralized robots policy. Update only if crawl rules change.
- `app/sitemap.ts`: Generates a dynamic sitemap. It already includes static routes and Sanity-backed dynamic content (blog, case studies, press, white papers). If you introduce a new dynamic content type, extend this file to fetch slugs and append items with correct `lastModified` and `changeFrequency`.

## Structured Data (JSON-LD)

### Global (set once)
- `app/layout.tsx`: Outputs `Organization` and `WebSite` JSON-LD with `sameAs` links. Keep this up to date when branding or social profiles change.

### Content detail pages
- Blogs: `@type: BlogPosting`
- Press: `@type: NewsArticle`
- White papers: `@type: TechArticle`
- Case studies: `@type: Article`
- Add `BreadcrumbList` on all of the above detail pages.
- Use `datePublished` and `dateModified` only if you have them. If there’s no `updatedAt`, set `dateModified` to `publishedAt`.

```tsx
// Breadcrumbs snippet inside a detail page component
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://intellispec.com' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://intellispec.com/blog' },
        { '@type': 'ListItem', position: 3, name: title, item: `https://intellispec.com/blog/${slug}` }
      ]
    })
  }}
/>
```

### Modules
- Each module page outputs `SoftwareApplication` JSON-LD with fields: `name`, `url`, `applicationCategory`, `operatingSystem`, `image`.

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'IntelliInspect',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web, iOS',
      url: 'https://intellispec.com/modules/inspect',
      image: 'https://intellispec.com/images/modules/inspect.jpg'
    })
  }}
/> 
```

### FAQ schema
- Only add `FAQPage` schema when FAQs are visible on the page. Our `LLMReadyBlock` emits it automatically when provided an `faq` prop with content.

### Prohibited
- Do not publish `AggregateRating`, `Offer`, or pricing-related structured data unless it is clearly shown on-page and accurate.

## LLM-Readiness Content Pattern

Every major page (home, all industries, all modules) should:
- Declare an H1 that states the primary intent.
- Use H2 sections for: Problem, Solution, How it works, Metrics, FAQ (if present).
- Include a crisp TL;DR and 3–5 Key Takeaways.

Use our building blocks:

```tsx
import LLMReadyBlock from '@/components/sections/LLMReadyBlock'
import TLDRBlock from '@/components/sections/TLDRBlock'

<LLMReadyBlock
  intent="Module intent: Problem, Solution, How, Metrics, FAQ"
  problem={{ title: 'Problem', content: <ul><li>…</li></ul> }}
  solution={{ title: 'Solution', content: <ul><li>…</li></ul> }}
  howItWorks={{ title: 'How it works', content: <ol><li>…</li></ol> }}
  metrics={{ title: 'Metrics', content: <ul><li>…</li></ul> }}
  faq={[{ q: 'Question?', a: 'Short, factual answer.' }]}
/>

<TLDRBlock
  summary={<p>1–2 sentences.</p>}
  takeaways={[ 'Point 1', 'Point 2', 'Point 3' ]}
/> 
```

## Images and Media

### Use `next/image` everywhere
- Always provide `width` and `height` (or `fill` with constrained container) and `alt` text.
- Set `priority` on the primary hero/LCP image of a page.
- Avoid raw `<img>` tags.

```tsx
<Image
  src="/images/modules/inspect.jpg"
  alt="IntelliInspect – Digital Inspection Management"
  fill
  className="object-cover"
  priority
/> 
```

### Social (OG) images
- Size: 1200×630.
- Path must exist under `public/images/...` if referenced via `/images/...`.
- For remote images, ensure the domain is allowed in `next.config.js`.
- If a referenced OG image is missing, either add the file or remove the reference from metadata to avoid broken previews.

### Image hygiene
- Compress images (lossless or visually lossless) before committing.
- Prefer descriptive file names (kebab-case) relevant to the content.
- Keep hero images focused and uncluttered to improve CTR on social previews.

## Internal Linking
- Use descriptive, keyword-rich anchor text for contextual links (avoid “click here”).
- Cross-link between modules, industries, case studies, and relevant blog/press content.
- Keep links relevant; avoid spammy overlinking.

## Canonicals
- Always set canonicals via `createPageMetadata({ canonicalPath: '/route' })`.
- Ensure each unique piece of content has a single canonical URL.

## How-To: Adding or Enhancing Pages

### New top-level page (e.g., `/privacy`)
1. Create `app/<route>/page.tsx` and (optionally) `layout.tsx`.
2. Export `generateMetadata` using `createPageMetadata({ title, description, canonicalPath })`.
3. Add LLM content blocks if page is a major entry point.
4. Use `next/image` for all images.
5. If the page should appear in the sitemap, add it to `app/sitemap.ts` static routes.

### New content detail type (Sanity-backed)
1. Create dynamic route (e.g., `app/<type>/[slug]/page.tsx`).
2. Render content and add appropriate JSON-LD type (`BlogPosting`, `NewsArticle`, `TechArticle`, `Article`).
3. Add `BreadcrumbList` JSON-LD.
4. Extend `app/sitemap.ts` to fetch slugs for the new type and append entries.
5. Ensure `datePublished`/`dateModified` fields exist before adding them.

### New module/industry page
1. Create `app/modules/<key>/layout.tsx` or `app/industries/<key>/layout.tsx` with `generateMetadata`.
2. On the page, add `LLMReadyBlock` and `TLDRBlock`.
3. For modules, add `SoftwareApplication` JSON-LD.
4. Verify hero image exists; reference via `/images/modules/<key>.jpg` or `/images/industries/<key>.jpg`.

### Enhancing an existing page
1. Verify or add `generateMetadata`.
2. Confirm canonical path.
3. Replace any remaining `<img>` with `next/image`.
4. Add or refine LLM blocks (Problem/Solution/How/Metrics/FAQ, TL;DR, Takeaways).
5. Add/verify structured data (type-specific + breadcrumbs).
6. Strengthen internal links.

## How-To: Adding or Updating Images
1. Place files under `public/images/...` with descriptive names.
2. Ensure hero images meet performance goals (reasonable size, compressed) and OG images meet 1200×630.
3. Update any `ogImageUrl` references in `generateMetadata` only if the file exists.
4. Replace raw `<img>` tags with `next/image` and add `alt`.
5. If an image is removed, delete the reference from metadata and any page components.

## Verification and QA

### Per-PR checklist
- Page exports `generateMetadata` via `createPageMetadata` with `canonicalPath`.
- No `keywords` meta.
- All images use `next/image`; hero image has `priority` where applicable.
- JSON-LD matches on-page content; breadcrumbs present on detail pages.
- No synthetic ratings/prices.
- Canonical URL is correct and unique.
- Internal links are descriptive and relevant.
- For new dynamic types: `app/sitemap.ts` updated.

### Manual validation
- Open `/sitemap.xml` and `/robots.txt` locally/preview.
- Inspect `<head>` via browser DevTools to confirm meta and structured data.
- Test rich results using Google Rich Results Test.
- Validate social previews using Twitter Card Validator and Facebook Sharing Debugger.
- Check PageSpeed Insights for LCP/CLS and hero image priority.

## FAQ

**Q: Why did we remove the `keywords` meta?**
- Major search engines ignore it and may treat it as a spam signal. Focus on high-quality titles, descriptions, headings, and internal links.

**Q: When should I add `FAQPage` schema?**
- Only when an FAQ section is visibly rendered on the page.

**Q: What if my OG image is missing?**
- Either add the 1200×630 image under `public/images/...` or remove the `ogImageUrl` reference to avoid broken previews.

**Q: How do I ensure LLM-readiness?**
- Use `LLMReadyBlock` + `TLDRBlock` with concise summaries and factual bullets. Keep headings consistent with page intent.

**Q: How do I add a new content type to the sitemap?**
- Update `app/sitemap.ts` to fetch the new slugs (from Sanity or another source) and append the entries. Use correct `changeFrequency` (typed literals) and `lastModified`.

---

Maintain this guide as the single source of truth for SEO and LLM-search implementation. When in doubt, follow the examples above and mirror patterns already used in the modules, industries, and content detail pages.


