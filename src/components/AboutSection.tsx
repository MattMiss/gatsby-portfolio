import React from "react";
import { motion } from "framer-motion";
import {
  staggerVariants,
  slideInFromRightVariants,
  paragraphVariants,
  buttonVariants,
  imageVariants,
} from "../utils/animations";

const AboutSection: React.FC = () => (
    <motion.div
        className="w-full max-w-screen-lg px-4 py-16 flex flex-col md:flex-row items-center md:items-start md:space-x-12"
        variants={staggerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // Animate when 30% visible
    >
        {/* Image Column */}
        <motion.div
            className="flex-shrink-0"
            variants={imageVariants}
        >
        <img
            src="/images/matt-portrait.png"
            alt="Portrait of Matt"
            className="object-cover mb-4"
            width="250"
            height="250"
        />
        </motion.div>

        {/* Info Column */}
        <div className="text-center md:text-left flex-1">

            {/* Name Animation */}
            <motion.h1
                className="text-3xl text-blue-400"
                variants={slideInFromRightVariants}
            >
                Hi, I am
            </motion.h1>
            <motion.h1
                className="text-4xl text-gray-400"
                variants={slideInFromRightVariants}
            >
                Matt Miss
            </motion.h1>

            {/* Paragraph Animations */}
            <motion.p className="text-lg text-gray-400 mt-4" variants={paragraphVariants}>
                I’m a software developer passionate about creating intuitive and accessible
                applications that solve real-world problems. Specializing in React Native
                and web development, I enjoy turning complex challenges into elegant,
                user-friendly solutions.
            </motion.p>

            <motion.p className="text-lg text-gray-400 mt-4" variants={paragraphVariants}>
                Recently, I built a chore management app that helps users streamline their
                daily routines with interactive features. Check out my portfolio to see
                more of my work, or reach out — I’d love to connect!
            </motion.p>

            {/* Call-to-Action Buttons */}
            <motion.div
                className="flex justify-center md:justify-start gap-4 mt-6"
                variants={staggerVariants} // Staggering effect for buttons
            >
                <motion.a
                    href="/resume"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border border-blue-600 text-white hover:bg-blue-700"
                    variants={buttonVariants}
                >
                    View My Resume
                </motion.a>

                <motion.a
                    href="#projects"
                    className="px-6 py-3 border border-blue-600 text-white hover:bg-blue-700"
                    variants={buttonVariants}
                >
                    View My Projects
                </motion.a>

                <motion.a
                    href="#contact"
                    className="px-6 py-3 border border-blue-600 text-white hover:bg-blue-700"
                    variants={buttonVariants}
                >
                    Get in Touch
                </motion.a>
            </motion.div>
        </div>
    </motion.div>
);

export default AboutSection;
