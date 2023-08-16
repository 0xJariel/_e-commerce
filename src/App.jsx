import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Intro from "./Intro";
import Highlights from "./Highlights";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="grid w-full ">
      <Navbar />
      <Intro />
      <Highlights />
    </div>
  );
}

export default App;
