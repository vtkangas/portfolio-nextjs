import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div className="z-10 absolute grid grid-row gap-4 place-content-center min-h-full w-full bg-[#87fffb] text-gray-900 text-4xl py-20 px-[5vw]">
      <div className="grid grid-row gap-4 text-center">
        <h1 className="relative uppercase text-4xl lg:text-7xl text-white font-bold text-shadow drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">
          Projects
        </h1>

        <p className="text text-base text-gray-800">
          Here are some projects I have done during my studies in 2020-2023.
        </p>
      </div>

      <div className="grid grid-row lg:grid-cols-3 gap-8 place-content-center">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
