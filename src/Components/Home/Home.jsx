import React, { Suspense, lazy, useEffect, useLayoutEffect, useState } from "react";
import "./Home.css";
import { preloadAssets } from '/src/utils/PreloadAssets';
import Lazyloader from "../Lazyloader/Lazyloader";
import ComponentLoader from "../Lazyloader/ComponentLoader";
const Section1 = lazy(() => import('./Section-1/Section1'))
const Section2 = lazy(() => import("./Section-2/Section2"))
const Section3 = lazy(() => import('./Section-3/Section3'))
const Section4 = lazy(() => import('./Section-4/Section4'))
const Section5 = lazy(() => import('./Section-5/Section5'))

function Home() {

  // For preload assets
  const [loading, setLoading] = useState(true);
  useLayoutEffect(() => {
    const assets = {
      images: [
        // section 1 bg
        'arrowbg.jpg',
      ],
      videos:[
      ],
    };
    preloadAssets(assets).then(() => {
      setLoading(!loading);
    }).catch((error) => {
      console.error('Failed to load assets:', error);
    });
  }, []);

  return (<>
    <Lazyloader name={'home'}
    // loadingState={loading} 
    />
    <div className="home-container">
      <Suspense fallback={<ComponentLoader />}>
        <Section1 />
      </Suspense>
      <Suspense fallback={<ComponentLoader />}>
        <Section2 />
      </Suspense>
      <Suspense fallback={<ComponentLoader />}>
        <Section3 />
      </Suspense>
      <Suspense fallback={<ComponentLoader />}>
        <Section4 />
      </Suspense>
      <Suspense fallback={<ComponentLoader />}>
        <Section5 />
      </Suspense>
    </div>
  </>
  );
}

export default Home;
