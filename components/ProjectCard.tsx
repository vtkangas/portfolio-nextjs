import Image from "next/image";
import { Project } from "@/types/types";
import Link from "next/link";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <div className="card rounded-none h-auto max-w-sm bg-black text-white">
      <figure className="overflow-hidden w-full pt-8 px-4">
        <Image
          src={`/images/${project.image}`}
          width={0}
          height={0}
          sizes="100vh"
          style={{ width: "100%", height: "auto" }}
          alt={project.header}
        />
      </figure>

      <div className="card-body p-6">
        <h2 className="card-title">{project.header}</h2>
        <p className="text-sm">{project.description}</p>
        <ul className="flex flex-wrap gap-1 content-start justify-start h-fit mt-2">
          {project.tech.map((tech, techIndex) => (
            <li
              className="badge text-sm font-medium border-none text-center inline-block bg-indigo-400 text-white"
              key={techIndex}
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="card-actions grid grid-cols-2 mt-2">
          {project.links.map((link, linkIndex) => (
            <Link
              key={linkIndex}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn rounded-lg text-center text-sm text-indigo-800 bg-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
