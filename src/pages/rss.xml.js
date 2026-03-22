import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = await getCollection("blog");

  return rss({
    title: "Gabnels Blog",
    description: "Artículos sobre finanzas, pensamiento crítico y literatura",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/blog/${post.slug}/`,
    })),
  });
}
