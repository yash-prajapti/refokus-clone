import React, { Suspense, lazy, useLayoutEffect, useState } from 'react'
import { preloadAssets } from '/src/utils/PreloadAssets';
import '../Home/Home.css'
import './Work.css'
import Lazyloader from '../Lazyloader/Lazyloader'
const Wsection1 = lazy(() => import('./Section-1/Wsection1'))
const Section2 = lazy(() => import('../Home/Section-2/Section2'))
const Products = lazy(() => import('./Section-2/Products'))
const Section3 = lazy(() => import('./Section-3/Section3'))
import ComponentLoader from '../Lazyloader/ComponentLoader'

function Work() {
  const [loading, setLoading] = useState(true);
  useLayoutEffect(() => {
    const assets = {
      images: [
        // section 1 bg
        'w1-small.png',
        'w2-small.png',
        'w3-small.png',
        'w4-small.png',
        'w5-small.png',
        'w6-small.png',
      ],
      videos: [
      ],
    };
    preloadAssets(assets).then(() => {
      setLoading(false);
    }).catch((error) => {
      console.error('Failed to load assets:', error);
    });
  }, []);
  return (
    <>
      <Lazyloader name={'work'} loadingState={loading} />
      <Suspense fallback={<ComponentLoader />}>
        <Wsection1 />
      </Suspense>
      <Suspense fallback={<ComponentLoader />}>
        {/* Imported marquee from Home */}
        <Section2 />
      </Suspense>
      <Suspense fallback={<ComponentLoader />}>
        <Products />
      </Suspense>
      <Suspense fallback={<ComponentLoader />}>
        <Section3 />
      </Suspense>
    </>
  )
}

export default Work