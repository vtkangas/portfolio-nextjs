export interface AboutData {
  description: string;
}


export interface Project {
  header: string;
  image: string;
  description: string;
  tech: string[];
  links: {
    label: string;
    url: string;
  }[];
}

export interface ContactLink {
  title: string,
  label: string;
  url: string;
}