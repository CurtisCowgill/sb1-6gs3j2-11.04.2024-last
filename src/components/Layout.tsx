import React, { useState, useEffect } from 'react';
import LeftNav from './LeftNav';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isNavOpen, setIsNavOpen] = useState(!isMobile);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile && !isNavOpen) {
        setIsNavOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isNavOpen]);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex h-screen overflow-hidden">
        <div className={`transition-all duration-300 ease-in-out ${
          isNavOpen ? 'w-64' : 'w-0 md:w-16'
        }`}>
          <LeftNav 
            isOpen={isNavOpen} 
            onToggle={() => setIsNavOpen(!isNavOpen)}
            isMobile={isMobile}
          />
        </div>
        <div className="flex-1 flex flex-col overflow-hidden">
          <Navbar onMenuClick={() => setIsNavOpen(!isNavOpen)} />
          <main className="flex-1 overflow-y-auto p-4 md:p-6">
            <div className="container mx-auto max-w-8xl">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;