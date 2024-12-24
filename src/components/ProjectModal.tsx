import React from "react";
import { Project } from "../utils/types";

interface ProjectModalProps {
  project: Project;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project }) => (
  <div>
    <h2
      id={`${project.title}-modal-title`}
      className="text-2xl font-bold text-gray-800 mb-4"
    >
      {project.title}
    </h2>
    <p className="text-gray-600 mb-6">{project.overview}</p>

    {/* Features */}
    <div className="mb-4">
      <h3 className="font-semibold text-gray-800">Key Features</h3>
      <ul className="list-disc pl-5 text-gray-600">
        {project.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>

    {/* Technologies */}
    <div className="mb-4">
      <h3 className="font-semibold text-gray-800">Technologies Used</h3>
      <p className="text-gray-600">{project.technologies.join(", ")}</p>
    </div>

    {/* Links */}
    <div className="flex justify-between items-center mt-6">
      <a
        href={project.githubRepo}
        className="text-blue-500 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Code on GitHub
      </a>
      {project.liveDemo && (
        <a
          href={project.liveDemo}
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo
        </a>
      )}
    </div>
  </div>
);

export default ProjectModal;
