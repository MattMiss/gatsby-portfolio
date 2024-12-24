import { IGatsbyImageData } from "gatsby-plugin-image";

export interface Project {
  title: string;
  tagline: string;
  imagePath: string;
  category: string;
  overview: string;
  features: string[];
  technologies: string[];
  githubRepo: string;
  liveDemo?: string | null;
}

export interface EnhancedProject extends Project {
  imageData?: IGatsbyImageData; 
}
