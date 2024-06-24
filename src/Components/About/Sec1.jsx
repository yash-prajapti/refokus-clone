import React, { useRef } from 'react'
import gsap from 'gsap/all';
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Sec1() {
    const gridItems = [
        { className: 'grid-item-1', img: 'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65493e5d5a9929dadf061012_Rectangle%252015013-p-500.png' },
        { className: 'grid-item-2', img: 'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65493e5d5a9929dadf061020_Rectangle%252015001-p-500.png' },
        { className: 'grid-item-3', img: 'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65493e5d5a9929dadf061026_Rectangle%252015000-p-500.png' },
        { className: 'grid-item-4', img: 'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65493e5d5a9929dadf06102f_Rectangle%252015007-p-500.png' },
        { className: 'grid-item-5', img: 'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65493e5d5a9929dadf061023_Rectangle%252015008%2520(1)-p-500.png' },
        { className: 'grid-item-6', img: 'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65493e5d5a9929dadf06102c_Rectangle%252015019-p-500.png' },
        { className: 'grid-item-7', img: 'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65493e5d5a9929dadf061016_Rectangle%252015009%2520(1)-p-500.png' },
    ]
    const containerRef = useRef(null);
    useGSAP(()=>{
        let image = gsap.utils.toArray(".grid-item-1, .grid-item-5, .grid-item-6");
        let image2 = gsap.utils.toArray(".grid-item-2, .grid-item-4, .grid-item-7, .grid-item-3");
        setTimeout(function() {
            gsap.fromTo(image, {xPercent: -150},{
                xPercent: 100,
                ease: "linear",
                scrollTrigger: {
                  trigger: containerRef.current,
                  scrub: true
                }, 
              });
            gsap.fromTo(image2, {xPercent: 150},{
                xPercent: -100,
                ease: "linear",
                scrollTrigger: {
                  trigger: containerRef.current,
                  scrub: true
                }, 
              });
        },2800)
    },[containerRef])
    return (
        <div className='sec-1-container' ref={containerRef}>
            <div className="sec-1-title">
                <h1>Forward <br />
                    –Thinking</h1>
            </div>
            <div className="img-grid-container">
                <div className="img-grid">
                    {gridItems.map((item, index) => (
                        <div className={'grid-item ' + item.className} key={index}>
                            <div className="item-img">
                                <img src={item.img} alt="" />
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Sec1