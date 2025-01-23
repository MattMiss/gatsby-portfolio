import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomeSection from "../components/HomeSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";

const IndexPage: React.FC = () => (
  <div className="flex flex-col min-h-screen bg-zinc-900 text-gray-300">
    {/* Navbar */}
    <Navbar />

    {/* Main Content */}
    <main className="flex-grow max-w-5xl mx-auto">
        <section id="home" className="py-8">
            <HomeSection />
        </section>
        <section id="skills" className="py-8">
            <SkillsSection />
        </section>
        <section id="projects" className="py-8">
            <ProjectsSection />
        </section>
        <section id="contact" className="py-8">
            <ContactSection />
        </section>
    </main>

    {/* Footer */}
    <Footer />
  </div>
);

export default IndexPage;
