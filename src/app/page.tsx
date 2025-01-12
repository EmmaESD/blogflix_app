import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { PostCard } from "./components/PostCard";
import { components } from "@/slices";

export default async function Index() {
  const client = createClient();

  const home = await client.getSingle("home");

  const latestPosts = await client.getAllByType("blog_post", {
    orderings: [{ field: "my.blog_post.publication_date", direction: "desc" }],
    limit: 5,
  });

  const allPosts = await client.getAllByType("blog_post");
  const randomPosts = allPosts.sort(() => 0.5 - Math.random()).slice(0, 5);

  return (
    <div>
      <SliceZone slices={home.data.slices} components={components} />

      <h2 className="text-3xl font-bold mt-12 mb-6">Derniers Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {latestPosts.slice(0, 3).map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      <h2 className="text-3xl font-bold mt-12 mb-6 ">
        Susceptible de vous plaire
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {randomPosts.slice(0, 3).map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
