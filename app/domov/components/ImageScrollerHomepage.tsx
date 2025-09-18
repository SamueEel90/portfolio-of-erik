'use client';
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageItem {
  src: string;
  title: string;
  description: string;
}

const images: ImageItem[] = [
  { src: "/pictures/placeholder1.jpg", title: "Lorem ipsum dolor", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { src: "/pictures/placeholder2.jpg", title: "Sit amet", description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { src: "/pictures/placeholder3.jpg", title: "Consectetur elit", description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris." },
  { src: "/pictures/placeholder4.jpg", title: "Dolor sit amet", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum." },
  { src: "/pictures/placeholder5.jpg", title: "Adipiscing elit", description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia." },
  { src: "/pictures/placeholder6.jpg", title: "Tempor incididunt", description: "Nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet." },
];

const transitionTime = 900;

const ImageScrollerHomepage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const prevIndex = (currentIndex - 1 + images.length) % images.length;
  const nextIndex = (currentIndex + 1) % images.length;

  // Auto-slide
  useEffect(() => {
    timeoutRef.current = setTimeout(() => handleSlide("next"), 3400);
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex]);

  function handleSlide(direction: "next" | "prev") {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => setAnimating(false), transitionTime);
    setCurrentIndex((prev) =>
      direction === "next"
        ? (prev + 1) % images.length
        : (prev - 1 + images.length) % images.length
    );
  }

  const handleDotClick = (idx: number) => {
    if (idx === currentIndex || animating) return;
    setAnimating(true);
    setTimeout(() => setAnimating(false), transitionTime);
    setCurrentIndex(idx);
  };

  return (
    <section className="relative w-full max-w-6xl mx-auto py-8 overflow-visible select-none">
      {/* Slider */}
      <div className="relative w-full aspect-[16/9] md:aspect-[16/9] overflow-visible">
        {/* Slides */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          {/* Prev Slide Preview (left) */}
          <div
            className={`absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 scale-90 opacity-0 md:opacity-40 md:scale-100 md:translate-x-[-60%] z-10 transition-all duration-700`}
            style={{ width: "65%", height: "85%" }}
            aria-hidden="true"
          >
            <Image
              src={images[prevIndex].src}
              alt={images[prevIndex].title}
              fill
              className="object-cover rounded-2xl shadow-lg blur-[2px] brightness-75"
              draggable={false}
            />
          </div>
          {/* Next Slide Preview (right) */}
          <div
            className={`absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 scale-90 opacity-0 md:opacity-40 md:scale-100 md:translate-x-[60%] z-10 transition-all duration-700`}
            style={{ width: "65%", height: "85%" }}
            aria-hidden="true"
          >
            <Image
              src={images[nextIndex].src}
              alt={images[nextIndex].title}
              fill
              className="object-cover rounded-2xl shadow-lg blur-[2px] brightness-75"
              draggable={false}
            />
          </div>
        </div>
        {/* Main Slide */}
        <div className="relative w-full h-full z-20 overflow-visible">
          <div className="relative w-full h-full shadow-2xl rounded-2xl overflow-hidden group">
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].title}
              fill
              className={`object-cover transition-transform duration-[${transitionTime}ms] ease-[cubic-bezier(.61,-0.01,.36,1.08)] group-hover:scale-[1.04]`}
              draggable={false}
              priority
            />
            {/* Modern overlay glass and gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/60 pointer-events-none rounded-2xl" />
            {/* Animated shimmer effect */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-0 left-[-40%] w-1/2 h-full bg-gradient-to-r from-white/20 via-white/5 to-transparent blur-2xl opacity-30 animate-shimmer" />
            </div>
            <style jsx global>{`
              @keyframes shimmer {
                0% { left: -60%; }
                100% { left: 120%; }
              }
              .animate-shimmer {
                animation: shimmer 2.7s linear infinite;
              }
            `}</style>
            {/* Title & Description */}
            <div className="absolute left-0 right-0 bottom-0 p-6 pb-8 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-b-2xl z-10">
              <h3 className="text-2xl md:text-3xl font-semibold text-white drop-shadow-md mb-1 tracking-tight">
                {images[currentIndex].title}
              </h3>
              <p className="text-base md:text-lg text-white/90 drop-shadow-sm max-w-2xl">{images[currentIndex].description}</p>
            </div>
          </div>
        </div>
        {/* Left Arrow */}
        <button
          onClick={() => handleSlide("prev")}
          className="absolute left-2 md:left-5 top-1/2 -translate-y-1/2 z-30 bg-black/60 hover:bg-black/90 transition p-2 rounded-full shadow-lg border border-white/10"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-7 h-7 text-white" />
        </button>
        {/* Right Arrow */}
        <button
          onClick={() => handleSlide("next")}
          className="absolute right-2 md:right-5 top-1/2 -translate-y-1/2 z-30 bg-black/60 hover:bg-black/90 transition p-2 rounded-full shadow-lg border border-white/10"
          aria-label="Next image"
        >
          <ChevronRight className="w-7 h-7 text-white" />
        </button>
      </div>
      {/* Dots */}
      <div className="flex justify-center mt-7 gap-2 md:gap-3">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleDotClick(idx)}
            aria-label={`Show image ${idx + 1}`}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full border-2 border-white/70 transition
              ${currentIndex === idx ? "bg-white shadow-lg scale-125" : "bg-white/30"}
              `}
            disabled={animating}
          />
        ))}
      </div>
    </section>
  );
};

export default ImageScrollerHomepage;