'use client';
import React from "react";
import Image from "next/image";
import { GridImage } from "../../types/types";

interface Props {
  items: GridImage[];
}

const PortfolioGrid: React.FC<Props> = ({ items }) => {
  return (
    <section className="w-full  mx-auto px-2 md:px-6 my-16">
      {/* Masonry grid: CSS columns for best cross-browser support */}
      <div
        className="
          columns-1
          sm:columns-2
          lg:columns-3
          gap-5
          [column-gap:1.5rem]
        "
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            className="
              mb-5
              break-inside-avoid
              rounded-2xl
              overflow-hidden
              bg-gradient-to-br from-neon-light-blue to-neon-pink/10
              shadow-[0_6px_24px_0_rgba(30,30,32,0.13)]
              transition-transform transition-shadow duration-400
              hover:scale-[1.022] hover:shadow-2xl
              group
              relative
            "
          >
            <div className="relative w-full h-auto">
              <Image
                src={item.src}
                alt={item.title}
                width={1200}
                height={900}
                className="
                  w-full h-auto
                  object-cover
                  transition-all duration-500
                  group-hover:scale-105
                  group-hover:brightness-105
                  group-hover:contrast-105
                  "
                style={{
                  display: "block",
                  aspectRatio: "auto",
                }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-neon-light-blue glow-pink mb-1">{item.title}</h3>
              <p className="text-base text-neon-pink glow-pink leading-snug">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioGrid;