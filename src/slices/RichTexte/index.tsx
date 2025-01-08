// ./src/slices/RichText/index.tsx

import { RichText } from "@/app/components/RichText";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

type RichTextProps = SliceComponentProps<Content.RichTexteSlice>;

export default function RichTextSlice({ slice }: RichTextProps) {
  return (
    <section className="flex flex-col gap-2">
      <PrismicRichText field={slice.primary.text} />
    </section>
  );
}
