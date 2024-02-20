import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Project } from "@/types/index";

interface ProjectButtonsProps {
  project: Project;
}

const ProjectButtons = ({ project }: ProjectButtonsProps) => {
  return (
    <div className="flex flex-col w-full gap-2">
      <Button className="w-full text-yellow-400  text-xs bg-neutral-800 p-0  transition duration-300 hover:bg-neutral-800/50">
        <Link
          className=" w-full flex items-center justify-center h-full"
          href={project.github}
          target="_blank"
        >
          Code
        </Link>
      </Button>
      <Button className="w-full text-xs text-yellow-400 bg-neutral-800  transition duration-300 hover:bg-neutral-800/50">
        <Link
          className=" w-full flex items-center justify-center h-full"
          href={project.visit}
          target="_blank"
        >
          Visit
        </Link>
      </Button>
    </div>
  );
};

export default ProjectButtons;
