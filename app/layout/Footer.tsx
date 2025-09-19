import  Link  from "next/link";

const Footer: React.FC = () => {
  return (
    <div className="w-full">
      <footer className="max-w-7xl z-100 mx-auto px-6 py-8 flex flex-col items-center text-center">
        {/* Top section: logo + nav */}
        <div className="flex flex-col md:flex-row items-center md:justify-between w-full gap-6 md:gap-0">
          {/* Logo */}
          <Link href="/" className="text-5xl md:text-6xl font-monotype-corsiva cursor-pointertransition-colors">
          <h1 className="text-5xl md:text-6xl font-monotype-corsiva cursor-pointer text-neon-light-blue glow-neon-bronze hover:text-accent-pink transition-colors">
            Erik Gunár
          </h1>
          </Link>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-10 text-neon-bronze glow-neon-bronze font-medium text-lg md:text-xl">
            <Link href="/contact" className="hover:text-gray-300 transition-colors">Spolupráca</Link>
            <Link href="/fotenie" className="hover:text-gray-300 transition-colors">Fotenie</Link>
            <Link href="/eventy" className="hover:text-gray-300 transition-colors">Eventy</Link>
            <Link href="/galeria" className="hover:text-gray-300 transition-colors">Galéria</Link>
            <Link href="/contact" className="hover:text-gray-300 transition-colors">Kontakt</Link>
          </nav>
        </div>

        {/* Bottom section: copyright */}
        <p className="text-neon-light-blue text-xl md:text-2xl mt-8 md:mt-12">
          &copy; {new Date().getFullYear()} EG Photography. beta
        </p>
      </footer>
    </div>
  );
};

export default Footer;
