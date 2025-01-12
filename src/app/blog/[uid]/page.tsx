// ./src/app/blog/page.tsx
import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

export default async function BlogPage() {
  const client = createClient();

  // Récupérer tous les articles de blog
  const posts = await client.getAllByType("blog_post");

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Tous les Articles</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="card">
            {/* Afficher l'image du post */}
            <img
              src={post.data.featured_image.url || ""}
              alt={post.data.featured_image_caption || "Image de l'article"}
              className="w-full h-48 object-cover rounded-md"
            />
            <h2 className="text-xl font-semibold mt-4">
              <PrismicRichText field={post.data.title} />
            </h2>
            <PrismicNextLink
              field={{
                link_type: "Document",
                uid: post.uid,
                id: post.id,
                type: post.type,
                tags: post.tags,
                lang: post.lang,
              }}
              className="text-blue-500 mt-2"
            >
              Lire l'article
            </PrismicNextLink>
          </div>
        ))}
      </div>
    </div>
  );
}
