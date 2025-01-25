import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import AboutSection from './AboutSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="bg-zinc-900 flex flex-col min-h-screen">

        {/* Navbar */}
        <Navbar />
      
        {/* Main Content */}
        {/* <main className="flex-grow container mx-auto max-w-screen-lg px-4 py-8">{children}</main> */}
        <main className="flex-grow">
            <section id="home" className="py-16">
                <AboutSection />
            </section>
            <section id="projects" className="py-16">
                <ProjectsSection />
            </section>
            <section id="contact" className="py-16">
                <ContactSection />
            </section>
        </main>
      
        {/* Footer */}
        <Footer />
    </div>
);

export default Layout;