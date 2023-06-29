import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const handleMenuClick = () => {
      setIsSidebarOpen((isOpen) => !isOpen);
    };
  
  return (
    <div className="flex flex-1 flex-col h-screen bg-gradient-to-r from-white via-pink-50 to-violet-100">
      <Header onMenuClick={handleMenuClick} isSidebarOpen={isSidebarOpen}  />
      <div className="flex flex-1">
      {isSidebarOpen && <Sidebar />}
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
