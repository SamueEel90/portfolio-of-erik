import React from "react";
import InstagramImageScroller from "../shared/components/InstagramImageScroller";
import PhotoSectionGrid from "./components/PhotoSectionGrid";
import SocialIconsDesktop from "../shared/components/SocialIconsDesktop";
import ReferencesSection from "../shared/components/ReferencesSection";
import SocialIconsMobile from "../shared/components/SocialIconsMobile";

const PhotoPage: React.FC = () => {
  const services = [
    { title: "Svadieb", img: "/pictures/placeholder1.jpg" },
    { title: "Portrétov", img: "/pictures/placeholder2.jpg" },
    { title: "Reklamná fotografia", img: "/pictures/placeholder3.jpg" },
    { title: "Športových podujati", img: "/pictures/placeholder4.jpg" },
    { title: "Eventy a podujatia", img: "/pictures/placeholder5.jpg" },
    { title: "Prírodná a krajinná fotografia", img: "/pictures/placeholder6.jpg" },
  ];

  return (
    <main className="w-full mx-auto px-4 mt-20  my-16">
      <h2 className="text-3xl md:text-5xl text-secondary text-center mb-8">
        Venujem sa fotografovaniu:
      </h2>
      <p className="text-2xl text-center text-light-gray glow-pink">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dicta dolorem maxime quas velit, inventore, porro amet iusto sint quia eum quos , <br /> asperiores sed doloribus? Consectetur quidem autem exercitationem sed.</p>
      <PhotoSectionGrid services={services} />

      <div className="flex justify-center mt-10">
        <SocialIconsDesktop />
        <SocialIconsMobile />
      </div>
      <ReferencesSection />
      <InstagramImageScroller />
    </main>
  );
};

export default PhotoPage;
