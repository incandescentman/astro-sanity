# Astro Sanity

A beautiful, fast blog built with Astro and powered by MDX for content authoring.

> **✨ Inspired by:** The popular [Sanity blog template](https://github.com/vercel/next.js/tree/canary/examples/cms-sanity) for Next.js. This version replaces Sanity CMS with file-based MDX content and Next.js with Astro for better performance and simpler deployment.

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

## Adding Images

Store images in `src/assets/images/`:
- Author photos: `src/assets/images/authors/`
- Post covers: `src/assets/images/posts/`

Reference them in your MDX front matter:
```yaml
authorImage: ~/assets/images/authors/author-name.jpg
Image: ~/assets/images/posts/post-name.jpg
```


## What's Included

- **5 sample blog posts** on web development topics
- **Author profiles** with photos
- **Responsive design** that works on all devices
- **Fast performance** with static site generation

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

## Technology

- **Astro** - Static site generator
- **MDX** - Markdown with components
- **Tailwind CSS** - Styling framework
- **TypeScript** - Type safety

## Deployment

This project can be deployed to any static hosting service:

- **Vercel** - Zero-config deployment
- **Netlify** - Easy continuous deployment
- **GitHub Pages** - Free hosting for public repositories
- **Any CDN** - Upload the `dist/` folder

Perfect for developers who want a beautiful blog with file-based content and modern static site generation!

## License

MIT License - see the [LICENSE](LICENSE) file for details.

## Attribution

This project is derived from the [Sanity blog template](https://github.com/vercel/next.js/tree/canary/examples/cms-sanity) originally created by Vercel, Inc. The beautiful design, typography, and layout concepts are preserved from the original template. 

**Original template:** Copyright (c) 2025 Vercel, Inc.  

We're grateful to the Vercel team for creating such an elegant blog template that serves as the foundation for this Astro conversion.

See [CHANGE-LOG.org](CHANGE-LOG.org) for detailed project updates and improvements.
