"use client";
import React, { useRef } from "react";
import newProjects from "@/projects.json";
import ProjectCard from "./ProjectCard";


import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-400vw",
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
  });

  return (
    <main ref={triggerRef}>
      <section
        ref={sectionRef}
        className="h-[100dvh]  w-[700vw] flex flex-row relative"
      >
        <article className=" h-[100dvh] bg-yellow-600 w-[100vw] flex items-center justify-center lg:items-end lg:justify-start">
          {/* <article className="flex justify-between h-[50dvh] items-center relative ">
            <div className="w-[25dvw] flex gap-3  justify-end items-center">
              <div className="h-[2px] rounded-full w-[30%] bg-white"></div>
              <p className="text-sm font-semibold">Lorem ipsum.</p>
            </div>
          </article>
          <article className="flex items-end gap-5">
            <div className="w-[25dvw] h-[25dvh] bg-[#130101] div"></div>
            <h1 className="text-5xl w-[40%] uppercase font-bold text-[#130101]">Personal Projects<span className="text-white">.</span></h1>
          </article> */}
          <p className="text-5xl lg:text-[200px]  uppercase font-bold  flex items-center justify-center">
            Projects<span className="text-white">.</span>
          </p>
        </article>
        {newProjects.map((project, i: number) => {
          const index = parseInt(project.index);

          return (
            <ProjectCard index={index} project={project} key={project.index} />
          );
        })}
        {/* <article className="hidden">
        {newProjects.map((project, i: number) => {
          const index = parseInt(project.index);

          return (
            <ProjectCard index={index} project={project} key={project.index} />
          );
        })}
        </article> */}
      </section>
    </main>
  );
};

export default Project;
