import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
// import Footer from "./components/Footer";

function App() {
  return (
    <div className="h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main content section */}
      <div className="flex flex-1">
        <Sidebar />
        <MainContent />
      </div>


    </div>
  );
}

export default App;
