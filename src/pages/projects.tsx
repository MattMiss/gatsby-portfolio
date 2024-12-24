import React from "react";
import Layout from "../components/Layout";
import ProjectsGrid from "../components/ProjectsGrid";

const ProjectsPage: React.FC = () => (
  <Layout>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">My Projects</h1>
      <p className="text-lg mb-6">
        Here are some of my projects. Click on any project to learn more about
        it.
      </p>
      <ProjectsGrid />
    </div>
  </Layout>
);

export default ProjectsPage;
