import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    releases: defineCollection({
      source: "releases/**.md",
      type: "page",
      schema: z.object({
        title: z.string(),
        date: z.string(),
        version: z.string(),
        description: z.string().optional(),
      }),
    }),
  },
});
