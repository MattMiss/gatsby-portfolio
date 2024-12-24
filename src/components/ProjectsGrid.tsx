import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";
import { EnhancedProject } from "../utils/types";

interface ImageNode {
  relativePath: string;
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData;
  };
}

interface QueryResult {
  allFile: {
    nodes: ImageNode[];
  };
}

const ProjectsGrid: React.FC = () => {
  const [filter, setFilter] = useState<string>("All");

  // Query image data from `src/images/`
  const data: QueryResult = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        nodes {
          relativePath
          childImageSharp {
            gatsbyImageData(
              width: 640
              placeholder: BLURRED
              layout: CONSTRAINED
            )
          }
        }
      }
    }
  `);

  // Precompute enhanced projects with image data
  const enhancedProjects: EnhancedProject[] = projects.map((project) => {
    const imageNode = data.allFile.nodes.find(
      (node) => node.relativePath === project.imagePath
    );

    return {
      ...project,
      imageData: imageNode?.childImageSharp.gatsbyImageData, // Add the image data dynamically
    };
  });

  // Filter the precomputed projects based on the selected category
  const filteredProjects = enhancedProjects.filter((project) =>
    filter === "All" ? true : project.category === filter
  );

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Filter Buttons */}
      <div className="flex justify-center space-x-4 mb-8">
        {["All", "Mobile", "React Web", "PHP"].map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 font-bold rounded ${
              filter === category
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsGrid;
