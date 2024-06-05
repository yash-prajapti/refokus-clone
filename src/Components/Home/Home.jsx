import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import Lazyloader from "../Lazyloader/Lazyloader";
import { preloadAssets } from '/src/utils/PreloadAssets';
import Section1 from "./Section-1/Section1";
import Section2 from "./Section-2/Section2";
import Section3 from "./Section-3/Section3";

function Home() {

  // For preload assets
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const assets = {
      images: [
        // section 1 bg
        'arrowbg.jpg',

        // Section 3 slides images
        // slide 1
        'aruitel1.jpeg',
        'aruitel2.jpeg',
        // slide 2
        'cula1.png',
        'cula2.png',
        // slide 3
        'webflow.png',
        'webflow2.png',
        // slide 4
        'refokus1.jpg',
        'refokus2.jpg',
        // slide 5
        'maniv.png',
        'maniv2.png',
        // slide 6
        'silvr.jpg',
        'silvr2.jpg',
      ],
      videos: [
        // slide 1
        // 'Arqitel project.webm',
        // slide 2
        // 'Cula.mp4',
        // slide 3
        // 'webflow.mp4',
        // slide 4
        // 'refokus3.webm',
        // slide 5
        // 'maniv.mp4',
        // slide 6
        // 'Silvr.webm',
      ],
    };
    preloadAssets(assets).then(() => {
      setLoading(false);
    }).catch((error) => {
      console.error('Failed to load assets:', error);
    });
  }, []);

  return (<>
    <Lazyloader name={'home'} loadingState={loading} />

    <div className="home-container">
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  </>
  );
}

export default Home;
