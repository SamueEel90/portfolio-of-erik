import React from "react";
import ImageScrollerHomepage from "./components/ImageScrollerHomepage";
import SocialIconsDesktop from "../shared/components/SocialIconsDesktop";
import SocialIconsMobile from "../shared/components/SocialIconsMobile";
import PortfolioHighlights from "./components/PortfolioHighlights";
import PortfolioGrid from "./components/PortfolioGrid";
import { PortfolioItem, GridImage } from "../types/types";
import Hero from "./components/Hero";
import ReferencesSection from "../shared/components/ReferencesSection";

export default async function HomePage() {
  
  const highlights: PortfolioItem[] = [
  {
    href: "/galeria/family",
    src: "/pictures/family.jpg",
    title: "Rodinné Fotografovanie",
    font: "font-extralight",
  },
  {
    href: "/galeria/wedding",
    src: "/pictures/wedding.jpg",
    title: "Svadby",
    font: "font-extralight",
  },
  {
    href: "/galeria/sport",
    src: "/pictures/sport.jpg",
    title: "Športové Fotografovanie",
    font: "font-extralight",
  },
  {
    href: "/galeria/personal",
    src: "/pictures/personal.jpg",
    title: "Osobné Fotografovanie",
    font: "font-light",
  },
  ];

  const gridItems: GridImage[] = [
    {
      src: "/pictures/placeholder1.jpg",
      title: "Momenty",
      description: "Zachytené okamihy každodenného života",
    },
    {
      src: "/pictures/placeholder2.jpg",
      title: "Emócie",
      description: "Príbehy ukryté v pohľade",
    },
    {
      src: "/pictures/placeholder3.jpg",
      title: "Príroda",
      description: "Pokoj a krása prírodných scenérií",
    },
    {
      src: "/pictures/placeholder4.jpg",
      title: "Mestský Život",
      description: "Život v mestskom prostredí a jeho dynamika",
    },
    {
      src: "/pictures/placeholder5.jpg",
      title: "Cestovanie",
      description: "Objavovanie nových miest a kultúr",
    },
    {
      src: "/pictures/placeholder6.jpg",
      title: "Portréty",
      description: "Osobnosti zachytené v jedinečných portrétoch",
    },
    {
      src: "/pictures/placeholder7.jpg",
      title: "Nočná Obloha",
      description: "Krása hviezd a nočných scenérií",
    },
       {
      src: "/pictures/placeholder1.jpg",
      title: "Momenty",
      description: "Zachytené okamihy každodenného života",
    },
    {
      src: "/pictures/placeholder2.jpg",
      title: "Emócie",
      description: "Príbehy ukryté v pohľade",
    },
    {
      src: "/pictures/placeholder3.jpg",
      title: "Príroda",
      description: "Pokoj a krása prírodných scenérií",
    },
    {
      src: "/pictures/placeholder4.jpg",
      title: "Mestský Život",
      description: "Život v mestskom prostredí a jeho dynamika",
    },
    {
      src: "/pictures/placeholder5.jpg",
      title: "Cestovanie",
      description: "Objavovanie nových miest a kultúr",
    },
    {
      src: "/pictures/placeholder6.jpg",
      title: "Portréty",
      description: "Osobnosti zachytené v jedinečných portrétoch",
    },
    {
      src: "/pictures/placeholder7.jpg",
      title: "Nočná Obloha",
      description: "Krása hviezd a nočných scenérií",
    },
     {
      src: "/pictures/placeholder7.jpg",
      title: "Nočná Obloha",
      description: "Krása hviezd a nočných scenérií",
    },
  ];

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
     <Hero
  title="Erik Gunár"
  subtitle="Fotograf"
  imageSrc="/pictures/desktop1.jpg"        // default desktop
  imageSrcMobile="/pictures/phone1.jpg" // mobile override
  href="/o-mne"
  
/>

      <SocialIconsMobile />

      <div className="w-full md:max-w-11/12 mx-auto ">
        <PortfolioHighlights items={highlights} />
       
        <PortfolioGrid items={gridItems} />
         <ImageScrollerHomepage />
      </div>
      <ReferencesSection />
      <SocialIconsDesktop />
    </main>
  );
}