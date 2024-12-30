import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage: React.FC = () => (
  <Layout>
    <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-start md:space-x-12">
      {/* Image Column */}
      <div className="flex-shrink-0">
        <StaticImage
          src="../images/matt-portrait.png"
          alt="A portrait of Matt"
          placeholder="blurred"
          width={250}
          height={250}
        />
      </div>

      {/* Info Column */}
      <div className="text-center md:text-left flex-1">
        <h1 className="text-4xl font-bold text-gray-300">Hi, I'm Matt!</h1>
        <p className="text-lg text-gray-400 mt-4">
          I’m a software developer passionate about creating intuitive and accessible applications that solve real-world problems. Specializing in React Native and web development, I enjoy turning complex challenges into elegant, user-friendly solutions.
        </p>
        <p className="text-lg text-gray-400 mt-4">
          Recently, I built a chore management app that helps users streamline their daily routines with interactive features. Check out my portfolio to see more of my work, or reach out — I’d love to connect!
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
      </div>
    </div>
  </Layout>
);

export default IndexPage;
