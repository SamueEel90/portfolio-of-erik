'use client';
import React from "react";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

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
    <section className="w-full max-w-6xl mx-auto py-10">
      <h2 className="text-2xl md:text-4xl mb-8 text-center font-bold tracking-tight text-secondary">
        Sleduj ma aj na Instagrame
      </h2>

      {/* Horizontal scroll container */}
      <div className="flex overflow-x-auto overflow-y-hidden space-x-8 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-accent-pink scrollbar-track-gray-100 py-2 px-2">
        {images.map((image, idx) => (
          <a
            key={idx}
            href={image.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex-none w-72 h-80 snap-start rounded-xl shadow-xl overflow-hidden transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
            style={{
              background: "linear-gradient(120deg,#f8fafc 40%,#f9a8d4 100%)"
            }}
          >
            {/* Image with overlay */}
            <div className="relative w-full h-72">
              <Image
                src={image.src}
                alt={image.title}
                width={288}
                height={288}
                className="object-cover w-full h-full rounded-xl transition-all duration-500 group-hover:brightness-110 group-hover:scale-105"
                loading="lazy"
              />
              {/* Overlay gradient and icon */}
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-black/10 to-transparent opacity-70 pointer-events-none transition group-hover:opacity-80" />
              <div className="absolute bottom-4 right-4 flex items-center justify-center z-10">
                <span className="bg-white/80 text-pink-600 rounded-full p-3 shadow-lg transition group-hover:bg-pink-600 group-hover:text-white">
                  <FaInstagram className="w-6 h-6" />
                </span>
              </div>
              {/* Animated moving highlight */}
              <span className="pointer-events-none absolute top-0 left-0 w-full h-full z-20">
                <span className="absolute block h-2 w-1/2 min-w-[80px] bg-gradient-to-r from-transparent via-pink-300 to-transparent blur-md opacity-60 animate-img-light-travel" />
              </span>
              <style jsx>{`
                .animate-img-light-travel {
                  top: 22%;
                  left: -50%;
                  animation: imgLightTravel 3.5s cubic-bezier(.64,.12,.36,1.07) infinite;
                }
                @keyframes imgLightTravel {
                  0% { left: -50%; opacity: 0; filter: blur(24px);}
                  10% { opacity: 1; filter: blur(12px);}
                  64% { left: 88%; opacity: 0.9; filter: blur(8px);}
                  80% { opacity: 0.7; filter: blur(14px);}
                  100% { left: 120%; opacity: 0; filter: blur(24px);}
                }
              `}</style>
            </div>
            {/* Title overlay */}
            <div className="absolute bottom-0 left-0 w-full px-5 pb-5 pt-8 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
              <div className="flex items-center space-x-2">
                <h3 className="text-lg font-semibold text-white drop-shadow">{image.title}</h3>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ImageScrollerHomepage;