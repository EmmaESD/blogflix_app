// ./src/app/blog/page.tsx
import { createClient } from "@/prismicio";

import { PrismicLink, PrismicRichText } from "@prismicio/react";

export default async function BlogPage() {
  const client = createClient();

  // Récupérer tous les articles de blog
  const posts = await client.getAllByType("blog_post");

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Tous les Articles</h1>

      <div className="flex flex-wrap justify-between">
        {posts.map((post) => (
          <div key={post.id} className="card">
            <PrismicLink
              document={post}
              className="hover:opacity-75 duration-300 ease-in-out transition-all"
            >
              <img
                src={post.data.featured_image.url || ""}
                alt={post.data.featured_image_caption || "Image de l'article"}
                className="w-52 h-72 object-cover rounded-md"
              />
            </PrismicLink>
            <div className="text-xl font-semibold mt-4">
              <PrismicRichText field={post.data.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
