import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { JSX } from "react";

export type AboutSectionProps = SliceComponentProps<Content.AboutSectionSlice>;

const AboutSection = ({ slice }: AboutSectionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex items-center"
    >
      <div className="flex flex-col">
        <div className="text-3xl font-bold">
          <PrismicRichText field={slice.primary.title} />
        </div>
        <div>
          <PrismicRichText field={slice.primary.content} />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
