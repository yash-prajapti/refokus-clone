import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Routing from "./utils/Routing";
import { Outlet } from "react-router-dom";
import './index.css'
import Mouseflw from "./Components/Mouse-follower/Mouseflw";

function App() {
 
  return (
    <div className="main-container bg-black ">
      <Mouseflw />
      <header>
        <Navbar />
      </header>
      <main>
        <Routing />
        <Outlet />
      </main>
    </div>
  );
}

export default App;
