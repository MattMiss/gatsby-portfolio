// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'gatsby';

const Navbar: React.FC = () => (
  <nav className="bg-gray-800">
    <div className="container mx-auto px-4">
      <ul className="flex items-center justify-between h-16">
        <li>
          <Link to="/" className="text-white text-2xl font-semibold">
            Matt Miss
          </Link>
        </li>
        <div className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about/" className="text-white hover:text-gray-400">
              About
            </Link>
          </li>
          <li>
            <Link to="/projects/" className="text-white hover:text-gray-400">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact/" className="text-white hover:text-gray-400">
              Contact
            </Link>
          </li>
        </div>
      </ul>
    </div>
  </nav>
);

export default Navbar;
