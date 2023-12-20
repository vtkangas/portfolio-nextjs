import Image from 'next/image';
import { Project } from '@/types/types';
import Link from 'next/link';

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <div className='relative h-auto max-w-sm rounded-2xl border-solid border-2 border-black'>
      <div className='absolute top-0 -right-3 z-10 w-[102%] h-[103%] rounded-[2rem] rounded-br-3xl bg-black'/>
      <div className="card p-3 z-20 rounded-2xl border-solid border-2 border-base-100 h-full w-full bg-base-100 text-black">
        <figure className="overflow-hidden w-full">    
        <Image
          src={`/images/${project.image}`}
          width={500}
          height={500}        
          sizes="100vh"
          style={{ width: '100%', height: 'auto' }}
          alt={project.header}
        />
        </figure>

        <div className="card-body p-6">
          <h2 className="card-title text-3xl header">{project.header}</h2>
          <p className="text-base text">{project.description}</p>
          <ul >
            {project.tech.map((tech, techIndex) => (
              <li className="badge badge-neutral mr-2" key={techIndex}>{tech}</li>
            ))}
          </ul>
          
          <div className="card-actions justify-center">
            {project.links.map((link, linkIndex) => (
              <Link key={linkIndex} href={link.url} target="_blank" rel="noopener noreferrer">
                <button className="btn btn-primary">{link.label}</button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
