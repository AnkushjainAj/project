import React from "react";

const MainContent = () => {
  return (
    <main className=" bg-white p-6 flex flex-row m-6">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <button className="bg-gray-200 hover:bg-gray-300 p-2 rounded-lg"> 
            &#x2190; 
          </button>
          <div className="flex space-x-4 items-center">
            <label className="flex items-center">
              <input type="radio" name="viewOption" className="mr-2" checked />
              Satellite
            </label>
            <label className="flex items-center">
              <input type="radio" name="viewOption" className="mr-2" />
              Thermal
            </label>
          </div>
        </div>
        {/* Image container */}
        <div className="relative">
          <img
            src="https://via.placeholder.com/800x700" 
            alt="Solar Panels"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>

      {/* Side Options Panel */}
      <div className="flex flex-col p-6 rounded-lg space-y-6">
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg space-y-6 ">
        <h3 className="text-lg font-bold">Anomalies</h3>
        {/* Anomalies legend */}
        <div className="space-y-2">
          <div className="flex items-center">
            <span className="w-4 h-4 bg-green-500 mr-2 rounded"></span> Low Severity
          </div>
          <div className="flex items-center">
            <span className="w-4 h-4 bg-yellow-500 mr-2 rounded"></span> Moderate Severity
          </div>
          <div className="flex items-center">
            <span className="w-4 h-4 bg-red-500 mr-2 rounded"></span> High Severity
          </div>
        </div>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg space-y-6">

        <h3 className="text-lg font-bold">Map Options</h3>
        {/* As-Built Layers */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span>Sunrays_Solar_Farm_IR_AsBuilt.tif</span>
            <input type="checkbox" />
          </div>
          <div className="flex items-center space-x-2">
            <span>Opacity</span>
            <input
              type="range"
              min="0"
              max="100"
              defaultValue="100"
              className="flex-1"
            />
          </div>

          <div className="flex justify-between items-center">
            <span>Sunrays_Solar_Farm_AsBuilt.tif</span>
            <input type="checkbox" />
          </div>
          <div className="flex items-center space-x-2">
            <span>Opacity</span>
            <input
              type="range"
              min="0"
              max="100"
              defaultValue="100"
              className="flex-1"
            />
          </div>
        </div>

        <h3 className="text-lg font-bold">Images</h3>
        {/* Image Options */}
        <div className="space-y-4">
          <select className="w-full border rounded p-2">
            <option value="Inferno">Inferno</option>
          </select>
          <button className="bg-blue-500 text-white py-2 rounded shadow-lg w-full">
            Update
          </button>
        </div>

        <h3 className="text-lg font-bold">Downloads</h3>
        {/* Downloads */}
        <button className="bg-blue-500 text-white py-2 rounded shadow-lg w-full">
          Download Report
        </button>
      </div>
      </div>
    </main>
  );
};

export default MainContent;
