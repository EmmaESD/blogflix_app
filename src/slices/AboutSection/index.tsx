import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { JSX } from "react";

/**
 * Props for `AboutSection`.
 */
export type AboutSectionProps = SliceComponentProps<Content.AboutSectionSlice>;

/**
 * Component for "AboutSection" Slices.
 */
const AboutSection = ({ slice }: AboutSectionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex gap-4"
    >
      <div className="flex flex-col gap-4 max-w-3xl w-full">
        <PrismicRichText field={slice.primary.title} />
        <PrismicRichText field={slice.primary.content} />
      </div>
      <div className="bg-blue-500 text-white rounded-lg p-2">
        <PrismicNextLink field={slice.primary.button_link} />
      </div>
    </section>
  );
};

export default AboutSection;
