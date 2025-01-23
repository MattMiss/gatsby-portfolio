import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="">
        <div className="container max-w-screen-lg mx-auto px-4">
            <div className="flex items-center justify-between h-16">
                {/* Logo */}
                <a href="#home" className="text-gray-300 text-2xl">
                    <span className="font-semibold">Matt</span><span>Miss</span>
                </a>

                {/* Hamburger Icon (Visible on small screens) */}
                <button
                    className="block md:hidden text-gray-300 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                        d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </button>

                {/* Navigation Links */}
                <ul
                    className={`md:flex md:space-x-4 absolute md:static top-16 left-0 w-full md:w-auto md:bg-transparent transition-all duration-300 ease-in-out ${
                    isOpen ? "block" : "hidden"
                    }`}
                >
                    <li className="border-b md:border-none">
                        <a href="#home" className="block text-xl text-gray-300 hover:text-blue-500 py-2 px-4">
                            About
                        </a>
                    </li>
                    <li className="border-b md:border-none">
                        <a href="#skills" className="block text-xl text-gray-300 hover:text-blue-500 py-2 px-4">
                            Skills
                        </a>
                    </li>
                    <li className="border-b md:border-none">
                        <a href="#projects" className="block text-xl text-gray-300 hover:text-blue-500 py-2 px-4">
                            Projects
                        </a>
                    </li>
                    <li className="border-b md:border-none">
                        <a href="#contact" className="block text-xl text-gray-300 hover:text-blue-500 py-2 px-4">
                            Contact
                        </a>
                    </li>
                    <li>
                        <a 
                            href="/resume" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="block text-xl text-gray-300 hover:text-blue-500 py-2 px-4"
                        >
                            Resume
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  );
};

export default Navbar;
