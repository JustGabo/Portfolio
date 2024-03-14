"use client";
import {
  LucideArrowUpRightSquare,
  Github,
  Mouse,
} from "lucide-react";
import { Hint } from "@/components/hint";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import newProjects from "@/projectsNew.json";
gsap.registerPlugin(ScrollTrigger);
import Img from "next/image";

const ProjectFooter = () => {

    useGSAP(() => {
        const footerTl = gsap.timeline();
        
        ScrollTrigger.create({
          animation: footerTl,
          trigger: ".footer",
          start: "top top",
        });
    
        footerTl
          .from(".skills", {
            opacity: 0,
            xPercent: "-=20",
          })
          .to(".skills", {
            xPercent: "-=100",
            opacity: 0,
            duration: 1,
            delay: 1.1,
          });
    
        gsap.to(".section-1", {
          xPercent: -100,
          delay: 1.6,
          duration: 1,
          scrollTrigger: {
            trigger: ".footer",
            start: "top top",
          },
        });
    
        gsap.to(".section-2", {
          xPercent: 100,
          delay: 1.8,
          duration: 1,
          scrollTrigger: {
            trigger: ".footer",
            start: "top top",
          },
        });
        gsap.to(".section-3", {
          xPercent: "200",
          delay: 2.1,
          duration: 1,
          scrollTrigger: {
            trigger: ".footer",
            start: "top top",
          },
        });
        gsap.to(".section-4", {
          yPercent: 100,
          delay: 1.6,
          duration: 1,
          scrollTrigger: {
            trigger: ".footer",
            start: "top top",
          },
        });
    
       
      });

  return (
    <article className="flex relative items-center justify-center h-[100vh]">
      <div className="w-[100vw] absolute top-0 left-0 bg-[#130101]  z-0 h-[100vh] flex flex-col  justify-center">
        <div className="w-[90%] m-auto px-32  pt-16 flex flex-col gap-5 bg-[#130101c7]">
          <h5 className="text-yellow-500 text-sm select-none ">Get in touch</h5>
          <h3 className="text-white select-yellow text-4xl font-medium w-[70%]">
            There is no better time to hook-up with me and start your next
            project<span className="text-yellow-500 select-yellow">.</span>
          </h3>
          <p className="text-gray-400 select-yellow text-xs w-[60%] text-balance">
            Now is the opportune moment to connect with me and embark on your
            next digital journey together.
          </p>
          <div className="flex ml-3 items-center gap-5 ">
            <span className="h-8 w-[1px] rotate-45 bg-yellow-500"></span>
            <p className="text-white text-xs select-yellow">Let's talk</p>
          </div>
        </div>
        <div className="w-[90%] m-auto px-32  flex flex-col gap-3 ">
          <p className="text-[10px] text-gray-500">Join me in social media.</p>
          <div className="flex  text-xs  items-center gap-5 text-white">
            <span className="select-yellow">Github</span>
            <span className="h-[1px] w-7 bg-yellow-500 mt-[2px]"></span>
            <span className="select-yellow">Instagram</span>
            <span className="h-[1px] w-7 bg-yellow-500 mt-[2px]"></span>
            <span className="select-yellow">X</span>
            {/* <span className="h-[1px] w-7 bg-yellow-500 mt-[2px]"></span> */}
          </div>
        </div>
      </div>

      <div className="w-[100vw] absolute skills text-[#130101] z-10  top-0 left-0   h-[100vh] flex items-end p-2">
        <h2 className="w-[55%] text-8xl   font-semibold">
          Thank you for viewing<span className="text-white  h-min">.</span>
        </h2>
      </div>
      <div className="w-[100vw] flex flex-col h-[100vh] footer">
        <section className="flex-1 flex">
          <div className="w-[30%]  section-1  bg-yellow-600 flex items-center justify-center"></div>
          <div className="flex-1 section-2 bg-yellow-600 flex items-center justify-center"></div>
        </section>
        <section className="flex-1 flex">
          <div className="w-[60%] section-3 h-full  bg-yellow-600 flex items-center justify-center"></div>
          <div className="flex-1 section-4 h-full  bg-yellow-600 flex items-center justify-center"></div>
        </section>
      </div>
    </article>
  );
};

export default ProjectFooter;
