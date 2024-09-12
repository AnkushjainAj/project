import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center p-4">
      <div className="flex justify-center items-center space-x-4">
        <p>ClearSpot.ai © 2024. All Rights Reserved</p>
        <div className="flex space-x-2">
          <a href="#" className="text-white hover:text-gray-400">LinkedIn</a>
          <a href="#" className="text-white hover:text-gray-400">Facebook</a>
          <a href="#" className="text-white hover:text-gray-400">Twitter</a>
        </div>
      </div>
      <p>Call Us On (213) 748 - 5829</p>
    </footer>
  );
};

export default Footer;
