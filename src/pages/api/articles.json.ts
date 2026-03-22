import { getCollection } from "astro:content";

export async function GET() {
  const posts = await getCollection("blog");

  const articles = posts.map((post) => ({
    category: post.data.category,
    title: post.data.title,
    description: post.data.description,
    href: `/blog/${post.slug}`,
  }));

  return new Response(JSON.stringify(articles), {
    headers: { "Content-Type": "application/json" },
  });
}
