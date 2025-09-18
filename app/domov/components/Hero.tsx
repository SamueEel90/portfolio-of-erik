"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface HeroProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageSrcMobile?: string;
  href?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  imageSrc,
  imageSrcMobile,
  href,
}) => {
  const content = (
    <div className="w-full">
      <div className="relative w-full aspect-[9/16] sm:aspect-video font-monotype-corsiva overflow-hidden">
        {/* Responsive Background Image */}
        <picture>
          {imageSrcMobile && (
            <source media="(max-width: 640px)" srcSet={imageSrcMobile} />
          )}
          <Image
            src={imageSrc}
            alt="Hero Image"
            width={1920}
            height={580}
            className="object-cover"
            priority
          />
        </picture>

        {/* Glassy/Rainy Overlay */}
        <div
          className="
            absolute inset-0
            pointer-events-none
            z-10
            bg-[rgba(35,39,42,0.25)]
            backdrop-blur-[6px]
            [mask-image:radial-gradient(ellipse_farthest-corner_at_50%_60%,rgba(0,0,0,0.2)_80%,transparent_100%)]
          "
          style={{
            boxShadow: "0 8px 40px 0 rgba(30,30,32,0.16) inset",
            backgroundImage: `
              repeating-linear-gradient(
                120deg,
                rgba(255,255,255,0.09) 0px,
                rgba(255,255,255,0.13) 2px,
                transparent 4px, 
                transparent 14px
              )
            `,
            mixBlendMode: "lighten",
          }}
        />

        {/* Rain-drops Overlay */}
        <svg
          className="absolute inset-0 w-full h-full z-20 pointer-events-none opacity-30"
          style={{ mixBlendMode: "screen" }}
        >
          <defs>
            <radialGradient id="drop" cx="50%" cy="50%" r="0.6">
              <stop offset="0%" stopColor="#fff" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#fff" stopOpacity="0" />
            </radialGradient>
          </defs>
          {Array.from({ length: 16 }).map((_, i) => (
            <circle
              key={i}
              cx={Math.random() * 100 + "%"}
              cy={Math.random() * 100 + "%"}
              r={Math.random() * 10 + 5}
              fill="url(#drop)"
            />
          ))}
        </svg>

        {/* MOBILE/MD: Centered Glass Card, Smaller */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 1.07 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.3, ease: "easeOut" }}
          className="
            absolute md:hidden
            top-1/2 left-1/2 z-30
            -translate-x-1/2 -translate-y-1/2
            bg-[rgba(35,39,42,0.48)]
            backdrop-blur-[12px]
            rounded-2xl shadow-2xl
            flex flex-col items-center justify-center
            px-4 py-6 w-[90vw] max-w-md
            border border-[rgba(255,255,255,0.22)]
          "
        >
          <h1 className="text-3xl sm:text-4xl font-light text-[var(--color-light-gray)] glow-blue mb-2 tracking-tight text-center">
            {title}
          </h1>
          <h2 className="text-lg sm:text-xl font-light glow-light-blue text-gray-200 text-center">
            {subtitle}
          </h2>
          {/* Placeholder for short intro */}
          <div className="mt-4 max-w-xs mx-auto">
            <span className="block text-base font-normal text-[var(--color-light-gray)] opacity-80 text-center">
              {/* TODO: Replace or fill with a real introduction */}
              Short intro or bio goes here.
            </span>
          </div>
        </motion.div>

        {/* MD+ SCREENS: Side-by-side cards */}
        <div className="hidden md:flex absolute inset-0 items-center justify-center space-x-8 px-8 z-30">
          {/* Left: Title + Subtitle */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
            className="flex flex-col items-start justify-center bg-[rgba(35,39,42,0.48)] backdrop-blur-lg rounded-2xl shadow-2xl px-10 py-10 max-w-xl w-full border border-[rgba(255,255,255,0.13)]"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="text-4xl md:text-5xl xl:text-6xl font-light text-[var(--color-light-gray)] glow-blue mb-3 tracking-tight text-left"
            >
              {title}
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="text-lg md:text-2xl font-light glow-light-blue text-gray-200 glow-pink text-left"
            >
              {subtitle}
            </motion.h2>
          </motion.div>

          {/* Right: Placeholder for short intro text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 1, ease: "easeOut" }}
            className="flex flex-col items-start justify-center bg-[rgba(35,39,42,0.48)] backdrop-blur-lg rounded-2xl shadow-2xl px-10 py-10 max-w-md w-full border border-[rgba(255,255,255,0.18)]"
          >
            <span className="text-base md:text-lg font-normal text-accent-pink glow-pink opacity-90">
              {/* TODO: Replace or fill with a real introduction */}
              Short intro or bio goes here. You can add a brief description about yourself, your work, or your philosophy as a photographer.
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full mx-auto">
      {href ? <Link href={href}>{content}</Link> : content}
    </div>
  );
};

export default Hero;