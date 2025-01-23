import React from "react";
import { Project } from "../utils/types";
//import ProjectModal from "./ProjectModal";
import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    // const [isModalOpen, setModalOpen] = useState<boolean>(false);

    return (
        <div className="flex flex-col md:flex-row gap-6 py-4">
            {/* Left Column: Thumbnail */}
            <div className="relative group md:w-5/12 w-full">
                <img 
                src={`/images/${project.imagePath}`}
                alt="Project Thumbnail"
                className="w-full h-auto"
                />
            </div>

            {/* Right Column: Info */}
            <div className="flex flex-col justify-between md:w-7/12 w-full">
                {/* Title and Tagline */}
                <div>
                    <h3 className="text-4xl text-gray-300 mb-2">{project.title}</h3>

                    {/* Made With */}
                    <div className="mb-4">
                        <span className="text-gray-300 font-semibold">Made With: </span>
                        <span className="text-blue-400">{project.technologies.join(", ")}</span>
                    </div>

                    {/* Features */}
                    {/* <p className="text-md font-semibold text-gray-300">Features:</p>
                    <ul className="list-disc list-inside text-sm text-gray-400 mb-4">
                        {project.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul> */}

                    {/* Overview */}
                    <p className="text-md text-gray-400 mb-4">{project.overview}</p>

                    <p className="text-md font-semibold text-gray-300">Key Challenges:</p>
                    <ul className="list-disc list-inside text-sm text-gray-400 mb-4">
                        {project.challenges.map((item, index) => (
                            <li key={index}><span className="font-semibold text-blue-400">{item.challenge}: </span>{item.solution}</li>
                        ))}
                    </ul>
                </div>

                {/* GitHub Button */}
                <a
                    href={project.githubRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-blue-600 text-white hover:bg-blue-700 transition self-start"
                    >
                    <FaGithub className="mr-2" /> Code
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
