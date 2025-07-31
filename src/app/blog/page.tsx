import { createClient } from "@/prismicio";

import { PrismicLink, PrismicRichText } from "@prismicio/react";

export default async function BlogPage() {
  const client = createClient();

  const posts = await client.getAllByType("blog_post");

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Tous les Articles</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="card">
            <PrismicLink
              document={post}
              className="hover:opacity-75 duration-300 ease-in-out transition-all"
            >
              <img
                src={post.data.featured_image.url || ""}
                alt={post.data.featured_image.alt || "Image de l'article"}
                className="w-52 h-72 object-cover rounded-md mt-8"
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
