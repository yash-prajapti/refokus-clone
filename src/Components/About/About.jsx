import React from 'react';
import './About.css';
import Sec2 from './Sec2';
import Sec1 from './Sec1';
import Sec3 from './Sec3';
import Lazyloader from '../Lazyloader/Lazyloader';

function About() {
  
  

  return (
    <>
        <Lazyloader name={'about'}/>

    <div className="about-container">
      <Sec1 />
      <Sec2 />
      <Sec3 />
    </div>
    </>
  );
}

export default About;
