'use client';
import React from "react";
import Image from "next/image";
import ContactForm from "./components/ContactForm";
import InstagramImageScroller from "../shared/components/InstagramImageScroller";
import SocialIconsDesktop from "../shared/components/SocialIconsDesktop";

const Contact: React.FC = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row w-full max-w-6xl mx-auto px-4 mt-20 md:px-0 items-start md:items-center pt-10">
        
        {/* Left Side */}
        <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
          <div className="relative w-full h-64 md:h-[600px]">
            <Image
              src="/pictures/erkic.jpg"
              alt="Kontakt"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2">
          <ContactForm />
        </div>
        
      </section>
      <div className="flex justify-center mt-10">
        <SocialIconsDesktop />
      </div>
      
      <InstagramImageScroller />
    </>
  );
};

export default Contact;

