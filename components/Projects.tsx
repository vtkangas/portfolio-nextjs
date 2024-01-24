import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div
      id={"projects"}
      className="relative flex place-content-center min-h-full w-screen max-w-full bg-rose-600/[0.9] text-white py-20 px-[5vw] overflow-hidden z-10"
    >        
      <div className="max-w-5xl flex flex-col gap-8">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="uppercase text-5xl sm:text-7xl text-white font-bold">
            Projektit
          </h1>

          <p>
            Tässä projekteja, joita olen tehnyt opintojeni aikana
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
