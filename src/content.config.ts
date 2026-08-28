import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const travels = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/travels" }),
  schema: z.object({
    title: z.string(),
    location: z.string(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date(),
    description: z.string(),
  }),
});

const markets = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/markets" }),
  schema: z.object({
    title: z.string(),
    city: z.string(),
    region: z.string(),
    country: z.string(),
    visited: z.coerce.date(),
    rating: z.number().min(1).max(5).optional(),
    favorite: z.boolean().default(false),
  }),
});

const churches = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/churches" }),
  schema: z.object({
    title: z.string(),
    city: z.string(),
    region: z.string(),
    country: z.string(),
    visited: z.coerce.date(),
    rating: z.number().min(1).max(5).optional(),
    favorite: z.boolean().default(false),
  }),
});

const discoveries = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/discoveries" }),
  schema: z.object({
    title: z.string(),
    city: z.string(),
    region: z.string(),
    country: z.string(),
    visited: z.coerce.date(),
    category: z.string(),
    rating: z.number().min(1).max(5).optional(),
    favorite: z.boolean().default(false),
  }),
});

export const collections = {
  travels,
  markets,
  churches,
  discoveries,
};