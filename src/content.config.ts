// Astro Tools
import { defineCollection, z } from "astro:content";

// Loaders
import { glob } from "astro/loaders";

const colSpanOptions = ["3", "6"] as const;
const displayOptions = ["none", "block"] as const;

// TODO: rewrite all configs into separate variables
const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      id: z.string().optional(),
      title: z.string(),
      info: z.object({
        city: z.string(),
        square: z.string(),
        realizationYear: z.number(),
        img: z.object({
          src: image(),
          alt: z.string(),
        }),
      }),
      // validate as a local image
      cover: z.object({
        image: image(),
        alt: z.string(),
      }),
      featureProjectImages: z.array(
        z.object({
          src: image(),
          alt: z.string(),
          aspectRatio: z.string(),
          colSpan: z.enum(colSpanOptions),
          display: z.enum(displayOptions),
        })
      ),
      projectPlanImg: z
        .object({
          src: image(),
          alt: z.string(),
          caption: z.string(),
        })
        .optional(),
      projectNavImg: z.object({
        image: image(),
        alt: z.string(),
        aspectRatio: z.string(),
      }),
      pubDate: z.date(),
      isDraft: z.boolean().optional(),
    }),
});

export const collections = {
  projects,
};
