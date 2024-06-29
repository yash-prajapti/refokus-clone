import React, { Suspense, lazy, useLayoutEffect, useState } from 'react';
import { preloadAssets } from '/src/utils/PreloadAssets';
import './About.css';
import Lazyloader from '../Lazyloader/Lazyloader';
import ComponentLoader from '../Lazyloader/ComponentLoader';
const Sec1 = lazy(() => import('./Sec1'))
const Sec2 = lazy(() => import('./Sec2'))
const Sec3 = lazy(() => import('./Sec3'))

function About() {
  // const [loading, setLoading] = useState(true);
  // useLayoutEffect(() => {
  //   const assets = {
  //     images: [
  //       // section 1 bg
  //       'about1-small.png',
  //       'about2-small.png',
  //       'about3-small.png',
  //       'about4-small.png',
  //       'about5-small.png',
  //       'about6-small.png',
  //       'about7-small.png',
  //     ],
  //     videos: [
  //     ],
  //   };
  //   preloadAssets(assets).then(() => {
  //     setLoading(false);
  //   }).catch((error) => {
  //     console.error('Failed to load assets:', error);
  //   });
  // }, []);
  return (
    <>
      <Lazyloader name={'about'}/>

      <div className="about-container">
        <Suspense fallback={<ComponentLoader />}>
          <Sec1 />
        </Suspense>
        <Suspense fallback={<ComponentLoader />}>
          <Sec2 />
        </Suspense>
        <Suspense fallback={<ComponentLoader />}>
          <Sec3 />
        </Suspense>
      </div>
    </>
  );
}

export default About;
