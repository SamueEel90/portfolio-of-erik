import React from "react";
import ImageScrollerCategory from "./components/ImageScrollerCategory";
import Link from "next/link";

const Galeria: React.FC = () => {
  const categories = [
    { title: "Svadby", images: ["/pictures/placeholder1.jpg", "/pictures/placeholder2.jpg", "/pictures/placeholder3.jpg", "/pictures/placeholder4.jpg", "/pictures/placeholder5.jpg"] },
    { title: "Portréty", images: ["/pictures/placeholder1.jpg", "/pictures/placeholder2.jpg", "/pictures/placeholder3.jpg", "/pictures/placeholder4.jpg", "/pictures/placeholder5.jpg"] },
    { title: "Eventy", images: ["/pictures/placeholder1.jpg", "/pictures/placeholder2.jpg", "/pictures/placeholder3.jpg", "/pictures/placeholder4.jpg", "/pictures/placeholder5.jpg"] },
    { title: "Príroda", images: ["/pictures/placeholder1.jpg", "/pictures/placeholder2.jpg", "/pictures/placeholder3.jpg", "/pictures/placeholder4.jpg", "/pictures/placeholder5.jpg"] },
    { title: "Šport", images: ["/pictures/placeholder1.jpg", "/pictures/placeholder2.jpg", "/pictures/placeholder3.jpg", "/pictures/placeholder4.jpg", "/pictures/placeholder5.jpg"] },
    { title: "Reklamná fotografia", images: ["/pictures/placeholder1.jpg", "/pictures/placeholder2.jpg", "/pictures/placeholder3.jpg", "/pictures/placeholder4.jpg", "/pictures/placeholder5.jpg"] },
  ];

  const slugify = (str: string) =>
    str
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");

  return (
    <section className="sm:max-w-9/12 lg:max-w-8/12 w-full mx-auto px-4 my-5 mt-25">
      <h2 className="text-3xl md:text-5xl font-light text-center text-neon-bronze mb-8">Moja galéria</h2>

      {categories.map((cat, idx) => (
        <div
          key={idx}
        
          className="block mb-8"
        >
          <ImageScrollerCategory title={cat.title} images={cat.images} />
        </div>
      ))}
    </section>
  );
};

export default Galeria;
