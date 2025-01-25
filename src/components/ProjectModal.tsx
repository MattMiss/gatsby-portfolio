import React, { useState } from "react";
import { EnhancedProject } from "../utils/types";
import { GatsbyImage } from "gatsby-plugin-image";

interface ProjectModalProps {
  project: EnhancedProject;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const imageGridData = project.imageGridData || [];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div
        className="bg-white rounded-lg shadow-lg w-11/12 max-w-4xl p-6 relative overflow-y-auto"
        style={{ maxHeight: "90vh" }}
      >
        {/* Close Button */}
        <button
          aria-label="Close"
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 focus:outline-none"
          onClick={onClose}
        >
          ✖
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{project.title}</h2>
        <p className="text-gray-600 mb-6">{project.overview}</p>

        {/* Features */}
        <div className="mb-4">
          <h3 className="font-medium text-gray-800">Key Features</h3>
          <ul className="list-disc pl-5 text-gray-600">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="mb-4">
          <h3 className="font-medium text-gray-800">Technologies Used</h3>
          <p className="text-gray-600">{project.technologies.join(", ")}</p>
        </div>

        {/* Image Grid */}
        {imageGridData.length > 0 && (
          <div className="mb-4">
            <h3 className="font-medium text-gray-800">Gallery</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
              {imageGridData.map((imageData, index) =>
                imageData ? (
                  <div
                    key={index}
                    className="overflow-hidden rounded-lg border border-gray-200 cursor-pointer"
                    onClick={() => setSelectedImage(index)}
                  >
                    <GatsbyImage
                      image={imageData}
                      alt={`${project.title} Gallery Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : null
              )}
            </div>
          </div>
        )}

        {/* Selected Image Display */}
        {selectedImage !== null && project.imageGridData?.[selectedImage] && (
          <div
            className="fixed inset-0 z-60 flex items-center justify-center bg-black bg-opacity-75"
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                setSelectedImage(null);
              }
            }}
            tabIndex={-1} // Allows the div to capture key events
          >
            <div className="relative">
              {/* Close Button */}
              <button
                aria-label="Close Larger Image"
                className="absolute top-3 right-3 bg-gray-800 text-white text-sm p-1 rounded-full hover:bg-gray-600 focus:outline-none shadow-md z-10"
                onClick={() => setSelectedImage(null)}
              >
                ✖
              </button>

              {/* Display the Image */}
              <GatsbyImage
                image={project.imageGridData[selectedImage]}
                alt={`Selected Image ${selectedImage + 1}`}
                className="max-w-full max-h-screen rounded-lg"
              />
            </div>
          </div>
)}

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
    </div>
  );
};

export default ProjectModal;
