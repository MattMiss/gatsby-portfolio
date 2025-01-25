import React from "react";
import { motion } from "framer-motion";
import { mySkills } from "../data/skills";
import {
  staggerVariants,
  categoryTypeVariants,
  skillItemVariants,
} from "../utils/animations";

const SkillsSection: React.FC = () => (
  <div className="container mx-auto px-4 py-4">
    <h1 className="text-5xl text-blue-400 mb-8 text-center">Skills</h1>
    <div>
      {mySkills.map((category) => (
        // PARENT: handles staggering children
        <motion.div
          key={category.type}
          variants={staggerVariants}
          initial="hidden"
          whileInView="visible"
          // Only animate once, when ~30% of the element is in view
          viewport={{ once: true, amount: 0.3 }}
          className="mb-10"
        >
          {/* Category Title (Fade In, Slide Up) */}
          <motion.h3
            variants={categoryTypeVariants}
            className="text-3xl text-gray-300 mb-2 py-4"
          >
            {category.type}
          </motion.h3>

          {/* Wrap the ul in a motion.ul to stagger skill items */}
          <motion.ul
            variants={staggerVariants}
            className="flex flex-wrap gap-4 mb-8"
          >
            {category.skills.map((skill, index) => (
              <motion.li
                key={index}
                variants={skillItemVariants}
                className="text-xl text-blue-400 bg-gray-800 px-4 py-2"
              >
                {skill}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      ))}
    </div>
  </div>
);

export default SkillsSection;
