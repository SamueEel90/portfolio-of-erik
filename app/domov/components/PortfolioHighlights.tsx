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
    <section className="w-full mx-auto my-16">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.12, ease: [0.4, 0, 0.2, 1] }}
        className="text-2xl md:text-4xl font-semibold text-center text-neon-bronze mb-8"
      >
        Moja Práca
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            custom={idx}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            
            className="group relative w-full aspect-[4/3] rounded-md overflow-hidden shadow-xl border border-white/10
              bg-gradient-to-br from-secondary/10 via-white/10 to-black/10 transition-transform duration-500 hover:scale-[1.035]
              before:content-[''] before:absolute before:inset-0 before:z-10 before:pointer-events-none"
          >
            <Link href={item.href} tabIndex={0} aria-label={item.title} className="block w-full h-full">
              {/* Animated Image */}
              <motion.div
                whileHover={{ scale: 1.07, filter: "contrast(1.10) brightness(1.10)" }}
                transition={{ duration: 0.35 }}
                className="w-full h-full"
                style={{ position: "absolute", inset: 0 }}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={idx < 2}
                  draggable={false}
                />
                {/* Shine on hover */}
                <motion.div
                 
                  animate="animate"
                  className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/60 to-transparent blur-2xl opacity-30 pointer-events-none z-20"
                  style={{ mixBlendMode: "lighten" }}
                />
                {/* Subtle animated border light sweep */}
                <span className="pointer-events-none absolute top-0 left-0 w-full h-[6px] z-20 overflow-hidden">
                  <span className="absolute block h-full w-1/3 min-w-[80px] bg-gradient-to-r from-transparent via-pink-300 to-transparent blur-md opacity-80 animate-border-light-fast" />
                </span>
              </motion.div>
              {/* Glass overlay with animated shimmer */}
              <motion.div
                initial={{ opacity: 0.6 }}
                animate={{ opacity: 0.92 }}
                transition={{ duration: 1.5, delay: 0.18 }}
                className="absolute inset-0 z-10 bg-black/20 backdrop-blur-[4px] pointer-events-none"
                style={{
                  maskImage:
                    "radial-gradient(ellipse at 65% 70%,rgba(0,0,0,0.24) 60%,transparent 100%)",
                }}
              />

              {/* Rainy effect SVG, animated drops */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none opacity-10 z-20"
                style={{ mixBlendMode: "screen" }}
              >
                <defs>
                  <radialGradient id={`drop${idx}`} cx="50%" cy="50%" r="0.7">
                    <stop offset="0%" stopColor="#fff" stopOpacity="0.19" />
                    <stop offset="100%" stopColor="#fff" stopOpacity="0" />
                  </radialGradient>
                </defs>
                {Array.from({ length: 7 }).map((_, j) => (
                  <circle
                    key={j}
                    cx={Math.random() * 100 + "%"}
                    cy={Math.random() * 100 + "%"}
                    r={Math.random() * 10 + 8}
                    fill={`url(#drop${idx})`}
                  />
                ))}
              </svg>

              {/* Animated floating "pulse" light */}
              <motion.span
                className="absolute top-8 right-8 w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 via-white/70 to-purple-400 blur-xl opacity-40 pointer-events-none z-30"
                animate={{
                  scale: [1, 1.18, 1],
                  opacity: [0.2, 0.5, 0.2]
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 3.7 + idx,
                  delay: idx * 0.2
                }}
              />

              {/* Title */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, delay: 0.22 + idx * 0.11 }}
                className="absolute inset-0 flex items-end justify-start p-6 z-30 pointer-events-none"
              >
                <span
                  className={`text-2xl md:text-4xl lg:text-5xl font-semibold ${item.font ?? ""} 
                    bg-gradient-to-br from-black/60 via-slate-700/40 to-white/0 backdrop-blur-md rounded-xl px-4 py-2 
                    text-white glow-orange shadow-xl`}
                  style={{
                    textShadow: "0 2px 18px rgba(0,0,0,0.21)",
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
        .animate-border-light-fast {
          top: 0;
          left: -35%;
          height: 100%;
          width: 44%;
          animation: borderLightTravel 3.85s cubic-bezier(.64,.12,.36,1.07) infinite;
        }
        @keyframes borderLightTravel {
          0% { left: -40%; opacity: 0; filter: blur(11px);}
          15% { opacity: 1; filter: blur(7px);}
          60% { left: 90%; opacity: 1; filter: blur(8px);}
          80% { opacity: 0.7; filter: blur(12px);}
          100% { left: 130%; opacity: 0; filter: blur(13px);}
        }
      `}</style>
    </section>
  );
};

export default PortfolioHighlights;