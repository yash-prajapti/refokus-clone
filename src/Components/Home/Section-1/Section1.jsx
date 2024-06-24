import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';


function Section1() {
  // For parallax effect BG
  const containerRef = useRef(null);
  const parallaxIt = (e, target, movement) => {
    const container = containerRef.current;
    const relX = e.pageX - container.offsetLeft;
    const relY = e.pageY - container.offsetTop;
    gsap.to(target, {
      duration: 1,
      x: ((relX - container.offsetWidth / 2) / container.offsetWidth) * movement,
      y: ((relY - container.offsetHeight / 2) / container.offsetHeight) * movement,
    });
  };
  const handleMouseMove = (e) => {
    // Apply parallax effect only if viewport width is greater than 775 pixels
    if (window.innerWidth > 775) {
      parallaxIt(e, ".sec1-bg-img", -30);
    }
  };
  useGSAP(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);
  return (
    <>
      {/* section 1 ------------------------------*/}
      <div className="hero-container" ref={containerRef}
        onMouseMove={handleMouseMove}>

        {/*parallax bg image */}
        <div className="sec1-bg-img" style={{ backgroundImage: `url('arrowbg.jpg')` }}>
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
              <h1>WE<br />MAKE<br />COOL<br />WEBSITES</h1>
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