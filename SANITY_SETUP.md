# Sanity CMS Setup Guide

This guide will help you set up Sanity CMS for managing Case Studies, White Papers, and Blog content for the intelliSPEC website.

## 🚀 Quick Start

### 1. Create a Sanity Project

1. Go to [sanity.io](https://www.sanity.io/) and create an account
2. Create a new project
3. Choose "Clean project with no predefined schemas"
4. Note down your Project ID

### 2. Configure Environment Variables

1. Copy the environment variables from `env.example` to your `.env.local` file
2. Update the Sanity configuration:

```bash
# .env.local
NEXT_PUBLIC_SANITY_PROJECT_ID=your-actual-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-sanity-api-token
```

### 3. Set Up Sanity Studio (Optional)

If you want to use Sanity Studio for content management:

```bash
# Install Sanity CLI globally
npm install -g @sanity/cli

# Initialize Sanity Studio in your project
sanity init --template clean --create-project "intelliSPEC CMS" --dataset production

# Follow the prompts and use your project ID
```

### 4. Add Schemas to Sanity Studio

1. Copy the schemas from `sanity-schemas.ts` to your Sanity Studio's `schemas` folder
2. Import them in your `schema.js` or `schema.ts` file:

```javascript
// schemas/index.js
import { schemas } from './sanity-schemas'

export default schemas
```

## 📝 Content Types

### Case Studies
- **Purpose**: Showcase real-world success stories
- **Fields**: Title, Excerpt, Content, Featured Image, Industry, Client, Results, Author
- **Industries**: Oil & Gas, Manufacturing, Chemicals, Power, Maritime, Pharma, Emergency Services, NDT Labs, Paint, Scaffolding

### White Papers
- **Purpose**: In-depth technical research and insights
- **Fields**: Title, Excerpt, Content, Featured Image, Category, Download URL (optional), Author
- **Categories**: Technology, Industry Trends, Best Practices, Compliance, Innovation, Research

### Blog Posts
- **Purpose**: Regular updates and thought leadership
- **Fields**: Title, Excerpt, Content, Featured Image, Category, Tags, Read Time, Author
- **Categories**: Industry News, Technology, Best Practices, Company Updates, Thought Leadership, Tutorials

### Authors
- **Purpose**: Manage content creators
- **Fields**: Name, Image, Bio, Title

## 🔧 API Usage

The Sanity client is configured in `lib/sanity.ts` with the following functions:

### Case Studies
```typescript
import { getCaseStudies, getCaseStudy } from '@/lib/sanity'

// Get all case studies
const caseStudies = await getCaseStudies()

// Get a specific case study
const caseStudy = await getCaseStudy('case-study-slug')
```

### White Papers
```typescript
import { getWhitePapers, getWhitePaper } from '@/lib/sanity'

// Get all white papers
const whitePapers = await getWhitePapers()

// Get a specific white paper
const whitePaper = await getWhitePaper('white-paper-slug')
```

### Blog Posts
```typescript
import { getBlogPosts, getBlogPost } from '@/lib/sanity'

// Get all blog posts
const blogPosts = await getBlogPosts()

// Get a specific blog post
const blogPost = await getBlogPost('blog-post-slug')
```

## 🖼️ Image Handling

Images are automatically optimized using Sanity's image URL builder:

```typescript
import { urlFor } from '@/lib/sanity'

// Generate optimized image URL
const imageUrl = urlFor(image).width(600).height(400).url()
```

## 📱 Pages Created

1. **Case Studies**: `/case-studies`
   - Grid layout with featured images
   - Industry badges and client information
   - Key results preview
   - Links to individual case study pages

2. **White Papers**: `/white-papers`
   - Grid layout with featured images
   - Category badges and author information
   - Download or read online options
   - Links to individual white paper pages

3. **Blog**: `/blog`
   - Grid layout with featured images
   - Category badges and tags
   - Read time and author information
   - Links to individual blog post pages

## 🎨 Styling

All pages use:
- **Tailwind CSS** for styling
- **Consistent design** with the rest of the site
- **Dark mode support**
- **Responsive layouts**
- **Hover effects** and animations

## 🔒 Security

- **Read-only access** by default (no write permissions)
- **Environment variables** for sensitive configuration
- **Content validation** through Sanity schemas
- **XSS protection** through Sanity's content handling

## 🚀 Deployment

1. Set up environment variables in your hosting platform
2. Ensure Sanity project is accessible from your domain
3. Test content loading in production environment

## 📊 Content Management Tips

1. **Use descriptive titles** for better SEO
2. **Add relevant tags** to blog posts for categorization
3. **Optimize images** before uploading to Sanity
4. **Write compelling excerpts** for better previews
5. **Use consistent author information** across content

## 🆘 Troubleshooting

### Common Issues

1. **Content not loading**: Check environment variables and project ID
2. **Images not displaying**: Verify image URLs and Sanity configuration
3. **Build errors**: Ensure all dependencies are installed
4. **CORS issues**: Configure Sanity CORS settings for your domain

### Getting Help

- [Sanity Documentation](https://www.sanity.io/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Project Issues](https://github.com/your-repo/issues)

## 🔄 Content Workflow

1. **Create content** in Sanity Studio or via API
2. **Publish content** with proper metadata
3. **Content appears** automatically on the website
4. **Update content** without code changes
5. **Version control** through Sanity's built-in features

This setup provides a robust, scalable content management system that integrates seamlessly with your Next.js application. 