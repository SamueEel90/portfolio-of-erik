'use client';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import GalleryArrow from "../../shared/ui/GalleryArrow";

interface Props {
  title: string;
  images: string[];
}

const ImageScrollerCategory: React.FC<Props> = ({ title, images }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="relative w-full my-10">
      <h3 className="text-2xl md:text-4xl font-light text-center mb-4">{title}</h3>

      <div className="relative w-full mx-auto">
        {/* Image container with 16:9 ratio */}
        <div className="relative w-full aspect-video rounded-xl overflow-hidden">
          <Image
            src={images[currentIndex]}
            alt={`${title} ${currentIndex + 1}`}
            fill
            className="object-cover rounded-xl transition-all duration-500"
          />
        </div>

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/70 p-2 rounded-full hover:bg-black transition"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/70 p-2 rounded-full hover:bg-black transition"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* "Go to Gallery" button (top-right corner) */}
      <GalleryArrow />

        {/* Dots */}
        <div className="flex justify-center mt-4 space-x-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === idx ? "bg-white" : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageScrollerCategory;
