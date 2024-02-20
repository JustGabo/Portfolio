import ProjectsContent from "./ProjectsContent";

function Projects() {
  return (
    <div className="flex flex-col gap-20 text-neutral-200">
      <h2 className="text-4xl font-medium">Works</h2>
      <ProjectsContent/>
    </div>
  );
}

export default Projects;
