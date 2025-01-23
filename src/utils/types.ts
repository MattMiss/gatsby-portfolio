import { IGatsbyImageData } from "gatsby-plugin-image";

export interface Project {
  title: string;
  imagePath: string;
  overview: string;
  features: string[];
  challenges: Challenges[];
  technologies: string[];
  githubRepo: string;
  liveDemo?: string | null;
  imageGrid?: string[];
}

export interface Challenges {
    challenge: string,
    solution: string
}

export interface EnhancedProject extends Project {
  imageData?: IGatsbyImageData;
  imageGridData?: (IGatsbyImageData | null)[]; // Allow null values
}

export interface MySkills {
    type: string;
    skills: string[];
}
