import React, { useRef } from 'react'
import { TweenMax } from 'gsap/gsap-core';
import { gsap } from 'gsap';


function Section1() {
    // For parallax effect BG
  const containerRef = useRef(null);
  const parallaxIt = (e, target, movement) => {
    const container = containerRef.current;
    const relX = e.pageX - container.offsetLeft;
    const relY = e.pageY - container.offsetTop;
    TweenMax.to(target, 1, {
      x:
        ((relX - container.offsetWidth / 2) / container.offsetWidth) * movement,
      y:
        ((relY - container.offsetHeight / 2) / container.offsetHeight) *
        movement,
    });
  };
  const handleMouseMove = (e) => {
    // parallaxIt(e, ".slide", -10);
    parallaxIt(e, ".sec1-bg-img", -30);
  };
  return (
    <>
    {/* section 1 ------------------------------*/}
    <div className="hero-container" ref={containerRef}
        onMouseMove={handleMouseMove}>

        {/*parallax bg image */}
        <div className="sec1-bg-img">  
          <div className="gradient-overlay"></div>
        </div>

          {/* Hero section */}
        <div className="hero-wrapper">
          <div className="container-grid"> {/* hero grid */}
            {Array.from(Array(56)).map((_, index) => (
              <div key={index} className={`item ${String.fromCharCode(97 + index)}`}></div>
            ))}
          </div>
          {/* Hero text details */}
          <div className="hero-text">
            <div className="text-left">
              <h1>WE<br/>MAKE<br/>COOL<br/>WEBSITES</h1>
            </div>
            <div className="text-right">
            <p className="c-text-1">Refokus is a forward-thinking web agency that combines <strong>Web Design</strong>, <strong>Webflow Development, and Creative Development</strong> to create cool websites that help brands position themselves as market leaders.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section1