import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {

  const [showBanner, setShowBanner] = React.useState(true);

  return (
    <div className="bg-zinc-900 flex flex-col min-h-screen">
      
      {/* Work in Progress Banner */}
      {showBanner && (
        <div className="bg-blue-50 border-b border-blue-300 text-blue-700 text-sm text-center py-2 shadow-sm relative">
          🚧 This site is a work in progress. Thank you for your patience! 🚧
          <button
            className="absolute right-4 top-2 text-yellow-700 hover:text-yellow-900 focus:outline-none"
            onClick={() => setShowBanner(false)}
          >
            ✖
          </button>
        </div>
      )}

      {/* Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <main className="flex-grow container mx-auto max-w-screen-lg px-4 py-8">{children}</main>
      
      {/* Footer */}
      <Footer />
    </div>
)};

export default Layout;