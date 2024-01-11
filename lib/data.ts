import { NavLink, Project } from "@/types/types";

export const projects: Project[] = [
  {
    header: "Portfolio",
    image: "beach.jpg",
    description:
      "Responsive portfolio site with neat parallax scrolling details. Built with Next.js and Tailwind CSS.",
    tech: ["React", "Nextjs", "Tailwin CSS", "DaisyUi", "Framer-motion"],
    links: [
      { label: "Website", url: "https://example.com/project2" },
      { label: "GitHub", url: "https://github.com/example/project1" },
    ],
  },
  {
    header: "Movie database",
    image: "movieDb.png",
    description:
      "Moviedatabase created with Nextjs, Tailwindcss and daisyUi component library. And for the backend: MongoDB for moviedata, supabase for user managment and tmdb-API for images.",
    tech: [
      "React (Next.js)",
      "TailwindCSS",
      "MongoDB",
      "Supabase",
    ],
    links: [
      { label: "Demo", url: "https://example.com/demo" },
      { label: "GitHub", url: "https://github.com/example/project1" },
    ],
  },
  {
    header: "Endless Runner 2D",
    image: "beach.jpg",
    description:
      "This is fun one. Created this simple endless runner game with Unity and C#. Did the graphics my self also. I made this game back in 2021 (I think) for learning some basics of unity. I returned to this project in the summer of 2023 when I made the music for the gameplay.",
    tech: ["C#", "Unity", ],
    links: [{ label: "Video", url: "https://example.com/project2" }],
  },
  {
    header: "Testing testing testing...",
    image: "beach.jpg",
    description:
      "Testing exercise where I got to know the basics of testing using Robot Framework for end 2 end and smoke -testing, as well as Jest Framework for integration and unit tests.",
    tech: ["Jest", "Robot framework"],
    links: [{ label: "Github", url: "https://github.com/example/project1" }],
  },
  {
    header: "Shopping List",
    image: "beach.jpg",
    description:
      "Classic React exercise with MaterialUi components. I did this in 2020 when I got to know the world of react for the first time.",
    tech: ["Javascript", "React", "MaterialUI"],
    links: [{ label: "Github", url: "https://example.com/project2" }],
  },
  // Add more projects as needed
];

export const links: NavLink[] = [
  {
    label: "Home",
    url: "#home",
  },
  {
    label: "About",
    url: "#about",
  },
  {
    label: "Projects",
    url: "#projects",
  },
  {
    label: "Contact",
    url: "#contact",
  },
];
