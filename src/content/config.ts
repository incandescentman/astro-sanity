import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    publishDate: z.coerce.date(),
    author: z.string(),
    authorImage: z.string().url(),
    Image: z.string().url(),
    ImageAlt: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  blog,
};