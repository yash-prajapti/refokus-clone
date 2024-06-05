import React from 'react';
import AnimaBtn from '../../Button/AnimaBtn'

function Section3() {
  const slideData = [{
    img1: 'aruitel1.jpeg',
    img2: 'aruitel2.jpeg',
    alt: 'aruitel',
    video: 'Arqitel project.webm',
    videoType:'video/webm',
    title: 'Concept, Design, 3D, Webflow+WebGL Development',
    bgColor: '#5354ee',
    bgImg:'https://assets-global.website-files.com/6334198f239547f2fccd84c1/64c1cdf5425388ed4532f603_Arqitel%20Logo%20White.svg'
  },{
    img1: 'cula1.png',
    img2: 'cula2.png',
    alt: 'cula',
    video: 'Cula.mp4',
    videoType:'video/mp4',
    title: 'Concept, Design, 3D, Webflow+WebGL Development',
    bgColor: '#4A576B',
    bgImg:'https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b4127d91ec4fa9b1124008_Logo%20White%202.svg'
  },{
    img1: 'webflow.png',
    img2: 'webflow2.png',
    alt: 'webflow',
    video: 'webflow.mp4',
    videoType:'video/mp4',
    title: 'Concept, Design, Webflow Development',
    bgColor: '#2226F3',
    bgImg:'https://assets-global.website-files.com/6334198f239547f2fccd84c1/660191edcdb42d79ba8c23aa_Logo.svg'
  },{
    img1: 'refokus1.jpg',
    img2: 'refokus2.jpg',
    alt: 'refokus',
    video: 'refokus3.webm',
    videoType:'video/webm',
    title: 'Concept, Design, 3D, Webflow+WebGL Development, AI Integrations',
    bgColor: '#3E4365',
    bgImg:'https://assets-global.website-files.com/6334198f239547f2fccd84c1/64cd6fe638241ed462f29f87_refokus-logo.png'
  },{
    img1: 'maniv.png',
    img2: 'maniv2.png',
    alt: 'maniv',
    video: 'maniv.mp4',
    videoType:'video/mp4',
    title: 'Branding, Design, Webflow+GSAP Development',
    bgColor: '#2DCB76',
    bgImg:'https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b2ca2282d921d99755eaf6_Logo%20White%201.svg'
  },{
    img1: 'silvr.jpg',
    img2: 'silvr2.jpg',
    alt: 'silvr',
    video: 'Silvr.webm',
    videoType:'video/webm',
    title: 'Design, Webflow Development',
    bgColor: '#FC7548',
    bgImg:'https://assets-global.website-files.com/6334198f239547f2fccd84c1/64868959b481181dd14c03a2_Silvr_logo_white.png'
  }]
  return (
    <div className='slides-container'>
      <div className="slide-list">

        {slideData.map((item,index)=>(
        <div className="slide-item" key={index}>
          <div className="slide" style={{backgroundColor:item.bgColor,backgroundImage:`url(${item.bgImg})`}}>
            <div className="slides-flex">
              <div className="slide-left">
                <div className="slide-cc-01">
                  <img src={item.img1} alt={item.alt} loading='lazy'/>
                </div>
                <div className="slide-cc-02">
                  <img src={item.img2} alt={item.alt} loading='lazy'/>
                </div>
              </div>
              <div className="slide-right">
                <div className="slide-cc-03">
                  <div className="slide-video">
                  <div className="placeholder" style={{ backgroundColor: '#f0f0f0', height: '100%', width: '100%' }}></div>
                    <video muted autoPlay playsInline loop width="100%" loading='lazy'>
                      <source src={item.video} type={item.videoType} />
                      " Your browser does not support the video tag. "
                    </video>
                  </div>
                </div>
                <div className="slide-testimonial">
                  <div className="tl-title">
                    <p>{item.title}</p>
                  </div>
                  <div className="tl-desc">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In provident labore unde nesciunt magnam quam adipisci sint aliquid?</p>
                  </div>
                  <AnimaBtn btnText={'Visit Website'} />
                </div>
              </div>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Section3