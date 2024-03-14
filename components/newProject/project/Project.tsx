"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import newProjects from "@/projects.json";
gsap.registerPlugin(ScrollTrigger);
import ProjectCard from "./ProjectCard";
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
        translateX: "-700vw",
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
    <div ref={triggerRef}>
      <div
        ref={sectionRef}
        className="h-[100vh] w-[800vw] flex flex-row relative"
      >
        <div className=" h-[100vh] w-[100vw] flex items-center justify-center">
          <p className="text-4xl font-semibold  flex items-center justify-center">
            Projects.
          </p>
        </div>
        {newProjects.map((project, i: number) => {
          const index = parseInt(project.index);

          return (
            <ProjectCard index={index} project={project} key={project.index} />
          );
        })}
      </div>
    </div>
  );
};

export default Project;
