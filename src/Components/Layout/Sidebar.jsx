import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="h-[calc(100vh-3.7rem)] w-64  bg-white border-r p-0 border-gray-300 shadow-md  rounded-sm z-10  ">
      <ul className="text-gray-700 font-bold text-sm ">
        <Link to="/">
        <li className="hover:bg-violet-50 hover:text-violet-700 cursor-pointer border-b border-gray-100 p-3 text-center">
         Dashboard
        </li>
        </Link>
        <Link to="/Notes">
        <li className="hover:bg-violet-50 hover:text-violet-700 cursor-pointer border-b border-gray-100 p-3 text-center">
          Notes
        </li>
        </Link>
        <Link to="/Todo">
        <li className="hover:bg-violet-50 hover:text-violet-700 cursor-pointer border-b border-gray-100 p-3 text-center">
          To Do
        </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
