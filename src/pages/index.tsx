import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image"

const IndexPage: React.FC = () => (
  <Layout>
    <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
      {/* Image */}
      <StaticImage 
          src="../images/matt-portrait-white-bg.jpg" 
          alt="A portrait of Matt" 
          placeholder="blurred"
          width={400}
          height={400}
          />
      {/* Intro Section */}
      <div className="text-center md:text-left">
        <h1 className="text-4xl font-bold text-gray-800">
          Hi, I'm Matt!
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          I’m a software developer specializing in React Native and web
          development. I focus on building user-friendly and accessible
          applications that solve real-world problems.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex justify-center md:justify-start gap-4 mt-6">
          <a
            href="/projects"
            className="px-6 py-3 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
          >
            View My Projects
          </a>
          <a
            href="/contact"
            className="px-6 py-3 bg-gray-100 text-gray-800 font-bold rounded hover:bg-gray-200"
          >
            Get in Touch
          </a>
        </div>

        {/* Link to About Me */}
        <p className="mt-4 text-gray-600">
          Want to know more about me?{" "}
          <a href="/about" className="text-blue-500 hover:underline">
            Learn More →
          </a>
        </p>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
