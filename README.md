# astro-sanity

A modern, fast blog built with Astro and powered by MDX for content authoring. 

> **📝 Note:** This project is converted from the popular [Sanity blog template](https://github.com/vercel/next.js/tree/canary/examples/cms-sanity) for Next.js. It preserves the beautiful design, typography, and layout of the original while replacing Sanity CMS with file-based MDX content and Next.js with Astro's static site generation for better performance and simplicity.

## Features

- 🚀 **Astro** - Lightning-fast static site generation
- 📝 **MDX** - Write content in Markdown with React components
- 🎨 **Tailwind CSS** - Beautiful, responsive design system
- 📱 **Mobile-first** - Optimized for all device sizes
- ⚡ **Static** - Pre-rendered for optimal performance
- 🔍 **SEO-friendly** - Semantic HTML and meta tags

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Writing Content

Create new blog posts by adding `.mdx` files to `src/content/blog/`:

```markdown
---
title: "Your Blog Post Title"
excerpt: A compelling excerpt that summarizes your post
publishDate: 2024-12-15T00:00:00Z
author: Your Name
authorImage: ~/assets/images/authors/20241201_0000_author-name.jpg
Image: ~/assets/images/posts/20241215_0000_post-name.jpg
ImageAlt: Description of your cover image
tags:
- tag1
- tag2
- tag3
---

# Your Content Here

Write your blog post content using **Markdown** syntax.

## Code Examples

```javascript
const example = "You can include syntax-highlighted code blocks";
```

## Interactive Components

You can even embed React components if needed!
```

## Image Management

This project uses a sophisticated asset management system for optimal performance and maintainability:

### Image Storage Structure
```
src/
└── assets/
    └── images/
        ├── authors/
        │   ├── 20241201_0000_sarah-chen.jpg
        │   ├── 20241201_0001_marcus-rodriguez.jpg
        │   └── 20241201_0002_elena-kowalski.jpg
        └── posts/
            ├── 20241215_0000_web-development-2025.jpg
            ├── 20241210_0000_design-systems.jpg
            └── 20241205_0000_progressive-enhancement.jpg
```

### Image Naming Convention
Images follow the `YYYYMMDD_HHMM_descriptive-name.jpg` format:
- **YYYYMMDD** - Date (publish date for posts, creation date for authors)
- **HHMM** - Time (for uniqueness when multiple images on same date)
- **descriptive-name** - Kebab-case description of the image content

### Asset Path System
The project uses a **Vite alias system** (`~/`) for clean, maintainable imports:

**Configuration** (`astro.config.mjs`):
```javascript
vite: {
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
    },
  },
}
```

**Front Matter Usage**:
```yaml
authorImage: ~/assets/images/authors/20241201_0000_author-name.jpg
Image: ~/assets/images/posts/20241215_0000_post-name.jpg
```

### Why This Approach?

1. **Asset Optimization** - Images in `src/assets/` are processed through Astro's build pipeline for automatic optimization, compression, and cache-busting
2. **Type Safety** - Full TypeScript support with `ImageMetadata` objects
3. **Performance** - Lazy loading with `import.meta.glob()` for efficient bundle sizes
4. **Maintainability** - `~/` alias prevents broken imports when refactoring
5. **Deployment Ready** - Works seamlessly with Vercel, Netlify, and other static hosts
6. **Chronological Organization** - Timestamp naming allows easy sorting and identification

### Image Resolution System
The project includes a custom utility (`src/utils/images.ts`) that:
- Dynamically imports all images using `import.meta.glob()`
- Resolves `~/assets/images/...` paths to actual image modules
- Returns optimized `ImageMetadata` objects for Astro's asset pipeline
- Provides fallbacks for external URLs and missing images

This system ensures images are properly optimized during build while maintaining clean, semantic paths in your content files.


## Content Structure

The blog comes with **5 sample posts** covering:

- 🚀 The Future of Web Development: Trends to Watch in 2025
- 🎨 Building Sustainable Design Systems at Scale  
- ⚡ Progressive Enhancement in Modern Web Apps
- 📝 Mastering TypeScript: Advanced Patterns
- 🌱 Zero-Waste Development: Performance & Sustainability

**Sample Authors:**
- Sarah Chen (with professional headshot)
- Marcus Rodriguez (with portrait)
- Elena Kowalski (with photo)

## Project Structure

```
src/
├── assets/
│   └── images/         # Optimized image assets
│       ├── authors/    # Author profile images
│       └── posts/      # Blog post cover images
├── components/         # Reusable Astro components
│   ├── Avatar.astro
│   ├── CoverImage.astro
│   ├── DateComponent.astro
│   └── MoreStories.astro
├── content/
│   ├── blog/          # Your MDX blog posts
│   └── config.ts      # Content collection schema
├── layouts/
│   └── Layout.astro   # Base page layout
├── pages/
│   ├── index.astro    # Homepage
│   └── posts/
│       └── [slug].astro # Dynamic blog post pages
├── styles/
│   └── globals.css    # Global styles
└── utils/
    └── images.ts      # Image resolution utility
```

## Styling

The blog uses Tailwind CSS with the Typography plugin for beautiful prose styling. The design system includes:

- **Inter font** for clean, modern typography
- **Responsive breakpoints** for mobile-first design
- **Tailwind Typography** for rich content formatting
- **Custom prose styles** for code blocks and links

## Performance

- **Static generation** - All pages pre-rendered at build time
- **Optimized images** - Lazy loading and responsive sizing
- **Minimal JavaScript** - Only what's needed for interactivity
- **Fast builds** - Astro's efficient build process

## Deployment

This project can be deployed to any static hosting service:

- **Vercel** - Zero-config deployment
- **Netlify** - Easy continuous deployment
- **GitHub Pages** - Free hosting for public repositories
- **Any CDN** - Upload the `dist/` folder

## Customization

- **Add new authors** - Update frontmatter in your MDX files
- **Modify styling** - Edit Tailwind classes in components
- **Add components** - Create new `.astro` files in `src/components/`
- **Extend content** - Add new fields to `src/content/config.ts`

Perfect for developers who want the simplicity of file-based content with the power of a modern static site generator!

## License

MIT License - see the [LICENSE](LICENSE) file for details.

## Attribution

This project is derived from the [Sanity blog template](https://github.com/vercel/next.js/tree/canary/examples/cms-sanity) originally created by Vercel, Inc. The beautiful design, typography, and layout concepts are preserved from the original template. 

**Original template:** Copyright (c) 2025 Vercel, Inc.  

We're grateful to the Vercel team for creating such an elegant blog template that serves as the foundation for this Astro conversion.
