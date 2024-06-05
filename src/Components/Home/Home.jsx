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
        'arrowbg.png',

        // section 2 marquee
        'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275e12177716cb3f2ea_basf.svg',
        'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275c2fcf540272672ef_intenseeye.svg',
        'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275c2fcf540272672ef_intenseeye.svg',
        'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d27518bb52e4d642644e_bcgp.svg',
        'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d2756e8df24e52915c71_flowcode.svg',
        'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275e1d5aa08ccc379dd_ypo.svg',
        'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275909535ff431975cf_lavender.svg',
        'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d36963b956910ca67534_remind.svg',
        'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2ce14e6c85b010c2e1e3c_Logo%20White%201.svg',
        'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275a4f001b08a4e28bc_weglot.svg',
        'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d2754882567001f1ee80_spotify.svg',
        'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275999da7719dc1fe2c_haufe.svg',
        'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d2759c8b021207af521b_yahoo.svg',
        'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d27565c41bb608f7f7c0_rainfall.svg',
        'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275ff2309d9d743ec75_doxel.svg',
        'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d2755ba681134c9d9b5c_mural.svg',
        'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/661b2455cb60f1919ab48e20_Logo.svg',
        'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d2753d48394d8adeff14_rocket.svg',
        'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275f0442508aceaec02_accel.svg',

        // Section 3 slides images
        // slide 1
        'aruitel1.jpeg',
        'aruitel2.jpeg',
        'https://assets-global.website-files.com/6334198f239547f2fccd84c1/64c1cdf5425388ed4532f603_Arqitel%20Logo%20White.svg',
        // slide 2
        'cula1.png',
        'cula2.png',
        'https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b4127d91ec4fa9b1124008_Logo%20White%202.svg',
        // slide 3
        'webflow.png',
        'webflow2.png',
        'https://assets-global.website-files.com/6334198f239547f2fccd84c1/660191edcdb42d79ba8c23aa_Logo.svg',
        // slide 4
        'refokus1.jpg',
        'refokus2.jpg',
        'https://assets-global.website-files.com/6334198f239547f2fccd84c1/64cd6fe638241ed462f29f87_refokus-logo.png',
        // slide 5
        'maniv.png',
        'maniv2.png',
        'https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b2ca2282d921d99755eaf6_Logo%20White%201.svg',
        // slide 6
        'silvr.jpg',
        'silvr2.jpg',
        'https://assets-global.website-files.com/6334198f239547f2fccd84c1/64868959b481181dd14c03a2_Silvr_logo_white.png'
      ],
      videos: [
        // slide 1
        'Arqitel project.webm',
        // slide 2
        'Cula.mp4',
        // slide 3
        'webflow.mp4',
        // slide 4
        'refokus3.webm',
        // slide 5
        'maniv.mp4',
        // slide 6
        'Silvr.webm',
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
