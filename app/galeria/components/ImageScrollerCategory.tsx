'use client';
import React, { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import GalleryArrow from "../../shared/ui/GalleryArrow";

interface Props {
  title: string;
  images: string[];
}

const ImageScrollerCategory: React.FC<Props> = ({ title, images }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const transitioning = useRef(false);

  const prevSlide = () => {
    if (transitioning.current) return;
    transitioning.current = true;
    setTimeout(() => (transitioning.current = false), 600);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    if (transitioning.current) return;
    transitioning.current = true;
    setTimeout(() => (transitioning.current = false), 600);
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Swipe support
  const touchStart = useRef<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(delta) > 50) {
      delta > 0 ? prevSlide() : nextSlide();
    }
    touchStart.current = null;
  };

  return (
    <section className="relative w-full my-10">
      <h3 className="text-2xl md:text-4xl font-light text-light-gray glow-pink text-center mb-4 tracking-tight">{title}</h3>

      <div className="relative w-full  mx-auto">
        {/* Image container with 16:9 ratio, advanced effects */}
        <div
          className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl group"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Animated overlays */}
          <div className="absolute inset-0 z-10 pointer-events-none">
            {/* Gradient bottom glass */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/15 to-black/60" />
            {/* Shimmer light */}
            <div className="absolute top-0 left-[-50%] w-1/2 h-full bg-gradient-to-r from-white/20 via-white/0 to-transparent blur-2xl opacity-20 animate-shimmer" />
            <style jsx global>{`
              @keyframes shimmer {
                0% { left: -60%; }
                100% { left: 120%; }
              }
              .animate-shimmer {
                animation: shimmer 3.8s linear infinite;
              }
            `}</style>
          </div>
          {/* Main image */}
          <Image
            src={images[currentIndex]}
            alt={`${title} ${currentIndex + 1}`}
            fill
            className="object-cover rounded-2xl transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
            priority
            draggable={false}
            style={{ boxShadow: "0 8px 32px 0 rgba(0,0,0,.20)" }}
          />

          {/* Floating GalleryArrow */}
          <div className="absolute top-5 right-5 z-30">
            <GalleryArrow />
          </div>

          {/* Animated border light */}
          <span className="pointer-events-none absolute -inset-1 rounded-2xl z-20 overflow-hidden">
            <span className="absolute block w-1/3 h-2 bg-gradient-to-r from-pink-300/0 via-secondary to-pink-200/0 blur-lg opacity-80 animate-border-light-slow" />
            <style jsx>{`
              .animate-border-light-slow {
                top: -6px;
                left: -35%;
                height: 8px;
                width: 48%;
                animation: borderLightTravel 7s cubic-bezier(.64,.12,.36,1.07) infinite;
              }
              @keyframes borderLightTravel {
                0% { left: -40%; opacity: 0; filter: blur(12px);}
                15% { opacity: 1; filter: blur(8px);}
                60% { left: 90%; opacity: 1; filter: blur(8px);}
                80% { opacity: 0.7; filter: blur(12px);}
                100% { left: 130%; opacity: 0; filter: blur(16px);}
              }
            `}</style>
          </span>

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-30 bg-black/70 hover:bg-black/90 transition border-white/10 border p-2 rounded-full shadow-lg"
            aria-label="Previous"
          >
            <ChevronLeft className="w-7 h-7 text-secondary" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-30 bg-black/70 hover:bg-black/90 transition border-white/10 border p-2 rounded-full shadow-lg"
            aria-label="Next"
          >
            <ChevronRight className="w-7 h-7 text-secondary" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-5 space-x-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to image ${idx + 1}`}
              className={`w-3 h-3 md:w-4 md:h-4 rounded-full border-2 border-white/60 transition
                ${currentIndex === idx ? "bg-white shadow-lg scale-125" : "bg-white/30"}
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageScrollerCategory;