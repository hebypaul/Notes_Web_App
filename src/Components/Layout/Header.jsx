import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = ({ onMenuClick, isSidebarOpen }) => {
  return (
    <header className="flex justify-between items-center bg-white p-2 px-6 border-b border-gray-200 shadow-md ">
      <div>
        <button
          className="bg-white hover:bg-gray-100 text-black text-xl font-bold py-2 px-4 rounded-md"
          onClick={onMenuClick}
        >
          {isSidebarOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <div className="flex items-center">
        <img src="/NoteLogo.svg" alt="Logo" className="h-10 mr-1 rounded-lg" />
        <span className="text-3xl font-bold bg-gradient-to-r from-pink-800 to-violet-700 bg-clip-text text-transparent font-mono">
          Presume
        </span>
      </div>
      <div>
        <button className="bg-white hover:bg-gray-200 text-black text-lg font-bold py-2 px-4 rounded-md">
          Theme
        </button>
      </div>
    </header>
  );
};

export default Header;
