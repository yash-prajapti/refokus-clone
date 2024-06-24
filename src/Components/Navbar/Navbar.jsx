import React, { useState } from "react";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
import AnimaBtn from "../Button/AnimaBtn";
import { RxCross2 } from "react-icons/rx";
import { RiArrowDownDoubleLine } from "react-icons/ri";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const menubtn = () => {
    setMenu(!menu);
  };
  const disablearea = () => {
    setMenu(false);
  }

  if(menu){
    document.body.style.overflow = 'hidden'
  }else{
    document.body.style.overflow = 'auto'
  }
  const linkClick = () => {
    setTimeout(() => {
      setMenu(false)
    },300)
  }

  return (
    <div className="navbar-container" >
      <div className="disable-container" onClick={()=>disablearea()} style={menu?{top:0}:{top:'-100dvh'}}></div>
      <div className="nav-logo">
        <Link to="/">
          <img src="refokuslogo.svg" alt="Refokus" />
        </Link>
      </div>
      <div className="navbar" style={menu?{top:0}:{top:'-400px'}}>
        <nav>
          {[
            { name: "Home", to: "/" },
            { name: "Work", to: "/work" },
            { name: "About", to: "/about" },
            { name: "News", to: "/news" },
          ].map((item, index) => (
            <NavLink
              to={item.to}
              key={index}
              className={(e) =>
                e.isActive ? "nav-link active" : "" || "nav-link"
              }
              onClick={()=>linkClick()}
            >
              <div className="nav-link-text">{item.name}</div>
            </NavLink>
          ))}
        </nav>
      <AnimaBtn btnText={"Start a Project"} />
      </div>
      <button className="menu-btn" onClick={()=>menubtn()}>
        <div className="menu-btn-text" style={menu?{transform:'translateY(15px)'}:{transform:'translateY(-15px)'}}>
        <span>
          <RxCross2 />
        </span>
        <span>
          <RiArrowDownDoubleLine />
        </span>
        </div>
      </button>
    </div>
  );
}

export default Navbar;
