import React, { lazy } from "react";
import { Outlet } from "react-router-dom";
import './index.css'
import Footer from "./Components/Footer/Footer";
const Navbar = lazy(() => import('./Components/Navbar/Navbar'))
const Routing = lazy(() => import('./utils/Routing'))
const Mouseflw = lazy(() => import('./Components/Mouse-follower/Mouseflw'))

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
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
