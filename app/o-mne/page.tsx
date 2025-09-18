import React from "react";
import AboutPhoto from "./components/AboutPhoto";
import AboutText from "./components/AboutText";
import ReferencesSection from "../shared/components/ReferencesSection";
import InstagramImageScroller from "../shared/components/InstagramImageScroller";

const About: React.FC = () => (
  <>
    <main className="flex flex-col lg:flex-row items-start min-h-screen px-6 lg:pt-30 pt-10 pb-5 ">
      <AboutPhoto />
      <AboutText />
    </main>

    <hr className="border-gray-300 w-1/2 mx-auto md:w-5/6" />

    <ReferencesSection />
    <InstagramImageScroller />
  </>
);

export default About;
