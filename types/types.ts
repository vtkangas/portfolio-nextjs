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

export interface NavLink {
  label: string;
  url: string;
}