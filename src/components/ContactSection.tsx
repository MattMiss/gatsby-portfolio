import React from 'react';
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

const ContactSection: React.FC = () => (
    <div className="container mx-auto px-4 py-4">
        {/* Header */}
        <div className="text-center">
            <h1 className="text-5xl text-blue-400 mb-4">Get in Touch</h1>
            <p className="text-lg text-gray-400 mt-4">
                Feel free to reach out via email or connect with me on social media.
            </p>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col items-center mt-12">
            {/* Email */}
            <div className="text-center mb-8">
                <h2 className="text-2xl font-semibold text-gray-300">Email</h2>
                <a
                    href="mailto:youremail@example.com"
                    className="text-blue-500 hover:underline text-lg"
                >
                    Matt.W.Miss@gmail.com
                </a>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-6">
                <a
                    href="https://github.com/mattmiss"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-800 transition"
                    aria-label="GitHub"
                >
                    <FaGithub size={50} className="text-green-600 hover:text-green-800"/>
                </a>
                <a
                    href="https://www.linkedin.com/in/matthew-miss/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-800 transition"
                    aria-label="LinkedIn"
                >
                    <FaLinkedin size={50} className="text-blue-600 hover:text-blue-800"/>
                </a>
                <a
                    href="https://www.youtube.com/@codingandchords"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-800 transition"
                    aria-label="YouTube"
                >
                    <FaYoutube size={50} className="text-red-600 hover:text-red-800"/>
                </a>
            </div>
        </div>
    </div>
);

export default ContactSection;
