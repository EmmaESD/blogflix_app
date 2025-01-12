import { createClient } from "@/prismicio";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

const Navigation = async () => {
  const client = createClient();
  const menu = await client.getSingle("navigation");

  return (
    <nav className="text-white shadow-lg">
      <div className="container mx-auto flex items-center py-4 px-6">
        <div className="flex items-center mr-8">
          {menu.data.icon.url && (
            <PrismicNextImage field={menu.data.icon} alt="" width={64} />
          )}
        </div>

        <div className="flex space-x-6 text-lg font-medium">
          {menu.data.link.map((link) => (
            <PrismicNextLink key={link.key} field={link} />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
