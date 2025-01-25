import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import {
  slideInFromRightVariants,
  fadeInFromBottom,
  staggerVariants,
} from "../utils/animations";

const ContactSection: React.FC = () => (
    <motion.div
        className="container mx-auto px-4 py-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // Triggers animation when 30% visible
    >
        {/* Header */}
        <div className="text-center">
        <h1 className="text-5xl text-blue-400 mb-4">Get in Touch</h1>
        <motion.p
            className="text-lg text-gray-400 mt-4"
            variants={slideInFromRightVariants}
        >
            Feel free to reach out via email or connect with me on social media.
        </motion.p>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col items-center mt-12">
        {/* Email Section */}
        <motion.div className="text-center mb-8" variants={slideInFromRightVariants}>
            <motion.h2
                className="text-2xl font-medium text-gray-300"
                variants={slideInFromRightVariants}
            >
                Email
            </motion.h2>
            <motion.a
                href="mailto:youremail@example.com"
                className="text-blue-500 hover:underline text-lg"
                variants={slideInFromRightVariants}
            >
                Matt.W.Miss@gmail.com
            </motion.a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
            className="flex space-x-6"
            variants={staggerVariants} // Stagger effect for social links
        >
            <motion.a
                href="https://github.com/mattmiss"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800 transition"
                aria-label="GitHub"
                variants={fadeInFromBottom}
            >
                <FaGithub size={50} className="text-green-600 hover:text-green-800" />
            </motion.a>

            <motion.a
                href="https://www.linkedin.com/in/matthew-miss/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800 transition"
                aria-label="LinkedIn"
                variants={fadeInFromBottom}
            >
                <FaLinkedin size={50} className="text-blue-600 hover:text-blue-800" />
            </motion.a>

            <motion.a
                href="https://www.youtube.com/@codingandchords"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800 transition"
                aria-label="YouTube"
                variants={fadeInFromBottom}
            >
                <FaYoutube size={50} className="text-red-600 hover:text-red-800" />
            </motion.a>
        </motion.div>
        </div>
    </motion.div>
);

export default ContactSection;
