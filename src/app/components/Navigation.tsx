import { createClient } from "@/prismicio";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Link from "next/link";

const Navigation = async () => {
  const client = createClient();
  const menu = await client.getSingle("navigation");

  return (
    <nav className="text-white shadow-lg">
      <div className="container flex items-center py-4">
        <div className="flex items-center mr-8">
          <Link href="/blog">Blog</Link>
        <div className="flex space-x-6 text-lg font-medium">
          <Link href="/contact">Contact</Link>
        </div>
      </div>
      </div>
    </nav>
  );
};

export default Navigation;
