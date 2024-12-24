import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    {/* Navbar */}
    <Navbar />
    
    {/* Main Content */}
    <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
    
    {/* Footer */}
    <Footer />
  </div>
);

export default Layout;