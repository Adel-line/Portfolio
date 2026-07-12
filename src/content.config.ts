import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/case-studies' }),
  schema: z.object({
    title: z.string(),
    outcome: z.string(), // one-line, specific result — shown on cards and headers
    client: z.string(),
    role: z.string(),
    timeframe: z.string(),
    tools: z.array(z.string()),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    blob: z.enum(['blob-1', 'blob-2', 'blob-3', 'blob-4']).default('blob-1'),
    thumbAlt: z.string(), // alt text for the card thumbnail
  }),
});

export const collections = { 'case-studies': caseStudies };
