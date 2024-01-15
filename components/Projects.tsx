import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div
      id={"projects"}
      className="relative flex place-content-center min-h-full w-screen max-w-full bg-[#1ef4a6] text-gray-900 py-20 px-[5vw] overflow-hidden"
    >
      <div className="max-w-5xl flex flex-col gap-8">
        <div className="flex flex-col gap-4 text-center">
          <h1 className="uppercase text-4xl sm:text-5xl text-white font-bold text-outlines drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">
            Projektit
          </h1>

          <p>
            Tässä muutamia projekteja, joita olen tehnyt opintojeni aikana
            2020-2023.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 place-content-center">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
