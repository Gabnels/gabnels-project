import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.date(),

      category: z.enum(["Finanzas", "Critica Social", "Literatura"]),
      tags: z.array(z.string()),

      image: image(), // 👈 AQUÍ está la clave
    }),
});

export const collections = {
  blog,
};
