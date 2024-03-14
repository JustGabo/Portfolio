"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const HeroSlider = () => {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(["#title-1", "#title-2", "#title-3"], {
      opacity: 0,
      y: "+=30",
      stagger: 0.4,
    })
      .to(["#title-1", "#title-2", "#title-3"], {
        opacity: 0,
        y: "-=30",
        // delay: 0.3,
        stagger: 0.4,
      })
      .to("#intro-slider", {
        xPercent: "-100",
        duration: 0.8,
      });
  });

  return (
    <section
      id="intro-slider"
      className="h-screen flex   p-10 bg-gray-50 absolute top-0 left-0 z-10 w-full"
    >
      <article className="flex flex-col h-full gap-10  justify-center   tracking-tight">
        <h2 id="title-1" className="lg:text-8xl text-4xl font-medium">
          Web
        </h2>
        <h2 id="title-2" className="lg:text-8xl text-4xl font-medium">
          Front-End
        </h2>
        <h2 id="title-3" className="lg:text-8xl text-4xl font-medium">
          Developer
        </h2>
      </article>
    </section>
  );
};

export default HeroSlider;
