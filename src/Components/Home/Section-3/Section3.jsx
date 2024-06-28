import React, { useEffect } from 'react';
import AnimaBtn from '../../Button/AnimaBtn'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import SlideWork from './SlideWork';

gsap.registerPlugin(ScrollTrigger);
function Section3() {
  useGSAP(() => {
    function animateFrom(elem, direction = 1) {
      let y = direction * 100;
      elem.style.transform = `translateY(${y}px)`;
      elem.style.opacity = "1";
      gsap.fromTo(elem, { y, autoAlpha: 0 }, {
        duration: 2,
        y: 0,
        autoAlpha: 1,
        ease: "expo",
        overwrite: "auto"
      });
    }

    function hide(elem) {
      gsap.set(elem, { autoAlpha: 0 });
    }

    gsap.utils.toArray(".gs_reveal").forEach((elem) => {
      hide(elem);

      ScrollTrigger.create({
        trigger: elem,
        onEnter: () => { animateFrom(elem) },
        onEnterBack: () => { animateFrom(elem, -1) },
        onLeave: () => { hide(elem) }
      });
    });
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  const slideData = [{
    img1: 'aruitel1.jpeg',
    img1Small:'aruitel1-small.png',
    img2: 'aruitel2.jpeg',
    img2Small:'aruitel2-small.png',
    alt: 'aruitel',
    video: 'Arqitel project.mp4',
    videoPoster:'arqitel-poster.png',
    videoType: 'video/mp4',
    title: 'Concept, Design, 3D, Webflow+WebGL Development',
    bgColor: '#5354ee',
    bgImg: 'https://assets-global.website-files.com/6334198f239547f2fccd84c1/64c1cdf5425388ed4532f603_Arqitel%20Logo%20White.svg'
  }, {
    img1: 'cula1.png',
    img1Small:'cula1-small.png',
    img2: 'cula2.png',
    img2Small:'cula2-small.png',
    alt: 'cula',
    video: 'Cula.mp4',
    videoPoster:'cula-poster.png',
    videoType: 'video/mp4',
    title: 'Concept, Design, 3D, Webflow+WebGL Development',
    bgColor: '#4A576B',
    bgImg: 'https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b4127d91ec4fa9b1124008_Logo%20White%202.svg'
  }, {
    img1: 'webflow.png',
    img1Small:'webflow-small.png',
    img2: 'webflow2.png',
    img2Small:'webflow2-small.png',
    alt: 'webflow',
    video: 'webflow.mp4',
    videoPoster:'webflow-poster.png',
    videoType: 'video/mp4',
    title: 'Concept, Design, Webflow Development',
    bgColor: '#2226F3',
    bgImg: 'https://assets-global.website-files.com/6334198f239547f2fccd84c1/660191edcdb42d79ba8c23aa_Logo.svg'
  }, {
    img1: 'refokus1.jpg',
    img1Small:'refokus1-small.png',
    img2: 'refokus2.jpg',
    img2Small:'refokus2-small.png',
    alt: 'refokus',
    video: 'refokus3.mp4',
    videoPoster:'refokus-poster.png',
    videoType: 'video/mp4',
    title: 'Concept, Design, 3D, Webflow+WebGL Development, AI Integrations',
    bgColor: '#3E4365',
    bgImg: 'https://assets-global.website-files.com/6334198f239547f2fccd84c1/64cd6fe638241ed462f29f87_refokus-logo.png'
  }, {
    img1: 'maniv.png',
    img1Small:'maniv-small.png',
    img2: 'maniv2.png',
    img2Small:'maniv2-small.png',
    alt: 'maniv',
    video: 'maniv.mp4',
    videoPoster:'maniv-poster.png',
    videoType: 'video/mp4',
    title: 'Branding, Design, Webflow+GSAP Development',
    bgColor: '#2DCB76',
    bgImg: 'https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b2ca2282d921d99755eaf6_Logo%20White%201.svg'
  }, {
    img1: 'silvr.jpg',
    img1Small:'Silvr-small.png',
    img2: 'silvr2.jpg',
    img2Small:'Silvr2-small.png',
    alt: 'silvr',
    video: 'Silvr.mp4',
    videoPoster:'silvr2.jpg',
    videoType: 'video/mp4',
    title: 'Design, Webflow Development',
    bgColor: '#FC7548',
    bgImg: 'https://assets-global.website-files.com/6334198f239547f2fccd84c1/64868959b481181dd14c03a2_Silvr_logo_white.png'
  }]
  return (
    <div className='slides-container'>
      <div className="slide-list">

        {slideData.map((item, index) => (
          <SlideWork item={item} index={index} key={index}/>
        ))}
      </div>
      <div className="section3-btn">
        <AnimaBtn btnText={'View More Work'} />
      </div>
    </div>
  )
}

export default Section3