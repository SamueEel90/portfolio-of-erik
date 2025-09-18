import React from "react";
import SocialIconsMobile from "../../shared/components/SocialIconsMobile";
import SocialIconsDesktop from "@/app/shared/components/SocialIconsDesktop";

const AboutText: React.FC = () => {
  return (
    <div className="w-full flex flex-col p-4 px-6 md:px-25 space-y-12 text-center ">
      <section className="space-y-4  mx-auto md:mx-0">
        <p className="text-3xl text-secondary lg:text-left lg:max-w-2xl">
          Už je to viac ako 6 rokov odkedy som chytil do rúk svoj prvý fotoaparát – malý sivý Canon.
          Z hobby sa stala vášeň a neskôr aj práca, ktorá ma priviedla k fotografovaniu portrétov, svadieb a eventov.
          Som nesmierne vďačný, že mi ľudia dôverujú pri zachytávaní svojich dôležitých okamihov.
        </p>
        <hr className="border-gray-300 w-1/2 mx-auto md:mx-0 md:w-full" />
      </section>

      <section className="space-y-4  mx-auto md:mx-0">
        <p className="text-light-gray glow-pink text-2xl leading-relaxed lg:text-left lg:max-w-2xl">
          Mojím cieľom je zachytiť autentické momenty a emócie, ktoré robia každý príbeh jedinečným.
          Každá fotografia by mala rozprávať príbeh, ktorý vyvoláva spomienky a emócie aj po rokoch.
        </p>
        <hr className="border-gray-300 w-1/2 mx-auto md:mx-0 md:w-full" />
      </section>

      <div className="pt-4 flex flex-col items-center space-y-4">
        <a
          href="/contact"
          className="inline-block px-10 w-[300px] py-3 text-lg font-medium border hover:scale-110 border-gray-300 rounded-full text-secondary hover:bg-pink-accent hover:text-white transition-all duration-300"
        >
          Kontaktujte ma
        </a>
        <SocialIconsMobile />
        <SocialIconsDesktop />
      </div>
    </div>
  );
};

export default AboutText;
