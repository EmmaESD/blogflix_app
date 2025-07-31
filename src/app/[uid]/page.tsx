// ./src/app/blog/[uid]/page.tsx

import { Metadata } from "next";
import { notFound } from "next/navigation";

import { PrismicRichText, SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { PrismicNextImage } from "@prismicio/next";
import { RichText } from "@/app/components/RichText";
import { PostCard } from "@/app/components/PostCard";

type Params = { uid: string };

export async function generateMetadata(
  props: { params: Promise<{ uid: string }> }
): Promise<Metadata> {
  const params = await props.params;
  const client = createClient();
  const page = await client
    .getByUID("blog_post", params.uid)
    .catch(() => notFound());

  return {
    title: prismic.asText(page.data.title),
    description: page.data.meta_description,
    openGraph: {
      title: page.data.meta_title || undefined,
      images: [
        {
          url: page.data.meta_image.url || "",
        },
      ],
    },
  };
}

export default async function Page(
  props: { params: Promise<{ uid: string }> }
) {
  const params = await props.params;
  const client = createClient();

  const page = await client
    .getByUID("blog_post", params.uid)
    .catch(() => notFound());

  const posts = await client.getAllByType("blog_post", {
    predicates: [prismic.filter.not("my.blog_post.uid", params.uid)],
    orderings: [
      { field: "my.blog_post.publication_date", direction: "desc" },
      { field: "document.first_publication_date", direction: "desc" },
    ],
    limit: 2,
  });

  const { slices, title, publication_date, description, featured_image } =
    page.data;

  return (
    <div className="flex flex-col gap-12 w-full items-center">
      <section className="flex flex-col gap-12 items-center">
        <div className="flex flex-col items-center gap-3 w-full">
          <div className="flex flex-col gap-6 items-center">
            <p className="opacity-75 border-b-2 w-min pb-1">
              {new Date(publication_date || "").toLocaleDateString()}
            </p>
            <div className="text-center font-bold text-3xl">
              <PrismicRichText field={title} />
            </div>
          </div>
          <div className="text-center">
            <RichText field={description} />
          </div>
        </div>
        <PrismicNextImage
          field={featured_image}
          sizes="100vw"
          className="w-full max-w-3xl max-h-96 rounded-xl object-cover"
        />
        <SliceZone slices={slices} components={components} />
      </section>

      <h2 className="font-bold text-3xl">Recommended Posts</h2>
      <section className="flex justify-between w-full px-10">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </section>
    </div>
  );
}

export async function generateStaticParams() {
  const client = createClient();

  const pages = await client.getAllByType("blog_post");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
