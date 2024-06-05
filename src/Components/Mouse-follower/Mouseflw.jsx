import React, { useEffect } from "react";
import gsap from "gsap/all";
import './ms.css'

function Mouseflw() {
    useEffect(() => {
        gsap.set(".flair", { xPercent: -50, yPercent: -50 });
        let xTo = gsap.quickTo(".flair", "x", { duration: 0.4, ease: "power3" }),
            yTo = gsap.quickTo(".flair", "y", { duration: 0.4, ease: "power3" });
        const handleMouseMove = (e) => {
          xTo(e.clientX);
          yTo(e.clientY);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => {
          window.removeEventListener("mousemove", handleMouseMove);
        };
      }, []);

  return <div className="flair flair--3"></div>;
}

export default Mouseflw;
