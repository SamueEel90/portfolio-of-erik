'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { PortfolioItem } from "../../types/types";

interface Props {
  items: PortfolioItem[];
}

const PortfolioHighlights: React.FC<Props> = ({ items }) => {
  return (
    <section className="w-full mx-auto my-16 px-2">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.12, ease: [0.4, 0, 0.2, 1] }}
        className="text-2xl md:text-4xl font-semibold text-center text-secondary mb-8"
      >
        Moja Práca
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30, scale: 0.97, filter: "blur(2px)" }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              delay: 0.11 + idx * 0.13,
              duration: 0.7,
              ease: [0.4, 0, 0.2, 1],
            }}
            className="group relative w-full aspect-[4/3] md:aspect-[4/3] rounded-md overflow-hidden shadow-[0_8px_40px_0_rgba(30,30,32,0.16)] 
              bg-gradient-to-br from-[rgba(35,39,42,0.27)] to-[rgba(60,65,70,0.19)] border border-[rgba(255,255,255,0.16)] 
              hover:scale-[1.03] transition-transform duration-500 before:content-[''] before:absolute before:inset-0 before:z-10 before:pointer-events-none"
            style={{
              boxShadow: "0 8px 40px 0 rgba(30,30,32,0.16) inset, 0 2px 24px 0 rgba(0,0,0,0.09)",
            }}
          >
            <Link href={item.href} tabIndex={0} aria-label={item.title} className="block w-full h-full">
              {/* Image with animated scale and contrast on hover */}
              <motion.div
                whileHover={{ scale: 1.06, filter: "contrast(1.08) brightness(1.04)" }}
                transition={{ duration: 0.45 }}
                className="w-full h-full"
                style={{ position: "absolute", inset: 0 }}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-all duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={idx < 2}
                  draggable={false}
                />
              </motion.div>
              {/* Glass overlay with animated gradient shimmer */}
              <motion.div
                initial={{ opacity: 0.68 }}
                animate={{ opacity: 0.9 }}
                transition={{ duration: 1.5, delay: 0.25 }}
                className="absolute inset-0 z-10 bg-[rgba(35,39,42,0.28)] backdrop-blur-[6px] pointer-events-none
                  before:absolute before:inset-0 before:bg-gradient-to-tr before:from-transparent before:via-white/10 before:to-transparent
                  before:opacity-60 before:blur-lg before:animate-[shimmer_3s_linear_infinite]"
                style={{
                  maskImage:
                    "radial-gradient(ellipse at 60% 70%,rgba(0,0,0,0.24) 60%,transparent 100%)",
                }}
              />
              {/* Rainy effect SVG, animated drops */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none opacity-15 z-20"
                style={{ mixBlendMode: "screen" }}
              >
                <defs>
                  <radialGradient id={`drop${idx}`} cx="50%" cy="50%" r="0.7">
                    <stop offset="0%" stopColor="#fff" stopOpacity="0.23" />
                    <stop offset="100%" stopColor="#fff" stopOpacity="0" />
                  </radialGradient>
                </defs>
                {Array.from({ length: 9 }).map((_, j) => (
                  <circle
                    key={j}
                    cx={Math.random() * 100 + "%"}
                    cy={Math.random() * 100 + "%"}
                    r={Math.random() * 10 + 8}
                    fill={`url(#drop${idx})`}
                  />
                ))}
              </svg>
              {/* Animated light reflection */}
              <motion.div
                initial={{ x: "-30%" }}
                animate={{ x: "120%" }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 5 + Math.random() * 2,
                  delay: Math.random() * 2,
                  ease: "linear",
                }}
                className="absolute top-0 left-0 w-1/5 h-full bg-gradient-to-r from-white/30 via-white/10 to-transparent blur-2xl opacity-30 pointer-events-none z-20"
              />
              {/* Title */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, delay: 0.2 + idx * 0.11 }}
                className="absolute inset-0 flex items-end justify-start p-6 z-30 pointer-events-none"
              >
                <span
                  className={`text-2xl md:text-3xl lg:text-4xl font-semibold ${item.font ?? ""} 
                    bg-gradient-to-br from-[rgba(35,39,42,0.38)] to-[rgba(80,90,100,0.14)] backdrop-blur-md rounded-xl px-4 py-2 
                    text-light-gray glow-pink shadow-xl border border-white/10`}
                  style={{
                    textShadow: "0 2px 18px rgba(0,0,0,0.23)",
                    letterSpacing: ".02em",
                  }}
                >
                  {item.title}
                </span>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </div>
      <style jsx global>{`
        @keyframes shimmer {
          0% { transform: translateX(-50%);}
          100% { transform: translateX(100%);}
        }
      `}</style>
    </section>
  );
};

export default PortfolioHighlights;