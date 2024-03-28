"use client";
import HeroAbout from "./HeroAbout";
import HeroSlider from "./HeroSlider";

const Hero = () => {
  return (
    <main className="h-[100dvh] relative w-full m-auto py-10 lg:h-auto flex  items-center justify-centers">
      <HeroSlider />
      <HeroAbout />
    </main>
  );
};

export default Hero;
