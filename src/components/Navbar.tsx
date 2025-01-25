import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navbarVariants, menuVariants, linkHoverVariants } from "../utils/animations";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

    // Track scroll position to hide/reveal navbar
    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            console.log("Handle Scroll");
            if (window.scrollY > lastScrollY) {
                setIsScrolled(true);
                setTimeout(() => {
                    setIsOpen(false);
                }, 100);
            } else {
                setIsScrolled(false);
            }
            lastScrollY = window.scrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: 0 }}
            animate={{ y: isScrolled ? "-100%" : "0%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full z-50 bg-zinc-900 shadow-md"
        >
            <div className="w-full max-w-screen-lg mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                {/* Logo */}
                <a href="#about" className="text-gray-300 text-2xl font-medium">
                    <span>Matt</span>
                    <span className="text-blue-400">Miss</span>
                </a>

                {/* Hamburger Icon for Mobile */}
                <motion.button
                    className="block md:hidden text-gray-300 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <motion.path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                    />
                    </svg>
                </motion.button>

                {/* Desktop Navigation Links */}
                <ul className="hidden md:flex md:space-x-6">
                    {[
                    { name: "About", link: "#about" },
                    { name: "Skills", link: "#skills" },
                    { name: "Projects", link: "#projects" },
                    { name: "Contact", link: "#contact" },
                    { name: "Resume", link: "/resume", target: "_blank" },
                    ].map((item, index) => (
                    <motion.li
                        key={index}
                        className="text-gray-300 hover:text-blue-400 text-lg"
                        whileHover="hover"
                        initial="rest"
                        animate="rest"
                        variants={linkHoverVariants}
                    >
                        <a href={item.link} target={item.target || "_self"} className="py-2 px-4">
                        {item.name}
                        </a>
                    </motion.li>
                    ))}
                </ul>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.ul
                        className="md:hidden absolute top-16 left-0 w-full bg-zinc-900 shadow-lg rounded-md"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={menuVariants}
                    >
                        {[
                        { name: "About", link: "#about" },
                        { name: "Skills", link: "#skills" },
                        { name: "Projects", link: "#projects" },
                        { name: "Contact", link: "#contact" },
                        { name: "Resume", link: "/resume", target: "_blank" },
                        ].map((item, index) => (
                        <motion.li
                            key={index}
                            className="border-b border-gray-700 last:border-none"
                            whileHover="hover"
                            initial="rest"
                            animate="rest"
                            variants={linkHoverVariants}
                        >
                            <a href={item.link} target={item.target || "_self"} className="block py-4 px-6 text-lg text-gray-300 hover:text-blue-400">
                            {item.name}
                            </a>
                        </motion.li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
