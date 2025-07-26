import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    publishDate: z.date(),
    author: z.string(),
    authorImage: z.string().url(),
    coverImage: z.string().url(),
    coverImageAlt: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  blog,
};