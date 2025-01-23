import React from 'react';
import { mySkills } from '../data/skills';

const SkillsSection: React.FC = () => (
    <div className="container mx-auto px-4 py-4">
        {/* Skills */}
        <h1 className="text-5xl text-blue-400 mb-8 text-center">Skills</h1>
        <div>
            {mySkills.map((category) => (
                <div key={category.type}>
                <h3 className="text-3xl text-gray-300 mb-2 py-4">
                    {category.type}
                </h3>
                <ul className="flex flex-wrap gap-4 mb-8">
                    {category.skills.map((skill, index) => (
                    <li key={index} className="text-xl text-blue-400 bg-gray-800 px-4 py-2">
                        {skill}
                    </li>
                    ))}
                </ul>
                </div>
            ))}
        </div>
    </div>
);

export default SkillsSection;
