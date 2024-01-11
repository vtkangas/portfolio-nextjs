import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div id={"projects"} className="relative grid gap-4 place-content-center min-h-full w-screen max-w-full bg-[#87fffb] text-gray-900 py-20 px-[5vw] overflow-hidden">
      <div className="grid grid-row gap-4 text-center">
        <h1 className="uppercase text-4xl lg:text-7xl text-white font-bold text-outlines drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">
          Projektit
        </h1>

        <p className="text text-base text-gray-800">
          Tässä muutamia projekteja, joita olen tehnyt opintojeni aikana 2020-2023.
        </p>
      </div>

      <div className="grid gap-8 place-content-center">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
