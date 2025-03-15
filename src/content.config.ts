// Astro Tools
import { defineCollection, z } from "astro:content";

// Loaders
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      id: z.string().optional(),
      title: z.string(),
      city: z.string(),
      square: z.string(),
      realizationYear: z.number(),
      // validate as a local image
      cover: z.object({
        image: image(),
        alt: z.string(),
      }),
      infoImg: z.object({
        image: image(),
        alt: z.string(),
      }),
      planScheme: z
        .object({
          image: image(),
          alt: z.string(),
        })
        .optional(),
      pubDate: z.date(),
      isDraft: z.boolean().optional(),
    }),
});

export const collections = {
  projects,
};
