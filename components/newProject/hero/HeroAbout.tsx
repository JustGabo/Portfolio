"use client";

import HeroAboutHeader from "./HeroAboutHeader";
import HeroAboutContent from "./HeroAboutContent"

const HeroAbout = () => {
  

  return (
    <div id="welcome" className="flex flex-col w-[75%] lg:w-[65%] m-auto">
      <HeroAboutHeader/>
      <HeroAboutContent/>
    </div>
  );
};

export default HeroAbout;
