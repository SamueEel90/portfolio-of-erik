'use client';
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { ArrowUpRight } from "lucide-react";

interface Service {
  title: string;
  img: string;
}

interface PhotoSectionGridProps {
  services: Service[];
}

const slugify = (str: string) =>
  str
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");

const shortDescriptions: string[] = [
  "Svadobné momenty pre váš album.",
  "Portréty, ktoré vystihnú vašu osobnosť.",
  "Profesionálne reklamné fotografie.",
  "Zachytenie športových emócií.",
  "Eventy a podujatia pod jedným objektívom.",
  "Krása krajiny a prírody v obraze.",
];

// Utility hook to animate grid items on scroll
function useScrollReveal(selector = ".scroll-reveal") {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const items = document.querySelectorAll(selector);
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
        }
      });
    };
    const observer = new window.IntersectionObserver(callback, {
      threshold: 0.25,
    });
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [selector]);
}

const PhotoSectionGrid: React.FC<PhotoSectionGridProps> = ({ services }) => {
  useScrollReveal();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {services.map((service, idx) => (
        <div
          key={idx}
          className={`
            relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-xl group
            scroll-reveal opacity-0 translate-y-8
            transition-all duration-700
            [--stagger-delay:${idx * 0.13}s]
          `}
          style={{
            transitionDelay: `${idx * 0.13 + 0.15}s`
          }}
        >
          <Image
            src={service.img}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-600 group-hover:scale-105"
            priority={idx < 2}
            sizes="(max-width: 768px) 100vw, 50vw"
            draggable={false}
          />

          {/* Dynamic scrolling overlay effect */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10
              bg-gradient-to-b from-black/30 via-black/10 to-black/40
              group-hover:bg-gradient-to-t group-hover:from-black/50 group-hover:via-black/10 group-hover:to-black/10
              transition-all duration-500"
          >
            <h3 className="text-2xl md:text-4xl font-semibold text-light-gray glow-pink drop-shadow-lg mb-2 tracking-tight group-hover:tracking-wider transition-all duration-400">
              {service.title}
            </h3>
            {/* Short placeholder text (dynamic per item) */}
            <p className="text-base md:text-lg text-light-gray  glow-pink font-light opacity-80 mb-2 max-w-xl transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-1">
              {shortDescriptions[idx % shortDescriptions.length]}
            </p>
          </div>

          {/* Scroll overlay shimmer effect */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
            <div className="absolute top-0 left-[-50%] w-2/3 h-full bg-gradient-to-r from-white/40 via-white/0 to-transparent blur-2xl opacity-15 group-hover:opacity-30 animate-shimmer" />
            <style jsx global>{`
              @keyframes shimmer {
                0% { left: -60%; }
                100% { left: 120%; }
              }
              .animate-shimmer {
                animation: shimmer 2.7s linear infinite;
              }
              .scroll-reveal.reveal-visible {
                opacity: 1 !important;
                transform: none !important;
                transition: all 0.8s cubic-bezier(.4,1,.45,1) var(--stagger-delay,0s);
              }
            `}</style>
          </div>

          {/* "Go to Galéria" button with floating effect */}
          <NextLink
            href={`/galeria/${slugify(service.title)}`}
            className="absolute top-6 right-6 z-30 bg-white/50 bg-glow-pink hover:bg-accent-pink/60 text-dark-gray px-4 py-2 rounded-full shadow-lg flex items-center space-x-1 transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-1"
          >
            <span className="text-md font-semibold text-dark-gray">Galéria</span>
            <ArrowUpRight className="w-4 h-4 text-dark-gray" />
          </NextLink>
        </div>
      ))}
    </div>
  );
};

export default PhotoSectionGrid;