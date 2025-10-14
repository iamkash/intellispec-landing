# Content Management Guide

## Sanity CMS Overview

IntelliSpec Landing uses Sanity.io as a headless CMS for managing dynamic content including blog posts, case studies, press releases, and white papers.

## Sanity Studio Setup

### Installation

```bash
# Already configured in project
# Sanity dependencies in package.json:
# - sanity: ^3.99.0
# - @sanity/client: ^7.8.0
# - @sanity/image-url: ^1.1.0
# - @sanity/vision: ^3.99.0
# - next-sanity: ^9.12.3
```

### Configuration Files

```
sanity/
├── env.ts                    # Environment configuration
├── lib/
│   ├── client.ts             # Sanity client setup
│   ├── image.ts              # Image URL builder
│   └── live.ts               # Live preview config
├── schemaTypes/
│   ├── author.ts             # Author content type
│   ├── blogPost.ts           # Blog post content type
│   ├── caseStudy.ts          # Case study content type
│   ├── index.ts              # Schema index
│   ├── pressItem.ts          # Press release content type
│   └── whitePaper.ts         # White paper content type
├── sanity.cli.ts             # CLI configuration
└── sanity.config.ts          # Studio configuration
```

## Content Types

### Blog Post Schema

```typescript
// sanity/schemaTypes/blogPost.ts
export default {
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required().max(100)
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.required().max(200)
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
      validation: Rule => Rule.required()
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
          validation: Rule => Rule.required()
        }
      ]
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }]
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      validation: Rule => Rule.required()
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt Text',
            }
          ]
        },
        {
          type: 'code',
          options: {
            language: 'typescript',
            languageAlternatives: [
              { title: 'TypeScript', value: 'typescript' },
              { title: 'JavaScript', value: 'javascript' },
              { title: 'HTML', value: 'html' },
              { title: 'CSS', value: 'css' },
            ]
          }
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection
      return { ...selection, subtitle: author && `by ${author}` }
    },
  },
}
```

### Case Study Schema

```typescript
// sanity/schemaTypes/caseStudy.ts
export default {
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: Rule => Rule.required()
    },
    {
      name: 'client',
      title: 'Client Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'industry',
      title: 'Industry',
      type: 'string',
      options: {
        list: [
          { title: 'Oil & Gas', value: 'oil-gas' },
          { title: 'Manufacturing', value: 'manufacturing' },
          { title: 'Aerospace', value: 'aerospace' },
          { title: 'Automotive', value: 'automotive' },
          // ... more industries
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'challenge',
      title: 'Challenge',
      type: 'text',
      rows: 5,
      validation: Rule => Rule.required()
    },
    {
      name: 'solution',
      title: 'Solution',
      type: 'text',
      rows: 5,
      validation: Rule => Rule.required()
    },
    {
      name: 'results',
      title: 'Results',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'metric', type: 'string', title: 'Metric' },
            { name: 'value', type: 'string', title: 'Value' },
            { name: 'description', type: 'text', title: 'Description' }
          ]
        }
      ]
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        { name: 'alt', type: 'string', title: 'Alt Text' }
      ]
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      validation: Rule => Rule.required()
    }
  ]
}
```

## Content Workflows

### Creating Content

#### Blog Post Workflow

```
1. Login to Sanity Studio
   → https://intellispec.sanity.studio

2. Create New Blog Post
   → Click "Blog Posts" → "Create"

3. Fill Required Fields
   → Title: Clear, descriptive title
   → Slug: Auto-generated from title
   → Excerpt: 150-200 character summary
   → Author: Select from dropdown
   → Categories: Select relevant categories
   → Published At: Set publication date
   → Main Image: Upload (1200x630px recommended)
   → Body: Write content with rich text

4. Preview Content
   → Click "Preview" to see how it looks

5. Publish
   → Click "Publish" when ready

6. Verify on Site
   → Visit /blog to see new post
   → Check individual post page
```

#### Case Study Workflow

```
1. Navigate to Case Studies
   → Click "Case Studies" → "Create"

2. Enter Client Information
   → Client Name
   → Industry (from dropdown)

3. Document Challenge
   → Describe the problem
   → Be specific and detailed

4. Describe Solution
   → Explain how IntelliSpec solved it
   → Mention specific modules used

5. Add Results/Metrics
   → Add measurable outcomes
   → Include percentages, time saved, etc.

6. Upload Images
   → Main image (1200x630px)
   → Optional: Screenshots, photos

7. Publish
   → Review and publish
```

### Editing Content

```
1. Find Content
   → Navigate to content type
   → Search or browse list

2. Make Changes
   → Edit fields as needed
   → Maintain SEO best practices

3. Preview Changes
   → Use preview to verify

4. Publish Updates
   → Click "Publish" to save changes
```

### Unpublishing Content

```
1. Open Document
   → Navigate to content item

2. Unpublish
   → Click menu (⋮) → "Unpublish"

3. Confirm
   → Confirm unpublishing

4. Document stays in Sanity
   → Still accessible in studio
   → Not visible on website
```

### Deleting Content

```
1. Open Document
   → Navigate to content item

2. Delete
   → Click menu (⋮) → "Delete"

3. Confirm
   → Confirm deletion
   → Cannot be undone

4. Verify Removal
   → Check website to confirm removal
```

## Image Management

### Image Specifications

**Blog Post Main Image**:
- Size: 1200x630px (Open Graph standard)
- Format: JPEG or PNG
- Max file size: 1MB
- Aspect ratio: 1.91:1

**Case Study Image**:
- Size: 1200x800px
- Format: JPEG or PNG
- Max file size: 1MB
- Aspect ratio: 3:2

**Content Images**:
- Size: Max 1920px width
- Format: JPEG, PNG, or WebP
- Max file size: 500KB
- Optimize before upload

### Image Upload Process

```
1. Prepare Image
   → Resize to specifications
   → Optimize file size
   → Ensure good quality

2. Upload in Sanity
   → Click image field
   → Upload or drag-and-drop

3. Add Alt Text
   → Describe image for accessibility
   → Be descriptive and concise

4. Set Hotspot (Optional)
   → Click "Edit hotspot"
   → Select focal point for cropping
```

### Image Optimization

```bash
# Optimize images before uploading
npm run optimize-images

# Or use online tools:
# - TinyPNG (tinypng.com)
# - Squoosh (squoosh.app)
# - ImageOptim (imageoptim.com)
```

## Content Best Practices

### SEO Guidelines

**Title**:
- 50-60 characters
- Include primary keyword
- Clear and descriptive
- Avoid clickbait

**Excerpt/Description**:
- 150-160 characters
- Summarize content
- Include call to action
- Natural language

**Slug**:
- Use auto-generated from title
- Keep short and descriptive
- Use hyphens, not underscores
- Lowercase only

**Content**:
- Use H2 for main sections
- Use H3 for subsections
- Include keywords naturally
- Break up long paragraphs
- Add bullet points and lists
- Include relevant images

### Accessibility

**Images**:
- Always add alt text
- Describe what's in the image
- Don't start with "Image of..."
- Keep under 125 characters

**Links**:
- Use descriptive link text
- Avoid "click here"
- Indicate external links

**Headings**:
- Use proper hierarchy
- Don't skip levels
- One H1 per page (title)

### Content Quality

**Writing Style**:
- Clear and concise
- Professional tone
- Active voice
- Short paragraphs (3-4 sentences)
- Break up text with subheadings

**Accuracy**:
- Fact-check all data
- Verify statistics
- Keep information current
- Update as needed

**Consistency**:
- Follow brand voice
- Use consistent terminology
- Maintain formatting standards

## Content Revalidation

### Automatic Revalidation

```typescript
// Configured in app/api/revalidate/route.ts

// When content is published in Sanity:
// 1. Sanity sends webhook to /api/revalidate
// 2. Next.js revalidates relevant pages
// 3. New content appears within 60 seconds
```

### Manual Revalidation

```bash
# Revalidate specific path
curl -X POST "https://intellispec.com/api/revalidate?secret=YOUR_SECRET" \
  -H "Content-Type: application/json" \
  -d '{"path": "/blog"}'

# Revalidate by tag
curl -X POST "https://intellispec.com/api/revalidate?secret=YOUR_SECRET" \
  -H "Content-Type: application/json" \
  -d '{"tag": "blog-posts"}'
```

## Sanity Studio Customization

### Accessing Studio

**Local Development**:
```bash
cd studio
sanity start
# Opens at http://localhost:3333
```

**Production**:
```
https://intellispec.sanity.studio
```

### Custom Preview

```typescript
// sanity/lib/live.ts
export const livePreviewConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  previewUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
}
```

## Backup & Recovery

### Exporting Content

```bash
# Export entire dataset
sanity dataset export production backup.tar.gz

# Export specific document type
sanity dataset export production backup.tar.gz \
  --types blogPost,caseStudy
```

### Importing Content

```bash
# Import from backup
sanity dataset import backup.tar.gz production

# Import with options
sanity dataset import backup.tar.gz production \
  --replace  # Replace existing documents
```

### Scheduled Backups

```bash
# Set up cron job for daily backups
0 2 * * * cd /path/to/project && sanity dataset export production backup-$(date +\%Y\%m\%d).tar.gz
```

## Troubleshooting

### Content Not Appearing

```
1. Check publication status
   → Ensure document is published

2. Verify revalidation
   → Check webhook is firing
   → Manually trigger revalidation

3. Clear Next.js cache
   → Restart development server
   → Clear .next directory

4. Check content query
   → Verify GROQ query is correct
   → Test in Sanity Vision
```

### Image Not Loading

```
1. Check image exists in Sanity
   → View document in studio

2. Verify alt text
   → Images without alt text may fail

3. Check CORS settings
   → Add domain to Sanity CORS origins

4. Verify remote patterns
   → Check next.config.js configuration
```

---

**Last Updated**: October 2025
**Version**: 1.0.0

