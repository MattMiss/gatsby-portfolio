import React from "react";

const HomeSection: React.FC = () => (
    <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-start md:space-x-12">
        {/* Image Column */}
        <div className="flex-shrink-0">
            <img 
                src="/images/matt-portrait.png"
                alt="Protrait of Matt "
                className="object-cover"
                width="250"                
                height="250"
            />
        </div>

        {/* Info Column */}
        <div className="text-center md:text-left flex-1">
            <h1 className="text-4xl text-blue-400">Hi, I'm Matt!</h1>
            <p className="text-lg text-gray-400 mt-4">
                I’m a software developer passionate about creating intuitive and accessible applications that solve real-world problems. Specializing in React Native and web development, I enjoy turning complex challenges into elegant, user-friendly solutions.
            </p>
            <p className="text-lg text-gray-400 mt-4">
                Recently, I built a chore management app that helps users streamline their daily routines with interactive features. Check out my portfolio to see more of my work, or reach out — I’d love to connect!
            </p>

            {/* Call-to-Action Buttons */}
            <div className="flex justify-center md:justify-start gap-4 mt-6">
                <a
                    href="/resume" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-6 py-3 border border-blue-600 text-white hover:bg-blue-700"
                >
                    View My Resume
                </a>
                <a
                    href="#projects"
                    className="px-6 py-3 border border-blue-600 text-white hover:bg-blue-700"
                >
                    View My Projects
                </a>
                <a
                    href="#contact"
                    className="px-6 py-3 border border-blue-600 text-white hover:bg-blue-700"
                >
                    Get in Touch
                </a>
            </div>
        </div>
    </div>
);

export default HomeSection;
