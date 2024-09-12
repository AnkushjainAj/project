import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md flex justify-between items-center p-4">
      <div className="text-lg font-bold text-gray-700">
        ClearSpot.ai
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search"
          className="border rounded-full py-1 px-4 text-sm w-64"
        />
        <div className="flex items-center space-x-2">
          <img
            src="https://via.placeholder.com/40"
            alt="User Avatar"
            className="rounded-full w-10 h-10"
          />
          <div>
            <span className="font-medium">John Doe</span>
            <br />
            <span className="text-sm text-gray-500">General Manager</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
