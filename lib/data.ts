import { AboutData, Project, ContactLink } from "@/types/types";

export const aboutData: AboutData = {
  description: `Olen IT-tradenomi opiskelija Oulusta. Opiskelen viimeistä vuotta
  Mikkelin ammattikorkeakoulussa tietojenkäsittelyn tradenomiksi ja
  suoritan tutkintoa verkkototeutuksella Oulusta käsin. Tällä hetkellä
  osaamiseni pitää sisällään mm. seuraavia
  teknologioita: Typescript, React (Nextjs), HTML + CSS. Aikaisemman
  koulutukseni ansiosta minulla on myös Audiovisuaalista osaamista ja
  näkemystä, josta olen kokenut olevan hyötyä frontend -puolella.`,
};

export const projects: Project[] = [
  {
    header: "Movie database",
    image: "movieDb.png",
    description:
    "Elokuvatietokanta jonka tein Next.js:llä, Tailwind CSS:llä ja DaisyUI-komponenttikirjastolla. Backend puolella toimii MongoDB elokuvatietojen säilyttämiseen, Supabase käyttäjähallintaan ja TMDB-API kuvien hakemiseen.",
    tech: ["React (Next.js)", "TailwindCSS", "MongoDB", "Supabase"],
    links: [
      { label: "GitHub", url: "https://github.com/vtkangas/movie-database" },
    ],
  },
  {
    header: "Portfolio",
    image: "portfolio.png",
    description:
      "Responsiivinen portfoliosivusto parallaxi-skrollausyksityiskohdilla. Rakennettu käyttäen Next.js:ää ja Tailwind CSS:ää.",
    tech: ["React", "Nextjs", "Tailwin CSS", "DaisyUi", "Framer-motion"],
    links: [
      { label: "GitHub", url: "https://github.com/vtkangas/nextjs-portfolio" },
    ],
  },
  {
    header: "Endless Runner 2D",
    image: "runner2D.png",
    description:
      `Tein tämän pelin oppiakseni Unityn ja C# -perusteita. Tämä oli mielenkiintoinen projekti sillä tein myös pelin grafiikat itse. Palasin projektin pariin suorittaessani JAMK-ammattikorkeakoulun järjestämää "Music and Sound for Games" -kurssia ja lisäsin peliin myös musiikin.`,
    tech: ["C#", "Unity"],
    links: [{ label: "Video", url: "https://youtu.be/7hW23yvc6Uw" }],
  },
  {
    header: "Testing testing testing...",
    image: "testing.jpg",
    description:
      "Testiharjoitus, jossa pääsin tutustumaan testauksen perusteisiin käyttäen Robot Frameworkia end-to-end- ja savutestaukseen sekä Jest Frameworkia integraatio- ja yksikkötesteihin.",
    tech: ["Jest", "Robot framework"],
    links: [{ label: "Github", url: "https://github.com/vtkangas/Testing-with-Robot-Framework-and-Jest" }],
  },
];

export const contactLinks: ContactLink[] = [
  {
    title: "vtkangas@outlook.com",
    label: "vtkangas@outlook.com",
    url: "mailto:vtkangas@outlook.com",
  },
  {
    title: "linkedin.com/in/ville-kangas-2b4400260",
    label: "LinkedIn",
    url: "https://linkedin.com/in/ville-kangas-2b4400260",
  },
  {
    title: "github.com/vtkangas",
    label: "GitHub",
    url: "https://github.com/vtkangas",
  },
];
