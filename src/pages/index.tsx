import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";

const IndexPage: React.FC = () => (
    <div className="flex flex-col min-h-screen bg-zinc-900 text-gray-300 w-full overflow-x-hidden">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow max-w-5xl mx-auto px-4 sm:px-6">
            <section id="about" className="py-8 w-full">
                <AboutSection />
            </section>
            <section id="skills" className="py-8 w-full">
                <SkillsSection />
            </section>
            <section id="projects" className="py-8 w-full">
                <ProjectsSection />
            </section>
            <section id="contact" className="py-8 w-full">
                <ContactSection />
            </section>
        </main>

        {/* Footer */}
        <Footer />
    </div>
);

export default IndexPage;
