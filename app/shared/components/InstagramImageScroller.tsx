'use client';
import React from "react";
import Image from "next/image";

interface ImageItem {
  src: string;
  title: string;
  description: string;
  instagramUrl: string; 
}

const ImageScrollerHomepage: React.FC = () => {
  const images: ImageItem[] = [
    { src: "/pictures/placeholder1.jpg", title: "Lorem ipsum dolor", description: "", instagramUrl: "https://instagram.com/youraccount" },
    { src: "/pictures/placeholder2.jpg", title: "Sit amet", description: "", instagramUrl: "https://instagram.com/youraccount" },
    { src: "/pictures/placeholder3.jpg", title: "Consectetur elit", description: "", instagramUrl: "https://instagram.com/youraccount" },
    { src: "/pictures/placeholder4.jpg", title: "Dolor sit amet", description: "", instagramUrl: "https://instagram.com/youraccount" },
    { src: "/pictures/placeholder5.jpg", title: "Adipiscing elit", description: "", instagramUrl: "https://instagram.com/youraccount" },
    { src: "/pictures/placeholder6.jpg", title: "Tempor incididunt", description: "", instagramUrl: "https://instagram.com/youraccount" },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto py-8">
      <h2 className="text-2xl md:text-4xl  mb-6 text-center text-primary">Sleduj ma aj na Instagrame</h2>

      {/* Horizontal scroll container */}
      <div className="flex overflow-x-auto overflow-y-hidden space-x-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-light-gray scrollbar-track-gray-100">
        {images.map((image, idx) => (
          <a
            key={idx}
            href={image.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-none w-72 h-72 snap-start rounded-md shadow-md overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <div className="relative w-full h-64">
              <Image
                src={image.src}
                alt={image.title}
                width={288}
                height={288}
                className="object-cover"
              />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ImageScrollerHomepage;
