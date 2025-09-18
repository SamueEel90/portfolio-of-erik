import React from "react";
import Image from "next/image";


const AboutPhoto: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center mb-10 md:mb-0 mx-auto  lg:mx-0">
      <div className="relative w-full max-w-lg md:max-w-2xl lg:max-w-2xl h-[40rem] md:h-[36rem] lg:h-[42rem] lg:ml-40  overflow-hidden rounded-xl shadow-2xl border border-gray-500 transition-transform duration-500 hover:scale-105">
        <Image
          src="/pictures/ericekmock.jpg"
          alt="Portrait of the photographer"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 60vw"
        />
      </div>

  
    </div>
  );
};

export default AboutPhoto;