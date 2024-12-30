import React, { useState } from "react";
import { EnhancedProject } from "../utils/types";
import ProjectModal from "./ProjectModal";
import { GatsbyImage } from "gatsby-plugin-image";

interface ProjectCardProps {
  project: EnhancedProject;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  // Function to determine the color of the pill based on category
  const getCategoryColor = (category: string): string => {
    switch (category) {
      case "Mobile":
        return "bg-blue-100 text-blue-800";
      case "React Web":
        return "bg-green-100 text-green-800";
      case "PHP":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="border border-zinc-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-slate-700 overflow-hidden">
      {/* Thumbnail with Hover Effect */}
      <div className="relative group">
        {project.imageData ? (
          <GatsbyImage
            image={project.imageData}
            alt={`${project.title} Thumbnail`}
            className="w-full h-40 object-cover"
          />
        ) : (
          <div className="w-full h-40 bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">Image Not Available</span>
          </div>
        )}
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md"
            onClick={() => setModalOpen(true)}
          >
            View Details
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="p-4 h-full">
        {/* Title and Description */}
        <div>
          <h3 className="text-lg font-semibold text-gray-300">{project.title}</h3>
          <p className="text-sm text-gray-400 mt-2">{project.tagline}</p>
        </div>

        {/* Category Pill */}
        <div className="mt-4">
          <span
            className={`px-3 py-1 text-xs font-medium rounded-full ${getCategoryColor(
              project.category
            )}`}
          >
            {project.category}
          </span>
        </div>
      </div>


      {/* Modal */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-labelledby={`${project.title}-modal-title`}
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={(e) => {
            if (e.target === e.currentTarget) setModalOpen(false);
          }}
        >
          <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-4xl p-6 relative overflow-y-auto">
            <ProjectModal project={project} onClose={() => setModalOpen(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
