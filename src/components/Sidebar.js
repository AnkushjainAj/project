import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
  return (
    <aside className="bg-gray-100 w-64 h-screen flex flex-col p-6">
      <ul className="flex-grow space-y-6">
        <li className="flex items-center space-x-3 text-gray-600 hover:text-blue-500 cursor-pointer">
          <span>📊</span> <span>Dashboard</span>
        </li>
        <li className="flex items-center space-x-3 text-gray-600 hover:text-blue-500 cursor-pointer">
          <span>🏗</span> <span>Sites</span>
        </li>
        <li className="flex items-center space-x-3 text-gray-600 hover:text-blue-500 cursor-pointer">
          <span>📝</span> <span>Inspections</span>
        </li>
        <li className="flex items-center space-x-3 text-gray-600 hover:text-blue-500 cursor-pointer">
          <span>🛠</span> <span>Maintenance</span>
        </li>
        <li className="flex items-center space-x-3 text-gray-600 hover:text-blue-500 cursor-pointer">
          <span>📑</span> <span>Reports</span>
        </li>
      </ul>

      <footer className="p-6  bg-gray-900 text-white text-sm mt-auto">
        <div className="mb-2">ClearSpot.ai</div>
        <div>Call Us On</div>
        <div>(213) 748 - 5829</div>

        {/* Social Media Icons */}
        <div className="mt-4 flex space-x-4">
          <a href="#" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href="#" aria-label="Facebook"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="#" aria-label="Twitter"><FontAwesomeIcon icon={faTwitter} /></a>
        </div>

        <p className="text-xs mt-4">
          Copyright 2024. All Rights Reserved
        </p>
      </footer>
    </aside>
  );
};

export default Sidebar;
