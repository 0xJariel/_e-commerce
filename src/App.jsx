import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro_section/Intro";
import Highlights from "./components/highlights_section/Highlights";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="grid w-full ">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
