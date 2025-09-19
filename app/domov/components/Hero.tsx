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
    <div className="w-full ">
      <div className="relative w-full aspect-[9/16] sm:aspect-video  overflow-hidden">
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

        {/* Enhanced Glassy/Rainy Overlay */}
        <div
          className="
            absolute inset-0
            pointer-events-none
            z-10
            bg-[rgba(35,39,42,0.32)]
            backdrop-blur-[18px]
            [mask-image:radial-gradient(ellipse_farthest-corner_at_50%_60%,rgba(0,0,0,0.18)_60%,transparent_100%)]
            transition-all
            duration-500
          "
          style={{
            boxShadow: "0 8px 40px 0 rgba(30,30,32,0.18) inset",
            mixBlendMode: "lighten",
          }}
        />


        {/* MOBILE/MD: Centered Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 1.07 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.3, ease: "easeOut" }}
          className="
            absolute md:hidden
            top-1/2 left-1/2 z-30
            -translate-x-1/2 -translate-y-1/2
            bg-[rgba(35,39,42,0.48)]
            backdrop-blur-[24px]
            rounded-2xl shadow-2xl
            flex flex-col items-center justify-center
            px-4 py-6 w-[90vw] max-w-md
            border border-[rgba(255,255,255,0.22)]
          "
        >
          <h1 className="text-7xl sm:text-7xl font-light text-neon-bronze glow-bronze mb-2 tracking-tight text-center">
            {title}
          </h1>
          <h2 className="text-5xl sm:text-xl font-light text-neon-light-blue glow-neon-light-blue text-center">
            {subtitle}
          </h2>
          <div className="mt-4 max-w-xs mx-auto">
            <span className="block text-xl font-normal text-neon-pink glow-neon-gray opacity-80 text-center">
              Short intro or bio goes here.
            </span>
          </div>
        </motion.div>

        {/* MD+ SCREENS: Side-by-side cards */}
        <div className="hidden md:flex absolute top-0 inset-0 items-center justify-center space-x-8 px-8 z-30">
          {/* Left: Title + Subtitle */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
            className="flex flex-col items-start justify-center bg-[rgba(35,39,42,0.18)] backdrop-blur-md rounded-xl shadow-2xl px-5 py-15 max-w-2xl w-full"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="text-4xl md:text-8xl  text-neon-bronze glow-bronze mb-3 text-left"
            >
              {title}
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="text-lg md:text-6xl font-light text-neon-light-blue glow-amber text-left"
            >
              {subtitle}
            </motion.h2>
          </motion.div>

          {/* Right: Placeholder for short intro text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 1, ease: "easeOut" }}
            className="flex flex-col items-start justify-center bg-[rgba(35,39,42,0.18)] backdrop-blur-md rounded-2xl shadow-2xl px-10 py-10 max-w-md w-full "
          >
            <span className="text-base md:text-2xl font-normal text-neon-pink glow-orange opacity-90">
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