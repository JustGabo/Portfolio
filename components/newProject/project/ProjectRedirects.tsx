import React from "react";
import { Hint } from "@/components/hint";
import Link from "next/link";
import { LucideArrowUpRightSquare, Github} from "lucide-react";
import { Project } from "@/types";

interface ProjectRedirectsProps{
    project: Project
}


const ProjectRedirects:React.FC<ProjectRedirectsProps> = ({project}) => {
  return (
    <div className="flex items-center gap-3 ">
      <Hint label="View Website">
        <button className=" font-medium text-xs p-0 lg:text-sm   hover:bg-transparent  transition-all bg-transparent duration-500">
          <Link href={project.visit} target="_blank">
            <LucideArrowUpRightSquare className="lg:w-5 lg:h-5 w-7 h-7  text-yellow-600 hover:text-yellow-700 transition-all" />
          </Link>
        </button>
      </Hint>
      <Hint label="View Code">
        <button className="bg-transparent p-0 hover:bg-transparent">
          <Link href={project.github} target="_blank">
            <Github className="lg:w-5 lg:h-5 w-7 h-7 text-yellow-600 hover:text-yellow-700 transition-all" />
          </Link>
        </button>
      </Hint>
    </div>
  );
};

export default ProjectRedirects;
