// App.js
import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { BiAtom } from "react-icons/bi";
import {
  AiOutlineCodepenCircle,
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
  AiOutlineBank,
  AiOutlineApartment,
  AiOutlineAreaChart,
} from "react-icons/ai";
const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="flex  mt-14 h-[75vh]">
      {/* Sidebar */}
      <div
        className={`transition-all duration-700 bg-gray-800 text-white ${
          isCollapsed ? "w-10" : "w-40"
        }`}
      >
        <button
          onClick={toggleSidebar}
          className="p-2 focus:outline-none bg-gray-700 hover:bg-gray-600"
        >
          {isCollapsed ? <AiOutlineArrowRight /> : <AiOutlineArrowLeft />}
        </button>
        <ul className="mt-4">
          <li
            className="flex items-center p-2 hover:bg-gray-700 cursor-pointer"
            title="Dashboard"
          >
            <span className="material-icons">
              <FaHome />
            </span>
            {!isCollapsed && <span className="ml-4">Home</span>}
          </li>
          <li
            className="flex items-center p-2 hover:bg-gray-700 cursor-pointer"
            title="Dashboard"
          >
            <span className="material-icons">
              <BiAtom />
            </span>
            {!isCollapsed && <span className="ml-4">Courses</span>}
          </li>
          <li
            className="flex items-center p-2 hover:bg-gray-700 cursor-pointer"
            title="Dashboard"
          >
            <span className="material-icons">
              <AiOutlineApartment />
            </span>
            {!isCollapsed && <span className="ml-4">Assignments</span>}
          </li>
          <li
            className="flex items-center p-2 hover:bg-gray-700 cursor-pointer"
            title="Dashboard"
          >
            <span className="material-icons">
              <AiOutlineBank />
            </span>
            {!isCollapsed && <span className="ml-4">Attendence</span>}
          </li>
          <li
            className="flex items-center p-2 hover:bg-gray-700 cursor-pointer"
            title="Dashboard"
          >
            <span className="material-icons">
              <AiOutlineAreaChart />
            </span>
            {!isCollapsed && <span className="ml-4">Fees</span>}
          </li>
          <li
            className="flex items-center p-2 hover:bg-gray-700 cursor-pointer"
            title="Dashboard"
          >
            <span className="material-icons">
              <AiOutlineCodepenCircle />
            </span>
            {!isCollapsed && <span className="ml-4">About</span>}
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-6">
        <h1 className="text-2xl">Main Content Area</h1>
      </div>
    </div>
  );
};

export default Sidebar;
