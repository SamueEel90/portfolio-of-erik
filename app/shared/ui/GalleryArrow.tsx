import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const GalleryArrow = () => {
  return (
    <>
      <Link
          href="/galeria/dd"
          className="absolute top-4 right-4 bg-white/60 hover:bg-white text-dark-gray px-3 py-2 rounded-full shadow-md flex items-center space-x-1 transition"
        >
          <span className="text-md text-dark-gray font-medium">Viac</span>
          <ArrowUpRight className="w-6 h-6 text-dark-gray" />
        </Link>
    </>

  );
};

export default GalleryArrow;