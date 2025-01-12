// ./src/components/PostCard.tsx

import { PrismicNextImage } from "@prismicio/next";
import { PrismicLink, PrismicRichText, PrismicText } from "@prismicio/react";
import { Content } from "@prismicio/client";
import { JSX } from "react";

export const PostCard = ({
  post,
}: {
  post: Content.BlogPostDocument;
}): JSX.Element => {
  const { data } = post;

  return (
    <PrismicLink document={post} className="grid grid-cols-2 gap-10">
      <PrismicNextImage
        field={data.featured_image}
        className="w-full rounded-xl object-fill"
      />
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <p className="text-sm opacity-75 text-slate-700 border-b-2 w-min pb-1">
            {new Date(data?.publication_date || "").toLocaleDateString()}
          </p>
          <div className="hover:opacity-75 duration-300 ease-in-out transition-all">
            <div className="font-bold text-md">
              <PrismicRichText field={data.title} />
            </div>
          </div>
        </div>
        <PrismicRichText field={data.description} />
      </div>
    </PrismicLink>
  );
};
