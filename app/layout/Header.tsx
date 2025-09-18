'use client';
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll <= 0) setIsVisible(true);
      else if (currentScroll > 0 && currentScroll < window.innerHeight) setIsVisible(true);
      else setIsVisible(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        w-full fixed top-0 left-0 z-50 transition-transform duration-500
        ${isVisible ? "translate-y-0" : "-translate-y-full"}
        bg-[var(--color-dark-gray)]/0 backdrop-blur-xl border-b]
      `}
      style={{ WebkitBackdropFilter: "blur(16px)", backdropFilter: "blur(16px)" }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-12 py-3">
        {/* Logo */}
        <a
          className="md:text-4xl text-3xl tracking-tight text-light-blue glow-light-blue cursor-pointer select-none"
          href="/"
          aria-label="Erik Gunár Homepage"
          style={{
            letterSpacing: "-0.03em",
            lineHeight: 1,
          }}
        >
          Erik Gunár
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-lg font-normal">
          <a
            href="/o-mne"
            className="relative px-2 py-1 text-bronze transition-colors duration-200 hover:text-[var(--color-accent-pink)]"
          >
            O mne
            <span className="absolute left-1/2 -bottom-0.5 w-0 h-0.5 bg-[var(--color-accent-pink)] rounded transition-all duration-300 group-hover:w-1/2 group-hover:left-0"></span>
          </a>
          <a
            href="/fotenie"
            className="relative px-2 py-1 text-secondary transition-colors duration-200 hover:text-[var(--color-accent-pink)]"
          >
            Fotenie
            <span className="absolute left-1/2 -bottom-0.5 w-0 h-0.5 bg-[var(--color-accent-orange)] rounded transition-all duration-300 group-hover:w-1/2 group-hover:left-0"></span>
          </a>
          <a
            href="/eventy"
            className="relative px-2 py-1 text-secondary transition-colors duration-200 hover:text-[var(--color-accent-pink)]"
          >
            Eventy
            <span className="absolute left-1/2 -bottom-0.5 w-0 h-0.5 bg-[var(--color-secondary)] rounded transition-all duration-300 group-hover:w-1/2 group-hover:left-0"></span>
          </a>
          <a
            href="/galeria"
            className="relative px-2 py-1 text-secondary transition-colors duration-200 hover:text-[var(--color-accent-pink)]"
          >
            Galéria
            <span className="absolute left-1/2 -bottom-0.5 w-0 h-0.5 bg-[var(--color-accent-pink)] rounded transition-all duration-300 group-hover:w-1/2 group-hover:left-0"></span>
          </a>
          <a
            href="/contact"
            className="relative px-2 py-1 text-secondary transition-colors duration-200 hover:text-[var(--color-accent-pink)]"
          >
            Kontakt / Spolupráca
            <span className="absolute left-1/2 -bottom-0.5 w-0 h-0.5 bg-[var(--color-accent-pink)] rounded transition-all duration-300 group-hover:w-1/2 group-hover:left-0"></span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-[var(--color-secondary)] focus:outline-none"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`
          md:hidden transition-all duration-700 ease-in-out fixed inset-x-0 z-40 
          ${isOpen ? "max-h-[320px] opacity-100 shadow-xl" : "max-h-0 opacity-0 pointer-events-none"}
          border-t border-[var(--color-light-gray)] 
        `}
        style={{
          overflow: "hidden",
          borderBottomLeftRadius: "2rem",
          borderBottomRightRadius: "2rem",
          position: "relative",
        }}
      >
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
        <nav className="relative z-30 flex flex-col space-y-2 p-6 text-[var(--color-light-gray)] font-medium text-xl">
          <a href="/o-mne" className="px-2 py-1  text-secondary rounded transition-colors hover:text-[var(--color-accent-pink)]" onClick={toggleMenu}>
            O mne
          </a>
          <a href="/fotenie" className="px-2 py-1  text-secondary rounded transition-colors hover:text-[var(--color-accent-pink)]" onClick={toggleMenu}>
            Fotenie
          </a>
          <a href="/eventy" className="px-2 py-1  text-secondary rounded transition-colors hover:text-[var(--color-accent-pink)]" onClick={toggleMenu}>
            Eventy
          </a>
          <a href="/galeria" className="px-2 py-1  text-secondary rounded transition-colors hover:text-[var(--color-accent-pink)]" onClick={toggleMenu}>
            Galéria
          </a>
          <a href="/contact" className="px-2 py-1  text-secondary rounded transition-colors hover:text-[var(--color-accent-pink)]" onClick={toggleMenu}>
            Kontakt / Spolupráca
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;