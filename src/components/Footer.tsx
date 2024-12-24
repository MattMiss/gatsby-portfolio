import React from "react";
import { FaGithub, FaLinkedin, FaYoutube, FaEnvelope } from "react-icons/fa";

const Footer: React.FC = () => (
  <footer className="bg-gray-800 text-white py-4">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
      {/* Branding */}
      <p className="text-sm">
        © {new Date().getFullYear()} Matthew Miss. All rights reserved.
      </p>
      {/* Social Links */}
      <div className="flex space-x-4">
      <a
          href="mailto:matt.w.miss@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
          className="text-white hover:text-gray-400 transition"
        >
          <FaEnvelope size={24} />
        </a>
        <a
          href="https://github.com/mattmiss"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-white hover:text-gray-400 transition"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://linkedin.com/in/metthew-miss"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-white hover:text-gray-400 transition"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://youtube.com/@codingandchords"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
          className="text-white hover:text-gray-400 transition"
        >
          <FaYoutube size={24} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
