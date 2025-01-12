import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components } from "../slices";

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();

  const home = await client.getSingle("home");

  return {
    description: home.data.meta_description,
    openGraph: {
      title: home.data.meta_title ?? undefined,
      images: [{ url: home.data.meta_image.url ?? "" }],
    },
  };
}

export default async function Index() {
  const client = createClient();

  const home = await client.getSingle("home");
  return (
    <div>
      <SliceZone slices={home.data.slices} components={components} />
    </div>
  );
}
