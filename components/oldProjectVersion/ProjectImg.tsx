import { Project } from "@/types";
import Link from "next/link";
import React from "react";
import Img from 'next/image'

interface ProjectImgProps {
  project: Project;
}

const ProjectImg = ({project}: ProjectImgProps) => {
  return (
    <Link className="lg:w-[65%] w-full" href={project.visit}>
      <Img
        width={500}
        height={500}
        className="object-cover rounded-md  w-full border-[1.5px] border-neutral-700 "
        src={project.img}
        alt="Principal image"
      />
    </Link>
  );
};

export default ProjectImg;
